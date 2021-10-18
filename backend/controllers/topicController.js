/**
 * Author:Dawtie 
 * Controller for Topic
*/
const model = require("../models");
const path = require("path");
// write modelname 
const Topic =model.db.topic;
const User =model.db.user;
const Post =model.db.post;
const PostEngage =model.db.postengage;
const Comment =model.db.comment;
const TopicCategory =model.db.topiccategory;
const sequelize=model.db.sequelize;

// Retrieve all  Topic Category from the database.
exports.findCategory = (req, res) => {

  TopicCategory.findAll(
    {attributes: ['id', 'categoryName']})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving Topic Category."
      });
    });
};
// Create and Save a new Topic
exports.create = (req, res) => {
 
  // Create a Topic
  const topic = {
    topicName: req.body.topicName,
    description:req.body.description,
    imageUrl: req.file.originalname,
    userId:Math.floor(Math.random() * 2)+1,
    topiccategoryId:req.body.topiccategoryId
  };

  // Save Topic in the database
  Topic.create(topic)
    .then(data => {
     // res.send(data);
     res.status(201).json({message:"Topic created successfully"});
    })
    .catch(err => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while creating the Topic."
      });
    });
};

// Retrieve 6 given Topic Info from the database(order by top rated).
exports.findTop = (req, res) => {

  Topic.findAll({
    limit: 6 ,
    attributes: ['id', 'topicName','imageUrl']
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving Topic."
      });
    });
};

// Retrieve all given Topic Info from the database.
exports.findAll = (req, res) => {

  Topic.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving Topic."
      });
    });
};

// Retrieve 10 recent Topic Info from the database(for carousal).
exports.findRecent = (req, res) => {

    Topic.findAll({ 
      attributes: ['id', 'topicName','imageUrl'],
      limit: 10 ,
      order: [["createdAt", "DESC"]],
      include : [
        { 
          model: User, 
          attributes:['id','userName'],
          required: true
        }]
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).json({
          message:
            err.message || "Some error occurred while retrieving Topic."
        });
      });
  };

// Retrieve a given Topic Info from the database.
exports.findOne = (req, res) => {
  const id = req.params.id;

  Topic.findOne(  
    {  where: { id: id },
    attributes: ['id', 'topicName','imageUrl','description',  [sequelize.fn('COUNT', 'posts.id'), 'PostCount'] ],
    group:['topic.id','posts.id','user.id','posts->user.id'],
    include : [
      { 
        model: User, 
        attributes:['id','userName','userImage'],
        required: true,
      },
      { 
        model: Post, 
        //attributes: ['id', 'postName','imageUrl','pdfUrl','audioUrl','desc','updatedAt'],
        where:{topicId:id},
        required: true,
        include:User,
          /* [{ 
            model: PostEngage, 
            attributes:['id','like','dislike'],
            required: true,
          },
          { 
            model: Comment, 
            attributes:['id','description','like','dislike','userId']
          }
        ] */
        
       
      }
    ]
   
  } )
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving Topic."
      });
    });
};

// Delete a Topic with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Topic.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Topic was deleted successfully!"
        });
      } else {
        res.send({
          message: "Cannot delete Topic with id=${id}. Maybe Topic was not found!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Topic with id=" + id
      });
    });
};