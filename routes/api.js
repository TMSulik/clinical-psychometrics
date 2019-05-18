const express = require("express");
const router = express.Router();
const db = require("../models");

// A GET route for scraping the NYT website
router.get("/", (req, res) => {
  db.Article.find({})
      .then(function (dbArticle) {
          const retrievedArticles = dbArticle;
          let hbsObject;
          hbsObject = {
              articles: dbArticle
          };
          res.render("index", hbsObject);        
      })
      .catch(function (err) {
          res.json(err);
      });
});

router.get("/saved", (req, res) => {
  db.Article.find({isSaved: true})
      .then(function (retrievedArticles) {
          let hbsObject;
          hbsObject = {
              articles: retrievedArticles
          };
          res.render("saved", hbsObject);
      })
      .catch(function (err) {
          res.json(err);
      });
});


module.exports = router;
