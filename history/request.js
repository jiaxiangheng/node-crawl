//基本爬虫
let request=require('request');
let iconv=require('iconv-lite');   //自己引入用于转换gbk gb2312编码的库
let cheerio = require('cheerio');
let url='http://top.baidu.com/category?c=1&fr=topindex';
let url1='http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
/**
 * url  要爬取得网址
 * encoding：null  禁止request自动转码，因为会默认转成utf-8，在对gbk gb2312页面进行转码会造成乱码
 * err  错误对象
 * response   响应对象
 * body   响应体
 */
request({url,encoding:null},function(err,response,body){
    // console.log(response.statusCode);//获取响应状态码
    body=iconv.decode(body,'gb2312');   //进行转码
    let $=cheerio.load(body);  // 加载body内容使用jQuery可以获取元素
    let categores=[];  //用于存放扒取的内容对象
    $('.hd .title a').each(function(index,item){
        let $this=$(this);
        let movie={
            name:$this.text(),
            url:$this.attr('href')
        };
        let result=movie.url.match(/b=(\d+)/);
        movie.id=result[1];
        categores.push(movie);
    });
    console.log(categores);

});

