import { apiCall } from "./apiCall.ts";

export async function getAutocomplete(params: any) {
  return apiCall(params, `https://api.giphy.com/v1/gifs/search/tags?`);
}
