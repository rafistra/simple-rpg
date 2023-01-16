'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class classSkills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      classSkills.belongsTo(models.classes);
      classSkills.belongsTo(models.skills);
      // define association here
    }
  }
  classSkills.init({
    classId: DataTypes.INTEGER,
    skillId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'classSkills',
  });
  return classSkills;
};