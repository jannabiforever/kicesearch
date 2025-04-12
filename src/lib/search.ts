// import type { Category, Point, Year } from "$lib/problem";
import { MEILISEARCH_URL, MEILISEARCH_API_KEY } from "$env/static/private";
import { MeiliSearch } from "meilisearch";

const getMSClient = () => {
    let client = new MeiliSearch({
        host: MEILISEARCH_URL,
        apiKey: MEILISEARCH_API_KEY,
    });

    return client.index("kice_problems");
};
