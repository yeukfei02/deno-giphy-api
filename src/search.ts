export async function searchGif(
  apiKey: string,
  query: string,
  limit?: number,
  offset?: number,
) {
  let result = null;

  let params = {
    key: apiKey,
    q: query,
    limit: "25",
    offset: "0",
  };
  if (limit) {
    let obj = {
      limit: limit,
    };
    params = Object.assign(params, obj);
  }
  if (offset) {
    let obj = {
      offset: offset,
    };
    params = Object.assign(params, obj);
  }
  const queryString = new URLSearchParams(params).toString();

  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?${queryString}`,
  );
  if (response) {
    result = response.json();
  }

  return result;
}

export async function searchSticker(
  apiKey: string,
  query: string,
  limit?: number,
  offset?: number,
) {
  let result = null;

  let params = {
    key: apiKey,
    q: query,
    limit: "25",
    offset: "0",
  };
  if (limit) {
    let obj = {
      limit: limit,
    };
    params = Object.assign(params, obj);
  }
  if (offset) {
    let obj = {
      offer: offset,
    };
    params = Object.assign(params, obj);
  }
  const queryString = new URLSearchParams(params).toString();

  const response = await fetch(
    `https://api.giphy.com/v1/stickers/search?${queryString}`,
  );
  if (response) {
    result = response.json();
  }

  return result;
}
