import type { Category, Point, Year } from "./problem";

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
