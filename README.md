# annotate-icon

Add annotation to icons.

## Install

```sh
$ npm install --save annotate-icon
```

## Quickstart

```js
var annotate = require('annotate-icon');
var path = require('path');

annotate({ 
    input: path.join(__dirname, "icon-small.jpg"),
    output: path.join(__dirname, "icon-small.output.png"),
    background: "rgba(0, 255, 0, 0.65);",
    foreground: "#ffffff",
    text: { top: "EXAMPLE", bottom: "example" } 
}, function(err,infos) {
    console.log(err)
    console.log(infos)
});
```

Before
![](test/icon-small.jpg)

After
![](test/icon-small.output.png)

## Copyright and license

MIT © [Aloïs Deniel](http://aloisdeniel.github.io)