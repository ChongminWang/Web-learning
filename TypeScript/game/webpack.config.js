//引入包
const path =require('path');

//引入html插件 npm i -D html-webpack-plugin
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

//webpack中所有的配置信息都应该写在model.exports中
module.exports = {

    //指定入口文件
    entry:"./src/index.ts",

    //指定打包文件所在目录
    output:{
        //指定打包文件目录
        path:path.resolve(__dirname,'dist'),

        //打包后的文件
        filename:'bundle.js',
        environment: {
            arrowFunction: false // 关闭webpack的箭头函数，可选  一般兼容ie时设置
        }
    },

    //指定webpack打包时要使用的模块
    module:{
        //指定要加载的规则
        rules:[
            {
                //test指定的是规则生效的文件
                test:/\.ts$/,
                //要使用的loader
                use:[
                    //配置babel
                    {
                        //指定加载器
                        loader: 'babel-loader',
                        //设置babel
                        options:{
                            //设置预定义的环境
                            presets:[
                                [
                                    //指定环境的插件
                                    "@babel/preset-env", 
                                    //配置信息
                                    {
                                        //要兼容的目标浏览器
                                        targets:{
                                            "chrome":"88",
                                            "ie":"11"
                                        },
                                        //指定corejs的版本 
                                        "corejs":"3",
                                        //使用corejs的方式“usage“ 表示按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }

                    },
                    'ts-loader'
                ],
                //要排除的文件
                exclude:/_cacache && node_modules/
            },

            //设置less文件的处理
            {
                test:/\.less$/,
                use:[
                    //先执行谁，谁就写在最下面
                    'style-loader',
                    'css-loader',
                    //引入postcss
                    {
                        loader:"postcss-loader",
                        options:{
                            postcssOptions:{
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                    ]
                                ]
                            }
                        }
                    },
                    'less-loader',
                ]
            }
        ]
    },

    //配置webpack插件
    plugins:[

        //每次会清空dist目录
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            title:"贪吃蛇",
            //根据模板来生成
            // template:'./src/index.html'
        }),
    ],

    //用来设置引用模块
    resolve:{
        extensions:['.ts','.js']
    },

    mode:"production"
}