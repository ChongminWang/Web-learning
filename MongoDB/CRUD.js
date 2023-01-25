/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-01-12 16:37:50
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-01-12 16:38:02
 * @FilePath: \Web-learning\MongoDB\CRUD.js
 * @Description: 
 * 
 */
/*
    向数据库插入文档
        db.<collection>.insert()
        - 向集合中插入一个或多个文档
        - 当我们向集合中插入文档时，如果没有给文档指定_id属性，则数据库会自动为文档添加_id
            该属性用来作为文档的唯一标识
        - _id我们可以自己指定，如果我们指定了数据库就不会在添加了，如果自己指定_id 也必须确保它的唯一性
        
    db.collection.insertOne()
        - 插入一个文档对象
    db.collection.insertMany() 
        - 插入多个文档对象
*/
db.stus.insert({name:"猪八戒",age:28,gender:"男"});

db.stus.insert([
    {name:"沙和尚",age:38,gender:"男"},
    {name:"白骨精",age:16,gender:"女"},
    {name:"蜘蛛精",age:14,gender:"女"}
]);

db.stus.insert({_id:"hello",name:"猪八戒",age:28,gender:"男"});

db.stus.find();

ObjectId()


/*
    db.collection.remove()
        - 删除一个或多个，可以第二个参数传递一个true，则只会删除一个
        - 如果传递一个空对象作为参数，则会删除所有的
    db.collection.deleteOne()
    db.collection.deleteMany()
    db.collection.drop() 删除集合
    db.dropDatabase() 删除数据库
    
        - 一般数据库中的数据都不会删除，所以删除的方法很少调用
            一般会在数据中添加一个字段，来表示数据是否被删除
*/
        
db.stus.insert([
    
    {
        name:"zbj",
        isDel:0
        },
        {
        name:"shs",
        isDel:0
        },
    {
    name:"ts",
        isDel:0
    }

]);

db.stus.updateOne({name:"ts"},{$set:{isDel:1}});
    
db.stus.find({isDel:0})    


/*
    查询
        db.collection.find()
        - find()用来查询集合中所有符合条件的文档
        - find()可以接收一个对象作为条件参数
            {} 表示查询集合中所有的文档
            {属性:值} 查询属性是指定值的文档
        - find()返回的是一个数组
            
        db.collection.findOne()
        - 用来查询集合中符合条件的第一个文档  
        - findOne()返回的是一个文档对象 
       
       db.collection.find({}).count() 
        - 查询所有结果的数量
*/
db.stus.find({_id:"hello"});
db.stus.find({age:16 , name:"白骨精"});
db.stus.find({age:28});
db.stus.findOne({age:28});

db.stus.find({}).count();


/*
    修改
     db.collection.update(查询条件,新对象)
        - update()默认情况下会使用新对象来替换旧的对象
        - 如果需要修改指定的属性，而不是替换需要使用“修改操作符”来完成修改
            $set 可以用来修改文档中的指定属性
            $unset 可以用来删除文档的指定属性
        - update()默认只会修改一个
            
        db.collection.updateMany()
        - 同时修改多个符合条件的文档
   
        db.collection.updateOne()
        - 修改一个符合条件的文档    
        
        db.collection.replaceOne()
        - 替换一个文档
*/
db.stus.find({});

//替换
db.stus.update({name:"沙和尚"},{age:28});

db.stus.update(
    {"_id" : ObjectId("59c219689410bc1dbecc0709")},
    {$set:{
        gender:"男",
        address:"流沙河"
    }}    
)

db.stus.update(
    {"_id" : ObjectId("59c219689410bc1dbecc0709")},
    {$unset:{
        address:1
    }}    
)

db.stus.updateMany(
    {"name" : "猪八戒"},
    {
        $set:{
            address:"猪老庄"
        }
    }    
);
    
db.stus.update(
    {"name" : "猪八戒"},
    
    {
        $set:{
        address:"呵呵呵"
        }
    }  ,
    {
        multi:true
    }    
)

db.stus.find()
