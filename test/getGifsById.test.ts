import { getGifsById } from "../src/getGifsById.ts";
import { assert } from "../deps.ts";

Deno.test("getGifsById", async () => {
  const params = {
    api_key: "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
  };
  const idsList = [
    "xT4uQulxzV39haRFjG",
    "3og0IPxMM0erATueVW",
  ];
  const result = await getGifsById(idsList, params);
  assert(result);
});
