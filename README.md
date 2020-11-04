# deno-giphy-api

[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/deno_giphy_api/mod.ts)

giphy api in deno

```ts
// pick 1 to import
import * as giphy from "https://deno.land/x/deno_giphy_api/mod.ts";
import * as giphy from "https://denopkg.com/yeukfei02/deno-giphy-api/mod.ts";
```

## searchGif

```ts
// key and q are mandatory
const params = {
  api_key: "apiKey",
  q: "dog",
};

// limit and offset are optional, default limit = 25, offset = 0
const params = {
  api_key: "apiKey",
  q: "dog",
  limit: 3,
  offset: 5,
};

const gif = await giphy.searchGif(params);
```

## searchSticker

```ts
// key and q are mandatory
const params = {
  api_key: "apiKey",
  q: "dog",
};

// limit and offset are optional, default limit = 25, offset = 0
const params = {
  api_key: "apiKey",
  q: "dog",
  limit: 3,
  offset: 5,
};

const sticker = await giphy.searchSticker(params);
```

## searchTrendingGif

```ts
// key is mandatory
const params = {
  api_key: "apiKey",
};

// limit and offset are optional, default limit = 25, offset = 0
const params = {
  api_key: "apiKey",
  limit: 3,
  offset: 5,
};

const gif = await giphy.searchTrendingGif(params);
```

## searchTrendingSticker

```ts
// key is mandatory
const params = {
  api_key: "apiKey",
};

// limit and offset are optional, default limit = 25, offset = 0
const params = {
  api_key: "apiKey",
  limit: 3,
  offset: 5,
};

const sticker = await giphy.searchTrendingSticker(params);
```

## translateGif

```ts
// key and s are mandatory
const params = {
  api_key: "apiKey",
  s: "dog",
};

// weirdness is optional, 0-10
const params = {
  api_key: "apiKey",
  s: "dog",
  weirdness: 10,
};

const gif = await giphy.translateGif(params);
```

## translateSticker

```ts
// key and s are mandatory
const params = {
  api_key: "apiKey",
  s: "dog",
};

// weirdness is optional, 0-10
const params = {
  api_key: "apiKey",
  s: "dog",
  weirdness: 10,
};

const sticker = await giphy.translateSticker(params);
```

## randomGif

```ts
// key is mandatory
const params = {
  api_key: "apiKey",
};

// tag is optional
const params = {
  api_key: "apiKey",
  tag: "dog",
};

const gif = await giphy.randomGif(params);
```

## randomSticker

```ts
// key is mandatory
const params = {
  api_key: "apiKey",
};

// tag is optional
const params = {
  api_key: "apiKey",
  tag: "dog",
};

const sticker = await giphy.randomSticker(params);
```

## randomId

```ts
// key is mandatory
const params = {
  api_key: "apiKey",
};

const randomId = await giphy.randomId(params);
```

## getGifById

```ts
// key is mandatory
const params = {
  api_key: "apiKey",
};

const id = "gifId";
const gif = await giphy.getGifById(id, params);
```

## getGifsById

```ts
// key is mandatory
const params = {
  api_key: "apiKey",
};

const idsList = ["xT4uQulxzV39haRFjG", "3og0IPxMM0erATueVW"];
const gifs = await giphy.getGifsById(idsList, params);
```

## getCategories

```ts
// key is mandatory
const params = {
  api_key: "apiKey",
};

const gifs = await giphy.getCategories(params);
```

## getAutocomplete

```ts
// key and q are mandatory
const params = {
  api_key: "apiKey",
  q: "dog",
};

const searchTags = await giphy.getAutocomplete(params);
```

## getSearchSuggestions

```ts
// key is mandatory
const params = {
  api_key: "apiKey",
};
const term = "dog";

const searchSuggestions = await giphy.getSearchSuggestions(term, params);
```

## getTrendingSearchTerm

```ts
// key is mandatory
const params = {
  api_key: "apiKey",
};

const trendingSearchTerm = await giphy.getTrendingSearchTerm(params);
```
