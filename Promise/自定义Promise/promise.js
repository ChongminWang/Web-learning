//声明构造函数
function Promise(executor) {
    //添加属性
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    //声明属性
    this.callbacks = [];
    //保存实例对象的 this 的值
    const self = this;
    //申明resolve和reject
    function resolve(data) {
        //判断状态，使得resolve或者reject改变状态后，reject或者resolve就不能再去修改状态
        if (self.PromiseState !== 'pending') return
        //1.修改对象的状态(PromiseState)
        self.PromiseState = 'fullfilled'
        //2.设置对象结果值（PromiseResult）
        self.PromiseResult = data;
        //调用成功的回调  遍历调用成功的回调
        setTimeout(() => {
            self.callbacks.forEach(item => {
                item.onResolve(data)
            })
        })


    }
    function reject(data) {
        //判断状态，使得resolve或者reject改变状态后，reject或者resolve就不能再去修改状态
        if (self.PromiseState !== 'pending') return
        //1.修改对象的状态(PromiseState)
        self.PromiseState = 'reject'
        //2.设置对象结果值（PromiseResult）
        self.PromiseResult = data;
        //调用成功的回调
        setTimeout(() => {
            self.callbacks.forEach(item => {
                item.onReject(data)
            })
        })
        
    }
    try {
        //同步调用 执行器函数
        executor(resolve, reject);
    } catch (e) {
        //修改Promise 对象状态为失败
        reject(e)
    }


}

//添加 then方法
Promise.prototype.then = function (onResolve, onReject) {
    const self = this;
    //判断回调函数参数
    if (typeof onReject !== 'function') {
        onReject = reason => {
            throw reason
        }
    }
    if (typeof onResolve !== 'function') {
        onResolve = value => value
    }
    return new Promise((resolve, reject) => {

        //封装函数
        function callback(type) {
            try {
                let result = type(self.PromiseResult)
                if (result instanceof Promise) {
                    result.then(v => {
                        resolve(v)
                    }, s => {
                        reject(s)
                    })
                } else {
                    resolve(result)
                }
            } catch (e) {

            }
        }
        //调用回调函数
        if (this.PromiseState === 'fullfilled') {
            setTimeout(() => {
                callback(onResolve)
            })

        }
        if (this.PromiseState === 'reject') {
            setTimeout(() => {
                callback(onReject)
            })
        }
        //判断pending的状态 用于判断是否是同步任务还是异步任务
        if (this.PromiseState === 'pending') {
            this.callbacks.push({
                onResolve: function () {
                    callback(onResolve)
                },
                onReject: function () {
                    callback(onReject)

                }
            })
        }
    })

}

//添加catch方法
Promise.prototype.catch = function (onReject) {
    return this.then(undefined, onReject)
}

//添加resolve方法
Promise.resolve = function (value) {
    return new Promise((resolve, reject) => {
        if (value instanceof Promise) {
            value.then(r => {
                resolve(r)
            }, s => {
                reject(s)
            })
        } else {
            resolve(value)
        }
    })
}

//添加reject方法
Promise.reject = function (reason) {
    return new Promise((resolve, reject) => {
        reject(reason)
    })
}

//添加all方法
Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        //声明变量
        let count = 0;
        let array = [];
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(r => {
                count++;
                array[i] = r;
                if (count === promises.length) {
                    resolve(array)
                }
            }, s => {
                reject(s)
            })
        }
    })
}

//添加race方法
Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(r => {
                resolve(r)
            }, s => {
                reject(s)
            })
        }
    })
}
//then方法 异步执行，会等同步代码执行完毕后在执行