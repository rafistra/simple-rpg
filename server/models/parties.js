'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class parties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      parties.hasMany(models.heroes);
      // define association here
    }
  }
  parties.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    guildId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'parties',
  });
  return parties;
};