/**
 * Author:Dawtie 
 * Route for Topic
*/
const topic = require("../controllers/topicController.js");
  
 const express = require("express");
 const router=express.Router();

 // Add a new topic 
 router.post("/", topic.create);  

 // Retrieve all topic
 router.get("/", topic.findAll);

 // Retrieve latest topic
 router.get("/latest", topic.findRecent);

 // Retrieve top rated topic
 router.get("/top", topic.findTop);

 // Retrieve a topic
 router.get("/:id", topic.findOne);

 // Delete a topic
 router.delete("/:id", topic.delete);
 


 
 module.exports=router;