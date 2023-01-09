const classRoute = require('express').Router();
const { ClassController } = require('../controllers/');

classRoute.get('/', ClassController.getAllClasses);
classRoute.get('/heroes', ClassController.getAllClassesWithHeroes);
classRoute.post('/', ClassController.add);
classRoute.put('/:id', ClassController.update);
classRoute.delete('/:id', ClassController.delete);

module.exports = classRoute;