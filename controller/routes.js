const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Index" });
});

// async
router.get("/results", (req, res) => {
  res.render("results", {
    title: "Results for: (interpolate query string here)",
  });
});

module.exports = router;
