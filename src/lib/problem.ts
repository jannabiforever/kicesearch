export type Category = "수학1" | "수학2" | "미적분" | "확률과 통계" | "기하";
export type Year = 2025 | 2024 | 2023 | 2022;
export type Point = "2점" | "3점" | "4점";

export function yearToString(year: Year): string {
    switch (year) {
        case 2025:
            return "2025학년도(2024년시행)";
        case 2024:
            return "2024학년도(2023년시행)";
        case 2023:
            return "2023학년도(2022년시행)";
        case 2022:
            return "2022학년도(2021년시행)";
    }
}

export const CATEGORIES: Category[] = [
    "수학1",
    "수학2",
    "미적분",
    "확률과 통계",
    "기하",
];

export const YEARS: Year[] = [2025, 2024, 2023, 2022];

export const POINTS: Point[] = ["2점", "3점", "4점"];
