$wnd.jsme.runAsyncCallback10('var O7="data-selenium-id";x(253,241,{});function P7(){P7=z;Q7=new ez("dragend",new R7)}function S7(a){a.a.cancelBubble=!0;tx(a.a)}function R7(){}x(254,253,{},R7);_.ee=function(){S7(this)};_.he=function(){return Q7};var Q7;function T7(){T7=z;U7=new ez("dragenter",new V7)}function V7(){}x(255,253,{},V7);_.ee=function(){S7(this)};_.he=function(){return U7};var U7;function W7(){W7=z;X7=new ez("dragover",new Y7)}function Y7(){}x(256,253,{},Y7);_.ee=function(){S7(this)};_.he=function(){return X7};var X7;\nfunction Z7(){Z7=z;$7=new ez("drop",new a8)}function a8(){}x(257,253,{},a8);_.ee=function(a){var b,c,d,e;this.a.cancelBubble=!0;tx(this.a);d=(this.a.dataTransfer||null).files;e=0;a:for(;e<d.length;++e){if(0<a.a.d&&e>=a.a.d)break a;b=d[e];c=new FileReader;b8(c,a.a.b);1==a.a.c&&c.readAsText(b)}0==d.length&&(b=(this.a.dataTransfer||null).getData(tl),a.a.b.a.a.d.ob[Ol]=null!=b?b:n)};_.he=function(){return $7};var $7;function c8(a,b,c){DA(!a.lb?a.lb=new QA(a):a.lb,c,b)}\nfunction d8(){this.ob=px("file");this.ob[Zh]="gwt-FileUpload"}x(381,362,Lm,d8);_.Ae=function(a){yD(this,a)};function e8(a){var b=sx(qi);mr(fl,SZ(b));this.ob=b;this.b=new l0(this.ob);this.ob[Zh]="gwt-HTML";k0(this.b,a,!0);t0(this)}x(385,386,Lm,e8);function f8(a,b){var c,d;c=sx(Hl);d=sx(sl);d[wh]=a.a.a;d.style[Pl]=a.b.a;var e=(tC(),uC(d));c.appendChild(e);sC(a.d,c);KD(a,b,d)}function g8(){FE.call(this);this.a=(IE(),PE);this.b=(QE(),TE);this.e[Uh]=Ec;this.e[Th]=Ec}x(434,378,Vm,g8);\n_.Ve=function(a){var b;b=rx(a.ob);(a=OD(this,a))&&this.d.removeChild(rx(b));return a};function h8(a){try{a.s=!1;var b,c,d;d=a.gb;c=a._;d||(a.ob.style[Ql]=Si,a._=!1,a.gf());b=a.ob;b.style[fj]=0+(gy(),vk);b.style[Cl]=Fc;o2(a,UY(Ex($doc)+(Dx()-mx(a.ob,Yj)>>1),0),UY(Fx($doc)+(Cx()-mx(a.ob,Xj)>>1),0));d||((a._=c)?(a.ob.style[bi]=Ik,a.ob.style[Ql]=Rl,Xs(a.fb,200)):a.ob.style[Ql]=Rl)}finally{a.s=!0}}function i8(a,b){var c;c=(new e1(a)).vd.hg();c.ob.setAttribute(O7,"jsa_clipboard/button/"+b);return c}\nfunction j8(a){var b;b=i8("Close (ESC)","close");uD(b,new k8(a),(kz(),kz(),lz));return b}\nfunction l8(){b2();var a,b,c,d,e;A2.call(this,(T2(),U2),null,!0);this.sj();this.cb=!0;this.ob.setAttribute(O7,"jsa_clipboard/window");this.U=!0;a=new e8(this.e);this.d=new $F;this.d.ob.setAttribute(O7,"jsa_clipboard/text_area");oD(this.d,Pc);lD(this.d,Pc);T1(this,"400px");e=new g8;e.ob.style[Ri]=Pc;e.e[Uh]=10;c=(IE(),JE);e.a=c;f8(e,a);f8(e,this.d);this.c=new XE;this.c.e[Uh]=20;for(b=this.qj(),c=0,d=b.length;c<d;++c)a=b[c],UE(this.c,a);f8(e,this.c);g2(this,e);q2(this,!1);uD(this.d,new m8(this),(Fz(),\nFz(),Gz));this.rj()}x(790,791,YY,l8);_.qj=function(){return A(lG,o,50,[j8(this)])};_.rj=function(){var a=this.d;a.ob.readOnly=!0;var b=pD(a.ob)+"-readonly";kD(a.Ie(),b,!0)};_.sj=function(){S2(this.H.b,"Copy")};_.gf=function(){z2(this);this.ob.style[Wl]=Tc};_.c=null;_.d=null;_.e="Press Ctrl-C (Command-C on Mac) or right click (Option-click on Mac) on the selected text to copy it, then paste into another program.";function m8(a){this.a=a}x(793,1,{},m8);\n_.pe=function(a){27==(a.a.keyCode||0)&&i2(this.a,!1)};_.a=null;function k8(a){this.a=a}x(794,1,{},k8);_.ke=function(){i2(this.a,!1)};_.a=null;function n8(a){this.a=a}x(795,1,{},n8);\n_.Sd=function(){qD(this.a.d.ob,!0);DE(this.a.d,!0);var a=this.a.d,b;b=nx(a.ob,Ol).length;if(0<b&&a.jb){if(0>b)throw new pS("Length must be a positive integer. Length: "+b);if(b>nx(a.ob,Ol).length)throw new pS("From Index: 0  To Index: "+b+"  Text Length: "+nx(a.ob,Ol).length);var a=a.ob,c=0;try{var d=a.createTextRange(),e=a.value.substr(c,b).match(/(\\r\\n)/gi);null!=e&&(b-=e.length);var f=a.value.substring(0,c).match(/(\\r\\n)/gi);null!=f&&(c-=f.length);d.collapse(!0);d.moveStart("character",c);d.moveEnd("character",\nb);d.select()}catch(g){}}};_.a=null;function o8(a){var b;b=i8(a.a,"accept");uD(b,new p8(a),(kz(),kz(),lz));return b}function q8(a){a.e="Paste the text to import into the text area below.";a.a="Accept";S2(a.H.b,"Paste")}function r8(a){b2();l8.call(this);this.b=a}x(797,790,YY,r8);_.qj=function(){return A(lG,o,50,[o8(this),j8(this)])};_.rj=function(){lD(this.d,"150px")};_.sj=function(){q8(this)};_.gf=function(){z2(this);this.ob.style[Wl]=Tc;Zw((Ww(),Xw),new s8(this))};_.a=null;_.b=null;\nfunction t8(a){b2();r8.call(this,a)}x(796,797,YY,t8);_.qj=function(){var a;return A(lG,o,50,[o8(this),(a=new d8,a.ob.setAttribute(O7,"jsa_clipboard/button/browse_upload"),uD(a,new u8(this),(e_(),e_(),f_)),a),j8(this)])};_.rj=function(){lD(this.d,"150px");var a=new v8(this),b=this.d;c8(b,new w8,(T7(),T7(),U7));c8(b,new x8,(P7(),P7(),Q7));c8(b,new y8,(W7(),W7(),X7));c8(b,new z8(a),(Z7(),Z7(),$7))};_.sj=function(){q8(this);this.e+=" Or drag and drop a file on it."};function u8(a){this.a=a}\nx(798,1,{},u8);_.je=function(a){var b,c;b=new FileReader;a=(c=a.a.srcElement,c.files[0]);A8(b,new B8(this));b.readAsText(a)};_.a=null;function B8(a){this.a=a}x(799,1,{},B8);_.tj=function(a){XF(this.a.a.d,a)};_.a=null;x(802,1,{});x(801,802,{});_.b=null;_.c=1;_.d=-1;function v8(a){this.a=a;this.b=new C8(this);this.c=this.d=1}x(800,801,{},v8);_.a=null;function C8(a){this.a=a}x(803,1,{},C8);_.tj=function(a){this.a.a.d.ob[Ol]=null!=a?a:n};_.a=null;function p8(a){this.a=a}x(807,1,{},p8);\n_.ke=function(){if(this.a.b){var a=this.a.b,b;b=new pJ(a.a,0,nx(this.a.d.ob,Ol));SP(a.a.a,b.a)}i2(this.a,!1)};_.a=null;function s8(a){this.a=a}x(808,1,{},s8);_.Sd=function(){qD(this.a.d.ob,!0);DE(this.a.d,!0)};_.a=null;x(809,1,ln);_.be=function(){var a,b;a=new D8(this.a);void 0!=$wnd.FileReader?b=new t8(a):b=new r8(a);V1(b);h8(b)};function D8(a){this.a=a}x(810,1,{},D8);_.a=null;x(811,1,ln);\n_.be=function(){var a;a=new l8;var b=this.a,c,d;XF(a.d,b);c=(d=MS(b,"\\r\\n|\\r|\\n|\\n\\r"),d.length);1>=c&&(c=~~(b.length/16));lD(a.d,20*(10>c+1?c+1:10)+vk);Zw((Ww(),Xw),new n8(a));V1(a);h8(a)};function A8(a,b){a.onload=function(a){b.tj(a.target.result)}}function b8(a,b){a.onloadend=function(a){b.tj(a.target.result)}}function z8(a){this.a=a}x(818,1,{},z8);_.a=null;function w8(){}x(819,1,{},w8);function x8(){}x(820,1,{},x8);function y8(){}x(821,1,{},y8);Z(802);Z(801);Z(818);Z(819);Z(820);Z(821);Z(253);\nZ(255);Z(254);Z(256);Z(257);Z(790);Z(797);Z(796);Z(810);Z(793);Z(794);Z(795);Z(807);Z(808);Z(798);Z(799);Z(800);Z(803);Z(385);Z(434);Z(381);U(WY)(10);\n//@ sourceURL=10.js\n')