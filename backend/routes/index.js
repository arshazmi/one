const express=require('express');
const topic=require('./topics')
//const post=require('./posts')

const router=express.Router();

const defaultRoutes=[
{
    path:'/topic',
    route:topic
},
/* {
    path:'/post',
    route:post
} */];
    

defaultRoutes.forEach((route)=>{
    router.use(route.path,route.route);
});

module.exports=router;