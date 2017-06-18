//根据环境变量的有选择向控制台输出调试信息
let debug=require('debug');
let loggerA=debug('loggerA');  //传入一个名称，返回一个debug的实例
loggerA('loggerA');  //调用此函数会向控制台输出一条日志，输出的时候会进行判断，此日志记录器的名称与环境变量中的DEBUG的值是否匹配，如果不匹配则不输出日志
//set DEBUG=loggerA 是window下设置环境变量的方式
//export DEBUG=loggerA  是Linux和mac下设置环境变量的方式
