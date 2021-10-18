/**
 * Author:Dawtie 
 * Route for Topic
*/
const topic = require("../controllers/topicController.js");
const uploadt = require('../middleware/uploadtopic') 
 const express = require("express");
 const router=express.Router();

 // Retrieve all topic categories
 router.get("/category", topic.findCategory);

 // Add a new topic 
 router.post("/",uploadt, topic.create);  

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