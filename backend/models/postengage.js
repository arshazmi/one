'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PostEngage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PostEngage.init({
    like: {
                    type: DataTypes.INTEGER,
                    field: 'post_likes'
                },
 
    dislike:{
                 type: DataTypes.INTEGER,
                 field: 'post_dislikes'
    }
  }, {
    sequelize,
    modelName: 'postengage',
  });
  PostEngage.associate = (models) => {
   
   PostEngage.hasOne(models.post);

  }
  return PostEngage;
};