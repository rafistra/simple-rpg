const partyRoute = require('express').Router();
const { PartyController } = require('../controllers/');

partyRoute.get('/', PartyController.getAllParties);
partyRoute.get('/heroes', PartyController.getAllPartiesWithHeroes);
partyRoute.post('/', PartyController.add);
partyRoute.put('/:id', PartyController.update);
partyRoute.delete('/:id', PartyController.delete);


module.exports = partyRoute;