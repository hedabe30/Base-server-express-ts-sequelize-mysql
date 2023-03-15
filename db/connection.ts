import { Sequelize } from "sequelize";

const db = new Sequelize('node', 'root', '123456', {
  host: 'localhost',
  port: 33060,
  dialect: 'mysql',
  // logging: false
});

// db.sync();

export default db;