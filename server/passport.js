const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require('./keys').google;
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

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/google/redirect',
      passReqToCallback: true,
    },
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
