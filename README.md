# deno-giphy-api

giphy api in deno

```ts
import { 
    searchGif, 
    searchSticker,
    searchTrendingGif, 
    searchTrendingSticker,
    translateGif, 
    translateSticker,
    randomGif, 
    randomSticker,
    randomId,
    getGifById,
    getGifsById,
    getCategories,
    getAutocomplete
} from "https://deno.land/x/deno_giphy_api/mod.ts";

or

import { 
    searchGif, 
    searchSticker,
    searchTrendingGif, 
    searchTrendingSticker,
    translateGif, 
    translateSticker,
    randomGif, 
    randomSticker,
    randomId,
    getGifById,
    getGifsById,
    getCategories,
    getAutocomplete
} from "https://denopkg.com/yeukfei02/deno-giphy-api/mod.ts";
```

## searchGif

```ts
// key and q are mandatory
const params = {
    key: "apiKey",
    q: "dog",
};

// limit and offset are optional, default limit = 25, offset = 0
const params = {
    key: "apiKey",
    q: "dog",
    limit: 3,
    offset: 5,
};

const gif = await searchGif(params);
```

## searchSticker

```ts
// key and q are mandatory
const params = {
    key: "apiKey",
    q: "dog",
};

// limit and offset are optional, default limit = 25, offset = 0
const params = {
    key: "apiKey",
    q: "dog",
    limit: 3,
    offset: 5,
};

const sticker = await searchSticker(params);
```

## searchTrendingGif

```ts
// key is mandatory
const params = {
    key: "apiKey",
};

// limit and offset are optional, default limit = 25, offset = 0
const params = {
    key: "apiKey",
    limit: 3,
    offset: 5,
};

const gif = await searchTrendingGif(params);
```

## searchTrendingSticker

```ts
// key is mandatory
const params = {
    key: "apiKey",
};

// limit and offset are optional, default limit = 25, offset = 0
const params = {
    key: "apiKey",
    limit: 3,
    offset: 5,
};

const sticker = await searchTrendingSticker(params);
```

## translateGif

```ts
// key and s are mandatory
const params = {
    key: "apiKey",
    s: "dog"
};

// weirdness is optional, 0-10
const params = {
    key: "apiKey",
    s: "dog",
    weirdness: 10,
};

const gif = await translateGif(params);
```

## translateSticker

```ts
// key and s are mandatory
const params = {
    key: "apiKey",
    s: "dog"
};

// weirdness is optional, 0-10
const params = {
    key: "apiKey",
    s: "dog",
    weirdness: 10,
};

const sticker = await translateSticker(params);
```

## randomGif

```ts
// key is mandatory
const params = {
    key: "apiKey",
};

// tag is optional
const params = {
    key: "apiKey",
    tag: "dog",
};

const gif = await randomGif(params);
```

## randomSticker

```ts
// key is mandatory
const params = {
    key: "apiKey",
};

// tag is optional
const params = {
    key: "apiKey",
    tag: "dog",
};

const sticker = await randomSticker(params);
```

## randomId

```ts
// key is mandatory
const params = {
    api_key: "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
};

const randomId = await randomId(params);
```

## getGifById

```ts
// key is mandatory
const params = {
    api_key: "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
};

const id = "gifId";
const gif = await getGifById(id, params);
```

## getGifsById

```ts
// key is mandatory
const params = {
    api_key: "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
};

const idsList = [
    "xT4uQulxzV39haRFjG",
    "3og0IPxMM0erATueVW",
];
const gifs = await getGifsById(idsList, params);
```

## getCategories

```ts
// key is mandatory
const params = {
    api_key: "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
};

const gifs = await getCategories(params);
```

## getAutocomplete

```ts
// key and q are mandatory
const params = {
    api_key: "l3zCs4VG53GTOVfp3KNBNUaqV1B59Gaw",
    q: "dog"
};

const searchTags = await getAutocomplete(params);
```