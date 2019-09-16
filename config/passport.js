var passport = require("passport"),
    FacebookStrategy = require("passport-facebook").Strategy;

module.exports = function(app){

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function (user, done){
        done(null, user);
    })

    passport.deserializeUser(function(user, done){
        done(null, user);
    })

    passport.use(new FacebookStrategy({
        clientID: "2373348552982692",
        clientSecret: "3f5bc868c8b3f5e9dd8665741d72f0fa",
        callbackURL: "https://localhost:3000/auth/facebook/callback",
        profileFields: ["id", "email", "displayName", "photos", "birthday","gender"],
        passReqToCallback: true
    },
    function (req, accessToken, refreshToken, profile, done){
        var user = {};

        user.image = profile._json.picture.data.url;
        user.displayName = profile.displayName;
        user.facebook = {};
        user.facebook.id = profile.id;
        user.facebook.token = accessToken;
        console.log(profile._json);
        done(null, user);
    }

))
}