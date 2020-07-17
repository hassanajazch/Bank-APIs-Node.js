import UserService from '../app/services/User';

const UserController = {};

/**
 * Add sample customers in database
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */

UserController.addCustomers = async (req, res) => {
    try {
        await UserService.addCustomer();

        res.status(200).send('Successfully added customers');
    } catch (err) {
        // We can add error reporting tools like Sentry
        console.log(err);
        res.status(400).send('Unable to add customers');
    }
};

export default UserController;
