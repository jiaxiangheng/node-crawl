let fs=require('fs');
let async=require('async');

let data=[
    {filename:'1.txt',content:'1'},
    {filename:'2.txt',content:'2'},
    {filename:'3.txt',content:'3'}
];

/*
data.forEach(function(item){
    fs.writeFile(item.filename,item.content,function(err){

    })
});
*/

/**
 * data:要迭代的数组
 * fn1: 针对每一个数组元素需要执行的方法
 * fn2: 最终的回调
 */
async.forEach(data,function(item,cb){
    fs.writeFile(item.filename,item.content,cb);
},function(err){
    console.log('全部写入完毕');
});