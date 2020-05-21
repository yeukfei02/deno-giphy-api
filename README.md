# deno-giphy-api

giphy api in deno

```ts
import { 
    searchGif, 
    searchSticker 
} from "https://deno.land/x/deno_pixabay/mod.ts";

or

import { 
    searchGif, 
    searchSticker 
} from "https://denopkg.com/yeukfei02/deno-pixabay/mod.ts";
```

## searchGif

```ts
const gif = await searchGif(API_KEY: string, query: string);

// limit and offset are optional, default limit = 25, offset = 0
const image = await searchGif(API_KEY: string, query: string, limit: int, offset: int);
```

## searchSticker

```ts
const sticker = await searchSticker(API_KEY: string, query: string);

// limit and offset are optional, default limit = 25, offset = 0
const sticker = await searchSticker(API_KEY: string, query: string, limit: int, offset: int);
```