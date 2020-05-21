export async function searchTrendingGif(params: any) {
  let result = null;

  let queryString = "";
  if (params) {
    queryString = new URLSearchParams(params).toString();
  }

  const response = await fetch(
    `https://api.giphy.com/v1/gifs/trending?${queryString}`,
  );
  if (response) {
    result = response.json();
  }

  return result;
}

export async function searchTrendingSticker(params: any) {
  let result = null;

  let queryString = "";
  if (params) {
    queryString = new URLSearchParams(params).toString();
  }

  const response = await fetch(
    `https://api.giphy.com/v1/stickers/trending?${queryString}`,
  );
  if (response) {
    result = response.json();
  }

  return result;
}
