const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = "642226186408-18gmtkmgc2ombi4aobdfalsvn7kq75aq.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
    new GoogleStrategy(
        {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
        },
    function(accessToken, refreshToken, profile, done) {
            done(null,profile);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})

