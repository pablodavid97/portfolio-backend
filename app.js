const express = require('express');
const { sequelize } = require('./models');
const projectRoutes = require('./routes/projects');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/projects', projectRoutes);

// Database connection and server start
sequelize
    .authenticate()
    .then(() => console.log('Database connected...'))
    .catch((err) => console.error('Database connection error:', err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
