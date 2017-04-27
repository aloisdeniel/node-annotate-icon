var annotate = require('..');
var path = require('path');

annotate({ 
    input: path.join(__dirname, "icon.jpg"),
    output: path.join(__dirname, "icon.output.png"),
    background: "rgba(255, 0, 0, 0.65);",
    foreground: "#ffffff",
    text: { top: "EXAMPLE", bottom: "example" } 
}, function(err,infos) {
    console.log(err)
    console.log(infos)
});

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