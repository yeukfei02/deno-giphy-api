export async function getSearchSuggestions(term: string, params: any) {
  let result = null;

  let queryString = "";
  if (params) {
    queryString = new URLSearchParams(params).toString();
  }

  const response = await fetch(
    `https://api.giphy.com/v1/tags/related/${term}?${queryString}`,
  );
  if (response) {
    result = response.json();
  }

  return result;
}
