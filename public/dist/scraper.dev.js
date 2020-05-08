"use strict";

var puppeteer = require("puppeteer");

exports.indeedScraper = function _callee(jobTitle, location) {
  var browser, page, list, pageUrl, indeedResult;
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
          indeedResult = [];
          list[0].forEach(function (key, index) {
            var obj = {};
            obj.job = list[0][index];
            obj.company = list[1][index];
            indeedResult.push(obj);
          });
          return _context.abrupt("return", {
            pageUrl: pageUrl,
            indeedResult: indeedResult
          });

        case 32:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.stackoverflowScraper = function _callee2(jobTitle, location) {
  var browser, page, list, stackoverflowPageUrl, stackoverflowResult;
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
          console.log(jobTitle, location);
          _context2.next = 9;
          return regeneratorRuntime.awrap(page["goto"]("https://stackoverflow.com/jobs"));

        case 9:
          _context2.next = 11;
          return regeneratorRuntime.awrap(page.waitForSelector("#q"));

        case 11:
          _context2.next = 13;
          return regeneratorRuntime.awrap(page.waitForSelector("#l"));

        case 13:
          _context2.next = 15;
          return regeneratorRuntime.awrap(page.focus("#q"));

        case 15:
          _context2.next = 17;
          return regeneratorRuntime.awrap(page.keyboard.type(jobTitle));

        case 17:
          _context2.next = 19;
          return regeneratorRuntime.awrap(page.focus("#l"));

        case 19:
          _context2.next = 21;
          return regeneratorRuntime.awrap(page.keyboard.type(location));

        case 21:
          _context2.next = 23;
          return regeneratorRuntime.awrap(page.click(".js-search-btn"));

        case 23:
          _context2.next = 25;
          return regeneratorRuntime.awrap(page.waitFor(2000));

        case 25:
          _context2.next = 27;
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

        case 27:
          list = _context2.sent;
          console.log(page.url());
          stackoverflowPageUrl = page.url(); // close browser, return values

          _context2.next = 32;
          return regeneratorRuntime.awrap(browser.close());

        case 32:
          stackoverflowResult = [];
          list[0].forEach(function (key, i) {
            var obj = {};
            obj.job = list[0][i];
            obj.company = list[1][i];
            obj.imageSrc = list[2][i];
            obj.jobHref = list[3][i];
            stackoverflowResult.push(obj);
          });
          console.log(stackoverflowResult, "length: ".concat(stackoverflowResult.length));
          return _context2.abrupt("return", {
            stackoverflowPageUrl: stackoverflowPageUrl,
            stackoverflowResult: stackoverflowResult
          });

        case 36:
        case "end":
          return _context2.stop();
      }
    }
  });
};