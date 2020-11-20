const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require('./keys').google;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/google/redirect',
      passReqToCallback: true,
    },
    (request, accessToken, refreshToken, profile, done) => {
      console.log('passport callback now');
      console.log('access', accessToken);
      console.log('refresh', refreshToken);
      console.log('profile', profile);
      return done(null, profile);
      // --> USER.FINDORCREATE is an example please accurately link with our database
      // User.findOrCreate({ googleId: profile.id }, (err, user) => {
      //   return done(err, user);
      // });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
