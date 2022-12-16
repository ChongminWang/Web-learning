<!--
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2022-12-14 21:54:37
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2022-12-16 16:44:48
 * @FilePath: \Web-learning\Bootstrap\bootstrap.md
 * @Description: 
 * 
-->
###bootstrap
	简洁、直观、强悍的前端开发框架，让web开发更迅速、简单
	中文网 ： http://www.bootcss.com/
	英文网  :  http://getbootstrap.com/
	
###容器
	流体布局容器
		容器的width为auto，只是两边加了15px的padding。
	
	固定布局
		容器的width会随设备分辨率的不同而生产变化
			分辨率阈值
				w >=1200	 		容器的width为1170   左右padding为15 （注意是borderBox）
				1200>w >=992		容器的width为970     左右padding为15 （注意是borderBox）
				992 > w >=768		容器的width为750     左右padding为15  （注意是borderBox）
				768 > w >=992		容器的width为auto    左右padding为15  （注意是borderBox）
				
###栅格系统
	 col-lg-x    
	 col-md-x
	 col-sm-x
	 col-xs-x
	 x默认拥有12个等级
	 
###列偏移
	调整的是margin-left，分13个等级（0到12）
			0时为0%
	
###列排序
	push的时候调整的是left，分13个等级（0到12）
			0时为auto
			
	pull的时候调整的是right，分13个等级（0到12）
			0时为auto

###响应式工具

###容器与栅格盒模型设计的精妙之处
		container 提供了一个15px的padding
		row 是 column 直接存在的容器，row 默认最多可有12个 column，
	同时作为都是左浮动的 column 的 wrapper，自带 clearfix 的性质。
	同时 row 还有一个很特殊的地方，就是左右各有 －15px 的 margin，
	为了抵消 container 中15px的 padding
		每个column 也会有15px的水平方向的 padding，colunmn 只能在 row 中生存，
	由于 row 的 margin 为－15px，那么位于两边的 column 就碰到了 container 的边界。
	但是 colunmn 本身又有 15px 的 padding 使得它其中的内容并不会碰到 container，
	同时 不同column的内容之间就有了30px的槽
	
	目的是为了确保列与列之间有30px的槽，列与容器之间有15px的槽


1.less的继承
		#test{
			&:extend(.father)
		}
		#test:extend(.father){
			
		}
		继承实质上将.father选择器和#test组合成一个选择器，
			声明块使用.father的
		
		all:继承所有和.father相关的声明块
		切记父类不能定义成混合（继承不灵活性能高 混合灵活性能低）
	2.less的避免编译
		~"不会被编译的内容"
		变量在less中属于块级作用域，延迟加载
	3.bootstrap栅格系统&源码分析
		流体容器
			width:auto
			两侧15px padding
		固定容器
			阈值
				xs（小于768px）		width：auto
				sm（大于等于768px）	width：720+槽宽
				md（大于等于992px）	width：940+槽宽
				lg（大于等于1200）		width：1140+槽宽
			两侧15px padding
		行
			两侧-15px margin
		列
			公共样式
				两侧有15px 的padding
				相对定位
			float
			width
				1~12
			left
			right
				0~12
				0：auto
			margin-left
				0~12
	4.列排序
		注意阈值上样式的设置不能跳跃
				 


	bootstrap 定制化：
		通过less混合的形式
			import bootstrap.less
			改变参数的值
		运行该less文件，生成我们定制的css文件		
			
	 
				