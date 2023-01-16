const { classes, heroes, skills, classSkills } = require('../models');
const fs = require('fs')

class ClassController {
    static async getAllClasses(req, res) {
        try {
            let result = await classes.findAll({
                include: [skills]
            });
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

    static async getClassById(req, res) {
        try {
            const id = +req.params.id;
            let result = await classes.findByPk(id, {
                include: [skills]
            })
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async add(req, res) {
        try {
            const { name } = req.body;
            const { skillId1, skillId2, skillId3, skillId4 } = req.body;
            let addClass = await classes.create({
                name, image: req.file.filename
            });

            await classSkills.create({
                classId: addClass.id, skillId: skillId1
            })

            await classSkills.create({
                classId: addClass.id, skillId: skillId2
            })

            await classSkills.create({
                classId: addClass.id, skillId: skillId3
            })

            await classSkills.create({
                classId: addClass.id, skillId: skillId4
            })

            let result = await classes.findOne({
                where: { id: addClass.id },
                include: [skills]
            })
            res.status(201).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.id;
            const { name, image } = req.body;
            const { skillId1, skillId2, skillId3, skillId4 } = req.body;
            let oldImg = await classes.findOne({ where: { id } });

            if (req.file) {
                await classes.update({ name, image: req.file.filename}, { where: { id } });
                fs.unlink('./public/uploads/' + oldImg.image, (err) => { if (err) throw err })
            } else {
                await classes.update({ name, image: req.file.filename }, { where: { id } });
            }

            await classSkills.destroy({
                where: { classId: id }
            })

            await classSkills.create({
                classId: id,
                skillId: skillId1
            })
            await classSkills.create({
                classId: id,
                skillId: skillId2
            })
            await classSkills.create({
                classId: id,
                skillId: skillId3
            })
            await classSkills.create({
                classId: id,
                skillId: skillId4
            })

            let result = await classes.findByPk(id, {
                include: [skills]
            });
            res.status(201).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let oldImg = await classes.findOne({ where: { id } });
            let result = await classes.destroy({
                where: { id }
            });

            await classSkills.destroy({
                where: { classId: id }
            })

            fs.unlink('./public/uploads/' + oldImg.image, (err) => {
                if (err) {
                    throw err;
                }
            })

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

    //Skills
    static async getSkills(req, res) {
        try {
            let result = await skills.findAll();
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async getSkillById(req, res) {
        try {
            const id = Number(req.params.id);
            let result = await skills.findByPk(id);
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async addSkill(req, res) {
        try {
            const { name, desc } = req.body;

            let result = await skills.create({
                name, image: req.file.filename, desc
            });
            res.status(201).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async getAllSkills(req, res) {
        try {
            let result = await skills.findAll({
                order: [
                    ['name', 'asc']
                ]
            });
            // console.log(result)
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
        
    }

    static async addSkillClass(req, res) {
        try {
            const { classId, skillId } = req.body;
            
            let result = await classSkills.create({
                classId, skillId
            });

            res.status(200).json(result);
        } catch (e) {
            res.status(500).json(err);
        }
    }
}

module.exports = ClassController;