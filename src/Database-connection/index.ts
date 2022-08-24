import { Sequelize } from "sequelize";
import * as tedious from 'tedious';


const config = {
    username: 'root',
    password: 'Awaisniaz@1234',
    database: 'doctorappointement',
    host: 'localhost',
    dialect: 'mysql',
    dialectModule: tedious, //   <----   <---- this is the key!!
    define: { underscored: true },
};

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql'
});
const testingConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


testingConnection();