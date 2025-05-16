import type { Category } from "./problem";
import { join } from "path";
import { readdir, readFile } from "fs/promises";

interface Data {
  filestem: string;
  id: string;
  category: Category;
  body: string;
}

const BASE_PATH = join(import.meta.url, "../../../data/json/");

const fetchJsonPaths = async () => {
  const files = await readdir(BASE_PATH);
  return files.filter((file) => file.endsWith(".json"));
};

export const fetchDatum = async (): Promise<Data[]> => {
  const paths = await fetchJsonPaths();
  const dataPromises = paths.map(async (path) => {
    let filestem = path.replace(/\.json$/, "");
    let subdatum = await readFile(path).then((content) => {
      let subdata: { id: string; category: Category; body: string }[] =
        JSON.parse(content.toString());

      return subdata;
    });

    let datum: Data[] = subdatum
      .filter((data) => data.id && data.category && data.body)
      .map((subdata: { id: string; category: Category; body: string }) => {
        return {
          filestem,
          ...subdata,
        };
      });

    return datum;
  });

  const dataArrays = await Promise.all(dataPromises);
  return dataArrays.reduce((acc, datum) => acc.concat(datum), []);
};
