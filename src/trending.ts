export async function searchTrendingGif(
  apiKey: string,
  limit?: number,
  offset?: number,
) {
  let result = null;

  let params = {
    key: apiKey,
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
    `https://api.giphy.com/v1/gifs/trending?${queryString}`,
  );
  if (response) {
    result = response.json();
  }

  return result;
}

export async function searchTrendingSticker(
  apiKey: string,
  limit?: number,
  offset?: number,
) {
  let result = null;

  let params = {
    key: apiKey,
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
    `https://api.giphy.com/v1/stickers/trending?${queryString}`,
  );
  if (response) {
    result = response.json();
  }

  return result;
}
