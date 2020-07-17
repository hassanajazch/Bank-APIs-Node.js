import UserRepo from '../repositories/User';
import { customers } from '../../fixtures/fixtures';

export default class UserService {
    static async addCustomer() {
        try {
            await UserRepo.addCustomerInDB(customers);

            return true;
        } catch (err) {
            throw err;
        }
    }
}
