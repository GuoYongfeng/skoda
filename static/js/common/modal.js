/**
 * 弹出浮层的插件
 * @param {[type]} opt [description]
 */
var Modal = function(opt){
	this.conf = {
		title: '',
		content: '',
		confirmText: '确认',
		confirmFn: function(){}
	};
	this.status = {
		has_instance: false
	};
	this.dom = {
		container: null,
		buddy: null,
		instance: null,
		main: null
	};

	this.init(opt);
};
Modal.prototype = {

	init: function(opt){
		$.extend(this.conf, opt);	
	},
	_create: function(){
		this.dom.instance = $('<div class="ui-modal"></div>');
		
		var html = [];
		html.push('<div class="main">');
			html.push('<div class="content">');
				html.push(this.conf.content);
			html.push('</div>');
			html.push('<a href="/weixin/game_end" class="fix_href">');
				html.push('<span class="btn_wrap">'+this.conf.confirmText+'</span>');
			html.push('</a>');
		html.push("</div>");
		this.dom.instance.html(html.join(''));
		this.dom.container = $('body');

		this.dom.instance.css({
			height: Math.max(this.dom.container.height(), $('html').height())
		});

		this.dom.main = this.dom.instance.find('.main');
		var h = ($(window).height() - this.dom.main.height())/20;
		this.dom.main.css({
			'position': 'fixed',
			'top':  h + 'px'
		});

		//添加到dom tree		
		this.dom.container.append(this.dom.instance);
		this.status.has_instance = true;
		//绑定事件
		var _this = this;
		this.dom.instance.on('click', '.btn-close', function(){
			_this.hide();
			if(typeof _this.conf.confirmFn == 'function'){
				_this.conf.confirmFn();
			}
		});
	},
	show: function(){
		if(this.status.has_instance){
			this.dom.instance.show();
		}else{
			this._create();
		}
	},
	hide: function(){
		this.dom.instance.hide();
	}
};

// module.exports = Modal;
