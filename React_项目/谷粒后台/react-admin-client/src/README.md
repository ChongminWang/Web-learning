### 
    api ajax 相关
    assets 公用资源
    conponents 非路由组件
    config 配置
    pages 路由组件
    utils 工具

# 自定义主题
    config-overrides.js中配置，
    addLessLoader({
    javascriptEnabled: true,
    modifyVars: {'@primary-color': '指定的颜色'},
  }),

### 知识点1
    Switch 匹配到了一个组件，则其他的不再匹配了
    重置样式 reset.css 引入
    
    `
    /**
 * 1.高阶函数
 *  一类特别的函数
 *      接收函数类型的函数
 *      返回值是函数
 *  常见
 *      定时器setTimeout()/setInterval()
 *      promise  执行成功和失败的回调
 *      数组相关的方法：foreach /filter / reduce/ map
 *      fn.bind()
 *  高阶函数更新动态，更加具有扩展性
 * 2.高阶组件
 *  本质是一个函数
 *  接收一个组件，返回一个新的组件，新组建内部会被传入特定属性
 *  作用：扩展组件的功能
 *  高阶组件也是高阶函数，接收一个组件函数，返回一个新的组件函数
 */

/**包装From组件生成一个新的组件Form（Login）
 * 新组件会向From组件传递一个强大的对象属性：form
 */
  `
