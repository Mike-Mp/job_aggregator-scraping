"use strict";

var router = require("express").Router();

router.get("/", function (req, res) {
  res.render("index", {
    title: "Index"
  });
}); // async

router.get("/results", function (req, res) {
  res.render("results", {
    title: "Results for: (interpolate query string here)"
  });
});
module.exports = router;