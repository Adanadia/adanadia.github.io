!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["mip-sjh-text"]=t():(n.groot=n.groot||{},n.groot["mip-sjh-text"]=t())}(this,(function(){return function(n){var t={};function o(f){if(t[f])return t[f].exports;var e=t[f]={i:f,l:!1,exports:{}};return n[f].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=n,o.c=t,o.d=function(n,t,f){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:f})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var f=Object.create(null);if(o.r(f),Object.defineProperty(f,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var e in n)o.d(f,e,function(t){return n[t]}.bind(null,e));return f},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="/",o(o.s=3921)}({0:function(n,t,o){"use strict";function f(n,t,o,f,e,a,c,s){var i,r="function"==typeof n?n.options:n;if(t&&(r.render=t,r.staticRenderFns=o,r._compiled=!0),f&&(r.functional=!0),a&&(r._scopeId="data-v-"+a),c?(i=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),e&&e.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(c)},r._ssrRegister=i):e&&(i=s?function(){e.call(this,(r.functional?this.parent:this).$root.$options.shadowRoot)}:e),i)if(r.functional){r._injectStyles=i;var l=r.render;r.render=function(n,t){return i.call(t),l(n,t)}}else{var u=r.beforeCreate;r.beforeCreate=u?[].concat(u,i):[i]}return{exports:n,options:r}}o.d(t,"a",(function(){return f}))},1220:function(n,t,o){var f=o(5),e=o(3923);"string"==typeof(e=e.__esModule?e.default:e)&&(e=[[n.i,e,""]]);var a={insert:"head",singleton:!1},c=(f(e,a),e.locals?e.locals:{});n.exports=c},125:function(n,t,o){"use strict";t.a={mounted:function(){var n=this;this.$loki.clientPrerender&&this.$loki.clientPrerender.pageActivePromise().then((function(t){("function"==typeof n.$pageActive?n.$pageActive:function(){})(t)}))}}},3921:function(n,t,o){n.exports=o(7710)},3922:function(n,t,o){"use strict";o(1220)},3923:function(n,t,o){(t=o(4)(!1)).push([n.i,".mip-sjh-text[data-v-08f4bea6] ul li {\n  list-style: unset;\n}\n",""]),n.exports=t},3924:function(n,t,o){var f=o(5),e=o(3925);"string"==typeof(e=e.__esModule?e.default:e)&&(e=[[n.i,e,""]]);var a={insert:"head",singleton:!1},c=(f(e,a),e.locals?e.locals:{});n.exports=c},3925:function(n,t,o){(t=o(4)(!1)).push([n.i,'/* 思源黑体纤细 */\n@font-face {\n    font-family: "SourceHanSansCN-ExtraLight";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v2/SourceHanSansCN-ExtraLight.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font/SourceHanSansCN-ExtraLight.otf);\n    font-display: swap;\n}\n\n/* 思源黑体极细 */\n@font-face {\n    font-family: "SourceHanSansCN-Light";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v2/SourceHanSansCN-Light.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font/SourceHanSansCN-Light.otf);\n    font-display: swap;\n}\n\n/* 思源黑体细体 */\n@font-face {\n    font-family: "SourceHanSansCN-Normal";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v2/SourceHanSansCN-Normal.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font/SourceHanSansCN-Normal.otf);\n    font-display: swap;\n}\n\n/* 思源黑体常规 */\n@font-face {\n    font-family: "SourceHanSansCN-Regular";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v2/SourceHanSansCN-Regular.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font/SourceHanSansCN-Regular.otf);\n    font-display: swap;\n}\n\n/* 思源黑体中黑 */\n@font-face {\n    font-family: "SourceHanSansCN-Medium";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v2/SourceHanSansCN-Medium.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font/SourceHanSansCN-Medium.otf);\n    font-display: swap;\n}\n\n/* 思源黑体黑体 */\n@font-face {\n    font-family: "SourceHanSansCN-Bold";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v2/SourceHanSansCN-Bold.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font/SourceHanSansCN-Bold.otf);\n    font-display: swap;\n}\n\n/* 思源黑体粗体 */\n@font-face {\n    font-family: "SourceHanSansCN-Heavy";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v2/SourceHanSansCN-Heavy.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font/SourceHanSansCN-Heavy.otf);\n    font-display: swap;\n}\n\n/* 文泉驿正黑 暂时不改 */\n@font-face {\n    font-family: "WQY-ZH";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/WQY-ZH.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/WQY-ZH.woff);\n    font-display: swap;\n}\n\n/* 文泉驿等宽正黑 */\n@font-face {\n    font-family: "WQY-DKZH";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/WQY-DKZH.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/WQY-DKZH.woff);\n    font-display: swap;\n}\n\n/* 文泉驿点正正黑 */\n@font-face {\n    font-family: "WQY-DZZH";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/WQY-DZZH.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/WQY-DZZH.woff);\n    font-display: swap;\n}\n\n/* 庞门正道标题体 */\n@font-face {\n    font-family: "PMZDBTT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/PMZDBTT.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/PMZDBTT.woff);\n    font-display: swap;\n}\n\n/* 站酷高端黑 */\n@font-face {\n    font-family: "ZK-GDH";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/ZK-GDH.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/ZK-GDH.woff);\n    font-display: swap;\n}\n\n/* 站酷酷黑 */\n@font-face {\n    font-family: "ZK-KHT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/ZK-KHT.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/ZK-KHT.woff);\n    font-display: swap;\n}\n\n/* 站酷快乐体 */\n@font-face {\n    font-family: "ZK-KLT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/ZK-KLT.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/ZK-KLT.woff);\n    font-display: swap;\n}\n\n/* 站酷文艺体 */\n@font-face {\n    font-family: "ZK-WYT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/ZK-WYT.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/ZK-WYT.woff);\n    font-display: swap;\n}\n\n/* 站酷小薇logo体 */\n@font-face {\n    font-family: "ZK-XWLOGOT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/ZK-XWLOGOT.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/ZK-XWLOGOT.woff);\n    font-display: swap;\n}\n\n/* 站酷庆科黄油 */\n@font-face {\n    font-family: "ZK-QKHYT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/ZK-QKHYT.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/ZK-QKHYT.woff);\n    font-display: swap;\n}\n\n/* 装甲明朝体 */\n@font-face {\n    font-family: "SoukouMincho";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/SoukouMincho.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/SoukouMincho.woff);\n    font-display: swap;\n}\n\n/* 濑户字体 */\n@font-face {\n    font-family: "LH-ZT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/LH-ZT.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/LH-ZT.woff);\n    font-display: swap;\n}\n\n/* 书体坊颜体 */\n@font-face {\n    font-family: "STF-YT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/STF-YT.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/STF-YT.woff);\n    font-display: swap;\n}\n\n/* 杨任东竹石体 */\n@font-face {\n    font-family: "YRD-ZST";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/YRD-ZST.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/YRD-ZST.woff);\n    font-display: swap;\n}\n\n/* 方正榜书行简体 */\n@font-face {\n    font-family: "FZ-BSXJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZBangSXJW.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZBangSXJW.woff);\n    font-display: swap;\n}\n\n/* 方正报宋简体 */\n@font-face {\n    font-family: "FZ-BSJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZBSJW.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZBSJW.woff);\n    font-display: swap;\n}\n\n/* 方正彩云简体 */\n@font-face {\n    font-family: "FZ-CAIYJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZCYJW.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZCYJW.woff);\n    font-display: swap;\n}\n\n/* 方正超粗黑简体 */\n@font-face {\n    font-family: "FZ-CCHJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZCCHJW.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZCCHJW.woff);\n    font-display: swap;\n}\n\n/* 方正粗雅宋简体 */\n@font-face {\n    font-family: "FZ-CYSJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZCYSJW.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZCYSJW.woff);\n    font-display: swap;\n}\n\n/* 方正粗圆简体 */\n@font-face {\n    font-family: "FZ-CUYJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZY4JW.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZY4JW.woff);\n    font-display: swap;\n}\n\n/* 方正大标宋简体 */\n@font-face {\n    font-family: "FZ-DBSJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZDBSJW.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZDBSJW.woff);\n    font-display: swap;\n}\n\n/* 方正大黑简体 */\n@font-face {\n    font-family: "FZ-DHJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZDHTJW.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZDHTJW.woff);\n    font-display: swap;\n}\n\n/* 方正仿宋简体 */\n@font-face {\n    font-family: "FZ-FSJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZFSJW.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZFSJW.woff);\n    font-display: swap;\n}\n\n/* 方正黑体简体 */\n@font-face {\n    font-family: "FZ-HTJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZHTJW.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZHTJW.woff);\n    font-display: swap;\n}\n\n/* 方正琥珀简体 */\n@font-face {\n    font-family: "FZ-HPJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZHPJW.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZHPJW.woff);\n    font-display: swap;\n}\n\n/* 方正楷体简体 */\n@font-face {\n    font-family: "FZ-KTJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZKTJW.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZKTJW.woff);\n    font-display: swap;\n}\n\n/* 方正隶变简体 */\n@font-face {\n    font-family: "FZ-LBJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZLBJW.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZLBJW.woff);\n    font-display: swap;\n}\n\n/* 方正隶书简体 */\n@font-face {\n    font-family: "FZ-LSJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZLSJW.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZLSJW.woff);\n    font-display: swap;\n}\n\n/* 方正书宋简体 */\n@font-face {\n    font-family: "FZ-SSJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZSSJW.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZSSJW.woff);\n    font-display: swap;\n}\n\n/* 方正宋黑简体 */\n@font-face {\n    font-family: "FZ-SHJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZSHJW.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZSHJW.woff);\n    font-display: swap;\n}\n\n/* 方正宋三简体 */\n@font-face {\n    font-family: "FZ-SONGSJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZS3JW.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZS3JW.woff);\n    font-display: swap;\n}\n\n/* 方正宋一简体 */\n@font-face {\n    font-family: "FZ-SYJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZSYJW.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZSYJW.woff);\n    font-display: swap;\n}\n\n/* 方正魏碑简体 */\n@font-face {\n    font-family: "FZ-WBJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZWBJW.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZWBJW.woff);\n    font-display: swap;\n}\n\n/* 方正细等线简体 */\n@font-face {\n    font-family: "FZ-XDXJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZXDXJW.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZXDXJW.woff);\n    font-display: swap;\n}\n\n/* 方正细黑一简体 */\n@font-face {\n    font-family: "FZ-XHYJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZXH1JW.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZXH1JW.woff);\n    font-display: swap;\n}\n\n/* 方正细圆简体 */\n@font-face {\n    font-family: "FZ-XYJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZY1JW.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZY1JW.woff);\n    font-display: swap;\n}\n\n/* 方正小标宋简体 */\n@font-face {\n    font-family: "FZ-XBSJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZXBSJW.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZXBSJW.woff);\n    font-display: swap;\n}\n\n/* 方正行楷简体 */\n@font-face {\n    font-family: "FZ-XKJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZXKJW.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZXKJW.woff);\n    font-display: swap;\n}\n\n/* 方正姚体简体 */\n@font-face {\n    font-family: "FZ-YTJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZYTJW.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZYTJW.woff);\n    font-display: swap;\n}\n\n/* 方正中等线简体 */\n@font-face {\n    font-family: "FZ-ZDXJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZZDXJW.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZZDXJW.woff);\n    font-display: swap;\n}\n\n/* 方正准圆简体 */\n@font-face {\n    font-family: "FZ-ZYJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZY3JW.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZY3JW.woff);\n    font-display: swap;\n}\n\n/* 方正综艺简体 */\n@font-face {\n    font-family: "FZ-ZZJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZZYJW.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZZYJW.woff);\n    font-display: swap;\n}\n\n/* 普惠体极细 */\n@font-face {\n    font-family: "PuHuiTi-Light";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v2/PuHuiTi-Light.woff2), url(//jianzhan-fe.cdn.bcebos.com/font/PuHuiTi-Light.otf);\n    font-display: swap;\n}\n\n/* 普惠体常规 */\n@font-face {\n    font-family: "PuHuiTi-Regular";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v2/PuHuiTi-Regular.woff2), url(//jianzhan-fe.cdn.bcebos.com/font/PuHuiTi-Regular.otf);\n    font-display: swap;\n}\n\n/* 普惠体中黑 */\n@font-face {\n    font-family: "PuHuiTi-Medium";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v2/PuHuiTi-Medium.woff2), url(//jianzhan-fe.cdn.bcebos.com/font/PuHuiTi-Medium.otf);\n    font-display: swap;\n}\n\n/* 普惠体黑体 */\n@font-face {\n    font-family: "PuHuiTi-Bold";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v2/PuHuiTi-Bold.woff2), url(//jianzhan-fe.cdn.bcebos.com/font/PuHuiTi-Bold.otf);\n    font-display: swap;\n}\n\n/* 普惠体粗体 */\n@font-face {\n    font-family: "PuHuiTi-Heavy";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v2/PuHuiTi-Heavy.woff2), url(//jianzhan-fe.cdn.bcebos.com/font/PuHuiTi-Heavy.otf);\n    font-display: swap;\n}\n\n/* 方正超值简体 */\n@font-face {\n    font-family: "FZ-CZJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZ-CZJT.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZ-CZJT.woff);\n    font-display: swap;\n}\n\n/* 方正FW轻吟简体 */\n@font-face {\n    font-family: "FZ-FWQYJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZ-FWQYJT.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZ-FWQYJT.woff);\n    font-display: swap;\n}\n\n/* 方正颜宋简体_大 */\n@font-face {\n    font-family: "FZ-YSJTD";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZ-YSJTD.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZ-YSJTD.woff);\n    font-display: swap;\n}\n\n/* 方正毡笔黑简体 */\n@font-face {\n    font-family: "FZ-ZBHJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZ-ZBHJT.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZ-ZBHJT.woff);\n    font-display: swap;\n}\n\n/* 方正字迹-龙吟简体 */\n@font-face {\n    font-family: "FZZJ-LYJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZZJ-LYJT.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZZJ-LYJT.woff);\n    font-display: swap;\n}\n\n/* 方正字迹-心海凤简体 */\n@font-face {\n    font-family: "FZZJ-XHFJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZZJ-XHFJT.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZZJ-XHFJT.woff);\n    font-display: swap;\n}\n\n/* 方正字迹-心海龙简体 */\n@font-face {\n    font-family: "FZZJ-XHLJT";\n    src: url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZZJ-XHLJT.woff2), url(https://jianzhan-fe.cdn.bcebos.com/font-v1/FZZJ-XHLJT.woff);\n    font-display: swap;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font-weight: 400;\n}\n',""]),n.exports=t},4:function(n,t,o){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var o=function(n,t){var o=n[1]||"",f=n[3];if(!f)return o;if(t&&"function"==typeof btoa){var e=(c=f,s=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(i," */")),a=f.sources.map((function(n){return"/*# sourceURL=".concat(f.sourceRoot||"").concat(n," */")}));return[o].concat(a).concat([e]).join("\n")}var c,s,i;return[o].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(n,o,f){"string"==typeof n&&(n=[[null,n,""]]);var e={};if(f)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(e[c]=!0)}for(var s=0;s<n.length;s++){var i=[].concat(n[s]);f&&e[i[0]]||(o&&(i[2]?i[2]="".concat(o," and ").concat(i[2]):i[2]=o),t.push(i))}},t}},48:function(n,t,o){"use strict";t.a={computed:{isSP:function(){var n=this.$loki.getData("serverPrerender")||{};return n&&n.isServerPrerender}}}},5:function(n,t,o){"use strict";var f,e=function(){return void 0===f&&(f=Boolean(window&&document&&document.all&&!window.atob)),f},a=function(){var n={};return function(t){if(void 0===n[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}n[t]=o}return n[t]}}(),c=[];function s(n){for(var t=-1,o=0;o<c.length;o++)if(c[o].identifier===n){t=o;break}return t}function i(n,t){for(var o={},f=[],e=0;e<n.length;e++){var a=n[e],i=t.base?a[0]+t.base:a[0],r=o[i]||0,l="".concat(i," ").concat(r);o[i]=r+1;var u=s(l),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(c[u].references++,c[u].updater(p)):c.push({identifier:l,updater:m(p,t),references:1}),f.push(l)}return f}function r(n){var t=document.createElement("style"),f=n.attributes||{};if(void 0===f.nonce){var e=o.nc;e&&(f.nonce=e)}if(Object.keys(f).forEach((function(n){t.setAttribute(n,f[n])})),"function"==typeof n.insert)n.insert(t);else{var c=a(n.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var l,u=(l=[],function(n,t){return l[n]=t,l.filter(Boolean).join("\n")});function p(n,t,o,f){var e=o?"":f.media?"@media ".concat(f.media," {").concat(f.css,"}"):f.css;if(n.styleSheet)n.styleSheet.cssText=u(t,e);else{var a=document.createTextNode(e),c=n.childNodes;c[t]&&n.removeChild(c[t]),c.length?n.insertBefore(a,c[t]):n.appendChild(a)}}function h(n,t,o){var f=o.css,e=o.media,a=o.sourceMap;e?n.setAttribute("media",e):n.removeAttribute("media"),a&&btoa&&(f+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */"));var c=window&&window.CSS&&window.CSS.supports&&window.CSS.supports("(--foo: red)");if(n.styleSheet&&c)n.styleSheet.cssText=f;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(f))}}var d=null,b=0;function m(n,t){var o,f,e;if(t.singleton){var a=b++;o=d||(d=r(t)),f=p.bind(null,o,a,!1),e=p.bind(null,o,a,!0)}else o=r(t),f=h.bind(null,o,t),e=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(o)};return f(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;f(n=t)}else e()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=e());var o=i(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var f=0;f<o.length;f++){var e=s(o[f]);c[e].references--}for(var a=i(n,t),r=0;r<o.length;r++){var l=s(o[r]);0===c[l].references&&(c[l].updater(),c.splice(l,1))}o=a}}}},7710:function(n,t,o){"use strict";o.r(t);var f=o(125),e=o(48),a=/(script|iframe|style|frame|meta|link|content)(\s*)\:(\s*)url(?!\s*=)/gi,c=/i|e/gi,s={i:"і",I:"І",e:"е",E:"Е"},i=function(n){return n.replace(a,(function(n){return n.replace(c,(function(n){return s[n]||n}))}))},r={name:"mip-sjh-text",mixins:[f.a,e.a],props:{properties:{type:Object,default:function(){return{}}}},mounted:function(){this.$emit("renderComplete")},computed:{showText:function(){return i("string"==typeof this.properties.text?this.properties.text:"")},customClass:function(){return this.properties.customClass||this.properties["custom-class"]},customStyle:function(){return this.properties.customStyle||this.properties["custom-style"]},customElement:function(){var n=(this.properties||{}).is;return(void 0===n?"":n)||"div"}},methods:{$pageActive:function(){this.isSP||o(3924)},handleClick:function(n){this.$emit("click",n)},touchStart:function(n){this.$emit("handleTouchStart",n)},touchEnd:function(n){this.$emit("handleTouchEnd",n)}}},l=(o(3922),o(0)),u=Object(l.a)(r,(function(){return(0,this._self._c)(this.customElement,{tag:"component",class:["mip-sjh-text",this.customClass],style:this.customStyle,domProps:{innerHTML:this._s(this.showText)},on:{touchstart:this.touchStart,touchend:this.touchEnd,click:this.handleClick}})}),[],!1,null,"08f4bea6",null);t.default=u.exports}})}));