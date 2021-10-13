/**
 * Author:Dawtie 
 * Route for Post
*/
const post = require("../controllers/postController.js");
const upload = require('../middleware/upload')
 const express = require("express");
 const router=express.Router();

 // Add a new post 
 router.post("/",upload, post.create);  

 // Retrieve all post
 router.get("/cc", post.findCount);

 // Retrieve latest posts
 router.get("/home", post.findRecent);


 // Retrieve a post
 router.get("/:id", post.findOne);

 // Delete a post
 //router.delete("/:id", post.delete);
 
 // Add a new comment 
 router.post("/comment/:id", post.commentcreate); 

//  router.get("/", homeController.getHome);

//  router.post("/upload", upload.single("file"), post.uploadFiles);
 module.exports=router;