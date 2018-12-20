const async = require('async');



// 1.串行无关联
// 表示多个函数需要按照步骤执行，但是相互之间的结果没有依赖
// 如果其中一个步骤有err。那么后面的函数不执行，直接执行最后的回调函数
// 最后的返回值为一个对象，前面每一个函数的返回结果合并为一个对象
    // {函数名1：返回值，函数名2：返回值}
// callback 参数：第一个为异常，第二个为方法的返回值

// 对象表示法
async.series({
    one: function (callback) {
        callback(null,'right1');//two 函数继续执行
        // callback('i am err1','one') //two 函数不执行
    },
    two: function (callback) {
        // callback('i am err2','two')
        callback(null,'two')
    },
}, function (err, result) {
    console.log(err)
    console.log(result) // { one: 'right1', two: 'two' }
})
// 数组表示法
async.series([
    function (callback) {
        callback(null,'right1');//two 函数继续执行
        // callback('i am err1','one') //two 函数不执行
    },
    function (callback) {
        // callback('i am err2','two')
        callback(null,'two')
    },
], function (err, result) {
    console.log(err)
    console.log(result) // { one: 'right1', two: 'two' }
})

// 2.串联有关联
async.waterfall([
    function(callback){
        callback(null,'one')
    },
    function(onearg,callback){
        callback(null,'two')
    }
],function(err,result){
    console.log(err);
    console.log(result)
})

// 3.并行无关联
console.log('-----------------并行无关联-------------')
async.parallel({
    one:function(callback){
        callback('i am err','one')
    },
    two:function(callback){
        callback(null,'two')
    }
},function(err,result){
    console.log(err);
    console.log(result)
})
async.parallel([
    function(callback){
        callback('i am err','one')
    },
    function(callback){
        callback(null,'two')
    }
],function(err,result){
    console.log(err);
    console.log(result)
})