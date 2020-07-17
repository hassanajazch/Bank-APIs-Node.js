import AccountService from '../app/services/Account';

const AccountController = {};

/**
 * Add account details
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */

AccountController.addAccount = async (req, res) => {
    try {
        if (req.body) {
            const accountDetails = req.body;
            await AccountService.addAccount(accountDetails);

            return res.status(200).send('Successfully added customers');
        }

        res.status(400).send('Unable to add customers');
    } catch (err) {
        // add error reporting tools like Sentry
        console.log(err);
        res.status(400).send('Unable to add customers');
    }
};

/**
 * transfer amount to other account
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */

AccountController.transferAmount = async (req, res) => {
    try {
        if (req.body) {
            const transferDetails = req.body;
            await AccountService.transferAmount(transferDetails);

            return res.status(200).send('Successfully amount transferred');
        }

        res.status(400).send('Unable to transfer amount');
    } catch (err) {
        // add error reporting tools like Sentry
        console.log(err);
        res.status(400).send('Unable to transfer amount');
    }
};

AccountController.getBalance = async (req, res) => {
    try {
        const accountId = req.query.accountId;
        if (accountId) {
            const accountBalance = await AccountService.getAccountBalance(accountId);

            return res.json(accountBalance);
        }

        res.status(400).send('Unable to find balance, accountId is missing form param');
    } catch (err) {
        // add error reporting tools like Sentry
        console.log(err);
        res.status(400).send('Unable to find balance, accountId is missing form param');
    }
};

AccountController.getTransferHistory = async (req, res) => {
    try {
        const accountId = req.query.accountId;
        if (accountId) {
            const transferHistory = await AccountService.getAccountTransferHistory(accountId);

            return res.json(transferHistory);
        }

        res.status(400).send('Unable to find transfer history, accountId is missing form param');
    } catch (err) {
        // add error reporting tools like Sentry
        console.log(err);
        res.status(400).send('Unable to find transfer history, accountId is missing form param');
    }
};

export default AccountController;
