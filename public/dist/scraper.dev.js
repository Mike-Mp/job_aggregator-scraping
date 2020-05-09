"use strict";

var puppeteer = require("puppeteer");

exports.indeedScraper = function _callee(jobTitle, location) {
  var browser, page, list, indeedPageUrl, indeedResult;
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
          return regeneratorRuntime.awrap(page["goto"]("http://www.indeed.com"));

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
          return regeneratorRuntime.awrap(page.waitFor(1000));

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
          indeedPageUrl = page.url(); // close browser, return arrays / objects ?

          browser.close();
          console.log(list[0].length);

          if (!(list[0].length === 0)) {
            _context.next = 32;
            break;
          }

          return _context.abrupt("return", {
            indeedPageUrl: [],
            indeedResult: []
          });

        case 32:
          indeedResult = [];
          list[0].forEach(function (key, index) {
            var obj = {};
            obj.job = list[0][index];
            obj.company = list[1][index];
            indeedResult.push(obj);
          });
          return _context.abrupt("return", {
            indeedPageUrl: indeedPageUrl,
            indeedResult: indeedResult
          });

        case 35:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.stackoverflowScraper = function _callee2(jobTitle, location) {
  var browser, page, list, stackoverflowResult;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(puppeteer.launch());

        case 2:
          browser = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(browser.newPage());

        case 5:
          page = _context2.sent;
          _context2.next = 8;
          return regeneratorRuntime.awrap(page["goto"]("https://stackoverflow.com/jobs"));

        case 8:
          _context2.next = 10;
          return regeneratorRuntime.awrap(page.waitForSelector("#q"));

        case 10:
          _context2.next = 12;
          return regeneratorRuntime.awrap(page.waitForSelector("#l"));

        case 12:
          _context2.next = 14;
          return regeneratorRuntime.awrap(page.focus("#q"));

        case 14:
          _context2.next = 16;
          return regeneratorRuntime.awrap(page.keyboard.type(jobTitle));

        case 16:
          _context2.next = 18;
          return regeneratorRuntime.awrap(page.focus("#l"));

        case 18:
          _context2.next = 20;
          return regeneratorRuntime.awrap(page.keyboard.type(location));

        case 20:
          _context2.next = 22;
          return regeneratorRuntime.awrap(page.click(".js-search-btn"));

        case 22:
          _context2.next = 24;
          return regeneratorRuntime.awrap(page.waitFor(1000));

        case 24:
          _context2.next = 26;
          return regeneratorRuntime.awrap(page.evaluate(function () {
            var titleList = Array.from(document.querySelectorAll(".fc-black-800 a")).map(function (link) {
              return link.getAttribute("title");
            });
            var companyList = Array.from(document.querySelectorAll(".fc-black-700 span")).map(function (item) {
              return item.innerText.trim();
            });
            var imagesList = Array.from(document.querySelectorAll(".grid img")).map(function (item) {
              return item.getAttribute("src");
            });
            var hrefList = Array.from(document.querySelectorAll(".fc-black-800 a")).map(function (item) {
              return item.getAttribute("href");
            });
            return [titleList, companyList, imagesList, hrefList];
          }));

        case 26:
          list = _context2.sent;
          _context2.next = 29;
          return regeneratorRuntime.awrap(browser.close());

        case 29:
          stackoverflowResult = [];
          list[0].forEach(function (key, i) {
            var obj = {};
            obj.job = list[0][i];
            obj.company = list[1][i];
            obj.imageSrc = list[2][i];
            obj.jobHref = list[3][i];
            stackoverflowResult.push(obj);
          });
          return _context2.abrupt("return", {
            stackoverflowResult: stackoverflowResult
          });

        case 32:
        case "end":
          return _context2.stop();
      }
    }
  });
};