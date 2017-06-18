let async=require('async');
/**
 * 瀑布模型也是一个串行结构，第一个任务完成后才能开启第二个任务，第二个完成后才能开启第三个任务
 * 上一个任务的返回值会传递给下一个
 */
async.waterfall([
    function(cb){
    setTimeout(function(){
        cb(null,'鸡蛋')
    },1000)
    },
    function(data,cb){
        setTimeout(function(){
            cb(null,'炒'+data);
        },2000)
    },
    function(data,cb){
        setTimeout(function(){
            cb(null,'吃'+data);
        },3000)
    }
],function(err,result){
    console.log(err);
    console.log(result);  //result得到的是最后一个函数的输出结果
});