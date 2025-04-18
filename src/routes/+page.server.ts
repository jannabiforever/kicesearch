import type { PageServerLoad } from "./$types";
import { getMeiliSearchInstance } from "$lib/ms.server";

export const load: PageServerLoad = async ({ url }) => {
    const query = url.searchParams.get("query");

    const years = url.searchParams.getAll("year");
    const months = url.searchParams.getAll("month");
    const categories = url.searchParams.getAll("category");
    const points = url.searchParams.getAll("point");

    if (query !== null) {
        let msInstance = await getMeiliSearchInstance();
        let filterString = buildMSFilters([
            ["year", years],
            ["month", months],
            ["category", categories],
            ["point", points],
        ]);

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

function buildMSFilters(filters: [string, string[]][]): string {
    return filters
        .map(([index, options]) => {
            return buildMSFilter(index, options);
        })
        .filter(Boolean)
        .join(" AND ");
}

function buildMSFilter(
    filterable_index_name: string,
    options: string[]
): string {
    return options
        .map((option) => {
            return `${filterable_index_name} = ${option}`;
        })
        .join(" OR ");
}
