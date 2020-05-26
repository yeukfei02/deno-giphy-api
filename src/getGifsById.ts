import { apiCall } from "./apiCall.ts";

export async function getGifsById(ids: string[], params: any) {
  let result = null;

  if (ids) {
    const idsStr = ids.join(", ");

    const idsObj = {
      ids: idsStr,
    };
    if (params) {
      params = Object.assign(params, idsObj);
    }
  }

  return apiCall(params, `https://api.giphy.com/v1/gifs?`);
}
