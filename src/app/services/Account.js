import AccountRepo from '../repositories/Account';
import UserRepo from '../repositories/User';

export default class UserService {
    /**
     * add account details in database
     * @param {Object} accountDetails all details related to account
     * @returns {Promise<boolean>}
     */
    static async addAccount(accountDetails) {
        try {
            await AccountRepo.addAccount(accountDetails);

            return true;
        } catch (err) {
            throw err;
        }
    }

    static async transferAmount(transferDetails) {
        try {
            const recipientAccount = await AccountRepo.findAccountByUserId(transferDetails.recipientId);
            const senderAccount = await AccountRepo.findAccountById(transferDetails.AccountId);
            // check recipient account and available amount
            if (recipientAccount && senderAccount.deposit >= transferDetails.amount) {
                await AccountRepo.addTransferHistory(transferDetails);

                // update sender account
                const senderAccountBalance = senderAccount.deposit - transferDetails.amount;
                await AccountRepo.updateAccountBalance(senderAccountBalance, senderAccount.id);

                // update recipient account
                const recipientBalance = recipientAccount.deposit + transferDetails.amount;
                await AccountRepo.updateAccountBalance(recipientBalance, recipientAccount.id);
            } else {
                throw new Error('recipient account does not exist');
            }
        } catch (err) {
            throw err;
        }
    }

    /**
     * get account balance
     * @param {Number} accountId
     * @returns {Promise<{balance: Number}>}
     */
    static async getAccountBalance(accountId) {
        try {
            const accountDetails = await AccountRepo.findAccountById(accountId);

            return {
                balance: accountDetails.deposit,
            };
        } catch (err) {
            throw err;
        }
    }

    /**
     * get transfer history list
     * @param {Number} accountId
     * @returns {Array}
     */
    static async getAccountTransferHistory(accountId) {
        try {
            const accountDetails = await AccountRepo.findAccountTransferHistory(accountId);

            return accountDetails;
        } catch (err) {
            throw err;
        }
    }
}
