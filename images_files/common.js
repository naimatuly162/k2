// JavaScript Document
; /*共通処理Script*/

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csscalc-cssvhunit-cssvwunit-flexbox-history-touchevents-printshiv-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,a,s;for(var l in S)if(S.hasOwnProperty(l)){if(e=[],t=S[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),x.push((o?"":"no-")+s.join("-"))}}function i(e){var t=C.className,n=Modernizr._config.classPrefix||"";if(w&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),w?C.className.baseVal=t:C.className=t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):w?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var a=i.error?"error":"log";i[a].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function l(e,t){return e-1===t||e===t||e+1===t}function u(){var e=t.body;return e||(e=a(w?"svg":"body"),e.fake=!0),e}function c(e,n,r,o){var i,s,l,c,f="modernizr",d=a("div"),p=u();if(parseInt(r,10))for(;r--;)l=a("div"),l.id=o?o[r]:f+(r+1),d.appendChild(l);return i=a("style"),i.type="text/css",i.id="s"+f,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",c=C.style.overflow,C.style.overflow="hidden",C.appendChild(p)),s=n(d,e),p.fake?(p.parentNode.removeChild(p),C.style.overflow=c,C.offsetHeight):d.parentNode.removeChild(d),!!s}function f(e,t){return!!~(""+e).indexOf(t)}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function p(e,t){return function(){return e.apply(t,arguments)}}function m(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?p(o,n||t):o);return!1}function h(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function v(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(h(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+h(t[o])+":"+r+")");return i=i.join(" or "),c("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==s(e,null,"position")})}return n}function g(e,t,o,i){function s(){u&&(delete k.style,delete k.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var l=v(e,o);if(!r(l,"undefined"))return l}for(var u,c,p,m,h,g=["modernizr","tspan","samp"];!k.style&&g.length;)u=!0,k.modElem=a(g.shift()),k.style=k.modElem.style;for(p=e.length,c=0;p>c;c++)if(m=e[c],h=k.style[m],f(m,"-")&&(m=d(m)),k.style[m]!==n){if(i||r(o,"undefined"))return s(),"pfx"==t?m:!0;try{k.style[m]=o}catch(y){}if(k.style[m]!=h)return s(),"pfx"==t?m:!0}return s(),!1}function y(e,t,n,o,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+j.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?g(s,t,o,i):(s=(e+" "+z.join(a+" ")+a).split(" "),m(s,t,n))}function E(e,t,r){return y(e,n,n,t,r)}var x=[],S=[],b={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){S.push({name:e,fn:t,options:n})},addAsyncTest:function(e){S.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=b,Modernizr=new Modernizr,Modernizr.addTest("history",function(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")||"file:"===location.protocol?e.history&&"pushState"in e.history:!1});var C=t.documentElement,w="svg"===C.nodeName.toLowerCase();w||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=w.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=w.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),w.elements=n+" "+e,u(t)}function i(e){var t=C[e[S]];return t||(t={},b++,e[S]=b,C[b]=t),t}function a(e,n,r){if(n||(n=t),v)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():x.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||E.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),v)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),l=s.length;l>a;a++)o.createElement(s[a]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return w.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(w,t.frag)}function u(e){e||(e=t);var r=i(e);return!w.shivCSS||h||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),v||l(e,r),e}function c(e){for(var t,n=e.getElementsByTagName("*"),o=n.length,i=RegExp("^(?:"+r().join("|")+")$","i"),a=[];o--;)t=n[o],i.test(t.nodeName)&&a.push(t.applyElement(f(t)));return a}function f(e){for(var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(_+":"+e.nodeName);r--;)t=n[r],t.specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}function d(e){for(var t,n=e.split("{"),o=n.length,i=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+_+"\\:$2";o--;)t=n[o]=n[o].split("}"),t[t.length-1]=t[t.length-1].replace(i,a),n[o]=t.join("}");return n.join("{")}function p(e){for(var t=e.length;t--;)e[t].removeNode()}function m(e){function t(){clearTimeout(a._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,o,a=i(e),s=e.namespaces,l=e.parentWindow;return!N||e.printShived?e:("undefined"==typeof s[_]&&s.add(_),l.attachEvent("onbeforeprint",function(){t();for(var i,a,s,l=e.styleSheets,u=[],f=l.length,p=Array(f);f--;)p[f]=l[f];for(;s=p.pop();)if(!s.disabled&&T.test(s.media)){try{i=s.imports,a=i.length}catch(m){a=0}for(f=0;a>f;f++)p.push(i[f]);try{u.push(s.cssText)}catch(m){}}u=d(u.reverse().join("")),o=c(e),r=n(e,u)}),l.attachEvent("onafterprint",function(){p(o),clearTimeout(a._removeSheetTimer),a._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var h,v,g="3.7.3",y=e.html5||{},E=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,x=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,S="_html5shiv",b=0,C={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",h="hidden"in e,v=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){h=!0,v=!0}}();var w={elements:y.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:g,shivCSS:y.shivCSS!==!1,supportsUnknownElements:v,shivMethods:y.shivMethods!==!1,type:"default",shivDocument:u,createElement:a,createDocumentFragment:s,addElements:o};e.html5=w,u(t);var T=/^$|\b(?:all|print)\b/,_="html5shiv",N=!v&&function(){var n=t.documentElement;return!("undefined"==typeof t.namespaces||"undefined"==typeof t.parentWindow||"undefined"==typeof n.applyElement||"undefined"==typeof n.removeNode||"undefined"==typeof e.attachEvent)}();w.type+=" print",w.shivPrint=m,m(t),"object"==typeof module&&module.exports&&(module.exports=w)}("undefined"!=typeof e?e:this,t);var T=b._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];b._prefixes=T,Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=a("a");return n.style.cssText=e+T.join(t+e),!!n.style.length});var _=b.testStyles=c;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",T.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");_(r,function(e){n=9===e.offsetTop})}return n}),_("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),r=parseInt(s(t,null,"height"),10);Modernizr.addTest("cssvhunit",l(r,n))}),_("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),r=parseInt(s(t,null,"width"),10);Modernizr.addTest("cssvwunit",l(r,n))});var N="Moz O ms Webkit",j=b._config.usePrefixes?N.split(" "):[];b._cssomPrefixes=j;var z=b._config.usePrefixes?N.toLowerCase().split(" "):[];b._domPrefixes=z;var P={elem:a("modernizr")};Modernizr._q.push(function(){delete P.elem});var k={style:P.elem.style};Modernizr._q.unshift(function(){delete k.style}),b.testAllProps=y,b.testAllProps=E,Modernizr.addTest("flexbox",E("flexBasis","1px",!0)),o(),i(x),delete b.addTest,delete b.addAsyncTest;for(var A=0;A<Modernizr._q.length;A++)Modernizr._q[A]();e.Modernizr=Modernizr}(window,document);

