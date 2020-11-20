const passport = require('passport');
const OAuth2Strategy = require('pasport-google-oauth').OauthStrategy;

passport.use(
  new GoogleStrategy(
    {
      consumerKey: null /* GOOGLE_CONSUMER_KEY */,
      consumerSecret: null /* GOOGLE_CONSUMER_SECRET */,
      callbackURL: null,
    },
    function (token, tokenSecret, profile, done) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return done(err, user);
      });
    }
  )
);
