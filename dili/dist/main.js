!function(e){function a(n){if(i[n])return i[n].exports;var t=i[n]={exports:{},id:n,loaded:!1};return e[n].call(t.exports,t,t.exports,a),t.loaded=!0,t.exports}var i={};return a.m=e,a.c=i,a.p="./dist/",a(0)}([function(e,a,i){var n=i(1).up;$(function(){function e(){var e,a=document.createElement("surface"),i={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(e in i)if(void 0!==a.style[e])return i[e]}function a(){var e,a=document.createElement("surface"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in i)if(void 0!==a.style[e])return i[e]}function i(e,i,n){var s=a();f++,s&&$(".page_"+n+" ."+e.classStr)[0].addEventListener(s,function(){b++,t(),$(".page_"+n+" ."+i.classStr).css("transition-duration",i.time).addClass(i.classStr+"-transition"),$(".page_"+n+" ."+e.classStr)[0].removeEventListener(s,arguments.callee,!1)})}function t(){if(f===b){f=0,b=1,v=!0;var e=h.pageNow;e>1?(s(e-1),s(e+1)):s(e+1)}}function s(e){var a=h["page"+e];for(var i in a)if("lineTransition"==i)for(var n=a[i],t=0;t<=n.length-1;t++){var s=n[t];$(".page_"+e+" ."+s.classStr).removeClass(s.classStr+"-transition").css({"animation-duration":"inherit","transition-duration":"inherit"})}else{var s=a[i];if($(".page_"+e+" ."+s.classStr).removeClass(s.animationName).removeClass(s.animationName+"-transition").css({"animation-duration":"inherit","transition-duration":"inherit"}),"bgAnimation"==i){var o=$(".page_"+e+" ."+s.classStr);o.removeClass("animated");for(var g=0;g<h.bgAnimationArr.length;g++)o.removeClass(h.bgAnimationArr[g])}"sanluoTransition"==i&&($(".page_"+e+" .lvye").removeAttr("style").removeClass("lvye-transition"),$(".new-page .sanluo").removeClass("fade-out Zindex").removeAttr("style"),$(".new-page .logo").removeClass("fade-in").removeAttr("style"),$(".new-page .title1").removeClass("fade-in").removeAttr("style"),$(".new-page .title1").show(),$(".new-page .title2").removeClass("fade-in").removeAttr("style"),$(".new-page .new-page-bg").removeClass("fade-in").removeAttr("style"),$(".new-page .btn-content").removeClass("Zindex"),$(".new-page .btn1").removeClass("fade-in").removeAttr("style")),$(".page_"+e+" .shuye").removeClass("fade-in").removeClass(s.classStr+"-transition").css({"animation-duration":"inherit",opacity:"0"})}$(".page_"+e+" .arrow-content").removeClass("arrow-content-transition").css({"animation-duration":"inherit","transition-duration":"inherit"}),h.mySwiper&&h.mySwiper.destroy(!1),$(".layer-content").hide(),$(".page_"+e+" .shuye .lvye-img").removeClass("scale-enlarge").css({"animation-duration":"inherit"}),7==e&&$(".page_7 .guding-img").removeAttr("style"),8==e&&($(".page_8 .page-content-bg").removeClass("fade-in"),$(".page_8 .bg2").removeClass("fade-in"),$(".page_8 .logo").removeClass("fade-out"),$(".page_8 .lv-logo-img").removeClass("fade-in lv-logo-img-transition"))}function o(a,i,n,s){var o=e();f++,o&&$(a)[0].addEventListener(o,function(){"bgAnimation"==n?setTimeout(function(){b++,t();var e=h.bgAnimationArr[Math.floor(Math.random()*h.bgAnimationArr.length)]+" animated ";$(a)&&$(a).next().length>0&&$(a).next().css("animation-duration",i.animationTime).addClass(e)},3e3):(b++,t(),$(a)&&$(a).next().length>0&&$(a).next().css("animation-duration",i.animationTime).addClass(i.animationName)),$(a)[0].removeEventListener(o,arguments.callee,!1)})}function g(){$(".music-oper").on("click",function(e){var a=document.getElementById("audio-cls");null!==a&&(a.paused?(a.play(),$(this).removeClass("suspend")):(a.pause(),$(this).addClass("suspend")))}),$("body .new-page").on("click",".close-img",function(e){h.mySwiper.destroy(!1),$(".layer-content").hide()}),$(".close-btn").on("click",function(e){e.stopPropagation(),$(".music-oper").show(),$(".video-content").hide();var a=document.getElementById("video");a.pause()});var e=window.innerHeight,a=window.innerWidth,i=a<e?a:e,n=a<e?e:a,t=720*i/1280;$(".video-content").css({height:t,top:n/2-t/2}),$("body .new-page").on("click",".play-video",function(e){var a=document.getElementById("video"),i=document.getElementById("audio-cls");null!==i&&($(".music-oper").hide().addClass("suspend"),i.pause()),$(".video-content").show(),a.play(),a.webkitRequestFullScreen&&a.webkitRequestFullScreen(),a.mozRequestFullScreen&&a.mozRequestFullScreen(),a.requestFullscreen&&a.requestFullscreen()}),$("body .new-page").on("click",".btn",function(e){e.stopPropagation();var a=$(this).attr("data-type");$(".layer-content .text").text(h.layerData[a].text);for(var i=h.layerData[a].imgs,n="",t=0;t<i.length;t++)n+="<div class='swiper-slide'><img src = '"+i[t]+"' /></div>";$(".layer-content .swiper-wrapper").html(n),$(".layer-content").show(),h.mySwiper=new Swiper(".swiper-container",{loop:!0,effect:"fade",centeredSlides:!0,autoplay:2e3,autoplayDisableOnInteraction:!1})})}function r(){var e=document.getElementById("audio-cls"),a=function(){e.paused&&e.play(),document.removeEventListener("touchstart",a,!1)};a(),document.addEventListener("WeixinJSBridgeReady",function(){a()},!1),document.addEventListener("YixinJSBridgeReady",function(){a()},!1),document.addEventListener("touchstart",a,!1)}function m(e){var a=h["page"+e].lineTransition;$(".page_"+e+" ."+a[0].classStr).css("transition-duration",a[0].time).addClass(a[0].classStr+"-transition");for(var n=0;n<a.length-1;n++)i(a[n],a[n+1],e)}function l(){c()}function p(){var i=e(),n=(a(),h.pageNow);if(n>=2&&n<=7){var t=$(".page_"+n+" .bg-content .bg");t.length<4?i&&$(".page_"+n+" .en-img").length>0&&$(".page_"+n+" .en-img")[0].addEventListener(i,function(){$(".page_"+n+" .arrow-content").css("transition-duration","1s").addClass("arrow-content-transition"),this.removeEventListener(i,arguments.callee,!1)}):i&&$(t[t.length-1])[0].addEventListener(i,function(){$(".page_"+n+" .arrow-content").css("transition-duration","1s").addClass("arrow-content-transition"),this.removeEventListener(i,arguments.callee,!1)})}if(7==n){var s=$(".page_"+n+" .btn-oper");i&&$(s[s.length-1])[0].addEventListener(i,function(){$(".page_"+n+" .arrow-content").css("transition-duration","1s").addClass("arrow-content-transition"),this.removeEventListener(i,arguments.callee,!1)})}8==n&&i&&$(".page_8 .logo-img")[0].addEventListener(i,function(){$(".page_"+h.pageNow+" .arrow-content").css("transition-duration","1s").addClass("arrow-content-transition"),this.removeEventListener(i,arguments.callee,!1)})}function c(){p(),f=0,b=1,v=!1;var i=h["page"+h.pageNow],n=a(),t=e();for(var s in i)switch(s){case"logoAnimation":var g=$(".page_"+h.pageNow+" .line"),r=i.logoAnimation,l=h.pageNow;n&&$(g[g.length-1])[0].addEventListener(n,function(){$(".page_"+l+" .logo").css("animation-duration",r.animationTime).addClass(r.animationName),this.removeEventListener(n,arguments.callee,!1)});break;case"bihuaAnimation":var l=h.pageNow;8==l?($(".page_"+l+" .page-content-bg").css("animation-duration","1s").addClass("fade-in"),t&&$(".page_"+l+" .page-content-bg")[0].addEventListener(t,function(){$(".page_"+l+" .shuye").css("animation-duration","0.2s").addClass("fade-in"),this.removeEventListener(t,arguments.callee,!1)}),t&&$(".page_"+l+" .shuye")[0].addEventListener(t,function(){$($(".page_"+h.pageNow+" ."+i.bihuaAnimation.classStr)[0]).css("animation-duration",i.bihuaAnimation.animationTime).addClass(i.bihuaAnimation.animationName),$(".page_"+h.pageNow+" ."+i.bihuaAnimation.classStr).each(function(){o(this,i.bihuaAnimation),this.removeEventListener(t,arguments.callee,!1)})})):($($(".page_"+h.pageNow+" ."+i.bihuaAnimation.classStr)[0]).css("animation-duration",i.bihuaAnimation.animationTime).addClass(i.bihuaAnimation.animationName),$(".page_"+h.pageNow+" ."+i.bihuaAnimation.classStr).each(function(){o(this,i.bihuaAnimation)}));break;case"titleAnimation":var l=h.pageNow;if(l<=6&&l>1||8==l){var c=$(".page_"+l+" ."+i.bihuaAnimation.classStr);t&&$(c[c.length-1])[0].addEventListener(t,function(){$($(".page_"+l+" ."+i.titleAnimation.classStr)[0]).css("animation-duration",i.titleAnimation.animationTime).addClass(i.titleAnimation.animationName),$(".page_"+l+" ."+i.titleAnimation.classStr).each(function(){o(this,i.titleAnimation,"titleAnimation",l)}),this.removeEventListener(t,arguments.callee,!1)})}7==l&&($($(".page_"+l+" ."+i.titleAnimation.classStr)[0]).css("animation-duration",i.titleAnimation.animationTime).addClass(i.titleAnimation.animationName),$(".page_"+l+" ."+i.titleAnimation.classStr).each(function(){o(this,i.titleAnimation,"titleAnimation",l)}));break;case"bgAnimation":var l=h.pageNow;setTimeout(function(){var e=h.bgAnimationArr[Math.floor(Math.random()*h.bgAnimationArr.length)]+" animated ";$($(".page_"+l+" ."+i.bgAnimation.classStr)[1]).css("animation-duration",i.bgAnimation.animationTime).addClass(e)},3e3),$(".page_"+l+" ."+i.bgAnimation.classStr).each(function(){o(this,i.bgAnimation,"bgAnimation",l)});break;case"lineTransition":if(!i.bgAnimation){var l=h.pageNow;m(l);break}var d=$(".page_"+h.pageNow+" ."+i.titleAnimation.classStr);if(!d&&d.length<=0)break;var l=h.pageNow;t&&$(d[d.length-1])[0].addEventListener(t,function(){m(l),this.removeEventListener(t,arguments.callee,!1)})}}var d=!0,u=["images/en.png","images/logo.png","images/lvye.png","images/lvye1.png","images/shuye.png","images/wrong.png","images/everyday/1.png","images/everyday/10.png","images/everyday/11.png","images/everyday/2.png","images/everyday/3.png","images/everyday/4.png","images/everyday/5.png","images/everyday/6.png","images/everyday/7.png","images/everyday/8.png","images/everyday/9.png","images/page2/bg1.jpg","images/page2/bg2.jpg","images/page2/bg3.jpg","images/page2/title.png","images/page2/title2-1.png","images/page2/title2-2.png","images/page2/title2-3.png","images/page2/title3-1.png","images/page2/title3-2.png","images/page2/title3-3.png","images/page2/title3-4.png","images/page2/title3-5.png","images/page3/bg1.jpg","images/page3/bg2.jpg","images/page3/bg3.jpg","images/page3/bg4.jpg","images/page3/title1-1.png","images/page3/title1-2.png","images/page3/title1-3.png","images/page3/title2.png","images/page3/title3-1.png","images/page3/title3-2.png","images/page3/title3-3.png","images/page3/title3-4.png","images/page3/title3-5.png","images/page4/bg1.jpg","images/page4/bg2.jpg","images/page4/title1-1.png","images/page4/title1-2.png","images/page4/title2.png","images/page4/title3-1.png","images/page4/title3-2.png","images/page5/bg1.jpg","images/page5/bg2.jpg","images/page5/title1-1.png","images/page5/title1-2.png","images/page5/title1-3.png","images/page5/title2.png","images/page5/title3-1.png","images/page5/title3-2.png","images/page1/arrow.png","images/page1/bg.jpg","images/page1/play.png","images/page1/suspend.png","images/page1/title-en.png","images/page1/title1.png","images/page1/title2.png","images/page8/bg1.jpg","images/page8/bg2.jpg","images/page8/bg3.png","images/page8/dili.png","images/page8/lv-logo.png","images/page8/title1.png","images/page8/title2.png","images/page8/zhiwei.png","images/page7/bg1.jpg","images/page7/bg2.jpg","images/page7/bg3.jpg","images/page7/bg4.jpg","images/page7/bg5.jpg","images/page7/bg6.jpg","images/page7/btn.png","images/page7/close.png","images/page7/jiagong.png","images/page7/jiance.png","images/page7/lingshou.png","images/page7/liutong.png","images/page7/play-video.png","images/page7/title1-1.png","images/page7/title1-2.png","images/page7/title1.png","images/page7/title2-1.png","images/page7/title2-2.png","images/page7/title2-3.png","images/page7/title2.png","images/page7/title3-1.png","images/page7/title3-2.png","images/page7/title3-3.png","images/page7/title4-1.png","images/page7/title4-2.png","images/page7/title4-3.png","images/page7/title5-1.png","images/page7/title5-2.png","images/page7/zhongzhi.png","images/page6/bg2.jpg","images/page6/bg1.jpg","images/page6/title1-2.png","images/page6/title1-1.png","images/page6/title1-3.png","images/page6/title2-2.png","images/page6/title2-3.png","images/page6/title3-1.png","images/page6/title3-2.png","images/page6/title4.png","images/page6/title5-1.png","images/page6/title5-2.png","images/page6/title5-3.png","images/layer/lingshou/1.jpg","images/layer/lingshou/2.jpg","images/layer/jiagong/1.jpg","images/layer/jiagong/2.jpg","images/layer/liutong/1.jpg","images/layer/liutong/2.jpg","images/layer/liutong/3.jpg","images/layer/jiance/1.jpg","images/layer/jiance/2.jpg","images/layer/zhongzhi/1.jpg","images/layer/zhongzhi/2.jpg","images/layer/zhongzhi/3.jpg"];n.loading(u,function(){$("#num span").text("100%"),$(".loading-content .line").css("width","100%"),setTimeout(function(){d=!1,$(".loading-content").hide(),$(".content").show(),setTimeout(function(){m(h.pageNow),w.bindTouchEvent()},200)},300)},function(e){$("#num span").text(e+"%"),$(".loading-content .line").css("width",e+"%")});var h={page7Type:!1,page8Type:!1,loadingTimeer:null,currentPosition:0,pageNow:1,points:document.querySelectorAll(".page"),page1:{lineTransition:[{classStr:"title1",time:"2s"},{classStr:"title2",time:"2s"},{classStr:"top-left-line",time:"0.2s"},{classStr:"left-line",time:"0.8s"},{classStr:"bottom-left-line",time:"0.4s"},{classStr:"bottom--right-line",addClassStr:"right-line",time:"0.4s"},{classStr:"right-line",time:"0.8s"},{classStr:"top-right-line",time:"0.3s"},{classStr:"title-en",time:"1s"},{classStr:"arrow-content",time:"1s"}]},page2:{bgAnimation:{classStr:"bg",animationName:"slide-in-right",animationTime:"0.5s"},bihuaAnimation:{classStr:"bihua",animationName:"fade-in",animationTime:"0.1s"},titleAnimation:{classStr:"label",animationName:"fade-in",animationTime:"1s"},lineTransition:[{classStr:"left-line",time:"0.6s"},{classStr:"bottom-line",time:"1.2s"},{classStr:"right-line",time:"0.8s"},{classStr:"top-line",time:"1s"}],logoAnimation:{classStr:"logo",animationName:"fade-in",animationTime:"0.5s"}},page7:{bgAnimation:{classStr:"bg",animationName:"slide-in-right",animationTime:"0.5s"},titleAnimation:{classStr:"label",animationName:"fade-in",animationTime:"0.6s"},titleOutAnimation:{classStr:"page-content",animationName:"fade-out",animationTime:"0.6s"},sanluoTransition:{classStr:"lvye",animationTime:"1.5s"},lineTransition:[{classStr:"line",time:"0.6s"}],btnAnimation:{classStr:"btn-oper",animationName:"fade-in",animationTime:"0.8s"}},shuyeOut:{classStr:"shuye",showClassStr:"lvye",animationName:"scale-enlarge",animationTime:"1.5s"},layerData:{zhongzhi:{imgs:["images/layer/zhongzhi/1.jpg","images/layer/zhongzhi/2.jpg","images/layer/zhongzhi/3.jpg"],text:"地利集团运营的种植育苗基地为位于贵州大方，种苗温室使用面积超过32000平方米，迄今为止已经免费为当地农户提供优质种苗超过1300万株。引入以色列农业种植专家团队，组建并培育专业种苗技术人员，使种植蔬菜技术趋于专业化、规范化。"},liutong:{imgs:["images/layer/liutong/1.jpg","images/layer/liutong/2.jpg","images/layer/liutong/3.jpg"],text:"地利集团在东北、华东、西南地区拥有18家农副产品物流园，分别位于哈尔滨、长春、沈阳、齐齐哈尔、牡丹江、寿光、杭州、成都、贵阳等核心城市，并运营30多个各类型功能仓储中心，年交易额近3000亿元。"},lingshou:{imgs:["images/layer/lingshou/1.jpg","images/layer/lingshou/2.jpg"],text:"地利生鲜是一家全国性的专业生鲜零售连锁企业，目前在东北、华北、西南地区拥有近500家终端门店，总经营面积超过25万平方米，是东北地区规模最大的社区生鲜连锁超市品牌。"},jiagong:{imgs:["images/layer/jiagong/1.jpg","images/layer/jiagong/2.jpg"],text:"地利集团拥有十大加工厂，21条生产线，占地面积超8000平方米，平均每月生产250万公斤自产食品，包括中式主食、西式糕点、熟食以及其他粗加工农产品，提供给地利生鲜位全国的门店。"},jiance:{imgs:["images/layer/jiance/1.jpg","images/layer/jiance/2.jpg"],text:"地利集团在每个大型农副产品物流园设置检验检测中心，并在零售渠道引入地区综合能力最强的第三方专业检测机构，在食品溯源管理等方面展开全面合作，对所有食品在存储、加工、物流环节全品类全时段全流程进行安全检测。"}},mySwiper:null,page8:{bgAnimation:{classStr:"bg",animationName:"slide-in-right",animationTime:"0.5s"},bihuaAnimation:{classStr:"bihua",animationName:"fade-in",animationTime:"0.2s"},titleAnimation:{classStr:"label",animationName:"fade-in",animationTime:"1s"},lineTransition:[{classStr:"left-line",time:"0.6s"},{classStr:"bottom-line",time:"1.2s"},{classStr:"right-line",time:"0.8s"},{classStr:"top-line",time:"1s"},{classStr:"arrow-content",time:"1s"}],logoAnimation:{classStr:"logo",animationName:"fade-in",animationTime:"0.5s"}},bgAnimationArr:["bounceInDown","bounceInLeft","bounceInRight","bounceInUp","fadeIn","fadeInDown","flip","lightSpeedIn","rotateIn","rotateInDownLeft","rotateInDownRight","zoomIn","zoomInLeft","zoomInRight","rollIn"]};h.page3=h.page2,h.page4=h.page2,h.page5=h.page2,h.page6=h.page2,window.resetAnimationCss=s,g(),r();var v=!1,f=0,b=0;window.parms=h;var y=!0,w={transform:function(e){this.style.webkitTransform="translate3d(0, "+e+"px,  0)",h.currentPosition=e,y=!0},bindTouchEvent:function(){var i,n=document.querySelector(".content"),t=window.innerHeight,s=t*(h.points.length-1),g="top",r=!1;n.addEventListener("touchstart",function(e){if(1===e.touches.length||y){var a=e.touches[0];i=a.pageY,n.style.webkitTransition="",r=!1,y=!1}}.bind(this),!1),n.addEventListener("touchmove",function(e){if(e.preventDefault(),!y){var a=e.touches[0],n=a.pageY-i;r=!0,g=n>0?"bottom":"top"}}.bind(this),!1),n.addEventListener("touchend",function(i){if(d)return!1;var m=0;if(r&&!y){var p=e(),c=a();if(0==h.currentPosition&&"bottom"===g)return y=!0,!1;if(!v)return!1;if(7==h.pageNow&&"top"===g&&!h.page7Type)return $(".page_7 .guding-img").show(),$(".page_7 .arrow-content").removeClass("arrow-content-transition").css({"animation-duration":"inherit","transition-duration":"inherit"}),$(".page_7").find("."+h.page7.titleOutAnimation.classStr).css("animation-duration",h.page7.titleOutAnimation.animationTime).addClass(h.page7.titleOutAnimation.animationName),h.page7Type=!0,p&&$(".page_"+h.pageNow+" ."+h.page7.titleOutAnimation.classStr)[0].addEventListener(p,function(){$(".new-page .sanluo").addClass("Zindex"),$(".new-page .sanluo .lvye").addClass("lvye-transition"),this.removeEventListener(p,arguments.callee,!1)}),c&&$(".page_7 .lvye5")[0].addEventListener(c,function(){$(".new-page .sanluo").addClass("fade-out").css("animation-duration","1s"),$(".new-page .logo").addClass("fade-in").css("animation-duration","1s"),$(".new-page .title1").addClass("fade-in").css("animation-duration","1s"),setTimeout(function(){$(".new-page .title1").hide(),$(".new-page .title2").addClass("fade-in").css("animation-duration","1s"),$(".new-page .new-page-bg").addClass("fade-in").css("animation-duration","1s"),$(".new-page .btn-content").addClass("Zindex"),$(".new-page .btn1").addClass("fade-in").css("animation-duration",h.page7.btnAnimation.animationTime),$(".page_7 ."+h.page7.btnAnimation.classStr).each(function(){o(this,h.page7.btnAnimation,"btnAnimation",h.pageNow)})},2e3),this.removeEventListener(c,arguments.callee,!1)}),!1;if(8==h.pageNow&&"top"===g&&!h.page8Type)return $(".page_8 .layer-content").hide(),$(".page_8 .arrow-content").removeClass("arrow-content-transition").css({"animation-duration":"inherit","transition-duration":"inherit"}),$(".page_8 .logo-img").removeClass("fade-in").addClass("fade-out").css("animation-duration","1s"),setTimeout(function(){$(".page_8 .lv-logo-img").addClass("fade-in").addClass("lv-logo-img-transition").css("animation-duration","1s"),$(".page_8 .bg2").addClass("fade-in").css("animation-duration","2s")},1100),!1;if(-h.currentPosition==s&&"top"===g)return y=!0,!1;if(h.pageNow<=6&&h.pageNow>1&&"top"===g){var u=h.pageNow;$($(".page_"+u+" ."+h.shuyeOut.classStr)[0]).css("opacity","1"),$($(".page_"+u+" ."+h.shuyeOut.classStr)[0]).find(".lvye-img").css("animation-duration",h.shuyeOut.animationTime).addClass(h.shuyeOut.animationName);var f=this;p&&$(".page_"+u+" ."+h.shuyeOut.classStr+" .lvye-img")[0].addEventListener(p,function(){$(".page_"+u+" ."+h.shuyeOut.classStr+" .lvye-img")[0]&&$(".page_"+u+" ."+h.shuyeOut.classStr+" .lvye-img")[0].removeEventListener(p,arguments.callee,!1),setTimeout(function(){n.style.webkitTransition="0.3s ease -webkit-transform",m="top"===g?h.currentPosition-t:h.currentPosition+t,h.pageNow=Math.round(Math.abs(m)/t)+1,f.transform.call(n,m),l()},1100)})}else 7==h.pageNow&&"bottom"===g&&(h.page7Type=!1),8==h.pageNow&&"bottom"===g&&(h.page7Type=!1,h.page8Type=!1),n.style.webkitTransition="0.3s ease -webkit-transform",m="top"===g?h.currentPosition-t:h.currentPosition+t,h.pageNow=Math.round(Math.abs(m)/t)+1,this.transform.call(n,m),l()}}.bind(this),!1)}}})},function(e,a){var i={},n={};i.up=n,n.loading=function(e,a,i){var n=0,t=e,s=t.length,o=function(){for(var e=0;e<s;e++){var o=new Image;o.error=o.onload=function(){if(n++,$(this).remove(),n===s)a&&a();else{var e=parseInt(100*(n/s).toFixed(2));i&&i(e)}},o.src=t[e]}};o()},n.runAnimateList=function(e){var a=e.baseTime||0,i=e.list,n=i.length,t=0,s=function(){var e=i[t].animateTime+a;return i[t].callback&&i[t].callback(i[t].node),t>=n-1?void clearTimeout(s.timer):(t++,void(s.timer=setTimeout(arguments.callee,e)))};s()};var t=window.innerHeight,s=window.innerWidth;n.setBackgroundSize=function(e){$.each(e,function(e,a){var i=a.node,n=a.imgW,o=a.imgH,g=o/n,r=t/s;g>r?i.css({backgroundSize:s+"px auto"}):i.css({backgroundSize:"auto "+t+"px"})})},n.setRatio=function(e,a){var i=a/e,n=t/s;return i>n?s/e:t/a},n.setPosition=function(e,a){for(var i in e){var n=e[i],t={width:n.w*a,height:n.h*a,backgroundSize:n.w*a},s={left:n.l,top:n.t,right:n.r,bottom:n.b};$.each(s,function(e,i){void 0!==i&&(t[e]=i*a)}),$("."+i).css(t)}},n.swipe=function(e,a){var i=0,n=0,t=0,s=0,o=320;document.addEventListener("touchstart",function(e){i=e.touches[0].pageX,n=e.touches[0].pageY}),document.addEventListener("touchmove",function(e){e.preventDefault()}),document.addEventListener("touchend",function(g){t=g.changedTouches[0].pageX,s=g.changedTouches[0].pageY;var r=t-i,m=s-n;if(!(Math.abs(r)<.3*o&&Math.abs(m)<.3*o))switch(e){case"down":Math.abs(r)<Math.abs(m)&&m>0&&a&&a(g);break;case"up":Math.abs(r)<Math.abs(m)&&m<=0&&a&&a(g);break;case"right":Math.abs(r)>=Math.abs(m)&&r>0&&a&&a(g);break;case"left":Math.abs(r)>=Math.abs(m)&&r<=0&&a&&a(g)}})},e.exports=i}]);
//# sourceMappingURL=main.js.map