/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-01-07 22:52:58
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-01-07 22:53:04
 * @FilePath: \Web-learning\Node\model3.js
 * @Description: 
 * 
 */
/*
	1.同步文件读取
	2.异步文件读取
	3.简单文件读取
	 fs.readFile(path[, options], callback)
	 fs.readFileSync(path[, options])
	 	- path 要读取的文件的路径
	 	- options 读取的选项
	 	- callback回调函数，通过回调函数将读取到内容返回(err , data)
	 		err 错误对象
	 		data 读取到的数据，会返回一个Buffer

	4.流式文件读取
 */

    var fs = require("fs");

    var path = "C:/Users/lilichao/Desktop/笔记.mp3";
    
    fs.readFile("an.jpg" , function (err , data) {
        if(!err){
            //console.log(data);
            //将data写入到文件中
            fs.writeFile("C:/Users/lilichao/Desktop/hello.jpg",data,function(err){
                if(!err){
                    console.log("文件写入成功");
                }
            } );
        }
    });
    

/*
	流式文件读取也适用于一些比较大的文件，可以分多次将文件读取到内存中
 */

    var fs = require("fs");

    //创建一个可读流
    var rs = fs.createReadStream("C:/Users/lilichao/Desktop/笔记.mp3");
    //创建一个可写流
    var ws = fs.createWriteStream("a.mp3");
    
    //监听流的开启和关闭
    rs.once("open",function () {
        console.log("可读流打开了~~");
    });
    
    rs.once("close",function () {
        console.log("可读流关闭了~~");
        //数据读取完毕，关闭可写流
    
        ws.end();
    });
    
    ws.once("open",function () {
        console.log("可写流打开了~~");
    });
    
    ws.once("close",function () {
        console.log("可写流关闭了~~");
    });
    
    //如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕，它会自动开始读取数据
    rs.on("data", function (data) {
        //console.log(data);
        //将读取到的数据写入到可写流中
        ws.write(data);
    });

    
    /*
	流式文件读取也适用于一些比较大的文件，可以分多次将文件读取到内存中
 */

var fs = require("fs");

//创建一个可读流
var rs = fs.createReadStream("C:/Users/lilichao/Desktop/笔记.mp3");
//创建一个可写流
var ws = fs.createWriteStream("b.mp3");

//pipe()可以将可读流中的内容，直接输出到可写流中
rs.pipe(ws);



