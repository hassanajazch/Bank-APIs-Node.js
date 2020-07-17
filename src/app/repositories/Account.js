import models from '../../models';

export default class AccountRepo {
    static async addAccount(accountDetails) {
        try {
            await models.Account.create(accountDetails);
        } catch (err) {
            throw err;
        }
    }

    /**
     * find account by
     * @param {Number} recipientId
     * @returns {Promise<*>}
     */
    static async findAccountByUserId(recipientId) {
        try {
            const result = await models.Account.findOne({ where: { userId: recipientId } });

            return result ? result : null;
        } catch (err) {
            throw err;
        }
    }

    static async findAccountById(id) {
        try {
            const result = await models.Account.findOne({ where: { id } });

            return result ? result : null;
        } catch (err) {
            throw err;
        }
    }

    /**
     * add transfer history
     * @param {Object} transferDetails
     * @returns {Promise<*>}
     */
    static async addTransferHistory(transferDetails) {
        try {
            await models.TransferHistory.create(transferDetails);

            return true;
        } catch (err) {
            throw err;
        }
    }

    /**
     * update user account balance
     * @param {Number} amount
     * @param {Number} id
     * @returns {Promise<*>}
     */
    static async updateAccountBalance(amount, id) {
        try {
            const accountDetail = await models.Account.findOne({ where: { id } });
            await accountDetail.update({ deposit: amount });

            return true;
        } catch (err) {
            throw err;
        }
    }

    /**
     * find account transfer history
     * @param {Number} accountId
     */
    static async findAccountTransferHistory(accountId) {
        try {
            return await models.TransferHistory.findAll({
                where: { AccountId: accountId },
            });
        } catch (err) {
            throw err;
        }
    }
}
