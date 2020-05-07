"use strict";

var express = require("express");

var app = express();

var path = require("path");

var routes = require("./controller/routes"); // req.body


app.use(express.json());
app.use(express.urlencoded({
  extended: true
})); // view engine

app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "pug"); // static files

app.use(express["static"](path.join(__dirname, "/public"))); // routes

app.get("/", routes); // error handling
// start app

var PORT = 3001;
app.listen(PORT, function () {
  console.log("App is listening on port ".concat(PORT));
});