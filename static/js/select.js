$(function(){
	var data = {
		color_num: ''
	};

	$('span').on('tap', function( e ){
		var el = e.target;
		var colorNum = $(el).data('color');
		var colorClass = $(el).data('img');

		$('.car').removeClass('car_01 car_02 car_03').addClass(colorClass);
		data.color_num = colorNum;

				
	});

	function send(data){
		var data = data || {};
		
		$.ajax({
            type: "POST",
            url: "",
            data: data,
            dataType: 'json',
            success: function(res) {

            }
        });
	}
});