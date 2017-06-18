let async=require('async');
async.parallel([   //并行执行
    function(cb){
        setTimeout(function(){
            console.log('a');
            cb(null,'a')
        },3000)
    },
    function(cb){
        setTimeout(function(){
            console.log('b');
            cb(null,'b')
        },2000)
    },
    function(cb){
        setTimeout(function(){
            console.log('c');
            cb(null,'c')
        },1000)
    },
],function (err, result) {  //在结果数组中，结果的排列顺序和任务的完成先后顺序无关，和任务的排列顺序相等
    console.log(err);
    console.log(result);
});