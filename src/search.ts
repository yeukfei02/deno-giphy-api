import { apiCall } from "./common/common.ts";

export async function searchGif(params: any) {
  return await apiCall(params, `https://api.giphy.com/v1/gifs/search?`);
}

export async function searchSticker(params: any) {
  return await apiCall(params, `https://api.giphy.com/v1/stickers/search?`);
}
