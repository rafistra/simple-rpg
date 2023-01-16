'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class skills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      skills.belongsToMany(models.classes, { through: models.classSkills });
      // define association here
    }
  }
  skills.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    desc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'skills',
  });
  return skills;
};