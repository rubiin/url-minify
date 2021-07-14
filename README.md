# Teeny weeny Url

> Make url shorter

# INSTALLAION

```
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