"use strict";

var express = require("express");

var app = express();

var path = require("path");

var routes = require("./controller/routes");

var session = require("express-session"); // req.body


app.use(express.json());
app.use(express.urlencoded({
  extended: true
})); // view engine
// app.set("views", path.join(__dirname, "views"));

app.set("view engine", "pug"); // static files

app.use(express["static"](path.join(__dirname, "public"))); // sessions

app.use(session({
  cookie: {
    maxAge: 5000
  },
  secret: "woot",
  resave: false,
  saveUninitialized: false
})); // routes

app.use("/", routes); // error handling
// start app

var PORT = 3001;
app.listen(PORT, function () {
  console.log("App is listening on port ".concat(PORT));
});