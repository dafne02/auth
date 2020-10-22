const router = require('express').Router();
const UserController = require('./controller');


const path = '/users';

// >> Here will be the
// definition of the routes.
router.get('/getUser/:id', UserController.getUser); // /users/user
router.get('/getAllUsers', UserController.getAllUsers); // /users/get
router.post('/createUser', UserController.createUser);
router.put('/updateUser/:id', UserController.updateUser);
router.delete('/deleteUser/:id', UserController.deleteUser);


module.exports = {
  path,
  router,
}