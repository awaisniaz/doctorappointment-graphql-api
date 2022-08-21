import { Sequelize } from "sequelize";
import * as tedious from 'tedious';


const config = {
    username: 'user',
    password: 'pass',
    database: 'db',
    host: 'host',
    dialect: 'mssql',
    dialectModule: tedious, //   <----   <---- this is the key!!
    define: { underscored: true },
    // dialectOptions,
};

const sequelize = new Sequelize(config.database, config.username, config.password);
const testingConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


testingConnection();