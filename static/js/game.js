
/**
 * 开汽车小游戏
 */

var times = 30;
var Modal = Modal;
var event_center = new custEvent();

/**
 * 游戏基类
 * [Game description]
 */
var Game = {
	moveLeftFlag: false,
	moveRightFlag: false,
	imgPathArr: [
		// 奖励和处罚元素
		[0.7, 0.7, 170, 270, "../static/images/money.png", false, +1],
		[0.7, 0.7, 130, 110, "../static/images/gift.png", false, +2],
		[0.7, 0.7, 30, 370, "../static/images/stone.png", false, -2],
		[0.7, 0.7, 250, 200, "../static/images/obstacle.png", false, -1],
		// 沙漠左边沙丘
		[1.3, 0.75, 0, 30, "../static/images/left_double_small.png", false],
		[0.85, 0.87, 0, 200, "../static/images/left_single_big.png", false],
		[0.75, 0.75, 0, 440, "../static/images/left_single_small.png", false],
		// 沙漠右边沙丘
		[1.18, 0.9, 0, 400, "../static/images/right_double_small.png", true],
		[0.8, 0.8, 0, 220, "../static/images/right_single_big.png", true],
		[0.61, 0.64, 0, 40, "../static/images/right_single_small.png", true],

		// 第二屏
		[0.7, 0.7, 60, 190 + 600, "../static/images/money.png", false, +1],
		[0.7, 0.7, 280, -70 + 600, "../static/images/gift.png", false, +2],
		[0.7, 0.7, 150, 370 + 600, "../static/images/stone.png", false, -2],
		[0.7, 0.7, 160, 100 + 600, "../static/images/obstacle.png", false, -1],
		[1.3, 0.75, 0, 30 + 600, "../static/images/left_double_small.png", false],
		[0.85, 0.87, 0, 200 + 600, "../static/images/left_single_big.png", false],
		[0.75, 0.75, 0, 440 + 600, "../static/images/left_single_small.png", false],
		[1.18, 0.9, 0, 400 + 600, "../static/images/right_double_small.png", true],
		[0.8, 0.8, 0, 220 + 600, "../static/images/right_single_big.png", true],
		[0.61, 0.64, 0, 40 + 600, "../static/images/right_single_small.png", true],

		// 第三屏
		[0.7, 0.7, 240, 200 + 1200, "../static/images/money.png", false, +1],
		[0.7, 0.7, 47, 330 + 1200, "../static/images/gift.png", false, +2],
		[0.7, 0.7, 280, 320 + 1200, "../static/images/stone.png", false, -2],
		[0.7, 0.7, 277, 7 + 1200, "../static/images/obstacle.png", false, -1],
		[1.3, 0.75, 0, 30 + 1200, "../static/images/left_double_small.png", false],
		[0.85, 0.87, 0, 200 + 1200, "../static/images/left_single_big.png", false],
		[0.75, 0.75, 0, 440 + 1200, "../static/images/left_single_small.png", false],
		[1.18, 0.9, 0, 400 + 1200, "../static/images/right_double_small.png", true],
		[0.8, 0.8, 0, 220 + 1200, "../static/images/right_single_big.png", true],
		[0.61, 0.64, 0, 40 + 1200, "../static/images/right_single_small.png", true],

		// 第四屏
		[0.7, 0.7, 60, 190 + 1800, "../static/images/money.png", false, +1],
		[0.7, 0.7, 280, -70 + 1800, "../static/images/gift.png", false, +2],
		[0.7, 0.7, 150, 370 + 1800, "../static/images/stone.png", false, -2],
		[0.7, 0.7, 160, 100 + 1800, "../static/images/obstacle.png", false, -1],
		[1.3, 0.75, 0, 30 + 1800, "../static/images/left_double_small.png", false],
		[0.85, 0.87, 0, 200 + 1800, "../static/images/left_single_big.png", false],
		[0.75, 0.75, 0, 440 + 1800, "../static/images/left_single_small.png", false],
		[1.18, 0.9, 0, 400 + 1800, "../static/images/right_double_small.png", true],
		[0.8, 0.8, 0, 220 + 1800, "../static/images/right_single_big.png", true],
		[0.61, 0.64, 0, 40 + 1800, "../static/images/right_single_small.png", true],

		// 第五屏
		[0.7, 0.7, 240, 200 + 2400, "../static/images/money.png", false, +1],
		[0.7, 0.7, 47, 330 + 2400, "../static/images/gift.png", false, +2],
		[0.7, 0.7, 280, 320 + 2400, "../static/images/stone.png", false, -2],
		[0.7, 0.7, 277, 7 + 2400, "../static/images/obstacle.png", false, -1],
		[1.3, 0.75, 0, 30 + 2400, "../static/images/left_double_small.png", false],
		[0.85, 0.87, 0, 200 + 2400, "../static/images/left_single_big.png", false],
		[0.75, 0.75, 0, 440 + 2400, "../static/images/left_single_small.png", false],
		[1.18, 0.9, 0, 400 + 2400, "../static/images/right_double_small.png", true],
		[0.8, 0.8, 0, 220 + 2400, "../static/images/right_single_big.png", true],
		[0.61, 0.64, 0, 40 + 2400, "../static/images/right_single_small.png", true],
		// 六
		[0.7, 0.7, 60, 190 + 3000, "../static/images/money.png", false, +1],
		[0.7, 0.7, 280, -70 + 3000, "../static/images/gift.png", false, +2],
		[0.7, 0.7, 150, 370 + 3000, "../static/images/stone.png", false, -2],
		[0.7, 0.7, 160, 100 + 3000, "../static/images/obstacle.png", false, -1],
		[1.3, 0.75, 0, 30 + 3000, "../static/images/left_double_small.png", false],
		[0.85, 0.87, 0, 200 + 3000, "../static/images/left_single_big.png", false],
		[0.75, 0.75, 0, 440 + 3000, "../static/images/left_single_small.png", false],
		[1.18, 0.9, 0, 400 + 3000, "../static/images/right_double_small.png", true],
		[0.8, 0.8, 0, 220 + 3000, "../static/images/right_single_big.png", true],
		[0.61, 0.64, 0, 40 + 3000, "../static/images/right_single_small.png", true],
		// 七
		[0.7, 0.7, 240, 200 + 3600, "../static/images/money.png", false, +1],
		[0.7, 0.7, 47, 330 + 3600, "../static/images/gift.png", false, +2],
		[0.7, 0.7, 280, 320 + 3600, "../static/images/stone.png", false, -2],
		[0.7, 0.7, 277, 7 + 3600, "../static/images/obstacle.png", false, -1],
		[1.3, 0.75, 0, 30 + 3600, "../static/images/left_double_small.png", false],
		[0.85, 0.87, 0, 200 + 3600, "../static/images/left_single_big.png", false],
		[0.75, 0.75, 0, 440 + 3600, "../static/images/left_single_small.png", false],
		[1.18, 0.9, 0, 400 + 3600, "../static/images/right_double_small.png", true],
		[0.8, 0.8, 0, 220 + 3000, "../static/images/right_single_big.png", true],
		[0.61, 0.64, 0, 40 + 3600, "../static/images/right_single_small.png", true],
		// 八
		[0.7, 0.7, 60, 190 + 4200, "../static/images/money.png", false, +1],
		[0.7, 0.7, 280, -70 + 4200, "../static/images/gift.png", false, +2],
		[0.7, 0.7, 150, 370 + 4200, "../static/images/stone.png", false, -2],
		[0.7, 0.7, 160, 100 + 4200, "../static/images/obstacle.png", false, -1],
		[1.3, 0.75, 0, 30 + 4200, "../static/images/left_double_small.png", false],
		[0.85, 0.87, 0, 200 + 4200, "../static/images/left_single_big.png", false],
		[0.75, 0.75, 0, 440 + 4200, "../static/images/left_single_small.png", false],
		[1.18, 0.9, 0, 400 + 4200, "../static/images/right_double_small.png", true],
		[0.8, 0.8, 0, 220 + 4200, "../static/images/right_single_big.png", true],
		[0.61, 0.64, 0, 40 + 4200, "../static/images/right_single_small.png", true],


	],

	targets: [],
	scores: [],
	init: function(){
		var _this = this;

		this.creat();

		this.leftCtl();
		this.rightCtl();

		this.run();
		this.caculate();
		this.hitCheck();
		this.dropDown();

		event_center.on('change_miles', function( res ){
			_this.toast(res);
			_this.scores.push(res>0?'+'+res:res);
		});
	},

	toast: function(res){
		console.log(res);
		$('#toast').addClass('toast').text(res * 500 + 'M');
		var toastTimer = null;

		if(toastTimer){
			return ;
		}

		toastTimer = setTimeout(function(){
			clearTimeout(toastTimer);
			toastTimer = null;
			$('#toast').removeClass('toast').text('');

		},1500);
		
	},

	pop: function(s){

		var tpls = this.tpls();
		
		function initModal () {
			var modal;

			return function (txt){
				if( modal ){
					modal.show();
				}else{
					modal = new Modal({
						content : tpls,
						confirmText : "你已奔跑了" + (30+ s)/10 + "KM"
					});
					modal.show();
				}

				return modal;
			}
		}

		$(function(){
			var modal,
				show = initModal();
				modal = show();
			
		});
	},

	tpls: function(count1, count2, count3, count4){
		var tpls = '';

		tpls = '<img src="../static/images/game_05.png">';
				// '<ul>' + 
				// '<li><img src="../static/images/game_01.png"><span>2</span></li>' + 
				// '<li><img src="../static/images/game_02.png"><span>2</span></li>' + 
				// '<li><img src="../static/images/game_03.png"><span>2</span></li>' + 
				// '<li><img src="../static/images/game_04.png"><span>2</span></li>' + 
				// '</ul>';
		return tpls;
	},

	leftCtl: function(){
		var _this = this;
		$('.left').on('tap', function(e){
			_this.carMove('left');
			e.preventDefault();
		});
	},

	rightCtl: function(){
		var _this = this;
		$('.right').on('tap', function(e){
			_this.carMove('right');
			
			e.preventDefault();
		});
	},

	carMove: function(dir){
		var oLeft = $('.car').offset().left;
		var step = 120;
		this.boundCheck();

		if( 'left' == dir && !this.moveLeftFlag ){
			$('.car').animate({left: oLeft - step}, 800, 'bounce');
			
		}else if( 'right' == dir && !this.moveRightFlag ){
			$('.car').animate({left: oLeft + step}, 800, 'bounce');
		}

		
	},

	boundCheck: function(){
		if ( $('.car').offset().left < 40 ) {
			console.log('moveLeftFlag')
			$('.car').css({left: '40'});
			this.moveLeftFlag = true;
		}

		if($('.car').offset().left > 40 && $('.car').offset().left < 250){
			console.log('double')
			this.moveLeftFlag = false;
			this.moveRightFlag = false;
		}

		if ( $('.car').offset().left > 250 ) {
			console.log('moveRightFlag')
			$('.car').css({left: '250'});
			this.moveRightFlag = true;
		} 

	},

	run: function(){
		var _this = this;
		var clock = setInterval(function(){

			if(times > 0){
				--times;
			
				var timeWidth = (times / 30) * 100 + '%';

				$('#count').val(times);
				$('.time').css({width: timeWidth });
			}else{
				clearInterval(clock);
				$('#count').val('0');
				var s = _this.scores.join('');
					
				_this.pop(eval(s));
				$.ajax({
					type: "POST",
					data: {
						distance: (30 + eval(s))*500
					},
					url: '/weixin/_game_end',
					success: function(res){
						
					}
				})
			}
			
		}, 1000);
	},

	creat: function(){
		for (var i = 0; i < this.imgPathArr.length; i++) {
			creatEle.apply(this, this.imgPathArr[i]);
		};
		
	},

	dropDown: function(){
		var step = 2;
		var _this = this;

		var dropClock = setInterval(function(){

			$('.game_element_container').css({top:$('.game_element_container').offset().top + step }, 'linear' );

		}, 10);
	},

	hitCheck: function(){
		var _this = this;

		setInterval(function(){
			_this.targets.forEach(function(item, index, input){
				if((item.offset().top - $('.car').offset().top) < 100 && (item.offset().top - $('.car').offset().top) > 60 ) {
					
					event_center.fire('change_miles', item.data('score'));
					
				}
			});
		}, 1000);
		
	},

	scoreArr: [],

	caculate: function(){
		var imgs = $('.game_element_container').find('img');
		var _this = this;

		imgs.forEach(function(item, index, input){
			var el = $(item);
			var data = el.attr('data-score');

			if(undefined != data){
				_this.targets.push(el);
			}

		});
		
	},


}

