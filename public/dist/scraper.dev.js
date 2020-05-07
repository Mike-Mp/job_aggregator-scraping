"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var puppeteer = require("puppeteer");

exports.indeedScraper = function _callee(jobTitle, location) {
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
          _context.next = 8;
          return regeneratorRuntime.awrap(page["goto"]("https://www.indeed.com"));

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(page.waitForSelector("#text-input-what"));

        case 10:
          _context.next = 12;
          return regeneratorRuntime.awrap(page.waitForSelector("#text-input-where"));

        case 12:
          console.log(page.url(), _typeof(page.url()));
          _context.next = 15;
          return regeneratorRuntime.awrap(page.focus("#text-input-what"));

        case 15:
          _context.next = 17;
          return regeneratorRuntime.awrap(page.keyboard.type(jobTitle));

        case 17:
          _context.next = 19;
          return regeneratorRuntime.awrap(page.focus("#text-input-where"));

        case 19:
          _context.next = 21;
          return regeneratorRuntime.awrap(page.keyboard.type(location));

        case 21:
          _context.next = 23;
          return regeneratorRuntime.awrap(page.click(".icl-Button"));

        case 23:
          _context.next = 25;
          return regeneratorRuntime.awrap(page.waitFor(2000));

        case 25:
          console.log(page.url(), _typeof(page.url()));
          _context.next = 28;
          return regeneratorRuntime.awrap(page.waitFor(2000));

        case 28:
          // close browser, return arrays
          browser.close();

        case 29:
        case "end":
          return _context.stop();
      }
    }
  });
}; // exports.stackoverflowScraper = async (jobTitle, location) => {};