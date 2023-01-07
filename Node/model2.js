/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-01-07 22:51:14
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-01-07 22:52:26
 * @FilePath: \Web-learning\Node\model2.js
 * @Description: 
 * 
 */
/*
	Buffer(缓冲区)
		- Buffer的结构和数组很像，操作的方法也和数组类似
		- 数组中不能存储二进制的文件，而buffer就是专门用来存储二进制数据
		- 使用buffer不需要引入模块，直接使用即可
		- 在buffer中存储的都是二进制数据，但是在显示时都是以16进制的形式显示
			buffer中每一个元素的范围是从00 - ff   0 - 255
			00000000 - 11111111

			计算机 一个0 或一个1 我们称为1位（bit）

			8bit = 1byte（字节）
			1024byte = 1kb
			1024kb = 1mb
			1024mb = 1gb
			1024gb = 1tb

			buffer中的一个元素，占用内存的一个字节

		- Buffer的大小一旦确定，则不能修改，Buffer实际上是对底层内存的直接操作

 */

        var str = "Hello 尚硅谷";

        //将一个字符串保存到buffer中
        var buf = Buffer.from(str);
        
        //console.log(buf.length); //占用内存的大小
        //console.log(str.length);//字符串的长度
        //console.log(buf);
        
        //创建一个指定大小的buffer
        //buffer构造函数都是不推荐使用的
        //var buf2 = new Buffer(10);//10个字节的buffer
        //console.log(buf2.length);
        
        //创建一个10个字节的buffer
        var buf2 = Buffer.alloc(10);
        //通过索引，来操作buf中的元素
        buf2[0] = 88;
        buf2[1] = 255;
        buf2[2] = 0xaa;
        buf2[3] = 255;
        
        //只要数字在控制台或页面中输出一定是10进制
        //console.log(buf2[2].toString(16));
        
        /*for(var i=0 ; i<buf2.length ; i++){
            console.log(buf2[i]);
        }*/
        
        //Buffer.allocUnsafe(size) 创建一个指定大小的buffer，但是buffer中可能含有敏感数据
        /*var buf3 = Buffer.allocUnsafe(10);
        console.log(buf3);*/
        
        /*
            Buffer.from(str) 将一个字符串转换为buffer
            Buffer.alloc(size) 创建一个指定大小的Buffer
            Buffer.alloUnsafe(size) 创建一个指定大小的Buffer，但是可能包含敏感数据
             buf.toString() 将缓冲区中的数据转换为字符串
         */
        
        var buf4 = Buffer.from("我是一段文本数据");
        
        console.log(buf4.toString());
        
        
        
/*
	文件系统（File System）
		- 文件系统简单来说就是通过Node来操作系统中的文件
		- 使用文件系统，需要先引入fs模块，fs是核心模块，直接引入不需要下载

	同步文件的写入
		- 手动操作的步骤
			1.打开文件
 				fs.openSync(path, flags[, mode])
 					- path 要打开文件的路径
 					- flags 打开文件要做的操作的类型
 						r 只读的
 						w 可写的
 					- mode 设置文件的操作权限，一般不传
				 返回值：
				 - 该方法会返回一个文件的描述符作为结果，我们可以通过该描述符来对文件进行各种操作

			2.向文件中写入内容
 				fs.writeSync(fd, string[, position[, encoding]])
 					- fd 文件的描述符，需要传递要写入的文件的描述符
 					- string 要写入的内容
 					- position 写入的起始位置
 					- encoding 写入的编码，默认utf-8

			3.保存并关闭文件
 				fs.closeSync(fd)
 					- fd 要关闭的文件的描述符



 */
                     var fs = require("fs");

                     //打开文件
                     var fd = fs.openSync("hello.txt" , "w");
                     
                     //向文件中写入内容
                     fs.writeSync(fd , "今天天气真不错~~~", 2);
                     
                     //关闭文件
                     fs.closeSync(fd);
                     
                     console.log("程序向下执行~~~");
/**
	异步文件写入
 fs.open(path, flags[, mode], callback)
 	- 用来打开一个文件
    - 异步调用的方法，结果都是通过回调函数的参数返回的
 	- 回调函数两个参数：
 		err 错误对象，如果没有错误则为null
 		fd  文件的描述符
 fs.write(fd, string[, position[, encoding]], callback)
 	- 用来异步写入一个文件

 fs.close(fd, callback)
 	- 用来关闭文件

 */

//引入fs模块
var fs = require("fs");


//打开文件
fs.open("hello2.txt","w",function (err , fd) {
	//判断是否出错
	if(!err){
		//如果没有出错，则对文件进行写入操作
		fs.write(fd,"这是异步写入的内容",function (err) {
			if(!err){
				console.log("写入成功~~");
			}
			//关闭文件
			fs.close(fd , function (err) {
				if(!err){
					console.log("文件已关闭~~~");
				}
			});
		});
	}else{
		console.log(err);
	}
});

console.log("程序向下执行~~~");


/*
	简单文件写入
	 fs.writeFile(file, data[, options], callback)
	 fs.writeFileSync(file, data[, options])
		- file 要操作的文件的路径
		- data 要写入的数据
		- options 选项，可以对写入进行一些设置
		- callback 当写入完成以后执行的函数

		- flag
			r 只读
			w 可写
			a 追加
 */
//引入fs模块
var fs = require("fs");

/*fs.writeFile("hello3.txt","这是通过writeFile写入的内容",{flag:"r+"} , function (err) {
	if(!err){
		console.log("写入成功~~~");
	}else{
		console.log(err);
	}
});*/


//C:\Users\lilichao\Desktop\hello.txt
//C:\\Users\\lilichao\\Desktop\\hello.txt

fs.writeFile("C:/Users/lilichao/Desktop/hello.txt","这是通过writeFile写入的内容",{flag:"w"} , function (err) {
	if(!err){
		console.log("写入成功~~~");
	}else{
		console.log(err);
	}
});

/*
	同步、异步、简单文件的写入都不适合大文件的写入，性能较差，容易导致内存溢出
 */
    var fs = require("fs");

    //流式文件写入
    //创建一个可写流
    /*
        fs.createWriteStream(path[, options])
            - 可以用来创建一个可写流
            - path，文件路径
            - options 配置的参数
     */
    var ws = fs.createWriteStream("hello3.txt");
    
    //可以通过监听流的open和close事件来监听流的打开和关闭
    /*
        on(事件字符串,回调函数)
            - 可以为对象绑定一个事件
    
        once(事件字符串,回调函数)
            - 可以为对象绑定一个一次性的事件，该事件将会在触发一次以后自动失效
    
    * */
    ws.once("open",function () {
        console.log("流打开了~~~");
    });
    
    ws.once("close",function () {
        console.log("流关闭了~~~");
    });
    
    //通过ws向文件中输出内容
    ws.write("通过可写流写入文件的内容");
    ws.write("今天天气真不错");
    ws.write("锄禾日当午");
    ws.write("红掌拨清清");
    ws.write("清清真漂亮");
    
    //关闭流
    ws.end();
            