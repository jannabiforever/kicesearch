type category = "수학1" | "수학2" | "미적분" | "확률과 통계" | "기하";
type year = "2025학년도(2024년시행)" | "2024학년도(2023년시행)" | "2023학년도(2022년시행)" | "2022학년도(2021년시행)";

export const ALLOWED_YEARS: Map<number, year> = new Map(
    [
        [2025, "2025학년도(2024년시행)"], 
        [2024, "2024학년도(2023년시행)"],
        [2023, "2023학년도(2022년시행)"],
        [2022, "2022학년도(2021년시행)"]
    ]
)

export const CATEGORIES = ["수학1", "수학2", "미적분", "확률과 통계", "기하"]

export class SearchQuery {
    query: string;
    year_option: year[];
    category_option: category[];

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
}