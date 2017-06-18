let async=require('async');
async.series([    //串行执行异步任务
    function(cb){
    setTimeout(function(){
        console.log(3);  //3
        cb(null,'3');  //向result中输入3  ，如果cb第一个参数有值那么执行完此函数后不执行后面函数
    },3000)
    },
    function(cb){
        setTimeout(function(){
            console.log(2);//2
            cb(null,'2');//向result中输入2
        },2000)
    },
    function(cb){
        setTimeout(function(){
            console.log(1); //1
            cb(null,'1');//向result中输入1
        },1000)
    }
],function (err, result) {
    console.log(err);  //null
    console.log(result);  //[ '3', '2', '1' ]

});