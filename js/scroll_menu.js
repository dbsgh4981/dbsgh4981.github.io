





$(function(){
    var $menu = $('#work1'),
        $contents = $('#work01')

        $menu.click(function(x){
            x.preventDefault();
            $(this).addClass('on').siblings().removeClass('on');
            var idx = $(this).index();
            var section = $contents.eq(idx)
            var sectionDistance = section.offset().top;

            $('html,body').stop().animate({scrollTop:sectionDistance});

        });

});

$(function(){
    var $menu = $('#work2'),
        $contents = $('#work02')

        $menu.click(function(x){
            x.preventDefault();
            $(this).addClass('on').siblings().removeClass('on');
            var idx = $(this).index();
            var section = $contents.eq(idx)
            var sectionDistance = section.offset().top;

            $('html,body').stop().animate({scrollTop:sectionDistance},1000);

        });

});

$(function(){
    var $menu = $('#work3'),
        $contents = $('#work03')

        $menu.click(function(x){
            x.preventDefault();
            $(this).addClass('on').siblings().removeClass('on');
            var idx = $(this).index();
            var section = $contents.eq(idx)
            var sectionDistance = section.offset().top;

            $('html,body').stop().animate({scrollTop:sectionDistance},2000);

        });

});



$(function(){
    var $menu = $('#site-title'),
        $contents = $('#container')

        $menu.click(function(x){
            x.preventDefault();
            $(this).addClass('on').siblings().removeClass('on');
            var idx = $(this).index();
            var section = $contents.eq(idx)
            var sectionDistance = section.offset().top;

            $('html,body').stop().animate({scrollTop:sectionDistance},1000);

        });

});

$(function(){
    var $menu = $('#button03'),
        $contents = $('#main4')

        $menu.click(function(x){
            x.preventDefault();
            $(this).addClass('on').siblings().removeClass('on');
            var idx = $(this).index();
            var section = $contents.eq(idx)
            var sectionDistance = section.offset().top;

            $('html,body').stop().animate({scrollTop:sectionDistance},1000);

        });

});

$(function(){
    var $menu = $('#yoon'),
        $contents = $('#work01')

        $menu.click(function(x){
            x.preventDefault();
            $(this).addClass('on').siblings().removeClass('on');
            var idx = $(this).index();
            var section = $contents.eq(idx)
            var sectionDistance = section.offset().top;

            $('html,body').stop().animate({scrollTop:sectionDistance},1000);

        });

});

$(function(){
    var $menu = $('#do'),
        $contents = $('#work02')

        $menu.click(function(x){
            x.preventDefault();
            $(this).addClass('on').siblings().removeClass('on');
            var idx = $(this).index();
            var section = $contents.eq(idx)
            var sectionDistance = section.offset().top;

            $('html,body').stop().animate({scrollTop:sectionDistance},1000);

        });

});

$(function(){
    var $menu = $('#jung'),
        $contents = $('#work03')

        $menu.click(function(x){
            x.preventDefault();
            $(this).addClass('on').siblings().removeClass('on');
            var idx = $(this).index();
            var section = $contents.eq(idx)
            var sectionDistance = section.offset().top;

            $('html,body').stop().animate({scrollTop:sectionDistance},1000);

        });

});

