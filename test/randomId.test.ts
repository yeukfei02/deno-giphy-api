import { randomId } from "../src/randomId.ts";
import { assert } from "../deps.ts";

Deno.test("randomId", async () => {
  const params = {
    api_key: "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
  };
  const result = await randomId(params);
  assert(result);
});
