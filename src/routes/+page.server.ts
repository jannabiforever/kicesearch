import type { PageServerLoad } from "./$types";
import { getMeiliSearchInstance } from "$lib/ms.server";

export const load: PageServerLoad = async ({ url }) => {
  const query = url.searchParams.get("query");

  const years = url.searchParams.getAll("year");
  const months = url.searchParams.getAll("month");
  const categories = url.searchParams.getAll("category");

  if (
    query !== null &&
    (years.length > 0 || months.length > 0 || categories.length > 0)
  ) {
    try {
      let msInstance = await getMeiliSearchInstance();
      let filter = buildSearchFilters([
        ["year", years],
        ["month", months],
        ["category", categories],
      ]);

      let result = await msInstance
        .search(query, {
          filter,
        })
        .then((res) => res.hits);

      return { result };
    } catch (error) {
      console.error("Search Error:", error);
      return { result: [], error: "Search failed. Please try again later." };
    }
  } else {
    return { result: [] };
  }
};

function buildSearchFilters(filters: [string, string[]][]): string {
  return filters
    .map(([index, options]) => createFilterQuery(index, options))
    .filter(Boolean)
    .join(" AND ");
}

function createFilterQuery(
  filterable_index_name: string,
  options: string[],
): string {
  return options.length > 0
    ? `(${options.map((option) => `${filterable_index_name} = ${JSON.stringify(option)}`).join(" OR ")})`
    : "";
}
