'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lyrics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  lyrics.init({
    likes: DataTypes.NUMBER,
    content: DataTypes.STRING,
    song: DataTypes.ARRAY
  }, {
    sequelize,
    modelName: 'lyrics',
  });
  return lyrics;
};