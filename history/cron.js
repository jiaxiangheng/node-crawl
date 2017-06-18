//计划任务
let CronJob=require('cron').CronJob;
/**
 * 秒 分 小时 日期 月 星期
 * 星号*代表所有可能出现的值
 * 固定值  精确匹配，当固定什么时间执行
 * 枚举值：用逗号隔开的枚举值  1,3,7,9
 * 区间值：用-隔开  1-30
 * 星/5  代表每隔五秒执行一次
 */
let job=new CronJob('* * * * * *',function(){
    console.log(new Date().toLocaleString())
});