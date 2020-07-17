import config from './config/config';
const server = require('./server');
import chalk from 'chalk';
import models from '../src/models';

models.sequelize.sync().then(() => {
    server.listen(`${config.port}`, () => {
        console.log(`Server now listening at localhost:${config.port} ${chalk.green('✓✓')}`);
    });
});
