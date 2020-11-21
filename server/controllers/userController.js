const userController = {};

userController.verifyUser = (req, res, next) => {
  console.log('from verifyUser', req.user)
  if(!req.user) return next(`Session is not active`)
  return next();
};

module.exports = userController