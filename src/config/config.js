require('dotenv').config();

const config = {
    env: process.env.APP_ENV,
    port: process.env.PORT,
    mysqlConnection: {
        username: process.env.MYSQL_MASTER_DB_USERNAME,
        password: process.env.MYSQL_MASTER_DB_PASSWORD,
        database: process.env.MYSQL_MASTER_DB_NAME,
        host: process.env.MYSQL_MASTER_DB_HOST,
        dialect: 'mysql',
        operatorsAliases: false,
        logging: false,
    },
};

export default config;
