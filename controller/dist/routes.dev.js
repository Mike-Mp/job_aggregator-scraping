"use strict";

var router = require("express").Router();

var scraper = require("../public/scraper");

router.get("/", function (req, res) {
  res.render("index", {
    title: "Index"
  });
});
router.get("/results", function (req, res) {
  // const indeedList = await scraper.indeedScraper(
  //   req.query.jobTitle,
  //   req.query.location
  // );
  res.render("results", {
    title: "Results for: (interpolate query string here)"
  });
});
module.exports = router;