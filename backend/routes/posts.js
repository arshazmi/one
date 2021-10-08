/**
 * Author:Dawtie 
 * Route for Post
*/
const post = require("../controllers/postController.js");
  
 const express = require("express");
 const router=express.Router();

 // Add a new post 
 router.post("/", post.create);  

 // Retrieve all post
 router.get("/cc", post.findCount);

 // Retrieve latest posts
 router.get("/home", post.findRecent);


 // Retrieve a post
 router.get("/:id", post.findOne);

 // Delete a post
 //router.delete("/:id", post.delete);
 


 
 module.exports=router;