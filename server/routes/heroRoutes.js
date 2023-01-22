const heroRoute = require('express').Router();
const { HeroController } = require('../controllers/');
const { authentication } = require('../middlewares/auth');
const { upload } = require('../middlewares/multer');

heroRoute.get('/', authentication, HeroController.getAllHeroes);
heroRoute.get('/hero-stats/:id', authentication, HeroController.getHeroById);
heroRoute.get('/hero-player/', authentication, HeroController.getPlayer);
heroRoute.get('/player-companion/', authentication, HeroController.getPlayerCompanions);
heroRoute.get('/search', HeroController.search);

heroRoute.post('/add-hero', upload.single('image'), HeroController.addHero);
heroRoute.post('/registration', upload.single('image'), HeroController.registration);
heroRoute.post('/login', HeroController.login);
heroRoute.post('/add-stats/', HeroController.addHeroStats);
heroRoute.post('/add-companion/', HeroController.addCompanions);

heroRoute.put('/update/:id', upload.single('image'), HeroController.update);

heroRoute.delete('/delete-hero/:id', HeroController.delete);


module.exports = heroRoute;