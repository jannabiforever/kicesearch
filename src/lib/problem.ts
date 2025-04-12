export type Category = "수학1" | "수학2" | "미적분" | "확률과 통계" | "기하";
export type Year = 2025 | 2024 | 2023 | 2022;

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
const EQUATION_PLACEHOLDER = "@";

export class Problem {
    year: Year;
    category: Category;
    index: number;
    body: ProblemBody;

    constructor(
        year: Year,
        category: Category,
        index: number,
        body: ProblemBody
    ) {
        this.year = year;
        this.category = category;
        this.index = index;
        this.body = body;
    }
}

export class ProblemBody {
    text: string;
    equations: string[];

    constructor(text: string, equations: string[]) {
        this.text = text;
        this.equations = equations;
    }

    public isValid(): boolean {
        let numberOfEquationPlaceholder =
            this.text.split(EQUATION_PLACEHOLDER).length - 1;

        return numberOfEquationPlaceholder == this.equations.length;
    }

    public toString(): string {
        if (this.isValid()) {
            let buffer = this.text;
            this.equations.forEach((value) =>
                buffer.replace(EQUATION_PLACEHOLDER, value)
            );
            return buffer;
        } else {
            throw Error("Given data is malformed!");
        }
    }
}
