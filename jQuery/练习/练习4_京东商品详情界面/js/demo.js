/*
 * @Author: 2577624123 2577624123@qq.com
 * @Date: 2023-01-05 00:01:05
 * @LastEditors: 2577624123 2577624123@qq.com
 * @LastEditTime: 2023-01-06 20:38:19
 * @FilePath: \Web-learning\jQuery\练习\练习4_京东商品详情界面\js\demo.js
 * @Description: 
 * 
 */
/*
 1. 鼠标移入显示,移出隐藏
 目标: 手机京东, 客户服务, 网站导航, 我的京东, 去购物车结算, 全部商品
 2. 鼠标移动切换二级导航菜单的切换显示和隐藏
 3. 输入搜索关键字, 列表显示匹配的结果
 4. 点击显示或者隐藏更多的分享图标
 5. 鼠标移入移出切换地址的显示隐藏
 6. 点击切换地址tab

 7. 鼠标移入移出切换显示迷你购物车
 8. 点击切换产品选项 (商品详情等显示出来)

 9. 点击向右/左, 移动当前展示商品的小图片
 10. 当鼠标悬停在某个小图上,在上方显示对应的中图
 11. 当鼠标在中图上移动时, 显示对应大图的附近部分区域
 */

/*
1. 对哪个/些元素绑定什么监听?
2. 对哪个/些元素进行什么DOM操作?
 */
