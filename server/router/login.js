const express = require('express');
const router = express.Router();

//should handle all requests to /login

router.get('/', OAuthController, (req, res) => { //OAuth for authentication
  res.redirect('signin'); //<-- needs to have cookie set here? or is done in controller? 
});


module.exports = router;