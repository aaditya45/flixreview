const express=require('express');
const router=express.Router();
const reviewService=require('../service/reviewService')()


const reviewAPI=()=>{
    //console.log("review api");
    router.post('/createReview',reviewService.createReview);
    router.get('/',reviewService.getReviews);
    return router;
};

module.exports=reviewAPI;