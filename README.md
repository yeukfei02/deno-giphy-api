# deno-giphy-api

giphy api in deno

```ts
import { 
    searchGif, 
    searchSticker,
    searchTrendingGif, 
    searchTrendingSticker
} from "https://deno.land/x/deno_giphy_api/mod.ts";

or

import { 
    searchGif, 
    searchSticker,
    searchTrendingGif, 
    searchTrendingSticker
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