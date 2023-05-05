const movie = require('../model/movie')
const review = require('../model/review')

const movieService=()=>{
    return {
        getMovies:async(req,res)=>{
            console.log("getmovies");
            let response=[]
            try{
                var data=await movie.find();
                if(data==null||data.length==0){
                    return res.json({response:"no data"});
                }
                for(var x=0;x<data.length;x++){
                    var curr=data[x];
                    var obj={};
                    obj.imdbId=curr.imdbId;
                    obj.title=curr.title;
                    obj.releaseDate=curr.releaseDate;
                    obj.trailerLink=curr.trailerLink;
                    obj.generes=curr.generes;
                    obj.poster=curr.poster;
                    obj.backdrops=curr.backdrops;
                    obj.reviewIds=curr.reviewIds;

                    var reviewsIds=curr['reviewIds'];
                    var reviews=[];
                    for(var y=0;y<reviewsIds.length;y++){
                        var data_=await review.find({_id:reviewsIds[y]});
                        reviews.push(data_[0]);
                    }
                    obj.reviews=reviews;
                    response.push(obj)
                    
                }
                //console.log(response);
                return res.status(200).json({status:"success",response:response});
            }catch(e){
                console.log(e.message);
                return res.json({status:"error",response:e});
            }
        },
        getById:async(req,res)=>{
            var id=req?.body?._id?.trim();
            try{
                var data=await movie.find({_id:id});
                if(!data||data.length==0) return res.json({status:"error",response:"not found!"});
                return res.status(200).json({status:"success",response:data});
            }catch(err){
                return res.json({success:"error",response:err.message});
            }
            return {};
        },
        getByImdbId:async(req,res)=>{
            var id=req?.body?.imdbId?.trim();
            try{
                var data=await movie.find({imdbId:id});
                if(!data||data.length==0) return res.json({status:"error",response:"not found!"});
                return res.status(200).json({status:"success",response:data});
            }catch(err){
                return res.json({success:"error",response:err.message});
            }
            return {};
        }
    }
}


module.exports=movieService;