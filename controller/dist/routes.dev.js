"use strict";

var router = require("express").Router();

var scraper = require("../public/scraper");

router.get("/", function (req, res) {
  res.render("index", {
    title: "Index"
  });
});
router.get("/results", function _callee(req, res) {
  var _ref, indeedPageUrl, indeedResult, _ref2, stackoverflowPageUrl, stackoverflowResult;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(scraper.indeedScraper(req.query.jobTitle, req.query.location));

        case 2:
          _ref = _context.sent;
          indeedPageUrl = _ref.indeedPageUrl;
          indeedResult = _ref.indeedResult;
          _context.next = 7;
          return regeneratorRuntime.awrap(scraper.stackoverflowScraper(req.query.jobTitle, req.query.location));

        case 7:
          _ref2 = _context.sent;
          stackoverflowPageUrl = _ref2.stackoverflowPageUrl;
          stackoverflowResult = _ref2.stackoverflowResult;
          console.log("result", indeedResult, "pageUrl", indeedPageUrl);
          res.render("results", {
            title: "".concat(req.query.jobTitle, " in ").concat(req.query.location),
            indeedResult: indeedResult,
            indeedPageUrl: indeedPageUrl,
            stackoverflowPageUrl: stackoverflowPageUrl,
            stackoverflowResult: stackoverflowResult
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
});
module.exports = router;