export async function randomId(params: any) {
  let result = null;

  let queryString = "";
  if (params) {
    queryString = new URLSearchParams(params).toString();
  }

  const response = await fetch(
    `https://api.giphy.com/v1/randomid?${queryString}`,
  );
  if (response) {
    result = response.json();
  }

  return result;
}
