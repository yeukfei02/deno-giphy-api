import { apiCall } from "./common/common.ts";

export async function searchTrendingGif(params: any) {
  return await apiCall(params, `https://api.giphy.com/v1/gifs/trending?`);
}

export async function searchTrendingSticker(params: any) {
  return await apiCall(params, `https://api.giphy.com/v1/stickers/trending?`);
}
