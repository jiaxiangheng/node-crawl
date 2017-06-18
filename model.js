let mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/201702crawl');
let MovieSchema=new mongoose.Schema({
    name:String,
    url:String
});
let Movie = mongoose.model('Movie',MovieSchema);
exports.Movie=Movie;