import { apiCall } from "./apiCall.ts";

export async function searchGif(params: any) {
  return apiCall(params, `https://api.giphy.com/v1/gifs/search?`);
}

export async function searchSticker(params: any) {
  return apiCall(params, `https://api.giphy.com/v1/stickers/search?`);
}
