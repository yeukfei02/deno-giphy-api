export async function apiCall(params: any, url: string) {
  let result = null;

  let queryString = "";
  if (params) {
    queryString = new URLSearchParams(params).toString();
  }

  const response = await fetch(
    url + `${queryString}`,
  );
  if (response) {
    result = response.json();
  }

  return result;
}
