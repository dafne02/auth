const router = require('express').Router();
const AuthController = require('./controller');

const path = '/auth';

// >> Here will be the
// definition of the routes.
router.post('/token', AuthController.getToken); 


module.exports = {
  path,
  router,
}
