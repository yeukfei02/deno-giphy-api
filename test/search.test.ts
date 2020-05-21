import { searchGif, searchSticker } from "../src/search.ts";
import { assert } from "../deps.ts";

Deno.test("searchGif", async () => {
  const params = {
    key: "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
    q: "dog",
  };
  const result = await searchGif(params);
  assert(result);
});

Deno.test("searchGifWithLimitAndOffset", async () => {
  const params = {
    key: "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
    q: "dog",
    limit: 3,
    offset: 5,
  };
  const result = await searchGif(params);
  assert(result);
});

Deno.test("searchSticker", async () => {
  const params = {
    key: "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
    q: "dog",
  };
  const result = await searchSticker(params);
  assert(result);
});

Deno.test("searchStickerWithLimitAndOffset", async () => {
  const params = {
    key: "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
    q: "dog",
    limit: 3,
    offset: 5,
  };
  const result = await searchSticker(params);
  assert(result);
});
