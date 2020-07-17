import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
const basename = path.basename(__filename);
import config from '../config/config';

const db = {};
const mysqlConfig = config.mysqlConnection;
try {
    var sequelize = new Sequelize(mysqlConfig.database, mysqlConfig.username, mysqlConfig.password, mysqlConfig);
    fs.readdirSync(__dirname)
        .filter((file) => {
            return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
        })
        .forEach((file) => {
            const model = sequelize['import'](path.join(__dirname, file));
            db[model.name] = model;
        });

    Object.keys(db).forEach((modelName) => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });
} catch (e) {
    console.log(e);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
