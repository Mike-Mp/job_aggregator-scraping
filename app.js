const express = require("express");
const app = express();
const path = require("path");
const routes = require("./controller/routes");
// const session = require("express-session");

// view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static files
app.use(express.static(path.join(__dirname, "public")));

// sessions
// app.use(
//   session({
//     cookie: { maxAge: 5000 },
//     secret: "woot",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// flash messages

// routes
app.use("/", routes);

// error handling

// start app
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
