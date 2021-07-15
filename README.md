 <p float="left">
<a href="https://www.npmjs.com/package/teeny-weeny-url"><img src="https://img.shields.io/npm/l/teeny-weeny-url"" alt="Package License" /></a>
<a href="https://www.npmjs.com/package/teeny-weeny-url"><img src="https://img.shields.io/npm/dw/teeny-weeny-url"" alt="NPM Downloads" /></a>
 <a href="https://www.npmjs.com/package/teeny-weeny-url"><img src="https://github.com/rubiin/tweeny-weeny/workflows/CI/badge.svg" alt="CI" /></a> 

</p>


# Minify Url

<img src="./logo.png" height="150">


> Library to make url shorter

# INSTALLAION

```sh
npm i tweeny-weeny-url
yarn add tweeny-weeny-url

```

# USAGE


Currently two free providers is.gd and cdpt.in is supported

```ts
import minify from 'tweeny-weeny-url';


~async function(){

  console.log(await minify('www.google.com',{ provider: 'isgd'}))  // https://is.gd/PTkruq

}()


```


## Contributing

Any types of contributions are welcome. Feel free to send pull requests or create issues.

## License

Licensed under [The MIT License](LICENSE).
