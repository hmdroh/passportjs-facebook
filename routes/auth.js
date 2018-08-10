var express = require("express");
var passport = require("passport");
var router = express.Router();

router.route("/facebook")
    .get(passport.authenticate("facebook", {
        scope: ["email"]
    }));

router.route("/facebook/callback")
    .get(passport.authenticate("facebook", {
        successRedirect: "/users",
        failureRedirect: "/error"
    }));

module.exports = router;