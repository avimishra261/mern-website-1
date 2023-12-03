const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth-controller');
// const {home, register} = require('../controllers/auth-controller');  //@1


router.route('/').get(authControllers.home);
// router.route('/').get(home);  //@1

// router.route('/').get((req,res) => {
//     res.status(200).send("This is the homepage with router")
// });

router.route('/register').post(authControllers.register);
// router.route('/register').get(register);  //@1

// router.route('/register').get((req,res) => {
//     res.status(200).send("This is the registration page with router")
// });

module.exports = router;