const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PWD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 5432,
        dialect: 'postgres',
        define: {
            underscored: true, // Automatically convert camelCase to snake_case for all models
        },
    }
);

// Import all models
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Project = require('./project')(sequelize, DataTypes);

module.exports = db;
