// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e=eval;function r(e){return Math.abs(e)}var n=2220446049250313e-31;var t;t=function(){var r;try{e('"use strict"; (function* () {})'),r=!0}catch(e){r=!1}return r}()?function(e,t){var i,a,o,u,f;if(f={},arguments.length>1&&(f=t),i=f.tolerance||n,o=f.maxTerms||1e6,u=f.initialValue||0,!0==("function"==typeof e.next)){for(a of e)if(r(i*(u+=a))>=r(a)||0==--o)break}else do{u+=a=e()}while(r(i*u)<r(a)&&--o);return u}:function(e,t){var i,a,o,u,f;f={},arguments.length>1&&(f=t),i=f.tolerance||n,o=f.maxTerms||1e6,u=f.initialValue||0;do{u+=a=e()}while(r(i*u)<r(a)&&--o);return u};var i=t;function a(e){return e!=e}var o=Math.floor;var u=Number.POSITIVE_INFINITY,f=Number.NEGATIVE_INFINITY;function c(e){return e===u||e===f}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var l=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;var v="function"==typeof Symbol?Symbol:void 0,g="function"==typeof v?v.toStringTag:"";var y=s&&"symbol"==typeof Symbol.toStringTag?function(e){var r,n,t,i,a;if(null==e)return l.call(e);n=e[g],a=g,r=null!=(i=e)&&p.call(i,a);try{e[g]=void 0}catch(r){return l.call(e)}return t=l.call(e),r?e[g]=n:delete e[g],t}:function(e){return l.call(e)},d="function"==typeof Uint32Array;var h="function"==typeof Uint32Array?Uint32Array:null;var w,b="function"==typeof Uint32Array?Uint32Array:void 0;w=function(){var e,r,n;if("function"!=typeof h)return!1;try{r=new h(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,e=(d&&n instanceof Uint32Array||"[object Uint32Array]"===y(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?b:function(){throw new Error("not implemented")};var m=w,A="function"==typeof Float64Array;var N="function"==typeof Float64Array?Float64Array:null;var _,E="function"==typeof Float64Array?Float64Array:void 0;_=function(){var e,r,n;if("function"!=typeof N)return!1;try{r=new N([1,3.14,-3.14,NaN]),n=r,e=(A&&n instanceof Float64Array||"[object Float64Array]"===y(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?E:function(){throw new Error("not implemented")};var x=_,U="function"==typeof Uint8Array;var k="function"==typeof Uint8Array?Uint8Array:null;var S,I="function"==typeof Uint8Array?Uint8Array:void 0;S=function(){var e,r,n;if("function"!=typeof k)return!1;try{r=new k(r=[1,3.14,-3.14,256,257]),n=r,e=(U&&n instanceof Uint8Array||"[object Uint8Array]"===y(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?I:function(){throw new Error("not implemented")};var F=S,j="function"==typeof Uint16Array;var T="function"==typeof Uint16Array?Uint16Array:null;var V,O="function"==typeof Uint16Array?Uint16Array:void 0;V=function(){var e,r,n;if("function"!=typeof T)return!1;try{r=new T(r=[1,3.14,-3.14,65536,65537]),n=r,e=(j&&n instanceof Uint16Array||"[object Uint16Array]"===y(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?O:function(){throw new Error("not implemented")};var $,G={uint16:V,uint8:F};($=new G.uint16(1))[0]=4660;var H=52===new G.uint8($.buffer)[0],W=!0===H?1:0,C=new x(1),L=new m(C.buffer);function P(e){return C[0]=e,L[W]}var M=!0===H?1:0,R=new x(1),Z=new m(R.buffer);function X(e,r){return R[0]=e,Z[M]=r>>>0,R[0]}var Y=1023;var q=.6931471803691238,z=1.9082149292705877e-10,B=0x40000000000000,D=.3333333333333333,J=1048575,K=2146435072,Q=1048576,ee=1072693248;function re(e){var r,n,t,i,o,u,c,s,l,p,v,g;return 0===e?f:a(e)||e<0?NaN:(o=0,(n=P(e))<Q&&(o-=54,n=P(e*=B)),n>=K?e+e:(o+=(n>>20)-Y|0,o+=(s=(n&=J)+614244&1048576|0)>>20|0,c=(e=X(e,n|s^ee))-1,(J&2+n)<3?0===c?0===o?0:o*q+o*z:(u=c*c*(.5-D*c),0===o?c-u:o*q-(u-o*z-c)):(s=n-398458|0,l=440401-n|0,i=(v=(g=(p=c/(2+c))*p)*g)*function(e){return 0===e?.3999999999940942:.3999999999940942+e*(.22222198432149784+.15313837699209373*e)}(v),t=g*function(e){return 0===e?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+.14798198605116586*e))}(v),u=t+i,(s|=l)>0?(r=.5*c*c,0===o?c-(r-p*(r+u)):o*q-(r-(p*(r+u)+o*z)-c)):0===o?c-p*(c-u):o*q-(p*(c-u)-o*z-c))))}var ne=Math.ceil;function te(e){return e<0?ne(e):o(e)}function ie(e,r){var n,t,i,a;return i=(a=e*e)*a,t=a*function(e){return 0===e?.0416666666666666:.0416666666666666+e*(2480158728947673e-20*e-.001388888888887411)}(a),t+=i*i*function(e){return 0===e?-2.7557314351390663e-7:e*(2.087572321298175e-9+-11359647557788195e-27*e)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-e*r))}var ae=-.16666666666666632,oe=.00833333333332249,ue=-.0001984126982985795,fe=27557313707070068e-22,ce=-2.5050760253406863e-8,se=1.58969099521155e-10;function le(e,r){var n,t,i;return n=oe+(i=e*e)*(ue+i*fe)+i*(i*i)*(ce+i*se),t=i*e,0===r?e+t*(ae+i*n):e-(i*(.5*r-t*n)-r-t*ae)}var pe,ve,ge=2147483647,ye=2146435072,de=1048575,he=!0===H?0:1,we=new x(1),be=new m(we.buffer);!0===H?(pe=1,ve=0):(pe=0,ve=1);var me={HIGH:pe,LOW:ve},Ae=new x(1),Ne=new m(Ae.buffer),_e=me.HIGH,Ee=me.LOW;function xe(e,r){return Ne[_e]=e,Ne[Ee]=r,Ae[0]}var Ue=1023,ke=-1023,Se=-1074,Ie=2147483648,Fe="function"==typeof Object.defineProperty?Object.defineProperty:null;var je=Object.defineProperty;function Te(e){return"number"==typeof e}function Ve(e){var r,n="";for(r=0;r<e;r++)n+="0";return n}function Oe(e,r,n){var t=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=n?e+Ve(i):Ve(i)+e,t&&(e="-"+e)),e}var $e=String.prototype.toLowerCase,Ge=String.prototype.toUpperCase;function He(e){var r,n,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,t=parseInt(n,10),!isFinite(t)){if(!Te(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(n=(-t).toString(r),e.precision&&(n=Oe(n,e.precision,e.padRight)),n="-"+n):(n=t.toString(r),t||e.precision?e.precision&&(n=Oe(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===Ge.call(e.specifier)?Ge.call(n):$e.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var We=Math.abs,Ce=String.prototype.toLowerCase,Le=String.prototype.toUpperCase,Pe=String.prototype.replace,Me=/e\+(\d)$/,Re=/e-(\d)$/,Ze=/^(\d+)$/,Xe=/^(\d+)e/,Ye=/\.0$/,qe=/\.0*e/,ze=/(\..*[^0])0*e/;function Be(e){var r,n,t=parseFloat(e.arg);if(!isFinite(t)){if(!Te(e.arg))throw new Error("invalid floating-point number. Value: "+n);t=e.arg}switch(e.specifier){case"e":case"E":n=t.toExponential(e.precision);break;case"f":case"F":n=t.toFixed(e.precision);break;case"g":case"G":We(t)<1e-4?((r=e.precision)>0&&(r-=1),n=t.toExponential(r)):n=t.toPrecision(e.precision),e.alternate||(n=Pe.call(n,ze,"$1e"),n=Pe.call(n,qe,"e"),n=Pe.call(n,Ye,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=Pe.call(n,Me,"e+0$1"),n=Pe.call(n,Re,"e-0$1"),e.alternate&&(n=Pe.call(n,Ze,"$1."),n=Pe.call(n,Xe,"$1.e")),t>=0&&e.sign&&(n=e.sign+n),n=e.specifier===Le.call(e.specifier)?Le.call(n):Ce.call(n)}function De(e){var r,n="";for(r=0;r<e;r++)n+=" ";return n}var Je=String.fromCharCode,Ke=Array.isArray;function Qe(e){return e!=e}function er(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function rr(e){var r,n,t,i,a,o,u,f,c,s,l,p,v;if(!Ke(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",u=1,f=0;f<e.length;f++)if(t=e[f],"string"==typeof t)o+=t;else{if(r=void 0!==t.precision,!(t=er(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,Qe(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,Qe(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=He(t);break;case"s":t.maxWidth=r?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!Qe(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Qe(a)?String(t.arg):Je(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Be(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Oe(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(s=t.arg,l=t.width,p=t.padRight,v=void 0,(v=l-s.length)<0?s:s=p?s+De(v):De(v)+s)),o+=t.arg||"",u+=1}return o}var nr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function tr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function ir(e){var r,n,t,i;for(n=[],i=0,t=nr.exec(e);t;)(r=e.slice(i,nr.lastIndex-t[0].length)).length&&n.push(r),n.push(tr(t)),i=nr.lastIndex,t=nr.exec(e);return(r=e.slice(i)).length&&n.push(r),n}function ar(e){var r,n;if("string"!=typeof e)throw new TypeError(ar("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[ir(e)],n=1;n<arguments.length;n++)r.push(arguments[n]);return rr.apply(null,r)}var or=Object.prototype,ur=or.toString,fr=or.__defineGetter__,cr=or.__defineSetter__,sr=or.__lookupGetter__,lr=or.__lookupSetter__;var pr,vr,gr=function(){try{return Fe({},"x",{}),!0}catch(e){return!1}}()?je:function(e,r,n){var t,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===ur.call(e))throw new TypeError(ar("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof n||null===n||"[object Array]"===ur.call(n))throw new TypeError(ar("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(sr.call(e,r)||lr.call(e,r)?(t=e.__proto__,e.__proto__=or,delete e[r],e[r]=n.value,e.__proto__=t):e[r]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&fr&&fr.call(e,r,n.get),o&&cr&&cr.call(e,r,n.set),e};function yr(e,r,n){gr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===H?(pr=1,vr=0):(pr=0,vr=1);var dr={HIGH:pr,LOW:vr},hr=new x(1),wr=new m(hr.buffer),br=dr.HIGH,mr=dr.LOW;function Ar(e,r,n,t){return hr[0]=e,r[t]=wr[br],r[t+n]=wr[mr],r}function Nr(e){return Ar(e,[0,0],1,0)}yr(Nr,"assign",Ar);var _r=[0,0];function Er(e,r){var n,t;return Nr.assign(e,_r,1,0),n=_r[0],n&=ge,t=P(r),xe(n|=t&=Ie,_r[1])}var xr=22250738585072014e-324,Ur=4503599627370496;function kr(e,n,t,i){return a(e)||c(e)?(n[i]=e,n[i+t]=0,n):0!==e&&r(e)<xr?(n[i]=e*Ur,n[i+t]=-52,n):(n[i]=e,n[i+t]=0,n)}yr((function(e){return kr(e,[0,0],1,0)}),"assign",kr);var Sr=2220446049250313e-31,Ir=2148532223,Fr=[0,0],jr=[0,0];function Tr(e,r){var n,t;return 0===r||0===e||a(e)||c(e)?e:(kr(e,Fr,1,0),e=Fr[0],r+=Fr[1],r+=function(e){var r=P(e);return(r=(r&ye)>>>20)-Y|0}(e),r<Se?Er(0,e):r>Ue?e<0?f:u:(r<=ke?(r+=52,t=Sr):t=1,Nr.assign(e,jr,1,0),n=jr[0],n&=Ir,t*xe(n|=r+Y<<20,jr[1])))}function Vr(e){return function(e,r){var n,t;for(n=[],t=0;t<r;t++)n.push(e);return n}(0,e)}var Or=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],$r=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Gr=16777216,Hr=5.960464477539063e-8,Wr=Vr(20),Cr=Vr(20),Lr=Vr(20),Pr=Vr(20);function Mr(e,r,n,t,i,a,u,f,c){var s,l,p,v,g,y,d,h,w;for(v=a,w=t[n],h=n,g=0;h>0;g++)l=Hr*w|0,Pr[g]=w-Gr*l|0,w=t[h-1]+l,h-=1;if(w=Tr(w,i),w-=8*o(.125*w),w-=d=0|w,p=0,i>0?(d+=g=Pr[n-1]>>24-i,Pr[n-1]-=g<<24-i,p=Pr[n-1]>>23-i):0===i?p=Pr[n-1]>>23:w>=.5&&(p=2),p>0){for(d+=1,s=0,g=0;g<n;g++)h=Pr[g],0===s?0!==h&&(s=1,Pr[g]=16777216-h):Pr[g]=16777215-h;if(i>0)switch(i){case 1:Pr[n-1]&=8388607;break;case 2:Pr[n-1]&=4194303}2===p&&(w=1-w,0!==s&&(w-=Tr(1,i)))}if(0===w){for(h=0,g=n-1;g>=a;g--)h|=Pr[g];if(0===h){for(y=1;0===Pr[a-y];y++);for(g=n+1;g<=n+y;g++){for(c[f+g]=Or[u+g],l=0,h=0;h<=f;h++)l+=e[h]*c[f+(g-h)];t[g]=l}return Mr(e,r,n+=y,t,i,a,u,f,c)}}if(0===w)for(n-=1,i-=24;0===Pr[n];)n-=1,i-=24;else(w=Tr(w,-i))>=Gr?(l=Hr*w|0,Pr[n]=w-Gr*l|0,i+=24,Pr[n+=1]=l):Pr[n]=0|w;for(l=Tr(1,i),g=n;g>=0;g--)t[g]=l*Pr[g],l*=Hr;for(g=n;g>=0;g--){for(l=0,y=0;y<=v&&y<=n-g;y++)l+=$r[y]*t[g+y];Lr[n-g]=l}for(l=0,g=n;g>=0;g--)l+=Lr[g];for(r[0]=0===p?l:-l,l=Lr[0]-l,g=1;g<=n;g++)l+=Lr[g];return r[1]=0===p?l:-l,7&d}function Rr(e,r,n,t){var i,a,o,u,f,c,s;for(4,(a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)Wr[f]=c<0?0:Or[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=e[c]*Wr[o+(f-c)];Cr[f]=i}return 4,Mr(e,r,4,Cr,u,4,a,o,Wr)}var Zr=Math.round,Xr=.6366197723675814,Yr=1.5707963267341256,qr=6077100506506192e-26,zr=6077100506303966e-26,Br=20222662487959506e-37,Dr=20222662487111665e-37,Jr=84784276603689e-45,Kr=2047;function Qr(e,r,n){var t,i,a,o,u;return a=e-(t=Zr(e*Xr))*Yr,o=t*qr,u=r>>20|0,n[0]=a-o,u-(P(n[0])>>20&Kr)>16&&(o=t*Br-((i=a)-(a=i-(o=t*zr))-o),n[0]=a-o,u-(P(n[0])>>20&Kr)>49&&(o=t*Jr-((i=a)-(a=i-(o=t*Dr))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var en=0,rn=16777216,nn=1.5707963267341256,tn=6077100506506192e-26,an=2*tn,on=3*tn,un=4*tn,fn=598523,cn=1072243195,sn=1073928572,ln=1074752122,pn=1074977148,vn=1075183036,gn=1075388923,yn=1075594811,dn=1094263291,hn=[0,0,0],wn=[0,0];function bn(e,r){var n,t,i,a,o,u,f;if((i=P(e)&ge|0)<=cn)return r[0]=e,r[1]=0,0;if(i<=ln)return(i&de)===fn?Qr(e,i,r):i<=sn?e>0?(f=e-nn,r[0]=f-tn,r[1]=f-r[0]-tn,1):(f=e+nn,r[0]=f+tn,r[1]=f-r[0]+tn,-1):e>0?(f=e-2*nn,r[0]=f-an,r[1]=f-r[0]-an,2):(f=e+2*nn,r[0]=f+an,r[1]=f-r[0]+an,-2);if(i<=yn)return i<=vn?i===pn?Qr(e,i,r):e>0?(f=e-3*nn,r[0]=f-on,r[1]=f-r[0]-on,3):(f=e+3*nn,r[0]=f+on,r[1]=f-r[0]+on,-3):i===gn?Qr(e,i,r):e>0?(f=e-4*nn,r[0]=f-un,r[1]=f-r[0]-un,4):(f=e+4*nn,r[0]=f+un,r[1]=f-r[0]+un,-4);if(i<dn)return Qr(e,i,r);if(i>=ye)return r[0]=NaN,r[1]=NaN,0;for(n=function(e){return we[0]=e,be[he]}(e),f=xe(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)hn[o]=0|f,f=(f-hn[o])*rn;for(hn[2]=f,a=3;hn[a-1]===en;)a-=1;return u=Rr(hn,wn,t,a),e<0?(r[0]=-wn[0],r[1]=-wn[1],-u):(r[0]=wn[0],r[1]=wn[1],u)}var mn=[0,0],An=2147483647,Nn=1072243195,_n=1044381696,En=2146435072;function xn(e){var r;if(r=P(e),(r&=An)<=Nn)return r<_n?1:ie(e,0);if(r>=En)return NaN;switch(3&bn(e,mn)){case 0:return ie(mn[0],mn[1]);case 1:return-le(mn[0],mn[1]);case 2:return-ie(mn[0],mn[1]);default:return le(mn[0],mn[1])}}var Un=1072243195,kn=1045430272,Sn=[0,0];function In(e){var r;if(r=P(e),(r&=ge)<=Un)return r<kn?e:le(e,0);if(r>=ye)return NaN;switch(3&bn(e,Sn)){case 0:return le(Sn[0],Sn[1]);case 1:return ie(Sn[0],Sn[1]);case 2:return-le(Sn[0],Sn[1]);default:return-ie(Sn[0],Sn[1])}}var Fn=3.141592653589793;var jn=.07721566490153287,Tn=.3224670334241136,Vn=1,On=-.07721566490153287,$n=.48383612272381005,Gn=-.1475877229945939,Hn=.06462494023913339,Wn=-.07721566490153287,Cn=1,Ln=.4189385332046727,Pn=1.4616321449683622,Mn=4503599627370496,Rn=0x400000000000000,Zn=8470329472543003e-37,Xn=1.4616321449683622,Yn=-.12148629053584961,qn=-3638676997039505e-33;function zn(e){var n,t,i,o,f,s,l,p,v,g,y,d,h;if(a(e)||c(e))return e;if(0===e)return u;if(e<0?(n=!0,e=-e):n=!1,e<Zn)return-re(e);if(n){if(e>=Mn)return u;if(v=function(e){var n,t;return a(e)||c(e)?NaN:0===(n=r(t=e%2))||1===n?Er(0,t):n<.25?In(Fn*t):n<.75?Er(xn(Fn*(n=.5-n)),t):n<1.25?(t=Er(1,t)-t,In(Fn*t)):n<1.75?-Er(xn(Fn*(n-=1.5)),t):(t-=Er(2,t),In(Fn*t))}(e),0===v)return u;t=re(Fn/r(v*e))}if(1===e||2===e)return 0;if(e<2)switch(e<=.9?(h=-re(e),e>=Pn-1+.27?(y=1-e,i=0):e>=Pn-1-.27?(y=e-(Xn-1),i=1):(y=e,i=2)):(h=0,e>=Pn+.27?(y=2-e,i=0):e>=Pn-.27?(y=e-Xn,i=1):(y=e-1,i=2)),i){case 0:s=jn+(d=y*y)*function(e){return 0===e?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+25214456545125733e-21*e)))}(d),f=d*(Tn+d*function(e){return 0===e?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+44864094961891516e-21*e)))}(d)),h+=(l=y*s+f)-.5*y;break;case 1:s=$n+(g=(d=y*y)*y)*function(e){return 0===e?-.032788541075985965:e*(.006100538702462913+e*(.00031563207090362595*e-.0014034646998923284))-.032788541075985965}(g),f=Gn+g*function(e){return 0===e?.01797067508118204:.01797067508118204+e*(e*(.000881081882437654+-.00031275416837512086*e)-.0036845201678113826)}(g),o=Hn+g*function(e){return 0===e?-.010314224129834144:e*(.0022596478090061247+e*(.0003355291926355191*e-.0005385953053567405))-.010314224129834144}(g),h+=Yn+(l=d*s-(qn-g*(f+y*o)));break;case 2:s=y*(Wn+y*function(e){return 0===e?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+.013381091853678766*e)))}(y)),f=Cn+y*function(e){return 0===e?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+.003217092422824239*e)))}(y),h+=-.5*y+s/f}else if(e<8)switch(l=(y=e-(i=te(e)))*(On+y*function(e){return 0===e?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+3194753265841009e-20*e))))}(y)),p=Vn+y*function(e){return 0===e?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+7326684307446256e-21*e))))}(y),h=.5*y+l/p,d=1,i){case 7:d*=y+6;case 6:d*=y+5;case 5:d*=y+4;case 4:d*=y+3;case 3:h+=re(d*=y+2)}else e<Rn?(v=re(e),g=Ln+(d=1/e)*function(e){return 0===e?.08333333333333297:.08333333333333297+e*(e*(.0007936505586430196+e*(e*(.0008363399189962821+-.0016309293409657527*e)-.00059518755745034))-.0027777777772877554)}(y=d*d),h=(e-.5)*(v-1)+g):h=e*(re(e)-1);return n&&(h=t-h),h}function Bn(e){return function(e){return o(e)===e&&e<0}(e)?NaN:zn(e+1)}function Dn(e){return o(e)===e}var Jn=2.5066282746310007;function Kn(e){return Dn(e/2)}function Qn(e){return Kn(e>0?e-1:e+1)}var et=Math.sqrt,rt=!0===H?0:1,nt=new x(1),tt=new m(nt.buffer);function it(e,r){return nt[0]=e,tt[rt]=r>>>0,nt[0]}function at(e){return 0|e}var ot=1072693247,ut=1e300,ft=1e-300;var ct=1048575,st=1048576,lt=1072693248,pt=536870912,vt=524288,gt=20,yt=9007199254740992,dt=.9617966939259756,ht=.9617967009544373,wt=-7.028461650952758e-9,bt=[1,1.5],mt=[0,.5849624872207642],At=[0,1.350039202129749e-8];var Nt=1.4426950408889634,_t=1.4426950216293335,Et=1.9259629911266175e-8;var xt=.6931471805599453;var Ut=1048576,kt=1071644672,St=20,It=.6931471824645996,Ft=-1.904654299957768e-9;var jt=1072693247,Tt=1105199104,Vt=1139802112,Ot=1083179008,$t=1072693248,Gt=1083231232,Ht=3230714880,Wt=31,Ct=1e300,Lt=1e-300,Pt=8008566259537294e-32,Mt=[0,0],Rt=[0,0];function Zt(e,n){var t,i,o,s,l,p,v,g,y,d,h,w,b,m;if(a(e)||a(n))return NaN;if(Nr.assign(n,Mt,1,0),l=Mt[0],0===Mt[1]){if(0===n)return 1;if(1===n)return e;if(-1===n)return 1/e;if(.5===n)return et(e);if(-.5===n)return 1/et(e);if(2===n)return e*e;if(3===n)return e*e*e;if(4===n)return(e*=e)*e;if(c(n))return function(e,n){return-1===e?(e-e)/(e-e):1===e?1:r(e)<1==(n===u)?0:u}(e,n)}if(Nr.assign(e,Mt,1,0),s=Mt[0],0===Mt[1]){if(0===s)return function(e,r){return r===f?u:r===u?0:r>0?Qn(r)?e:0:Qn(r)?Er(u,e):u}(e,n);if(1===e)return 1;if(-1===e&&Qn(n))return-1;if(c(e))return e===f?Zt(-0,-n):n<0?0:u}if(e<0&&!1===Dn(n))return(e-e)/(e-e);if(o=r(e),t=s&ge|0,i=l&ge|0,v=l>>>Wt|0,p=(p=s>>>Wt|0)&&Qn(n)?-1:1,i>Tt){if(i>Vt)return function(e,r){return(P(e)&ge)<=ot?r<0?ut*ut:ft*ft:r>0?ut*ut:ft*ft}(e,n);if(t<jt)return 1===v?p*Ct*Ct:p*Lt*Lt;if(t>$t)return 0===v?p*Ct*Ct:p*Lt*Lt;h=function(e,r){var n,t,i,a,o,u,f;return a=(i=r-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*Et-a*Nt)-((t=it(t=(o=_t*i)+u,0))-o),e[0]=t,e[1]=n,e}(Rt,o)}else h=function(e,r,n){var t,i,a,o,u,f,c,s,l,p,v,g,y,d,h,w,b,m,A,N,_;return m=0,n<st&&(m-=53,n=P(r*=yt)),m+=(n>>gt)-Y|0,n=(A=n&ct|0)|lt|0,A<=235662?N=0:A<767610?N=1:(N=0,m+=1,n-=st),o=it(i=(w=(r=X(r,n))-(c=bt[N]))*(b=1/(r+c)),0),t=(n>>1|pt)+vt,f=X(0,t+=N<<18),h=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=it(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(r-(f-c))))*(o+i)),0),l=it(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0),p=ht*l,y=(v=wt*l+(b-(l-w))*dt+At[N])-((g=it(g=p+v+(s=mt[N])+(d=m),0))-d-s-p),e[0]=g,e[1]=y,e}(Rt,o,t);if(w=(d=(n-(g=it(n,0)))*h[0]+n*h[1])+(y=g*h[0]),Nr.assign(w,Mt,1,0),b=at(Mt[0]),m=at(Mt[1]),b>=Ot){if(0!=(b-Ot|m))return p*Ct*Ct;if(d+Pt>w-y)return p*Ct*Ct}else if((b&ge)>=Gt){if(0!=(b-Ht|m))return p*Lt*Lt;if(d<=w-y)return p*Lt*Lt}return w=function(e,r,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=e&ge|0)>>St)-Y|0,c=0,s>kt&&(i=X(0,((c=e+(Ut>>l+1)>>>0)&~(de>>(l=((c&ge)>>St)-Y|0)))>>>0),c=(c&de|Ut)>>St-l>>>0,e<0&&(c=-c),r-=i),e=at(e=P(f=1-((f=(a=(i=it(i=n+r,0))*It)+(o=(n-(i-r))*xt+i*Ft))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(e+=c<<St>>>0)>>St<=0?Tr(f,c):X(f,e)}(b,y,d),p*w}var Xt=.6931471803691238,Yt=1.9082149292705877e-10,qt=1.4426950408889634,zt=709.782712893384,Bt=-745.1332191019411,Dt=1/(1<<28),Jt=-Dt;function Kt(e){var r;return a(e)||e===u?e:e===f?0:e>zt?u:e<Bt?0:e>Jt&&e<Dt?1+e:function(e,r,n){var t,i,a,o;return Tr(1-(r-(t=e-r)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-e),n)}(e-(r=te(e<0?qt*e-.5:qt*e+.5))*Xt,r*Yt,r)}var Qt=143.01608;function ei(e){var r,n,t;return r=1+(r=1/e)*function(e){return 0===e?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(e*(.0007873113957930937*e-.00022954996161337813)-.0026813261780578124))}(r),n=Kt(e),n=e>Qt?(t=Zt(e,.5*e-.25))*(t/n):Zt(e,e-.5)/n,Jn*n*r}var ri=.5772156649015329;function ni(e,r){return r/((1+ri*e)*e)}function ti(e){var n,t,i,c;if(Dn(e)&&e<0||e===f||a(e))return NaN;if(0===e)return function(e){return 0===e&&1/e===f}(e)?f:u;if(e>171.61447887182297)return u;if(e<-170.5674972726612)return 0;if((t=r(e))>33)return e>=0?ei(e):(n=0==(1&(i=o(t)))?-1:1,(c=t-i)>.5&&(c=t-(i+=1)),c=t*In(Fn*c),n*Fn/(r(c)*ei(t)));for(c=1;e>=3;)c*=e-=1;for(;e<0;){if(e>-1e-9)return ni(e,c);c/=e,e+=1}for(;e<2;){if(e<1e-9)return ni(e,c);c/=e,e+=1}return 2===e?c:c*function(e){var r,n;return 0===e?1:((e<0?-e:e)<=1?(r=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+0*e)))))),n=1+e*(.0714304917030273+e*(e*(.035823639860549865+e*(.011813978522206043+e*(e*(.0005396055804933034+-23158187332412014e-21*e)-.004456419138517973)))-.23459179571824335))):(r=0+(e=1/e)*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+1*e)))))),n=e*(.0005396055804933034+e*(e*(.011813978522206043+e*(.035823639860549865+e*(e*(.0714304917030273+1*e)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),r/n)}(e-=2)}var ii=170,ai=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,0x1b02b9306890000,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8.841761993739702e30,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,1.0333147966386145e40,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,1.3868311854568984e80,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8.247650592082472e90,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,1.1978571669969892e100,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5.797126020747368e120,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,2.4227095383672734e130,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1.352001527678403e140,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,1.1462805637347084e170,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,1.7629525510902446e180,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3.393108684451898e190,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8.094298525273444e200,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,2.6904727073180504e230,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,3.80892263763057e260,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1.853271869493735e280,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1.503616514864999e300,25260757449731984e286,4269068009004705e289,7257415615307999e291];function oi(e){var r,n;return n=1,r=e,function(){return(r*=e)*Bn(n+=1)/function(e){return a(e)?NaN:Dn(e)?e<0?NaN:e<=ii?ai[e]:u:ti(e+1)}(n)}}function ui(e){var r,n;return a(e)||e<0?NaN:0===e?0:(r=oi(e),n=e*(1-re(e)),n+=Kt(-e)*i(r))}export{ui as default};
//# sourceMappingURL=mod.js.map
