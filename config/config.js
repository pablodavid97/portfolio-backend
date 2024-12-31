require('dotenv').config();

module.exports = {
    development: {
        username: process.env.DB_USER || 'default_user',
        password: process.env.DB_PWD || 'default_password',
        database: process.env.DB_NAME || 'database_development',
        host: process.env.DB_HOST || '127.0.0.1',
        dialect: 'postgres', // Change this to your database dialect (e.g., mysql, postgres)
        define: {
            underscored: true, // Use snake_case for columns by default (same as in your centralized sequelize instance)
        },
    },
    test: {
        username: process.env.DB_USER || 'default_user',
        password: process.env.DB_PWD || 'default_password',
        database: process.env.DB_NAME || 'database_test',
        host: process.env.DB_HOST || '127.0.0.1',
        dialect: 'postgres',
        define: {
            underscored: true, // Use snake_case for columns by default (same as in your centralized sequelize instance)
        },
    },
    production: {
        username: process.env.DB_USER || 'default_user',
        password: process.env.DB_PWD || 'default_password',
        database: process.env.DB_NAME || 'database_production',
        host: process.env.DB_HOST || '127.0.0.1',
        dialect: 'postgres',
        define: {
            underscored: true, // Use snake_case for columns by default (same as in your centralized sequelize instance)
        },
    },
};
