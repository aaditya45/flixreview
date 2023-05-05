const movie = require('../model/movie');
const review=require('../model/review');
const movieService = require('./movieService');

const reviewService=()=>{
    return {
        createReview:async(req,res,next)=>{
            try{
                console.log("createReview");
                
                var reviewBody=req?.body?.reviewBody?.trim();
                console.log(reviewBody);
                if(review.length==0||review==undefined) return res.status(400).json({status:"error",response:"wrong review"});
                var imdbId=req?.body?.imdbId?.trim();
                if(imdbId.length==0||imdbId==undefined) return res.status(400).json({status:"error",response:"wrong imdbId"});
                const review_ = await review.create({ body:reviewBody });
                console.log(review_);
                const movie_ = await movie.findOneAndUpdate(
                    { imdbId:imdbId },
                    { "$push": { "reviewIds": review_._id } },
                    { new: true }
                  );
              
                console.log(movie_);
                return res.status(200).json({
                    status:"success",
                    response:movie_
                });
            }catch(err){
                console.log(err);
            }
        },
        getReviews:async(req,res)=>{
            var reviews=[];
            try{
                var data=await review.find({});
                if(!data||data.length==0) return res.status(404).json({status:"error",response:"not found"});
                for(var x=0;x<data.length;x++){
                    reviews.push(data[0]);
                }
                return res.status(200).json({
                    status:"success",
                    response:reviews
                });
            }catch(err){
                return res.status(400).json({status:"error",response:err})
            }
        }
    }
}

module.exports=reviewService;
