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
        clientID: "325421134865746",
        clientSecret: "6631760d1eb210032048f8fcc1646c30",
        callbackURL: "https://localhost:3000/auth/facebook/callback",
        profileFields: ["id", "email", "displayName", "photos"],
        passReqToCallback: true
    },
    function (req, accessToken, refreshToken, profile, done){
        var user = {};

        user.image = profile._json.picture.data.url;
        user.displayName = profile.displayName;
        user.facebook = {};
        user.facebook.id = profile.id;
        user.facebook.token = accessToken;

        done(null, user);
    }

))
}