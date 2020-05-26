import { apiCall } from "./apiCall.ts";

export async function randomId(params: any) {
  return apiCall(params, `https://api.giphy.com/v1/randomid?`);
}
