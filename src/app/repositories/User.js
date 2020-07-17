import models from '../../models';

export default class UserRepo {
    static async addCustomerInDB(customers) {
        try {
            await models.User.bulkCreate(customers);
        } catch (err) {
            throw err;
        }
    }
}
