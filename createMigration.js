const fs = require('fs');
const path = require('path');

// Get the current timestamp for naming the migration file
const timestamp = new Date().toISOString().replace(/[-T:.]/g, ''); // Format: yyyyMMddHHmmss

// Set the name for the new migration (can be customized)
const migrationName = process.argv[2] || 'migration'; // Default name if not provided

// Set up the migration file name
const migrationFileName = `${timestamp}_${migrationName}.js`;

// Set the directory for migrations (default: 'migrations')
const migrationsDir = path.join(__dirname, 'migrations');

// Ensure the migrations directory exists
if (!fs.existsSync(migrationsDir)) {
    fs.mkdirSync(migrationsDir);
}

// Set the full path for the new migration file
const migrationFilePath = path.join(migrationsDir, migrationFileName);

// Create a basic migration template
const migrationTemplate = `'use strict';\n\n module.exports = {
    up: async (queryInterface, Sequelize) => {
        // Add migration logic here
    },
    down: async (queryInterface, Sequelize) => {
        // Add rollback logic here
    }
};`;

try {
    // Write the migration template to the file
    fs.writeFileSync(migrationFilePath, migrationTemplate);

    console.log(`Migration created successfully: ${migrationFileName}`);
} catch (error) {
    console.error('Error creating migration:', error);
}
