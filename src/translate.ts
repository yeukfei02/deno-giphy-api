import { apiCall } from "./common/common.ts";

export async function translateGif(params: any) {
  return await apiCall(params, `https://api.giphy.com/v1/gifs/translate?`);
}

export async function translateSticker(params: any) {
  return await apiCall(params, `https://api.giphy.com/v1/stickers/translate?`);
}
