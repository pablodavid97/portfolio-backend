require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models');
const projectRoutes = require('./routes/projects');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Manually set CORS headers for all routes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization'
    );

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    next();
});

// Routes
app.use('/projects', projectRoutes);

// Database connection and server start
sequelize
    .authenticate()
    .then(() => console.log('Database connected...'))
    .catch((err) => console.error('Database connection error:', err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
