const router = require("express").Router();
const scraper = require("../public/scraper");

router.get("/", (req, res) => {
  res.render("index", { title: "Index" });
});

router.get("/results", async (req, res) => {
  const indeedList = await scraper.indeedScraper(
    req.query.jobTitle,
    req.query.location
  );

  console.log("indeedList", indeedList);

  res.render("results", {
    title: "Results for: (interpolate query string here)",
  });
});

module.exports = router;
