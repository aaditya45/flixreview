const express=require('express');
const router=express.Router();
const movieService=require('../service/movieService')()


const movieAPI=()=>{
    router.get('/',movieService.getMovies);
    router.post('/getById',movieService.getById);
    router.post('/getByImdbId',movieService.getByImdbId);
    return router;
};

module.exports=movieAPI;
//https://www.youtube.com/watch?v=URUwGA75QaE