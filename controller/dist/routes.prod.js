"use strict";var router=require("express").Router(),scraper=require("../public/scraper");router.get("/",function(e,r){r.render("index",{title:"Index"})}),router.get("/results",function(e,r){r.render("results",{title:"Results for: (interpolate query string here)"})}),module.exports=router;