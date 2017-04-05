var express = require('express');
var app = express();
var yaml = require('js-yaml');
var fs = require('fs');
var config = yaml.safeLoad(fs.readFileSync('./config.yml'));
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var passport = require('passport');
var mongoose = require('mongoose');

//setting database 
var db = mongoose.connect(config.db.path);





app.listen(config.app.port, function(){
	console.log('server is running...');
});