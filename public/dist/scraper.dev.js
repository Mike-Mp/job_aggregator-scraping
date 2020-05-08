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
            result.push(obj);
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
  var browser, page, list;
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
          page["goto"]("https://stackoverflow.com/jobs");
          _context2.next = 9;
          return regeneratorRuntime.awrap(page.waitForSelector("#q"));

        case 9:
          _context2.next = 11;
          return regeneratorRuntime.awrap(page.waitForSelector("#l"));

        case 11:
          _context2.next = 13;
          return regeneratorRuntime.awrap(page.focus("#q"));

        case 13:
          _context2.next = 15;
          return regeneratorRuntime.awrap(page.keyboard.type(jobTitle));

        case 15:
          _context2.next = 17;
          return regeneratorRuntime.awrap(page.focus("#l"));

        case 17:
          _context2.next = 19;
          return regeneratorRuntime.awrap(page.keyboard.type(location));

        case 19:
          _context2.next = 21;
          return regeneratorRuntime.awrap(page.click(".s-btn s-btn__md"));

        case 21:
          _context2.next = 23;
          return regeneratorRuntime.awrap(page.evaluate(function () {
            var titleList = Array.from(document.querySelectorAll(".s-link stretched-link")).map(function (link) {
              return link.getAttribute("title");
            });
            var companyList = Array.from(document.querySelectorAll(".fc-black-700 fs-body1"));
            return [titleList, companyList];
          }));

        case 23:
          list = _context2.sent;
          console.log(list); // close browser, return values

          _context2.next = 27;
          return regeneratorRuntime.awrap(browser.close());

        case 27:
        case "end":
          return _context2.stop();
      }
    }
  });
};