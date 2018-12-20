 ### 1.串行无关联 async.series({},callback())/async.series([],callback())
        a.表示多个函数需要按照步骤执行，但是相互之间的结果没有依赖
        b.如果其中一个步骤有err。那么后面的函数不执行，直接执行最后的回调函数
        c.对象表示法：返回值为一个对象，前面每一个函数的返回结果合并为一个对象  // {函数名1：返回值，函数名2：返回值}
        d.数组表示法：返回值为一个数组，按照函数的执行顺序把返回值合并为一个数组
        e.callback 参数：第一个为异常，第二个为方法的返回值

### 2.串行有关联 async.waterfall([],callback())
        a.表示多个函数之间按顺序，并且每一步返回值对后面的函数有影响
        b.如果其中一个步骤有err。那么后面的函数不执行，直接执行最后的回调函数
        c.只能使用数组表示法：返回值为最后一个函数的返回值
        d.每一个函数的第一个参数为，上一个函数的返回值
        e.callback 参数：第一个为异常，第二个为方法的返回值

### 3.并行无关联 async.parallel()
        a.表示多个函数执行，互相没有关系，而且没有顺序
        b.如果其中一个步骤有err。那么后面的函数不执行，直接执行最后的回调函数
          c.对象表示法：返回值为一个对象，前面每一个函数的返回结果合并为一个对象  // {函数名1：返回值，函数名2：返回值}
        d.数组表示法：返回值为一个数组，按照函数的执行顺序把返回值合并为一个数组
        e.callback 参数：第一个为异常，第二个为方法的返回值
