import { randomGif, randomSticker } from "../src/random.ts";
import { assert } from "../deps.ts";

Deno.test("randomGif", async () => {
  const params = {
    api_key: "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
  };
  const result = await randomGif(params);
  assert(result);
});

Deno.test("randomGifWithTag", async () => {
  const params = {
    api_key: "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
    tag: "indian food",
  };
  const result = await randomGif(params);
  assert(result);
});

Deno.test("randomSticker", async () => {
  const params = {
    api_key: "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
  };
  const result = await randomSticker(params);
  assert(result);
});

Deno.test("randomStickerWithTag", async () => {
  const params = {
    api_key: "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
    tag: "indian food",
  };
  const result = await randomSticker(params);
  assert(result);
});
