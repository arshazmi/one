'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    userName: {
                    type: DataTypes.STRING,
                    field: 'username'
                },
    userImage: {
                    type: DataTypes.STRING,
                    field: 'user_img'
                }
  }, {
    sequelize,
    modelName: 'user',
  });
  User.associate = (models) => {   
    User.hasMany(models.topic);
    User.hasMany(models.post);
    User.hasMany(models.comment);
  }
  return User;
};