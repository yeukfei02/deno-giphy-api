import { getGifById } from "../src/getGifById.ts";
import { assert } from "../deps.ts";

Deno.test("getGifById", async () => {
  const params = {
    api_key: "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
  };
  const result = await getGifById("mCRJDo24UvJMA", params);
  assert(result);
});
