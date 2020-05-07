const puppeteer = require("puppeteer");

exports.indeedScraper = async (jobTitle) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.goto("https://www.indeed.com/");

  page.waitForSelector("#text-input-what");
  page.waitForSelector("#text-input-where");
};

exports.stackoverflowScraper = async (jobTitle) => {};
