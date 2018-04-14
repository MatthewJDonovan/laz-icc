var history = require('connect-history-api-fallback');

var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
app = express()
app.use(history());    
app.use(serveStatic(__dirname))
var port = process.env.PORT || 5000
app.listen(port)

var http = require("http");
setInterval(function() {
    http.get("http://lazaridis-case-comp.herokuapp.com");
}, 1200000);

console.log('server started '+ port) 