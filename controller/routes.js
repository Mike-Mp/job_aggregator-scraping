const router = require("express").Router();
const scraper = require("../public/scraper");

router.get("/", (req, res) => {
  res.render("index", { title: "Index" });
});

router.get("/results", async (req, res) => {
  // const indeedList = await scraper.indeedScraper(
  //   req.params.jobTitle,
  //   req.params.location
  // );

  res.render("resultsPage", {
    title: "Results for: (interpolate query string here)",
  });
});

module.exports = router;
