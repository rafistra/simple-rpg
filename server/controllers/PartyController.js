const { classes } = require('../models');
const { heroes } = require('../models');
const { parties } = require('../models');

class PartyController {
    static async getAllParties(req, res) {
        try {
            let result = await parties.findAll();
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async getAllPartiesWithHeroes(req, res) {
        try {
            let result = await parties.findAll({
                include: [heroes]
            });
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async add(req, res) {
        try {
            const { name, image, guildId } = req.body;
            let result = await parties.create({
                name, image, guildId
            });
            res.status(201).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.id;
            const { name, image, guildId } = req.body;
            let result = await parties.update({
                name, image, guildId
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
            let result = await parties.destroy({
                where: { id }
            });
            result === 1 ?
                res.status(200).json({
                    message: `Party id ${id} deleted successfully!`
                }) :
                res.status(404).json({
                    message: `Party id ${id} not deleted successfully!`
                });
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = PartyController;