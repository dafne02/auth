const router = require('express').Router();
const UserController = require('./controller');


const path = '/users';

// >> Here will be the
// definition of the routes.
router.get('', UserController.getUser);
router.get('get', UserController.getUser);
router.post('post', UserController.createUser);
router.put('put', UserController.updateUser);
router.delete('delete', UserController.deleteUser);


module.exports = {
  path,
  router,
}