// var multer = require('multer'); //module to upload files

// var storage =   multer.diskStorage({  
//     destination: (req, file, callback)=>{  
//       callback(null, './public/images');  
//     },  
//     filename: (req, file, callback)=>{  
//       callback(null, file.originalname);  
//     }  
//   });  
  
// var uploadImage = multer({ storage : storage}).single('bimage'); 
// // var uploadPdf = multer({ storage : storage}).single('bimage'); 
// module.exports = uploadImage;

var multer = require('multer'); //module to upload files
var path=require('path');
var storage =   multer.diskStorage({  
    destination: (req, file, cb)=>{  
    //   callback(null, './public/images');  
    if (file.fieldname === "bimage") {
        cb(null, './public/images')
    }
    else if (file.fieldname === "baudio") {
        cb(null, './public/audio');
    }
    else if (file.fieldname === "bpdf") {
        cb(null, './public/pdf')
    }
    },  
    filename: (req, file, cb)=>{  
    //   callback(null, file.originalname);  
    
        if (file.fieldname === "bimage") {
            // cb(null, file.fieldname+Date.now()+path.extname(file.originalname));
            cb(null, file.originalname);
        }
      else if (file.fieldname === "baudio") {
        // cb(null, file.fieldname+Date.now()+path.extname(file.originalname));
        cb(null, file.originalname);
      }
      else if (file.fieldname === "bpdf") {
        // cb(null, file.fieldname+Date.now()+path.extname(file.originalname));
        cb(null, file.originalname);
      }
    
    }  
  });  
  
var uploadImage = multer({ storage : storage}).fields(
    [
        {
            name:'bimage',
            maxCount:1
        },
        {
            name: 'baudio', maxCount:1
        },
        {
            name: 'bpdf', maxCount:1
        }
    ]
);
// var uploadImage = multer({ storage : storage}).single('bimage'); 
module.exports = uploadImage;
