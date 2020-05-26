import { apiCall } from "./common/common.ts";

export async function getTrendingSearchTerm(params: any) {
  return await apiCall(params, `https://api.giphy.com/v1/trending/searches?`);
}
