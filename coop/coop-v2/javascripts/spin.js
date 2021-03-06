/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 * http://spin.js.org/
 *
 * Example:
    var opts = {
      lines: 12             // The number of lines to draw
    , length: 7             // The length of each line
    , width: 5              // The line thickness
    , radius: 10            // The radius of the inner circle
    , scale: 1.0            // Scales overall size of the spinner
    , corners: 1            // Roundness (0..1)
    , color: '#000'         // #rgb or #rrggbb
    , opacity: 1/4          // Opacity of the lines
    , rotate: 0             // Rotation offset
    , direction: 1          // 1: clockwise, -1: counterclockwise
    , speed: 1              // Rounds per second
    , trail: 100            // Afterglow percentage
    , fps: 20               // Frames per second when using setTimeout()
    , zIndex: 2e9           // Use a high z-index by default
    , className: 'spinner'  // CSS class to assign to the element
    , top: '50%'            // center vertically
    , left: '50%'           // center horizontally
    , shadow: false         // Whether to render a shadow
    , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
    , position: 'absolute'  // Element positioning
    }
    var target = document.getElementById('foo')
    var spinner = new Spinner(opts).spin(target)
 */
!function(t,e){"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Spinner=e()}(this,function(){"use strict";function t(t,e){var i,o=document.createElement(t||"div");for(i in e)o[i]=e[i];return o}function e(t){for(var e=1,i=arguments.length;i>e;e++)t.appendChild(arguments[e]);return t}function i(t,e,i,o){var n=["opacity",e,~~(100*t),i,o].join("-"),r=.01+i/o*100,s=Math.max(1-(1-t)/e*(100-r),t),a=c.substring(0,c.indexOf("Animation")).toLowerCase(),l=a&&"-"+a+"-"||"";return p[n]||(d.insertRule("@"+l+"keyframes "+n+"{0%{opacity:"+s+"}"+r+"%{opacity:"+t+"}"+(r+.01)+"%{opacity:1}"+(r+e)%100+"%{opacity:"+t+"}100%{opacity:"+s+"}}",d.cssRules.length),p[n]=1),n}function o(t,e){var i,o,n=t.style;if(e=e.charAt(0).toUpperCase()+e.slice(1),void 0!==n[e])return e;for(o=0;o<u.length;o++)if(i=u[o]+e,void 0!==n[i])return i}function n(t,e){for(var i in e)t.style[o(t,i)||i]=e[i];return t}function r(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)void 0===t[o]&&(t[o]=i[o])}return t}function s(t,e){return"string"==typeof t?t:t[e%t.length]}function a(t){this.opts=r(t||{},a.defaults,f)}function l(){function i(e,i){return t("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',i)}d.addRule(".spin-vml","behavior:url(#default#VML)"),a.prototype.lines=function(t,o){function r(){return n(i("group",{coordsize:d+" "+d,coordorigin:-c+" "+-c}),{width:d,height:d})}function a(t,a,l){e(p,e(n(r(),{rotation:360/o.lines*t+"deg",left:~~a}),e(n(i("roundrect",{arcsize:o.corners}),{width:c,height:o.scale*o.width,left:o.scale*o.radius,top:-o.scale*o.width>>1,filter:l}),i("fill",{color:s(o.color,t),opacity:o.opacity}),i("stroke",{opacity:0}))))}var l,c=o.scale*(o.length+o.width),d=2*o.scale*c,u=-(o.width+o.length)*o.scale*2+"px",p=n(r(),{position:"absolute",top:u,left:u});if(o.shadow)for(l=1;l<=o.lines;l++)a(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(l=1;l<=o.lines;l++)a(l);return e(t,p)},a.prototype.opacity=function(t,e,i,o){var n=t.firstChild;o=o.shadow&&o.lines||0,n&&e+o<n.childNodes.length&&(n=n.childNodes[e+o],n=n&&n.firstChild,n=n&&n.firstChild,n&&(n.opacity=i))}}var c,d,u=["webkit","Moz","ms","O"],p={},f={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",opacity:.25,rotate:0,direction:1,speed:1,trail:100,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:!1,hwaccel:!1,position:"absolute"};if(a.defaults={},r(a.prototype,{spin:function(e){this.stop();var i=this,o=i.opts,r=i.el=t(null,{className:o.className});if(n(r,{position:o.position,width:0,zIndex:o.zIndex,left:o.left,top:o.top}),e&&e.insertBefore(r,e.firstChild||null),r.setAttribute("role","progressbar"),i.lines(r,i.opts),!c){var s,a=0,l=(o.lines-1)*(1-o.direction)/2,d=o.fps,u=d/o.speed,p=(1-o.opacity)/(u*o.trail/100),f=u/o.lines;!function h(){a++;for(var t=0;t<o.lines;t++)s=Math.max(1-(a+(o.lines-t)*f)%u*p,o.opacity),i.opacity(r,t*o.direction+l,s,o);i.timeout=i.el&&setTimeout(h,~~(1e3/d))}()}return i},stop:function(){var t=this.el;return t&&(clearTimeout(this.timeout),t.parentNode&&t.parentNode.removeChild(t),this.el=void 0),this},lines:function(o,r){function a(e,i){return n(t(),{position:"absolute",width:r.scale*(r.length+r.width)+"px",height:r.scale*r.width+"px",background:e,boxShadow:i,transformOrigin:"left",transform:"rotate("+~~(360/r.lines*d+r.rotate)+"deg) translate("+r.scale*r.radius+"px,0)",borderRadius:(r.corners*r.scale*r.width>>1)+"px"})}for(var l,d=0,u=(r.lines-1)*(1-r.direction)/2;d<r.lines;d++)l=n(t(),{position:"absolute",top:1+~(r.scale*r.width/2)+"px",transform:r.hwaccel?"translate3d(0,0,0)":"",opacity:r.opacity,animation:c&&i(r.opacity,r.trail,u+d*r.direction,r.lines)+" "+1/r.speed+"s linear infinite"}),r.shadow&&e(l,n(a("#000","0 0 4px #000"),{top:"2px"})),e(o,e(l,a(s(r.color,d),"0 0 1px rgba(0,0,0,.1)")));return o},opacity:function(t,e,i){e<t.childNodes.length&&(t.childNodes[e].style.opacity=i)}}),"undefined"!=typeof document){d=function(){var i=t("style",{type:"text/css"});return e(document.getElementsByTagName("head")[0],i),i.sheet||i.styleSheet}();var h=n(t("group"),{behavior:"url(#default#VML)"});!o(h,"transform")&&h.adj?l():c=o(h,"animation")}return a});