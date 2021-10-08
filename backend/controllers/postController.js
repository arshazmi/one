/**
 * Author:Dawtie 
 * Controller for Post
*/
const model = require("../models");
// write modelname 
const Topic =model.db.topic;
const Post =model.db.post;
const User =model.db.user;
const PostEngage =model.db.postengage;
const Comment =model.db.comment;
const sequelize=model.db.sequelize;
// Create and Save a new Topic
exports.create = (req, res) => {
 console.log("create post")
 res.send("api not written")
  // Create a Topic
/*   const post = {
    postName: req.body.postName,
    desc:req.body.desc,
    imageUrl: req.body.imageUrl,
    audioUrl:req.body.audioUrl,
    audioUrl:req.body.pdfUrl,
    topicId:req.body.topicId,
    userId:Math.floor(Math.random() * 2)+1,
    postengageId:req.body.postengageId
  };

  // Save Topic in the database
  Post.create(post)
    .then(data => {
     // res.send(data);
     res.status(201).json({message:"Post created successfully"});
    })
    .catch(err => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while creating the Post."
      });
    }); */
};

// Retrieve comment count Info from the database.
exports.findCount = (req, res) => {

  Comment.findAll({
          
        attributes:['postId',[sequelize.fn('COUNT', sequelize.col('comment_desc')), 'comment_count']],
        group : ['postId']
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving Post."
      });
    });
};


// Retrieve 4 given Posts Info from the database(order by latest).
exports.findRecent = (req, res) => {

  Post.findAll({
    
    attributes: ['id', 'postName','imageUrl','pdfUrl','audioUrl','desc','updatedAt',[sequelize.fn('COUNT', sequelize.col('comments.id')), 'comment_count']],
    order: [["updatedAt", "DESC"]],
    include : [
      { 
        model: User, 
        attributes:['id','userName'],
        required: true,
      },
      { 
        model: Topic, 
        attributes:['id','topicName','imageUrl'],
        required: true,
      },
      { 
        model: PostEngage, 
        attributes:['id','like','dislike'],
        required: true,
      },
      { 
        model: Comment, 
        attributes:[/* 'postId',[sequelize.fn('COUNT', sequelize.col('comment_desc')), 'comment_count'] */],
        
        required:true
      }
    ],
    group : ['post.id','user.id','topic.id','postengage.id'],
    limit: 4 ,
    subQuery:false

  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving Post."
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



// Retrieve a given Topic Info from the database.
exports.findOne = (req, res) => {
  const id = req.params.id;

  Post.findOne(  {     
    attributes: ['id', 'postName','imageUrl','pdfUrl','audioUrl','desc','updatedAt',[sequelize.fn('COUNT', sequelize.col('comments.id')), 'comment_count']],
    where: { id: id },
    include : [
      { 
        model: User, 
        attributes:['id','userName'],
        required: true,
      },
      { 
        model: Topic, 
        attributes:['id','topicName'],
        required: true,
      },
      { 
        model: PostEngage, 
        attributes:['id','like','dislike'],
        required: true,
      },
      { 
        model: Comment, 
        attributes:['id','description','like','dislike'],        
        required:true
      }
    ],
    group : ['post.id','user.id','topic.id','postengage.id','comments.id']
      } )
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving Post."
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