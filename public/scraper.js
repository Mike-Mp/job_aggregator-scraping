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
    indeedResult.push(obj);
  });

  return { pageUrl, indeedResult };
};

exports.stackoverflowScraper = async (jobTitle, location) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  console.log(jobTitle, location);

  await page.goto("https://stackoverflow.com/jobs");

  await page.waitForSelector("#q");
  await page.waitForSelector("#l");

  await page.focus("#q");
  await page.keyboard.type(jobTitle);

  await page.focus("#l");
  await page.keyboard.type(location);

  await page.click(".js-search-btn");

  await page.waitFor(2000);

  let list = await page.evaluate(() => {
    let titleList = Array.from(
      document.querySelectorAll(".fc-black-800 a")
    ).map((link) => link.getAttribute("title"));
    let companyList = Array.from(
      document.querySelectorAll(".fc-black-700 span")
    ).map((item) => item.innerText.trim());
    let imagesList = Array.from(
      document.querySelectorAll(".grid img")
    ).map((item) => item.getAttribute("src"));
    let hrefList = Array.from(
      document.querySelectorAll(".fc-black-800 a")
    ).map((item) => item.getAttribute("href"));
    return [titleList, companyList, imagesList, hrefList];
  });

  console.log(page.url());

  const stackoverflowPageUrl = page.url();

  // close browser, return values

  await browser.close();

  const stackoverflowResult = [];

  list[0].forEach((key, i) => {
    const obj = {};
    obj.job = list[0][i];
    obj.company = list[1][i];
    obj.imageSrc = list[2][i];
    obj.jobHref = list[3][i];
    stackoverflowResult.push(obj);
  });

  console.log(stackoverflowResult, `length: ${stackoverflowResult.length}`);

  return { stackoverflowPageUrl, stackoverflowResult };
};
