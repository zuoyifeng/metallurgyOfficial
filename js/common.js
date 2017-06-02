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
    //控制点击盒子关闭菜单		
	$(document).off('click.bs.dropdown.data-api');

    //底部友情链接
	$('#linkButton').on('click', function () {
	    var $this = $(this),
            $doms = $(this).parent('.meta-links');
	    if ($doms.hasClass('open')) {
	        $doms.removeClass('open');
	    } else {
	        $doms.addClass('open');
	    }
	})
	$('.meta-links').mouseleave(function () {	   
	    $(this).removeClass('open');
    });

    //关闭侧边联系业务咨询
	$('#closeContact').on('click', function () {
	    $(this).parent('.meta-contact').remove();
	})

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
	    //console.log($hasopen);
	    if ($hasopen) {
	        $parent.removeClass('open');
	    } else {
	        $parent.addClass('open').siblings('li').removeClass('open');
	    }
	})

});
//截取字符为多行显示更多(可扩展为按钮添加class)
function textOverflow(ev, len, moreBtn) {
    var evBox  = document.querySelector(ev),
        evHtml = evBox.innerHTML,
        newBox = document.createElement("div");

    moreBtn = document.querySelector(moreBtn) || document.createElement("span");
    //判断内容是否多于需要超出省略的界限
    moreBtn.innerHTML = evHtml.length > len ? "显示全部" : "";
    newBox.innerHTML  = evHtml.substring(0, len) + '......';
    moreBtn.onclick = function () {
        if (moreBtn.innerHTML == "显示全部") {
            moreBtn.innerHTML = "收起";
            newBox.innerHTML  = evHtml;
        } else {
            moreBtn.innerHTML = "显示全部";
            newBox.innerHTML = evHtml.substring(0, len) + '......';
        }
    }
    //在原节点上添加新增节点和更多按钮
    evBox.innerHTML = "";
    evBox.appendChild(newBox);
    evBox.appendChild(moreBtn);
}

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