/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else{factory(jQuery);}}(function($){var pluses=/\+/g;function encode(s){return config.raw?s:encodeURIComponent(s);}
function decode(s){return config.raw?s:decodeURIComponent(s);}
function stringifyCookieValue(value){return encode(config.json?JSON.stringify(value):String(value));}
function parseCookieValue(s){if(s.indexOf('"')===0){s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,'\\');}
try{s=decodeURIComponent(s.replace(pluses,' '));return config.json?JSON.parse(s):s;}catch(e){}}
function read(s,converter){var value=config.raw?s:parseCookieValue(s);return $.isFunction(converter)?converter(value):value;}
var config=$.cookie=function(key,value,options){if(value!==undefined&&!$.isFunction(value)){options=$.extend({},config.defaults,options);if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setTime(+t+days*864e+5);}
return(document.cookie=[encode(key),'=',stringifyCookieValue(value),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''));}
var result=key?undefined:{};var cookies=document.cookie?document.cookie.split('; '):[];for(var i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split('=');var name=decode(parts.shift());var cookie=parts.join('=');if(key&&key===name){result=read(cookie,value);break;}
if(!key&&(cookie=read(cookie))!==undefined){result[name]=cookie;}}
return result;};config.defaults={};$.removeCookie=function(key,options){if($.cookie(key)===undefined){return false;}
$.cookie(key,'',$.extend({},options,{expires:-1}));return!$.cookie(key);};}));

