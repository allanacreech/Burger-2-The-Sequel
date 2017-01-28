//Dependencies
//++++++++++++++++++++++++++++++++++++++++++++++++++++
var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var exphndl = require("express-handlebars");
var method_override = require("method-override");

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({extended:false}));

app.use(method_override("_method"));


var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defautlLayout: "main"}));

app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controller.js");

app.use("/", routes);

app.listen(port);

