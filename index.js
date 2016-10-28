var express = require("express");
var path = require("path");

var app = express()
app.get('/', function(req, res){
	req.
	res.sendFile(path.join(__dirname + '/public/index.html'));
});
app.listen(process.env.$PORT || 4000);

