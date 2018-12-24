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
        callback(null, 'right1'); //two 函数继续执行
        // callback('i am err1','one') //two 函数不执行
    },
    two: function (callback) {
        // callback('i am err2','two')
        callback(null, 'two')
    },
}, function (err, result) {
    console.log(err)
    console.log(result) // { one: 'right1', two: 'two' }
})
// 数组表示法
async.series([
    function (callback) {
        callback(null, 'right1'); //two 函数继续执行
        // callback('i am err1','one') //two 函数不执行
    },
    function (callback) {
        // callback('i am err2','two')
        callback(null, 'two')
    },
], function (err, result) {
    console.log(err)
    console.log(result) // { one: 'right1', two: 'two' }
})

// 2.串联有关联
async.waterfall([
    function (callback) {
        callback(null, 'one')
    },
    function (onearg, callback) {
        callback(null, 'two')
    }
], function (err, result) {
    console.log(err);
    console.log(result)
})

// 3.并行无关联
console.log('-----------------并行无关联-------------')
async.parallel({
    one: function (callback) {
        callback('i am err', 'one')
    },
    two: function (callback) {
        callback(null, 'two')
    }
}, function (err, result) {
    console.log(err);
    console.log(result)
})
async.parallel([
    function (callback) {
        callback('i am err', 'one')
    },
    function (callback) {
        callback(null, 'two')
    }
], function (err, result) {
    console.log(err);
    console.log(result)
})


// 4.智能控制
// console.log('-----------------智能控制-------------')
// async.auto({
//     getData:function(callback){
//         setTimeout(function(){
//             callback(null,'data')
//         },3000)
//     },
//     read:function(callback){
//         setTimeout(function(){
//             callback(null,'read')
//         },3000)
//     },
//     write:['getData','read',function(callback){
//         // console.log(result.getData);
//         callback(null,'write')
//     }]
// },function(err,result){
//     console.log(result)
// })


// 5.async.each
console.log('-----------------each-------------')
let arr = ['a', 'b', 'c']
async.map(arr, function (item, callback) {
    callback(null, item)
}, function (err, result) {
    console.log(err)
    console.log(result)
})



let p = null
if (p.test && p.test!='1') {
    console.log(111)
}