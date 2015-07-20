
/**
 * 开汽车小游戏
 */

var times = 30;

/**
 * 游戏基类
 * [Game description]
 */
var Game = {
	moveLeftFlag: false,
	moveRightFlag: false,
	imgPathArr: [
		// 奖励和处罚元素
		[0.7, 0.7, 170, 270, "../static/images/money.png", false, -2],
		[0.7, 0.7, 130, 110, "../static/images/gift.png", false, -2],
		[0.7, 0.7, 30, 370, "../static/images/stone.png", false, -2],
		[0.7, 0.7, 250, 200, "../static/images/obstacle.png", false, -2],
		// 沙漠左边沙丘
		[1.3, 0.75, 0, 30, "../static/images/left_double_small.png", false],
		[0.85, 0.87, 0, 200, "../static/images/left_single_big.png", false],
		[0.75, 0.75, 0, 440, "../static/images/left_single_small.png", false],
		// 沙漠右边沙丘
		[1.18, 0.9, 0, 400, "../static/images/right_double_small.png", true],
		[0.8, 0.8, 0, 220, "../static/images/right_single_big.png", true],
		[0.61, 0.64, 0, 40, "../static/images/right_single_small.png", true],

		// 第二屏
		[0.7, 0.7, 170, 270 + 600, "../static/images/money.png", false, -2],
		[0.7, 0.7, 130, 110 + 600, "../static/images/gift.png", false, -2],
		[0.7, 0.7, 30, 370 + 600, "../static/images/stone.png", false, -2],
		[0.7, 0.7, 250, 200 + 600, "../static/images/obstacle.png", false, -2],
		[1.3, 0.75, 0, 30 + 600, "../static/images/left_double_small.png", false],
		[0.85, 0.87, 0, 200 + 600, "../static/images/left_single_big.png", false],
		[0.75, 0.75, 0, 440 + 600, "../static/images/left_single_small.png", false],
		[1.18, 0.9, 0, 400 + 600, "../static/images/right_double_small.png", true],
		[0.8, 0.8, 0, 220 + 600, "../static/images/right_single_big.png", true],
		[0.61, 0.64, 0, 40 + 600, "../static/images/right_single_small.png", true],

		// 第三屏
		[0.7, 0.7, 170, 270 + 1200, "../static/images/money.png", false, -2],
		[0.7, 0.7, 130, 110 + 1200, "../static/images/gift.png", false, -2],
		[0.7, 0.7, 30, 370 + 1200, "../static/images/stone.png", false, -2],
		[0.7, 0.7, 250, 200 + 1200, "../static/images/obstacle.png", false, -2],
		[1.3, 0.75, 0, 30 + 1200, "../static/images/left_double_small.png", false],
		[0.85, 0.87, 0, 200 + 1200, "../static/images/left_single_big.png", false],
		[0.75, 0.75, 0, 440 + 1200, "../static/images/left_single_small.png", false],
		[1.18, 0.9, 0, 400 + 1200, "../static/images/right_double_small.png", true],
		[0.8, 0.8, 0, 220 + 1200, "../static/images/right_single_big.png", true],
		[0.61, 0.64, 0, 40 + 1200, "../static/images/right_single_small.png", true],

		// 第四屏
		[0.7, 0.7, 170, 270 + 1800, "../static/images/money.png", false, -2],
		[0.7, 0.7, 130, 110 + 1800, "../static/images/gift.png", false, -2],
		[0.7, 0.7, 30, 370 + 1800, "../static/images/stone.png", false, -2],
		[0.7, 0.7, 250, 200 + 1800, "../static/images/obstacle.png", false, -2],
		[1.3, 0.75, 0, 30 + 1800, "../static/images/left_double_small.png", false],
		[0.85, 0.87, 0, 200 + 1800, "../static/images/left_single_big.png", false],
		[0.75, 0.75, 0, 440 + 1800, "../static/images/left_single_small.png", false],
		[1.18, 0.9, 0, 400 + 1800, "../static/images/right_double_small.png", true],
		[0.8, 0.8, 0, 220 + 1800, "../static/images/right_single_big.png", true],
		[0.61, 0.64, 0, 40 + 1800, "../static/images/right_single_small.png", true],

		// 第五屏
		[0.7, 0.7, 170, 270 + 2400, "../static/images/money.png", false, -2],
		[0.7, 0.7, 130, 110 + 2400, "../static/images/gift.png", false, -2],
		[0.7, 0.7, 30, 370 + 2400, "../static/images/stone.png", false, -2],
		[0.7, 0.7, 250, 200 + 2400, "../static/images/obstacle.png", false, -2],
		[1.3, 0.75, 0, 30 + 2400, "../static/images/left_double_small.png", false],
		[0.85, 0.87, 0, 200 + 2400, "../static/images/left_single_big.png", false],
		[0.75, 0.75, 0, 440 + 2400, "../static/images/left_single_small.png", false],
		[1.18, 0.9, 0, 400 + 2400, "../static/images/right_double_small.png", true],
		[0.8, 0.8, 0, 220 + 2400, "../static/images/right_single_big.png", true],
		[0.61, 0.64, 0, 40 + 2400, "../static/images/right_single_small.png", true],

		[0.7, 0.7, 170, 270 + 2400, "../static/images/money.png", false, -2],
		[0.7, 0.7, 130, 110 + 2400, "../static/images/gift.png", false, -2],
		[0.7, 0.7, 30, 370 + 2400, "../static/images/stone.png", false, -2],
		[0.7, 0.7, 250, 200 + 2400, "../static/images/obstacle.png", false, -2],
		[1.3, 0.75, 0, 30 + 2400, "../static/images/left_double_small.png", false],
		[0.85, 0.87, 0, 200 + 2400, "../static/images/left_single_big.png", false],
		[0.75, 0.75, 0, 440 + 2400, "../static/images/left_single_small.png", false],
		[1.18, 0.9, 0, 400 + 2400, "../static/images/right_double_small.png", true],
		[0.8, 0.8, 0, 220 + 2400, "../static/images/right_single_big.png", true],
		[0.61, 0.64, 0, 40 + 2400, "../static/images/right_single_small.png", true],

		[0.7, 0.7, 170, 270 + 2400, "../static/images/money.png", false, -2],
		[0.7, 0.7, 130, 110 + 2400, "../static/images/gift.png", false, -2],
		[0.7, 0.7, 30, 370 + 2400, "../static/images/stone.png", false, -2],
		[0.7, 0.7, 250, 200 + 2400, "../static/images/obstacle.png", false, -2],
		[1.3, 0.75, 0, 30 + 2400, "../static/images/left_double_small.png", false],
		[0.85, 0.87, 0, 200 + 2400, "../static/images/left_single_big.png", false],
		[0.75, 0.75, 0, 440 + 2400, "../static/images/left_single_small.png", false],
		[1.18, 0.9, 0, 400 + 2400, "../static/images/right_double_small.png", true],
		[0.8, 0.8, 0, 220 + 2400, "../static/images/right_single_big.png", true],
		[0.61, 0.64, 0, 40 + 2400, "../static/images/right_single_small.png", true],

		[0.7, 0.7, 170, 270 + 2400, "../static/images/money.png", false, -2],
		[0.7, 0.7, 130, 110 + 2400, "../static/images/gift.png", false, -2],
		[0.7, 0.7, 30, 370 + 2400, "../static/images/stone.png", false, -2],
		[0.7, 0.7, 250, 200 + 2400, "../static/images/obstacle.png", false, -2],
		[1.3, 0.75, 0, 30 + 2400, "../static/images/left_double_small.png", false],
		[0.85, 0.87, 0, 200 + 2400, "../static/images/left_single_big.png", false],
		[0.75, 0.75, 0, 440 + 2400, "../static/images/left_single_small.png", false],
		[1.18, 0.9, 0, 400 + 2400, "../static/images/right_double_small.png", true],
		[0.8, 0.8, 0, 220 + 2400, "../static/images/right_single_big.png", true],
		[0.61, 0.64, 0, 40 + 2400, "../static/images/right_single_small.png", true],
		
		[0.7, 0.7, 170, 270 + 2400, "../static/images/money.png", false, -2],
		[0.7, 0.7, 130, 110 + 2400, "../static/images/gift.png", false, -2],
		[0.7, 0.7, 30, 370 + 2400, "../static/images/stone.png", false, -2],
		[0.7, 0.7, 250, 200 + 2400, "../static/images/obstacle.png", false, -2],
		[1.3, 0.75, 0, 30 + 2400, "../static/images/left_double_small.png", false],
		[0.85, 0.87, 0, 200 + 2400, "../static/images/left_single_big.png", false],
		[0.75, 0.75, 0, 440 + 2400, "../static/images/left_single_small.png", false],
		[1.18, 0.9, 0, 400 + 2400, "../static/images/right_double_small.png", true],
		[0.8, 0.8, 0, 220 + 2400, "../static/images/right_single_big.png", true],
		[0.61, 0.64, 0, 40 + 2400, "../static/images/right_single_small.png", true],

		[0.7, 0.7, 170, 270 + 2400, "../static/images/money.png", false, -2],
		[0.7, 0.7, 130, 110 + 2400, "../static/images/gift.png", false, -2],
		[0.7, 0.7, 30, 370 + 2400, "../static/images/stone.png", false, -2],
		[0.7, 0.7, 250, 200 + 2400, "../static/images/obstacle.png", false, -2],
		[1.3, 0.75, 0, 30 + 2400, "../static/images/left_double_small.png", false],
		[0.85, 0.87, 0, 200 + 2400, "../static/images/left_single_big.png", false],
		[0.75, 0.75, 0, 440 + 2400, "../static/images/left_single_small.png", false],
		[1.18, 0.9, 0, 400 + 2400, "../static/images/right_double_small.png", true],
		[0.8, 0.8, 0, 220 + 2400, "../static/images/right_single_big.png", true],
		[0.61, 0.64, 0, 40 + 2400, "../static/images/right_single_small.png", true],

		[0.7, 0.7, 170, 270 + 2400, "../static/images/money.png", false, -2],
		[0.7, 0.7, 130, 110 + 2400, "../static/images/gift.png", false, -2],
		[0.7, 0.7, 30, 370 + 2400, "../static/images/stone.png", false, -2],
		[0.7, 0.7, 250, 200 + 2400, "../static/images/obstacle.png", false, -2],
		[1.3, 0.75, 0, 30 + 2400, "../static/images/left_double_small.png", false],
		[0.85, 0.87, 0, 200 + 2400, "../static/images/left_single_big.png", false],
		[0.75, 0.75, 0, 440 + 2400, "../static/images/left_single_small.png", false],
		[1.18, 0.9, 0, 400 + 2400, "../static/images/right_double_small.png", true],
		[0.8, 0.8, 0, 220 + 2400, "../static/images/right_single_big.png", true],
		[0.61, 0.64, 0, 40 + 2400, "../static/images/right_single_small.png", true],

	],
	init: function(){
		var _this = this;

		this.creat();

		this.leftCtl();
		this.rightCtl();

		this.run();
		this.caculate();

		this.dropDown();

		// setInterval(function(){

		// 	_this.caculate();
			
		// }, 1000);

		
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
		var step = 10;
		this.boundCheck();

		if( 'left' == dir && !this.moveLeftFlag ){
			$('.car').animate({left: oLeft - step}, 800, 'bounce');
		}else if( 'right' == dir && !this.moveRightFlag ){
			$('.car').animate({left: oLeft + step}, 800, 'bounce');
		}

		
	},

	boundCheck: function(){
		if ( $('.car').offset().left < 15 ) {
			$('.car').offset().left = 15;
			this.moveLeftFlag = true;
		}else{
			this.moveLeftFlag = false;
		}

		if ( $('.car').offset().left > 290 ) {
			$('.car').offset().left = 290;
			this.moveRightFlag = true;
		} else {
			this.moveRightFlag = false;
		}

	},

	run: function(){
		var _this = this;
		var clock = setInterval(function(){

			if(times > 0){
				--times;
			
				var timeWidth = (times / 30) * 100 + '%';

				$('#count').text(times);
				$('.time').css({width: timeWidth });
			}else{
				clearInterval(clock);
				$('#count').text('0');
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

	hitCheck: function(el, top, left, width){
		var id = el.attr('id');
		var score = el.attr('data-score');
		var obj = {};

		if(top > $('.car').offset().top && left + width > $('.car').offset().left) {
			obj[id] = score;
			this.scoreArr.push(obj);
		}

		console.log(this.scoreArr);
	},

	scoreArr: [],

	caculate: function(){
		var imgs = $('.game_element_container').find('img');
		var _this = this;

		imgs.forEach(function(item, index, input){
			var el = $(item);
			var data = el.attr('data-score');

			if(undefined != data){
				var pos = el.offset();
				_this.hitCheck(el, pos.top, pos.left, pos.width);
				
			}

		});
		
	}
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



