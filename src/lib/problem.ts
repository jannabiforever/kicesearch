export const CATEGORIES = [
    "수학1",
    "수학2",
    "미적분",
    "확률과 통계",
    "기하",
] as const;
export type Category = (typeof CATEGORIES)[number];

export const KICE_YEARS = ["2025", "2024", "2023", "2022"] as const;
export type KiceYear = (typeof KICE_YEARS)[number];

export function displayKiceYear(year: KiceYear): string {
    switch (year) {
        case "2025":
            return "2025학년도(2024년시행)";
        case "2024":
            return "2024학년도(2023년시행)";
        case "2023":
            return "2023학년도(2022년시행)";
        case "2022":
            return "2022학년도(2021년시행)";
    }
}

export const POINTS = ["2점", "3점", "4점"] as const;
export type Point = (typeof POINTS)[number];

export const KICE_MONTHS = ["06", "09", "11"] as const;
export type KiceMonth = (typeof KICE_MONTHS)[number];

export function displayKiceMonth(month: KiceMonth): string {
    switch (month) {
        case "06":
            return "6월 모의고사";
        case "09":
            return "9월 모의고사";
        case "11":
            return "대학수학능력평가(수능)";
    }
}

export function formatProblemId(
    year: KiceYear,
    month: KiceMonth,
    category: Category,
    index: number
): string {
    let mark = getCategoryMark(category);

    let indexString: string;
    if (index < 10) {
        indexString = `0${index}`;
    } else {
        indexString = `${index}`;
    }

    return `${year}-${month}-${mark}${indexString}`;
}

function getCategoryMark(category: Category): string {
    if (category == "기하") {
        return "g";
    } else if (category == "미적분") {
        return "m";
    } else if (category == "수학1") {
        return "c";
    } else if (category == "수학2") {
        return "c";
    } else {
        return "p"; // 확률과 통계
    }
}
