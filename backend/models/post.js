'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Post.init({
    postName: {
                    type: DataTypes.STRING,
                    field: 'post_name',
                    validate: { len: [0,60] }
                },
    audioUrl: {
                    type: DataTypes.STRING,
                    field: 'audio_url'
                },
    pdfUrl: {
                    type: DataTypes.STRING,
                    field: 'pdf_url'
                },
    imageUrl: {
                    type: DataTypes.STRING,
                    field: 'image_url'
                },
    desc:{
                 type: DataTypes.STRING,
                 field: 'user_img',
                 validate: { len: [0,500] }
    }
  }, {
    sequelize,
    modelName: 'post',
  });
  Post.associate = (models) => {
   
   Post.belongsTo(models.topic);
   Post.belongsTo(models.user);
   //Post.hasOne(models.postengage);

  }
  return Post;
};