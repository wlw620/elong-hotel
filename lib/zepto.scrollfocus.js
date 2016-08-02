define(['./zepto'],function(){

	var enable = navigator.userAgent.match(/android/i)?true:false;// 目前安卓全部自动滚屏，其他不启用

	if (!enable) return false;

	var resizenow;
	var bheight = $("body").height();
	window.addEventListener("resize",function(){
		if ( resizenow && (Date.now()-resizenow)<1000 ){
			return;
		}
		resizenow = Date.now();
		var nheight = $("body").height();

		if (bheight<nheight) {
			bheight = nheight;
		}else if (bheight > nheight) {//弹出了键盘导致页面变小
			$("input[type^='te']:focus").scrollFocus();
			$("input[type='password']:focus").scrollFocus();
		}
	},false);

	var css = function(dom,property) {
		try{
			var cssobj = getComputedStyle(dom);
			return cssobj.getPropertyValue(property);
		}catch(e){}

		return null;
	}

	$.extend($.fn, {
		scrollFocus : function(){
			//no need to options

			var dom = this[0];
			if (!dom) return;


			var realTop = 0;
			var scrollDom = document.body;

			while(dom=dom.parentNode){
				if (dom.nodeName.toLowerCase().match(/(html)|(body)/)){
					break;
				}
				if (dom.offsetTop && css(dom,"position") === 'relative') {
					realTop +=dom.offsetTop||0;

				}
				
				if (css(dom,"overflow-y") === 'auto') {
					scrollDom = dom;
				}
			}
			scrollDom.scrollTop = realTop - $(window).height() + 114;//94 + 20buffer

			try{
				dom.select();
			}catch(e){}

			return this;

		}
	});
})