/*cookie Wraper---------------------------------------------------*/
function cSave(s,v,options){
	defaults = {path: '/', expires: 7};
	options = jQuery.extend({}, defaults, options);
	return $.cookie(s,v,options);
}
function cSaveTmp(s,v){
	return $.cookie(s,v,{ path: '/' });
}
function cRead(s){
	return $.cookie(s);
}


/*Get/Set URL parameters using jQuery------------------------------------*/
function get_urlPram(url,key){
	if(key){
		var results = new RegExp('[\\?&]' + key + '=([^&#]*)').exec(url);
		if (results==null){
			return null;
		}
		else{
			return results[1] || 0;	
		}
	}else{
		var p1 = url.split("#"),q={};
		if( p1.length > 1 ) { url = p1[0]; }
		var p2= url.split("?");
		if( p2.length > 1 ) {
			var params = p2[1].split("&");
			for ( i = 0; i < params.length; i++ ) {
				var pItem = params[i].split("=");
				q[pItem[0]] = pItem[1];
			}
		}
		return q;
	}
}
/*パラメータ既存値は残す、同一キーは新値で上書き*/
function set_urlPram(url,prams){
	var p1 = url.split("#"),hash="",q=[];
	if( p1.length > 1 ) { url = p1[0]; hash="#"+p1[1]; }
	var setPrams= get_urlPram(url);
	if($.isEmptyObject(setPrams)) {
		setPrams=prams;
	}else{
		url= url.split("?")[0];
		$.extend(setPrams,prams);
	}
	$.each(setPrams,function(k,v) {
		q.push(k+"="+v);
	});
	return url+'?'+q.join('&')+hash;
}
/*日時系共通関数---------------------------------------*/
function isDate(date) {
    if (Object.prototype.toString.call(date) !== "[object Date]") return false;

    return !isNaN(date.getTime());
}
function parseISO8601(dtstr) {
    var dt = dtstr.split(/[: T-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
}

function nFmt(n) {
    return ('0' + n).slice(-2);
}
function dateFmt(aDate) {
    return aDate.getFullYear() + '-' + nFmt(aDate.getMonth() + 1) + '-' + nFmt(aDate.getDate());
}
function timeFmt(aDate) {
    return nFmt(aDate.getHours()) + ':' + nFmt(aDate.getMinutes());
}


/*font-size-----------------------------------------------------*/
var fMax =200;
var fMin =100;
function get_fSize() {
	var f_size = document.body.style.fontSize;//現在値
	var s = (f_size.substr(0,f_size.length-1)-0) ;//数値化(%除去)
	return s;
}
function set_fSize(s) {
	var before=get_fSize();
	if(before!=s){
		document.body.style.fontSize= s+'%';
		cSave('fontsize',s);
		$(window).trigger("resize.fontsize");
	}
	return null;
}
function view(r) {
	var num = 10;//増減幅
	var s = get_fSize();//現在値
	if(r == '-'){
		s = s - num;
		if (s < fMin) { s = fMin; } //font-size:Max
	}else{
		s = s + num;
		if (s > fMax) { s = fMax; }  //font-size:Min
	}
	set_fSize(s);
}

/*color style切換え---------------------------------------------------*/
function colors(r) {
	if(r < 1 || r > 2 ){ /*範囲外設定値ガード*/ r = 1;}
	var thisID='color'+r;
	var css = $('#'+thisID).attr("href");
	$('body').removeClass('color1 color2').addClass(thisID);
	$("#color1, #color2").attr("rel","alternate stylesheet");
	$("#color_css").attr({href:css,rel:"stylesheet"});
	cSave('colorset',r);//save
	return null;
}

/*font-size/colorStyle initialize---------------------------------*/
function init(f) {
	var s, r;
	s = cRead('fontsize') ;
	if (f == true || s == null) {
		s = 100; //def 100%            
	}
	$('#pageHead').css('font-size','16px');
	set_fSize( s);
	
	r = cRead('colorset') ;
	if (f == true || r== null) {
		r = 1; //def color1
	}
	colors(r);	//cssセット
	return null;
}

/*font-size/colorStyle Reset---------------------------------*/
function re_set() {
	init(true); //初期化
	return null;
}


/*font-size/colorStyle tools Drow---------------------------------*/
function f_tools() {
	var tool_code;
	tool_code = '<ul id="t_jtools">' +
			'<li id="t_fsize"><span class="label">文字サイズ</span>' +
			'<div class="fontSlider"><input type="range" aria-label="文字サイズ拡縮" value="100" min="100" max="200" step="10"></div>' +
			"</li>" +
			'<li id="t_color"><span class="label">背景色</span><ul>' +
		'<li id="t_black"><button type="button" title="黒背景のスタイルに切替えます" >黒</button></li>' +
		'<li id="t_white"><button type="button" title="白背景のスタイルに切替えます" >白</button></li>' +
			'</ul></li>' +
			'</ul>';

	$("#toolBar").append(tool_code);

	$('#t_black button').click(function (e) {
		colors(2);
		return false;
	});
	$('#t_white button').click(function (e) {
		colors(1);
		return false;
	});

	$(".fontSlider input").on("change", function(e){
		var size = $(this).val();
		set_fSize(size);
	});
	//現在値セット
	if ( cRead("colorset") == 2 ) $(".switchColor input").prop("checked", true);
	$('.fontSlider input[type="range"]').val(get_fSize());
	if( typeof($.fn.rangeslider) == 'function' ){
		$('.fontSlider input[type="range"]').rangeslider({polyfill: false});
	}
}


/*IE--------------------------------------------------------------*/
//console.log IE error対策
var alertFallback = false;
if (typeof console === "undefined" || typeof console.log === "undefined") {
  console = {};
  if (alertFallback) {
      console.log = function(msg) {
           alert(msg);
      };
  } else {
      console.log = function() {};
  }
}

/*Responsive-------------------------------------------------------------*/
function ResizeInit(){
	// iframe Responsive
	$('.gCode iframe, .gCode video').each(function(index, element) {
		var f = true;
		if($(this).attr('src').match(/google\.([\w\.]+)\/maps|www\.youtube\.com/i)){
		// iframe(Map&youtube) Responsive
			var h = $(this).attr('height');
			var w = $(this).attr('width');
			if($.isNumeric(h)&&$.isNumeric(w)){
				var $wap=$('<div class="RFrameWrap"/>');
				$wap.css({'padding-bottom':Math.floor(h/w*100)+'%','max-width':w+'px'});
				$(this).wrap($wap);
				f =false;
			}
		}
		if(f){
			//iframe scroll
			$(this).parents('.gCode').addClass('scroll');
		}
	});
	//table Scroll
	$('#contents table:not(.reflow,.notScroll,[class^="gsc-"],[class^="gstl_"])').each(function(index, element) { 
		$(this).wrap('<div class="tableScroll"></div>');
	}); 
	//table reflow
	$('#contents table.reflow').each(function(index, element) { 
		var $table=$(this);
		$($table.find('thead th').get().reverse()).each(function(i, el) {
			$table.find('tbody tr>*:nth-last-child('+ (i+1) +')').prepend('<span class="label">'+$(this).text()+'</span>');
		});
	});
}
//scroll-----------------------------------------------------------------
function ScrollLinks(){
	function tsOffset(){
		return 25+ $("#pageHead .logo").height() ;
	}
	//ページ内スクロール
	$('#contents a[href^="#"]:not([href="#"],.toggle,.speech,.speech a)').on('click.inter',function () {
		var to=$(this).attr('href');
		if($(to).length>0){
			var p = $(to).offset().top-tsOffset();
			$('html,body').animate({ scrollTop: p }, 'fast');
		}
	});
	$('a[href="#pageHead"]').on('click.top',function () {
		$('html,body').animate({ scrollTop: 0 }, 'fast');
	});

	if(location.hash.length>1){
		//ハッシュ有りLoad位置調整
		if($('#contents ' +location.hash+':not(.evntsList .event)').length>0){
			$(window).on('load', function(e){
				var p = $('#contents ' +location.hash).offset().top-tsOffset();
				$('html,body').animate({ scrollTop: p },0);
				setTimeout(function() {
					$('html,body').animate({ scrollTop: p },0);
				},200);
			});
		}
	}
}

//コンテンツ補正----------------------------------------------------------------
//グループ分類
function listGrouping(groupList){
	if( $('.categoryList h2').length>0){ return; }
	var groups= $.isArray(groupList)? groupList: groupList.split(',');
	var gLists=[];
	for(var i=0;i<groups.length;i++){
		gLists[i]=$('<ul/>');
	}
	$('.categoryList > ul >li').each(function(){
		var $g =$(this).find('.group');
		if($g.length==0){ return true; }
		var ix=groups.indexOf($g.text());
		if(ix>=0){
			gLists[ix].append(this);
			$g.hide();
		}else{
			//指定リスト外 出現順にまとめ
			groups.push($g.text());
			gLists.push($('<ul/>').append(this));
		}
	});
	for(var i=0;i<groups.length;i++){
		if(gLists[i].find('li').length>0){
			$('.categoryList').append('<h2>'+groups[i]+'</h2>').append(gLists[i]);
		};
	}
	$('.categoryList > ul').each(function(){
		if($(this).find('li').length==0){ $(this).remove();}
	});
	
}
//外部リンク判定
function chkExternal(url,flg){
	var ret =false;
	if(url.match(/^http/)){
		ret =true;
		//例外
		if(url.match(new RegExp("^https?:\/\/" + location.hostname.replace(/[\\^$\.*+?()\[\]{}|]/g, '\\$&')+"(?!\/static\/)",'i' ))){
			ret =false;
		}else if(flg){
			if(url.search(/^https?:\/\/www\.city\.akabira\.hokkaido\.jp(?!\/(static|reiki_int)\/)/i) >= 0){
				ret =false;
			}
		}
	}
	return ret;
}
//ファイルサイズ単位
function fileSize(size) {
	var unit= ['B', 'KB', 'MB', 'GB', 'TB'];
    var i = Math.floor(Math.log(size) / Math.log(1024));
	if(i>=unit.length){ i =unit.length-1;}
    return (size / Math.pow(1024, i)).toFixed(2) * 1 +unit[i];
}
function contentInit(){

	ResizeInit();

	//セル幅調整
	$('.mainText figure img').each(function(){
		var w =$(this).attr('width'),$f=$(this).parents('figure');
		if(!w && this.naturalWidth){
			w=this.naturalWidth;
		}
		if(w>0){
			$f.css('width',w+'px');
		}else{
			$(this).on('load',function(){
				$f.css('width',this.naturalWidth);
			});
		}
	});

	//新規ウィンドウ・マーク
	$('a[target="_blank"]').each(function() {
		if($(this).find('.nw').length==0){
			var code='<span class="nw">（新規ウィンドウで開く）</span>';
			if($(this).find('.title').length==1){
				$(this).find('.title').append(code);
			
			}else{
				$(this).append(code);
			}
		}
		//link note speech onley
		if($(this).is('.banners a, .lnso a, .lnsn a')){
			$(this).find('.nw').addClass('speech');
		}
	});
	//外部へのリンク 同ドメインOR指定ドメイン以外
	$('a[href^="http"],a[href^="//"]').each(function() {
		if( chkExternal(this.href,true) ){
			if($(this).find('.out').length==0){
				var code='<span class="out">（外部サイト）</span>';
				if($(this).find('.title').length==1){
					$(this).find('.title').append(code);
				}else{
					$(this).append(code);
				}
			}
			$(this).addClass("external");
			//link note speech onley
			if($(this).is('.banners a, .lnso a, .lnse a')){
				$(this).find('.out').addClass('speech');
			}	
		}
	});	
	//書類 付加情報
	$('.mainText a[href],article.body a[href]')
		.not('[href^="#"],[href^="tel:"],[href^="mailto:"],[href$=".html"],[href$="/"],.nodes a,.pages a,.speech,.speech a').each(function() {
		if( !chkExternal(this.href,false) ){
			//調査対象
			var exts=['pdf','doc','docx','xls','xlsx','ppt','pptx',
					  'txt','csv',
					  'png','gif','jpg','jpeg',
					  'zip', 'lzh','cab','tar','exe'];
			
			var $a=$(this),tx =$a.text().trim(),file=this.href;
			if($a.is('[class*="icon"]')){
				$a.html(tx.replace(/\((\w+)\s([\d,\.]+\w?B)\)$/,'<span class="ext rep">($1: $2)</span>'));
				if($a.find('.ext').length==1){
					return true;//continue
				}
			}
			var ext=file.replace(/^.*?\.(\w+)(\?.*)?$/,'$1');
			if(ext.length>0&& exts.indexOf(ext.toLowerCase())>=0){
				$a.addClass('icon-'+ext.toLowerCase());
				tx=tx.replace(/[（\(]([A-Z]+)?[\s:：]*?([\d,\.]+[A-Z]*?(B|byte)+)?[\)）]$/i,'');
				var xhr = $.ajax({
					type: "HEAD", url:file ,
					success: function(msg){
						var s = xhr.getResponseHeader('Content-Length');// bytes
						if(s>0){
							$a.html(tx+'<span class="ext chek">('+ext.toUpperCase()+': '+fileSize(s)+')</span>');
						}
					},error:function( jqXHR,  textStatus,  errorThrown ){
						$a.html(tx);
						console.log('AJAX[HEAD]check '+file+' '+textStatus+':'+errorThrown);
					}
				});
			}
		}
	});
	$('.mainText ul >li> a[href],article.body ul> li> a[href]').filter('[class*="icon"]').parents('ul').each(function(){
		if(!$(this).hasClass('iPapers')){
			var chk=true; 
			$(this).find('>li').each(function(){
				if($(this).find('>a[class*="icon"]').length==0){ 
					chk=false;
					return false;
				}
			});
			if(chk){ $(this).addClass('iPapers');}
		}
	});
	
	//ページ内目次を作る+TOP戻る(読み上げ用)リンク追加
	if ($('body').attr('id')!='homePage' && !$('body').hasClass('body--sitemap') && $('#main .mainText').length > 0 ) {
		var chkHeader='#main .mainText h2:not(#event-list article h2)';
		var upLink='<p class="speech"><a href="#pageHead">ページのトップへ戻る</a></p>';
		if($(chkHeader).length>0){
			var $idx=$('<nav id="indexInter" aria-label="ページ内目次"><b>ページ内目次</b><ul/></nav>');
			var $list=$idx.find('ul'),idPre='chapter-';
			$(chkHeader).each(function(ix, element) {
				var id=idPre+ix;
				if(this.id){
					id=this.id;
				}else{
					$(this).attr('id',id);
				}
				$list.append('<li><a href="#'+id+'">'+$(this).text()+'</a></li>');
				$(this).before(upLink);
			});
			if($(chkHeader).length==1||$('#main.iiHidden,.mainText.iiHidden').length>0){
				$idx.addClass('speech');
			}
			$('#main .mainText:first').before($idx);
		}
	}
	ScrollLinks();
	

}

//Menu-----------------------------------------------------------------
//menu of current
function chkM1(chkURL) {
	if ($("#menu .current").length > 0) {
		return;
	}
	$("#menu li a").each(function() {
		if (chkURL == $(this).prop("href").replace(/\/index.html$/, '/')) {
			$(this).addClass("current");
			return false;
		}
	});
}
//subMenu of current
function chkM2(chkURL) {
	if($("#side .navigation .current").length > 0|| $("#side .navigation li a").length==0) {
		return;
	}
	$("#side .navigation li a").each(function() {
		if (chkURL == $(this).prop("href").replace(/\/index.html$/, '/')) {
			$(this).parents('li').addClass("current");
			return false;
		}
	});
}
function MenuCurrent() {
	if ($("#menu .current").length == 0) {
		var chkURL=location.href.replace('/kana/','/').replace(/[\#\?].*$/, '').replace(/\/index.html$/, '/');
		chkM1(chkURL);
		chkM2(chkURL);

		if ($(".crumb:first a:not(:first)").length > 0) {
			//バンクズから現在メニューcurrent判定
			$(".crumb:first a:not(:first)").each(function() {
				var chkURL = $(this).prop("href");
				chkM1(chkURL);
				chkM2(chkURL);
			});
		}
	}
}
//メニューモード
function chk_spMode(){
	return $('.menu .spBtn').is(':visible');
}
//メニュー初期設定
function menuInit() {
	//部署一覧ボタンコピー
	if($('#pageHead .department').length==1){
		$('#pageHead .department').clone().appendTo('#menu');
	}
	//現在地
	if ($("body").attr("id") != "homePage") {
		MenuCurrent();
	}
	//SP
	$(".spBtn").append('<span class="close">閉じる</span>');
	$(".spBtn").click(function() {
		$("body").toggleClass("open");
	});
	//ツールパネル
	function pALLClose() {
		$(".spBtn").removeClass("open");
		$("#pageHead .visible").removeClass("visible");
		$(document).off("click.panelClose");
	}
	//パネル開閉
	$(".spBtn").on("click", function(e) {
		var $mi = $(this),
			flg = $mi.hasClass("open");
		
		if (!flg) {
			pALLClose();
			var panel = $mi.next();
			$mi.addClass("open");
			$(panel).addClass("visible");
			$(document).on('click.panelClose', function(evt) {
				if(!$(event.target).closest(panel).length) {
					pALLClose();
				}
			});
		} else {
			pALLClose();
		}
		return false;
	});
	//キーボード:focus touchイベント対応機器以外
	if (!Modernizr.touchevents) {
		// google検索
		$('.js-blur-tool input, .js-blur-tool button, .js-blur-tool a').blur(function () {
			var $toolWrap = $(this).closest(".js-blur-tool");
			var $toolBtn = $toolWrap.find('.spBtn');

			setTimeout(function () {
				if ( $(':focus').length>0 && $toolWrap.find(":focus").length == 0 ) {
					//フォーカス移動後、パネル中にフォーカスなし
					if ($toolBtn.hasClass("open")) {
						pALLClose();
					}
				}
			}, 30);
		});
	}

}

//header Fixed
function tHeadFixed(){
	var $tMenu=$("#pageHead"),prevew=$('#ss-preview').length==1?true:false;
	if (chk_spMode()) {
		if(prevew&&$(window).scrollTop() > $('#ss-preview').height()+50){
			$tMenu.addClass("fixed");			
		}else{
			$tMenu.removeClass("fixed");
		}
		$('#contents').css('margin-top','');
	} else {
		if($(window).scrollTop() > 80){
			$tMenu.addClass("fixed");
		}else{
			$tMenu.removeClass("fixed");
		}
		if($('#contents').css('position')=='fixed'){
			$('#contents').css('margin-top',$tMenu.height());
		}else{
			$('#contents').css('margin-top','');
		}
	}
	
}
function tHeadInit(){
	tHeadFixed();
	$(window).on("resize scroll",tHeadFixed);
}

//記事-所属カテゴリによる部品差し替え(サイト内URLは/始まり)
function categoryInit(){
	//カテゴリからの移動リンク元
	if($('body#indexPage').length>0&&$('#category-list').length>0){
		var thisPath=location.pathname.replace('/kana/','/').replace(/\/index.html$/,'/').replace(/([^\/])$/,'$1/');
		$('.categoryList >.category-nodes section').each(function(){
			var c2=$(this).find('h2').attr('id');
			if(c2.length>0){
				var pram={cat:thisPath+c2+'/'};
				$(this).find('a:not(.node>a,[href^="#"])').each(function() {
					var url=$(this).attr('href');
					if(!url.match(/^#/)){
						$(this).attr('href',set_urlPram(url,pram));
					}
				});
			}
		});
		$('.categoryList >.category-pages').each(function(){
			var pram={cat:thisPath};
			$(this).find('a:not(.node>a,[href^="#"])').each(function() {
				var url=$(this).attr('href');
				if(!url.match(/^#/)){
					$(this).attr('href',set_urlPram(url,pram));
				}
			});
		});	
	}
	//カテゴリからの移動後
	if($('body#contentPage').length>0){
		var cat = get_urlPram(location.href,'cat');
		if(cat&&cat.length>0){
			$.ajax({'url':cat,dataType:'html',
				success: function(data){
					var $cPage=$(data);
					//サイド
					var cNav=$('#category-list', $cPage).prop('outerHTML');
					if(cNav.length>0){
						$('#side .navigation').remove();
						$('#side').prepend(cNav);
						var sub =$('.categoryList >.category-pages>ul', $cPage).html();
						if(sub.length>0){
							if($("#side .navigation .current").length==0){
								chkM2($('<a href="'+cat.replace('/kana/','/')+'"/>').prop('href'));
							}
							var $current=$("#side .navigation .current");
							if($current.length>0){
								$current.append('<ul>'+sub+'</ul>');
								var chkURL=location.href.replace('/kana/','/').replace(/[\#\?].*$/, '');
								var pram={cat:cat};
								$current.find(">ul> li> a").each(function(){
									if (chkURL == $(this).prop("href").replace(/\/index.html$/, '/').replace(/[\#\?].*$/, '')) {
										$(this).parent().addClass("current");
									}
									$(this).attr('href',set_urlPram($(this).attr('href'),pram));
								});
							}
						}
					}
					var c = cat.replace($('#pageHead .logo a').attr('href'),'/').replace(/^\/(kana\/)?(.+)\/$/,'$2').split('/');
					$("#menu .current").removeClass('current');
					while(c.length>0){
						chkM1($('<a href="/'+c.join('/')+'/"/>').prop('href'));
						$('#contentHead').addClass('cat-'+c.pop());
					}
					//パンくず
					if( $('.crumbs a[href="'+cat+'"]').length==0){
						var $crumb=$('.crumbs .crumb:first', $cPage);
						if($crumb.find('.page').length>1){
							$crumb.find('.page:last').wrapInner('<a href="'+cat+'"/>');
							$crumb.append($('.crumbs span').slice(-2).clone()).appendTo('.crumbs');
						}
					}
					//ふりがな対策
					var kanaFlg =$('#ss-kana a').hasClass('on');
					var kEvnt=$('#ss-kana a').attr('onclick');
					var kCat=cat;
					if(kanaFlg){
						var regPre=/^(\/\.s\d+\/preview)\//;
						if(kCat.match(regPre)){
							kCat=kCat.replace(regPre,'$1/kana/');	
						}else{
							kCat=kCat.replace(/^\//,'/kana/');
						}
					}else{
						kCat=kCat.replace('/kana/','/');
					}
					kEvnt=kEvnt.replace("';","?cat="+kCat+"';");
					$('#ss-kana a').attr('onclick',kEvnt);
				}
			});
		}
	}
	
}

/*===============main===============*/
$(document).ready(function() {
	init(false); //設定値読み込み/初期化
	f_tools();
	//カスタム検索ロゴ
	$.getScript("https://www.google.com/coop/cse/brand?form=cse-search-box&lang=ja");

	categoryInit();
	contentInit();
	menuInit();
	tHeadInit();
	
	//メールフォーム キーボード操作による送信
	$('.inquiry-form input[type="submit"]').on('keydown', function (ev) {
		if(ev.keyCode==13){/*Enter*/
			$(this).trigger('click');
		}
	});
});
