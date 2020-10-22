const { Router } = require('express');
// >> Here will be the APIs
// importation ('require').
//
// A) Uncomment this line:
const main = require('./main');
const users = require('./user');

const router = new Router()

// >> Here will be the APIs
// registration
//
// A) Uncomment this line:
router.use(main.path, main.router)
router.use(users.path, users.router)

module.exports = router;
