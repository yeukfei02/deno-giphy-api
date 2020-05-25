import { apiCall } from "./apiCall.ts";

export async function translateGif(params: any) {
  return apiCall(params, `https://api.giphy.com/v1/gifs/translate?`);
}

export async function translateSticker(params: any) {
  return apiCall(params, `https://api.giphy.com/v1/stickers/translate?`);
}
