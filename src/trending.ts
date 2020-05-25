import { apiCall } from "./apiCall.ts";

export async function searchTrendingGif(params: any) {
  return apiCall(params, `https://api.giphy.com/v1/gifs/trending?`);
}

export async function searchTrendingSticker(params: any) {
  return apiCall(params, `https://api.giphy.com/v1/stickers/trending?`);
}
