const route = require('express').Router();

route.get('/', (req, res) => {
    res.status(200).json({
        message: "Adventurer Management API"
    });
});

const heroRoutes = require('./heroRoutes');
const classRoutes = require('./classRoutes');
const partyRoutes = require('./partyRoutes');

route.use('/heroes', heroRoutes);
route.use('/classes', classRoutes);
route.use('/parties', partyRoutes);

module.exports = route;