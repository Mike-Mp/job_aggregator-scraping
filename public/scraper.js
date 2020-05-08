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

  const indeedResult = [];

  list[0].forEach((key, index) => {
    const obj = {};
    obj.job = list[0][index];
    obj.company = list[1][index];
    result.push(obj);
  });

  return { pageUrl, indeedResult };
};

exports.stackoverflowScraper = async (jobTitle, location) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.goto("https://stackoverflow.com/jobs");

  await page.waitForSelector("#q");
  await page.waitForSelector("#l");

  await page.focus("#q");
  await page.keyboard.type(jobTitle);

  await page.focus("#l");
  await page.keyboard.type(location);

  await page.click(".s-btn s-btn__md");

  let list = await page.evaluate(() => {
    let titleList = Array.from(
      document.querySelectorAll(".s-link stretched-link")
    ).map((link) => link.getAttribute("title"));
    let companyList = Array.from(
      document.querySelectorAll(".fc-black-700 fs-body1")
    );

    return [titleList, companyList];
  });

  console.log(list);

  // close browser, return values

  await browser.close();
};
