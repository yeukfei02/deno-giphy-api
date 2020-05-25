import { apiCall } from "./apiCall.ts";

export async function getCategories(params: any) {
  return apiCall(params, `https://api.giphy.com/v1/gifs/categories?`);
}
