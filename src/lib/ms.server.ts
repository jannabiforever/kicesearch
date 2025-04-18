import { MeiliSearch } from "meilisearch";
import { MEILI_HTTP_ADDR, MEILI_MASTER_KEY } from "$env/static/private";

export const getMeiliSearchInstance = async () => {
    let client = new MeiliSearch({
        host: MEILI_HTTP_ADDR,
        apiKey: MEILI_MASTER_KEY,
    });

    let instance = client.index("kice_problems");

    return instance;
};

export const dumpMeiliSearch = async () => {
    let client = new MeiliSearch({
        host: MEILI_HTTP_ADDR,
        apiKey: MEILI_MASTER_KEY,
    });

    await client.createDump();
};
