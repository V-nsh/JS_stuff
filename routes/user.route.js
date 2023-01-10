const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');

// router.get('/test', user_controller.test);
router.post('/create', user_controller.user_create.bind(user_controller));
router.post('/nonSakec', user_controller.non_sakec_create.bind(user_controller));
router.get('/read/:id', user_controller.read_user);
router.get('/:id/update', user_controller.update_user); //The way we define links doesn't matter, it can fetch parameters anyway, but the first one is better.
router.get('/delete/:id', user_controller.delete_user);

module.exports = router;