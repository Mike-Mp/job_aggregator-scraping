const puppeteer = require("puppeteer");

exports.indeedScraper = async (jobTitle, location) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.indeed.com");

  await page.waitForSelector("#text-input-what");
  await page.waitForSelector("#text-input-where");

  await page.focus("#text-input-what");
  await page.keyboard.type(jobTitle);

  await page.focus("#text-input-where");
  await page.keyboard.type(location);

  await page.click(".icl-Button");

  await page.waitFor(2000);

  let list = await page.evaluate(() => {
    let titlesList = Array.from(
      document.querySelectorAll(".title")
    ).map((title) => title.innerText.trim());
    let companiesList = Array.from(
      document.querySelectorAll(".company")
    ).map((comp) => comp.innerText.trim());

    return [titlesList, companiesList];
  });

  const pageUrl = page.url();

  // close browser, return arrays / objects ?
  browser.close();

  const result = [];

  list[0].forEach((key, index) => {
    const obj = {};
    obj.job = list[0][index];
    obj.company = list[1][index];
    result.push(obj);
  });

  return { pageUrl, result };
};

// exports.stackoverflowScraper = async (jobTitle, location) => {};
