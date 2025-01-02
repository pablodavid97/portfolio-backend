const express = require('express');
const db = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
    const { limit = 9, offset = 0 } = req.query;

    try {
        const projects = await db.Project.findAll({
            order: [['order', 'ASC']],
            limit: parseInt(limit),
            offset: parseInt(offset),
        });
        const total = await db.Project.count();

        // res.status(200).json({ projects, total });
        setTimeout(() => {
            res.status(200).json({ projects, total });
        }, 3000);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ message: 'Failed to fetch projects' });
    }
});

module.exports = router;
