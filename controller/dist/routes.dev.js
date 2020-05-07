"use strict";

var router = require("express").Router();

var scraper = require("../public/scraper");

router.get("/", function (req, res) {
  res.render("index", {
    title: "Index"
  });
});
router.get("/results", function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // const indeedList = await scraper.indeedScraper(
          //   req.params.jobTitle,
          //   req.params.location
          // );
          res.render("resultsPage", {
            title: "Results for: (interpolate query string here)"
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});
module.exports = router;