import { getTrendingSearchTerm } from "../src/trendingSearchTerm.ts";
import { assert } from "../deps.ts";

Deno.test("getTrendingSearchTerm", async () => {
  const params = {
    api_key: "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
  };
  const result = await getTrendingSearchTerm(params);
  assert(result);
});
