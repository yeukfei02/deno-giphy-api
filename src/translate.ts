export async function translateGif(params: any) {
  let result = null;

  let queryString = "";
  if (params) {
    queryString = new URLSearchParams(params).toString();
  }

  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?${queryString}`,
  );
  if (response) {
    result = response.json();
  }

  return result;
}

export async function translateSticker(params: any) {
  let result = null;

  let queryString = "";
  if (params) {
    queryString = new URLSearchParams(params).toString();
  }

  const response = await fetch(
    `https://api.giphy.com/v1/stickers/translate?${queryString}`,
  );
  if (response) {
    result = response.json();
  }

  return result;
}
