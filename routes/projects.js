const express = require('express');
const db = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const projects = await db.Project.findAll({
            order: [['order', 'ASC']],
        });
        res.status(200).json({ projects });
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ message: 'Failed to fetch projects' });
    }
});

module.exports = router;
