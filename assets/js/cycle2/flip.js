/* Plugin for Cycle2; Copyright (c) 2012 M. Alsup; v20140128 */
(function(e){"use strict";function i(i){return{preInit:function(e){e.slides.css(n)},transition:function(t,n,s,o,r){var l=t,c=e(n),a=e(s),d=l.speed/2;i.call(a,-90),a.css({display:"block",visibility:"visible","background-position":"-90px",opacity:1}),c.css("background-position","0px"),c.animate({backgroundPosition:90},{step:i,duration:d,easing:l.easeOut||l.easing,complete:function(){t.API.updateView(!1,!0),a.animate({backgroundPosition:0},{step:i,duration:d,easing:l.easeIn||l.easing,complete:r})}})}}}function t(i){return function(t){var n=e(this);n.css({"-webkit-transform":"rotate"+i+"("+t+"deg)","-moz-transform":"rotate"+i+"("+t+"deg)","-ms-transform":"rotate"+i+"("+t+"deg)","-o-transform":"rotate"+i+"("+t+"deg)",transform:"rotate"+i+"("+t+"deg)"})}}var n,s=document.createElement("div").style,o=e.fn.cycle.transitions,r=void 0!==s.transform||void 0!==s.MozTransform||void 0!==s.webkitTransform||void 0!==s.oTransform||void 0!==s.msTransform;r&&void 0!==s.msTransform&&(s.msTransform="rotateY(0deg)",s.msTransform||(r=!1)),r?(o.flipHorz=i(t("Y")),o.flipVert=i(t("X")),n={"-webkit-backface-visibility":"hidden","-moz-backface-visibility":"hidden","-o-backface-visibility":"hidden","backface-visibility":"hidden"}):(o.flipHorz=o.scrollHorz,o.flipVert=o.scrollVert||o.scrollHorz)})(jQuery);/**
 * Created by designstudio_2 on 25/03/2014.
 */