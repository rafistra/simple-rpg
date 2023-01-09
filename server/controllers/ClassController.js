const { classes } = require('../models');
const { heroes } = require('../models');

class ClassController {
    static async getAllClasses(req, res) {
        try {
            let result = await classes.findAll();
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async getAllClassesWithHeroes(req, res) {
        try {
            let result = await classes.findAll({
                include: [heroes]
            });
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async add(req, res) {
        try {
            const { name, image } = req.body;
            let result = await classes.create({
                name, image
            });
            res.status(201).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.id;
            const { name, image } = req.body;
            let result = await classes.update({
                name, image
            }, {
                where: { id }
            });
            res.status(201).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let result = await classes.destroy({
                where: { id }
            });
            result === 1 ?
                res.status(200).json({
                    message: `class id ${id} deleted successfully!`
                }) :
                res.status(404).json({
                    message: `class id ${id} not deleted successfully!`
                });
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = ClassController;