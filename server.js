//Dependencies
//++++++++++++++++++++++++++++++++++++++++++++++++++++
var express = require("express");
var db = require("./models");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

//run on localhost:3000
var port = process.env.PORT || 3000;
var app = express();



//Requiring our models for syncing. This gets this from index.js
var db = require("./models");

//Server static content for the app from the "public" directory
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({extended:false}));

//Override using a help code to get arround JQuery
app.use(methodOverride("_method"));

//Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defautlLayout: "main"}));
app.set("view engine", "handlebars");

//Import routes and gives them to the server
var routes = require("./controllers/burger_controller.js");

app.use("/", routes);

//Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function(){
	app.listen(port, function(){
		console.log("Listening on port %s", port);
	});
});

		// console.log("App listening on PORT " + PORT);
	


