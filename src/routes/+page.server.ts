import { MeiliSearch } from "meilisearch";
import { MEILI_HTTP_ADDR, MEILI_MASTER_KEY } from "$env/static/private";
import type { PageServerLoad } from "./$types";
import {
    CATEGORIES,
    POINTS,
    YEARS,
    type Category,
    type Point,
    type Year,
} from "$lib/problem";

const getMeiliSearchInstance = async () => {
    let client = new MeiliSearch({
        host: MEILI_HTTP_ADDR,
        apiKey: MEILI_MASTER_KEY,
    });

    let instance = client.index("kice_problems");

    return instance;
};

export const load: PageServerLoad = async ({ url }) => {
    const query = url.searchParams.get("query");
    const years = url.searchParams.getAll("year");
    const categories = url.searchParams.getAll("category");
    const points = url.searchParams.getAll("point");

    if (query !== null) {
        let msInstance = await getMeiliSearchInstance();
        let filterString = buildMSFilterString(years, categories, points);

        let result = await msInstance.search(query, {
            filter: filterString,
        });

        return {
            result: result.hits,
        };
    } else {
        return {
            result: [],
        };
    }
};

function validateYearString(year: string) {
    if (!YEARS.includes(Number(year) as Year)) {
        throw Error(`Given query year = ${year} is not valid!`);
    }
}

function validateCategoryString(category: string) {
    if (!CATEGORIES.includes(category as Category)) {
        throw Error(`Given query category = ${category} is not valid!`);
    }
}

function validatePointString(point: string) {
    if (!POINTS.includes(point as Point)) {
        throw Error(`Given query point = ${point} is not valid!`);
    }
}

function buildMSFilterString(
    years: string[],
    categories: string[],
    points: string[]
): string {
    let yearFilter = years
        .map((year) => {
            validateYearString(year);
            return `year = ${year}`;
        })
        .join(" OR ");
    let categoryFilter = categories
        .map((category) => {
            validateCategoryString(category);
            return `category = ${category}`;
        })
        .join(" OR ");
    let pointFilter = points
        .map((point) => {
            validatePointString(point);
            return `point = ${point}`;
        })
        .join(" OR ");

    return [yearFilter, categoryFilter, pointFilter]
        .filter(Boolean)
        .join(" AND ");
}
