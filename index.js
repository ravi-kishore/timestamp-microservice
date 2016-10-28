var express = require("express");
var path = require("path");
var moment = require("moment");

var app = express()
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/public/index.html'));
});
var currentLocaleData = moment.localeData();
app.get('/:date', function(req, res){
	var date = req.params.date;
	var momentObj;
	if(!isNaN(date))
		momentObj = moment.unix(date);
	else
		momentObj = moment(date);

	var retval = {};
	if(momentObj.isValid())
	{
		retval.unix = momentObj.format("X");
		retval.natural = momentObj.format("MMMM DD, YYYY");
	}
	else
	{
		retval.unix = null;
		retval.natural = null;
	}
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(retval));
});

app.listen(process.env.PORT || 4000);

