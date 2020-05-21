import { searchTrendingGif, searchTrendingSticker } from "../src/trending.ts";
import { assert } from "../deps.ts";

Deno.test("searchTrendingGif", async () => {
  const result = await searchTrendingGif(
    "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
  );
  assert(result);
});

Deno.test("searchTrendingGifWithLimitAndOffset", async () => {
  const result = await searchTrendingGif(
    "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
    3,
    5,
  );
  assert(result);
});

Deno.test("searchTrendingSticker", async () => {
  const result = await searchTrendingSticker(
    "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
  );
  assert(result);
});

Deno.test("searchTrendingStickerWithLimitAndOffset", async () => {
  const result = await searchTrendingSticker(
    "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
    3,
    5,
  );
  assert(result);
});
