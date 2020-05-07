"use strict";

var router = require("express").Router();

var scraper = require("../public/scraper");

router.get("/", function (req, res) {
  res.render("index", {
    title: "Index"
  });
});
router.get("/results", function _callee(req, res) {
  var indeedList;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(scraper.indeedScraper(req.query.jobTitle, req.query.location));

        case 2:
          indeedList = _context.sent;
          console.log("indeedList", indeedList);
          res.render("results", {
            title: "Results for: (interpolate query string here)"
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
module.exports = router;