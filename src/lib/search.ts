import type { Category, Year } from "$lib/problem";

export class SearchQuery {
    query: string;
    year_option: Year[];
    category_option: Category[];

    constructor(query: string) {
        this.query = query;
        this.year_option = [];
        this.category_option = [];
    }
}

export class SearchResult {
    // TODO: add properties.
}

export const handleSearchRequest = async (searchQuery: SearchQuery) => {
    return SearchResult;
};
