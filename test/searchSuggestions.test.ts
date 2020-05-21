import { getSearchSuggestions } from "../src/searchSuggestions.ts";
import { assert } from "../deps.ts";

Deno.test("getSearchSuggestions", async () => {
  const params = {
    api_key: "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
  };
  const term = "dog";

  const result = await getSearchSuggestions(term, params);
  assert(result);
});
