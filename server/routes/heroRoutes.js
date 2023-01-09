const heroRoute = require('express').Router();
const { HeroController } = require('../controllers/');

heroRoute.get('/', HeroController.getAllHeroes);
heroRoute.post('/', HeroController.add);
heroRoute.put('/:id', HeroController.update);
heroRoute.delete('/:id', HeroController.delete);


module.exports = heroRoute;