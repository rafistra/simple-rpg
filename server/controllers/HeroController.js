const { heroes, sequelize } = require('../models');
const { heroStats } = require('../models');
const { classes } = require('../models');
const { encryptPwd, decryptPWd } = require('../helpers/bcrypt');
const { tokenGenerator, tokenVerifier } = require('../helpers/jsonwebtoken');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

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

    static async getHeroById(req, res) {
        try {
            const id = Number(req.params.id)

            let result = await heroes.findByPk(id, {
                include: [classes, heroStats]
            });
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async login(req, res) {
        try {
            const { email, password } = req.body;
            let emailFound = await heroes.findOne({
                where: { email }
            });
            if (emailFound) {
                if (decryptPWd(password, emailFound.password)) {
                    let access_token = tokenGenerator(emailFound);
                    res.status(200).json({
                        access_token
                    });

                    let verifyToken = tokenVerifier(access_token);
                    console.log(verifyToken);
                } else {
                    res.status(403).json({
                        message: "Invalid Password!"
                    });
                }
            } else {
                res.status(404).json({
                    message: "User not found!"
                });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async addHero(req, res) {
        try {
            const { name, level, classId, partyId, email, password, isAdmin } = req.body;
            // const { image } = req.file.filename;
            let result = await heroes.create({
                name, level, image: req.file.filename, classId, partyId, email, password, isAdmin
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

    static async search(req, res) {
        try {
            const { name } = req.body;
            const search = String(name).toLowerCase();;
            const whereClause = {
                [Op.or]: [
                    Sequelize.where(
                        Sequelize.fn('LOWER', Sequelize.col('name')), { [Op.like]: `%${search}%` }
                    )
                ]
            }
            let result = await heroes.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(
                            Sequelize.fn('LOWER', Sequelize.col('name')), { [Op.like]: `%${search}%` }
                        ),
                        Sequelize.where(
                            Sequelize.fn('LOWER', Sequelize.col('image')), { [Op.like]: `%${search}%` }
                        ),
                    ]
                }
            })
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = HeroController;