const db = require(/*path to database connection*/);

const controller = {};

controller.OAuthController = (req, res, next) => {
//handles all routing to and from OAuth
  return next();
}; 

controller.clientController = (req, res, next) => {
//handles all routing to and from database to retrieve user aquariums
  return next();
};

controller.aquariumController = (req, res, next) => {
  //gets fishies?
  return next();
}

