 <p float="left">
<a href="https://www.npmjs.com/package/url-minify"><img src="https://badgen.net/npm/v/url-minify" alt="NPM version" /></a>
 <a href="https://www.npmjs.com/package/url-minify"><img src="https://github.com/rubiin/tweeny-weeny/workflows/CI/badge.svg" alt="CI" /></a>
 <a href="https://www.npmjs.com/package/url-minify"><img src="https://img.shields.io/npm/dm/url-minify" alt="Downloads" /></a>
</p>

# Minify Url

<img src="https://i.imgur.com/gbXDQyL.png" height="150">

> Library to make url shorter

# INSTALLAION

```sh
npm i url-minify
yarn add url-minify
```

# USAGE

Currently 17 providers are supported

For typescript

```ts
import minify from "url-minify";

~(async function () {
  console.log(await minify("https://rubiin.vercel.app", { provider: "isgd" }));

  // ==> {longUrl: 'https://rubiin.vercel.app',shortUrl: 'https://is.gd/PTkruq'}
})();
```

For plain js

```js
const minify = require("url-minify").default;

~(async function () {
  console.log(await minify("https://rubiin.vercel.app", { provider: "isgd" }));

  // ==> {longUrl: 'https://rubiin.vercel.app',shortUrl: 'https://is.gd/PTkruq'}
})();
```

## API

### minify(link,options)

#### options

Type: `object`

##### provider

Type: `string`

Service to use for shortening links. Defaults to `isgd`
Available providers: `'isgd' | 'vgd' | '4hnet' | 'rbgy' | 'vurl' | 'haha' | 'pwm' | 'cya' | 'tinyurl' | 'clck' | 'dagd' | 'spoo' | 'shrtr' | 'zip1' | 'urlvanish' | 'tinysrc' | 'a777'`

##### timeout

Type: `number`

Response timeout in milliseconds. Defaults to `2000`

# Providers supported

Url shortner supports the following providers.

| Provider      | Status |
| ------------- | ------ |
| is.gd         | ✔️     |
| v.gd          | ✔️     |
| rb.gy         | ✔️     |
| 4h.net        | ✔️     |
| vurl.com      | ✔️     |
| pwm.se        | ✔️     |
| haha.se       | ✔️     |
| cya.se        | ✔️     |
| tinyurl.com   | ✔️     |
| clck.ru       | ✔️     |
| da.gd         | ✔️     |
| spoo.me       | ✔️     |
| shrtr.top     | ✔️     |
| zip1.io       | ✔️     |
| urlvanish.com | ✔️     |
| tinysrc.me    | ✔️     |
| a777.lt       | ✔️     |

## Contributing

Any types of contributions are welcome. Feel free to send pull requests or create issues.

## License

Licensed under [The MIT License](LICENSE).
