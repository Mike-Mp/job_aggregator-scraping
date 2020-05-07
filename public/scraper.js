const puppeteer = require("puppeteer");

exports.indeedScraper = async (jobTitle, location) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.indeed.com");

  await page.waitForSelector("#text-input-what");
  await page.waitForSelector("#text-input-where");

  console.log(page.url(), typeof page.url());

  await page.focus("#text-input-what");
  await page.keyboard.type(jobTitle);

  await page.focus("#text-input-where");
  await page.keyboard.type(location);

  await page.click(".icl-Button");

  await page.waitFor(2000);

  console.log(page.url(), typeof page.url());

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

  console.log(list);

  // close browser, return arrays
  browser.close();

  return list;
};

// exports.stackoverflowScraper = async (jobTitle, location) => {};
