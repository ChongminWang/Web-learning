<!--
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2022-12-16 21:00:40
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2022-12-16 21:00:47
 * @FilePath: \Web-learning\jQuery\jQuery.md
 * @Description: 
 * 
-->
1. 了解jQuery
  * 是什么: What?
    * 一个JS函数库: write less, do more
    * 封装简化DOM操作(CRUD) / Ajax
  * 为什么用它: why?
    * 强大选择器: 方便快速查找DOM元素
    * 隐式遍历(迭代): 一次操作多个元素
    * 读写合一: 读数据/写数据用的是一个函数
    * 链式调用: 可以通过.不断调用jQuery对象的方法
    * 事件处理
    * DOM操作(CUD)
    * 样式操作
    * 动画
    * 浏览器兼容
  * 如何使用: How?
    * 引入jQuery库
      * 本地引入与CDN远程引入
      * 测试版与生产版(压缩版)
    * 使用jQuery
      * 使用jQuery函数: $/jQuery
      * 使用jQuery对象: $xxx(执行$()得到的)
2. jQuery的2把利器
  * jQuery函数: $/jQuery
    * jQuery向外暴露的就是jQuery函数, 可以直接使用
    * 当成一般函数使用人: $(param)
      * param是function: 相当于window.onload = function(文档加载完成的监听)
      * param是选择器字符串: 查找所有匹配的DOM元素, 返回包含所有DOM元素的jQuery对象
      * param是DOM元素: 将DOM元素对象包装为jQuery对象返回  $(this)
      * param是标签字符串: 创建标签DOM元素对象并包装为jQuery对象返回
    * 当成对象使用: $.xxx
      * each(obj/arr, function(key, value){})
      * trim(str)
  * jQuery对象
    * 包含所有匹配的n个DOM元素的伪数组对象
    * 执行$()返回的就是jQuery对象
    * 基本行为:
      * length/size(): 得到dom元素的个数
      * [index]: 得到指定下标对应的dom元素
      * each(function(index, domEle){}): 遍历所有dom元素
      * index(): 得到当前dom元素在所有兄弟中的下标
3. 选择器
  * 是什么?
    * 有特定语法规则(css选择器)的字符串
    * 用来查找某个/些DOM元素: $(selector)
  * 分类
    * 基本
      * #id
      * tagName/*
      * .class
      * selector1,selector2,selector3: 并集
      * selector1selector2selector3: 交集
    * 层次
      * 找子孙后代, 兄弟元素
      * selector1>selector2: 子元素
      * selector1 selector2: 后代元素
    * 过滤
      * 在原有匹配元素中筛选出其中一些
      * :first
      * :last
      * :eq(index)
      * :lt
      * :gt
      * :odd
      * :even
      * :not(selector)
      * :hidden
      * :visible
      * [attrName]
      * [attrName=value]
    * 表单
      * :input
      * :text
      * :checkbox
      * :radio
      * :checked: 选中的
4. 属性/文本
  * 操作标签的属性, 标签体文本
  * attr(name) / attr(name, value): 读写非布尔值的标签属性
  * prop(name) / prop(name, value): 读写布尔值的标签属性
  * removeAttr(name)/removeProp(name): 删除属性
  * addClass(classValue): 添加class
  * removeClass(classValue): 移除指定class
  * val() / val(value): 读写标签的value
  * html() / html(htmlString): 读写标签体文本

  1. CSS模块
  * style样式
    * css(styleName): 根据样式名得到对应的值
    * css(styleName, value): 设置一个样式
    * css({多个样式对}): 设置多个样式
  * 位置坐标
    * offset(): 读/写当前元素坐标(原点是页面左上角)
    * position(): 读当前元素坐标(原点是父元素左上角)
    * scrollTop()/scrollLeft(): 读/写元素/页面的滚动条坐标
  * 尺寸
    * width()/height(): width/height
    * innerWidth()/innerHeight(): width + padding
    * outerWidth()/outerHeight(): width + padding + border
2. 筛选模块
  * 过滤
    * 在jQuery对象内部的元素中找出部分匹配的元素, 并封装成新的jQuery对象返回
    * first()
    * last()
    * eq(index)
    * filter(selector): 对当前元素提要求
    * not(selector): 对当前元素提要求, 并取反
    * has(selector): 对子孙元素提要求
  * 查找
    * 查找jQuery对象内部的元素的子孙/兄弟/父母元素, 并封装成新的jQuery对象返回
    * children(selector): 子元素
    * find(selector): 后代元素
    * preAll(selector): 前的所有兄弟
    * siblings(selector): 所有兄弟
    * parent(): 父元素
3. 文档处理(CUD)模块
  * 增加
    * append() / appendTo(): 插入后部
    * preppend() / preppendTo(): 插入前部
    * before(): 插到前面
    * after(): 插到后面
  * 删除
    * remove(): 将自己及内部的孩子都删除
    * empty(): 掏空(自己还在)
  * 更新
    * replaceWith()
  
4. 事件模块
  * 绑定事件
    * eventName(function(){})
    * on('eventName', function(){})
    * 常用: click, mouseenter/mouseleave mouseover/mouseout focus/blur
    * hover(function(){}, function(){})
  * 解绑事件
    * off('eventName')
  * 事件委托
    * 理解: 将子元素的事件委托给父辈元素处理
      * 事件监听绑定在父元素上, 但事件发生在子元素上
      *　事件会冒泡到父元素
      * 但最终调用的事件回调函数的是子元素: event.target
    * 好处
      * 新增的元素没有事件监听
      * 减少监听的数量(n==>1)
    * 编码
      * delegate(selector, 'eventName', function(event){}) // 回调函数中的this是子元素
      * undelegate('eventName')
  * 事件坐标
     * event.offsetX: 原点是当前元素左上角
     * event.clientX: 原点是窗口左上角
     * event.pageX: 原点是页面左上角
  * 事件相关
    * 停止事件冒泡: event.stopPropagation()
    * 阻止事件的默认行为: event.preventDefault()

    * 动画效果
  * 在一定的时间内, 不断改变元素样式
  * slideDown()/slideUp()/slideToggle()
  * fadeOut()/fadeIn()/fadeToggle()
  * show()/hide()/toggle()
  * animate({结束时的样式}, time, fun)
  * stop()

* 插件机制
  * 扩展jQuery函数对象的方法
    $.extend({
      xxx: fuction () {} // this是$
    })
    $.xxx()
  * 扩展jQuery对象的方法
    $.fn.extend({
      xxx: function(){}  // this是jQuery对象
    })
    $obj.xxx()
    
* jQuery文档的结构图