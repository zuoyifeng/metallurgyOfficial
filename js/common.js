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