$(function(){
    
    showhide();
    hoverSubMenu();
    search();
    share();
    address();
    clickTabs();
    hoverminiCart();
    clickProduct();
    moveClick();
    showImg();
    bigImg();



    // 11. 当鼠标在中图上移动时, 显示对应大图的附近部分区域
    function bigImg(){
        var $mediumImg = $('#mediumImg');
        var $mask = $('#mask');
        var $maskTop = $('#maskTop');
        var $largeImgContainer = $('#largeImgContainer');
        var $loading = $('#loading');
        var $largeImg = $('#largeImg');
        var maskWidth = $mask.width();
        var maskHeight = $mask.height();
        var maskTopHeight =$maskTop.height();
        var maskTopWidth = $maskTop.width();

        $maskTop.hover(function(){
            $mask.show();

            //进入就加载大图
            var src  = $mediumImg.attr('src').replace('-m.','-l.');
            $largeImg.attr('src', src);
            $largeImgContainer.show();
            $largeImg.on('load', function(){
                var largeWidth = $largeImg.width();
                var largeHeight = $largeImg.height();

                $largeImgContainer.css({
                    width: largeWidth/2,
                    height: largeHeight/2
                })
                $largeImgContainer.show();

                $largeImg.show();
                $loading.hide();     

                $maskTop.mousemove(function(event){//在移动过程中反复调用
                    //移动小黄块
                    var left = 0;
                    var top = 0;
                    var evetLeft = event.offsetX;
                    var evetTop = event.offsetY;
                    left = evetLeft - maskWidth/2;
                    top = evetTop - maskHeight/2;
                    if(left < 0){
                        left = 0;
                    }else if(left > maskTopWidth - maskWidth){
                        left = maskTopWidth - maskWidth;
                    }
                    if(top < 0){
                        top = 0;
                    }else if(top > maskTopHeight - maskHeight){
                        top = maskTopHeight - maskHeight;
                    }
                    $mask.css({
                        left:left,
                        top:top
                    })
                    //移动大图

                    left = -left * largeWidth/maskTopWidth;
                    top = -top * largeHeight/maskTopHeight
                    $largeImg.css({
                        left:left,
                        top:top
                    })
                });   
                
            });
            
        },function(){
            $mask.hide();
            $largeImgContainer.hide();
            $largeImg.hide();
        });
    }

    // 10. 当鼠标悬停在某个小图上,在上方显示对应的中图
    function showImg(){
        $('#icon_list>li').hover(function(){
            var $img = $(this).children();
            $img.addClass('hoveredThumb'); 
            //显示对应的中图
            var src = $img.attr('src').replace('.jpg','-m.jpg'); 
            $('#mediumImg').attr('src', src);
        },function(){
            $(this).children().removeClass('hoveredThumb'); 
        })
    }

    // 9. 点击向右/左, 移动当前展示商品的小图片
    function moveClick() {
        var $as = $('#preview>h1>a')
        var $backward = $as.first()
        var $forward = $as.last()
        var $Ul = $('#icon_list')
        var SHOW_COUNT = 5 ;
        var imgCount = $Ul.children('li').length;
        var moveCount = 0;//移动的次数，向右为正，向左为负
        var liswidth = $Ul.children(':first').width();
        //初始化更新
        if(imgCount>SHOW_COUNT){
            $forward.attr('class', 'forward')
        }
        //绑定向右点击监听
        $forward.click(function(){
            //判断是否需要移动，如果不需要移动，直接结束
            if(moveCount===imgCount-SHOW_COUNT){
                return
            }
            moveCount++;
            //更新向左的按钮
            $backward.attr('class','backward')
            //更新向右的按钮
            if(moveCount===imgCount-SHOW_COUNT){
                $forward.attr('class', 'forward_disabled')
            }
            //移动ul
            $Ul.css({
                left: -moveCount * liswidth
            })
        })
        //绑定向左点击监听
        $backward.click(function(){
            //判断是否需要移动，如果不需要移动，直接结束
            if(moveCount===0){
                return
            }
            moveCount--;
            //更新向右的按钮
            $forward.attr('class','forward')
            //更新向左的按钮
            if(moveCount===0){
                $backward.attr('class', 'backward_disabled')
            }
            //移动ul
            $Ul.css({
                left: -moveCount * liswidth
            })
        })
    }

    // 8. 点击切换产品选项 (商品详情等显示出来)
    function clickProduct(){
        var $product = $('#product_detail>ul>li');
        var $content = $('#product_detail>div:gt(0)');
        $product.click(function(){
            $product.removeClass('current');
            this.className = 'current';
            $content.hide();
            var index = $(this).index();
            $content.eq(index).show();

        });
    }

    // 7. 鼠标移入移出切换显示迷你购物车
    function hoverminiCart(){
        $('#minicart').hover(function(){
            this.className='minicart';
            $(this).children(':last').show();
        },function(){
            this.className='';
            $(this).children(':last').hide();
        })
    }

    // 6. 点击切换地址tab
    function clickTabs(){
        var $tabs = $('#store_tabs>li');
        $tabs.click(function(){
            $tabs.removeClass('hover')
            this.className='hover';
        })
    }

    // 5. 鼠标移入移出切换地址的显示隐藏
    function address(){
        var $select = $('#store_select');
        $select.hover(function(){
            $(this).children(':gt(0)').show();
        },function(){
            $(this).children(':gt(0)').hide();
        })
        .children(':last').click(function(){
            $select.children(':gt(0)').hide();
        })
    }
    // 4. 点击显示或者隐藏更多的分享图标
    function share(){
        var isOpen = false;//标识当前的状态（初始为关闭）
        var $shareMore=$('#shareMore');
        var $parent = $shareMore.parent();
        var $as = $shareMore.prevAll('a:lt(2)') ;
        var $b = $shareMore.children();
        $shareMore.click(function(){
            if(isOpen){
                isOpen = false;
                $parent.css('width',155);
                $as.hide();
                $b.removeClass('backword');
            }else{
                isOpen = true;
                $parent.css('width',200);
                $as.show();
                $b.addClass('backword');
            }
        })
    }

    // 3. 输入搜索关键字, 列表显示匹配的结果
    //要监听获取焦点/文本框有内容/键盘按下/失去焦点
    function search(){
        $('#txtSearch')
        .on('keyup focus',function(){
            var txt = this.value.trim();
            if(txt){
                $('#search_helper').show()
            }
        })
        .blur(function(){
            $('#search_helper').hide()
        })
    }

//    2. 鼠标移动切换二级导航菜单的切换显示和隐藏
   //$(this),此处将this包装为jquery对象，是因为要查找当前事件发生的子元素，使用原生对象查找复杂
   function hoverSubMenu(){
         $('#category_items>div').hover(function(){
            $(this).children(':last').show();
        },function(){
            $(this).children(':last').hide();
        });
    }   

    /* 1. 鼠标移入显示,移出隐藏
        目标: 手机京东, 客户服务, 网站导航, 我的京东, 去购物车结算, 全部商品 
    */
   function showhide(){
        $('[name=show_hide]').hover(function(){
            var id = this.id + '_items';
            $('#'+id).show();
        },function(){
            var id = this.id + '_items';
            $('#'+id).hide();
        })
   }

})