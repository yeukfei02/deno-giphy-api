import { apiCall } from "./apiCall.ts";

export async function randomGif(params: any) {
  return apiCall(params, `https://api.giphy.com/v1/gifs/random?`);
}

export async function randomSticker(params: any) {
  return apiCall(params, `https://api.giphy.com/v1/stickers/random?`);
}
