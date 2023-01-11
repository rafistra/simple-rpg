const heroRoute = require('express').Router();
const { HeroController } = require('../controllers/');
const { authentication } = require('../middlewares/auth');

heroRoute.get(
    '/',
    authentication,
    HeroController.getAllHeroes);
heroRoute.get(
    '/hero-stats/:id',
    HeroController.getHeroById);
heroRoute.post(
    '/',
    HeroController.addHero);
heroRoute.post(
    '/login',
    HeroController.login);
heroRoute.post(
    '/stats/',
    HeroController.addHeroStats);
heroRoute.put(
    '/:id',
    HeroController.update);
heroRoute.delete(
    '/:id',
    HeroController.delete);


module.exports = heroRoute;