import { apiCall } from "./apiCall.ts";

export async function getTrendingSearchTerm(params: any) {
  return apiCall(params, `https://api.giphy.com/v1/trending/searches?`);
}
