var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(!req.user){
    res.redirect("/");
  }
  next();
});
router.get('/', function(req, res) {
  res.render("user", {
      user: {
        name: req.user.displayName,
        image: req.user.image
      }

  })
});
module.exports = router;
