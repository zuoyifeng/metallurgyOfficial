/*项目公共js*/
$(function(){
	"use strict";
	/*	导航条点击改成鼠标事件	*/
	var $dropdownLi = $('.meta-menu>ul>li.dropdown');
	$dropdownLi.mouseover(function() {
		$(this).addClass('open');
	}).mouseout(function() {
		$(this).removeClass('open');
	});
//	//控制点击盒子关闭菜单		
	$(document).off('click.bs.dropdown.data-api');
	

	/*	菜单中的选项卡	*/
	$('#metaMenutab>ul>li').hover(function(){
		var showid = $(this).attr('showid');
		$(this).addClass('hover').siblings('li').removeClass('hover');

		$('#metaMenutab div#'+showid).show().siblings('div').hide();
	});

    /*院领导班子列表点击展开*/
	$('.meta-leader-more').on('click', function () {
	    var $this = $(this),
            $dl = $(this).parents('dl');
	    if ($dl.hasClass('open')) {
	        $dl.removeClass('open');
	        $(this).text('【详情】');
	    } else {
	        $dl.addClass('open');
	        $(this).text('【收起】');
	    }
	})
    /*子页面左侧菜单点击展开*/
	$('.meta-submenu>ul>li>a').on('click', function () {
	    var $parent = $(this).parent('li'),
            $hasopen = $parent.hasClass('open');
	    console.log($hasopen);
	    if ($hasopen) {
	        $parent.removeClass('open');
	    } else {
	        $parent.addClass('open').siblings('li').removeClass('open');
	    }
	})

    /*高端会议已完成会议点击展开*/
	$('.meta-meet-more').on('click', function () {
	    var $this   = $(this),
            $parent = $(this).parent('.meta-content');
	    if ($parent.hasClass('open')) {
	        $parent.removeClass('open');
	        $(this).text('【详情】');
	    } else {
	        $parent.addClass('open');
	        $(this).text('【收起】');
	    }
	})
});
//封装ajax请求
function _ajax(opt) {
    $.ajax({
        url: opt.url,
        type: 'POST',
        dataType: 'json',
        cache: false,
        data: opt.data,
        success: opt.success
    });
}
//获取系统当前年份及月份
function get_yearandmonth() {
    var myDate = new Date();
    var now_year = myDate.getFullYear();
    var now_month = myDate.getMonth() + 1;
    if (now_month >= 1 && now_month <= 9) {
        now_month = "0" + now_month;
    }
    return {
        year: now_year,
        month: now_month
    }
}
