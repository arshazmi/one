'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Topic.init({
    topicName: {
                    type: DataTypes.STRING,
                    field: 'topic_name',
                    validate: { len: [0,60] }
                },

    description:{
                  type:DataTypes.STRING(500),
                  field:'topic_desc',
                  validate: { len: [0,500] }
                },
    imageUrl: {
                    type: DataTypes.STRING
             }
  }, {
    sequelize,
    modelName: 'topic',
  });
  Topic.associate = (models) => {
   
    Topic.belongsTo(models.user);
    Topic.belongsTo(models.topiccategory);
    Topic.hasMany(models.post)

  }
  return Topic;
};