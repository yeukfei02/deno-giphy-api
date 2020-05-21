export async function getCategories(params: any) {
  let result = null;

  let queryString = "";
  if (params) {
    queryString = new URLSearchParams(params).toString();
  }

  const response = await fetch(
    `https://api.giphy.com/v1/gifs/categories?${queryString}`,
  );
  if (response) {
    result = response.json();
  }

  return result;
}
