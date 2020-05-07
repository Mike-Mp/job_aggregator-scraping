"use strict";

var puppeteer = require("puppeteer");

exports.indeedScraper = function _callee(jobTitle) {
  var browser, page;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(puppeteer.launch());

        case 2:
          browser = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(browser.newPage());

        case 5:
          page = _context.sent;
          page["goto"]("https://www.indeed.com/");
          page.waitForSelector("#text-input-what");
          page.waitForSelector("#text-input-where");

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.stackoverflowScraper = function _callee2(jobTitle) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
        case "end":
          return _context2.stop();
      }
    }
  });
};