import { apiCall } from "./common/common.ts";

export async function getCategories(params: any) {
  return await apiCall(params, `https://api.giphy.com/v1/gifs/categories?`);
}
