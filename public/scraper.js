const puppeteer = require("puppeteer");
console.log("accessed scraper file");
exports.indeedScraper = async (jobTitle, location) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.indeed.com/");

  await page.waitForSelector("#text-input-what");
  await page.waitForSelector("#text-input-where");

  console.log(page.url(), typeof page.url());

  const jobInput = await page.$("#text-input-what");
  const locationInput = await page.$("#text-input-where");
  const submitButton = await page.$(".icl-Button");

  await page.focus(jobInput);
  await page.keyboard.type(jobTitle);

  await page.focus(locationInput);
  await page.keyboard.type(location);

  await page.click(submitButton);

  await page.waitFor(2000);

  console.log(page.url(), typeof page.url());
  // close browser, return arrays
  browser.close();
};

// exports.stackoverflowScraper = async (jobTitle, location) => {};
