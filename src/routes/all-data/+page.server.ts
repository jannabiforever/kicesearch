import { fetchDatum } from "$lib/data.server";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  let data = await fetchDatum();

  return { data };
};
