"use strict";

var puppeteer = require("puppeteer");

exports.indeedScraper = function _callee(jobTitle, location) {
  var browser, page, list, pageUrl, result;
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
          _context.next = 14;
          return regeneratorRuntime.awrap(page.focus("#text-input-what"));

        case 14:
          _context.next = 16;
          return regeneratorRuntime.awrap(page.keyboard.type(jobTitle));

        case 16:
          _context.next = 18;
          return regeneratorRuntime.awrap(page.focus("#text-input-where"));

        case 18:
          _context.next = 20;
          return regeneratorRuntime.awrap(page.keyboard.type(location));

        case 20:
          _context.next = 22;
          return regeneratorRuntime.awrap(page.click(".icl-Button"));

        case 22:
          _context.next = 24;
          return regeneratorRuntime.awrap(page.waitFor(2000));

        case 24:
          _context.next = 26;
          return regeneratorRuntime.awrap(page.evaluate(function () {
            var titlesList = Array.from(document.querySelectorAll(".title")).map(function (title) {
              return title.innerText.trim();
            });
            var companiesList = Array.from(document.querySelectorAll(".company")).map(function (comp) {
              return comp.innerText.trim();
            });
            return [titlesList, companiesList];
          }));

        case 26:
          list = _context.sent;
          pageUrl = page.url(); // close browser, return arrays / objects ?

          browser.close();
          result = [];
          list[0].forEach(function (key, index) {
            var obj = {};
            obj.job = list[0][index];
            obj.company = list[1][index];
            result.push(obj);
          });
          return _context.abrupt("return", {
            pageUrl: pageUrl,
            result: result
          });

        case 32:
        case "end":
          return _context.stop();
      }
    }
  });
}; // exports.stackoverflowScraper = async (jobTitle, location) => {};