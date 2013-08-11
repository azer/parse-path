## parse-path

parse javascript object path

```js
parsePath(document, 'location.href')
// => github.com

window.foo = { bar : function (){ return { msg: ['hello world'] }; } };

parsePath(window, 'foo.bar.msg.0')
// => hello world
```

## Install

```bash
$ npm install parse-path
```

![](https://dl.dropboxusercontent.com/s/ofqr0ha1all2nbl/npmel_30.jpg)
