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

  let queryString = "";
  if (params) {
    queryString = new URLSearchParams(params).toString();
  }
  
  const response = await fetch(
    `https://api.giphy.com/v1/gifs?${queryString}`,
  );
  if (response) {
    result = response.json();
  }

  return result;
}