/**
 * 创建游戏元素
 * @param {[type]} X        [description]
 * @param {[type]} Y        [description]
 * @param {[type]} score    [description]
 * @param {[type]} imagesrc [description]
 */
function creatEle(width,height,X,Y,imagesrc,RightConf,score){
    this.planX=X;
    this.planY=Y;
    this.imagenode=null;
    this.planscore=score;

    this.init=function(){
        this.imagenode = document.createElement("img");
        this.imagenode.style.width = width + 'rem';
        this.imagenode.style.height = height + 'rem';
        if( RightConf ){
        	this.imagenode.style.right = this.planX+"px";
        } else {
        	this.imagenode.style.left = this.planX+"px";
        }
        
        this.imagenode.style.top = this.planY+"px";
        this.imagenode.style.position = 'absolute';
        this.imagenode.src = imagesrc;
        if(score){
        	this.imagenode.setAttribute('data-score', this.planscore);
        }
        
        this.imagenode.setAttribute('id', guid());
        $('.game_element_container').append(this.imagenode);
    }

    this.init();
    
}

function random(min,max){
    return Math.floor(min+Math.random()*(max-min));
}

var guid = (function() {
    var counter = 0;

    return function( prefix ) {
        var guid = (+new Date()).toString( 32 ),
            i = 0;

        for ( ; i < 5; i++ ) {
            guid += Math.floor( Math.random() * 65535 ).toString( 32 );
        }

        return (prefix || 'ui-') + guid + (counter++).toString( 32 );
    };
})();



