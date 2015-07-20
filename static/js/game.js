
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

	],
	init: function(){
		this.creat();

		this.leftCtl();
		this.rightCtl();

		this.run();
		
		this.dropDown();
		// this.caculate();
		// console.log($('.car').offset());
		// $('.car').css({left: 0, top: 0})

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
		var step = 0.5;
		var _this = this;

		var dropClock = setInterval(function(){

			$('.game_element_container').css({top:$('.game_element_container').offset().top + step }, 'linear' );
			// _this.caculate();
			
		}, 10);
	},

	hitCheck: function(){

	},

	caculate: function(){
		var imgs = $('.game_element_container').find('img');

		imgs.forEach(function(item, index, input){
			var el = $(item);
			var data = el.attr('data-score');

			if(undefined != data){
				var pos = el.offset();
				console.log(pos);
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

function getPosition(element) {
    element = baidu.dom.g(element);
    var doc = baidu.dom.getDocument(element), 
        browser = baidu.browser,
        getStyle = baidu.dom.getStyle,
    // Gecko 1.9版本以下用getBoxObjectFor计算位置
    // 但是某些情况下是有bug�?
    // 对于这些有bug的情�?
    // 使用递归查找的方�?
        BUGGY_GECKO_BOX_OBJECT = browser.isGecko > 0 && 
                                 doc.getBoxObjectFor &&
                                 getStyle(element, 'position') == 'absolute' &&
                                 (element.style.top === '' || element.style.left === ''),
        pos = {"left":0,"top":0},
        viewport = (browser.ie && !browser.isStrict) ? doc.body : doc.documentElement,
        parent,
        box;
    
    if(element == viewport){
        return pos;
    }


    if(element.getBoundingClientRect){ // IE and Gecko 1.9+
        
        //当HTML或者BODY有border width�? 原生的getBoundingClientRect返回值是不符合预期的
        //考虑到通常情况�?HTML和BODY的border只会设成0px,所以忽略该问题.
        box = element.getBoundingClientRect();

        pos.left = Math.floor(box.left) + Math.max(doc.documentElement.scrollLeft, doc.body.scrollLeft);
        pos.top  = Math.floor(box.top)  + Math.max(doc.documentElement.scrollTop,  doc.body.scrollTop);
        
        // IE会给HTML元素添加一个border，默认是medium�?px�?
        // 但是在IE 6 7 的怪异模式下，可以被html { border: 0; } 这条css规则覆盖
        // 在IE7的标准模式下，border永远�?px，这个值通过clientLeft �?clientTop取得
        // 但是。。。在IE 6 7的怪异模式，如果用户使用css覆盖了默认的medium
        // clientTop和clientLeft不会更新
        pos.left -= doc.documentElement.clientLeft;
        pos.top  -= doc.documentElement.clientTop;
        
        var htmlDom = doc.body,
            // 在这里，不使用element.style.borderLeftWidth，只有computedStyle是可信的
            htmlBorderLeftWidth = parseInt(getStyle(htmlDom, 'borderLeftWidth')),
            htmlBorderTopWidth = parseInt(getStyle(htmlDom, 'borderTopWidth'));
        if(browser.ie && !browser.isStrict){
            pos.left -= isNaN(htmlBorderLeftWidth) ? 2 : htmlBorderLeftWidth;
            pos.top  -= isNaN(htmlBorderTopWidth) ? 2 : htmlBorderTopWidth;
        }
    } else if (doc.getBoxObjectFor && !BUGGY_GECKO_BOX_OBJECT){ // gecko 1.9-

        // 1.9以下的Gecko，会忽略ancestors的scroll�?
        // https://bugzilla.mozilla.org/show_bug.cgi?id=328881 and
        // https://bugzilla.mozilla.org/show_bug.cgi?id=330619

        box = doc.getBoxObjectFor(element);
        var vpBox = doc.getBoxObjectFor(viewport);
        pos.left = box.screenX - vpBox.screenX;
        pos.top  = box.screenY - vpBox.screenY;
    } else { // safari/opera
        parent = element;

        do {
            pos.left += parent.offsetLeft;
            pos.top  += parent.offsetTop;
      
            // safari里面，如果遍历到了一个fixed的元素，后面的offset都不准了
            if (browser.isWebkit > 0 && getStyle(parent, 'position') == 'fixed') {
                pos.left += doc.body.scrollLeft;
                pos.top  += doc.body.scrollTop;
                break;
            }
            
            parent = parent.offsetParent;
        } while (parent && parent != element);

        // 对body offsetTop的修�?
        if(browser.opera > 0 || (browser.isWebkit > 0 && getStyle(element, 'position') == 'absolute')){
            pos.top  -= doc.body.offsetTop;
        }

        // 计算除了body的scroll
        parent = element.offsetParent;
        while (parent && parent != doc.body) {
            pos.left -= parent.scrollLeft;
            // see https://bugs.opera.com/show_bug.cgi?id=249965
//            if (!b.opera || parent.tagName != 'TR') {
            if (!browser.opera || parent.tagName != 'TR') {
                pos.top -= parent.scrollTop;
            }
            parent = parent.offsetParent;
        }
    }

    return pos;
};



