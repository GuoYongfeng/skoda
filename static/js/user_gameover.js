$(function(){
	$('.btn').on('tap', function(e){
		$('.share_mask').css({display: 'block'});
	});

	$('.share_mask').on('tap', function(e){
		$('.share_mask').css({display: 'none'});
	})
})