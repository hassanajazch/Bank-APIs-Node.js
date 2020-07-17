const app = require('./expressApp');
const userRoutes = require('../routes/user');
const accountRoutes = require('../routes/account');

app.use('/api/user', userRoutes);
app.use('/api/account', accountRoutes);

module.exports = app;
