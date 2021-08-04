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

  console.log(await minify('https://rubiin.vercel.app',{ provider: 'isgd'}))  // https://is.gd/PTkruq
  console.log(await minify('https://rubiin.vercel.app',{ provider: 'cdpt'}))  // https://cdpt.in/ab
  console.log(await minify('https://rubiin.vercel.app',{ provider: 'kroom'}))  // https://cdpt.in/ab
  console.log(await minify('https://rubiin.vercel.app',{ provider: 'tinyurl'}))  // https://cdpt.in/ab

}()


```


## Contributing

Any types of contributions are welcome. Feel free to send pull requests or create issues.

## License

Licensed under [The MIT License](LICENSE).
