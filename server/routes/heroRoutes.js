const heroRoute = require('express').Router();
const { HeroController } = require('../controllers/');

heroRoute.get('/', HeroController.getAllHeroes);
heroRoute.post('/', HeroController.addHero);
heroRoute.post('/stats/', HeroController.addHeroStats);
heroRoute.put('/:id', HeroController.update);
heroRoute.delete('/:id', HeroController.delete);


module.exports = heroRoute;