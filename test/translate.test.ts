import { translateGif, translateSticker } from "../src/translate.ts";
import { assert } from "../deps.ts";

Deno.test("translateGif", async () => {
  const params = {
    api_key: "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
    s: "dog",
  };
  const result = await translateGif(params);
  assert(result);
});

Deno.test("translateGifWithWeirdness", async () => {
  const params = {
    api_key: "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
    s: "dog",
    weirdness: 10,
  };
  const result = await translateGif(params);
  assert(result);
});

Deno.test("translateSticker", async () => {
  const params = {
    api_key: "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
    s: "dog",
  };
  const result = await translateSticker(params);
  assert(result);
});

Deno.test("translateStickerWithWeirdness", async () => {
  const params = {
    api_key: "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
    s: "dog",
    weirdness: 10,
  };
  const result = await translateSticker(params);
  assert(result);
});
