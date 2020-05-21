import { searchGif, searchSticker } from "../src/search.ts";
import { assert } from "../deps.ts";

Deno.test("searchGif", async () => {
  const result = await searchGif(
    "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
    "dog",
  );
  assert(result);
});

Deno.test("searchGifWithLimitAndOffset", async () => {
  const result = await searchGif(
    "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
    "dog",
    3,
    5,
  );
  assert(result);
});

Deno.test("searchSticker", async () => {
  const result = await searchSticker(
    "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
    "dog",
  );
  assert(result);
});

Deno.test("searchStickerWithLimitAndOffset", async () => {
  const result = await searchSticker(
    "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
    "dog",
    3,
    5,
  );
  assert(result);
});
