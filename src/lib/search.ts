import type { Category, Point, Year } from "$lib/problem";

export class SearchQuery {
    query: string;
    yearOptions: Year[];
    categoryOptions: Category[];
    pointOptions: Point[];

    constructor(
        query: string,
        yearOptions: Year[],
        categoryOptions: Category[],
        pointOptions: Point[]
    ) {
        this.query = query;
        this.yearOptions = yearOptions;
        this.categoryOptions = categoryOptions;
        this.pointOptions = pointOptions;
    }
}

export class SearchResult {
    // TODO: add properties.
}

export const handleSearchRequest = async (searchQuery: SearchQuery) => {
    return SearchResult;
};
