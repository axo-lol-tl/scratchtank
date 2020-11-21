const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require('./keys').google;
<<<<<<< HEAD
const db = require('./models/model');

passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const text = `SELECT * FROM users WHERE accesstoken='${id}'`;
    const { rows } = await db.query(text);
    const user = rows;
    console.log(user);
    return done(null, user);
  } catch (error) {
    console.log(error);
  }
});
=======
>>>>>>> 17c6886dfebe921314bc7bbdba481b2e895d9b92

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/google/redirect',
      passReqToCallback: true,
    },
<<<<<<< HEAD
    async (request, accessToken, refreshToken, profile, done) => {
      try {
        const text1 = `select exists(select * from users where users.accesstoken = '${profile.id}')`;
        const text2 = `INSERT INTO users(email, accesstoken) VALUES ('${profile.email}', '${profile.id}')`;
        const response = await db.query(text1);
        if (!response.rows[0].exists) await db.query(text2);
        return done(null, profile);
      } catch (e) {
        console.log(e);
      }
    }
  )
);
=======
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
>>>>>>> 17c6886dfebe921314bc7bbdba481b2e895d9b92
