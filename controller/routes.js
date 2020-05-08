const router = require("express").Router();
const scraper = require("../public/scraper");

router.get("/", (req, res) => {
  res.render("index", { title: "Index" });
});

router.get("/results", async (req, res) => {
  let { indeedPageUrl, indeedResult } = await scraper.indeedScraper(
    req.query.jobTitle,
    req.query.location
  );

  const {
    stackoverflowPageUrl,
    stackoverflowResult,
  } = await scraper.stackoverflowScraper(
    req.query.jobTitle,
    req.query.location
  );

  console.log("result", indeedResult, "pageUrl", indeedPageUrl);

  res.render("results", {
    title: `${req.query.jobTitle} in ${req.query.location}`,
    indeedResult,
    indeedPageUrl,
    stackoverflowPageUrl,
    stackoverflowResult,
  });
});

module.exports = router;
