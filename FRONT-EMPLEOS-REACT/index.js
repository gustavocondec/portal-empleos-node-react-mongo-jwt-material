var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var history = require("connect-history-api-fallback");

var app = express();
app.use(history({
    verbose: true
}))

app.use("/", serveStatic(path.join(__dirname, 'build')));

/*app.get("/*",(req,res)=>{
    res.senFile(__dirname+"/dist/index.html");
});
*/
var port = process.env.PORT || 8000;
app.listen(port);
console.log('server started ' + port);