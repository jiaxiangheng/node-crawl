let request=require('request');
let iconv=require('iconv-lite');
let cheerio=require('cheerio');
let debug=require('debug')('crawl:read');
/**
 * 1.向网址发出请求得到响应体
 * 2.把得到的Buffer转成字符串
 * 3.从字符串中提取我们需要的内容
 * 4.把提取到的结果传入回调函数
 * @param url
 * @param callback
 */
module.exports=function (url,callback) {
    request({url,encoding:null},function(err,response,body){
        body=iconv.decode(body,'gb2312');
        let $=cheerio.load(body);
        let movies=[];
        $('.keyword .list-title').each(function(index,item){
            let $this=$(this);
            let movie={
                name:$this.text(),
                url:$this.attr('href')
            };
            debug(`读到电影：${movie.name}`);
            movies.push(movie);
        });
        callback(err,movies)
    })
};

// module.exports('http://top.baidu.com/buzz?b=26&c=1',function(err,movies){
//     console.log(movies);
// });