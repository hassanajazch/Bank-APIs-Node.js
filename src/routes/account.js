import express from 'express';
import AccountController from '../controllers/Account';
const router = express.Router({});

router.post('/addAccount', AccountController.addAccount);
router.post('/transferAmount', AccountController.transferAmount);
router.get('/balance', AccountController.getBalance);
router.get('/transferHistory', AccountController.getTransferHistory);

module.exports = router;
