import express from 'express';
import UserController from '../controllers/User';
const router = express.Router({});

router.get('/addCustomers', UserController.addCustomers);

module.exports = router;
