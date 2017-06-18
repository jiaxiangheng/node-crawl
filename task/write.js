let Movie=require('../model').Movie;
let async=require('async');
let debug=require('debug')('crawl:write');

module.exports=function (movies, callback) {
    async.forEach(movies,function(movie,cb){
        Movie.create(movie,cb);
        debug(`写入电影：${movie.name}`)
    },callback)
};
// module.exports([
//     { name: '中国推销员',
//         url: 'http://www.baidu.com/baidu?cl=3&tn=SE_baiduhomet8_jmjb7mjw&fr=top1000&wd=%D6%D0%B9%FA%CD%C6%CF%FA%D4%B1' }
// ]);