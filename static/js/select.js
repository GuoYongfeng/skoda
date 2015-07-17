$(function(){
	$('a').on('tap', function( e ){
		var el = e.target;
		var colorNum = $(el).data('color');
		var data = {
			color_num: colorNum
		};

		send(data);
		
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