import { MeiliSearch } from "meilisearch";
import { MEILISEARCH_URL, MEILISEARCH_API_KEY } from "$env/static/private";
import type { PageServerLoad } from "./$types";

const getMeiliSearchInstance = () => {
    let client = new MeiliSearch({
        host: MEILISEARCH_URL,
        apiKey: MEILISEARCH_API_KEY,
    });

    return client.index("kice_problems");
};

export const load: PageServerLoad = async ({ url }) => {
    const query = url.searchParams.get("query");
    const years = url.searchParams.getAll("year");
    const categories = url.searchParams.getAll("category");
    const points = url.searchParams.getAll("point");

    let msInstance = getMeiliSearchInstance();
    let result = await msInstance.search(query);

    return {
        result,
    };
};
