const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
  db.User.find({})
      .then(function (Person) {
          const personality = Person;
          let hbsObject;
          hbsObject = {
              profile: personality
          };
          res.render("index", hbsObject);        
      })
      .catch(function (err) {
          res.json(err);
      });
});

// router.get("/saved", (req, res) => {
//   db.User.find({isSaved: true})
//       .then(function (retrievedArticles) {
//           let hbsObject;
//           hbsObject = {
//               articles: retrievedArticles
//           };
//           res.render("saved", hbsObject);
//       })
//       .catch(function (err) {
//           res.json(err);
//       });
// });

module.exports = router;
