"use strict";var puppeteer=require("puppeteer");exports.indeedScraper=function(r,t){var n,a,u,o,c;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(puppeteer.launch());case 2:return n=e.sent,e.next=5,regeneratorRuntime.awrap(n.newPage());case 5:return a=e.sent,e.next=8,regeneratorRuntime.awrap(a.goto("https://www.indeed.com"));case 8:return e.next=10,regeneratorRuntime.awrap(a.waitForSelector("#text-input-what"));case 10:return e.next=12,regeneratorRuntime.awrap(a.waitForSelector("#text-input-where"));case 12:return e.next=14,regeneratorRuntime.awrap(a.focus("#text-input-what"));case 14:return e.next=16,regeneratorRuntime.awrap(a.keyboard.type(r));case 16:return e.next=18,regeneratorRuntime.awrap(a.focus("#text-input-where"));case 18:return e.next=20,regeneratorRuntime.awrap(a.keyboard.type(t));case 20:return e.next=22,regeneratorRuntime.awrap(a.click(".icl-Button"));case 22:return e.next=24,regeneratorRuntime.awrap(a.waitFor(2e3));case 24:return e.next=26,regeneratorRuntime.awrap(a.evaluate(function(){return[Array.from(document.querySelectorAll(".title")).map(function(e){return e.innerText.trim()}),Array.from(document.querySelectorAll(".company")).map(function(e){return e.innerText.trim()})]}));case 26:return u=e.sent,o=a.url(),n.close(),c=[],u[0].forEach(function(e,r){var t={};t.job=u[0][r],t.company=u[1][r],c.push(t)}),e.abrupt("return",{pageUrl:o,result:c});case 32:case"end":return e.stop()}})};