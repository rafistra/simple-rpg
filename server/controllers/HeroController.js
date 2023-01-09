const { heroes } = require('../models');
const { heroStats } = require('../models');
const { classes } = require('../models');

class HeroController {
    static async getAllHeroes(req, res) {
        try {
            let result = await heroes.findAll({
                include: [classes, heroStats]
            });
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async addHero(req, res) {
        try {
            const { name, level, image, classId, partyId } = req.body;
            let result = await heroes.create({
                name, level, image, classId, partyId
            });
            res.status(201).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    // Temp
    static async addHeroStats(req, res) {
        try {
            const { hp, mgc, stam, str, def, int, dex, char, heroId } = req.body;
            let result = await heroStats.create({
                hp, mgc, stam, str, def, int, dex, char, heroId
            });
            res.status(201).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.id;
            const { name, level, image, classId, partyId } = req.body;
            let result = await heroes.update({
                name, level, image, classId, partyId
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
            let result = await heroes.destroy({
                where: { id }
            });
            result === 1 ?
                res.status(200).json({
                    message: `Heroes id ${id} deleted successfully!`
                }) :
                res.status(404).json({
                    message: `Heroes id ${id} not deleted successfully!`
                });
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = HeroController;