(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1:function(t,n,e){"use strict";e.r(n),e.d(n,"isRTL",(function(){return o})),e.d(n,"isMobile",(function(){return a})),e.d(n,"isDarkMode",(function(){return i})),e.d(n,"formatDate",(function(){return r})),e.d(n,"getParameterByName",(function(){return c})),e.d(n,"adjustImageGallery",(function(){return u})),e.d(n,"managePostImages",(function(){return s})),e.d(n,"makeImagesZoomable",(function(){return l}));var o=function(){var t=document.querySelector("html");return["ar","he","fa"].includes(t.getAttribute("lang"))},a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"768px";return window.matchMedia("(max-width: ".concat(t,")")).matches},i=function(){var t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)");return t&&t.matches},r=function(t){return t?new Date(t).toLocaleDateString(document.documentElement.lang,{year:"numeric",month:"long",day:"numeric"}):""},c=function(t,n){n||(n=window.location.href),t=t.replace(/[\[\]]/g,"\\$&");var e=new RegExp("[?&]".concat(t,"(=([^&#]*)|&|#|$)")).exec(n);return e?e[2]?decodeURIComponent(e[2].replace(/\+/g," ")):"":null},u=function(){for(var t=document.querySelectorAll(".kg-gallery-image img"),n=0,e=t.length;n<e;n++){var o=t[n].closest(".kg-gallery-image"),a=t[n].attributes.width.value/t[n].attributes.height.value;o.style.flex="".concat(a," 1 0%")}},s=function(t){t(".js-post-content").find("img").each((function(){t(this).closest("figure").hasClass("kg-bookmark-card")||t(this).parent().is("a")||t(this).addClass("js-zoomable");var n=t(this).parent().find("figcaption");n?t(this).attr("alt",n.text()):t(this).attr("alt","")}))},l=function(t,n){n(".js-zoomable").on("opened",(function(){setTimeout((function(){var n=t(".medium-zoom-image--opened");n.length>1&&n.last().hide()}),10)}))}},12:function(t,n,e){e(1),e(23),e(28),e(30),e(32),e(34),e(36),t.exports=e(38)},23:function(t,n){},28:function(t,n){},30:function(t,n){},32:function(t,n){},34:function(t,n){},36:function(t,n){},38:function(t,n){}},[[12,0,1]]]);