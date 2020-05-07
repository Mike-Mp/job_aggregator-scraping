"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var puppeteer = require("puppeteer");

console.log("accessed scraper file");

exports.indeedScraper = function _callee(jobTitle, location) {
  var browser, page, jobInput, locationInput, submitButton;
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
          return regeneratorRuntime.awrap(page["goto"]("https://www.indeed.com/"));

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(page.waitForSelector("#text-input-what"));

        case 10:
          _context.next = 12;
          return regeneratorRuntime.awrap(page.waitForSelector("#text-input-where"));

        case 12:
          console.log(page.url(), _typeof(page.url()));
          _context.next = 15;
          return regeneratorRuntime.awrap(page.$("#text-input-what"));

        case 15:
          jobInput = _context.sent;
          _context.next = 18;
          return regeneratorRuntime.awrap(page.$("#text-input-where"));

        case 18:
          locationInput = _context.sent;
          _context.next = 21;
          return regeneratorRuntime.awrap(page.$(".icl-Button"));

        case 21:
          submitButton = _context.sent;
          _context.next = 24;
          return regeneratorRuntime.awrap(page.focus(jobInput));

        case 24:
          _context.next = 26;
          return regeneratorRuntime.awrap(page.keyboard.type(jobTitle));

        case 26:
          _context.next = 28;
          return regeneratorRuntime.awrap(page.focus(locationInput));

        case 28:
          _context.next = 30;
          return regeneratorRuntime.awrap(page.keyboard.type(location));

        case 30:
          _context.next = 32;
          return regeneratorRuntime.awrap(page.click(submitButton));

        case 32:
          _context.next = 34;
          return regeneratorRuntime.awrap(page.waitFor(2000));

        case 34:
          console.log(page.url(), _typeof(page.url())); // close browser, return arrays

          browser.close();

        case 36:
        case "end":
          return _context.stop();
      }
    }
  });
}; // exports.stackoverflowScraper = async (jobTitle, location) => {};