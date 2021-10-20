/**
 * Author:Arsheena Azmi 
 * Controller for Post
*/
// const { like } = require("sequelize/types/lib/operators");
const model = require("../models");
const path = require("path");
// write modelname 
const Topic =model.db.topic;
const Post =model.db.post;
const User =model.db.user;
const PostEngage =model.db.postengage;
const Comment =model.db.comment;
const sequelize=model.db.sequelize;
// Create and Save a new Post
exports.create = (req, res) => {
  // Create a Post
  const post = {
    postName: req.body.postName,
    desc:req.body.desc,
    imageUrl: req.files.bimage!==undefined?req.files.bimage[0].path:null,
    audioUrl:req.files.baudio!==undefined?req.files.baudio[0].path:null,
    pdfUrl:req.files.bpdf!==undefined?req.files.bpdf[0].path:null,
    topicId:req.body.topicId,
    userId:Math.floor(Math.random() * 2)+1
  };

  // Save Post in the database
  Post.create(post)
    .then(data => {
      const id=data.id;
      PostEngage.create({id:id,like:0,dislike:0})  
      return id;
    
    })
    .then(id=>{
      Post.update({ postengageId: id }, {
        where: {
          id: id
        }
      })
      res.status(201).json({message:"Post created successfully"});
    })
    .catch(err => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while creating the Post."
      });
    }); 
};

//Add a comment
exports.commentcreate = (req, res) => {
  //create comment
  const id = req.params.id;
  // const likes=1
  const comment = {
    description:req.body.description,
    like:req.body.like,
    dislike:req.body.dislike,
    postId:req.params.id,
    userId: Math.floor(Math.random() * 2) + 1,
  };

  Comment.create(comment
    // ,{
    // where: { id: id }}
    )
  .then(data => {
    res.send(data);
    // res.status(201).json({ message: "comment created successfully" });
  })
  .catch(err => {
    res.status(500).json({
      message:
        err.message || "Some error occurred while creating the comment."
    });
  });

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
        
        //required:true
      }
    ],
    group : ['post.id','user.id','topic.id','postengage.id'],
    limit: 8 ,
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

// Retrieve all given POST Info from the database.
exports.findAll = (req, res) => {

  Post.findAll()
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



// Retrieve a given POST Info from the database.
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
        attributes:['id','description','like','dislike','userId'],        
        //required:true,
        include : [
          { 
            model: User, 
            attributes:['id','userName','userImage'],
            required: true
          }
      
    ]
  }],
    group : ['post.id','user.id','topic.id','postengage.id','comments.id','comments.user.id']
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
exports.image=(req,res)=>{        //image controller
  res.sendFile(path.join(__dirname+"../../public/images/"+req.params.img));
};
// Delete a Post with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Post.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Post was deleted successfully!"
        });
      } else {
        res.send({
          message: "Cannot delete Post with id=${id}. Maybe Post was not found!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Post with id=" + id
      });
    });
};