/**
 * 游戏规则蒙层控制
 */
$(function(){
	var mask = $('.mask');
	var rules = $('#rules');
	var close = $('#close');

	rules.on('tap', function(e){
		mask.css({display: 'block'});
	});

	close.on('tap', function(e){
		mask.css({display: 'none'});
	});

});