const express = require('express');
const router = express.Router();

//should handle all requests to /aquarium

router.get('/', aquariumController, (req, res) => {

});

module.exports = router;