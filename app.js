const express = require("express");
const app = express();
const path = require("path");
const routes = require("./controller/routes");

// req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// view engine
app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "pug");

// static files
app.use(express.static(path.join(__dirname, "/public")));

// routes
app.get("/", routes);

// error handling

// start app
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
