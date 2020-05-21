import { getAutocomplete } from "../src/autocomplete.ts";
import { assert } from "../deps.ts";

Deno.test("getAutocomplete", async () => {
  const params = {
    api_key: "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
    q: "dog",
  };
  const result = await getAutocomplete(params);
  assert(result);
});
