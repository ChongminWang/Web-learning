/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-01-12 16:39:33
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-01-12 16:39:47
 * @FilePath: \Web-learning\MongoDB\other.js
 * @Description: 
 * 
 */
/*
  文档之间的关系
    一对一（one to one）
        - 夫妻 (一个丈夫 对应 一个妻子)
        - 在MongoDB，可以通过内嵌文档的形式来体现出一对一的关系
    
    一对多（one to many）/多对一(many to one)
        - 父母 - 孩子
          用户 - 订单
          文章 - 评论
          - 也可以通过内嵌文档来映射一对多的关系
          
    
    多对多(many to many)
       - 分类 - 商品
         老师 - 学生 
    
*/
db.wifeAndHusband.insert([
    {
        name:"黄蓉",
        husband:{
            name:"郭靖"
        }
    },{
        name:"潘金莲",
        husband:{
            name:"武大郎"
        }
    }

]);

db.wifeAndHusband.find();


//一对多 用户(users) 和 订单(orders)
db.users.insert([{
    username:"swk"
    },{
    username:"zbj"
}]);

db.order.insert({
    
    list:["牛肉","漫画"],
    user_id: ObjectId("59c47e35241d8d36a1d50de0")
    
});

db.users.find()
db.order.find()

//查找用户swk的订单
var user_id = db.users.findOne({username:"zbj"})._id;
db.order.find({user_id:user_id});

//多对多
db.teachers.insert([
    {name:"洪七公"},
    {name:"黄药师"},
    {name:"龟仙人"}
]);

db.stus.insert([
    {
        name:"郭靖",
        tech_ids:[
            ObjectId("59c4806d241d8d36a1d50de4"),
            ObjectId("59c4806d241d8d36a1d50de5")
        ]
    },{
        name:"孙悟空",
        tech_ids:[
            ObjectId("59c4806d241d8d36a1d50de4"),
            ObjectId("59c4806d241d8d36a1d50de5"),
            ObjectId("59c4806d241d8d36a1d50de6")
        ]
    }
])

db.teachers.find()

db.stus.find()


//查询文档时，默认情况是按照_id的值进行排列（升序）
//sort()可以用来指定文档的排序的规则,sort()需要传递一个对象来指定排序规则 1表示升序 -1表示降序
//limit skip sort 可以以任意的顺序进行调用
db.emp.find({}).sort({sal:1,empno:-1});

//在查询时，可以在第二个参数的位置来设置查询结果的 投影
db.emp.find({},{ename:1 , _id:0 , sal:1});

