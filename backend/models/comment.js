'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Comment.init({

    description:{
                  type:DataTypes.STRING(500),
                  field:'comment_desc',
                  validate: { len: [1,500] }
                },
    like: {
                    type: DataTypes.INTEGER,
                    field: 'comment_likes'
                },
 
    dislike:{
                 type: DataTypes.INTEGER,
                 field: 'comment_dislikes'
    }
  }, {
    sequelize,
    modelName: 'comment',
  });
  Comment.associate = (models) => {
   
    Comment.belongsTo(models.post);
    Comment.belongsTo(models.user);
  }
  return Comment;
};