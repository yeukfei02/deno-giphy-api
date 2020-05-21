import { getCategories } from "../src/categories.ts";
import { assert } from "../deps.ts";

Deno.test("getCategories", async () => {
  const params = {
    api_key: "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
  };
  const result = await getCategories(params);
  assert(result);
});
