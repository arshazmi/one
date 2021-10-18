/**
 * Author:Arsheena Azmi 
 * middleware for upload image ***topic
*/

var multer = require('multer'); //module to upload files

var storage =   multer.diskStorage({  
    destination: (req, file, callback)=>{  
      callback(null, './public/images');  
    },  
    filename: (req, file, callback)=>{  
      callback(null, file.originalname);  
    }  
  });  
  
var uploadTopic = multer({ storage : storage}).single('cimage'); 

module.exports = uploadTopic;