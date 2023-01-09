'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class heroes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      heroes.belongsTo(models.classes);
      heroes.belongsTo(models.parties);
      // define association here
    }
  }
  heroes.init({
    name: DataTypes.STRING,
    level: DataTypes.INTEGER,
    image: DataTypes.STRING,
    classId: DataTypes.INTEGER,
    partyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'heroes',
  });
  return heroes;
};