const classRoute = require('express').Router();
const { ClassController } = require('../controllers/');
const { upload } = require('../middlewares/multer');

classRoute.get('/', ClassController.getAllClasses);
classRoute.get('/heroes', ClassController.getAllClassesWithHeroes);
classRoute.get('/skills', ClassController.getAllSkills);
classRoute.get('/skill/:id', ClassController.getSkillById);

classRoute.post('/add-class',upload.single('image'), ClassController.add);
classRoute.post('/add-skill-class', ClassController.addSkillClass);
classRoute.post('/add-skill',upload.single('image'), ClassController.addSkill);

classRoute.put('/:id', ClassController.update);
classRoute.delete('/:id', ClassController.delete);

module.exports = classRoute;