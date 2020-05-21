export async function getTrendingSearchTerm(params: any) {
  let result = null;

  let queryString = "";
  if (params) {
    queryString = new URLSearchParams(params).toString();
  }

  const response = await fetch(
    `https://api.giphy.com/v1/trending/searches?${queryString}`,
  );
  if (response) {
    result = response.json();
  }

  return result;
}
