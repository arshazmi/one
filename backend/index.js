console.log("Hello Onemic app")
/**
 * Author:Dawtie 
 * Starter file
*/
const express=require('express');
const cors=require('cors');
const model = require('./models');
const routes = require ('./routes');
const app=express();
const port=90;
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api',routes);

model.db.sequelize.sync().then(() => {
    console.log('Db created');
  });


  app.listen(port,(req,res)=>{
    console.log(`App listening to port ${port}`);
})