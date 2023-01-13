const heroRoute = require('express').Router();
const { HeroController } = require('../controllers/');
const { authentication } = require('../middlewares/auth');
const { upload } = require('../middlewares/multer');

heroRoute.get(
    '/',
    authentication,
    HeroController.getAllHeroes);
heroRoute.get(
    '/hero-stats/:id',
    HeroController.getHeroById);
heroRoute.get(
    '/hero-player/',
    authentication,
    HeroController.getUserHero);
heroRoute.post(
    '/add-hero',
    upload.single('image'),
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
    '/delete-hero/:id',
    HeroController.delete);
heroRoute.get(
    '/search',
    HeroController.search);


module.exports = heroRoute;