 <p float="left">
<a href="https://www.npmjs.com/package/url-minify"><img src="https://img.shields.io/npm/l/url-minify" alt="Package License" /></a>
<a href="https://www.npmjs.com/package/url-minify"><img src="https://badgen.net/npm/v/url-minify" alt="NPM version" /></a>
 <a href="https://www.npmjs.com/package/url-minify"><img src="https://github.com/rubiin/tweeny-weeny/workflows/CI/badge.svg" alt="CI" /></a> 
 <a href="https://www.npmjs.com/package/url-minify"><img src="https://badgen.net/bundlephobia/min/url-minify" alt="Bundle Size" /></a> 

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


Currently 4 free providers are supported

```ts
import minify from 'url-minify';

~async function(){

  console.log(await minify('https://rubiin.vercel.app',{ provider: 'isgd'}))  
  
  // {longUrl: 'https://rubiin.vercel.app',shortUrl: 'https://is.gd/PTkruq'}
  
}()

## API

### minify(link,options)


#### options

Type: `object`

##### provider

Type: `string`

Service to use for shortening links. Defaults to `isgd`
Available providers: `'isgd'| 'cdpt'| 'kroom'| 'tinyurl'| 'tinube'| '4hnet'`

##### timeout

Type: `number`

Response timeout in milliseconds. Defaults to `2000`


```
# Providers supported

Dillinger is currently extended with the following plugins.

| Provider | Status |
| -------- | ------ |
| is.gd | <p align="center"><code><img height="20" src="https://i.imgur.com/tG9nb8s.png"> |
| cdpt.in | <p align="center"><code><img height="20" src="https://i.imgur.com/tG9nb8s.png"> |
| tinu.be | <p align="center"><code><img height="20" src="https://i.imgur.com/tG9nb8s.png"> |
| kroom.tk | <p align="center"><code><img height="20" src="https://i.imgur.com/tG9nb8s.png"> |
| tinyurl.com | <p align="center"><code><img height="20" src="https://i.imgur.com/tG9nb8s.png"> |
| 4h.net | <p align="center"><code><img height="20" src="https://i.imgur.com/tG9nb8s.png"> |

## Contributing

Any types of contributions are welcome. Feel free to send pull requests or create issues.

## License

Licensed under [The MIT License](LICENSE).
