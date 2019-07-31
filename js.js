// js代码

// 入口函数 
$(function () {
    $('.distinction').mouseenter(function () {
        $(this).find('ul').addClass('popup').parent().siblings().children('ul').removeClass('popup');
    })
    $('.distinction').mouseleave(function () {
        $('.distinction>ul').parent().siblings().children('ul').removeClass('popup');
    })
})

// 添加清单按钮特效
$(function () {
    // 鼠标移入
    $('.nav>.sub>.addition>a').mouseenter(function () {
        $(this).css('background', 'linear-gradient(to right,#fa8c06,#f6558c)');
    })
    // 鼠标移出
    $('.nav>.sub>.addition>a').mouseleave(function () {
        $(this).css('background', '');
    })
})


// 轮播图效果

$(function () {

    var timeID = setInterval(function () {
        index == $('.sl-slideshow>ul>li').length - 1 ? index = 0 : index++;
        $('.sl-slideshow>ul>li').eq(index).stop(true, false).fadeIn(500).siblings().stop(true, false).fadeOut(500);
    }, 2000);
    // 鼠标放入大盒子显示箭头
    $('.sl-slideshow').mouseenter(function () {
        $('#arr').stop(true, false).fadeIn();
        clearInterval(timeID);
    })
    // 鼠标放入大盒子隐藏箭头
    $('.sl-slideshow').mouseleave(function () {
        $('#arr').stop(true, false).fadeOut();
        timeID = setInterval(function () {
            index == $('.sl-slideshow>ul>li').length - 1 ? index = 0 : index++;
            $('.sl-slideshow>ul>li').eq(index).stop(true, false).fadeIn(500).siblings().stop(true, false).fadeOut(500);
        }, 2000);
    })
    var index = 0; // 记录当前图片位置
    // 鼠标点击左箭头上一张

    $('#left').click(function () {
        index == $('.sl-slideshow>ul>li').length - 1 ? index = 0 : index++;
        $('.sl-slideshow>ul>li').eq(index).stop(true, false).fadeIn(500).siblings().stop(true, false).fadeOut(500);
    })

    // 鼠标点击右箭头下一张
    $('#right').click(function () {
        index == 0 ? index = $('.sl-slideshow>ul>li').length - 1 : index--;
        $('.sl-slideshow>ul>li').eq(index).stop(true, false).fadeIn(500).siblings().stop(true, false).fadeOut(500);
    })
})


// 改变标签的背景颜色和字体颜色
$(function () {
    // 移入改变字体颜色和背景色
    $('.dahezi>ul>.fenjing').mouseenter(function () {
        $(this).find('a').css('color', 'black').css('backgroundColor', '#fff');
    })
    // 移入还原字体颜色和背景色
    $('.dahezi>ul>.fenjing').mouseleave(function () {
        $(this).find('a').css('color', '').css('backgroundColor', '');
    })
})