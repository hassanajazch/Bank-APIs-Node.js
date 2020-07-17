const user = require('./user');
const account = require('./account');

module.exports = (router) => {
    user(router);
    account(router);
    return router;
};
