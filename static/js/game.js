
/**
 * 开汽车小游戏
 */

var times = 60;

/**
 * 游戏基类
 * [Game description]
 */
var Game = {
	moveLeftFlag: false,
	moveRightFlag: false,
	imgPathArr: [
		[0.7, 0.7, 0, 100, -2, "../static/images/money.png"],
		[0.7, 0.7, 0, 300, -2, "../static/images/gift.png"],
		[0.7, 0.7, 0, 500, -2, "../static/images/stone.png"],
		[0.7, 0.7, 0, 700, -2, "../static/images/obstacle.png"]
	],
	init: function(){
		this.creat();

		this.leftCtl();
		this.rightCtl();

		this.run();
	},

	leftCtl: function(){
		var _this = this;
		$('.left').on('tap', function(e){
			_this.carMove('left');
		});
	},

	rightCtl: function(){
		var _this = this;
		$('.right').on('tap', function(e){
			_this.carMove('right');
		});
	},

	carMove: function(dir){
		var oLeft = $('.car').offset().left;
		var step = 10;
		this.check();

		if( 'left' == dir && !this.moveLeftFlag ){
			$('.car').animate({left: oLeft - step}, 800, 'bounce');
		}else if( 'right' == dir && !this.moveRightFlag ){
			$('.car').animate({left: oLeft + step}, 800, 'bounce');
		}

		
	},

	check: function(){
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
			
				var timeWidth = (times / 60) * 100 + '%';

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
		// setInterval(function(){
		// 	$('.game_element_container').css({top: })
		// }, 1000);
	}
}

/**
 * 创建游戏元素
 * @param {[type]} X        [description]
 * @param {[type]} Y        [description]
 * @param {[type]} score    [description]
 * @param {[type]} imagesrc [description]
 */
function creatEle(width,height,X,Y,score,imagesrc){
    this.planX=X;
    this.planY=Y;
    this.imagenode=null;
    this.planscore=score;

    this.init=function(){
        this.imagenode = document.createElement("img");
        this.imagenode.style.width = width + 'rem';
        this.imagenode.style.height = height + 'rem';
        this.imagenode.style.left = this.planX+"px";
        this.imagenode.style.top = this.planY+"px";
        this.imagenode.style.position = 'absolute';
        this.imagenode.src = imagesrc;
        this.imagenode.setAttribute('data-score', this.planscore);
        $('.game_element_container').append(this.imagenode);
    }

    this.init();
    
}

function random(min,max){
    return Math.floor(min+Math.random()*(max-min));
}


