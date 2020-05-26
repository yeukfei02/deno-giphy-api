import { apiCall } from "./common/common.ts";

export async function getAutocomplete(params: any) {
  return await apiCall(params, `https://api.giphy.com/v1/gifs/search/tags?`);
}
