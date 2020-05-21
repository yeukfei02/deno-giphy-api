import { searchTrendingGif, searchTrendingSticker } from "../src/trending.ts";
import { assert } from "../deps.ts";

Deno.test("searchTrendingGif", async () => {
  const params = {
    key: "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
  };
  const result = await searchTrendingGif(params);
  assert(result);
});

Deno.test("searchTrendingGifWithLimitAndOffset", async () => {
  const params = {
    key: "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
    limit: 3,
    offset: 5,
  };
  const result = await searchTrendingGif(params);
  assert(result);
});

Deno.test("searchTrendingSticker", async () => {
  const params = {
    key: "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
  };
  const result = await searchTrendingSticker(params);
  assert(result);
});

Deno.test("searchTrendingStickerWithLimitAndOffset", async () => {
  const params = {
    key: "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
    limit: 3,
    offset: 5,
  };
  const result = await searchTrendingSticker(params);
  assert(result);
});
