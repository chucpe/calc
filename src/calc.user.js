// ==UserScript==
// @name         Калькулейшин
// @namespace    Калькулейшин
// @version      5.29
// @description  Подсчёт паллет/суммы + реальное время + фильтр по датам + настройки + фиолетовые заявки + цены + статистика + онлайн + календарь
// @match        https://e8.ffa.su/*
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        unsafeWindow
// @connect      raw.githubusercontent.com
// @connect      api.github.com
// @connect      e8.ffa.su
// @connect      backoffice-e8.ffa.su
// @run-at       document-start
// @downloadURL  https://github.com/chucpe/calc/raw/refs/heads/master/src/calc.user.js
// @updateURL    https://github.com/chucpe/calc/raw/refs/heads/master/src/calc.user.js
// ==/UserScript==

(function() {
    'use strict';

var getAuthLogin,blockPage,checkAccess;const vmkO_870307=(function vmkb(vmkz,vmky){let vmkF,vmkW;let vmkM={__proto__:null,['getAuthLogin']:function(){return vms_a67ea5(undefined,this,arguments,0x0,new.target,typeof getAuthLogin!=='undefined'?getAuthLogin:undefined,0x72);},['blockPage']:function(D){return vms_a67ea5(undefined,this,arguments,0x1,new.target,typeof blockPage!=='undefined'?blockPage:undefined,0x72);},['checkAccess']:function(){return vms_a67ea5({'_$t3TWVK':[NUMBER_LIST_URL,TIMEOUT_MS,blockPage,getAuthLogin],'_$lXdQHz':undefined,'_$HpuG5m':0x0,'_$Qy1ct1':[0x1,0x1,0x0,0x0]},this,arguments,0x2,new.target,typeof checkAccess!=='undefined'?checkAccess:undefined,0x72);}},vmkI=typeof globalThis!=='undefined'?globalThis:typeof self!=='undefined'?self:typeof global!=='undefined'?global:typeof window!=='undefined'?window:void 0,vmkX,vmkd=vmkz===vmkI&&vmky;if(vmkd){const vmkf={__proto__:null,["getAuthLogin"]:()=>getAuthLogin,["blockPage"]:()=>blockPage,["checkAccess"]:()=>checkAccess};for(const vmkh in vmkM){vmkX=Object.getOwnPropertyDescriptor(vmkI,vmkh);if(!vmkX||'value'in vmkX&&vmkX.value!==vmkf[vmkh]()){vmkd=false;}}}if(vmkd){for(const vmkh in vmkM){vmkX=Object.getOwnPropertyDescriptor(vmkI,vmkh);if(vmkX&&vmkX.configurable&&('get'in vmkX||vmkX.value!==void 0)){Object.defineProperty(vmkI,vmkh,{value:vmkM[vmkh],writable:true,enumerable:true,configurable:false});}else if(vmkX&&!vmkX.configurable&&!(vmkX.writable&&vmkX.enumerable)){throw new SyntaxError("Identifier '"+vmkh+"' has already been declared");}else{vmkI[vmkh]=vmkM[vmkh];}}}else{const vmkZ=()=>{getAuthLogin=vmkM["getAuthLogin"];blockPage=vmkM["blockPage"];checkAccess=vmkM["checkAccess"];};vmkZ();}const vml=typeof globalThis!=='undefined'?globalThis:typeof self!=='undefined'?self:typeof global!=='undefined'?global:typeof window!=='undefined'?window:void 0x0;const vmk_e7381c={__proto__:null};const _$3QlniP=vmk_e7381c['_$gSoBSK']||(vmk_e7381c['_$gSoBSK']={['_$BhcOxS']:undefined,['_$LlWrTr']:undefined,['_$JEq5Xp']:undefined,['_$A5F57A']:undefined,['_$xeFEt7']:undefined,['_$fTFYOE']:undefined,['_$yjmSO9']:undefined,['_$nNZUvL']:undefined});const _$SDXiZG=vmkz===vml?vml:vmk_e7381c;const _$hu2PCO=function(D,S,r){D[S]=r;};const _$gHYCss=function(D,S){return delete D[S];};const _$ucC5Yj=function(D,S,r,n){if(r===''){if(S)switch(n){case 0x1:return{'':function(s){'use strict';return D(this,arguments,new.target);}}[''];case 0x2:return{'':function(s,k){'use strict';return D(this,arguments,new.target);}}[''];case 0x3:return{'':function(s,k,a){'use strict';return D(this,arguments,new.target);}}[''];default:return{'':function(){'use strict';return D(this,arguments,new.target);}}[''];}switch(n){case 0x1:return{'':function(s,k=void 0x0){return D(this,arguments,new.target);}}[''];case 0x2:return{'':function(s,k,a=void 0x0){return D(this,arguments,new.target);}}[''];case 0x3:return{'':function(s,k,a,l=void 0x0){return D(this,arguments,new.target);}}[''];default:return{'':function(s=void 0x0){return D(this,arguments,new.target);}}[''];}}if(S)switch(n){case 0x1:return{[r]:function(s){'use strict';return D(this,arguments,new.target);}}[r];case 0x2:return{[r]:function(s,k){'use strict';return D(this,arguments,new.target);}}[r];case 0x3:return{[r]:function(s,k,a){'use strict';return D(this,arguments,new.target);}}[r];default:return{[r]:function(){'use strict';return D(this,arguments,new.target);}}[r];}switch(n){case 0x1:return{[r]:function(s,k=void 0x0){return D(this,arguments,new.target);}}[r];case 0x2:return{[r]:function(s,k,a=void 0x0){return D(this,arguments,new.target);}}[r];case 0x3:return{[r]:function(s,k,a,l=void 0x0){return D(this,arguments,new.target);}}[r];default:return{[r]:function(s=void 0x0){return D(this,arguments,new.target);}}[r];}};const _$JX84S5=function(D,S,r,n){if(r===''){if(S)switch(n){case 0x1:return{''(s){'use strict';return D(this,arguments);}}[''];case 0x2:return{''(s,k){'use strict';return D(this,arguments);}}[''];case 0x3:return{''(s,k,a){'use strict';return D(this,arguments);}}[''];default:return{''(){'use strict';return D(this,arguments);}}[''];}switch(n){case 0x1:return{''(s,k=void 0x0){return D(this,arguments);}}[''];case 0x2:return{''(s,k,a=void 0x0){return D(this,arguments);}}[''];case 0x3:return{''(s,k,a,l=void 0x0){return D(this,arguments);}}[''];default:return{''(s=void 0x0){return D(this,arguments);}}[''];}}if(S)switch(n){case 0x1:return{[r](s){'use strict';return D(this,arguments);}}[r];case 0x2:return{[r](s,k){'use strict';return D(this,arguments);}}[r];case 0x3:return{[r](s,k,a){'use strict';return D(this,arguments);}}[r];default:return{[r](){'use strict';return D(this,arguments);}}[r];}switch(n){case 0x1:return{[r](s,k=void 0x0){return D(this,arguments);}}[r];case 0x2:return{[r](s,k,a=void 0x0){return D(this,arguments);}}[r];case 0x3:return{[r](s,k,a,l=void 0x0){return D(this,arguments);}}[r];default:return{[r](s=void 0x0){return D(this,arguments);}}[r];}};const _$Q1tjKT=function(D,S,r,n){if(S)switch(n){case 0x1:return{async[r](s){'use strict';let k=D(this,arguments);while(k['a']){let a=0x1,l;try{l=await k['v'];}catch(T){a=0x2,l=T;}k['s'](a,l);}return k['v'];}}[r];case 0x2:return{async[r](s,k){'use strict';let a=D(this,arguments);while(a['a']){let l=0x1,T;try{T=await a['v'];}catch(w){l=0x2,T=w;}a['s'](l,T);}return a['v'];}}[r];case 0x3:return{async[r](s,k,a){'use strict';let l=D(this,arguments);while(l['a']){let T=0x1,w;try{w=await l['v'];}catch(U){T=0x2,w=U;}l['s'](T,w);}return l['v'];}}[r];default:return{async[r](){'use strict';let s=D(this,arguments);while(s['a']){let k=0x1,a;try{a=await s['v'];}catch(l){k=0x2,a=l;}s['s'](k,a);}return s['v'];}}[r];}switch(n){case 0x1:return{async[r](s,k=void 0x0){let a=D(this,arguments);while(a['a']){let l=0x1,T;try{T=await a['v'];}catch(w){l=0x2,T=w;}a['s'](l,T);}return a['v'];}}[r];case 0x2:return{async[r](s,k,a=void 0x0){let l=D(this,arguments);while(l['a']){let T=0x1,w;try{w=await l['v'];}catch(U){T=0x2,w=U;}l['s'](T,w);}return l['v'];}}[r];case 0x3:return{async[r](s,k,a,l=void 0x0){let T=D(this,arguments);while(T['a']){let w=0x1,U;try{U=await T['v'];}catch(A){w=0x2,U=A;}T['s'](w,U);}return T['v'];}}[r];default:return{async[r](s=void 0x0){let k=D(this,arguments);while(k['a']){let a=0x1,l;try{l=await k['v'];}catch(T){a=0x2,l=T;}k['s'](a,l);}return k['v'];}}[r];}};const _$LUb5LD=function(D,S,r,n){if(S)return(function(){'use strict';switch(n){case 0x1:return{*[r](s,k=void 0x0,...{[(k=D(this,arguments),'length')]:a}){return yield*k;}}[r];case 0x2:return{*[r](s,k,a=void 0x0,...{[(a=D(this,arguments),'length')]:l}){return yield*a;}}[r];case 0x3:return{*[r](s,k,a,l=void 0x0,...{[(l=D(this,arguments),'length')]:T}){return yield*l;}}[r];default:return{*[r](s=void 0x0,...{[(s=D(this,arguments),'length')]:k}){return yield*s;}}[r];}}());switch(n){case 0x1:return{*[r](s,k=void 0x0,...{[(k=D(this,arguments),'length')]:a}){return yield*k;}}[r];case 0x2:return{*[r](s,k,a=void 0x0,...{[(a=D(this,arguments),'length')]:l}){return yield*a;}}[r];case 0x3:return{*[r](s,k,a,l=void 0x0,...{[(l=D(this,arguments),'length')]:T}){return yield*l;}}[r];default:return{*[r](s=void 0x0,...{[(s=D(this,arguments),'length')]:k}){return yield*s;}}[r];}};const vms_a67ea5=(function(){'use strict';var D=Object['getOwnPropertyDescriptor'],S=Object['defineProperty'],r=WeakSet['prototype']['add'],n=Reflect['ownKeys'],s=WeakMap['prototype']['has'],k=Object['getOwnPropertyNames'],a=Object['create'],l=Reflect['defineProperty'],T=WeakMap['prototype']['set'],w=Reflect['apply'],U=Reflect['construct'],A=Function['prototype']['call'],Q=Function['prototype']['apply'],N=Array['prototype'][Symbol['iterator']],g=Object['getPrototypeOf'],G=WeakSet['prototype']['has'],K=Proxy,H=Object['getOwnPropertySymbols'],o=Object['setPrototypeOf'],B=Reflect['get'],u=WeakMap['prototype']['get'],p=Reflect['deleteProperty'],q=Reflect['set'];let C=['H5YwVZmBBWj2qqlRvKIFJd8R0oIH/hif/KaErS81thiJvSaEZIYFtKQ5tW3zBDLE0o1GBWB2p1yDk2hD/xvcix6gBh3BQW3BeWMrzh3BUWJsuWJ9B/WpBWPFBWNkBh3z6BJ9BihIBWBjzyhIBW2+zhMfzh3ptB3IdWp9BfBpzOhpzgh9zOmzBWzKBWsJzB3B5Wh9Bnh9zChIzCBpzgvpBW2XzBMWzB0qI4hoixB6BWhXB2h=','H5YwVXm9BLD22sQ5to8RQDi30d8R0B3BBWB2pq8RvdaG/+cEBl86/+IVkabEvS81BDcFtKIVZ+cHB6zL/q8IQoaAQpl50d81toa6B6zpwEU2tKcE/+cEwqYL/qaVBW32PoP1/oY6/Sbx0o1DQqaj/+bUQqJ9BhF9BEj9Bb3IzYvIBWsfzh39tB3BdWpsaB32tBkhBh3z6BJ9zb3IBWSfzh3qoBhPpNWBBiW9zuW9zb3IzYvIBWMfzh33oBh9B0hIBW1FBWekBhQJzgh9BWspzh39tB3B5BhsaB3pEWJsUWJ9zyjIBWXvzB3etBkhBh3itB3btB32dWpsaBMXzBMWzBhZe4DK','H5Y2VXmBBB3ABlPMisLLiqiUfwV2qqQ1QpIUQqLitKQ5tW3BBDcxtKcutKl1BD/FtK02WBIt/wWGv+bx/SbuSrzLQS8mSKlR/K1A3b9YEeJWEedhFb9cEewhGQ9Ye42h1b9CEvs8WGq2EeyWEee8WQ9UEeDABWp23VQbSdLGtqLEQszr/SIU/SbEBD/s8ah22qU1QqLR/Bikw1abhVarSElPJU8MaaPiBDv7Q2E29p8LQqJ2zocRQDiqQSPFBl8JrJUIwUaJSEUwBDcEZ+U1tdaEBW322qYAtqYL/B32BDcRtoa60oY6BWh2poYAQq1G/+YUQqh9BemzBWIK9hBBBh9BBhV2BB3BGWh9BoD9BnhpBW24zh3BGWhs5WJsfB32EWJsUWJ9zijIBW+vzB3qtB3zdWpsaBMXzBMWzB3sEWJsEWh99PWpBWHXBWVBBB3BGWh99cWp98wjBB23BW3iEWJsUWJ920jIBWPFBW2kBhVJCBBB6B392Am99hpBBW9KzB3hgW39p+DsVBp9pAm9BLbFzcBzBLwXBW3atBkhBh3+gW39zoD9BZhpzUh9BnvpzCmpzCBpBL3o'];var E=Uint8Array,m=DataView,j=String['fromCharCode'];let J=['HTYroXmBBBjhBlzVtKbUt+aAQBik/qYxQ+U1tH8ItqaG/+cEBDB2po1Atoa6rI8bwBi3ZqaL/Bi3voYVkhNozDmW39BW39By/q1K3sbEk+l1Nr3n39BW39BW39zVZSbDtqIcf4zotqajfDmW39BW39BW3q/F/SWG/q16/+bEZ+YAf4zxtKlUt+jO94BW39BW39BWv+l5/KjGZS81tSig3qb1tH810xFn39BW39BW39zXQSbEZ+/ce+bRtH81tHhg3qb1tH810xFn39BW39BW39zm/+1HZshg32pDis/mfDmW39BW39BW3qPLvKGH0oYUtohg39iliwpO94BW39BW39BW/oYAQ9Uov+U5tsVg3sbc0d81trUUZrDW0KIA06Uu/SP5/xFn39BW39BW39zE/SLEe+IFZ+QAf4zx/+cE/S3O94BW39BW39BW0qIV/q1A/umWixzDk2Fn39BW39BW39z4tdWG0K1gZ+cHf4z4tdPV/S3GvoYjfDmW39BW39B4NWmW39BW39BW32lVZSvW0d8ctqJY3o/RtHhG0K1g/wmWbx8Dk2FWt+I6/K1Ae+PRQs8RtwmWiw/Dk2F4NAnt12DR/q1KNWmW39BW39BW32lmirzuQs1F/wE4/oYAQ9UuZS51f4B6bszjf6zGvSPHZ+jg32BWi9Bj0sWO3qbRtqY6f4Bx/o/o/o/of63CEPdhGQ9EEeO8WQq9EvNhRY9UEeEyeKWlNWmW39BW39ByeK85Qxj2p1yDk2a1bwax/LOrz0jIoBhkab3IuW+vzzcJEWSfz/Wps1h9BB3zBW39BD09BB3pBW39BD09BB3IBWv9BD0=','H5YroXm9BBh2ssz6/S/1tH8p/+/LQ+lEBWBiDWe+z0jItbjzjBh9BB09BB3zBWBs','HTYwoZm9s2myBDluQqIEQSip6BB22obRtHbRtqJ29sQL0oj2M1G1f9ULvKb10dbQ3pQ5QpLUv42hRQ9UEewhRGqzEve8WY97EeShRrjWEPwhRGqzEve8WY973b96EvshGQ9yeW3zBDLnJEYfBD5DvSPu/hiv0oau0qYA0KaJ/SLEBD5z0HPLkhifZSbz0HPLkhfpBaG1f9ULvKb10dbQ3b9LEe7hAbqzEeOhA42hRQ9U3b9yEe28WQqzEexhF4jWEPwhRGqzEve8WY973b96EvshGQ9yeWB22qcUt+P10WirQ+cV/+/5toaVBlPMisLLiqiUfwV2zolR/DbB+KJje+IxvKau0UEWEPshFb9Y3b97EejWtHaGvoa6f4B2poPFtKbTJqIH/hinv+lFtd0eBlz5tobFQ+810Div+KJje+IxvKau0UEWBu3WEedhGr2hF4zLtqlRQ6jWEPshAY9CEemABEvWjm9J3b9EEeO8WQq9EvNhR628Wb9DEeM8Wb9UEvx8VQ9YeWirSuzjbw/L/+vKBD510HPR0WfpBaG1f9ULvKb10dbQ3b9kEvxhAb9lEeThF92hRY9DEv28WQ9jEedhFY9D39xhGb9CEvs8WGq2EeyWEee8WQ9UEeD5fW39BDlRtolRv+w3BOmzQF39uWaF6B3jEWS+z0jIoB8FdWIJgWwWz9OrzQvIuWS9BFjItbjz6BSrzQvIuWSpz+ukBZvIfb3IUWSfz/WptbjzafmpjBwpz0mI6BaF6BaF6B+XB6O3z0hIuWSrz0W9fb3IUWSfz0hIuWaFdWpjlBSfzZh9gBwpz0jIkFWIlBSnz0WItiWItiWIXWiA6BSpztvp6B3jEWS+z0jIoBrKz3Bp6BPFdWIJGWrKzq6VzIwXzfBpGBrVBRhzlB+yB0hIWBJgGBrVBRhzlB+yB0hIWBJgtiWItiWIlBSnz0WItiWItiWIXWiA6BSpz0jIEWS3BxLF6BSrzQvIuWSpz0jItbjzfihIuW+VBAWplBSfzST3z0hIUWSfztvptbjzfqu3zhZEznh9YBspztDzlB+BzwTpzQvIfIwpzZvIfb3IUWSfz/WpGWrBziW9oBw3BoukBarKzevptnhpafmpjBwrzQvIuW+vzevpWBw3B5Wp6BPFdWIJGBrVBTmzQGhpEWS+z0jIoBrKzqukBaroznh9BWB9BB3BBWB9BhVaCBBBzD39zD32BWh9zh3zzD0szD3qzD3sBWB99B3IBWp9Bh3PzD3nBWp9zh3zzD09BW09BD3eBWJ9Bh0szD3zzD3PBWD99W3iBWm99h09zB3pBWE92WVaCBBBzD3PzD3nBWh92h3IBWpsBWh92h0sBWh92h09zh3IzD3eBWD92B3iBWD99D09zW3q9hBBBWBPpNWBBB09BW09pB389hBBBWBs98wjBBB9zh3zzDV9BBhB9hBBBWB9zh3zzD0szD0sBWDsBWFszD0szD3nzD3PzD092B39BWD9BD3zzD3bBWD92W3iBWj92h09zD3sBLi92WVaCBBBzD3JBW399h099W3sBLi9zh3zzD3sBLiszD3sBLisBWW99B09IhVBBB3BBWJ9Bh09IB32zD0szD3fzD3bzD09BW0szD32zD09BW09pB3+9hBBBWBs98wjBBB9IDVJCBBBBWJ9Bh0PBWBpBBVBBB3BBWJ9Bh0szD39zD3hBLvPBBB9BB0PINWBBB3v98wjBBB9zh3zzD0sBWB9Bh3BBW3sBLm9qD3BBLD9BW09BB0K29zBaqeDBS2WBvBz4BqqB/BzmBsWBZDzEBsrB/DzKBskBQjzjBs4BaOmBkjzOWsDBvv9dWnJBFj9XBnDBXj9ABeqBFj9uBekBGB9WWe+BGD9dBekBA39gWeXB532TBN3Byv26Bi33eB2Bim2/B2oBM3zmWpBUWs4BvW9Bbh9jB3=','HTYroXmBBBWnBDcxtKcutKl1BDLdvSPABdPt/wWGv+bx/SbuSr2hHGq3EexhFQ9gEeBWEvshGQq9EeWA3b9JEeO8WQq9EvNhR62hFGqzEeShR9j9BhiftKc10HPR0WOrzh3BUWJsuWJ9B/WpBWPFBWNkBh3zaB0=','HTYroXmBBBWnBDcxtKcutKl1BDLdvSPABdPt/wWGv+bx/SbuSr2hmG9DEeHhRb9DEvN8W4zsZS83Q+3A3b9JEeO8WQq9EvNhR62hFGqzEeShR9j9BhirtKcEZ+U1tdaE2G3IBW2+zhMfzh3zoBh9BoD9BYjzBWIJzD=='],Y={'0':0x118,'1':0x1e6,'2':0xce,'3':0x134,'4':0x16c,'5':0x111,'6':0x199,'7':0x11d,'8':0x158,'9':0x1b3,'10':0x197,'11':0x119,'12':0x14f,'13':0x193,'14':0x105,'15':0xd5,'16':0x1cd,'17':0xac,'18':0x94,'19':0xf6,'20':0x146,'21':0x8,'22':0xca,'23':0x12a,'24':0x0,'25':0x1f8,'26':0x54,'27':0x5,'28':0x1b6,'29':0x160,'32':0x19e,'40':0xb0,'41':0x2d,'42':0x168,'43':0x16e,'44':0xb5,'45':0x9a,'46':0x1ad,'47':0x19,'50':0x1c9,'51':0x165,'52':0x3d,'53':0x3c,'54':0x19b,'55':0x2,'56':0x17,'57':0x11,'58':0x2b,'59':0x1de,'60':0x1b9,'61':0xab,'62':0x66,'63':0x1f4,'64':0x108,'70':0x37,'71':0xfc,'72':0xef,'73':0x1ab,'74':0x69,'75':0x10d,'76':0x117,'77':0x6a,'79':0x1ba,'81':0xdd,'83':0xea,'84':0x124,'90':0x150,'91':0x1c,'93':0x190,'94':0xf5,'95':0x198,'100':0xcf,'104':0x178,'105':0x173,'106':0xa6,'107':0x3b,'110':0x103,'111':0xfe,'112':0x152,'120':0xc0,'121':0x3f,'122':0xa7,'123':0x129,'124':0x1e1,'127':0x1ac,'128':0x188,'129':0x4,'130':0x44,'131':0x1e8,'132':0x8c,'140':0x47,'141':0x31,'142':0x77,'143':0x166,'144':0x13a,'145':0x10f,'146':0x154,'147':0x182,'148':0xc,'149':0x1e2,'160':0x1dc,'161':0x1f7,'162':0x1c3,'163':0x93,'164':0x46,'165':0x13,'166':0x57,'167':0x116,'168':0x9f,'169':0x179,'170':0x1eb,'180':0x27,'181':0x135,'182':0x167,'183':0x1c0,'184':0x1d8,'185':0x1cc,'200':0xc7,'201':0xc4,'210':0x1d0,'213':0x42,'214':0x18,'220':0x88,'250':0x13d,'251':0x133,'252':0x17d,'253':0x196,'254':0x36,'255':0xeb,'256':0x1d9,'262':0xe4,'263':0x13f,'264':0x171,'265':0x1ce,'266':0x2c,'267':0x181,'268':0x80,'269':0xe1,'270':0x138,'272':0x8d,'273':0x1ff,'274':0xb8,'275':0x4f,'276':0x8e,'277':0x64,'278':0x121,'279':0xd9,'280':0x4b,'281':0x2f,'282':0x9,'283':0xfb,'284':0x176,'285':0x102,'286':0x8f,'287':0xa5,'288':0x18e,'293':0x2e,'294':0x1aa,'295':0xf7,'296':0x104,'297':0x34,'298':0x84,'299':0xa3,'300':0x14,'301':0x10,'302':0xa4,'303':0x12b,'304':0x18d,'305':0x6f,'306':0x139,'307':0x1cb,'308':0x1fd,'309':0xaa,'310':0x7c,'311':0x14a,'312':0x32,'320':0x39,'321':0x16b,'322':0x1ed,'323':0x1f1,'325':0x107,'326':0x52,'327':0x15e,'328':0x194,'329':0x114,'330':0x13b,'332':0x126,'333':0x1f2,'334':0x195,'339':0x33,'340':0x87,'341':0x2a,'342':0x1a7,'343':0x10e,'344':0x1f,'345':0x145,'346':0x97,'347':0x9c,'348':0x16d,'349':0xb4,'350':0xc2,'351':0xde,'352':0xfa,'353':0x175,'354':0x70,'355':0x156,'356':0xbf,'357':0x99,'358':0x14e,'359':0xb7,'360':0x17f,'361':0xf3,'362':0xe3,'363':0x8a,'364':0x1b5,'365':0x76,'366':0xc5,'367':0xf,'368':0xc9,'369':0x115,'370':0xd4,'371':0xdf,'372':0x11c,'373':0x112,'374':0x180,'375':0x17e,'376':0x141,'377':0x1df,'378':0x10c,'379':0x35,'380':0x1b0,'381':0x30,'382':0x17a,'383':0x1c4,'384':0xc8,'385':0x1d3};const t=0x1,b=0x2,z=0x3,y=0x4,V=0x90,F=0xc,W=0x15c,M=typeof 0x0n,I=[];let X=0x0;const d=function(){'use strict';return arguments;},f=function(SF){if(typeof SF!=='string')return NaN;let SW=+SF;return SW>=0x0&&SW%0x1===0x0&&String(SW)===SF?SW:NaN;},Z=function(SF){return!isNaN(SF)&&SF>=0x0;},h=function(SF,SW){if(SW in SF['deletedArgs'])return undefined;if(SW in SF['extraArgs'])return SF['extraArgs'][SW];if(SW>=SF['entryArgCount'])return undefined;let SM=SF['paramSlotOf']!==null?SF['paramSlotOf'][SW]:undefined;return SM>=0x0?SF['paramEnv']['_$t3TWVK'][SM]:SF['args'][SW];},O=function(SF,SW){if(SW in SF['deletedArgs'])return![];if(SW in SF['extraArgs'])return!![];return SW<SF['entryArgCount']?SW in SF['args']:![];},P=function(SF,SW,SM){if(SW==='length')return this['argsLength'];if(SW==='callee')return this['calleeDeleted']?undefined:this['calleeValue'];if(SW===Symbol['toStringTag'])return'Arguments';let SI=f(SW);if(Z(SI)){if(SI in this['unmappedIndices'])return B(SF,SW,SM);return h(this,SI);}return B(SF,SW,SM);},R=function(SF,SW,SM){if(SW==='length'){if(!this['lengthWritable'])return![];return this['argsLength']=SM,SF['length']=SM,!![];}if(SW==='callee'){if(!q(SF,SW,SM))return![];return this['calleeValue']=SM,this['calleeDeleted']=![],!![];}let SI=f(SW);if(Z(SI)){if(SI in this['unmappedIndices'])return q(SF,SW,SM);let SX=D(SF,String(SI));if(SX&&!SX['writable'])return![];if(SI in this['deletedArgs'])delete this['deletedArgs'][SI],this['extraArgs'][SI]=SM;else{if(SI<this['entryArgCount']){let Sd=this['paramSlotOf']!==null?this['paramSlotOf'][SI]:undefined;Sd>=0x0?this['paramEnv']['_$t3TWVK'][Sd]=SM:this['args'][SI]=SM;}else this['extraArgs'][SI]=SM;}return!![];}return q(SF,SW,SM);},c=function(SF,SW){if(SW==='length')return!![];if(SW==='callee')return!this['calleeDeleted'];if(SW===Symbol['toStringTag'])return![];let SM=f(SW);if(Z(SM)){if(String(SM)in SF)return!![];return O(this,SM);}return SW in SF;},x=function(SF,SW,SM){if(SW==='length')return'value'in SM&&(this['argsLength']=SM['value']),'writable'in SM&&(this['lengthWritable']=SM['writable']),S(SF,SW,SM),!![];if(SW==='callee')return'value'in SM&&(this['calleeValue']=SM['value']),this['calleeDeleted']=![],S(SF,SW,SM),!![];let SI=f(SW);if(Z(SI)){let SX='get'in SM||'set'in SM,Sd=D(SF,String(SI)),Sf=SI in this['unmappedIndices']?Sd?Sd['value']:undefined:h(this,SI),SZ=Sd?Sd['writable']!==![]:!![],Sh=Sd?Sd['enumerable']!==![]:!![],SO=Sd?Sd['configurable']!==![]:!![],SP;if(SX)SP=SM,this['unmappedIndices'][SI]=0x1,SI in this['extraArgs']&&delete this['extraArgs'][SI],SI in this['deletedArgs']&&delete this['deletedArgs'][SI];else{let SR='value'in SM?SM['value']:Sf,Sc='writable'in SM?SM['writable']:SZ,Sx='enumerable'in SM?SM['enumerable']:Sh,SL='configurable'in SM?SM['configurable']:SO;SP={'value':SR,'writable':Sc,'enumerable':Sx,'configurable':SL};if('value'in SM){if(!(SI in this['unmappedIndices'])){if(SI<this['entryArgCount']&&!(SI in this['deletedArgs'])){let Sv=this['paramSlotOf']!==null?this['paramSlotOf'][SI]:undefined;Sv>=0x0?this['paramEnv']['_$t3TWVK'][Sv]=SM['value']:this['args'][SI]=SM['value'];}else this['extraArgs'][SI]=SM['value'],SI in this['deletedArgs']&&delete this['deletedArgs'][SI];}}'writable'in SM&&SM['writable']===![]&&(this['unmappedIndices'][SI]=0x1,SI in this['extraArgs']&&delete this['extraArgs'][SI],SI in this['deletedArgs']&&delete this['deletedArgs'][SI]);}return S(SF,String(SI),SP),!![];}return S(SF,SW,SM),!![];},L=function(SF,SW){if(SW==='callee'){if(!p(SF,SW))return![];return this['calleeDeleted']=!![],!![];}let SM=f(SW);if(Z(SM)){let SX=D(SF,String(SM));if(SX&&SX['configurable']===![])return![];return SM in this['unmappedIndices']&&delete this['unmappedIndices'][SM],SM<this['entryArgCount']?this['deletedArgs'][SM]=0x1:delete this['extraArgs'][SM],delete SF[SW],!![];}let SI=D(SF,SW);if(SI&&SI['configurable']===![])return![];return delete SF[SW],!![];},v=function(SF){let SW=this['entryArgCount'];for(let SM=0x0;SM<SW;SM++){!(SM in this['deletedArgs'])&&!D(SF,String(SM))&&S(SF,String(SM),{'value':h(this,SM),'writable':!![],'enumerable':!![],'configurable':!![]});}for(let SI in this['extraArgs']){!D(SF,SI)&&S(SF,SI,{'value':this['extraArgs'][SI],'writable':!![],'enumerable':!![],'configurable':!![]});}return Object['preventExtensions'](SF),!![];},i=function(SF,SW){if(SW==='callee'){if(this['calleeDeleted'])return undefined;return D(SF,'callee');}if(SW==='length')return D(SF,'length');let SM=f(SW);if(Z(SM)){if(SM in this['unmappedIndices'])return D(SF,SW);if(O(this,SM)){let SX=D(SF,String(SM));return{'value':h(this,SM),'writable':SX?SX['writable']:!![],'enumerable':SX?SX['enumerable']:!![],'configurable':SX?SX['configurable']:!![]};}return D(SF,SW);}let SI=D(SF,SW);if(SI)return SI;return undefined;},D0=function(SF,SW){for(let SM=0x0;SM<SF['length'];SM++){if(SF[SM]===SW)return!![];}return![];},D1=function(SF){let SW=[],SM=this['entryArgCount'];for(let SX=0x0;SX<SM;SX++){!(SX in this['deletedArgs'])&&(SW[SW['length']]=String(SX));}for(let Sd in this['extraArgs']){!D0(SW,Sd)&&(SW[SW['length']]=Sd);}SW[SW['length']]='length';!this['calleeDeleted']&&(SW[SW['length']]='callee');let SI=n(SF);for(let Sf=0x0;Sf<SI['length'];Sf++){!D0(SW,SI[Sf])&&(SW[SW['length']]=SI[Sf]);}return SW;},D2=function(SF){throw SF;};var D3=[0x0,0x16,0x0,0x0,0x0,0x0,0x0,0x0,0x5,0x0,0x0,0x0,0x0,0x1f,0x0,0x21,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x19,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x9,0x25,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x1e,0x0,0x0,0x0,0x0,0xf,0x0,0x0,0x0,0x0,0x12,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x7,0x1b,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x1c,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x20,0x0,0x0,0x18,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x14,0x0,0x0,0x1,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x1a,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x15,0x0,0x28,0x0,0x0,0x0,0x0,0x0,0x0,0xd,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x1d,0x0,0x0,0x27,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x13,0x0,0x0,0x0,0x22,0x0,0x0,0x0,0x0,0x0,0x0,0x2a,0x8,0x0,0x0,0x24,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x10,0xe,0x0,0x0,0x0,0x0,0x0,0xb,0x11,0x0,0x0,0x0,0x0,0x0,0xc,0x0,0x0,0x0,0x29,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0xa,0x0,0x6,0x0,0x0,0x26,0x2,0x23,0x0,0x4,0x0,0x0,0x0,0x0,0x0,0x0,0x17,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x3,0x0,0x0];let D4={'__proto__':WeakMap['prototype']},D5={'__proto__':WeakSet['prototype']};function D6(){S(D4,'get',{'__proto__':null,'value':u}),S(D4,'set',{'__proto__':null,'value':T}),S(D4,'has',{'__proto__':null,'value':s}),S(D5,'add',{'__proto__':null,'value':r}),S(D5,'has',{'__proto__':null,'value':G});}let D7=function(){},D8=function(){},D9=WeakMap,DD=WeakSet;D7['prototype']=D4,D8['prototype']=D5;function DS(){return U(D9,[],D7);}function Dr(){return U(DD,[],D8);}let Dn=Dr(),Ds=0x0,Dk=Dr();const Da=DS();function De(SF,SW){Da['set'](SF,SW);}function Dl(SF,SW){return SF['_$RwrNOd']=SW,SW;}function DT(SF){return Da['get'](SF);}function Dw(SF){return Da['has'](SF);}let DU=DS(),DA=[],DQ=Array['prototype'][Symbol['iterator']],DN=Symbol['iterator'],Dg=null;try{let SF=async function*(){};Dg=g(SF)['prototype'];}catch(SW){}let DG=Dg&&Dg['next'],DK=Dg&&Dg['return'],DH=Dg&&Dg['throw'];function Do(SM){return{[Symbol['asyncIterator']]:function(){return this;},'next':function(SI){return w(DG,SM,[SI]);},'return':function(SI){return w(DK,SM,[SI]);},'throw':function(SI){return w(DH,SM,[SI]);}};}function DB(SM,SI,SX){try{S(SM,SI,SX);}catch(Sd){}}function Du(SM,SI,SX,Sd){let Sf=new Array(SX),SZ=![];for(let SO=0x0;SO<SX;SO++){let SP=Sd===undefined?SM[SI+SO]:Sd(SM[SI+SO]);Ds!==0x0&&SP&&typeof SP==='object'&&Dn['has'](SP)&&(SZ=!![]),Sf[SO]=SP;}if(!SZ)return Sf;let Sh=[];for(let SR=0x0;SR<SX;SR++){let Sc=Sf[SR];if(Sc&&typeof Sc==='object'&&Dn['has'](Sc)){Ds--;let Sx=Sc['value'];if(Array['isArray'](Sx)){for(let SL=0x0;SL<Sx['length'];SL++)Sh[Sh['length']]=Sx[SL];}}else Sh[Sh['length']]=Sc;}return Sh;}function Dp(SM){return typeof SM==='object'||typeof SM==='function';}function Dq(SM,SI){return SM&&Dp(SM)?SM:SI;}function DC(SM){if(SM===null||typeof SM!=='object'&&typeof SM!=='function')throw new TypeError('Iterator\x20result\x20'+SM+'\x20is\x20not\x20an\x20object');}function DE(SM){let SI=SM['done'];return{'done':SI,'value':SI?SM['value']:undefined};}function Dm(SM){let SI=[];for(let SX in SM){SI[SI['length']]=SX;}return SI;}const Dj=Array['isArray'];function DJ(SM){let SI=SM['length'],SX=new Array(SI);for(let Sd=0x0;Sd<SI;Sd++){SX[Sd]=SM[Sd];}return SX;}function DY(SM){return typeof SM==='function'&&SM['prototype']?SM['prototype']:SM;}function Dt(SM,SI,SX,Sd,Sf){if(!SM||SI[0x6*Sd+Sf&0x1f]||SI[0x1*Sd+Sf&0x1f]||SI[0x7*Sd+Sf&0x1f])return;if(!Dw(SM)){if(SX&&SX['_$HpuG5m'])return;De(SM,{['_$sTz7d4']:SI,['_$yDTK6f']:SX,['_$RwrNOd']:SI,['_$9S5Qse']:undefined});}}function Db(SM,SI,SX,Sd,Sf,SZ,Sh,SO){let SP,SR=function(Sc,Sx,SL){let Sv=SL!==undefined?SL:_$3QlniP['_$A5F57A'];return SL===undefined&&_$3QlniP['_$A5F57A']!==undefined&&_$3QlniP['_$xeFEt7']===undefined&&(_$3QlniP['_$A5F57A']=undefined),SM(SP,SI,Sv,Sx,SX,Sc);};if(SZ){SP=_$JX84S5(SR,Sd,Sh,SO);try{delete SP['prototype'];}catch(Sc){}}else SP=_$ucC5Yj(SR,Sd,Sh,SO);return De(SP,{['_$sTz7d4']:SI,['_$yDTK6f']:SX,['_$RwrNOd']:undefined,['_$9S5Qse']:undefined}),SP;}function Dz(SM,SI,SX,Sd,Sf,SZ,Sh){let SO=function(SR,Sc,Sx){let SL=Sx!==undefined?Sx:_$3QlniP['_$A5F57A'];return Sx===undefined&&_$3QlniP['_$A5F57A']!==undefined&&_$3QlniP['_$xeFEt7']===undefined&&(_$3QlniP['_$A5F57A']=undefined),SM(SP,SI,SL,Sc,SX,SR,undefined);},SP=_$Q1tjKT(SO,Sd,SZ,Sh);return SP;}function Dy(SM,SI,SX,Sd,Sf,SZ,Sh,SO,SP){let SR=function(Sx,SL){return SM(Sc,SI,Sh,SL,SX,Sx,_$3QlniP['_$BhcOxS']);},Sc=_$LUb5LD(SR,Sf,SO,SP);return Sd['add'](Sc),Sc;}function DV(SM,SI,SX,Sd,Sf,SZ){let Sh=_$3QlniP['_$BhcOxS'],SO,SP=function(SR,Sc){if(Sh===undefined)return SM(SO,SI,undefined,Sc,SX,Sd);let Sx=_$3QlniP['_$BhcOxS'];_$3QlniP['_$LlWrTr']=!![],_$3QlniP['_$BhcOxS']=Sh;try{return SM(SO,SI,undefined,Sc,SX,Sd);}finally{_$3QlniP['_$BhcOxS']=Sx;}};return SO=_$JX84S5(SP,!![],Sf,SZ),SO;}function DF(SM,SI,SX,Sd,Sf,SZ){let Sh=function(SP,SR){return SM(SO,SI,undefined,SR,SX,Sd,undefined);},SO=_$Q1tjKT(Sh,!![],Sf,SZ);return SO;}function DW(SM,SI,SX,Sd,Sf,SZ,Sh,SO,SP){var SR=0x0,Sc,Sx,SL,Sv,Si,r0,r1,r2,r3,r4=0x0,r5,r6,r7,r8,r9,rD,rS,rr,rn,rs,rk,ra,re,rl,rT,rw,rU,rA,rQ,rN,rg,rG,rK,rH,ro,rB,ru,rp,rq,rC,rE,rm;if(Sh===undefined){SR=0x0,Sc=(SI[0x20]||0x0)+(SI[0x21]||0x0),Sx=Sc<=0x8?[undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined]:Sc<=0x18?[undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined]:new Array(Sc+0x8)['fill'](undefined),SR=Sc,SL=Sp(SI[0x20],SI[0x21]),Sv=Sq(SI[0x20],SI[0x21]);switch(Sv&0x3){case 0x0:r0=SI[0xc*SL+Sv&0x1f],Si=SI[0xe*SL+Sv&0x1f],r1=SI[0xa*SL+Sv&0x1f]||I,r2=SI[0x16*SL+Sv&0x1f]||I;break;case 0x1:Si=SI[0xe*SL+Sv&0x1f],r1=SI[0xa*SL+Sv&0x1f]||I,r2=SI[0x16*SL+Sv&0x1f]||I,r0=SI[0xc*SL+Sv&0x1f];break;case 0x2:r1=SI[0xa*SL+Sv&0x1f]||I,r2=SI[0x16*SL+Sv&0x1f]||I,r0=SI[0xc*SL+Sv&0x1f],Si=SI[0xe*SL+Sv&0x1f];break;default:r2=SI[0x16*SL+Sv&0x1f]||I,r0=SI[0xc*SL+Sv&0x1f],Si=SI[0xe*SL+Sv&0x1f],r1=SI[0xa*SL+Sv&0x1f]||I;break;}r3=Sx,r4=0x0,r5=r0['length']>>0x1,r6=(SI[0x20]*0x1993^SI[0x21]*0xb457^r5*0x3e11^Si['length']*0xbf81)>>>0x0&0x3;switch(r6){case 0x1:r7=0x1,r8=0x0,r9=0x1;break;case 0x2:r7=0x0,r8=0x1,r9=0x1;break;case 0x3:r7=0x0,r8=r5,r9=0x0;break;default:r7=r5,r8=0x0,r9=0x0;break;}rD=null,rS=null,rr=![],rn=undefined,rs=![],rk=0x0,ra=undefined,re=![],rl=0x0,rT=undefined,rw=-0x1,rU=-0x1,rA=!!SI[0xf*SL+Sv&0x1f],rQ=!!SI[0x3*SL+Sv&0x1f],rN=!!SI[0xd*SL+Sv&0x1f],rg=!!SI[0x2*SL+Sv&0x1f],rG=SZ,rK=!!SI[0x7*SL+Sv&0x1f];!rA&&!rK&&(SZ===undefined||SZ===null)&&(SZ=vml);rH=SI[0x12*SL+Sv&0x1f]||0x0,ro={'_$t3TWVK':rH?new Array(rH)['fill'](undefined):I,'_$Qy1ct1':null,'_$WMW0CA':-0x1,'_$lXdQHz':Sf};if(Sd){let rF=SI[0x20]||0x0;for(let rW=0x0,rM=Sd['length']<rF?Sd['length']:rF;rW<rM;rW++){r3[rW]=Sd[rW];}}rB=Sd?Sd['length']:0x0,ru=null,rp=null,rq=![],rC=(SI[0x20]||0x0)+(SI[0x21]||0x0),rE=null,rm=0x0;}else Sc=Sh[0x1c],SL=Sh[0x1d]>>>0x0,Sv=Sh[0x1e]>>>0x0,Si=Sh[0x1f],r0=Sh[0x20],r1=Sh[0x21],r2=Sh[0x22],r5=Sh[0x23]|0x0,r6=Sh[0x24]|0x0,r7=Sh[0x25]|0x0,r8=Sh[0x26]|0x0,r9=Sh[0x27]|0x0,rA=!!Sh[0x28],rQ=!!Sh[0x29],rN=!!Sh[0x2a],rg=!!Sh[0x2b],rK=!!Sh[0x2c],rH=Sh[0x2d]|0x0,rC=Sh[0x2e]|0x0;if(Sh!==undefined){Sd=Sh[0x0],SZ=Sh[0x1],rG=Sh[0x2],Sx=Sh[0x3],SR=Sh[0x4],r3=Sh[0x5],r4=Sh[0x6],rD=Sh[0x7],ro=Sh[0x8],rB=Sh[0x9],ru=Sh[0xa],rp=Sh[0xb],rq=Sh[0xc],rE=Sh[0xd],rm=Sh[0xe];Sh[0x10]?(rS=Sh[0x11],rr=Sh[0x12],rn=Sh[0x13],rs=Sh[0x14],rk=Sh[0x15],ra=Sh[0x16],re=Sh[0x17],rl=Sh[0x18],rT=Sh[0x19],rw=Sh[0x1a],rU=Sh[0x1b]):(rS=null,rr=![],rn=undefined,rs=![],rk=0x0,ra=undefined,re=![],rl=0x0,rT=undefined,rw=-0x1,rU=-0x1);if(SO===0x1)Sx[SR++]=SP;else{if(SO===0x2){if(rD){let rI=rD;SR=rI['_$0TWzdh'];rI['_$smqBSv']!==undefined&&(ro=rI['_$smqBSv']);if(rI['_$B7707K']!==undefined){Sx[SR++]=SP,r4=rI['_$B7707K'],rI['_$B7707K']=undefined;if(rI['_$mxKKkW']===undefined){if(rD)rD=rD['_$glYWPl'];}}else{if(rI['_$mxKKkW']!==undefined)r4=rI['_$mxKKkW'],rI['_$ASIdqh']=SP;else{r4=rI['_$USabN6'];if(rD)rD=rD['_$glYWPl'];}}}else throw D2(SP);}else{if(SO===0x3){let rX=SP;while(rD){let rd=rD;if(rd['_$mxKKkW']!==undefined)break;if(rD)rD=rD['_$glYWPl'];}if(rD){let rf=rD;if(rf['_$mxKKkW']!==undefined)rS=null,rs=![],rk=0x0,ra=undefined,re=![],rl=0x0,rT=undefined,rr=!![],rn=rX,rw=rf['_$Sxv7xi'],rU=rf['_$USabN6'],r4=rf['_$mxKKkW'];else return rX;}else return rX;}}}}var rj,rJ,rY,rt,rb,rz,ry;ry=Sx,rt=D3,rJ=function(rZ,rh){let rO=rb,rP=rz,rR=ry;try{switch(rZ){case 0xe:{let rc=rR[--rP],rx=rR[--rP];rR[rP++]=rx<<rc,rO++;break;}case 0x4:{let rL=rR[--rP],rv=rR[--rP];rR[rP++]=rv<=rL,rO++;break;}case 0x36:{rR[rP++]=Si[rh],rO++;break;}case 0x7b:{let ri=rR[--rP],n0=rR[rP-0x1];(ri===null||Dp(ri))&&o(n0,ri);rO++;break;}case 0x79:{let n1=rR[--rP];rR[rP++]=!!n1['done'],rO++;break;}case 0x78:{let n2=rR[--rP],n3=rR[rP-0x1],n4=Si[rh],n5=DY(n3);S(n5,n4,{'set':n2,'enumerable':n5===n3,'configurable':!![]}),rO++;break;}case 0x68:{let n6=rR[--rP];if((typeof n6==='object'||typeof n6==='function')&&n6!==null){const n7=n6[Symbol['toPrimitive']];if(n7!=null){n6=w(n7,n6,['number']);if(n6!==null&&(typeof n6==='object'||typeof n6==='function'))throw new TypeError('Cannot\x20convert\x20object\x20to\x20primitive\x20value');}else{const n8=n6['valueOf'];let n9=typeof n8==='function'?w(n8,n6,[]):n6;if(n9!==null&&(typeof n9==='object'||typeof n9==='function')){const nD=n6['toString'];n9=typeof nD==='function'?w(nD,n6,[]):n9;if(n9!==null&&(typeof n9==='object'||typeof n9==='function'))throw new TypeError('Cannot\x20convert\x20object\x20to\x20primitive\x20value');}n6=n9;}}rR[rP++]=typeof n6===M?n6:+n6,rO++;break;}case 0x28:{let nS=rR[--rP],nr=rR[--rP];rR[rP++]=nr==null?nS!==nr:nr!==nS,rO++;break;}case 0xb:{let nn=rR[--rP],ns=rR[--rP];rR[rP++]=ns-nn,rO++;break;}case 0x6b:{let nk=rR[--rP],na=rR[--rP],ne=rR[rP-0x1],nl=DY(ne);!(rh===0x1)&&DB(nk,'name',{'value':'get\x20'+(typeof na==='symbol'?na['description']===undefined?'':'['+na['description']+']':''+na),'writable':![],'enumerable':![],'configurable':!![]});S(nl,na,{'get':nk,'enumerable':nl===ne,'configurable':!![]}),rO++;break;}case 0x6f:{let nT=rR[--rP],nw;if(nT===0x0)nw=I;else{if(nT===0x1){let nK=rR[--rP];nw=Ds!==0x0&&nK&&typeof nK==='object'&&Dn['has'](nK)?(Ds--,nK['value']):[nK];}else nw=Du(rR,rP-=nT,nT);}let nU=rR[--rP],nA=rR[--rP];if(typeof nU!=='function')throw new TypeError(nU+'\x20is\x20not\x20a\x20function');let nQ=_$3QlniP['_$JEq5Xp'],nN=nQ&&nQ['get'](nU);!nN&&nQ&&(nU===A||nU===Q)&&(nN=nQ['get'](nA));let ng=_$3QlniP['_$BhcOxS'];nN&&(_$3QlniP['_$LlWrTr']=!![],_$3QlniP['_$BhcOxS']=nN);let nG;try{nG=w(nU,nA,nw),rR[rP++]=nG;}finally{nN&&(_$3QlniP['_$LlWrTr']=![]),_$3QlniP['_$BhcOxS']=ng;}rO++;break;}case 0x2e:{let nH=rR[--rP],no=rR[--rP];rR[rP++]=no!=nH,rO++;break;}case 0x84:{rO++;break;}case 0x37:{rR[rP++]=vmw[rh],rO++;break;}case 0x3f:{let nB=rR[--rP],nu=rR[--rP];rR[rP++]=nu^nB,rO++;break;}case 0x92:{rO=r1[rO];break;}case 0x4a:{if(rp===null){if(rA||!rQ){let np=ru||Sd||I;if(np['length']<=0x2000)rp=w(d,undefined,np);else{rp=d();for(let nq=0x0;nq<np['length'];nq++){rp[nq]=np[nq];}rp['length']=np['length'];}}else{Sd&&!Dj(Sd)&&(Sd=DJ(Sd));let nC=null,nE=null;if(rh!==0x0){nC=ro;for(let nY=rh&0xff;nY>0x0;nY--){nC=nC['_$lXdQHz'];}let nj=(rh>>>0x8)-0x1,nJ=Si[nj];nE=[];for(let nt=0x0;nt<nJ;nt++){nE[nt]=Si[nj+0x1+nt];}}let nm={};S(nm,'length',{'value':rB,'writable':!![],'enumerable':![],'configurable':!![]}),S(nm,'callee',{'value':SM,'writable':!![],'enumerable':![],'configurable':!![]}),S(nm,Symbol['iterator'],{'value':N,'writable':!![],'enumerable':![],'configurable':!![]}),rp=new K(nm,{'get':P,'set':R,'has':c,'defineProperty':x,'deleteProperty':L,'preventExtensions':v,'getOwnPropertyDescriptor':i,'ownKeys':D1,'argsLength':rB,'entryArgCount':rB,'args':Sd,'extraArgs':{},'deletedArgs':{},'unmappedIndices':{},'calleeValue':SM,'calleeDeleted':![],'lengthWritable':!![],'paramEnv':nC,'paramSlotOf':nE});}}rR[rP++]=rp,rO++;break;}case 0x14:{let nb=rR[--rP],nz=rR[--rP];rR[rP++]=nz|nb,rO++;break;}case 0x5e:{rR[--rP]?rO=r1[rO]:rO++;break;}case 0x2b:{rR[rP++]=SZ,rO++;break;}case 0x2a:{rR[--rP],rO++;break;}case 0x8c:{let ny=rR[--rP],nV=rR[--rP],nF=rR[--rP];if(rh&0x1&&typeof ny==='function'){let nW=typeof nV==='symbol'?nV['description']===undefined?'':'['+nV['description']+']':''+nV;DB(ny,'name',{'value':nW,'writable':![],'enumerable':![],'configurable':!![]});}S(nF,nV,{'value':ny,'writable':!![],'enumerable':!![],'configurable':!![]});rh&0x2&&(!_$3QlniP['_$JEq5Xp']&&(_$3QlniP['_$JEq5Xp']=DS()),_$3QlniP['_$JEq5Xp']['set'](ny,nF));rO++;break;}case 0x40:{let nM=rh&0xffff,nI=ro['_$t3TWVK'];nI[nM]=nI;let nX=rh>>>0x10;nX&&((ro['_$yk5uFw']||(ro['_$yk5uFw']={}))[nM]=Si[nX-0x1]);rO++;break;}case 0x38:{let nd=rh;ro['_$t3TWVK'][nd]=SM;let nf=ro['_$Qy1ct1'];!nf&&(nf=a(null),ro['_$Qy1ct1']=nf);nf[nd]=0x2,rO++;break;}case 0x1:{let nZ=rR[--rP],nh=rR[--rP];if(nh===null||nh===undefined){if(nZ===Symbol['iterator'])throw new TypeError((nh===null?'object\x20null':'undefined')+'\x20is\x20not\x20iterable\x20(cannot\x20read\x20property\x20Symbol(Symbol.iterator))');throw new TypeError('Cannot\x20read\x20properties\x20of\x20'+nh+'\x20(reading\x20'+(typeof nZ==='symbol'?'\x27'+nZ['toString']()+'\x27':typeof nZ==='string'?'\x27'+nZ+'\x27':typeof nZ==='object'||typeof nZ==='function'?'\x27<computed\x20key>\x27':'\x27'+String(nZ)+'\x27')+')');}rR[rP++]=nh[nZ],rO++;break;}case 0xc9:{let nO=rR[--rP];rR[rP++]=Dm(nO),rO++;break;}case 0xa4:{let nP=rR[--rP],nR=rR[--rP],nc=(rh^0xf819)>>>0x0,nx;nc<0x10?nc<0x8?nc<0x4?nc<0x2?nx=nc<0x1?nR<=nP:nR!=nP:nx=nc<0x3?nR>>>nP:nR&nP:nc<0x6?nx=nc<0x5?nR|nP:nR**nP:nx=nc<0x7?nR*nP:nR<<nP:nc<0xc?nc<0xa?nx=nc<0x9?nR/nP:nR==null?nP===nR:nR===nP:nx=nc<0xb?nR>=nP:nR>>nP:nc<0xe?nx=nc<0xd?nR==null?nP!==nR:nR!==nP:nR+nP:nx=nc<0xf?nR%nP:nR-nP:nc<0x14?nc<0x12?nx=nc<0x11?nR==nP:nR^nP:nx=nc<0x13?nR>nP:nR<nP:nc<0x18?nx=nc<0x16?nR|nP:nR&nP:nx=nc<0x1c?nR^nP:nP-nR;rR[rP++]=nx,rO++;break;}case 0x91:{let nL=rR[--rP],nv=rR[--rP];rR[rP++]=nv+nL,rO++;break;}case 0x7a:{if(rD){let ni=rD;if(ni['_$mxKKkW']===rO){ni['_$ASIdqh']!==undefined&&(rS=ni['_$ASIdqh'],rw=ni['_$Sxv7xi'],rU=ni['_$USabN6']);ni['_$smqBSv']!==undefined&&(ro=ni['_$smqBSv']);if(rD)rD=rD['_$glYWPl'];}}rO++;break;}case 0x2f:{let s0=rR[--rP],s1=Du(rR,rP-=s0,s0),s2=rR[--rP];if(typeof s2!=='function')throw new TypeError(s2+'\x20is\x20not\x20a\x20constructor');if(Dk['has'](s2))throw new TypeError(s2['name']+'\x20is\x20not\x20a\x20constructor');let s3=_$3QlniP['_$BhcOxS'];_$3QlniP['_$BhcOxS']=undefined;let s4;try{s4=U(s2,s1);}finally{_$3QlniP['_$BhcOxS']=s3;}rR[rP++]=s4,rO++;break;}case 0x17:{let s5=r2[rO];rD={'_$glYWPl':rD,'_$B7707K':s5[0x0]>=0x0?s5[0x0]:undefined,'_$mxKKkW':s5[0x1]>=0x0?s5[0x1]:undefined,'_$USabN6':s5[0x2]>=0x0?s5[0x2]:undefined,'_$0TWzdh':rP,'_$Sxv7xi':rO,'_$smqBSv':ro},rO++;break;}case 0x3a:{rR[rP++]=vmT[rh],rO++;break;}case 0x0:{let s6=Si[rh],s7=!![];s6 in vml&&(s7=_$gHYCss(vml,s6));s7&&s6 in vmk_e7381c&&(s7=_$gHYCss(vmk_e7381c,s6));rR[rP++]=s7,rO++;break;}case 0xd5:{let s8=r3[rh],s9=s8&&s8['_$h5SdSA'];if(s9!==undefined){let sD=s8['_$UnBeYh'];sD>=s9['length']?rO=r1[rO]:(s8['_$UnBeYh']=sD+0x1,rR[rP++]=s9[sD],rO++);}else{let sS=s8['i'],sr=w(s8['n'],sS,[]);DC(sr),sr['done']?rO=r1[rO]:(rR[rP++]=sr['value'],rO++);}break;}case 0x7:{let sn=rR[--rP],ss=rR[--rP];rR[rP++]=ss<sn,rO++;break;}case 0x8f:{let sk=rR[rP-0x1];rR[rP-0x1]=rR[rP-0x2],rR[rP-0x2]=sk,rO++;break;}case 0x48:{let sa=rR[--rP],se=sa,sl=0x0&&typeof sa!=='object'?Sj(sa,0x1):undefined,sT,sw,sU,sA,sQ,sN,sg,sG;if(sl)sw=sl[0x0]&0x1,sU=sl[0x0]&0x2,sA=sl[0x0]&0x4,sQ=sl[0x0]&0x8,sg=sl[0x0]&0x10,sN=sl[0x1]||0x0,sG=sl[0x2]||undefined,sT={'n':sa};else{sT=typeof sa==='object'?sa:Sj(sa);let su=sT?Sp(sT[0x20],sT[0x21]):undefined,sp=sT?Sq(sT[0x20],sT[0x21]):undefined;sw=sT&&sT[0x7*su+sp&0x1f],sU=sT&&sT[0x6*su+sp&0x1f],sA=sT&&sT[0x1*su+sp&0x1f],sQ=sT&&sT[0x13*su+sp&0x1f],sN=sT&&sT[0x20]||0x0,sg=sT&&sT[0xf*su+sp&0x1f];let sq=sT&&sT[0x0*su+sp&0x1f];sG=sq!==undefined?sT[0xe*su+sp&0x1f][sq]:undefined;}sa=0x0&&typeof se!=='object'?{'n':se}:sT;let sK=sw?rG:undefined,sH=ro,so=sG===undefined?'':sG,sB;if(sA)sB=Dy(Sy,sa,sH,Dk,sg,vml,sU,so,sN);else{if(sU)sw?sB=DF(St,sa,sH,sK,so,sN):sB=Dz(St,sa,sH,sg,vml,so,sN);else{if(sw){sB=DV(DX,sa,sH,sK,so,sN);let sC=_$3QlniP['_$xeFEt7'];sC===undefined&&SM&&DU['has'](SM)&&(sC=DU['get'](SM)),sC!==undefined&&DU['set'](sB,sC);}else sB=Db(DX,sa,sH,sg,vml,sQ,so,sN);}}sN>0x3&&DB(sB,'length',{'value':sN,'writable':![],'enumerable':![],'configurable':!![]});rR[rP++]=sB,rO++;break;}case 0x1c:{!rR[--rP]?rO=r1[rO]:rO++;break;}case 0x5f:{rR[rP++]=rG,rO++;break;}case 0x53:{let sE=rR[--rP],sm=rR[--rP];rR[rP++]=sm/sE,rO++;break;}case 0x1d:{D:{let sj=r1[rO];if(sj===rU){if(rS!==null){rr=![],rs=![],re=![];let sJ=rS;rS=null;throw D2(sJ);}if(rr){while(rD){let st=rD;if(st['_$mxKKkW']!==undefined)break;if(rD)rD=rD['_$glYWPl'];}if(rD){let sb=rD;if(sb['_$mxKKkW']!==undefined){rw=sb['_$Sxv7xi'],rU=sb['_$USabN6'],rO=sb['_$mxKKkW'];break D;}}let sY=rn;return rr=![],rn=undefined,rj=sY,0x1;}if(rs){while(rD){let sy=rD;if(sy['_$mxKKkW']!==undefined||!(rk>=sy['_$USabN6']||rk<=sy['_$Sxv7xi']))break;if(rD)rD=rD['_$glYWPl'];}if(rD){let sV=rD;if(sV['_$mxKKkW']!==undefined&&(rk>=sV['_$USabN6']||rk<=sV['_$Sxv7xi'])){rw=sV['_$Sxv7xi'],rU=sV['_$USabN6'],rO=sV['_$mxKKkW'];break D;}}let sz=rk;rs=![],rk=0x0;ra!==undefined&&(ro=ra,ra=undefined);rO=sz;break D;}if(re){while(rD){let sW=rD;if(sW['_$mxKKkW']!==undefined||!(rl>=sW['_$USabN6']||rl<=sW['_$Sxv7xi']))break;if(rD)rD=rD['_$glYWPl'];}if(rD){let sM=rD;if(sM['_$mxKKkW']!==undefined&&(rl>=sM['_$USabN6']||rl<=sM['_$Sxv7xi'])){rw=sM['_$Sxv7xi'],rU=sM['_$USabN6'],rO=sM['_$mxKKkW'];break D;}}let sF=rl;re=![],rl=0x0;rT!==undefined&&(ro=rT,rT=undefined);rO=sF;break D;}}rO++;}break;}case 0x3b:{let sI=rR[--rP],sX={'_$t3TWVK':new Array(rh),'_$Qy1ct1':null,'_$WMW0CA':-0x1,'_$lXdQHz':sI};ro=sX,rO++;break;}case 0x82:{let sd=rR[--rP],sf=rR[--rP];rR[rP++]=sf>=sd,rO++;break;}case 0x2d:{let sZ=rR[--rP],sh=rR[--rP];rR[rP++]=sZ==null||typeof sZ!=='object'&&typeof sZ!=='function'?!![]:sh in sZ,rO++;break;}case 0x8e:{let sO=rR[--rP],sP=rR[--rP];rR[rP++]=sP%sO,rO++;break;}case 0x93:{rR[rP-0x1]=+rR[rP-0x1],rO++;break;}case 0x1a:{let sR=rR[--rP],sc=Si[rh];if(rA&&!(sc in vml)&&!(sc in vmk_e7381c))throw new ReferenceError(sc+'\x20is\x20not\x20defined');vmk_e7381c[sc]=sR;rA?vml[sc]=sR:_$hu2PCO(vml,sc,sR);rR[rP++]=sR,rO++;break;}case 0xf:{let sx=rR[--rP],sL=rR[--rP],sv=Si[rh];if(sL===null||sL===undefined)throw new TypeError('Cannot\x20set\x20properties\x20of\x20'+sL+'\x20(setting\x20'+'\x27'+String(sv)+'\x27'+')');rA?sL[sv]=sx:_$hu2PCO(sL,sv,sx);rR[rP++]=sx,rO++;break;}case 0xb5:{let si=rR[--rP],k0=rR[rP-0x1],k1=Si[rh&0xffffff];k1 in k0?S(k0,k1,{'value':si,'writable':!![],'enumerable':!![],'configurable':!![]}):k0[k1]=si;rh&0x1000000&&(!_$3QlniP['_$JEq5Xp']&&(_$3QlniP['_$JEq5Xp']=DS()),_$3QlniP['_$JEq5Xp']['set'](si,k0));rO++;break;}case 0x8:{let k2=rR[rP-0x3],k3=rR[rP-0x2],k4=rR[rP-0x1];rR[rP-0x3]=k3,rR[rP-0x2]=k4,rR[rP-0x1]=k2,rO++;break;}case 0xb4:{let k5,k6;rh>=0x0?(k6=rR[--rP],k5=Si[rh]):(k5=rR[--rP],k6=rR[--rP]);let k7=rA?delete k6[k5]:_$gHYCss(k6,k5);rR[rP++]=k7,rO++;break;}case 0xa3:{let k8=rR[--rP],k9=rR[--rP];rR[rP++]=k9>>>k8,rO++;break;}case 0xa1:{rR[rP++]=Sd[rh],rO++;break;}case 0x5d:{rR[rP++]=ro,rO++;break;}case 0x4f:{let kD=rR[rP-0x1];kD['length']++,rO++;break;}case 0x3:{S:{let kS=r1[rO];while(rD){let kr=rD;if(kr['_$mxKKkW']!==undefined||!(kS>=kr['_$USabN6']||kS<=kr['_$Sxv7xi']))break;if(rD)rD=rD['_$glYWPl'];}if(rD){let kn=rD;if(kn['_$mxKKkW']!==undefined&&(kS>=kn['_$USabN6']||kS<=kn['_$Sxv7xi'])){rS=null,rr=![],rn=undefined,re=![],rl=0x0,rT=undefined,rs=!![],rk=kS,ra=ro,rw=kn['_$Sxv7xi'],rU=kn['_$USabN6'],rO=kn['_$mxKKkW'];break S;}}(rr||rs||re||rS!==null)&&(kS>=rU||kS<=rw)&&(rr=![],rn=undefined,rs=![],rk=0x0,ra=undefined,re=![],rl=0x0,rT=undefined,rS=null),rO=kS;}break;}case 0xd:{let ks=rR[--rP];if((typeof ks==='object'||typeof ks==='function')&&ks!==null){const kk=ks[Symbol['toPrimitive']];if(kk!=null){ks=w(kk,ks,['number']);if(ks!==null&&(typeof ks==='object'||typeof ks==='function'))throw new TypeError('Cannot\x20convert\x20object\x20to\x20primitive\x20value');}else{const ka=ks['valueOf'];let ke=typeof ka==='function'?w(ka,ks,[]):ks;if(ke!==null&&(typeof ke==='object'||typeof ke==='function')){const kl=ks['toString'];ke=typeof kl==='function'?w(kl,ks,[]):ke;if(ke!==null&&(typeof ke==='object'||typeof ke==='function'))throw new TypeError('Cannot\x20convert\x20object\x20to\x20primitive\x20value');}ks=ke;}}rR[rP++]=typeof ks===M?ks-0x1n:+ks-0x1,rO++;break;}case 0x3d:{let kT=rR[--rP],kw=rR[rP-0x1];kw[kw['length']]=kT,rO++;break;}}}finally{rb=rO,rz=rP;}},rY=function(rZ,rh){let rO=rb,rP=rz,rR=ry;try{switch(rZ){case 0x173:{let rc=rR[--rP],rx=rR[--rP],rL=rR[rP-0x1],rv=DY(rL);!(rh===0x1)&&DB(rc,'name',{'value':'set\x20'+(typeof rx==='symbol'?rx['description']===undefined?'':'['+rx['description']+']':''+rx),'writable':![],'enumerable':![],'configurable':!![]});S(rv,rx,{'set':rc,'enumerable':rv===rL,'configurable':!![]}),rO++;break;}case 0x169:{let ri=Si[rh],n0;if(_$3QlniP['_$nNZUvL']&&ri in _$3QlniP['_$nNZUvL'])throw new ReferenceError('Cannot\x20access\x20\x27'+ri+'\x27\x20before\x20initialization');if(ri in vmk_e7381c)n0=vmk_e7381c[ri];else{if(ri in vml)n0=vml[ri];else throw new ReferenceError(ri+'\x20is\x20not\x20defined');}rR[rP++]=n0,rO++;break;}case 0x116:{let n1=ro['_$t3TWVK'];n1[rh]=n1,ro['_$WMW0CA']=rh,rO++;break;}case 0x15d:{let n2=rR[--rP],n3=rR[--rP];rR[rP++]=n3>n2,rO++;break;}case 0x167:{let n4=rR[--rP],n5=Si[rh];if(n4===null||n4===undefined)throw new TypeError('Cannot\x20read\x20properties\x20of\x20'+n4+'\x20(reading\x20'+'\x27'+String(n5)+'\x27'+')');rR[rP++]=n4[n5],rO++;break;}case 0xfc:{let n6=ru||Sd,n7=n6?n6['length']:0x0,n8=[];for(let n9=rh;n9<n7;n9++){n8[n9-rh]=n6[n9];}rR[rP++]=n8,rO++;break;}case 0x166:{let nD=rR[--rP],nS=nD&&nD['_$h5SdSA'];if(nS!==undefined){let nr=nD['_$UnBeYh'],nn;nr>=nS['length']?nn={'value':undefined,'done':!![]}:(nD['_$UnBeYh']=nr+0x1,nn={'value':nS[nr],'done':![]}),rR[rP++]=nn,rO++;}else{let ns=nD&&nD['i']?nD['i']:nD,nk=nD&&nD['n']?nD['n']:ns&&ns['next'];if(typeof nk!=='function')throw new TypeError('iterator.next\x20is\x20not\x20a\x20function');let na=w(nk,ns,[]);DC(na),rR[rP++]=na,rO++;}break;}case 0x165:{let ne=rR[--rP];if(ne==null)throw new TypeError(ne+'\x20is\x20not\x20iterable');let nl=ne[DN];if(Array['isArray'](ne)&&nl===DQ)rR[rP++]={'_$h5SdSA':ne,'_$UnBeYh':0x0},rO++;else{if(typeof nl!=='function')throw new TypeError(ne+'\x20is\x20not\x20iterable');let nT=w(nl,ne,[]);DC(nT);let nw=nT['next'];rR[rP++]={'i':nT,'n':nw},rO++;}break;}case 0x114:{let nU=rR[--rP],nA=rR[--rP],nQ=Si[rh&0xffffff];S(nA,nQ,{'value':nU,'writable':!![],'enumerable':!![],'configurable':!![]});rh&0x1000000&&(!_$3QlniP['_$JEq5Xp']&&(_$3QlniP['_$JEq5Xp']=DS()),_$3QlniP['_$JEq5Xp']['set'](nU,nA));rO++;break;}case 0x14c:{rR[--rP],rR[rP++]=undefined,rO++;break;}case 0xdc:{let nN=Si[rh],ng=_$SDXiZG===vml;ng&&(nN in vml&&(ng=_$gHYCss(vml,nN)),ng&&nN in vmk_e7381c&&(ng=_$gHYCss(vmk_e7381c,nN)));rR[rP++]=ng,rO++;break;}case 0x157:{let nG=rR[--rP],nK=rR[--rP],nH=rR[--rP];if(nH===null||nH===undefined)throw new TypeError('Cannot\x20set\x20properties\x20of\x20'+nH+'\x20(setting\x20'+(typeof nK==='symbol'?'\x27'+nK['toString']()+'\x27':typeof nK==='string'?'\x27'+nK+'\x27':typeof nK==='object'||typeof nK==='function'?'\x27<computed\x20key>\x27':'\x27'+String(nK)+'\x27')+')');rA?nH[nK]=nG:_$hu2PCO(nH,nK,nG);rR[rP++]=nG,rO++;break;}case 0x17a:{let no=rR[--rP],nB=rR[--rP];rR[rP++]=nB==null?no===nB:nB===no,rO++;break;}case 0x17d:{let nu=rh,np=rR[--rP];ro['_$t3TWVK'][nu]=np,rO++;break;}case 0x111:{let nq=rR[--rP],nC=rR[--rP];rR[rP++]=nC&nq,rO++;break;}case 0x10a:{let nE=rh&0xffff,nm=rh>>>0x10,nj=rR[--rP],nJ=ro;for(let nz=0x0;nz<nm;nz++){nJ=nJ['_$lXdQHz'];}let nY=nJ['_$t3TWVK'];if(nY[nE]===nY){let ny=nJ['_$yk5uFw'];throw new ReferenceError('Cannot\x20access\x20\x27'+(ny&&ny[nE]||'variable')+'\x27\x20before\x20initialization');}let nt=nJ['_$Qy1ct1'],nb=nt&&nt[nE];if(nb){if(nb!==0x2||rA)throw new TypeError('Assignment\x20to\x20constant\x20variable.');}else nY[nE]=nj;rO++;break;}case 0x158:{let nV=rR[--rP],nF=typeof nV;if(nV!==null&&(nF==='object'||nF==='function')){let nW=a(null);nW[nV]=0x0,nV=n(nW)[0x0];}else nF!=='symbol'&&(nV=String(nV));rR[rP++]=nV,rO++;break;}case 0x156:{let nM=rR[--rP],nI=rR[--rP];rR[rP++]=nI==nM,rO++;break;}case 0x112:{D:{let nX=rR[--rP],nd,nf;if(nX===0x1)nd=rR[--rP];else nX>0x1&&(nf=Du(rR,rP-=nX,nX));let nZ=rR[--rP];if(typeof nZ!=='function')throw new TypeError(nZ+'\x20is\x20not\x20a\x20function');if(nZ===SM&&rm<0x100&&SI[0x17*SL+Sv&0x1f]&&(rK||rG===(rA?undefined:vml))&&!_$3QlniP['_$BhcOxS']&&!_$3QlniP['_$A5F57A']&&!(_$3QlniP['_$JEq5Xp']&&_$3QlniP['_$JEq5Xp']['get'](nZ))){let nL=nX===0x0?[]:nX===0x1?Ds!==0x0&&nd&&typeof nd==='object'&&Dn['has'](nd)?(Ds--,nd['value']):[nd]:nf;!rE&&(rE=[]);rE[rm++]=Sd,rE[rm++]=rp,rE[rm++]=ru,rE[rm++]=rP,rE[rm++]=rO,rE[rm++]=ro;for(let nv=0x0;nv<rC;nv++){rE[rm++]=r3[nv];}Sd=nL,rp=null,ru=null,ro={'_$t3TWVK':rH?new Array(rH)['fill'](undefined):I,'_$Qy1ct1':null,'_$WMW0CA':-0x1,'_$lXdQHz':Sf};for(let ni=0x0,s0=SI[0x20]||0x0;ni<rC;ni++){r3[ni]=ni<s0&&ni<nL['length']?nL[ni]:undefined;}rO=0x0;break D;}let nh=_$3QlniP['_$JEq5Xp'],nO=!_$3QlniP['_$BhcOxS']&&!_$3QlniP['_$A5F57A']&&!(nh&&nh['get'](nZ))&&DT(nZ);if(nO&&nO['_$9S5Qse']!==![]){let s1=nO['_$RwrNOd']||Dl(nO,typeof nO['_$sTz7d4']==='object'?nO['_$sTz7d4']['n']!==undefined?0x0?Sj(nO['_$sTz7d4']['n']):nO['_$sTz7d4']['d']||(nO['_$sTz7d4']['d']=Sj(nO['_$sTz7d4']['n'])):nO['_$sTz7d4']:Sm(nO['_$sTz7d4']));if(s1){let s2;if(nX===0x0)s2=[];else nX===0x1?s2=Ds!==0x0&&nd&&typeof nd==='object'&&Dn['has'](nd)?(Ds--,nd['value']):[nd]:s2=nf;let s3=s1===SI?SL:Sp(s1[0x20],s1[0x21]),s4=s1===SI?Sv:Sq(s1[0x20],s1[0x21]);_$3QlniP['_$LlWrTr']?_$3QlniP['_$LlWrTr']=![]:_$3QlniP['_$BhcOxS']=undefined;rR[rP++]=DW(nZ,s1,undefined,s2,nO['_$yDTK6f'],s1[0xf*s3+s4&0x1f]?undefined:vml),rO++;break D;}}let nP=_$3QlniP['_$BhcOxS'],nR=_$3QlniP['_$JEq5Xp'],nc=nR&&nR['get'](nZ);nc?(_$3QlniP['_$LlWrTr']=!![],_$3QlniP['_$BhcOxS']=nc):_$3QlniP['_$BhcOxS']=undefined;let nx;try{if(nX===0x0)nx=nZ();else nX===0x1?nx=Ds!==0x0&&nd&&typeof nd==='object'&&Dn['has'](nd)?(Ds--,w(nZ,undefined,nd['value'])):nZ(nd):nx=w(nZ,undefined,nf);rR[rP++]=nx;}finally{nc&&(_$3QlniP['_$LlWrTr']=![]),_$3QlniP['_$BhcOxS']=nP;}rO++;}break;}case 0x10b:{let s5=Si[rh];s5 in vmk_e7381c?rR[rP++]=typeof vmk_e7381c[s5]:rR[rP++]=typeof vml[s5];rO++;break;}case 0x14d:{rR[rP-0x1]=-rR[rP-0x1],rO++;break;}case 0x131:{let s6=rR[--rP];if(s6==null)throw new TypeError(s6+'\x20is\x20not\x20iterable');let s7=s6[Symbol['asyncIterator']];if(typeof s7==='function')rR[rP++]=w(s7,s6,[]);else{let s8=s6[Symbol['iterator']];if(typeof s8!=='function')throw new TypeError(s6+'\x20is\x20not\x20iterable');let s9=w(s8,s6,[]);if(s9===null||typeof s9!=='object')throw new TypeError('Iterator\x20method\x20returned\x20a\x20non-object\x20value');let sD=async function(ss){if(ss===null||typeof ss!=='object')throw new TypeError('Iterator\x20result\x20is\x20not\x20an\x20object');let sk=await ss['value'];return{'value':sk,'done':!!ss['done']};},sS=async function(ss){throw ss;},sr=async function(ss){return{'value':ss,'done':!![]};},sn={'next':function(ss){let sk;try{sk=s9['next'](ss);}catch(sa){return sS(sa);}return sD(sk);},'return':function(ss){if(typeof s9['return']!=='function')return sr(ss);let sk;try{sk=s9['return'](ss);}catch(sa){return sS(sa);}return sD(sk);},'throw':function(ss){if(typeof s9['throw']!=='function')return sS(ss);let sk;try{sk=s9['throw'](ss);}catch(sa){return sS(sa);}return sD(sk);},[Symbol['asyncIterator']]:function(){return this;}};rR[rP++]=sn;}rO++;break;}case 0x113:{ro=ro['_$lXdQHz'],rO++;break;}case 0x15b:{let ss=rR[--rP];rR[rP++]=ss['next'](),rO++;break;}case 0x14e:{let sk=rR[--rP],sa=rR[rP-0x1],se=Si[rh],sl=DY(sa);S(sl,se,{'get':sk,'enumerable':sl===sa,'configurable':!![]}),rO++;break;}case 0x11a:{if(rD)rD=rD['_$glYWPl'];rO++;break;}case 0x164:{r3[rh]=rR[--rP],rO++;break;}case 0x168:{let sT=rR[--rP];if((typeof sT==='object'||typeof sT==='function')&&sT!==null){const sw=sT[Symbol['toPrimitive']];if(sw!=null){sT=w(sw,sT,['number']);if(sT!==null&&(typeof sT==='object'||typeof sT==='function'))throw new TypeError('Cannot\x20convert\x20object\x20to\x20primitive\x20value');}else{const sU=sT['valueOf'];let sA=typeof sU==='function'?w(sU,sT,[]):sT;if(sA!==null&&(typeof sA==='object'||typeof sA==='function')){const sQ=sT['toString'];sA=typeof sQ==='function'?w(sQ,sT,[]):sA;if(sA!==null&&(typeof sA==='object'||typeof sA==='function'))throw new TypeError('Cannot\x20convert\x20object\x20to\x20primitive\x20value');}sT=sA;}}rR[rP++]=typeof sT===M?sT+0x1n:+sT+0x1,rO++;break;}case 0x133:{let sN=rR[--rP],sg=rR[--rP];rR[rP++]=sg>>sN,rO++;break;}case 0x145:{rR[rP-0x1]=typeof rR[rP-0x1],rO++;break;}case 0x11e:{throw D2(rR[--rP]);break;}case 0x12d:{rR[rP-0x1]=~rR[rP-0x1],rO++;break;}case 0x146:{ru===null&&(rA||!rQ)&&Sd&&(ru=DJ(Sd));Sd&&rh>=Sd['length']&&!Dj(Sd)&&(Sd=DJ(Sd));Sd[rh]=rR[--rP],rO++;break;}case 0x171:{let sG=rh,sK=rR[--rP];ro['_$t3TWVK'][sG]=sK;let sH=ro['_$Qy1ct1'];!sH&&(sH=a(null),ro['_$Qy1ct1']=sH);sH[sG]=0x1,rO++;break;}case 0x16b:{let so=rR[rP-0x1];rR[rP++]=so,rO++;break;}case 0x129:{rR[rP++]={},rO++;break;}case 0x12a:{if(rh===-0x2){}else rh===-0x1?rR[--rP]:ro['_$t3TWVK'][rh]=rR[--rP];rO++;break;}case 0x153:{rR[rP-0x1]=!rR[rP-0x1],rO++;break;}case 0x162:{rR[rP++]=r3[rh],rO++;break;}case 0x135:{rR[rP++]=undefined,rO++;break;}case 0x141:{let sB=rR[--rP],su=rR[--rP];rR[rP++]=su*sB,rO++;break;}case 0x175:{let sp=rR[--rP],sq=rR[--rP];rR[rP++]=sq**sp,rO++;break;}case 0x137:{let sC=rR[--rP],sE;if(sC===null||sC===undefined)throw new TypeError(sC+'\x20is\x20not\x20iterable');let sm=sC[DN];if(Array['isArray'](sC)&&sm===DQ){let sJ=sC['length'];sE=new Array(sJ);for(let sY=0x0;sY<sJ;sY++){sE[sY]=sC[sY];}}else{if(sm===null||sm===undefined||typeof sm!=='function')throw new TypeError(sC+'\x20is\x20not\x20iterable');let st=w(sm,sC,[]);if(st===null||typeof st!=='object')throw new TypeError('Iterator\x20method\x20returned\x20a\x20non-object\x20value');sE=[];while(!![]){let sb=st['next']();DC(sb);if(sb['done'])break;sE[sE['length']]=sb['value'];}}let sj={'value':sE};Dn['add'](sj),Ds++,rR[rP++]=sj,rO++;break;}case 0x10c:{rR[rP++]=Si[rh],rO++;break;}case 0x100:{if(typeof rR[rP-0x1]==='symbol')throw new TypeError('Cannot\x20convert\x20a\x20Symbol\x20value\x20to\x20a\x20string');rR[rP-0x1]=String(rR[rP-0x1]),rO++;break;}case 0x140:{let sz=rR[--rP],sy=sz&&sz['i']?sz['i']:sz;if(sy!=null){if(rS!==null)try{let sV=sy['return'];typeof sV==='function'&&w(sV,sy,[]);}catch(sF){}else{let sW=sy['return'];if(sW!=null){if(typeof sW!=='function')throw new TypeError('iterator\x20\x27return\x27\x20is\x20not\x20callable');let sM=w(sW,sy,[]);DC(sM);}}}rO++;break;}case 0x132:{let sI=rR[--rP],sX=sI&&sI['i']?sI['i']:sI;if(rS!==null)try{sX&&typeof sX['return']==='function'?rR[rP++]=async function(sd){try{await sd;}catch(sf){}}(sX['return']()):rR[rP++]=undefined;}catch(sd){rR[rP++]=undefined;}else{let sf=sX!=null?sX['return']:undefined;if(sf==null)rR[rP++]=undefined;else typeof sf!=='function'?rR[rP++]=(async function(){throw new TypeError('iterator\x20\x27return\x27\x20is\x20not\x20callable');}()):rR[rP++]=w(sf,sX,[]);}rO++;break;}case 0xfb:{let sZ=rR[--rP],sh=rR[--rP];rR[rP++]=sh instanceof sZ,rO++;break;}case 0x17f:{let sO=rR[--rP],sP=rR[--rP];rR[rP++]=sP in sO,rO++;break;}case 0xd6:{let sR=rR[--rP],sc=Si[rh];if(_$3QlniP['_$nNZUvL']&&sc in _$3QlniP['_$nNZUvL'])throw new ReferenceError('Cannot\x20access\x20\x27'+sc+'\x27\x20before\x20initialization');let sx=!(sc in vmk_e7381c)&&!(sc in vml);vmk_e7381c[sc]=sR;(sx||sc in vml)&&(rA?_$SDXiZG[sc]=sR:_$hu2PCO(_$SDXiZG,sc,sR));rR[rP++]=sR,rO++;break;}case 0x130:{S:{while(rD){let sv=rD;if(sv['_$mxKKkW']!==undefined)break;if(rD)rD=rD['_$glYWPl'];}if(rD){let si=rD;if(si['_$mxKKkW']!==undefined){rS=null,rs=![],rk=0x0,ra=undefined,re=![],rl=0x0,rT=undefined,rr=!![],rn=rR[--rP],rw=si['_$Sxv7xi'],rU=si['_$USabN6'],rO=si['_$mxKKkW'];break S;}}(rr||rs||re)&&(rr=![],rn=undefined,rs=![],rk=0x0,ra=undefined,re=![],rl=0x0,rT=undefined);rS=null;let sL=rR[--rP];if(rN&&sL===undefined&&!rq)throw new ReferenceError('Must\x20call\x20super\x20constructor\x20in\x20derived\x20class\x20before\x20accessing\x20\x27this\x27\x20or\x20returning\x20from\x20derived\x20constructor');return rj=sL,0x1;}break;}case 0x134:{rR[rP++]=[],rO++;break;}case 0x11b:{let k0=rh&0xffff,k1=rh>>>0x10,k2=ro;for(let k5=0x0;k5<k1;k5++){k2=k2['_$lXdQHz'];}let k3=k2['_$t3TWVK'],k4=k3[k0];if(k4===k3){let k6=k2['_$yk5uFw'];throw new ReferenceError('Cannot\x20access\x20\x27'+(k6&&k6[k0]||'variable')+'\x27\x20before\x20initialization');}rR[rP++]=k4,rO++;break;}case 0x163:{let k7=rR[--rP],k8=k7&&k7['i']?k7['i']:k7;try{if(k8!=null){let k9=k8['return'];typeof k9==='function'&&w(k9,k8,[]);}}catch(kD){}rO++;break;}case 0x172:{rR[rP++]=null,rO++;break;}case 0x136:{let kS=rR[--rP],kr=rR[rP-0x1];if(Array['isArray'](kS)&&kS[DN]===DQ){let kn=kr['length'],ks=kS['length'];for(let kk=0x0;kk<ks;kk++){kr[kn+kk]=kS[kk];}}else for(let ka of kS){kr[kr['length']]=ka;}rO++;break;}case 0x16f:{r:{let ke=r1[rO];while(rD){let kl=rD;if(kl['_$mxKKkW']!==undefined||!(ke>=kl['_$USabN6']||ke<=kl['_$Sxv7xi']))break;if(rD)rD=rD['_$glYWPl'];}if(rD){let kT=rD;if(kT['_$mxKKkW']!==undefined&&(ke>=kT['_$USabN6']||ke<=kT['_$Sxv7xi'])){rS=null,rr=![],rn=undefined,rs=![],rk=0x0,ra=undefined,re=!![],rl=ke,rT=ro,rw=kT['_$Sxv7xi'],rU=kT['_$USabN6'],rO=kT['_$mxKKkW'];break r;}}(rr||rs||re||rS!==null)&&(ke>=rU||ke<=rw)&&(rr=![],rn=undefined,rs=![],rk=0x0,ra=undefined,re=![],rl=0x0,rT=undefined,rS=null),rO=ke;}break;}case 0x138:{let kw=rR[--rP];kw!==null&&kw!==undefined?rO=r1[rO]:rO++;break;}case 0x108:{let kU=rR[--rP],kA=rR[rP-0x1];if(rh===0x2)rR[rP-0x1]={...kU};else{if(rh===0x1)rR[rP-0x1]={...kA,...kU};else{if(kU!==null&&kU!==undefined){let kQ=Object(kU),kN=n(kQ);for(let kg=0x0;kg<kN['length'];kg++){let kG=kN[kg],kK=D(kQ,kG);kK!==undefined&&kK['enumerable']&&S(kA,kG,{'value':kQ[kG],'writable':!![],'enumerable':!![],'configurable':!![]});}}}}rO++;break;}case 0x16e:{let kH=rh&0xffff,ko=rh>>>0x10,kB=Si[kH],ku=Si[ko];rR[rP++]=new RegExp(kB,ku),rO++;break;}}}finally{rb=rO,rz=rP;}};while(r4<r5){try{while(r4<r5){let rZ=r4<<r9,rh=r0[r7+rZ],rO=r0[r8+rZ];switch(rt[rh]){case 0x1:{let rR=Sx[--SR],rc=Sx[--SR],rx=(rO^0xf819)>>>0x0,rL;rx<0x10?rx<0x8?rx<0x4?rx<0x2?rL=rx<0x1?rc<=rR:rc!=rR:rL=rx<0x3?rc>>>rR:rc&rR:rx<0x6?rL=rx<0x5?rc|rR:rc**rR:rL=rx<0x7?rc*rR:rc<<rR:rx<0xc?rx<0xa?rL=rx<0x9?rc/rR:rc==null?rR===rc:rc===rR:rL=rx<0xb?rc>=rR:rc>>rR:rx<0xe?rL=rx<0xd?rc==null?rR!==rc:rc!==rR:rc+rR:rL=rx<0xf?rc%rR:rc-rR:rx<0x14?rx<0x12?rL=rx<0x11?rc==rR:rc^rR:rL=rx<0x13?rc>rR:rc<rR:rx<0x18?rL=rx<0x16?rc|rR:rc&rR:rL=rx<0x1c?rc^rR:rR-rc;Sx[SR++]=rL,r4++;continue;}case 0x2:{let rv=Sx[--SR];if((typeof rv==='object'||typeof rv==='function')&&rv!==null){const ri=rv[Symbol['toPrimitive']];if(ri!=null){rv=w(ri,rv,['number']);if(rv!==null&&(typeof rv==='object'||typeof rv==='function'))throw new TypeError('Cannot\x20convert\x20object\x20to\x20primitive\x20value');}else{const n0=rv['valueOf'];let n1=typeof n0==='function'?w(n0,rv,[]):rv;if(n1!==null&&(typeof n1==='object'||typeof n1==='function')){const n2=rv['toString'];n1=typeof n2==='function'?w(n2,rv,[]):n1;if(n1!==null&&(typeof n1==='object'||typeof n1==='function'))throw new TypeError('Cannot\x20convert\x20object\x20to\x20primitive\x20value');}rv=n1;}}Sx[SR++]=typeof rv===M?rv+0x1n:+rv+0x1,r4++;continue;}case 0x3:{let n3=rO,n4=Sx[--SR];ro['_$t3TWVK'][n3]=n4,r4++;continue;}case 0x4:{let n5=Sx[SR-0x1];Sx[SR++]=n5,r4++;continue;}case 0x5:{let n6=Sx[SR-0x3],n7=Sx[SR-0x2],n8=Sx[SR-0x1];Sx[SR-0x3]=n7,Sx[SR-0x2]=n8,Sx[SR-0x1]=n6,r4++;continue;}case 0x6:{r3[rO]=Sx[--SR],r4++;continue;}case 0x7:{Sx[SR++]=ro,r4++;continue;}case 0x8:{Sx[SR++]=undefined,r4++;continue;}case 0x9:{Sx[--SR],r4++;continue;}case 0xa:{Sx[SR++]=r3[rO],r4++;continue;}case 0xb:{Sx[--SR],Sx[SR++]=undefined,r4++;continue;}case 0xc:{Sx[SR-0x1]=!Sx[SR-0x1],r4++;continue;}case 0xd:{ro=ro['_$lXdQHz'],r4++;continue;}case 0xe:{ru===null&&(rA||!rQ)&&Sd&&(ru=DJ(Sd));Sd&&rO>=Sd['length']&&!Dj(Sd)&&(Sd=DJ(Sd));Sd[rO]=Sx[--SR],r4++;continue;}case 0xf:{let n9=Sx[--SR],nD={'_$t3TWVK':new Array(rO),'_$Qy1ct1':null,'_$WMW0CA':-0x1,'_$lXdQHz':n9};ro=nD,r4++;continue;}case 0x10:{Sx[SR-0x1]=typeof Sx[SR-0x1],r4++;continue;}case 0x11:{Sx[SR-0x1]=-Sx[SR-0x1],r4++;continue;}case 0x12:{let nS=rO&0xffff,nr=ro['_$t3TWVK'];nr[nS]=nr;let nn=rO>>>0x10;nn&&((ro['_$yk5uFw']||(ro['_$yk5uFw']={}))[nS]=Si[nn-0x1]);r4++;continue;}case 0x13:{Sx[SR++]={},r4++;continue;}case 0x14:{Sx[SR++]=Sd[rO],r4++;continue;}case 0x15:{let ns=rO&0xffff,nk=rO>>>0x10,na=Sx[--SR],ne=ro;for(let nU=0x0;nU<nk;nU++){ne=ne['_$lXdQHz'];}let nl=ne['_$t3TWVK'];if(nl[ns]===nl){let nA=ne['_$yk5uFw'];throw new ReferenceError('Cannot\x20access\x20\x27'+(nA&&nA[ns]||'variable')+'\x27\x20before\x20initialization');}let nT=ne['_$Qy1ct1'],nw=nT&&nT[ns];if(nw){if(nw!==0x2||rA)throw new TypeError('Assignment\x20to\x20constant\x20variable.');}else nl[ns]=na;r4++;continue;}case 0x16:{let nQ=Sx[--SR],nN=Sx[--SR];if(nN===null||nN===undefined){if(nQ===Symbol['iterator'])throw new TypeError((nN===null?'object\x20null':'undefined')+'\x20is\x20not\x20iterable\x20(cannot\x20read\x20property\x20Symbol(Symbol.iterator))');throw new TypeError('Cannot\x20read\x20properties\x20of\x20'+nN+'\x20(reading\x20'+(typeof nQ==='symbol'?'\x27'+nQ['toString']()+'\x27':typeof nQ==='string'?'\x27'+nQ+'\x27':typeof nQ==='object'||typeof nQ==='function'?'\x27<computed\x20key>\x27':'\x27'+String(nQ)+'\x27')+')');}Sx[SR++]=nN[nQ],r4++;continue;}case 0x17:{Sx[SR++]=null,r4++;continue;}case 0x18:{r4=r1[r4];continue;}case 0x19:{!Sx[--SR]?r4=r1[r4]:r4++;continue;}case 0x1a:{let ng=Sx[--SR],nG=Sx[SR-0x1],nK=Si[rO&0xffffff];nK in nG?S(nG,nK,{'value':ng,'writable':!![],'enumerable':!![],'configurable':!![]}):nG[nK]=ng;rO&0x1000000&&(!_$3QlniP['_$JEq5Xp']&&(_$3QlniP['_$JEq5Xp']=DS()),_$3QlniP['_$JEq5Xp']['set'](ng,nG));r4++;continue;}case 0x1b:{Sx[--SR]?r4=r1[r4]:r4++;continue;}case 0x1c:{let nH=Sx[--SR];if((typeof nH==='object'||typeof nH==='function')&&nH!==null){const no=nH[Symbol['toPrimitive']];if(no!=null){nH=w(no,nH,['number']);if(nH!==null&&(typeof nH==='object'||typeof nH==='function'))throw new TypeError('Cannot\x20convert\x20object\x20to\x20primitive\x20value');}else{const nB=nH['valueOf'];let nu=typeof nB==='function'?w(nB,nH,[]):nH;if(nu!==null&&(typeof nu==='object'||typeof nu==='function')){const np=nH['toString'];nu=typeof np==='function'?w(np,nH,[]):nu;if(nu!==null&&(typeof nu==='object'||typeof nu==='function'))throw new TypeError('Cannot\x20convert\x20object\x20to\x20primitive\x20value');}nH=nu;}}Sx[SR++]=typeof nH===M?nH:+nH,r4++;continue;}case 0x1d:{let nq=rO&0xffff,nC=rO>>>0x10,nE=ro;for(let nJ=0x0;nJ<nC;nJ++){nE=nE['_$lXdQHz'];}let nm=nE['_$t3TWVK'],nj=nm[nq];if(nj===nm){let nY=nE['_$yk5uFw'];throw new ReferenceError('Cannot\x20access\x20\x27'+(nY&&nY[nq]||'variable')+'\x27\x20before\x20initialization');}Sx[SR++]=nj,r4++;continue;}case 0x1e:{Sx[SR++]=Si[rO],r4++;continue;}case 0x1f:{let nt=Sx[--SR];if((typeof nt==='object'||typeof nt==='function')&&nt!==null){const nb=nt[Symbol['toPrimitive']];if(nb!=null){nt=w(nb,nt,['number']);if(nt!==null&&(typeof nt==='object'||typeof nt==='function'))throw new TypeError('Cannot\x20convert\x20object\x20to\x20primitive\x20value');}else{const nz=nt['valueOf'];let ny=typeof nz==='function'?w(nz,nt,[]):nt;if(ny!==null&&(typeof ny==='object'||typeof ny==='function')){const nV=nt['toString'];ny=typeof nV==='function'?w(nV,nt,[]):ny;if(ny!==null&&(typeof ny==='object'||typeof ny==='function'))throw new TypeError('Cannot\x20convert\x20object\x20to\x20primitive\x20value');}nt=ny;}}Sx[SR++]=typeof nt===M?nt-0x1n:+nt-0x1,r4++;continue;}case 0x20:{let nF=Sx[SR-0x1];Sx[SR-0x1]=Sx[SR-0x2],Sx[SR-0x2]=nF,r4++;continue;}case 0x21:{let nW=Sx[--SR],nM=Sx[--SR],nI=Si[rO];if(nM===null||nM===undefined)throw new TypeError('Cannot\x20set\x20properties\x20of\x20'+nM+'\x20(setting\x20'+'\x27'+String(nI)+'\x27'+')');rA?nM[nI]=nW:_$hu2PCO(nM,nI,nW);Sx[SR++]=nW,r4++;continue;}case 0x22:{Sx[SR-0x1]=~Sx[SR-0x1],r4++;continue;}case 0x23:{let nX=Si[rO],nd;if(_$3QlniP['_$nNZUvL']&&nX in _$3QlniP['_$nNZUvL'])throw new ReferenceError('Cannot\x20access\x20\x27'+nX+'\x27\x20before\x20initialization');if(nX in vmk_e7381c)nd=vmk_e7381c[nX];else{if(nX in vml)nd=vml[nX];else throw new ReferenceError(nX+'\x20is\x20not\x20defined');}Sx[SR++]=nd,r4++;continue;}case 0x24:{let nf=Sx[--SR];nf!==null&&nf!==undefined?r4=r1[r4]:r4++;continue;}case 0x25:{Sx[SR++]=SZ,r4++;continue;}case 0x26:{let nZ=Sx[--SR],nh=Si[rO];if(nZ===null||nZ===undefined)throw new TypeError('Cannot\x20read\x20properties\x20of\x20'+nZ+'\x20(reading\x20'+'\x27'+String(nh)+'\x27'+')');Sx[SR++]=nZ[nh],r4++;continue;}case 0x27:{throw D2(Sx[--SR]);continue;}case 0x28:{Sx[SR++]=Si[rO],r4++;continue;}case 0x29:{let nO=Sx[--SR],nP=Sx[--SR],nR=Sx[--SR];if(nR===null||nR===undefined)throw new TypeError('Cannot\x20set\x20properties\x20of\x20'+nR+'\x20(setting\x20'+(typeof nP==='symbol'?'\x27'+nP['toString']()+'\x27':typeof nP==='string'?'\x27'+nP+'\x27':typeof nP==='object'||typeof nP==='function'?'\x27<computed\x20key>\x27':'\x27'+String(nP)+'\x27')+')');rA?nR[nP]=nO:_$hu2PCO(nR,nP,nO);Sx[SR++]=nO,r4++;continue;}case 0x2a:{Sx[SR++]=[],r4++;continue;}}if(rh===W||rh===V||rh===F){let nc=Sx[--SR];r4++;Sh===undefined&&(Sh=[],Sh[0xf]={'_$lMWq7Z':Sh},Sh[0x1c]=Sc,Sh[0x1d]=SL,Sh[0x1e]=Sv,Sh[0x1f]=Si,Sh[0x20]=r0,Sh[0x21]=r1,Sh[0x22]=r2,Sh[0x23]=r5,Sh[0x24]=r6,Sh[0x25]=r7,Sh[0x26]=r8,Sh[0x27]=r9,Sh[0x28]=rA,Sh[0x29]=rQ,Sh[0x2a]=rN,Sh[0x2b]=rg,Sh[0x2c]=rK,Sh[0x2d]=rH,Sh[0x2e]=rC);Sh[0x0]=Sd,Sh[0x1]=SZ,Sh[0x2]=rG,Sh[0x3]=Sx,Sh[0x4]=SR,Sh[0x5]=r3,Sh[0x6]=r4,Sh[0x7]=rD,Sh[0x8]=ro,Sh[0x9]=rB,Sh[0xa]=ru,Sh[0xb]=rp,Sh[0xc]=rq,Sh[0xd]=rE,Sh[0xe]=rm;rS!==null||rr||rs||re?(Sh[0x10]=!![],Sh[0x11]=rS,Sh[0x12]=rr,Sh[0x13]=rn,Sh[0x14]=rs,Sh[0x15]=rk,Sh[0x16]=ra,Sh[0x17]=re,Sh[0x18]=rl,Sh[0x19]=rT,Sh[0x1a]=rw,Sh[0x1b]=rU):Sh[0x10]=![];let nx=Sh[0xf];return nx['_$xsuw8N']=rh===W?t:rh===V?b:z,nx['_$JOzGSm']=nc,nx;}rb=r4,rz=SR;let rP;rh<0xd6?rP=rJ(rh,rO):rP=rY(rh,rO);r4=rb,SR=rz;if(rP){if(rm>0x0){for(let nL=rC-0x1;nL>=0x0;nL--){r3[nL]=rE[--rm];}ro=rE[--rm],r4=rE[--rm],SR=rE[--rm],ru=rE[--rm],rp=rE[--rm],Sd=rE[--rm],Sx[SR++]=rj,r4++;continue;}return rj;}}if(rm>0x0){for(let nv=rC-0x1;nv>=0x0;nv--){r3[nv]=rE[--rm];}ro=rE[--rm],r4=rE[--rm],SR=rE[--rm],ru=rE[--rm],rp=rE[--rm],Sd=rE[--rm],Sx[SR++]=undefined,r4++;continue;}break;}catch(ni){X=0x0;if(rD){let s0=rD;SR=s0['_$0TWzdh'];s0['_$smqBSv']!==undefined&&(ro=s0['_$smqBSv']);if(s0['_$B7707K']!==undefined){rS!==null&&(s0['_$B7707K']>=rU||s0['_$B7707K']<=rw)&&(rS=null);Sx[SR++]=ni,r4=s0['_$B7707K'],s0['_$B7707K']=undefined;if(s0['_$mxKKkW']===undefined){if(rD)rD=rD['_$glYWPl'];}}else{if(s0['_$mxKKkW']!==undefined)r4=s0['_$mxKKkW'],s0['_$ASIdqh']=ni;else{r4=s0['_$USabN6'];if(rD)rD=rD['_$glYWPl'];}}continue;}throw D2(ni);}}let rV=SR>rC?Sx[--SR]:rq?SZ:undefined;if(rN&&!rq&&(rV===undefined||rV===null||typeof rV!=='object'&&typeof rV!=='function'))throw new ReferenceError('Must\x20call\x20super\x20constructor\x20in\x20derived\x20class\x20before\x20accessing\x20\x27this\x27\x20or\x20returning\x20from\x20derived\x20constructor');return rV;}function DM(SM,SI,SX,Sd,Sf,SZ){let Sh=0x0,SO,SP=function(SR,Sc){if(Sh===0x2)throw new TypeError('Generator\x20is\x20already\x20running');if(Sh===0x3||Sh===0x0&&SR!==0x1){Sh=0x3;if(SR===0x2)throw Sc;return{'value':SR===0x3?Sc:undefined,'done':!![]};}let Sx,SL=Sh===0x1;Sh=0x2,DI++;try{Sx=SL?DW(SM,SI,SX,Sd,Sf,SZ,SO,SR,Sc):DW(SM,SI,SX,Sd,Sf,SZ);}catch(Sv){Sh=0x3,SO=undefined;throw Sv;}finally{DI--;}if(Sx&&typeof Sx==='object'&&Sx['_$xsuw8N']!==undefined)return SO=Sx['_$lMWq7Z'],Sh=0x1,{'value':Sx,'done':![]};return Sh=0x3,SO=undefined,{'value':Sx,'done':!![]};};return{'next':function(SR){return SR&&typeof SR==='object'&&SR['_$xsuw8N']===y?SP(0x3,SR['_$JOzGSm']):SP(0x1,SR);},'throw':function(SR){return SP(0x2,SR);},'return':function(SR){if(Sh===0x2)throw new TypeError('Generator\x20is\x20already\x20running');return Sh=0x3,SO=undefined,{'value':SR,'done':!![]};}};}let DI=0x0,DX=function(SM,SI,SX,Sd,Sf,SZ){DI++;let Sh=_$3QlniP['_$BhcOxS'];try{_$3QlniP['_$LlWrTr']?_$3QlniP['_$LlWrTr']=![]:_$3QlniP['_$BhcOxS']=undefined;let SO=typeof SI==='object'?SI['n']!==undefined?0x0?Sj(SI['n']):SI['d']||(SI['d']=Sj(SI['n'])):SI:Sm(SI),SP=SO?Sp(SO[0x20],SO[0x21]):undefined,SR=SO?Sq(SO[0x20],SO[0x21]):undefined;return DW(SM,SO,SX,Sd,Sf,SZ);}finally{_$3QlniP['_$BhcOxS']=Sh,DI--;}},Dd=0x7,Df=0x8,DZ=0x0,Dh=0xb,DO=0x2,DP=0x4,DR=0x9,Dc=0xa,Dx=0x3,DL=0x1,Dv=0x6,Di=0x5,S0=0x80000,S1=0x800,S2=0x8000,S3=0x20,S4=0x100000,S5=0x200,S6=0x2,S7=0x4000,S8=0x80,S9=0x40,SD=0x8,SS=0x100,Sr=0x10000,Sn=0x2000,Ss=0x400000,Sk=0x400,Sa=0x40000,Se=0x4,Sl=0x200000,ST=0x20000,Sw=0x1000,SU=0x1;function SA(SM){this['_$nYSHqi']=SM,this['_$j5vVie']=new m(SM['buffer'],SM['byteOffset'],SM['byteLength']),this['_$JIaCw3']=0x0;}SA['prototype']['_$2ZI0Ln']=function(){return this['_$nYSHqi'][this['_$JIaCw3']++];},SA['prototype']['_$BgpZqo']=function(){let SM=this['_$j5vVie']['getUint16'](this['_$JIaCw3'],!![]);return this['_$JIaCw3']+=0x2,SM;},SA['prototype']['_$o8Gj0s']=function(){let SM=this['_$j5vVie']['getUint32'](this['_$JIaCw3'],!![]);return this['_$JIaCw3']+=0x4,SM;},SA['prototype']['_$wfAEa2']=function(){let SM=this['_$j5vVie']['getInt32'](this['_$JIaCw3'],!![]);return this['_$JIaCw3']+=0x4,SM;},SA['prototype']['_$TMWwhy']=function(){let SM=this['_$j5vVie']['getFloat64'](this['_$JIaCw3'],!![]);return this['_$JIaCw3']+=0x8,SM;},SA['prototype']['_$jCpauO']=function(){let SM=0x0,SI=0x0,SX;do{SX=this['_$2ZI0Ln'](),SM|=(SX&0x7f)<<SI,SI+=0x7;}while(SX>=0x80);return SM>>>0x1^-(SM&0x1);},SA['prototype']['_$2e1vtM']=function(){let SM=this['_$jCpauO'](),SI=this['_$nYSHqi'],SX=this['_$JIaCw3'],Sd=SX+SM;this['_$JIaCw3']=Sd;var Sf='';while(SX<Sd){var SZ=SI[SX++];if(SZ<0x80)Sf+=j(SZ);else{if(SZ<0xe0)Sf+=j((SZ&0x1f)<<0x6|SI[SX++]&0x3f);else{if(SZ<0xf0)Sf+=j((SZ&0xf)<<0xc|(SI[SX++]&0x3f)<<0x6|SI[SX++]&0x3f);else{var Sh=(SZ&0x7)<<0x12|(SI[SX++]&0x3f)<<0xc|(SI[SX++]&0x3f)<<0x6|SI[SX++]&0x3f;Sh-=0x10000,Sf+=j((Sh>>0xa)+0xd800,(Sh&0x3ff)+0xdc00);}}}}return Sf;};var SQ='Bz92pIqs3PneibfNh8rwJa+Sv/Zt0QkMWL4xV1oHm5XTFGARDl6uEUKdjcgOyYC7',SN=new E(0x80);for(var Sg=0x0;Sg<SQ['length'];Sg++){SN[SQ['charCodeAt'](Sg)]=Sg;}function SG(SM){var SI=SM['charCodeAt'](SM['length']-0x1)===0x3d?SM['charCodeAt'](SM['length']-0x2)===0x3d?0x2:0x1:0x0,SX=(SM['length']*0x3>>0x2)-SI,Sd=new E(SX),Sf=0x0;for(var SZ=0x0;SZ<SM['length'];SZ+=0x4){var Sh=SN[SM['charCodeAt'](SZ)],SO=SN[SM['charCodeAt'](SZ+0x1)],SP=SN[SM['charCodeAt'](SZ+0x2)],SR=SN[SM['charCodeAt'](SZ+0x3)];Sd[Sf++]=Sh<<0x2|SO>>0x4,Sf<SX&&(Sd[Sf++]=(SO&0xf)<<0x4|SP>>0x2),Sf<SX&&(Sd[Sf++]=(SP&0x3)<<0x6|SR);}return Sd;}SA['prototype']['_$5JFrrC']=function(SM,SI){var SX=this['_$jCpauO'](),Sd=this['_$nYSHqi'],Sf=this['_$JIaCw3'],SZ=SX,Sh=(SI^SM*0x9e3779b1)>>>0x0||0x1,SO=0x0,SP='',SR;while(SO<SZ){SR=(Sh=(Sh^Sh<<0xd)>>>0x0,Sh=(Sh^Sh>>>0x11)>>>0x0,Sh=(Sh^Sh<<0x5)>>>0x0,SO++,Sd[Sf++]^Sh&0xff);if(SR<0x80)SP+=j(SR);else{if(SR<0xe0)SP+=j((SR&0x1f)<<0x6|(Sh=(Sh^Sh<<0xd)>>>0x0,Sh=(Sh^Sh>>>0x11)>>>0x0,Sh=(Sh^Sh<<0x5)>>>0x0,SO++,Sd[Sf++]^Sh&0xff)&0x3f);else{if(SR<0xf0)SP+=j((SR&0xf)<<0xc|((Sh=(Sh^Sh<<0xd)>>>0x0,Sh=(Sh^Sh>>>0x11)>>>0x0,Sh=(Sh^Sh<<0x5)>>>0x0,SO++,Sd[Sf++]^Sh&0xff)&0x3f)<<0x6|(Sh=(Sh^Sh<<0xd)>>>0x0,Sh=(Sh^Sh>>>0x11)>>>0x0,Sh=(Sh^Sh<<0x5)>>>0x0,SO++,Sd[Sf++]^Sh&0xff)&0x3f);else{var Sc=((SR&0x7)<<0x12|((Sh=(Sh^Sh<<0xd)>>>0x0,Sh=(Sh^Sh>>>0x11)>>>0x0,Sh=(Sh^Sh<<0x5)>>>0x0,SO++,Sd[Sf++]^Sh&0xff)&0x3f)<<0xc|((Sh=(Sh^Sh<<0xd)>>>0x0,Sh=(Sh^Sh>>>0x11)>>>0x0,Sh=(Sh^Sh<<0x5)>>>0x0,SO++,Sd[Sf++]^Sh&0xff)&0x3f)<<0x6|(Sh=(Sh^Sh<<0xd)>>>0x0,Sh=(Sh^Sh>>>0x11)>>>0x0,Sh=(Sh^Sh<<0x5)>>>0x0,SO++,Sd[Sf++]^Sh&0xff)&0x3f)-0x10000;SP+=j((Sc>>0xa)+0xd800,(Sc&0x3ff)+0xdc00);}}}}return this['_$JIaCw3']=Sf,SP;};function SK(SM,SI,SX){let Sd=SM['_$2ZI0Ln']();switch(Sd){case Dd:return null;case Df:return undefined;case DZ:return![];case Dh:return!![];case DO:{let Sf=SM['_$2ZI0Ln']();return Sf>0x7f?Sf-0x100:Sf;}case DP:{let SZ=SM['_$BgpZqo']();return SZ>0x7fff?SZ-0x10000:SZ;}case DR:return SM['_$wfAEa2']();case Dc:return SM['_$TMWwhy']();case Dx:return SX?SM['_$5JFrrC'](SI,SX):SM['_$2e1vtM']();case DL:return BigInt(SM['_$2e1vtM']());case Dv:{let Sh=SM['_$2e1vtM'](),SO=SM['_$2e1vtM']();return new RegExp(Sh,SO);}case Di:{let SP=SM['_$jCpauO'](),SR=new E(SP);for(let Sc=0x0;Sc<SP;Sc++){SR[Sc]=SM['_$2ZI0Ln']();}return SC(SR);}default:return null;}}let SH=-0x1,So=-0x1,SB=0x0;function Su(SM,SI){if(SM===SH&&SI===So)return SB;return SH=SM,So=SI,SB=(Math['imul']((SM>>>0x0)+0x1,0xabb1bc85|0x1)^Math['imul']((SI>>>0x0)+0x1,0xabb1bc85>>>0x9|0x1)^0xabb1bc85)>>>0x0;}function Sp(SM,SI){return(Su(SM,SI)|0x1)>>>0x0;}function Sq(SM,SI){return Math['imul'](Su(SM,SI),0x324fbdd1)+0xba420a51>>>0x0;}function SC(SM){let SI;if(SM&&SM['_$JIaCw3']!==undefined)SI=SM;else{let r4=typeof SM==='string'?SG(SM):SM;SI=new SA(r4);}let SX=SI['_$2ZI0Ln'](),Sd=(SI['_$o8Gj0s']()^0xaa94529f)>>>0x0,Sf=SI['_$jCpauO'](),SZ=SI['_$jCpauO'](),Sh=[undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined],SO=Sp(Sf,SZ),SP=Sq(Sf,SZ);Sh[0x20]=Sf,Sh[0x21]=SZ;Sd&S9&&(Sh[0x8*SO+SP&0x1f]=SI['_$jCpauO']());Sd&SD&&(Sh[0x14*SO+SP&0x1f]=SI['_$o8Gj0s']());Sd&S8&&(Sh[0x5*SO+SP&0x1f]=SI['_$o8Gj0s']());Sd&Sw&&(Sh[0x12*SO+SP&0x1f]=SI['_$jCpauO']());Sd&S6&&(Sh[0xb*SO+SP&0x1f]=SI['_$o8Gj0s']());if(Sd&S4){let r5=SI['_$jCpauO'](),r6={};for(let r7=0x0;r7<r5;r7++){let r8=SI['_$jCpauO'](),r9=SI['_$jCpauO']();r6[r8]=r9;}Sh[0x18*SO+SP&0x1f]=r6;}Sd&S3&&(Sh[0x0*SO+SP&0x1f]=SI['_$jCpauO']());Sd&S5&&(Sh[0x4*SO+SP&0x1f]=SI['_$o8Gj0s']());Sd&S7&&(Sh[0x10*SO+SP&0x1f]=SI['_$o8Gj0s']());Sd&S0&&(Sh[0x7*SO+SP&0x1f]=0x1);Sd&S1&&(Sh[0x6*SO+SP&0x1f]=0x1);Sd&S2&&(Sh[0x1*SO+SP&0x1f]=0x1);Sd&Ss&&(Sh[0x13*SO+SP&0x1f]=0x1);Sd&Sk&&(Sh[0xf*SO+SP&0x1f]=0x1);Sd&Sa&&(Sh[0x3*SO+SP&0x1f]=0x1);Sd&Se&&(Sh[0xd*SO+SP&0x1f]=0x1);Sd&Sl&&(Sh[0x2*SO+SP&0x1f]=0x1);Sd&Sn&&(Sh[0x19*SO+SP&0x1f]=0x1);Sd&ST&&(Sh[0x17*SO+SP&0x1f]=0x1);let SR=SI['_$jCpauO'](),Sc={'__proto__':(void 0x0,null),'length':SR},Sx=Sh[0x10*SO+SP&0x1f]||0x0;for(let rD=0x0;rD<SR;rD++){Sc[rD]=SK(SI,rD,Sx);}Sh[0xe*SO+SP&0x1f]=Sc;function SL(rS){let rr=rS['_$2ZI0Ln']();switch(rr){case Dd:return-0x1;case DO:{let rn=rS['_$2ZI0Ln']();return rn>0x7f?rn-0x100:rn;}case DP:{let rs=rS['_$BgpZqo']();return rs>0x7fff?rs-0x10000:rs;}case DR:return rS['_$wfAEa2']();case Dc:return rS['_$TMWwhy']()|0x0;case Dx:return rS['_$2e1vtM']()|0x0;default:return-0x1;}}let Sv=SI['_$jCpauO'](),Si=!!(Sd&SU),r0=Si?Sv*0x3:Sv<<0x1;if(Sv<0x0||r0<0x0)throw new RangeError('Invalid\x20array\x20length');let r1=null,r2={'__proto__':r1,'length':r0},r3=0x0;if(Si){let rS=Sh[0x15*SO+SP&0x1f]<=0x80;for(let rr=0x0;rr<Sv;rr++){r2[r3++]=SI['_$jCpauO'](),r2[r3++]=SL(SI);let rn=0x0,rs=0x0,rk;do{rk=SI['_$2ZI0Ln'](),rn|=(rk&0x7f)<<rs,rs+=0x7;}while(rk>=0x80);rn=rn>>>0x0,r2[r3++]=rS?(rn&0x7f)<<0x14|(rn>>>0x7&0x7f)<<0xa|rn>>>0xe&0x7f:(rn&0xfff)<<0x14|(rn>>>0xc&0x3ff)<<0xa|rn>>>0x16&0x3ff;}}else{let ra=(Sf*0x1993^SZ*0xb457^Sv*0x3e11^SR*0xbf81)>>>0x0&0x3;switch(ra){case 0x1:for(let re=0x0;re<Sv;re++){r2[r3++]=SL(SI),r2[r3++]=SI['_$jCpauO']();}break;case 0x2:for(let rl=0x0;rl<Sv;rl++){r2[r3++]=SI['_$jCpauO'](),r2[r3++]=SL(SI);}break;case 0x3:for(let rT=0x0;rT<Sv;rT++){r2[r3++]=SI['_$jCpauO']();}for(let rw=0x0;rw<Sv;rw++){r2[r3++]=SL(SI);}break;default:for(let rU=0x0;rU<Sv;rU++){r2[r3++]=SL(SI);}for(let rA=0x0;rA<Sv;rA++){r2[r3++]=SI['_$jCpauO']();}break;}}Sh[0xc*SO+SP&0x1f]=r2;if(Sd&SS){let rQ=SI['_$jCpauO'](),rN={};for(let rg=0x0;rg<rQ;rg++){let rG=SI['_$jCpauO'](),rK=SI['_$jCpauO']();rN[rG]=rK;}Sh[0xa*SO+SP&0x1f]=rN;}if(Sd&Sr){let rH=SI['_$jCpauO'](),ro={};for(let rB=0x0;rB<rH;rB++){let ru=SI['_$jCpauO'](),rp=SI['_$jCpauO']()-0x1,rq=SI['_$jCpauO']()-0x1,rC=SI['_$jCpauO']()-0x1;ro[ru]=[rp,rq,rC];}Sh[0x16*SO+SP&0x1f]=ro;}return Sh;}let SE=function(SM,SI){let SX={};return function(Sd){if(SI!==undefined&&(!(Sd<SI)||Sd<0x0))throw 0x0;let Sf=Sd;if(SX[Sf])return SX[Sf];let SZ=SM[Sf];return typeof SZ==='string'?SX[Sf]=SC(SZ):SX[Sf]=SZ,SX[Sf];};},Sm=SE(C);C=null;let Sj=SE(J,undefined,0x0);J=null;let SJ=function(SM,SI,SX,Sd,Sf,SZ,Sh){this['a']=![],this['v']=undefined,this['s']=SY,this['f']=undefined,this['b']=SM,this['g']=SI,this['e']=SX,this['c']=Sd,this['n']=Sf,this['h']=SZ,this['t']=Sh;};SJ['prototype']={'__proto__':(void 0x0,null)};let SY=function(SM,SI){_$3QlniP['_$BhcOxS']=this['h'];let SX=this,Sd;try{Sd=DW(SX['c'],SX['b'],SX['n'],SX['g'],SX['e'],SX['t'],SX['f'],SM,SI);}catch(Sf){DI--;throw Sf;}if(Sd&&typeof Sd==='object'&&Sd['_$xsuw8N']!==undefined){if(Sd['_$xsuw8N']!==t){DI--;throw new Error('Unexpected\x20yield\x20in\x20async\x20context');}SX['f']=Sd['_$lMWq7Z'],SX['a']=!![],SX['v']=Sd['_$JOzGSm'];}else SX['a']=![],SX['v']=Sd,DI--;},St=function(SM,SI,SX,Sd,Sf,SZ,Sh){DI++;let SO,SP,SR;try{SO=typeof SI==='object'?SI['n']!==undefined?0x0?Sj(SI['n']):SI['d']||(SI['d']=Sj(SI['n'])):SI:Sm(SI),SP=SO?Sp(SO[0x20],SO[0x21]):undefined,SR=SO?Sq(SO[0x20],SO[0x21]):undefined;}catch(SL){DI--;throw SL;}let Sc=new SJ(SO,Sd,Sf,SM,SX,Sh,SZ),Sx;try{Sx=DW(SM,SO,SX,Sd,Sf,SZ);}catch(Sv){DI--;throw Sv;}if(Sx&&typeof Sx==='object'&&Sx['_$xsuw8N']!==undefined){if(Sx['_$xsuw8N']!==t){DI--;throw new Error('Unexpected\x20yield\x20in\x20async\x20context');}Sc['f']=Sx['_$lMWq7Z'],Sc['a']=!![],Sc['v']=Sx['_$JOzGSm'];}else Sc['a']=![],Sc['v']=Sx,DI--;return Sc;},Sb=async function(SM,SI,SX,Sd,Sf,SZ,Sh){let SO=St(SM,SI,SX,Sd,Sf,SZ,Sh);while(SO['a']){let SP=0x1,SR;try{SR=await SO['v'];}catch(Sc){SP=0x2,SR=Sc;}SO['s'](SP,SR);}return SO['v'];},Sz=function(SM,SI,SX,Sd){this['f']=SM,this['r']=SI,this['m']=SX,this['o']=Sd;};Sz['prototype']={'__proto__':(void 0x0,null)};let Sy=function(SM,SI,SX,Sd,Sf,SZ,Sh){let SO,SP,SR;DI++;try{SO=typeof SI==='object'?SI['n']!==undefined?0x0?Sj(SI['n']):SI['d']||(SI['d']=Sj(SI['n'])):SI:Sm(SI),SP=SO?Sp(SO[0x20],SO[0x21]):undefined,SR=SO?Sq(SO[0x20],SO[0x21]):undefined;}finally{DI--;}let Sc=DM(SM,SO,undefined,Sd,Sf,SZ),Sx=SO&&SO[0x1*SP+SR&0x1f]&&!SO[0x3*SP+SR&0x1f],SL=null;Sx&&(SL=Sc['next']());let Sv=![],Si=![],r0=null,r1=undefined,r2=![];function r3(r7,r8){if(Sv)return{'value':undefined,'done':!![]};Si=!![],_$3QlniP['_$BhcOxS']=Sh;if(r0){let rD,rS,rr;try{if(r8){if(typeof r0['throw']==='function')rD=r0['throw'](r7);else{typeof r0['return']==='function'&&r0['return']();r0=null;throw new TypeError('The\x20iterator\x20does\x20not\x20provide\x20a\x20\x27throw\x27\x20method.');}}else rD=r0['next'](r7);try{DC(rD);}catch(rs){r0=null;throw rs;}let rn=DE(rD);rS=rn['done'],rr=rn['value'];}catch(rk){r0=null;try{let ra=Sc['throw'](rk);return r4(ra);}catch(re){Sv=!![];throw re;}}if(!rS)return rD;r0=null,r7=rr,r8=![];}let r9;if(SL!==null)r9=SL,SL=null;else try{r9=r8?Sc['throw'](r7):Sc['next'](r7);}catch(rl){Sv=!![];throw rl;}return r4(r9);}function r4(r7){if(r7['done'])return Sv=!![],r2=![],{'value':r7['value'],'done':!![]};let r8=r7['value'];if(r8['_$xsuw8N']===b)return{'value':r8['_$JOzGSm'],'done':![]};if(r8['_$xsuw8N']===z){let r9=r8['_$JOzGSm'],rD;try{if(r9==null)throw new TypeError(r9+'\x20is\x20not\x20iterable');let rs=r9[Symbol['iterator']];if(typeof rs!=='function')throw new TypeError(r9+'\x20is\x20not\x20iterable');rD=w(rs,r9,[]),DC(rD);if(typeof rD['next']!=='function')throw new TypeError('Iterator\x20next\x20is\x20not\x20a\x20function');}catch(rk){try{let ra=Sc['throw'](rk);return r4(ra);}catch(re){Sv=!![];throw re;}}let rS,rr,rn;try{rS=rD['next'](undefined),DC(rS);let rl=DE(rS);rr=rl['done'],rn=rl['value'];}catch(rT){try{let rw=Sc['throw'](rT);return r4(rw);}catch(rU){Sv=!![];throw rU;}}if(!rr)return r0=rD,rS;return r3(rn,![]);}throw new Error('Unexpected\x20signal\x20in\x20generator');}let r5=SO&&SO[0x6*SP+SR&0x1f],r6=function(r7){if(Sv)return{'value':r7,'done':!![]};if(!Si)return Sv=!![],{'value':r7,'done':!![]};if(r0){let r9,rD=![];try{let rS=r0['return'];typeof rS==='function'&&(rD=!![],r9=w(rS,r0,[r7]),DC(r9));}catch(rr){r0=null;let rn;try{rn=Sc['throw'](rr);}catch(rs){Sv=!![];throw rs;}return r4(rn);}if(rD){let rk;try{rk=r9['done'];}catch(re){r0=null;let rl;try{rl=Sc['throw'](re);}catch(rT){Sv=!![];throw rT;}return r4(rl);}if(!rk)return r9;let ra;try{ra=r9['value'];}catch(rw){r0=null;let rU;try{rU=Sc['throw'](rw);}catch(rA){Sv=!![];throw rA;}return r4(rU);}r0=null,r7=ra;}}r1=r7,r2=!![];let r8;try{_$3QlniP['_$BhcOxS']=Sh,r8=Sc['next']({'_$xsuw8N':y,'_$JOzGSm':r7});}catch(rQ){Sv=!![],r2=![];throw rQ;}return r4(r8);};if(r5){let r7={},r8=function(rr,rn){return _$3QlniP['_$BhcOxS']=Sh,rr?Sc['throw'](rn):Sc['next'](rn);},r9=function(){let rr=SL!==null?SL:r8(![],undefined);return SL=null,rr;},rD=async function*(rr){rr===null&&(rr=r9());let rn=![];while(!rr['done']){let rs=rr['value'],rk=rs['_$xsuw8N'],ra=rs['_$JOzGSm'];if(rk===0x1&&ra==='_$o5rc8P'){rn=!![],rr=r8(![],undefined);continue;}if(rk===0x1&&rn){rn=![];let rw=![],rU;try{return ra;}catch(rA){rw=!![],rU=rA;}finally{if(!rw){let rQ=r8(![],{'_$xsuw8N':0x4,'_$JOzGSm':r7}),rN=rQ['done']?rQ['value']:yield*rS(rQ);if(rN!==r7)return rN;}}rr=r8(!![],rU);continue;}if(rk===0x1){let rg;try{rg=await ra;}catch(rG){rr=r8(!![],rG);continue;}rr=r8(![],rg);continue;}if(rk!==0x2&&rk!==0x3)throw new Error('Unexpected\x20signal\x20in\x20async\x20generator');let re,rl=![],rT=![];try{re=rk===0x2?yield ra:yield*(0x0,ra),rT=!![];}catch(rK){re=rK,rl=!![],rT=!![];}finally{if(!rT){let rH=r8(![],{'_$xsuw8N':0x4,'_$JOzGSm':r7}),ro=rH['done']?rH['value']:yield*rS(rH);if(ro!==r7)return ro;}}rr=r8(rl,re);}if(rr['value']===r7)return r7;return;},rS=function(rr){return Do(rD(rr));};if(SX)return new Sz(r9,r8,r7,rS);return rD['prototype']=Dq(SM&&SM['prototype'],Dg),rD(null);}else{let rr={'next':function(rn){return r3(rn,![]);},'return':r6,'throw':function(rn){if(Sv)throw rn;return r3(rn,!![]);},[Symbol['iterator']]:function(){return this;}};return rr;}};D6();var SV=function(SM,SI,SX,Sd,Sf,SZ){DI++;try{let Sh=Sm(Sd),SO=Sh?Sp(Sh[0x20],Sh[0x21]):undefined,SP=Sh?Sq(Sh[0x20],Sh[0x21]):undefined,SR=SI;if(Sh&&Sh[0x1*SO+SP&0x1f]){let Sc=_$3QlniP['_$BhcOxS'];return Sy(SZ,Sh,undefined,SX,SM,SR,Sc);}if(Sh&&Sh[0x6*SO+SP&0x1f]){let Sx=_$3QlniP['_$BhcOxS'];return Sb(SZ,Sh,Sf,SX,SM,SR,Sx);}return SZ&&Sh&&Dt(SZ,Sh,SM,SO,SP),DX(SZ,Sh,Sf,SX,SM,SR);}finally{DI--;}};return SV['_$mZyygx']=function(SM,SI){if(!SM)return;if(0x0||0x0){!Dw(SM)&&De(SM,{['_$sTz7d4']:SI,['_$yDTK6f']:undefined,['_$RwrNOd']:undefined,['_$9S5Qse']:undefined});return;}var SX;DI++;try{SX=Sm(SI);}finally{DI--;}if(!SX)return;var Sd=Sp(SX[0x20],SX[0x21]),Sf=Sq(SX[0x20],SX[0x21]);if(SX[0x6*Sd+Sf&0x1f]||SX[0x1*Sd+Sf&0x1f]||SX[0x7*Sd+Sf&0x1f])return;!Dw(SM)&&De(SM,{['_$sTz7d4']:SI,['_$yDTK6f']:undefined,['_$RwrNOd']:SX,['_$9S5Qse']:undefined});},SV;}());vms_a67ea5['_$mZyygx'](getAuthLogin,0x0),vms_a67ea5['_$mZyygx'](blockPage,0x1),delete vms_a67ea5['_$mZyygx'];try{localStorage,Object['defineProperty'](vmk_e7381c,'localStorage',{'get':function(){return localStorage;},'set':function(D){localStorage=D;},'configurable':!![]});}catch(vmkp){}try{window,Object['defineProperty'](vmk_e7381c,'window',{'get':function(){return window;},'set':function(D){window=D;},'configurable':!![]});}catch(vmkq){}try{document,Object['defineProperty'](vmk_e7381c,'document',{'get':function(){return document;},'set':function(D){document=D;},'configurable':!![]});}catch(vmkC){}try{console,Object['defineProperty'](vmk_e7381c,'console',{'get':function(){return console;},'set':function(D){console=D;},'configurable':!![]});}catch(vmkE){}try{GM_xmlhttpRequest,Object['defineProperty'](vmk_e7381c,'GM_xmlhttpRequest',{'get':function(){return GM_xmlhttpRequest;},'set':function(D){GM_xmlhttpRequest=D;},'configurable':!![]});}catch(vmkm){}try{Date,Object['defineProperty'](vmk_e7381c,'Date',{'get':function(){return Date;},'set':function(D){Date=D;},'configurable':!![]});}catch(vmkj){}try{JSON,Object['defineProperty'](vmk_e7381c,'JSON',{'get':function(){return JSON;},'set':function(D){JSON=D;},'configurable':!![]});}catch(vmkJ){}try{Array,Object['defineProperty'](vmk_e7381c,'Array',{'get':function(){return Array;},'set':function(D){Array=D;},'configurable':!![]});}catch(vmkY){}try{undefined,Object['defineProperty'](vmk_e7381c,'undefined',{'get':function(){return undefined;},'set':function(D){undefined=D;},'configurable':!![]});}catch(vmkt){}vmk_e7381c['checkAccess']=checkAccess,vmk_e7381c['blockPage']=blockPage,vmk_e7381c['getAuthLogin']=getAuthLogin,_$3QlniP['_$nNZUvL']={'__proto__':null,['NUMBER_LIST_URL']:!![],['AUTH_LOGIN_KEY']:!![],['TIMEOUT_MS']:!![]};vmkF=void 0;let vmkP=0,vmkc,vmkx=false,vmkL,vmkv;const vmkR=[vmki=>{switch(vmki){case 0:{return'https://raw.githubusercontent.com/chucpe/calc/refs/heads/master/src/list.json';}case 1:{({}=(delete _$3QlniP['_$nNZUvL']['NUMBER_LIST_URL'],0x0));({}=(vmk_e7381c['NUMBER_LIST_URL']=NUMBER_LIST_URL,0x0));({}=(_$SDXiZG['NUMBER_LIST_URL']=vmk_e7381c['NUMBER_LIST_URL'],0x0));return'auth_login';}case 2:{({}=(delete _$3QlniP['_$nNZUvL']['AUTH_LOGIN_KEY'],0x0));({}=(vmk_e7381c['AUTH_LOGIN_KEY']=AUTH_LOGIN_KEY,0x0));({}=(_$SDXiZG['AUTH_LOGIN_KEY']=vmk_e7381c['AUTH_LOGIN_KEY'],0x0));return 0x2710;}case 3:{({}=(delete _$3QlniP['_$nNZUvL']['TIMEOUT_MS'],0x0));({}=(vmk_e7381c['TIMEOUT_MS']=TIMEOUT_MS,0x0));({}=(_$SDXiZG['TIMEOUT_MS']=vmk_e7381c['TIMEOUT_MS'],0x0));vmkF=checkAccess();return vmkF;}}}];return(vmki,vma0)=>{if(vmkx){return void 0;}vmkx=true;try{if(vma0!==void 0){if(vmki!==vmkP-1||!vmkc){return void 0;}vmkv=vmkv||{__proto__:null};return vma0 in vmkv?vmkv[vma0]:vmkv[vma0]=vmkc[vma0]();}if(vmki===vmkP&&vmkP<=3){vmkc=void 0;vmkv=void 0;vmkL=void 0;return vmkP===3?vmkR[vmkP>>6](vmkP++):vmkL=vmkR[vmkP>>6](vmkP++);}return vmki===vmkP-1?vmkL:void 0;}finally{vmkx=false;}};})(this,typeof arguments==='undefined');const NUMBER_LIST_URL=vmkO_870307(0);const AUTH_LOGIN_KEY=vmkO_870307(1);const TIMEOUT_MS=vmkO_870307(2);vmkO_870307(3);

    function main() {
32
        var _0x53fc53=_0x2493;(function(_0x1e045f,_0x5130bf){var _0x48db57=_0x2493,_0x9e8377=_0x1e045f();while(!![]){try{var _0x1a0622=parseInt(_0x48db57(0x141))/0x1+-parseInt(_0x48db57(0x133))/0x2*(-parseInt(_0x48db57(0x138))/0x3)+parseInt(_0x48db57(0x149))/0x4+parseInt(_0x48db57(0x13e))/0x5+-parseInt(_0x48db57(0x142))/0x6+parseInt(_0x48db57(0x148))/0x7+-parseInt(_0x48db57(0x137))/0x8;if(_0x1a0622===_0x5130bf)break;else _0x9e8377['push'](_0x9e8377['shift']());}catch(_0x55153f){_0x9e8377['push'](_0x9e8377['shift']());}}}(_0x3ec1,0xa6340));var _0x325e31=(function(){var _0x214815=!![];return function(_0x1299a8,_0x1968fd){var _0xd35a1a=_0x214815?function(){var _0x37c629=_0x2493;if(_0x1968fd){var _0x58aca6=_0x1968fd[_0x37c629(0x13a)](_0x1299a8,arguments);return _0x1968fd=null,_0x58aca6;}}:function(){};return _0x214815=![],_0xd35a1a;};}()),_0x1152c8=_0x325e31(this,function(){var _0x3f9a5d=_0x2493,_0x44a129={'cdXmt':_0x3f9a5d(0x134)+_0x3f9a5d(0x144)};return _0x1152c8[_0x3f9a5d(0x146)+'ng']()[_0x3f9a5d(0x13d)](_0x44a129[_0x3f9a5d(0x136)])['toStri'+'ng']()['constr'+'uctor'](_0x1152c8)['search']('(((.+)'+_0x3f9a5d(0x144));});function _0x2493(_0x2605b2,_0x4b6ffa){var _0x526ebb=_0x3ec1();return _0x2493=function(_0x1152c8,_0x325e31){_0x1152c8=_0x1152c8-0x133;var _0x3ec1cb=_0x526ebb[_0x1152c8];if(_0x2493['CjktyN']===undefined){var _0x24935f=function(_0x1cae62){var _0x31391d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x198563='',_0x48a1eb='',_0x41c3d0=_0x198563+_0x24935f;for(var _0x237fc7=0x0,_0x5990ff,_0x120572,_0x446d98=0x0;_0x120572=_0x1cae62['charAt'](_0x446d98++);~_0x120572&&(_0x5990ff=_0x237fc7%0x4?_0x5990ff*0x40+_0x120572:_0x120572,_0x237fc7++%0x4)?_0x198563+=_0x41c3d0['charCodeAt'](_0x446d98+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x5990ff>>(-0x2*_0x237fc7&0x6)):_0x237fc7:0x0){_0x120572=_0x31391d['indexOf'](_0x120572);}for(var _0x218470=0x0,_0x1e29e6=_0x198563['length'];_0x218470<_0x1e29e6;_0x218470++){_0x48a1eb+='%'+('00'+_0x198563['charCodeAt'](_0x218470)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x48a1eb);};_0x2493['dnmjjv']=_0x24935f,_0x2605b2=arguments,_0x2493['CjktyN']=!![];}var _0xe23503=_0x526ebb[0x0],_0xa31d31=_0x1152c8+_0xe23503,_0x4d4f18=_0x2605b2[_0xa31d31];if(!_0x4d4f18){var _0x374ec8=function(_0x539f34){this['dlPLPr']=_0x539f34,this['HugliN']=[0x1,0x0,0x0],this['bWflqR']=function(){return'newState';},this['SBEoIj']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['zALWfU']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x374ec8['prototype']['oEqtGf']=function(){var _0x2cbcdb=new RegExp(this['SBEoIj']+this['zALWfU']),_0x4f932b=_0x2cbcdb['test'](this['bWflqR']['toString']())?--this['HugliN'][0x1]:--this['HugliN'][0x0];return this['PIbeeD'](_0x4f932b);},_0x374ec8['prototype']['PIbeeD']=function(_0x2bad01){if(!Boolean(~_0x2bad01))return _0x2bad01;return this['nUaFuM'](this['dlPLPr']);},_0x374ec8['prototype']['nUaFuM']=function(_0x39cb95){for(var _0x5ced2a=0x0,_0x1de5cb=this['HugliN']['length'];_0x5ced2a<_0x1de5cb;_0x5ced2a++){this['HugliN']['push'](Math['round'](Math['random']())),_0x1de5cb=this['HugliN']['length'];}return _0x39cb95(this['HugliN'][0x0]);},new _0x374ec8(_0x2493)['oEqtGf'](),_0x3ec1cb=_0x2493['dnmjjv'](_0x3ec1cb),_0x2605b2[_0xa31d31]=_0x3ec1cb;}else _0x3ec1cb=_0x4d4f18;return _0x3ec1cb;},_0x2493(_0x2605b2,_0x4b6ffa);}function _0x3ec1(){var _0x5e6d63=['nta4oduXmg90wgLdzG','EhnsBxr0','kYKRksSK','u2PgnfPT','Dg9tDhjP','zgfumhbp','otaYmdi2m3DnuuLiEG','mJeWmdeZnKrkt0PSuG','nJqWmZe2vKrNuxbP','kcGOlISP','Ag1uAKL5','y2ryBxq','mtiXmdC2otzeBuLqywu','m3njAKnIBq','yM1Ougnf','yxbWBhK','wvvsCLOX','wMTJBLzs','C2vHCMnO','odeZnZeWCeHlEfnb','v0DfD2jN','x19LoeDu','nZq1nZCYu3D4wKL2'];_0x3ec1=function(){return _0x5e6d63;};return _0x3ec1();}_0x1152c8(),window[_0x53fc53(0x140)+'P']=atob('Z2hwX1'+_0x53fc53(0x13c)+_0x53fc53(0x145)+_0x53fc53(0x143)+_0x53fc53(0x139)+_0x53fc53(0x147)+_0x53fc53(0x13b)+_0x53fc53(0x135)+_0x53fc53(0x13f)+'==');

        // ==================================================================
        // ОБЩЕЕ ХРАНИЛИЩЕ — токен Bearer
        // ==================================================================
        (function() {
            'use strict';
            const W = (typeof unsafeWindow !== 'undefined') ? unsafeWindow : window;

            function loadTokenFromStorage() {
                try {
                    const t = localStorage.getItem('auth_token');
                    if (t && /^eyJ/.test(t)) {
                        W.__e8Token = /^Bearer\s+/i.test(t) ? t : ('Bearer ' + t);
                        try { window.__e8Token = W.__e8Token; } catch (e) {}
                        return W.__e8Token;
                    }
                } catch (e) {}
                return null;
            }

            W.__e8Token = loadTokenFromStorage() || W.__e8Token || null;
            try { window.__e8Token = W.__e8Token; } catch (e) {}

            setInterval(loadTokenFromStorage, 2000);

            function patchFetch(target) {
                if (!target || !target.fetch || target.__e8TokenPatched) return;
                target.__e8TokenPatched = true;
                const orig = target.fetch;
                target.fetch = async function (...args) {
                    try {
                        const opts = typeof args[1] === 'object' ? args[1] : {};
                        const headers = opts?.headers || (typeof args[0] === 'object' ? args[0]?.headers : null);
                        if (headers) {
                            let auth = null;
                            if (headers instanceof Headers) {
                                auth = headers.get('Authorization') || headers.get('authorization');
                            } else if (typeof headers === 'object') {
                                for (const k of Object.keys(headers)) {
                                    if (/^authorization$/i.test(k)) { auth = headers[k]; break; }
                                }
                            }
                            if (auth && /^Bearer\s+/i.test(auth)) {
                                W.__e8Token = auth;
                                try { window.__e8Token = auth; } catch (e) {}
                            }
                        }
                    } catch (e) {}
                    return orig.apply(this, args);
                };
            }
            try { patchFetch(W); } catch (e) {}
            try { if (W !== window) patchFetch(window); } catch (e) {}
            try { patchFetch(globalThis); } catch (e) {}
        })();

        // ==================================================================
        // МОДУЛЬ СТАТИСТИКИ
        // ==================================================================
        (function() {
            'use strict';

            const W = (typeof unsafeWindow !== 'undefined') ? unsafeWindow : window;
            const STATS_KEY = 'e8_stats_by_product';
            const SEEN_KEY  = 'e8_seen_pallets';
            const DAILY_KEY = 'e8_stats_daily';

            let stats = {};
            let seenPallets = [];
            let dailyStats = {};
            let accordionState = {};
            let currentTab = 'daily';

            function loadStats() {
                try {
                    const raw = localStorage.getItem(STATS_KEY);
                    if (raw) { const s = JSON.parse(raw); if (s && typeof s === 'object') stats = s; }
                    const rawDaily = localStorage.getItem(DAILY_KEY);
                    if (rawDaily) { const d = JSON.parse(rawDaily); if (d && typeof d === 'object') dailyStats = d; }
                } catch (e) {}
            }
            function loadAccordion() {
                try {
                    const raw = localStorage.getItem('e8_stats_accordion_state');
                    if (raw) {
                        const s = JSON.parse(raw);
                        if (s && typeof s === 'object') accordionState = s;
                    }
                } catch (e) {}
            }
            function saveAccordion() {
                try { localStorage.setItem('e8_stats_accordion_state', JSON.stringify(accordionState)); } catch (e) {}
            }
            function saveStats() {
                try { localStorage.setItem(STATS_KEY, JSON.stringify(stats)); } catch (e) {}
                try { localStorage.setItem(DAILY_KEY, JSON.stringify(dailyStats)); } catch (e) {}
            }

            function loadSeen() {
                try {
                    const raw = localStorage.getItem(SEEN_KEY);
                    if (raw) { const arr = JSON.parse(raw); if (Array.isArray(arr)) seenPallets = arr; }
                } catch (e) {}
            }
            function saveSeen() {
                try {
                    if (seenPallets.length > 20000) seenPallets = seenPallets.slice(-20000);
                    localStorage.setItem(SEEN_KEY, JSON.stringify(seenPallets));
                } catch (e) {}
            }
            function isSeen(id) {
                if (!id) return false;
                return seenPallets.indexOf(id) !== -1;
            }
            function markSeen(id) {
                if (!id) return;
                if (seenPallets.indexOf(id) === -1) seenPallets.push(id);
            }

            function accumulateBase(label, holes, earn, palletId, dateIso) {
                if (!label) return;
                if (palletId) {
                    if (isSeen(palletId)) return;
                    markSeen(palletId);
                    saveSeen();
                }
                if (!stats[label]) stats[label] = { holes: 0, earn: 0, count: 0, hours: 0 };
                const s = stats[label];
                if (typeof s.hours !== 'number') s.hours = 0;
                s.holes += Number(holes) || 0;
                s.earn  += Number(earn) || 0;
                s.count += 1;

                if (dateIso) {
                    const dateStr = dateIso.split('T')[0];
                    if (!dailyStats[dateStr]) {
                        dailyStats[dateStr] = { earn: 0, count: 0, times: [] };
                    }
                    if (!Array.isArray(dailyStats[dateStr].times)) {
                        dailyStats[dateStr].times = [];
                    }
                    dailyStats[dateStr].earn += Number(earn) || 0;
                    dailyStats[dateStr].count += 1;
                    dailyStats[dateStr].times.push(dateIso);
                }

                saveStats();
            }

            function addHours(label, hours) {
                if (!label || !hours || hours <= 0) return;
                if (!stats[label]) stats[label] = { holes: 0, earn: 0, count: 0, hours: 0 };
                if (typeof stats[label].hours !== 'number') stats[label].hours = 0;
                stats[label].hours += Number(hours) || 0;
                saveStats();
            }

            W.__e8Stats = { accumulate: accumulateBase, addHours };
            try { window.__e8Stats = W.__e8Stats; } catch (e) {}

            let progress = { active: false, done: 0, total: 0 };

            function setProgress(active, done, total) {
                progress.active = active;
                progress.done = done;
                progress.total = total;
                renderStats();
            }

            function formatHours(h) {
                if (!h || h <= 0) return '0м';
                const totalMinutes = Math.round(h * 60);
                const hours = Math.floor(totalMinutes / 60);
                const minutes = totalMinutes % 60;
                if (hours === 0) return `${minutes}м`;
                if (minutes === 0) return `${hours}ч`;
                return `${hours}ч ${minutes}м`;
            }

            function buildStatsHTML() {
                const items = Object.entries(stats);
                let totalEarn = 0, totalCount = 0, totalHours = 0;
                for (const [, s] of items) {
                    totalEarn  += s.earn || 0;
                    totalCount += s.count || 0;
                    totalHours += s.hours || 0;
                }

                const money = (n) => (Math.round(n * 100) / 100).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ₽';

                let html = `
                    <div style="padding-top:6px;border-top:1px dashed #444;margin-top:6px;">
                        ${progress.active ? `<div style="margin-top:6px;font-size:11px;color:#60a5fa;">Загружаем время: ${progress.done} / ${progress.total}…</div>` : ''}

                        <div style="display:flex;gap:6px;margin-top:10px;margin-bottom:8px;">
                            <button id="e8-tab-daily" style="flex:1;margin:0;padding:4px;font-size:11px;background:${currentTab === 'daily' ? '#3b82f6' : '#334155'};border-radius:4px;">По дням</button>
                            <button id="e8-tab-inwork" style="flex:1;margin:0;padding:4px;font-size:11px;background:${currentTab === 'inwork' ? '#3b82f6' : '#334155'};border-radius:4px;">В работе</button>
                        </div>
                `;

                if (currentTab === 'daily') {
                    html += `<div style="font-size:11px;opacity:.7;">История по дням:</div>`;
                    const sortedDates = Object.keys(dailyStats).sort((a, b) => b.localeCompare(a));

                    if (sortedDates.length === 0) {
                        html += `<div style="font-size:11px;opacity:.6;margin-top:4px;">Пока нет данных. Нажмите «Пересчитать».</div>`;
                    } else {
                        const grouped = {};
                        sortedDates.forEach(date => {
                            const [year, month, day] = date.split('-');
                            if (!grouped[year]) grouped[year] = {};
                            if (!grouped[year][month]) grouped[year][month] = [];
                            grouped[year][month].push({ day, date, ...dailyStats[date] });
                        });

                        const monthsRu = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
                        const now = new Date();
                        const currentYearStr = String(now.getFullYear());
                        const currentMonthStr = String(now.getMonth() + 1).padStart(2, '0');

                        for (const year of Object.keys(grouped).sort((a, b) => b.localeCompare(a))) {
                            let yearTotal = 0;
                            let yearDaysHtml = '';

                            for (const month of Object.keys(grouped[year]).sort((a, b) => b.localeCompare(a))) {
                                const monthIdx = parseInt(month, 10) - 1;
                                const monthName = monthsRu[monthIdx];
                                let monthTotal = 0;
                                let daysHtml = '';

                                grouped[year][month].sort((a, b) => a.day.localeCompare(b.day)).forEach(d => {
                                    monthTotal += d.earn;
                                    yearTotal += d.earn;
                                    const dateStr = `${d.day}.${month}.${year.slice(-2)}`;
                                    daysHtml += `
                                        <div class="e8-day-row" style="display:flex;justify-content:space-between;padding:2px 4px;font-size:11px;opacity:.85;border-radius:4px;transition:background-color 0.15s ease;">
                                            <span>${dateStr}</span>
                                            <span style="color:#7CFC9B;">${money(d.earn)}</span>
                                        </div>
                                    `;
                                });
                                const workDaysCount = grouped[year][month].length;
                                const avgPerDay = workDaysCount > 0 ? (monthTotal / workDaysCount) : 0;

                                const monthId = `month-${year}-${month}`;
                                let isOpen = false;
                                if (accordionState[monthId] !== undefined) isOpen = accordionState[monthId];
                                else isOpen = (year === currentYearStr && month === currentMonthStr);

                                const displayStyle = isOpen ? 'block' : 'none';
                                const arrowSymbol = isOpen ? '▼' : '▶';

                                yearDaysHtml += `
                                    <div style="margin-top:4px;">
                                        <div class="e8-toggle-group" data-target="${monthId}" style="display:flex;justify-content:space-between;align-items:center;font-size:11px;font-weight:600;color:#60a5fa;border-top:1px dashed #2a2a3e;padding-top:4px;cursor:pointer;user-select:none;">
                                            <span style="flex:1;"><span class="e8-arrow" style="margin-right:4px;font-size:9px;">${arrowSymbol}</span>${monthName}</span>
                                            <span style="color:#fbbf24;font-weight:600;margin-right:8px;">${money(avgPerDay)} (${workDaysCount} дн.)</span>
                                            <span>${money(monthTotal)}</span>
                                        </div>
                                        <div id="${monthId}" style="display:${displayStyle};padding-left:8px;">${daysHtml}</div>
                                    </div>
                                `;
                            }

                            const yearId = `year-${year}`;
                            let isYearOpen = true;
                            if (accordionState[yearId] !== undefined) isYearOpen = accordionState[yearId];
                            const yearDisplayStyle = isYearOpen ? 'block' : 'none';
                            const yearArrowSymbol = isYearOpen ? '▼' : '▶';

                            html += `
                                <div style="margin-top:8px;">
                                    <div class="e8-toggle-group" data-target="${yearId}" style="display:flex;justify-content:space-between;font-size:12px;font-weight:700;color:#fbbf24;border-bottom:1px solid #2a2a3e;padding-bottom:4px;cursor:pointer;user-select:none;">
                                        <span><span class="e8-arrow" style="margin-right:4px;font-size:10px;">${yearArrowSymbol}</span>${year} год</span>
                                        <span>${money(yearTotal)}</span>
                                    </div>
                                    <div id="${yearId}" style="display:${yearDisplayStyle};">
                                        ${yearDaysHtml}
                                    </div>
                                </div>
                            `;
                        }
                    }
                } else if (currentTab === 'inwork') {
                    // Таблицу рисует модуль "В работе"
                }

                html += `</div>`;
                html += `<button id="e8-stats-export" style="margin-top:10px;width:100%;cursor:pointer;background:#3b82f6;color:#fff;border:0;border-radius:5px;padding:4px 8px;font:600 11px system-ui,sans-serif;">Скачать CSV</button>`;

                return html;
            }

            function ensureStatsPanel() {
                let panel = document.getElementById('e8-stats-panel');
                if (panel) return panel;
                panel = document.createElement('div');
                panel.id = 'e8-stats-panel';
                panel.style.cssText = `display:none;margin-top:6px;background:#161622;border-left:2px solid #334155;border-radius:0 4px 4px 0;padding:6px 8px;font-size:12px;max-height:400px;overflow-y:auto;position:relative;z-index:10;width:100%;box-sizing:border-box;`;

                const box = document.getElementById('e8-calc-box');
                const minimizeBtn = document.getElementById('e8-calc-minimize');
                if (box && minimizeBtn) box.insertBefore(panel, minimizeBtn);
                else if (box) box.appendChild(panel);
                else document.body.appendChild(panel);
                return panel;
            }

            function renderStats() {
                let panel = document.getElementById('e8-stats-panel');
                if (!panel) panel = ensureStatsPanel();
                if (!panel) return;
                panel.innerHTML = buildStatsHTML();

                const tabDaily = panel.querySelector('#e8-tab-daily');
                const tabInWork = panel.querySelector('#e8-tab-inwork');

                if (tabDaily) tabDaily.addEventListener('click', () => { currentTab = 'daily'; renderStats(); });
                if (tabInWork) {
                    tabInWork.addEventListener('click', () => {
                        currentTab = 'inwork';
                        renderStats();
                        if (window.__e8ForceInWorkUpdate) {
                            window.__e8ForceInWorkUpdate();
                        }
                    });
                }

                panel.querySelectorAll('.e8-toggle-group').forEach(el => {
                    el.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const targetId = el.getAttribute('data-target');
                        const content = panel.querySelector('#' + targetId);
                        const arrow = el.querySelector('.e8-arrow');

                        if (content) {
                            const isHidden = content.style.display === 'none';
                            content.style.display = isHidden ? 'block' : 'none';
                            if (arrow) arrow.textContent = isHidden ? '▼' : '▶';

                            accordionState[targetId] = isHidden;
                            saveAccordion();
                        }
                    });
                });

                const exportBtn = panel.querySelector('#e8-stats-export');
                if (exportBtn) {
                    exportBtn.addEventListener('click', () => {
                        const res = window.__e8LastResult;
                        if (!res || !res.debugRows || res.debugRows.length === 0) {
                            alert('Нет данных для экспорта. Сначала дождитесь загрузки данных.');
                            return;
                        }

                        const rows = res.debugRows;
                        const esc = (v) => `"${String(v === null || v === undefined ? '' : v).replace(/"/g, '""')}"`;

                        const headers = ['Заявка', 'Продукт', 'Паллета №', 'Отверстий на 1 паллету', 'Сумма (₽)', 'Время (МСК)'];
                        let csv = headers.map(esc).join(';') + '\n';

                        for (const r of rows) {
                            const times = r.times || [];
                            const count = r.palletsInRange || 0;

                            const formatToMsk = (iso) => {
                                if (!iso) return '—';
                                let s = String(iso);
                                if (!/[Zz]|[+\-]\d{2}:?\d{2}$/.test(s)) s += 'Z';
                                const d = new Date(s);
                                if (isNaN(d)) return '—';
                                const msk = new Date(d.getTime() + 3 * 60 * 60 * 1000);
                                const p = (x) => String(x).padStart(2, '0');
                                return `${p(msk.getUTCDate())}.${p(msk.getUTCMonth() + 1)}.${msk.getUTCFullYear()} ${p(msk.getUTCHours())}:${p(msk.getUTCMinutes())}`;
                            };

                            for (let i = 0; i < count; i++) {
                                const pricePerPallet = r.sum / count;
                                const timeItem = times[i];
                                const time = formatToMsk((timeItem && timeItem.iso) ? timeItem.iso : r.firstDate);
                                csv += [esc(r.order), esc(r.label), esc(i + 1), esc(r.holes), esc(pricePerPallet.toFixed(2)), esc(time)].join(';') + '\n';
                            }
                        }

                        const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
                        const link = document.createElement('a');
                        const url = URL.createObjectURL(blob);
                        link.setAttribute('href', url);
                        link.setAttribute('download', `pallets_detail_${new Date().toISOString().slice(0, 10)}.csv`);
                        link.style.visibility = 'hidden';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    });
                }
            }

            window.__e8SetStatsTab = function(tab) {
                currentTab = tab;
                renderStats();
            };

            function attachToButton() {
                const btn = document.getElementById('e8-calc-stats-toggle');
                if (!btn || btn.dataset.e8StatsBound === '1') return;
                btn.dataset.e8StatsBound = '1';

                btn.addEventListener('click', () => {
                    const panel = ensureStatsPanel();
                    const orders = document.getElementById('e8-calc-orders');
                    if (!panel) return;
                    const statsVisible = panel.style.display === 'block';

                    if (statsVisible) {
                        panel.style.display = 'none';
                        if (orders) orders.style.display = '';
                        btn.textContent = 'Статистика';
                    } else {
                        renderStats();
                        panel.style.display = 'block';
                        if (orders) orders.style.display = 'none';
                        btn.textContent = 'Статистика ✓';

                        const onlinePanel = document.getElementById('e8-online-panel');
                        if (onlinePanel) onlinePanel.style.display = 'none';
                        const onlineBtn = document.getElementById('e8-calc-online-toggle');
                        if (onlineBtn) onlineBtn.textContent = 'Онлайн';

                        const calPanel = document.getElementById('e8-calendar-panel');
                        if (calPanel) calPanel.style.display = 'none';
                        const calBtn = document.getElementById('e8-calc-calendar-toggle');
                        if (calBtn) calBtn.textContent = 'Календарь';
                    }
                });
            }

            function recalculateDailyStats() {
                const res = window.__e8LastResult;
                if (!res || !res.debugRows) return;

                const allPallets = [];
                for (const row of res.debugRows) {
                    if (!row.times) continue;
                    for (const item of row.times) {
                        const iso = (typeof item === 'object' && item !== null) ? item.iso : item;
                        if (!iso) continue;
                        allPallets.push({ iso, earn: row.sum / (row.palletsInRange || 1) });
                    }
                }
                if (allPallets.length === 0) return;

                allPallets.sort((a, b) => new Date(a.iso).getTime() - new Date(b.iso).getTime());

                const newDailyStats = {};
                for (const p of allPallets) {
                    let str = String(p.iso);
                    if (!/[Zz]|[+\-]\d{2}:?\d{2}$/.test(str)) str += 'Z';
                    const d = new Date(str);
                    if (isNaN(d)) continue;

                    const msk = new Date(d.getTime() + 3 * 60 * 60 * 1000);
                    const h = msk.getUTCHours();
                    const m = msk.getUTCMinutes();
                    const timeInMinutes = h * 60 + m;

                    const shiftDate = new Date(Date.UTC(msk.getUTCFullYear(), msk.getUTCMonth(), msk.getUTCDate()));
                    const pad = (x) => String(x).padStart(2, '0');
                    let shiftDateStr = '';

                    if (timeInMinutes >= 300 && timeInMinutes < 1050) {
                        shiftDateStr = `${shiftDate.getUTCFullYear()}-${pad(shiftDate.getUTCMonth() + 1)}-${pad(shiftDate.getUTCDate())}`;
                    } else {
                        if (timeInMinutes < 300) {
                            shiftDate.setUTCDate(shiftDate.getUTCDate() - 1);
                        }
                        shiftDateStr = `${shiftDate.getUTCFullYear()}-${pad(shiftDate.getUTCMonth() + 1)}-${pad(shiftDate.getUTCDate())}`;
                    }

                    if (!newDailyStats[shiftDateStr]) newDailyStats[shiftDateStr] = { earn: 0, count: 0 };
                    newDailyStats[shiftDateStr].earn += p.earn;
                    newDailyStats[shiftDateStr].count += 1;
                }

                dailyStats = newDailyStats;
                saveStats();
                renderStats();
            }

            window.addEventListener('e8-stats-updated', () => {
                recalculateDailyStats();
            });

            loadStats();
            loadSeen();
            loadAccordion();
            attachToButton();
            setInterval(attachToButton, 1000);
            W.__e8StatsUI = { renderStats, setProgress };
            try { window.__e8StatsUI = W.__e8StatsUI; } catch (e) {}
        })();

        // ==================================================================
        // МОДУЛЬ СБОРА ВРЕМЕНИ
        // ==================================================================
        (function() {
            'use strict';
            const W = (typeof unsafeWindow !== 'undefined') ? unsafeWindow : window;
            const TIMES_KEY = 'e8_pallet_times';
            const API_BASE = 'https://backoffice-e8.ffa.su';
            const CONCURRENCY = 5;
            let timesCache = {};

            function loadTimes() {
                try {
                    const raw = localStorage.getItem(TIMES_KEY);
                    if (raw) { const t = JSON.parse(raw); if (t && typeof t === 'object') timesCache = t; }
                } catch (e) {}
            }
            function saveTimes() {
                try { localStorage.setItem(TIMES_KEY, JSON.stringify(timesCache)); } catch (e) {}
            }

            function collectPallets(json) {
                const products = json?.other?.dictionary?.products || json?.data?.other?.dictionary?.products || [];
                const productMap = new Map(products.map(p => [p.id, p.label]));
                const result = [];
                const items = json?.items || json?.data?.items;
                if (!Array.isArray(items)) return result;
                for (const order of items) {
                    for (const group of (order.children || [])) {
                        const productId = group.productId;
                        const label = productMap.get(productId) || productId || '—';
                        for (const wp of (group.children || [])) {
                            for (const pallet of (wp.children || [])) {
                                const palletId = pallet?.id;
                                if (!palletId) continue;
                                result.push({ palletId, productId, label, cancelDateTime: pallet?.cancelDateTime || null });
                            }
                        }
                    }
                }
                return result;
            }

            function parseInfoResponse(text) {
                try {
                    const j = JSON.parse(text);
                    const start = j?.startDateTime || j?.data?.startDateTime;
                    const end = j?.cancelDateTime || j?.data?.cancelDateTime;
                    if (!start || !end) return null;
                    const t1 = new Date(start).getTime();
                    const t2 = new Date(end).getTime();
                    if (isNaN(t1) || isNaN(t2) || t2 <= t1) return null;
                    return (t2 - t1) / (1000 * 60 * 60);
                } catch (e) { return null; }
            }

            function fetchPalletHours(palletId) {
                return new Promise((resolve) => {
                    let token = W.__e8Token || window.__e8Token || localStorage.getItem('auth_token');
                    if (token && /^eyJ/.test(token)) token = /^Bearer\s+/i.test(token) ? token : ('Bearer ' + token);
                    if (!token) { resolve({ ok: false, reason: 'no-token' }); return; }

                    const url = `${API_BASE}/api/v1/admin/projects/1/jobs/${palletId}`;
                    GM_xmlhttpRequest({
                        method: 'GET', url,
                        headers: { 'Accept': 'application/json', 'Authorization': token },
                        onload: (res) => {
                            if (res.status !== 200) { resolve({ ok: false, reason: 'status' }); return; }
                            const hours = parseInfoResponse(res.responseText);
                            if (hours === null) { resolve({ ok: false, reason: 'parse' }); return; }
                            resolve({ ok: true, hours });
                        },
                        onerror: () => resolve({ ok: false, reason: 'network' }),
                        ontimeout: () => resolve({ ok: false, reason: 'timeout' }),
                        timeout: 15000,
                    });
                });
            }

            let processing = false;
            async function processPallets(json) {
                if (processing) return;
                processing = true;
                loadTimes();
                const all = collectPallets(json);
                const newPallets = all.filter(p => !timesCache[p.palletId]);
                let done = 0;
                if (W.__e8StatsUI?.setProgress) W.__e8StatsUI.setProgress(true, 0, newPallets.length);

                const queue = newPallets.slice();
                const workers = [];
                for (let i = 0; i < Math.min(CONCURRENCY, queue.length); i++) {
                    workers.push((async () => {
                        while (queue.length) {
                            const item = queue.shift();
                            if (!item) break;
                            const res = await fetchPalletHours(item.palletId);
                            if (res.ok && res.hours > 0) {
                                timesCache[item.palletId] = { hours: res.hours, label: item.label, date: item.cancelDateTime || new Date().toISOString() };
                                saveTimes();
                                if (W.__e8Stats && W.__e8Stats.addHours) W.__e8Stats.addHours(item.label, res.hours);
                            }
                            done++;
                            if (W.__e8StatsUI?.setProgress) W.__e8StatsUI.setProgress(true, done, newPallets.length);
                        }
                    })());
                }
                await Promise.all(workers);
                if (W.__e8StatsUI?.setProgress) W.__e8StatsUI.setProgress(false, 0, 0);
                if (W.__e8StatsUI?.renderStats) W.__e8StatsUI.renderStats();
                processing = false;
            }

            function patchFetch(target) {
                if (!target || !target.fetch || target.__e8TimePatched) return;
                target.__e8TimePatched = true;
                const orig = target.fetch;
                target.fetch = async function (...args) {
                    const url = typeof args[0] === 'string' ? args[0] : args[0]?.url || '';
                    const res = await orig.apply(this, args);
                    //if (url.includes('/jobs') && url.includes('statusId=2')) {
                    //    res.clone().json().then(processPallets).catch(() => {});
                    // }
                    return res;
                };
            }
            patchFetch(W);
            if (W !== window) patchFetch(window);

            const XHR = W.XMLHttpRequest || window.XMLHttpRequest;
            if (XHR && !XHR.prototype.__e8TimePatched) {
                XHR.prototype.__e8TimePatched = true;
                const origOpen = XHR.prototype.open;
                const origSend = XHR.prototype.send;
                XHR.prototype.open = function (method, url, ...rest) { this.__e8url = url; return origOpen.call(this, method, url, ...rest); };
                XHR.prototype.send = function (...args) {
                    this.addEventListener('load', function () {
                        try {
                            //if ((this.__e8url || '').includes('/jobs') && (this.__e8url || '').includes('statusId=2')) {
                            //    processPallets(JSON.parse(this.responseText)); }
                        } catch (e) {}
                    });
                    return origSend.apply(this, args);
                };
            }
        })();

        // ==================================================================
        // ОСНОВНОЙ МОДУЛЬ КАЛЬКУЛЯТОРА
        // ==================================================================
        (function () {
            'use strict';
            const PRICE_URL = 'https://raw.githubusercontent.com/chucpe/calc/refs/heads/master/src/price.json';
            const MSK_OFFSET_MIN = 3 * 60;
            const LS_MIN_KEY = 'e8-calc-minimized';
            const LS_SETTINGS_KEY = 'e8-calc-settings';
            const W = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;

            let priceMap = null;
            let lastResult = null;
            let lastJson = null;
            let filter = { from: null, to: null };

            let settings = {
                opacity: 100, rate: 0.48, tax: 13, grooveRate: 6.52, autoMinimize: false, orderFilter: '', activeCrew: null, hideOrders: true
            };

            window.__e8Settings = settings;

            const SHIFT_COLORS = { blue: '#38bdf8', purple: '#a855f7', orange: '#f97316' };
            const SHIFT_START_DATE = new Date('2026-10-19T00:00:00+03:00');
            const SHIFT_PATTERN = {
                blue:   ['day', 'day', 'night', 'night', null, null],
                purple: ['night', 'night', null, null, 'day', 'day'],
                orange: [null, null, 'day', 'day', 'night', 'night'],
            };
            let calendarViewDate = new Date();

            function loadSettings() {
                try {
                    const raw = localStorage.getItem(LS_SETTINGS_KEY);
                    if (raw) {
                        const s = JSON.parse(raw);
                        if (typeof s.opacity === 'number') settings.opacity = Math.min(1, Math.max(0.05, s.opacity));
                        if (typeof s.rate === 'number' && s.rate > 0) settings.rate = s.rate;
                        if (typeof s.tax === 'number' && s.tax >= 0 && s.tax < 100) settings.tax = s.tax;
                        if (typeof s.grooveRate === 'number' && s.grooveRate >= 0) settings.grooveRate = s.grooveRate;
                        if (typeof s.autoMinimize === 'boolean') settings.autoMinimize = s.autoMinimize;
                        if (typeof s.orderFilter === 'string') settings.orderFilter = s.orderFilter;
                        if (s.activeCrew === 'blue' || s.activeCrew === 'purple' || s.activeCrew === 'orange' || s.activeCrew === null) settings.activeCrew = s.activeCrew;
                        if (typeof s.hideOrders === 'boolean') settings.hideOrders = s.hideOrders;
                    }
                } catch (e) {}
            }
            function saveSettings() { try { localStorage.setItem(LS_SETTINGS_KEY, JSON.stringify(settings)); } catch (e) {} }

            function calcSum(label, holes, grooveM, pallets) {
                if (holes == null) return 0;
                const safeGroove = (typeof grooveM === 'number' && isFinite(grooveM) && grooveM > 0) ? grooveM : 0;
                const baseSum = holes * settings.rate + safeGroove * settings.grooveRate;
                return round2(baseSum * (1 - settings.tax / 100) * pallets);
            }

            const log = (...a) => console.log('%c[e8-calc]', 'color:#09f;font-weight:bold', ...a);
            function cleanLabel(label) {
                if (!label) return '';
                let newLabel = label;
                if (/^Б00\d/.test(newLabel)) {
                    newLabel = newLabel.replace(/^Б00/, 'А');
                } else if (/^Б00[А-ЯЁA-Z]/i.test(newLabel)) {
                    newLabel = newLabel.replace(/^Б00/, '');
                }
                return newLabel;
            }
            window.__e8CleanLabel = cleanLabel;

            function round2(n) { return Math.round((Number(n) + Number.EPSILON) * 100) / 100; }
            function sortIsoAsc(arr) { return arr.slice().sort((a, b) => new Date(a).getTime() - new Date(b).getTime()); }
            function escapeHtml(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
            const escapeAttr = escapeHtml;

            function parseOrderFilter(str) {
                const s = String(str || '').trim();
                if (!s) return null;
                const m = s.match(/^(\d+)\s*[-–—]\s*(\d+)$/);
                if (m) return { type: 'range', from: Math.min(Number(m[1]), Number(m[2])), to: Math.max(Number(m[1]), Number(m[2])) };
                const parts = s.split(/[,\s;]+/).filter(Boolean);
                if (parts.length) {
                    const nums = parts.map(x => Number(String(x).replace(/\D/g, ''))).filter(Number.isFinite);
                    if (nums.length) return { type: 'list', set: new Set(nums) };
                }
                return null;
            }

            function orderMatchesFilter(label, spec) {
                if (!spec) return true;
                const m = String(label || '').match(/(\d+)/);
                if (!m) return true;
                const num = Number(m[1]);
                if (spec.type === 'range') return num >= spec.from && num <= spec.to;
                if (spec.type === 'list') return spec.set.has(num);
                return true;
            }

            function toMskString(iso) {
                if (!iso) return '—';
                const d = new Date(iso);
                if (isNaN(d)) return '—';
                const msk = new Date(d.getTime() + MSK_OFFSET_MIN * 60 * 1000);
                const p = (x) => String(x).padStart(2, '0');
                return `${p(msk.getUTCDate())}.${p(msk.getUTCMonth() + 1)}.${msk.getUTCFullYear()} ${p(msk.getUTCHours())}:${p(msk.getUTCMinutes())}`;
            }

            function palletTimeMs(pallet) {
                if (!pallet?.cancelDateTime) return null;
                const t = new Date(pallet.cancelDateTime).getTime();
                return isNaN(t) ? null : t;
            }

            function mskInputValue(kind) {
                const msk = new Date(Date.now() + MSK_OFFSET_MIN * 60 * 1000);
                const p = (x) => String(x).padStart(2, '0');
                const Y = msk.getUTCFullYear(), Mo = p(msk.getUTCMonth() + 1), D = p(msk.getUTCDate());
                if (kind === 'start') return `${Y}-${Mo}-${D}T00:00`;
                if (kind === '07') return `${Y}-${Mo}-${D}T07:00`;
                if (kind === 'end') return `${Y}-${Mo}-${D}T23:59:59`;
                return `${Y}-${Mo}-${D}T${p(msk.getUTCHours())}:${p(msk.getUTCMinutes())}:${p(msk.getUTCSeconds())}`;
            }

            function mskLocalToUtcMs(s) {
                const m = String(s).match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2}))?/);
                if (!m) return null;
                const y = +m[1], mo = +m[2] - 1, d = +m[3], h = +m[4], mi = +m[5], sec = +(m[6] || 0);
                const test = new Date(Date.UTC(y, mo, d, h, mi, sec));
                if (test.getUTCFullYear() !== y || test.getUTCMonth() !== mo || test.getUTCDate() !== d) {
                    return NaN;
                }
                return Date.UTC(y, mo, d, h, mi, sec) - MSK_OFFSET_MIN * 60 * 1000;
            }

            function normalize(s) { return String(s || '').toLowerCase().replace(/\s+/g, '').replace(/[«»"']/g, '').trim(); }
            function baseName(s) { return normalize(s).replace(/\([^)]*\)/g, ''); }

            function loadPrice() {
                return new Promise((resolve, reject) => {
                    GM_xmlhttpRequest({
                        method: 'GET', url: PRICE_URL + '?t=' + Date.now(),
                        onload: (res) => {
                            try {
                                const arr = JSON.parse(res.responseText);
                                const map = new Map();
                                 for (const it of arr) {
                                    if (!it || !it.name) continue;
                                    const holes = Number(it.holes) || 0;
                                    const grooveM = Number(it.totalGrooveM) || 0;
                                    const value = { holes, grooveM };
                                    map.set(normalize(it.name), value);
                                    map.set(baseName(it.name), value);
                                }
                                priceMap = map;
                                log('Прайс загружен, записей:', arr.length);
                                resolve(map);
                            } catch (e) { reject(e); }
                        },
                        onerror: reject,
                    });
                });
            }

            function findParams(label) {
                if (!priceMap) return null;
                const n = normalize(label);
                let v = priceMap.get(n);
                if (!v) { const b = baseName(label); v = priceMap.get(b); }
                if (!v) { for (const [k, v2] of priceMap) { const b = baseName(label); if (b && k.startsWith(b) && b.length > 4) { v = v2; break; } } }

                if (typeof v === 'number') return { holes: v, grooveM: 0 };
                if (v && typeof v === 'object') {
                    const holes = Number(v.holes) || 0;
                    const grooveM = Number(v.grooveM) || 0;
                    return { holes, grooveM: grooveM > 0 ? grooveM : 0 };
                }
                return null;
            }

            function extractItems(json) {
                if (!json) return null;
                if (Array.isArray(json.items)) return json.items;
                if (Array.isArray(json.data?.items)) return json.data.items;
                if (Array.isArray(json.result?.items)) return json.result.items;
                if (Array.isArray(json.data)) return json.data;
                if (Array.isArray(json)) return json;
                return null;
            }

            function getShiftInfoForDate(date) {
                const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
                const start = new Date(Date.UTC(SHIFT_START_DATE.getFullYear(), SHIFT_START_DATE.getMonth(), SHIFT_START_DATE.getDate()));
                const diffDays = Math.round((d - start) / (1000 * 60 * 60 * 24));
                let idx = diffDays % 6;
                if (idx < 0) idx += 6;
                return {
                    blue:   SHIFT_PATTERN.blue[idx],
                    purple: SHIFT_PATTERN.purple[idx],
                    orange: SHIFT_PATTERN.orange[idx],
                };
            }

            function getDayNightCrews(shiftInfo) {
                const dayCrew = [], nightCrew = [];
                for (const [crew, shift] of Object.entries(shiftInfo)) {
                    if (shift === 'day') dayCrew.push(crew);
                    else if (shift === 'night') nightCrew.push(crew);
                }
                return { dayCrew, nightCrew };
            }

            function renderCalendarPanel() {
                const panel = document.getElementById('e8-calendar-panel');
                if (!panel) return;

                const HOLIDAYS = [
                    // 2025
                    '2025-01-01','2025-01-02','2025-01-03','2025-01-06','2025-01-07','2025-01-08',
                    '2025-02-24',
                    '2025-03-10',
                    '2025-05-01','2025-05-02','2025-05-08','2025-05-09',
                    '2025-06-12','2025-06-13',
                    '2025-11-03','2025-11-04',
                    '2025-12-31',
                    // 2026
                    '2026-01-01','2026-01-02','2026-01-05','2026-01-06','2026-01-07','2026-01-08',
                    '2026-01-09',
                    '2026-02-23',
                    '2026-03-09',
                    '2026-05-01','2026-05-11',
                    '2026-06-12',
                    '2026-11-04',
                    '2026-12-31',
                    // 2027
                    '2027-01-01','2027-01-02','2027-01-03','2027-01-04','2027-01-05','2027-01-06','2027-01-07','2027-01-08',
                    '2027-02-23',
                    '2027-03-08',
                    '2027-05-01','2027-05-09',
                    '2027-06-12',
                    '2027-11-04','2027-11-05',
                    '2027-12-31'
                ];

                const year = calendarViewDate.getFullYear();
                const month = calendarViewDate.getMonth();
                const monthName = calendarViewDate.toLocaleString('ru-RU', { month: 'long', year: 'numeric' });
                const firstDay = new Date(year, month, 1);
                let offset = firstDay.getDay() - 1;
                if (offset < 0) offset = 6;
                const daysInMonth = new Date(year, month + 1, 0).getDate();

                let html = `
                    <div class="cal-header">
                        <button id="e8-cal-prev">‹</button>
                        <span style="font-weight:700;font-size:12px;">${monthName}</span>
                        <button id="e8-cal-next">›</button>
                    </div>
                    <div class="cal-grid">
                `;
                const dows = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
                dows.forEach(d => { html += `<div class="cal-dow">${d}</div>`; });
                for (let i = 0; i < offset; i++) { html += `<div class="cal-cell empty"></div>`; }

                const today = new Date();
                const isToday = (d) => d.getFullYear() === today.getFullYear() && d.getMonth() === today.getMonth() && d.getDate() === today.getDate();

                for (let day = 1; day <= daysInMonth; day++) {
                    const date = new Date(year, month, day);
                    const shiftInfo = getShiftInfoForDate(date);
                    const { dayCrew, nightCrew } = getDayNightCrews(shiftInfo);
                    const active = settings.activeCrew;
                    const dayMatch = !active || dayCrew.includes(active);
                    const nightMatch = !active || nightCrew.includes(active);
                    const topColor = (dayCrew.length > 0 && dayMatch) ? SHIFT_COLORS[dayCrew[0]] : 'transparent';
                    const bottomColor = (nightCrew.length > 0 && nightMatch) ? SHIFT_COLORS[nightCrew[0]] : 'transparent';
                    const dim = active && !dayMatch && !nightMatch;
                    const topCss = topColor !== 'transparent' ? `background:${topColor};` : `background:#1e1e2e;`;
                    const bottomCss = bottomColor !== 'transparent' ? `background:${bottomColor};` : `background:#1e1e2e;`;
                    const todayClass = isToday(date) ? ' today' : '';

                    const p = (x) => String(x).padStart(2, '0');
                    const dateStr = `${year}-${p(month + 1)}-${p(day)}`;
                    const isHol = HOLIDAYS.includes(dateStr);

                    const topIcon = (dayCrew.length > 0 && dayMatch) ? '☀️' : '';
                    const bottomIcon = (nightCrew.length > 0 && nightMatch) ? '🌙' : '';

                    const holidayDot = isHol
                        ? '<span style="position:absolute; top:1px; left:2px; font-size:16px; z-index:100; text-shadow:0 0 2px #000;">🚩</span>'
                        : '';

                    const dimStyle = dim ? 'opacity:0.25;' : '';

                    html += `
                        <div class="cal-cell${todayClass}" style="${dimStyle}" title="${day}.${month+1}.${year}">
                            ${holidayDot}
                            <div class="half top" style="${topCss}">
                                ${topIcon ? `<span style="position:absolute; top:2px; right:4px; font-size:9px; z-index:3; opacity:0.9;">${topIcon}</span>` : ''}
                            </div>
                            <div class="half bottom" style="${bottomCss}">
                                ${bottomIcon ? `<span style="position:absolute; bottom:2px; right:4px; font-size:9px; z-index:3; opacity:0.9;">${bottomIcon}</span>` : ''}
                            </div>
                            <span class="num${todayClass ? ' today-num' : ''}">${day}</span>
                        </div>
                    `;
                }

                const totalCells = offset + daysInMonth;
                const emptyAfter = 42 - totalCells;
                for (let i = 0; i < emptyAfter; i++) {
                    html += `<div class="cal-cell empty"></div>`;
                }

                html += `</div>`;

                const activeCrew = settings.activeCrew;
                const crewKeys = ['blue', 'purple', 'orange'];
                const shiftCount = { blue: 0, purple: 0, orange: 0 };
                for (let day = 1; day <= daysInMonth; day++) {
                    const date = new Date(year, month, day);
                    const info = getShiftInfoForDate(date);
                    for (const crew of crewKeys) {
                        if (info[crew] === 'day' || info[crew] === 'night') shiftCount[crew]++;
                    }
                }
                const totalShifts = activeCrew
                    ? shiftCount[activeCrew]
                    : (shiftCount.blue + shiftCount.purple + shiftCount.orange);

                const shiftsLabel = `Количество смен: ${totalShifts}`;

                html += `
                    <div style="display:flex;justify-content:flex-end;margin-top:8px;font-size:12px;font-weight:700;color:#888;">
                    ${shiftsLabel}
                    </div>
                    <div style="display:flex;gap:6px;margin-top:6px;font-size:10px;flex-wrap:wrap;">
                    <button type="button" data-crew="blue" style="flex:1;padding:4px 6px;border:0;border-radius:4px;cursor:pointer;font:600 10px system-ui;color:#fff;background:${activeCrew === 'blue' ? SHIFT_COLORS.blue : '#334155'};${activeCrew === 'blue' ? 'box-shadow:0 0 0 2px #fff;' : ''}">Смена 1</button>
                    <button type="button" data-crew="purple" style="flex:1;padding:4px 6px;border:0;border-radius:4px;cursor:pointer;font:600 10px system-ui;color:#fff;background:${activeCrew === 'purple' ? SHIFT_COLORS.purple : '#334155'};${activeCrew === 'purple' ? 'box-shadow:0 0 0 2px #fff;' : ''}">Смена 2</button>
                    <button type="button" data-crew="orange" style="flex:1;padding:4px 6px;border:0;border-radius:4px;cursor:pointer;font:600 10px system-ui;color:#fff;background:${activeCrew === 'orange' ? SHIFT_COLORS.orange : '#334155'};${activeCrew === 'orange' ? 'box-shadow:0 0 0 2px #fff;' : ''}">Смена 3</button>
                </div>
                `;

                panel.innerHTML = html;

                panel.querySelector('#e8-cal-prev').addEventListener('click', () => { calendarViewDate = new Date(year, month - 1, 1); renderCalendarPanel(); });
                panel.querySelector('#e8-cal-next').addEventListener('click', () => { calendarViewDate = new Date(year, month + 1, 1); renderCalendarPanel(); });
                panel.querySelectorAll('[data-crew]').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const crew = btn.dataset.crew;
                        if (settings.activeCrew === crew) settings.activeCrew = null;
                        else settings.activeCrew = crew;
                        saveSettings();
                        renderCalendarPanel();
                    });
                });
            }

            function processJobs(json) {
                lastJson = json;
                const items = extractItems(json);
                if (!items) { log('Нет items'); return; }
                const products = json?.other?.dictionary?.products || json?.data?.other?.dictionary?.products || [];
                const productMap = new Map(products.map(p => [p.id, p.label]));

                let totalPallets = 0, totalSum = 0, unknownPallets = 0, totalPalletsAll = 0, totalQuantity = 0;
                const unknownLabels = new Set(), unknownDetails = [], debugRows = [];
                const byOrder = new Map();
                const from = filter.from, to = filter.to;
                const orderFilterSpec = parseOrderFilter(settings.orderFilter);

                for (const order of items) {
                    if (!orderMatchesFilter(order.label, orderFilterSpec)) continue;
                    const orderStat = byOrder.get(order.label) || { pallets: 0, sum: 0 };
                    for (const group of (order.children || [])) {
                        for (const wp of (group.children || [])) {
                            const pallets = Number(wp.count) || 0;
                            if (!pallets) continue;
                            const label = productMap.get(group.productId) || group.productId;
                            const params = findParams(label);
                            const holes = params ? params.holes : null;
                            const grooveM = params ? params.grooveM : 0;
                            const childList = wp.children || [];

                            const timesInRange = [];
                            for (const c of childList) {
                                const t = palletTimeMs(c);
                                if (t == null) continue;
                                if ((from == null || t >= from) && (to == null || t <= to)) timesInRange.push(c.cancelDateTime);
                            }
                            const sortedTimesInRange = sortIsoAsc(timesInRange);
                            let palletsInRange = 0;

                            if (from == null && to == null) {
                                palletsInRange = pallets;
                                const all = childList.map(c => c.cancelDateTime).filter(Boolean);
                                timesInRange.length = 0;
                                timesInRange.push(...sortIsoAsc(all));
                            } else if (childList.length === 0) {
                                palletsInRange = pallets;
                            } else {
                                palletsInRange = Math.min(sortedTimesInRange.length, pallets);
                                timesInRange.length = 0;
                                timesInRange.push(...sortedTimesInRange);
                            }

                            const firstDateIso = timesInRange[0] || null;
                            totalPalletsAll += pallets;

                            if (palletsInRange === 0) {
                                const allTimes = sortIsoAsc(childList.map(c => c.cancelDateTime).filter(Boolean));
                                unknownDetails.push({ order: order.label, label, times: allTimes, reason: 'вне диапазона', pallets });
                                continue;
                            }

                            if (holes == null) {
                                unknownPallets += palletsInRange;
                                unknownLabels.add(label);
                                orderStat.pallets += palletsInRange;
                                unknownDetails.push({ order: order.label, label, times: timesInRange, reason: 'нет в прайсе', pallets: palletsInRange });
                                continue;
                            }

                            let sum = 0;
                            for (let i = 0; i < palletsInRange; i++) {
                                const child = childList[i] || null;
                                const childId = child?.id || '';
                                const execCount = Number(localStorage.getItem('e8_exec_count_' + childId)) || 1;
                                const palletSum = calcSum(label, holes, grooveM, 1) / execCount;
                                sum += palletSum;
                            }
                            sum = round2(sum);

                            totalPallets += palletsInRange;
                            totalSum = round2(totalSum + sum);
                            orderStat.pallets += palletsInRange;
                            orderStat.sum = round2(orderStat.sum + sum);

                            if (window.__e8Stats && window.__e8Stats.accumulate) {
                                const rate = window.__e8Settings ? window.__e8Settings.rate : 0.48;
                                const tax = window.__e8Settings ? window.__e8Settings.tax : 13;
                                const safeGroove = (typeof grooveM === 'number' && isFinite(grooveM) && grooveM > 0) ? grooveM : 0;
                                const earnPerPallet = (holes * rate + safeGroove * (window.__e8Settings?.grooveRate || 6.52)) * (1 - tax / 100);

                                const needFetch = [];
                                for (let i = 0; i < palletsInRange; i++) {
                                    const child = childList[i] || null;
                                    if (child?.id && localStorage.getItem('e8_exec_count_' + child.id) === null) {
                                        needFetch.push(child.id);
                                    }
                                }

                                if (needFetch.length > 0) {
                                    console.log(`[e8-calc] Запрашиваем execCount для ${needFetch.length} паллетов...`);
                                    const token = W.__e8Token || window.__e8Token || localStorage.getItem('auth_token');
                                    let auth = token;
                                    if (auth && /^eyJ/.test(auth)) auth = /^Bearer\s+/i.test(auth) ? auth : ('Bearer ' + auth);

                                    const fetchExecCount = (id) => new Promise((resolve) => {
                                        GM_xmlhttpRequest({
                                            method: 'GET',
                                            url: `https://backoffice-e8.ffa.su/api/v1/admin/projects/1/jobs/${id}`,
                                            headers: { 'Accept': 'application/json', 'Authorization': auth },
                                            onload: (res) => {
                                                let execCount = 1;
                                                if (res.status === 200) {
                                                    try {
                                                        const json = JSON.parse(res.responseText);
                                                        let d = null;
                                                        if (Array.isArray(json) && json.length > 0) d = json[0];
                                                        else if (json.data && Array.isArray(json.data) && json.data.length > 0) d = json.data[0];
                                                        else if (json.data && typeof json.data === 'object') d = json.data;
                                                        else if (json && typeof json === 'object') d = json;
                                                        if (d && d.executors && Array.isArray(d.executors) && d.executors.length > 1) {
                                                            execCount = d.executors.length;
                                                        }
                                                    } catch (e) {}
                                                }
                                                localStorage.setItem('e8_exec_count_' + id, String(execCount));
                                                resolve();
                                            },
                                            onerror: () => {
                                                localStorage.setItem('e8_exec_count_' + id, '1');
                                                resolve();
                                            },
                                            timeout: 10000
                                        });
                                    });

                                    (async () => {
                                        for (let i = 0; i < needFetch.length; i += 5) {
                                            const chunk = needFetch.slice(i, i + 5);
                                            await Promise.all(chunk.map(id => fetchExecCount(id)));
                                        }
                                        console.log('[e8-calc] execCount загружены.');
                                        if (window.__e8StatsUI && window.__e8StatsUI.renderStats) {
                                            window.__e8StatsUI.renderStats();
                                        }
                                    })();
                                } else {
                                    console.log('[e8-calc] Все execCount уже есть в localStorage');
                                }

                                for (let i = 0; i < palletsInRange; i++) {
                                    const child = childList[i] || null;
                                    const childId = child?.id || '';
                                    const execCount = Number(localStorage.getItem('e8_exec_count_' + childId)) || 1;
                                    const earnPerPalletDivided = earnPerPallet / execCount;
                                    window.__e8Stats.accumulate(label, holes, earnPerPalletDivided, child?.id || null, child?.cancelDateTime || null);
                                }
                            }

                            let quantityInRange = 0;
                            for (const c of childList) {
                                const t = palletTimeMs(c);
                                if (from == null && to == null) quantityInRange += Number(c.quantity) || 0;
                                else if (t != null && (from == null || t >= from) && (to == null || t <= to)) quantityInRange += Number(c.quantity) || 0;
                            }
                            totalQuantity += quantityInRange;

                            const timesWithIds = [];
                            if (from == null && to == null) {
                                for (let i = 0; i < palletsInRange; i++) {
                                    const child = childList[i];
                                    timesWithIds.push({
                                        iso: child?.cancelDateTime,
                                        id: child?.id
                                    });
                                }
                            } else {
                                for (const c of childList) {
                                    const t = palletTimeMs(c);
                                    if (t == null) continue;
                                    if ((from == null || t >= from) && (to == null || t <= to)) {
                                        timesWithIds.push({
                                            iso: c.cancelDateTime,
                                            id: c.id
                                        });
                                    }
                                }
                            }

                            debugRows.push({
                                order: order.label,
                                label,
                                holes,
                                pallets,
                                palletsInRange,
                                firstDate: toMskString(firstDateIso),
                                sum,
                                times: timesWithIds,
                                firstDateMs: firstDateIso ? new Date(firstDateIso).getTime() : Infinity
                            });
                        }
                    }
                    byOrder.set(order.label, orderStat);
                }

                lastResult = { totalPallets, totalSum: round2(totalSum), unknownPallets, totalQuantity, unknownLabels: [...unknownLabels], byOrder, totalPalletsAll, debugRows, unknownDetails };
                window.__e8LastResult = lastResult;
                log('Результат:', lastResult);
                renderWindow();
                window.dispatchEvent(new Event('e8-stats-updated'));
            }

            function patchFetch(target) {
                if (!target || !target.fetch || target.__e8patched) return;
                target.__e8patched = true;
                const orig = target.fetch;
                target.fetch = async function (...args) {
                    const url = typeof args[0] === 'string' ? args[0] : args[0]?.url || '';
                    const res = await orig.apply(this, args);
                    //if (url.includes('/jobs') && url.includes('statusId=2')) res.clone().json().then(processJobs).catch(() => {});
                    return res;
                };
            }
            patchFetch(W);
            if (W !== window) patchFetch(window);

            const XHR = W.XMLHttpRequest || window.XMLHttpRequest;
            if (XHR && !XHR.prototype.__e8patched) {
                XHR.prototype.__e8patched = true;
                const origOpen = XHR.prototype.open, origSend = XHR.prototype.send;
                XHR.prototype.open = function (method, url, ...rest) { this.__e8url = url; return origOpen.call(this, method, url, ...rest); };
                XHR.prototype.send = function (...args) {
                    this.addEventListener('load', function () {
                        try { if ((this.__e8url || '').includes('/jobs') && (this.__e8url || '').includes('statusId=2')) processJobs(JSON.parse(this.responseText)); } catch (e) {}
                    });
                    return origSend.apply(this, args);
                };
            }

            GM_addStyle(`
                #e8-calc-box{position:fixed;right:20px;bottom:20px;left:auto;z-index:2147483647;width:360px;max-width:calc(100vw - 24px);box-sizing:border-box;background:#1e1e2e;color:#eee;border:1px solid #444;border-radius:10px;font:13px/1.4 system-ui,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.5);padding:12px 14px;pointer-events:auto;overflow:hidden}
                #e8-calc-box.hidden{display:none}
                #e8-calc-box .btn-row{display:flex;gap:6px;margin-top:8px}
                #e8-calc-box .btn-row button{margin-top:0;flex:1;width:auto}
                #e8-calc-box .row{display:flex;justify-content:space-between;margin:4px 0}
                #e8-calc-box .row.clickable{cursor:pointer;border-radius:4px;padding:2px 4px;margin-left:-4px;margin-right:-4px}
                #e8-calc-box .row.clickable:hover{background:#2a2a3e}
                #e8-calc-box .val{font-weight:700}
                #e8-calc-box .sum{color:#7CFC9B;font-size:15px}
                #e8-calc-box .unk{color:#ffb86c}
                #e8-calc-box .unk-red{color:#ff5555;font-weight:700}
                #e8-calc-box button{margin-top:8px;width:100%;cursor:pointer;background:#3b82f6;color:#fff;border:0;border-radius:6px;padding:6px 8px;font-weight:600}
                #e8-calc-box button:hover{background:#2563eb}
                #e8-calc-box button.secondary{background:#334155}
                #e8-calc-box button.secondary:hover{background:#475569}
                #e8-calc-box .ord{font-size:11px;opacity:.85;border-top:1px solid #333;margin-top:6px;padding-top:6px;width:100%;box-sizing:border-box;max-height:300px;overflow-y:auto;overflow-x:hidden}
                #e8-calc-box .ord-head{display:flex;justify-content:space-between;padding:3px 4px;border-radius:4px;cursor:pointer}
                #e8-calc-box .ord-head:hover{background:rgba(255,255,255,0.25) !important}
                #e8-calc-box .ord-head .arr{opacity:.5;margin-right:4px;transition:transform .15s;display:inline-block}
                #e8-calc-box .ord-head.open .arr{transform:rotate(90deg)}
                #e8-calc-box .ord-detail{display:none;padding:2px 4px 6px 18px;background:#161622;border-left:2px solid #334155;margin:2px 0 4px 4px;border-radius:0 4px 4px 0}
                #e8-calc-box .ord-detail.open{display:block}
                #e8-calc-box .pal{display:flex;align-items:center;padding:4px 4px;font-size:11px;width:100%;box-sizing:border-box;border-radius:4px;transition:background 0.2s;margin:0 -4px;}
                #e8-calc-box .pal:hover { background: rgba(255, 255, 255, 0.35) !important; }
                #e8-calc-box .pal .t{opacity:1;white-space:nowrap;font-size:11px;flex:0 0 130px;text-align:left;padding-left: 10px;}
                #e8-calc-box .pal .n{flex:1 1 auto;text-align:right;opacity:.95;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11px;min-width:0}
                #e8-calc-box .pal .n { text-decoration: none !important; }
                #e8-calc-box .pal-head{font-size:11px;padding:2px 0;text-align:left}
                #e8-calc-box .pal-head { color: #f1f5f9; }
                #e8-calc-box .pal-sep{border-top:1px dashed #333;margin:4px 0}
                #e8-calc-box .unk-reason{font-size:10px;color:#ffb86c;opacity:.9}
                #e8-calc-dates,#e8-calc-settings,#e8-stats-panel,#e8-online-panel,#e8-calendar-panel{display:none;margin-top:8px;padding-top:8px;border-top:1px dashed #444}
                #e8-stats-panel{background:#161622;border-left:2px solid #334155;border-radius:0 4px 4px 0;padding:6px 8px;font-size:12px;max-height:400px;overflow-y:auto;box-sizing:border-box}
                #e8-calc-dates label,#e8-calc-settings label{display:block;font-size:11px;opacity:.8;margin:4px 0 2px}
                #e8-calc-dates input,#e8-calc-settings input{width:100%;box-sizing:border-box;background:#0f172a;color:#eee;border:1px solid #334155;border-radius:5px;padding:4px 6px;font:12px system-ui;color-scheme:dark}
                #e8-calc-dates .btns,#e8-calc-settings .btns{display:flex;gap:6px;margin-top:8px}
                #e8-calc-dates .btns button,#e8-calc-settings .btns button{margin-top:0;flex:1}
                #e8-calc-settings input[type=range]{padding:0;background:transparent;border:0}
                #e8-calc-settings input[type=checkbox]{width:auto;margin:0}
                #e8-calc-settings .hint{font-size:10px;opacity:.6;margin-top:2px}
                #e8-calc-settings .chk{display:flex;align-items:center;gap:6px;margin-top:8px;font-size:11px;opacity:.9}
                #e8-online-panel{background:#161622;border-left:2px solid #334155;border-radius:0 4px 4px 0;padding:6px 8px;font-size:11px;max-height:400px;overflow-y:auto;box-sizing:border-box}
                #e8-online-panel table{width:100%;border-collapse:collapse;table-layout:fixed}
                #e8-online-panel th{text-align:left;font-size:10px;opacity:.6;padding:2px 3px;border-bottom:1px solid #2a2a3e;font-weight:600}
                #e8-online-panel td{padding:3px;vertical-align:top;border-bottom:1px solid #1e1e2e;word-wrap:break-word;overflow-wrap:break-word;font-size:11px}
                #e8-online-panel tr:hover td{background:#1e1e2e}
                #e8-online-panel .status-on{color:#7CFC9B;font-weight:600}
                #e8-online-panel .status-off{color:#fbbf24}
                #e8-online-panel .col-status{width:52px}
                #e8-online-panel .col-name{width:38%}
                #e8-online-panel .col-work{width:28%}
                #e8-online-panel .col-comment{width:28%;opacity:.85}
                #e8-calendar-panel{background:#161622;border-left:2px solid #334155;border-radius:0 4px 4px 0;padding:8px 10px;font-size:11px;box-sizing:border-box;user-select:none}
                #e8-calendar-panel .cal-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}
                #e8-calendar-panel .cal-header button{width:auto;padding:2px 8px;margin:0;font-size:12px;background:#334155}
                #e8-calendar-panel .cal-grid{display:grid;grid-template-columns:repeat(7,1fr);grid-template-rows:repeat(6, 1fr);gap:3px;min-height:210px}
                #e8-calendar-panel .cal-dow{text-align:center;font-size:9px;opacity:.6;padding:2px 0}
                #e8-calendar-panel .cal-cell{position:relative;aspect-ratio:1/1;border-radius:4px;overflow:hidden;background:#1e1e2e;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:12px;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.8);cursor:default}
                #e8-calendar-panel .cal-cell .half{position:absolute;left:0;right:0;height:50%}
                #e8-calendar-panel .cal-cell .half.top{top:0}
                #e8-calendar-panel .cal-cell .half.bottom{bottom:0}
                #e8-calendar-panel .cal-cell .num{position:relative;z-index:2}
                #e8-calendar-panel .cal-cell.empty{background:transparent;color:#444;text-shadow:none}
                #e8-calendar-panel .cal-cell.today{box-shadow:inset 0 0 0 2px #fff, 0 0 0 2px #22c55e, 0 0 8px rgba(34,197,94,.7);z-index:5}
                #e8-calendar-panel .cal-cell.today .num.today-num{color:#fff;background:#22c55e;border-radius:50%;width:18px;height:18px;line-height:18px;text-align:center;font-size:11px;box-shadow:0 0 6px rgba(34,197,94,.9)}
                #e8-calendar-panel .cal-cell.holiday { outline: 2px solid #ef4444 !important; outline-offset: -2px !important; z-index: 10 !important; }
                #e8-calendar-panel .cal-cell.today.holiday { outline: 2px solid #ef4444 !important; outline-offset: -2px !important; box-shadow: inset 0 0 0 2px #fff, 0 0 0 2px #22c55e !important; }
                #e8-stats-panel table td:first-child {
                    max-width: 120px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            `);

            function applyAdaptiveLayout() {
                const box = document.getElementById('e8-calc-box');
                if (!box) return;
                if (window.innerWidth < 460) {
                    box.style.left = '12px'; box.style.right = '12px'; box.style.width = 'auto'; box.style.maxWidth = 'none'; box.style.bottom = '12px';
                } else {
                    box.style.left = 'auto'; box.style.right = '20px'; box.style.width = '360px'; box.style.maxWidth = 'calc(100vw - 24px)'; box.style.bottom = '20px';
                }
            }
            window.addEventListener('resize', applyAdaptiveLayout);
            window.addEventListener('orientationchange', applyAdaptiveLayout);

            function getTotalLocalStorageBytes() {
                let total = 0;
                try { for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); const v = localStorage.getItem(k) || ''; total += (k.length + v.length) * 2; } } catch (e) {}
                return total;
            }
            function renderStorageInfo() {
                const el = document.getElementById('e8-storage-info');
                if (!el) return;
                const bytes = getTotalLocalStorageBytes();
                const mb = bytes / 1024 / 1024;
                const percent = Math.min(100, (mb / 5) * 100);
                el.textContent = `${mb.toFixed(2)} MB / ${percent.toFixed(1)}%`;
                if (percent < 50) el.style.color = '#7CFC9B';
                else if (percent < 80) el.style.color = '#fbbf24';
                else el.style.color = '#ff5555';
            }

            function ensureBox() {
                let box = document.getElementById('e8-calc-box');
                if (box) return box;
                box = document.createElement('div');
                box.id = 'e8-calc-box';
                const fromVal = mskInputValue('07'), toVal = mskInputValue('end');

                box.innerHTML = `
                    <div id="e8-calc-body">Ожидание данных…</div>
                    <div id="e8-calc-dates">
                        <label>От:</label><input type="datetime-local" id="e8-date-from" step="1" value="${fromVal}">
                        <label>До:</label><input type="datetime-local" id="e8-date-to" step="1" value="${toVal}">
                        <div class="btns"><button id="e8-date-apply">Применить</button><button id="e8-date-reset" class="secondary">Сбросить</button></div>
                    </div>
                    <div id="e8-calc-settings">
                        <label>Прозрачность: <span id="e8-op-val">${Math.round(settings.opacity * 100)}%</span></label>
                        <input type="range" id="e8-op-range" min="5" max="100" step="1" value="${Math.round(settings.opacity * 100)}">
                        <label>Ставка калькулятора:</label><input type="number" id="e8-rate-input" step="0.01" min="0.01" value="${settings.rate}">
                        <div class="hint">Сумма = отверстия × ставка × (1 − НДФЛ) × паллеты</div>
                        <label>Цена паза за 1п/м:</label><input type="number" id="e8-groove-rate-input" step="0.01" min="0" value="${settings.grooveRate}">
                        <label>НДФЛ, %:</label><input type="number" id="e8-tax-input" step="1" min="0" max="99" value="${settings.tax}">
                        <label>Заявки:</label><input type="text" id="e8-order-filter" placeholder="пусто = все" value="${escapeAttr(settings.orderFilter)}">
                        <label class="chk"><input type="checkbox" id="e8-automin" ${settings.autoMinimize ? 'checked' : ''}> Автоматически сворачивать после загрузки</label>
                        <label class="chk"><input type="checkbox" id="e8-hide-orders" ${settings.hideOrders !== false ? 'checked' : ''}> Скрывать заголовки заявок</label>
                        <div style="display:flex;justify-content:space-between;font-size:11px;opacity:.85;margin-top:8px;"><span>localStorage:</span><span id="e8-storage-info" style="font-weight:600;">— MB / —%</span></div>
                        <div class="btns"><button id="e8-settings-apply">Применить</button><button id="e8-settings-reset" class="secondary">Сбросить</button></div>
                    </div>
                    <div id="e8-online-panel" style="display:none;"></div>
                    <div id="e8-calendar-panel" style="display:none;"></div>
                    <div id="e8-stats-panel" style="display:none;"></div>
                    <button id="e8-calc-toggle">Считать по датам</button>
                    <button id="e8-calc-recalc" class="secondary">Пересчитать</button>
                    <div class="btn-row">
                        <button id="e8-calc-stats-toggle" class="secondary">Статистика</button>
                        <button id="e8-calc-settings-toggle" class="secondary">Настройка</button>
                    </div>
                    <div class="btn-row">
                        <button id="e8-calc-online-toggle" class="secondary">Онлайн</button>
                        <button id="e8-calc-calendar-toggle" class="secondary">Календарь</button>
                    </div>
                    <button id="e8-calc-minimize" class="secondary">Свернуть</button>
                `;

                function safeAppend() {
                    if (!document.body) { setTimeout(safeAppend, 50); return; }
                    if (!document.getElementById('e8-calc-box')) document.body.appendChild(box);

                    let mini = document.getElementById('e8-calc-mini');
                    if (!mini) {
                        mini = document.createElement('button');
                        mini.id = 'e8-calc-mini';
                        mini.title = 'Развернуть подсчёт';
                        document.body.appendChild(mini);
                        mini.addEventListener('click', () => setMinimized(false));
                    }
                    applyAdaptiveLayout();
                    if (settings.autoMinimize) setMinimized(true);
                    else setMinimized(localStorage.getItem(LS_MIN_KEY) === '1');
                }
                if (document.readyState === 'complete' || document.readyState === 'interactive') setTimeout(safeAppend, 300);
                else window.addEventListener('DOMContentLoaded', () => setTimeout(safeAppend, 500));

                const datesPanel = box.querySelector('#e8-calc-dates');
                const settingsPanel = box.querySelector('#e8-calc-settings');

                box.querySelector('#e8-calc-toggle').addEventListener('click', () => {
                    const visible = datesPanel.style.display === 'block';
                    datesPanel.style.display = visible ? 'none' : 'block';
                    settingsPanel.style.display = 'none';
                    document.getElementById('e8-stats-panel').style.display = 'none';
                    document.getElementById('e8-online-panel').style.display = 'none';
                    document.getElementById('e8-calendar-panel').style.display = 'none';
                    document.getElementById('e8-calc-online-toggle').textContent = 'Онлайн';
                    document.getElementById('e8-calc-calendar-toggle').textContent = 'Календарь';
                    document.getElementById('e8-calc-stats-toggle').textContent = 'Статистика';
                    document.getElementById('e8-calc-settings-toggle').textContent = 'Настройка';
                    box.querySelector('#e8-calc-toggle').textContent = visible ? 'Считать по датам' : 'Считать по датам ✓';
                });

                box.querySelector('#e8-calc-settings-toggle').addEventListener('click', () => {
                    const visible = settingsPanel.style.display === 'block';
                    settingsPanel.style.display = visible ? 'none' : 'block';
                    datesPanel.style.display = 'none';
                    document.getElementById('e8-stats-panel').style.display = 'none';
                    document.getElementById('e8-online-panel').style.display = 'none';
                    document.getElementById('e8-calendar-panel').style.display = 'none';
                    document.getElementById('e8-calc-online-toggle').textContent = 'Онлайн';
                    document.getElementById('e8-calc-calendar-toggle').textContent = 'Календарь';
                    document.getElementById('e8-calc-stats-toggle').textContent = 'Статистика';
                    box.querySelector('#e8-calc-toggle').textContent = 'Считать по датам';
                    box.querySelector('#e8-calc-settings-toggle').textContent = visible ? 'Настройка' : 'Настройка ✓';
                    if (!visible) renderStorageInfo();
                });

                box.querySelector('#e8-calc-calendar-toggle').addEventListener('click', () => {
                    const panel = document.getElementById('e8-calendar-panel');
                    const visible = panel.style.display === 'block';
                    document.getElementById('e8-stats-panel').style.display = 'none';
                    document.getElementById('e8-calc-dates').style.display = 'none';
                    document.getElementById('e8-calc-settings').style.display = 'none';
                    document.getElementById('e8-online-panel').style.display = 'none';
                    document.getElementById('e8-calc-stats-toggle').textContent = 'Статистика';
                    document.getElementById('e8-calc-settings-toggle').textContent = 'Настройка';
                    document.getElementById('e8-calc-toggle').textContent = 'Считать по датам';
                    document.getElementById('e8-calc-online-toggle').textContent = 'Онлайн';

                    if (visible) { panel.style.display = 'none'; box.querySelector('#e8-calc-calendar-toggle').textContent = 'Календарь'; }
                    else { renderCalendarPanel(); panel.style.display = 'block'; box.querySelector('#e8-calc-calendar-toggle').textContent = 'Календарь ✓'; }
                });

                box.querySelector('#e8-date-apply').addEventListener('click', () => {
                    const f = box.querySelector('#e8-date-from').value, t = box.querySelector('#e8-date-to').value;
                    filter.from = f ? mskLocalToUtcMs(f) : null;
                    filter.to = t ? mskLocalToUtcMs(t) : null;
                    if (lastJson) processJobs(lastJson);
                });

                box.querySelector('#e8-date-reset').addEventListener('click', () => {
                    box.querySelector('#e8-date-from').value = mskInputValue('07');
                    box.querySelector('#e8-date-to').value = mskInputValue('end');
                    filter.from = null; filter.to = null;
                    if (lastJson) processJobs(lastJson);
                });

                const opRange = box.querySelector('#e8-op-range'), opVal = box.querySelector('#e8-op-val');
                opRange.addEventListener('input', () => {
                    settings.opacity = Math.min(1, Math.max(0.05, Number(opRange.value) / 100));
                    opVal.textContent = Math.round(settings.opacity * 100) + '%';
                    box.style.opacity = settings.opacity; saveSettings();
                });

                box.querySelector('#e8-settings-apply').addEventListener('click', () => {
                    const rate = Number(box.querySelector('#e8-rate-input').value), tax = Number(box.querySelector('#e8-tax-input').value);
                    if (Number.isFinite(rate) && rate > 0) settings.rate = rate;
                    if (Number.isFinite(tax) && tax >= 0 && tax < 100) settings.tax = tax;

                    const grRate = Number(box.querySelector('#e8-groove-rate-input').value);
                    if (Number.isFinite(grRate) && grRate >= 0) settings.grooveRate = grRate;

                    settings.autoMinimize = box.querySelector('#e8-automin').checked;
                    settings.orderFilter = box.querySelector('#e8-order-filter').value.trim();
                    settings.hideOrders = box.querySelector('#e8-hide-orders').checked;
                    saveSettings(); if (lastJson) processJobs(lastJson);
                    window.__e8Settings = settings;
                });

                box.querySelector('#e8-settings-reset').addEventListener('click', () => {
                    settings = { opacity: 100, rate: 0.48, tax: 13, grooveRate: 6.52, autoMinimize: settings.autoMinimize, orderFilter: '', activeCrew: null, hideOrders: true };
                    box.querySelector('#e8-op-range').value = 100; box.querySelector('#e8-op-val').textContent = '100%';
                    box.querySelector('#e8-rate-input').value = 0.48; box.querySelector('#e8-tax-input').value = 13;
                    box.querySelector('#e8-groove-rate-input').value = 6.52;
                    box.querySelector('#e8-order-filter').value = ''; box.querySelector('#e8-automin').checked = settings.autoMinimize;
                    box.querySelector('#e8-hide-orders').checked = true;
                    box.style.opacity = settings.opacity;
                    saveSettings(); if (lastJson) processJobs(lastJson);
                });

                box.querySelector('#e8-calc-recalc').addEventListener('click', async () => {
                    const btn = box.querySelector('#e8-calc-recalc'); const orig = btn.textContent;
                    btn.textContent = 'Обновление…'; btn.disabled = true;

                    try {
                        let token = W.__e8Token || window.__e8Token || localStorage.getItem('auth_token');
                        if (token && /^eyJ/.test(token)) token = /^Bearer\s+/i.test(token) ? token : ('Bearer ' + token);
                        if (!token) throw new Error('Нет токена');

                        const now = new Date();
                        const currentYear = now.getFullYear();
                        let start = new Date(2026, 8, 1);
                        const end = new Date();

                        const formatDate = (d) => {
                            const year = d.getFullYear();
                            const month = String(d.getMonth() + 1).padStart(2, '0');
                            const day = String(d.getDate()).padStart(2, '0');
                            return `${year}-${month}-${day}`;
                        };

                        const ranges = [];
                        let currentStart = new Date(start);
                        while (currentStart <= end) {
                            let currentEnd = new Date(currentStart);
                            currentEnd.setDate(currentEnd.getDate() + 9);
                            if (currentEnd > end) currentEnd = end;

                            ranges.push({
                                startStr: formatDate(currentStart),
                                endStr: formatDate(currentEnd)
                            });

                            currentStart.setDate(currentStart.getDate() + 10);
                        }

                        console.log(`%c[e8-calc] 🚀 Запуск параллельных запросов (всего диапазонов: ${ranges.length})`, 'color: #60a5fa; font-weight: bold;');

                        const allItems = [];
                        let baseDictionary = null;

                        const CONCURRENCY = 8;
                        for (let i = 0; i < ranges.length; i += CONCURRENCY) {
                            const chunk = ranges.slice(i, i + CONCURRENCY);
                            const results = await Promise.all(chunk.map(range => {
                                return new Promise((resolve) => {
                                    GM_xmlhttpRequest({
                                        method: 'GET',
                                        url: `https://backoffice-e8.ffa.su/api/v1/admin/projects/1/jobs?statusId=2&page=1&take=100&startCancelDateTime=${range.startStr}&endCancelDateTime=${range.endStr}`,
                                        headers: { 'Accept': 'application/json', 'Authorization': token },
                                        onload: resolve, onerror: () => resolve(null), timeout: 15000
                                    });
                                });
                            }));

                            for (let j = 0; j < results.length; j++) {
                                const res = results[j];
                                const range = chunk[j];

                                if (res && res.status === 200) {
                                    try {
                                        const json = JSON.parse(res.responseText);

                                        const dict = json?.other?.dictionary || json?.data?.other?.dictionary;
                                        if (dict && dict.products) {
                                            if (!baseDictionary) baseDictionary = { products: [] };
                                            const existingIds = new Set(baseDictionary.products.map(p => p.id));
                                            for (const p of dict.products) {
                                                if (!existingIds.has(p.id)) {
                                                    baseDictionary.products.push(p);
                                                    existingIds.add(p.id);
                                                }
                                            }
                                        }

                                        const items = extractItems(json) || [];
                                        if (items.length > 0) {
                                            for (const order of items) {
                                                allItems.push(order);
                                            }
                                            console.log(`%c[e8-calc] 📅 ${range.startStr} - ${range.endStr}: +${items.length} заявок`, 'color: #a78bfa;');
                                        }
                                    } catch(e) {
                                        console.error('Ошибка парсинга', e);
                                    }
                                }
                            }

                            await new Promise(r => setTimeout(r, 100));
                        }

                        if (allItems.length === 0) throw new Error('Нет данных');

                        console.log(`%c[e8-calc] 🏁 Сбор завершен. Всего заявок: ${allItems.length}`, 'color: #fbbf24; font-weight: bold;');

                        const finalJson = {
                            items: allItems,
                            other: { dictionary: baseDictionary || {} },
                            data: { dictionary: baseDictionary || {} }
                        };

                        processJobs(finalJson);
                        btn.textContent = 'Обновлено ✓';

                    } catch (e) {
                        console.error(e);
                        btn.textContent = 'Ошибка';
                    }

                    setTimeout(() => { btn.textContent = orig; btn.disabled = false; }, 1500);
                });

                box.querySelector('#e8-calc-minimize').addEventListener('click', () => setMinimized(true));
                box.style.opacity = settings.opacity;
                applyAdaptiveLayout();
                return box;
            }

            function setMinimized(min) {
                const box = document.getElementById('e8-calc-box'), mini = document.getElementById('e8-calc-mini');
                if (!box || !mini) return;
                if (min) { box.classList.add('hidden'); mini.classList.remove('hidden'); localStorage.setItem(LS_MIN_KEY, '1'); }
                else { box.classList.remove('hidden'); mini.classList.add('hidden'); localStorage.setItem(LS_MIN_KEY, '0'); }
            }

            function renderWindow() {
                const box = ensureBox();
                const body = box.querySelector('#e8-calc-body');
                if (!lastResult) { body.textContent = 'Ожидание данных…'; return; }

                const { totalPallets, totalSum, unknownPallets, totalQuantity, byOrder, totalPalletsAll, debugRows, unknownDetails } = lastResult;
                const money = (n) => round2(n).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ₽';

                const rowsByOrder = new Map();
                for (const r of (debugRows || [])) {
                    if (!rowsByOrder.has(r.order)) rowsByOrder.set(r.order, []);
                    rowsByOrder.get(r.order).push(r);
                }

                const isDateFilterActive = !!(filter.from || filter.to);

                const isInvalidDate =
                    (filter.from != null && isNaN(filter.from)) ||
                    (filter.to != null && isNaN(filter.to)) ||
                    (filter.from != null && filter.to != null && filter.from > filter.to);

                let ordersHtml = '';
                if (isInvalidDate) {
                    ordersHtml = `<div class="row" style="color:#ff5555;font-weight:600;padding:12px 0;justify-content:center;">⚠️ Неверно указана дата</div>`;
                } else if (isDateFilterActive && totalPallets === 0) {
                    ordersHtml = `<div class="row" style="color:#fbbf24;font-weight:600;padding:12px 0;justify-content:center;">📭 В выбранном диапазоне нет данных</div>`;
                } else if (byOrder) {
                    if (isDateFilterActive) {
                        const allRows = [];
                        for (const [label, st] of byOrder) {
                            if (!st || st.pallets === 0) continue;
                            const rows = rowsByOrder.get(label) || [];
                            rows.forEach(r => allRows.push({ ...r, order: label }));
                        }

                        allRows.sort((a, b) => (a.firstDateMs ?? Infinity) - (b.firstDateMs ?? Infinity));

                        if (allRows.length > 0) {
                            let palHtml = '';
                            allRows.forEach((r, idx) => {
                                if (idx > 0) palHtml += `<div class="pal-sep"></div>`;
                                const times = (r.times && r.times.length) ? r.times.slice().sort((a, b) => {
                                    const isoA = (typeof a === 'object' && a !== null) ? a.iso : a;
                                    const isoB = (typeof b === 'object' && b !== null) ? b.iso : b;
                                    return new Date(isoA).getTime() - new Date(isoB).getTime();
                                }) : [];

                                    palHtml += `<div class="pal-head"><b>${escapeHtml(cleanLabel(r.label))}</b> × ${r.palletsInRange}${r.holes && r.holes !== '—' ? ` (${r.holes} отв.)` : ''} = ${money(r.sum)}</div>`;
                                if (times.length === 0) {
                                    palHtml += `<div class="pal"><span class="t">время: —</span></div>`;
                                } else {
                                    times.forEach(item => {
                                        const iso = (typeof item === 'object' && item !== null) ? item.iso : item;
                                        const id = (typeof item === 'object' && item !== null) ? item.id : null;

                                  if (id) {
                                       palHtml += `<div class="pal hover:bg-elevated/20 rounded transition-colors px-1 -mx-1" style="cursor:pointer;" onclick="window.open('https://e8.ffa.su/admin/projects/1/jobs/${id}/info?back=/admin/projects/1/jobs?statusId=1', '_blank')"><span class="t" style="color:#e2e8f0;">${toMskString(iso)}</span><span class="n" style="color:#7dd3fc; font-weight:600;">${escapeHtml(cleanLabel(r.label))}</span></div>`;
                                     } else {
                                       palHtml += `<div class="pal"><span class="t" style="color:#e2e8f0;">${toMskString(iso)}</span><span class="n" style="color:#7dd3fc; font-weight:600;">${escapeHtml(cleanLabel(r.label))}</span></div>`;
                                     }
                                    });
                                }
                            });
                            ordersHtml = `<div class="ord">${palHtml}</div>`;
                        }
                    } else {
                        for (const [label, st] of byOrder) {
                            if (!st || st.pallets === 0) continue;
                            let rows = rowsByOrder.get(label) || [];
                            rows = rows.slice().sort((a, b) => (a.firstDateMs ?? Infinity) - (b.firstDateMs ?? Infinity));
                            const key = 'ord-' + Math.random().toString(36).slice(2, 8);
                            let palHtml = '';
                            if (rows.length === 0) palHtml = `<div class="pal-head">Нет данных</div>`;
                            else {
                                rows.forEach((r, idx) => {
                                    if (idx > 0) palHtml += `<div class="pal-sep"></div>`;
                                    const times = (r.times && r.times.length) ? r.times.slice().sort((a, b) => {
                                        const isoA = (typeof a === 'object' && a !== null) ? a.iso : a;
                                        const isoB = (typeof b === 'object' && b !== null) ? b.iso : b;
                                        return new Date(isoA).getTime() - new Date(isoB).getTime();
                                    }) : [];

                                    palHtml += `<div class="pal-head"><b>${escapeHtml(cleanLabel(r.label))}</b> × ${r.palletsInRange}${r.holes && r.holes !== '—' ? ` (${r.holes} отв.)` : ''} = ${money(r.sum)}</div>`;
                                    if (times.length === 0) {
                                        palHtml += `<div class="pal"><span class="t">время: —</span></div>`;
                                    } else {
                                        times.forEach(item => {
                                            const iso = (typeof item === 'object' && item !== null) ? item.iso : item;
                                            const id = (typeof item === 'object' && item !== null) ? item.id : null;

                                    if (id) {
                                      palHtml += `<div class="pal hover:bg-elevated/20 rounded transition-colors px-1 -mx-1" style="cursor:pointer;" onclick="window.open('https://e8.ffa.su/admin/projects/1/jobs/${id}/info?back=/admin/projects/1/jobs?statusId=1', '_blank')"><span class="t" style="color:#e2e8f0;">${toMskString(iso)}</span><span class="n" style="color:#7dd3fc; font-weight:600;">${escapeHtml(cleanLabel(r.label))}</span></div>`;
                                   } else {
                                       palHtml += `<div class="pal"><span class="t" style="color:#e2e8f0;">${toMskString(iso)}</span><span class="n" style="color:#7dd3fc; font-weight:600;">${escapeHtml(cleanLabel(r.label))}</span></div>`;
                                         }
                                        });
                                    }
                                });
                            }
                            ordersHtml += `<div class="ord-head" data-target="${key}"><span><span class="arr">▶</span>${escapeHtml(label)}</span><span>${st.pallets} / ${money(st.sum)}</span></div><div class="ord-detail" id="${key}">${palHtml}</div>`;
                        }
                    }
                }

                let unknownHtml = '';
                if (unknownPallets > 0) {
                    const key = 'unk-' + Math.random().toString(36).slice(2, 8);
                    const byLabel = new Map();
                    for (const d of (unknownDetails || [])) {
                        if (!byLabel.has(d.label)) byLabel.set(d.label, { times: [], reasons: new Set(), pallets: 0, orders: new Set() });
                        const g = byLabel.get(d.label); g.times.push(...(d.times || [])); g.reasons.add(d.reason); g.pallets += d.pallets || 0; g.orders.add(d.order);
                    }
                    const groups = [...byLabel.entries()].map(([label, g]) => {
                        g.times = sortIsoAsc(g.times);
                        return { label, g, firstMs: g.times.length ? new Date(g.times[0]).getTime() : Infinity };
                    }).sort((a, b) => a.firstMs - b.firstMs);

                    let detailHtml = '';
                    groups.forEach((entry, idx) => {
                        const { label, g } = entry;
                        if (idx > 0) detailHtml += `<div class="pal-sep"></div>`;
                        detailHtml += `<div class="pal-head"><b>${escapeHtml(label)}</b> × ${g.pallets} <span class="unk-reason">(${[...g.reasons].join(', ')})</span></div>`;
                        if (g.times.length === 0) detailHtml += `<div class="pal"><span class="t">время: —</span></div>`;
                        else g.times.forEach(iso => detailHtml += `<div class="pal"><span class="t">${toMskString(iso)}</span><span class="n">${escapeHtml(label)}</span></div>`);
                    });
                    unknownHtml = `<div class="row clickable" data-target="${key}"><span>Не посчитано:</span><span class="val"><span class="arr" style="opacity:.6;margin-right:4px;display:inline-block">▶</span><span class="unk-red">${unknownPallets}</span></span></div><div class="ord-detail" id="${key}">${detailHtml}</div>`;
                } else {
                    unknownHtml = `<div class="row"><span>Не посчитано:</span><span class="val">0</span></div>`;
                }

                const filterLine = (filter.from || filter.to || settings.orderFilter)
                    ? `<div style="font-size:11px;opacity:.6;margin-top:4px">${(filter.from || filter.to) ? `Даты: ${filter.from ? toMskString(new Date(filter.from).toISOString()) : '…'} — ${filter.to ? toMskString(new Date(filter.to).toISOString()) : '…'}` : ''}${settings.orderFilter ? `${(filter.from || filter.to) ? ' · ' : ''}Заявки: ${escapeHtml(settings.orderFilter)}` : ''}</div>` : '';

                body.innerHTML = `
                    <div class="row"><span>Всего паллет:</span><span class="val">${totalPalletsAll ?? totalPallets}</span></div>
                    <div class="row"><span>Посчитано паллет:</span><span class="val">${totalPallets}</span></div>
                    ${unknownHtml}
                    <div class="row"><span>Количество изделий:</span><span class="val">${(totalQuantity || 0).toLocaleString('ru-RU')}</span></div>
                    <div class="row"><span>Сумма:</span><span class="val sum">${money(totalSum)}</span></div>
                    ${filterLine}
                    <div id="e8-calc-orders" style="${ordersHtml ? '' : 'display:none;'}">${ordersHtml ? `<div class="ord">${ordersHtml}</div>` : ''}</div>
                `;

                body.querySelectorAll('.ord-head, .row.clickable').forEach(head => {
                    head.addEventListener('click', () => {
                        const id = head.getAttribute('data-target');
                        const detail = body.querySelector('#' + id);
                        if (detail) detail.classList.toggle('open', head.classList.toggle('open'));
                    });
                });
            }

            loadSettings();
            loadPrice().catch(e => log('Ошибка загрузки прайса:', e));

            document.addEventListener('change', (e) => {
                if (e.target && e.target.id === 'e8-automin') {
                    settings.autoMinimize = e.target.checked;
                    saveSettings();
                }
            });

            function boot() { ensureBox(); }
            if (document.body) boot();
            else window.addEventListener('DOMContentLoaded', boot);
            window.__e8Recalculate = function() {
                if (lastJson) processJobs(lastJson);
            };
        })();

        // ==================================================================
        // МОДУЛЬ A. ФИОЛЕТОВЫЙ ЦВЕТ «Заявка №»
        // ==================================================================
        (function() {
            'use strict';
            const TARGET_SELECTOR = 'div.text-sm.font-semibold.break-all';
            const ZAYAVKA_PREFIX = 'Заявка №';
            const ZAYAVKA_COLOR = '#a855f7';

            function styleZayavki() {
                document.querySelectorAll(TARGET_SELECTOR).forEach(node => {
                    const text = (node.textContent || '').trim();
                    if (!text.startsWith(ZAYAVKA_PREFIX)) return;
                    if (node.dataset.zayavkaStyled === '1') return;
                    const currentSize = parseFloat(getComputedStyle(node).fontSize) || 14;
                    node.style.setProperty('font-size', (currentSize + 1) + 'px', 'important');
                    node.style.setProperty('color', ZAYAVKA_COLOR, 'important');
                    node.dataset.zayavkaStyled = '1';
                });
            }
            function start() {
                styleZayavki();
                const observer = new MutationObserver(() => styleZayavki());
                observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
                setInterval(styleZayavki, 1000);
            }
            if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
            else start();
        })();

        (function() {
            'use strict';
            const PRICE_URL = 'https://raw.githubusercontent.com/chucpe/calc/refs/heads/master/src/price.json';
            const TARGET_SELECTOR = 'div.text-sm.font-semibold.break-all';
            const DECOR_ATTR = 'data-price-decorated';
            function getRate() {
                return window.__e8Settings ? window.__e8Settings.rate : 0.48;
            }
            function getTaxMultiplier() {
                const tax = window.__e8Settings ? window.__e8Settings.tax : 13;
                return (1 - tax / 100);
            }
            const PRICE_COLOR = '#7dd87d';
            let priceByName = {};
            let priceLoaded = false;

            function loadPrices() {
                return new Promise((resolve) => {
                    GM_xmlhttpRequest({
                        method: 'GET', url: PRICE_URL + '?t=' + Date.now(),
                        onload: (resp) => {
                            if (resp.status !== 200) { resolve(false); return; }
                            try {
                                const data = JSON.parse(resp.responseText);
                                if (!Array.isArray(data)) throw new Error('not array');
                                priceByName = {};
                                data.forEach(item => {
                                    if (!item || !item.altName) return;
                                    if (typeof item.holes !== 'number') return;
                                    const name = item.altName.trim();
                                    const holes = item.holes;
                                    const grooveM = (typeof item.totalGrooveM === 'number' && isFinite(item.totalGrooveM) && item.totalGrooveM > 0) ? item.totalGrooveM : 0;
                                    const baseSum = holes * getRate() + grooveM * (window.__e8Settings?.grooveRate || 6.52);
                                    priceByName[name] = baseSum * getTaxMultiplier();
                                });
                                priceLoaded = true;
                                resolve(true);
                            } catch (e) { resolve(false); }
                        },
                        onerror: () => resolve(false), ontimeout: () => resolve(false), timeout: 10000
                    });
                });
            }
            function normalize(str) { return (str || '').replace(/\s+/g, ' ').trim().toLowerCase(); }
            function findPriceByText(text) {
                const t = normalize(text);
                if (!t) return null;
                for (const [name, price] of Object.entries(priceByName)) if (normalize(name) === t) return { name, price };
                for (const [name, price] of Object.entries(priceByName)) if (normalize(name).startsWith(t + ' ')) return { name, price };
                for (const [name, price] of Object.entries(priceByName)) if (t.startsWith(normalize(name) + ' ')) return { name, price };
                return null;
            }
            function decorate() {
                if (!priceLoaded) return;
                document.querySelectorAll(TARGET_SELECTOR).forEach(node => {
                    if (node.hasAttribute(DECOR_ATTR)) return;
                    const text = (node.textContent || '').trim();
                    if (!text) return;
                    const match = findPriceByText(text);
                    if (!match) return;
                    const span = document.createElement('span');
                    span.style.cssText = `color:${PRICE_COLOR}; font-weight:bold; margin-left:6px;`;
                    span.textContent = `(${match.price.toFixed(2)})`;
                    node.appendChild(span);
                    node.setAttribute(DECOR_ATTR, '1');
                });
            }
            loadPrices().then((ok) => {
                if (!ok) return;
                decorate();
                const observer = new MutationObserver(() => decorate());
                observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
                let lastUrl = location.href;
                setInterval(() => { if (location.href !== lastUrl) { lastUrl = location.href; setTimeout(decorate, 300); } }, 500);
            });
        })();

        // ==================================================================
        // МОДУЛЬ «ОНЛАЙН» — кто сейчас работает
        // ==================================================================
        (function() {
            'use strict';
            const W = (typeof unsafeWindow !== 'undefined') ? unsafeWindow : window;
            const EMPLOYEES_URL = 'https://raw.githubusercontent.com/chucpe/calc/refs/heads/master/src/employees.json';
            const API_BASE = 'https://backoffice-e8.ffa.su';
            let usersCache = [], currentWorkPlanId = null, employeesMap = null;

            function loadEmployees(force) {
                return new Promise((resolve) => {
                    if (force) employeesMap = null;
                    else if (employeesMap) { resolve(employeesMap); return; }
                    GM_xmlhttpRequest({
                        method: 'GET', url: EMPLOYEES_URL + '?t=' + Date.now(), nocache: true,
                        headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate', 'Pragma': 'no-cache' },
                        onload: (res) => {
                            if (res.status !== 200) { resolve(new Map()); return; }
                            try {
                                let text = res.responseText.replace(/,\s*}/g, '}').replace(/,\s*]/g, ']');
                                const arr = JSON.parse(text);
                                const map = new Map();
                                (Array.isArray(arr) ? arr : Object.values(arr)).forEach(emp => {
                                    if (!emp) return;
                                    const key = String(emp.number ?? emp.id ?? '');
                                    if (!key) return;
                                    map.set(key, {
                                        firstName: (emp.firstName || '').trim(), lastName: (emp.lastName || '').trim(),
                                        workplace: (emp.workplace || emp.machine || '').trim(), comments: (emp.comments || '').trim()
                                    });
                                });
                                employeesMap = map; resolve(map);
                            } catch (e) { resolve(new Map()); }
                        },
                        onerror: () => resolve(new Map()), timeout: 10000
                    });
                });
            }

            function getToken() {
                let t = W.__e8Token || window.__e8Token || localStorage.getItem('auth_token');
                if (!t) return null;
                return /^Bearer\s+/i.test(t) ? t : (/^eyJ/.test(t) ? 'Bearer ' + t : null);
            }

            function fetchWorkPlanId() {
                return new Promise((resolve) => {
                    const token = getToken(); if (!token) { resolve(null); return; }
                    GM_xmlhttpRequest({
                        method: 'GET', url: `${API_BASE}/api/v1/admin/projects/1/jobs?statusId=1`,
                        headers: { 'Accept': 'application/json', 'Authorization': token },
                        onload: (res) => {
                            if (res.status !== 200) { resolve(null); return; }
                            try {
                                const j = JSON.parse(res.responseText);
                                const workPlans = j?.other?.dictionary?.workPlans || j?.data?.other?.dictionary?.workPlans || [];
                                if (workPlans.length > 0 && workPlans[0].id) { resolve(workPlans[0].id); return; }
                                function findWpId(obj, depth) {
                                    if (depth > 6 || !obj || typeof obj !== 'object') return null;
                                    if (obj.workPlanId) return obj.workPlanId;
                                    for (const k in obj) { if (typeof obj[k] === 'object') { const r = findWpId(obj[k], depth + 1); if (r) return r; } }
                                    return null;
                                }
                                resolve(findWpId(j, 0));
                            } catch (e) { resolve(null); }
                        },
                        onerror: () => resolve(null), timeout: 15000
                    });
                });
            }

            function fetchUsersPage(workPlanId, page) {
                return new Promise((resolve) => {
                    const token = getToken(); if (!token) { resolve([]); return; }
                    GM_xmlhttpRequest({
                        method: 'GET', url: `${API_BASE}/api/v1/admin/dictionary/users?page=${page}&take=20&projectId=1&workPlanId=${workPlanId}&label`,
                        headers: { 'Accept': 'application/json', 'Authorization': token },
                        onload: (res) => {
                            if (res.status !== 200) { resolve([]); return; }
                            try { const j = JSON.parse(res.responseText); resolve(j?.items || j?.data?.items || j?.data || []); }
                            catch (e) { resolve([]); }
                        }, onerror: () => resolve([]), timeout: 15000
                    });
                });
            }

            async function loadUsers(workPlanId) {
                const [p1, p2] = await Promise.all([fetchUsersPage(workPlanId, 1), fetchUsersPage(workPlanId, 2)]);
                usersCache = [...p1, ...p2]; return usersCache;
            }

            function formatLastSeen(iso) {
                if (!iso) return '—';
                let s = String(iso); if (!/[Zz]|[+\-]\d{2}:?\d{2}$/.test(s)) s += 'Z';
                const d = new Date(s); if (isNaN(d)) return '—';
                const msk = new Date(d.getTime() + 3 * 60 * 60 * 1000);
                const p = (x) => String(x).padStart(2, '0');
                return `${p(msk.getUTCHours())}:${p(msk.getUTCMinutes())} ${p(msk.getUTCDate())}.${p(msk.getUTCMonth() + 1)}.${String(msk.getUTCFullYear()).slice(-2)}`;
            }

            function escapeHtmlOnline(s) { return String(s || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

            function renderOnlineTable() {
                const panel = document.getElementById('e8-online-panel');
                if (!panel) return;
                if (usersCache.length === 0) { panel.innerHTML = '<div style="font-size:11px;opacity:.6;padding:6px;">Нет данных</div>'; return; }
                const map = employeesMap || new Map();

                const rows = usersCache.filter(u => map.has(String(u.number ?? u.id ?? ''))).map(u => {
                    const emp = map.get(String(u.number ?? u.id ?? '')) || {};
                    const lastName = emp.lastName || u.lastName || '';
                    const firstName = emp.firstName || u.firstName || '';

                    const fioHtml = `<div>${escapeHtmlOnline(lastName)}</div><div>${escapeHtmlOnline(firstName)}</div>`;

                    const workplaceRaw = (emp.workplace || '').trim();
                    const workplace = workplaceRaw ? escapeHtmlOnline(workplaceRaw) : '<span style="font-size:10px;color:#888;font-style:italic;">Не назначено</span>';
                    const comments = (emp.comments || '').trim();
                    const isOnline = String(u.status || '').toUpperCase() === 'ONLINE';
                    let statusHtml = isOnline ? '<span class="status-on">В сети</span>' : `<span class="status-off">${formatLastSeen(u.lastSeen)}</span>`;

                    return { fioHtml, statusHtml, workplace, comments, isOnline, lastSeenMs: u.lastSeen ? new Date(u.lastSeen).getTime() : 0 };
                });

                rows.sort((a, b) => a.isOnline !== b.isOnline ? (a.isOnline ? -1 : 1) : (a.isOnline ? a.fioHtml.localeCompare(b.fioHtml, 'ru') : (b.lastSeenMs - a.lastSeenMs)));

                let html = `<table><thead><tr><th class="col-status">Статус</th><th class="col-name">Сотрудник</th><th class="col-work" style="position: relative; left: -12px;">Рабочее место</th><th class="col-comment">Комментарий</th></tr></thead><tbody>`;

                rows.forEach(r => {
                    html += `<tr>
                        <td class="col-status">${r.statusHtml}</td>
                        <td class="col-name">${r.fioHtml}</td>
                        <td class="col-work"><span style="position: relative; left: -12px;">${r.workplace}</span></td>
                        <td class="col-comment">${escapeHtmlOnline(r.comments)}</td>
                    </tr>`;
                });

                html += `</tbody></table>`;
                panel.innerHTML = html;
            }

            async function refreshOnline() {
                await loadEmployees(true);
                if (!currentWorkPlanId) currentWorkPlanId = await fetchWorkPlanId();
                if (currentWorkPlanId) await loadUsers(currentWorkPlanId);
                renderOnlineTable();
            }

            function attachOnlineButton() {
                const btn = document.getElementById('e8-calc-online-toggle');
                if (!btn || btn.dataset.e8OnlineBound === '1') return;
                btn.dataset.e8OnlineBound = '1';

                btn.addEventListener('click', async () => {
                    const panel = document.getElementById('e8-online-panel');
                    const visible = panel.style.display === 'block';

                    ['e8-stats-panel', 'e8-calc-dates', 'e8-calc-settings', 'e8-calendar-panel'].forEach(id => { document.getElementById(id).style.display = 'none'; });
                    document.getElementById('e8-calc-stats-toggle').textContent = 'Статистика';
                    document.getElementById('e8-calc-settings-toggle').textContent = 'Настройка';
                    document.getElementById('e8-calc-toggle').textContent = 'Считать по датам';
                    document.getElementById('e8-calc-calendar-toggle').textContent = 'Календарь';

                    if (visible) { panel.style.display = 'none'; btn.textContent = 'Онлайн'; }
                    else {
                        panel.style.display = 'block'; btn.textContent = 'Онлайн ✓';
                        panel.innerHTML = '<div style="font-size:11px;opacity:.6;padding:6px;">Загрузка…</div>';
                        try { await refreshOnline(); } catch (e) { panel.innerHTML = '<div style="font-size:11px;color:#ff5555;padding:6px;">Ошибка загрузки</div>'; }
                    }
                });
            }

            setInterval(attachOnlineButton, 1000);
            attachOnlineButton();

            setTimeout(async () => {
                await loadEmployees(true);
                if (!currentWorkPlanId) currentWorkPlanId = await fetchWorkPlanId();
            }, 2000);

            window.__e8OnlineRefresh = refreshOnline;
        })();

        // ==================================================================
        // УСТАНОВКА ПРИЛОЖЕНИЯ — СКРЫВАЕМ БАННЕР
        // ==================================================================
        (function() {
            'use strict';
            const DESCRIPTION_SELECTOR = 'div[data-slot="description"]';
            const DESCRIPTION_TEXT = 'Вы можете установить систему как приложение';
            const MARK = 'data-e8-banner-hidden';
            function findBannerContainer(start) {
                let el = start;
                for (let i = 0; i < 8 && el; i++) { const st = getComputedStyle(el); if (st.position === 'fixed' || st.position === 'sticky') return el; el = el.parentElement; }
                return start.parentElement?.parentElement || start.parentElement || start;
            }
            function hideBanner() {
                document.querySelectorAll(DESCRIPTION_SELECTOR).forEach(node => {
                    const text = (node.textContent || '').trim();
                    if (!text.includes(DESCRIPTION_TEXT)) return;
                    const container = findBannerContainer(node);
                    if (!container || container.dataset.e8BannerHidden === '1') return;
                    container.style.setProperty('display', 'none', 'important'); container.setAttribute(MARK, '1');
                });
            }
            function start() { hideBanner(); const observer = new MutationObserver(() => hideBanner()); observer.observe(document.body || document.documentElement, { childList: true, subtree: true }); setInterval(hideBanner, 500); }
            if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
            else start();
        })();

        // ==================================================================
        // СКРЫВАЕМ БАННЕР «Напоминание»
        // ==================================================================
        (function() {
            'use strict';
            const POPUP_TITLE = 'Напоминание';
            function closeReminderPopup() {
                const candidates = document.querySelectorAll('div.reka-dialog-content, div[role="dialog"], dialog[open]');
                for (const dlg of candidates) {
                    const text = (dlg.textContent || '');
                    if (!text.includes(POPUP_TITLE)) continue;
                    const selectors = ['button[aria-label="Закрыть"]', 'button[data-slot="close"]', 'button[type="button"]'];
                    for (const sel of selectors) { const btn = dlg.querySelector(sel); if (btn && !btn.disabled) { btn.click(); return; } }
                }
            }
            function start() { closeReminderPopup(); const observer = new MutationObserver(() => closeReminderPopup()); observer.observe(document.body || document.documentElement, { childList: true, subtree: true }); setInterval(closeReminderPopup, 500); }
            if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
            else start();
        })();

        // ==================================================================
        // ПОДСЧЁТ КОЛИЧЕСТВА ОТВЕРСТИЙ И ЦИТАТА
        // ==================================================================
        (function() {
            'use strict';
            const W = (typeof unsafeWindow !== 'undefined') ? unsafeWindow : window;
            const STORAGE_KEY_SUM = 'e8_hole_counter_sum';
            const STORAGE_KEY_PALLET = 'e8_pallet_counter_sum';
            const STORAGE_KEY_GROOVE = 'e8_groove_counter_sum';
            let totalSum = 0; let palletSum = 0; let totalGrooveSum = 0; let waitingForCharData = false;

            try {
                const s = localStorage.getItem(STORAGE_KEY_SUM); if (s !== null) { const p = parseInt(s, 10); if (!isNaN(p)) totalSum = p; }
                const p2 = localStorage.getItem(STORAGE_KEY_PALLET); if (p2 !== null) { const p = parseInt(p2, 10); if (!isNaN(p)) palletSum = p; }
                const g = localStorage.getItem(STORAGE_KEY_GROOVE); if (g !== null) { const p = parseFloat(g); if (!isNaN(p)) totalGrooveSum = p; }
            } catch (e) {}
            function saveSum() { try { localStorage.setItem(STORAGE_KEY_SUM, String(totalSum)); } catch (e) {} }
            function savePallet() { try { localStorage.setItem(STORAGE_KEY_PALLET, String(palletSum)); } catch (e) {} }
            function saveGrooveSum() { try { localStorage.setItem(STORAGE_KEY_GROOVE, String(totalGrooveSum)); } catch (e) {} }

            function createQuote() {
                if (document.getElementById('hole-counter-quote')) return;
                const q = document.createElement('div'); q.id = 'hole-counter-quote';
                q.style.cssText = `position: fixed; right: 20px; bottom: 74px; z-index: 999999; background: #1e1e2e; color: #eee; border: 1px solid #444; border-radius: 8px; padding: 8px 26px 8px 12px; font: 12px/1.4 system-ui, sans-serif; box-shadow: 0 6px 18px rgba(0,0,0,.5); min-width: 170px; max-width: calc(100vw - 40px); box-sizing: border-box; display: none; user-select: none;`;
                q.innerHTML = `<span id="hole-counter-quote-close" style="position:absolute; top:4px; right:6px; cursor:pointer; opacity:.6; font-size:14px; line-height:1;" title="Закрыть">×</span><div style="display:flex; justify-content:space-between; gap:14px; color:#7CFC9B;"><span>Заработок:</span><span id="hole-counter-earnings" style="font-weight:700;">0.00</span></div><div style="display:flex; justify-content:space-between; gap:14px; margin-top:2px; color:#fbbf24;"><span>Отверстий:</span><span id="hole-counter-value" style="font-weight:700;">0</span></div><div style="display:flex; justify-content:space-between; gap:14px; margin-top:2px; color:#a78bfa;"><span>Пазы (м):</span><span id="hole-counter-groove" style="font-weight:700;">0.00</span></div><button id="hole-counter-reset" style="margin-top:8px; width:100%; cursor:pointer; background:#ef4444; color:#fff; border:0; border-radius:5px; padding:4px 8px; font:600 11px system-ui,sans-serif;">Сброс</button>`;
                document.body.appendChild(q);
                q.querySelector('#hole-counter-quote-close').addEventListener('click', () => { q.style.display = 'none'; });
                q.querySelector('#hole-counter-reset').addEventListener('click', () => { totalSum = 0; palletSum = 0; totalGrooveSum = 0; saveSum(); savePallet(); saveGrooveSum(); updateDisplay(); });
                updateDisplay();
            }

            function updateDisplay() {
                const earningsSpan = document.getElementById('hole-counter-earnings');
                const valueSpan = document.getElementById('hole-counter-value');
                const grooveSpan = document.getElementById('hole-counter-groove');

                const rate = window.__e8Settings?.rate ?? 0.48;
                const tax = window.__e8Settings?.tax ?? 13;
                const grooveRate = window.__e8Settings?.grooveRate ?? 6.52;

                const holesEarn = totalSum * rate * (1 - tax / 100);
                const grooveEarn = totalGrooveSum * grooveRate * (1 - tax / 100);
                const totalEarn = holesEarn + grooveEarn;

                if (earningsSpan) earningsSpan.textContent = totalEarn.toFixed(2);
                if (valueSpan) valueSpan.textContent = totalSum;
                if (grooveSpan) {
                    grooveSpan.textContent = totalGrooveSum.toFixed(2);
                    const grooveRow = grooveSpan.parentElement;
                if (grooveRow) {
                    grooveRow.style.display = totalGrooveSum > 0 ? 'flex' : 'none';
                    }
                }
            }

            function showQuote() { const q = document.getElementById('hole-counter-quote'); if (q) q.style.display = 'block'; }
            function isRequired(item) { if (!item.category || !item.category.label) return false; return item.category.label.trim() === 'ЛДСП'; }
            function traverse(node, acc) {
                if (!node || typeof node !== 'object') return;
                if (typeof node.totalHole === 'number' && isRequired(node)) acc.holes += node.totalHole;
                if (typeof node.totalGrooveM === 'number' && isFinite(node.totalGrooveM) && node.totalGrooveM > 0) {
                    acc.grooveM += node.totalGrooveM;
                }
                if (typeof node.count === 'number') acc.pallets += node.count;
                if (Array.isArray(node.children)) node.children.forEach(ch => traverse(ch, acc));
                if (Array.isArray(node.items)) node.items.forEach(ch => traverse(ch, acc));
            }
            function processJsonData(data) {
                if (!data) return;
                const acc = { holes: 0, pallets: 0, grooveM: 0 };
                traverse(data, acc);

                if (acc.holes > 0) { totalSum += acc.holes; saveSum(); }
                if (acc.grooveM > 0) { totalGrooveSum += acc.grooveM; saveGrooveSum(); }
                if (acc.pallets > 0) { palletSum += acc.pallets; savePallet(); }

                if (waitingForCharData && (acc.holes > 0 || acc.pallets > 0 || acc.grooveM > 0)) {
                    updateDisplay();
                    showQuote();
                    waitingForCharData = false;
                } else if (acc.holes > 0 || acc.pallets > 0 || acc.grooveM > 0) {
                    updateDisplay();
                }
            }
            document.addEventListener('click', (e) => {
                const btn = e.target.closest('button, [role="button"], a, div, span, [data-slot="trigger"]');
                if (!btn) return; const text = (btn.textContent || '').trim();
                if (!text.includes('Характеристики продукции')) return;
                waitingForCharData = true; setTimeout(() => { waitingForCharData = false; }, 5000);
            }, true);
            const originalOpen = W.XMLHttpRequest.prototype.open;
            W.XMLHttpRequest.prototype.open = function(method, url) {
                this.addEventListener('load', function() {
                    if (this.status === 200 && this.responseText) { try { const json = JSON.parse(this.responseText); if (json && (json.items || json.other)) processJsonData(json); } catch (e) {} }
                });
                return originalOpen.apply(this, arguments);
            };
            const originalFetch = W.fetch;
            W.fetch = async function(...args) {
                const response = await originalFetch.apply(this, args);
                const clone = response.clone();
                clone.json().then(data => { if (data && (data.items || data.other)) processJsonData(data); }).catch(() => {});
                return response;
            };
            if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', createQuote);
            else createQuote();
        })();


        // ==================================================================
        // ЗАМЕНА ИКОНКИ ПРИЛОЖЕНИЯ
        // ==================================================================
        (function() {
            'use strict';
            const SVG_ICON = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>`;

            const css = `
                #e8-calc-mini {
                position: fixed !important;
                right: 20px !important;
                bottom: 20px !important;
                z-index: 2147483647 !important;
                width: 56px !important;
                height: 56px !important;
                border-radius: 50% !important;
                border: none !important;
                cursor: pointer !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                pointer-events: auto !important;

                background-color: #0ea5e9 !important;
                background-image: url('${SVG_ICON}'), linear-gradient(135deg, #0ea5e9 0%, #2dd4bf 100%) !important;
                background-repeat: no-repeat, no-repeat !important;
                background-position: center center, center center !important;
                background-size: 28px 28px, cover !important;

                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                animation: e8-wave-pulse 2s infinite !important;
            }

                #e8-calc-mini:hover {
                transform: translateY(-5px) scale(1.05) !important;
                background-image: url('${SVG_ICON}'), linear-gradient(135deg, #38bdf8 0%, #5eead4 100%) !important;
            }

                #e8-calc-mini:active {
                transform: translateY(0) scale(0.95) !important;
            }

                #e8-calc-mini.hidden {
                display: none !important;
            }

                @keyframes e8-wave-pulse {
                0% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.7); }
                70% { box-shadow: 0 0 0 15px rgba(14, 165, 233, 0); }
                100% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0); }
            }
            `;

            const style = document.createElement('style');
            style.textContent = css;
            document.head.appendChild(style);
        })();

        // ==================================================================
        // МОДУЛЬ АВТО-ПОПОЛНЕНИЯ PRICE.JSON
        // ==================================================================
        (function() {
            'use strict';
            const W = (typeof unsafeWindow !== 'undefined') ? unsafeWindow : window;

            const GTP = window.__e8GTP;
            const OWNER = atob('Y2h1Y3Bl');
            const REPO = atob('Y2FsYw==');
            const FILE_PATH = atob('c3JjL3ByaWNlLmpzb24=');
            const API_BASE = atob('aHR0cHM6Ly9iYWNrb2ZmaWNlLWU4LmZmYS5zdQ==');

            const MAX_PARALLEL = 4;

            let isCheckingJobs = false;
            let isUpdatingGithub = false;
            let knownNames = new Set();
            let knownBaseNames = new Set();
            let isPriceLoaded = false;

            function normalize(s) { return String(s || '').toLowerCase().replace(/\s+/g, '').replace(/[«»"']/g, '').trim(); }
            function baseName(s) { return normalize(s).replace(/\([^)]*\)/g, ''); }

            async function loadCurrentPrice() {
                try {
                    const res = await new Promise((resolve) => {
                        GM_xmlhttpRequest({
                            method: 'GET',
                            url: `https://raw.githubusercontent.com/${OWNER}/${REPO}/master/${FILE_PATH}?t=${Date.now()}`,
                            onload: resolve,
                            onerror: () => resolve(null)
                        });
                    });
                    if (!res || res.status !== 200) return;
                    const arr = JSON.parse(res.responseText);
                    arr.forEach(item => {
                        if (!item.name) return;
                        knownNames.add(item.name);
                        knownBaseNames.add(baseName(item.name));
                    });
                    isPriceLoaded = true;
                    console.log('[e8-autoprice] База имен загружена. Записей:', knownNames.size);
                } catch (e) {
                    console.error('[e8-autoprice] Ошибка загрузки прайса:', e);
                }
            }

            function countParams(obj) {
                let holes = 0;
                let grooveM = 0;
                function traverse(node) {
                    if (!node || typeof node !== 'object') return;
                    if (typeof node.totalHole === 'number' && node.category && node.category.label && node.category.label.trim() === 'ЛДСП') {
                        holes += node.totalHole;
                    }
                    if (typeof node.totalGrooveM === 'number') {
                        grooveM += node.totalGrooveM;
                    }
                    if (Array.isArray(node.children)) node.children.forEach(traverse);
                    if (Array.isArray(node.items)) node.items.forEach(traverse);
                }
                traverse(obj);
                return { holes, grooveM };
            }

            function fetchProductParams(productId, jobId) {
                return new Promise((resolve) => {
                    let token = W.__e8Token || window.__e8Token || localStorage.getItem('auth_token');
                    if (token && /^eyJ/.test(token)) token = /^Bearer\s+/i.test(token) ? token : ('Bearer ' + token);
                    if (!token) {
                        resolve(0);
                        return;
                    }

                    const url = `${API_BASE}/api/v1/admin/projects/1/jobs/${jobId}/params`;

                    GM_xmlhttpRequest({
                        method: 'GET',
                        url: url,
                        headers: { 'Accept': 'application/json', 'Authorization': token },
                        onload: (res) => {
                            if (res.status !== 200) { resolve({ holes: 0, grooveM: 0 }); return; }
                            try {
                                const json = JSON.parse(res.responseText);

                                const params = countParams(json);

                                if (params.holes === 0) {
                                    console.warn(`[e8-autoprice] Отверстия не найдены (0) для ${jobId}. Ответ API:`, json);
                                }
                                resolve(params);
                            } catch (e) {
                                console.error('[e8-autoprice] Ошибка парсинга', e);
                                resolve({ holes: 0, grooveM: 0 });
                            }
                        },
                        onerror: () => resolve({ holes: 0, grooveM: 0 }),
                        timeout: 10000
                    });
                });
            }

            async function updateGitHubJson(newData) {
                if (!GTP || GTP === 'ВАШ_ТОКЕН_ЗДЕСЬ') {
                    console.warn('[e8-autoprice] Не указан gtp.');
                    return;
                }
                if (isUpdatingGithub) return;
                isUpdatingGithub = true;

                const apiUrl = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE_PATH}`;
                const headers = {
                    'Authorization': `Bearer ${GTP}`,
                    'Accept': 'application/vnd.github.v3+json',
                    'Content-Type': 'application/json'
                };

                try {
                    const getRes = await new Promise((resolve) => {
                        GM_xmlhttpRequest({ method: 'GET', url: apiUrl, headers, onload: resolve, onerror: () => resolve(null) });
                    });

                    if (!getRes || getRes.status !== 200) throw new Error('Не удалось получить SHA файла');
                    const sha = JSON.parse(getRes.responseText).sha;

                    const jsonString = JSON.stringify(newData, null, 2);
                    const base64Content = btoa(unescape(encodeURIComponent(jsonString)));

                    await new Promise((resolve, reject) => {
                        GM_xmlhttpRequest({
                            method: 'PUT',
                            url: apiUrl,
                            headers: headers,
                            data: JSON.stringify({
                                message: 'Auto-add missing products (batch update)',
                                content: base64Content,
                                sha: sha,
                                branch: 'master'
                            }),
                            onload: (res) => {
                                if (res.status === 200 || res.status === 201) {
                                    console.log('[e8-autoprice] ✅ Файл price.json успешно обновлен!');
                                    resolve();
                                } else {
                                    reject(new Error(`Ошибка: ${res.status} ${res.responseText}`));
                                }
                            },
                            onerror: () => reject(new Error('Сетевая ошибка при обновлении'))
                        });
                    });
                } catch (e) {
                    console.error('[e8-autoprice] ❌ Ошибка обновления:', e.message);
                } finally {
                    isUpdatingGithub = false;
                }
            }

            async function processJobs(json) {
                if (isCheckingJobs || !isPriceLoaded || isUpdatingGithub) return;
                isCheckingJobs = true;

                try {
                    const items = json?.items || json?.data?.items;
                    const productsDict = json?.other?.dictionary?.products || json?.data?.other?.dictionary?.products || [];
                    if (!items || !productsDict.length) return;

                    const productMap = new Map(productsDict.map(p => [p.id, p.label]));
                    const missingProducts = new Map();

                    for (const order of items) {
                        for (const group of (order.children || [])) {
                            const productId = group.productId;
                            const label = productMap.get(productId);
                            if (!label) continue;

                            if (knownNames.has(label) || knownBaseNames.has(baseName(label))) continue;

                            let foundJobId = null;
                            for (const wp of (group.children || [])) {
                                for (const pallet of (wp.children || [])) {
                                    if (pallet.id) { foundJobId = pallet.id; break; }
                                }
                                if (foundJobId) break;
                            }

                            if (foundJobId) {
                                missingProducts.set(label, { productId, jobId: foundJobId });
                            }
                        }
                    }

                    if (missingProducts.size === 0) return;
                    console.log(`[e8-autoprice] Найдено ${missingProducts.size} новых изделий. Собираем данные...`);

                    let currentPriceData = [];
                    const rawRes = await new Promise((resolve) => {
                        GM_xmlhttpRequest({ method: 'GET', url: `https://raw.githubusercontent.com/${OWNER}/${REPO}/master/${FILE_PATH}?t=${Date.now()}`, onload: resolve });
                    });
                    if (rawRes && rawRes.status === 200) currentPriceData = JSON.parse(rawRes.responseText);

                    const newItemsBatch = [];
                    const entries = Array.from(missingProducts.entries());

                    for (let i = 0; i < entries.length; i += MAX_PARALLEL) {
                        const chunk = entries.slice(i, i + MAX_PARALLEL);
                        await Promise.all(chunk.map(async ([label, data]) => {
                            const params = await fetchProductParams(data.productId, data.jobId);
                            if (params.holes > 0) {
                                let altName = label;
                                if (/^Б00\d/.test(altName)) {
                                    altName = altName.replace(/^Б00/, 'А');
                                } else if (/^Б00[А-ЯЁA-Z]/i.test(altName)) {
                                    altName = altName.replace(/^Б00/, '');
                                } else {
                                    altName = label;
                                }

                                const newItem = { name: label, altName: altName, holes: params.holes };
                                if (params.grooveM > 0) {
                                    newItem.totalGrooveM = params.grooveM;
                                }

                                newItemsBatch.push(newItem);
                                console.log(`[e8-autoprice] Данные собраны: ${label} (${params.holes} отв., ${params.grooveM.toFixed(2)} м паза)`);
                            } else {
                                console.warn(`[e8-autoprice] Не удалось посчитать отверстия для ${label}`);
                            }
                        }));
                    }

                    if (newItemsBatch.length > 0) {
                        console.log(`[e8-autoprice] Сбор завершен. Отправляем ${newItemsBatch.length} новых записей в price...`);
                        currentPriceData.push(...newItemsBatch);
                        newItemsBatch.forEach(item => {
                            knownNames.add(item.name);
                            knownBaseNames.add(baseName(item.name));
                        });
                        await updateGitHubJson(currentPriceData);
                    }

                } catch (e) {
                    console.error('[e8-autoprice] Ошибка в процессе:', e);
                } finally {
                    isCheckingJobs = false;
                }
            }

            loadCurrentPrice();

            function patchFetch(target) {
                if (!target || !target.fetch || target.__e8AutoPricePatched) return;
                target.__e8AutoPricePatched = true;
                const orig = target.fetch;
                target.fetch = async function (...args) {
                    const url = typeof args[0] === 'string' ? args[0] : args[0]?.url || '';
                    const res = await orig.apply(this, args);
                    if (url.includes('/jobs') && (url.includes('statusId=1') || url.includes('statusId=2'))) {
                        res.clone().json().then(processJobs).catch(() => {});
                    }
                    return res;
                };
            }

            patchFetch(W);
            if (W !== window) patchFetch(window);

            const XHR = W.XMLHttpRequest || window.XMLHttpRequest;
            if (XHR && !XHR.prototype.__e8AutoPricePatched) {
                XHR.prototype.__e8AutoPricePatched = true;
                const origOpen = XHR.prototype.open;
                const origSend = XHR.prototype.send;
                XHR.prototype.open = function (method, url, ...rest) { this.__e8url = url; return origOpen.call(this, method, url, ...rest); };
                XHR.prototype.send = function (...args) {
                    this.addEventListener('load', function () {
                        try {
                            const url = this.__e8url || '';
                            if (url.includes('/jobs') && (url.includes('statusId=1') || url.includes('statusId=2'))) {
                                processJobs(JSON.parse(this.responseText));
                            }
                        } catch (e) {}
                    });
                    return origSend.apply(this, args);
                };
            }
        })();

        // ==================================================================
        // МОДУЛЬ: ОТВЕРСТИЯ ИЗ PRICE.JSON И СУММА
        // ==================================================================
        (function() {
            'use strict';
            const W = (typeof unsafeWindow !== 'undefined') ? unsafeWindow : window;
            const PRICE_URL = 'https://raw.githubusercontent.com/chucpe/calc/refs/heads/master/src/price.json';

            let priceMap = new Map();
            let isPriceLoaded = false;

            function normalize(s) { return String(s || '').toLowerCase().replace(/\s+/g, '').replace(/[«»"']/g, '').trim(); }
            function baseName(s) { return normalize(s).replace(/\([^)]*\)/g, ''); }

            function loadPrice() {
                GM_xmlhttpRequest({
                    method: 'GET',
                    url: PRICE_URL + '?t=' + Date.now(),
                    onload: (res) => {
                        if (res.status === 200) {
                            try {
                                const arr = JSON.parse(res.responseText);
                                for (const item of arr) {
                                    if (item && item.name && typeof item.holes === 'number') {
                                        const value = {
                                            holes: Number(item.holes) || 0,
                                            grooveM: (typeof item.totalGrooveM === 'number' && isFinite(item.totalGrooveM) && item.totalGrooveM > 0) ? item.totalGrooveM : 0
                                        };
                                        priceMap.set(normalize(item.name), value);
                                        priceMap.set(baseName(item.name), value);
                                    }
                                }
                                isPriceLoaded = true;
                                console.log('[e8-pallet-info] Прайс загружен, записей:', arr.length);
                            } catch (e) {
                                console.error('[e8-pallet-info] Ошибка парсинга прайса:', e);
                            }
                        }
                    }
                });
            }

            function findParams(label) {
                if (!label) return null;
                const norm = normalize(label);
                if (priceMap.has(norm)) return priceMap.get(norm);

                const base = baseName(label);
                if (priceMap.has(base)) return priceMap.get(base);

                for (const [k, v] of priceMap) {
                    if (base && k.startsWith(base) && base.length > 4) return v;
                }
                return null;
            }

            function calculateSum(params) {
                if (!params) return null;
                const rate = window.__e8Settings ? window.__e8Settings.rate : 0.48;
                const tax = window.__e8Settings ? window.__e8Settings.tax : 13;
                const grooveRate = window.__e8Settings ? (window.__e8Settings.grooveRate ?? 6.52) : 6.52;

                const holes = params.holes || 0;
                const grooveM = params.grooveM || 0;
                const baseSum = holes * rate + grooveM * grooveRate;
                return (baseSum * (1 - tax / 100)).toFixed(2);
            }

            function injectToDOM(params, sum) {
                if (document.getElementById('e8-test-info')) return;

                let stageEl = null;
                const divs = document.querySelectorAll('div.text-sm.text-muted');
                for (const el of divs) {
                    if (el.textContent.trim() === 'Этап') { stageEl = el; break; }
                }
                if (!stageEl) return;

                const grid = stageEl.closest('.grid');
                if (!grid) return;

                const holes = params ? params.holes : null;
                const grooveM = params ? params.grooveM : 0;

                const l1 = document.createElement('div');
                l1.className = 'text-sm text-muted';
                l1.textContent = 'Количество отверстий';

                const v1 = document.createElement('div');
                v1.className = 'flex items-center justify-end text-right text-sm wrap-break-word break-all whitespace-pre-wrap';
                v1.style.color = '#60a5fa';
                v1.style.fontWeight = 'bold';
                v1.textContent = holes === null ? 'Нет в прайсе' : holes;

                const l2 = document.createElement('div');
                l2.className = 'text-sm text-muted';
                l2.textContent = 'Сумма';

                const v2 = document.createElement('div');
                v2.className = 'flex items-center justify-end text-right text-sm break-all whitespace-pre-wrap';
                v2.style.color = '#60a5fa';
                v2.style.fontWeight = 'bold';
                v2.textContent = sum === null ? '—' : sum + ' ₽';

                const wrapper = document.createElement('div');
                wrapper.id = 'e8-test-info';
                wrapper.style.display = 'contents';

                wrapper.appendChild(l1);
                wrapper.appendChild(v1);
                wrapper.appendChild(l2);
                wrapper.appendChild(v2);

                if (grooveM > 0) {
                    const l3 = document.createElement('div');
                    l3.className = 'text-sm text-muted';
                    l3.textContent = 'Пазы (м)';

                    const v3 = document.createElement('div');
                    v3.className = 'flex items-center justify-end text-right text-sm break-all whitespace-pre-wrap';
                    v3.style.color = '#a78bfa';
                    v3.style.fontWeight = 'bold';
                    v3.textContent = grooveM.toFixed(2);

                    wrapper.appendChild(l3);
                    wrapper.appendChild(v3);
                }

                grid.appendChild(wrapper);
            }

            function processPage() {
                if (!isPriceLoaded) return;
                if (document.getElementById('e8-test-info')) return;

                let stageEl = null;
                let labelEl = null;
                const divs = document.querySelectorAll('div.text-sm.text-muted');

                for (let i = 0; i < divs.length; i++) {
                    const text = divs[i].textContent.trim();
                    if (text === 'Этап') stageEl = divs[i];
                    if (text === 'Название' && divs[i].nextElementSibling) {
                        labelEl = divs[i].nextElementSibling;
                    }
                }

                if (!stageEl || !labelEl) return;

                const productLabel = labelEl.textContent.trim();
                const params = findParams(productLabel);
                const sum = calculateSum(params);

                injectToDOM(params, sum);
            }

            loadPrice();

            setInterval(() => {
                processPage();

                const hasStage = Array.from(document.querySelectorAll('div.text-sm.text-muted')).some(el => el.textContent.trim() === 'Этап');
                if (!hasStage) {
                    document.getElementById('e8-test-info')?.remove();
                }
            }, 500);

        })();

        // ==================================================================
        // CSS ДЛЯ ПОДСВЕТКИ СТРОК В СТАТИСТИКЕ
        // ==================================================================
        (function() {
            'use strict';
            const style = document.createElement('style');
            style.textContent = `
                .e8-day-row:hover {
                    background-color: rgba(255, 255, 255, 0.25) !important;
                }
                .e8-toggle-group:hover {
                    background-color: rgba(255, 255, 255, 0.25) !important;
                    border-radius: 4px;
                }
            `;
            document.head.appendChild(style);
        })();

        // ==================================================================
        // МОДУЛЬ «В РАБОТЕ» — ХРАНЕНИЕ НА GITHUB
        // ==================================================================
        (function() {
            'use strict';
            const API_BASE = 'https://backoffice-e8.ffa.su/api/v1/admin';
            const MAX_PARALLEL = 5;

            const OWNER = atob('Y2h1Y3Bl');
            const REPO  = atob('Y2FsYw==');
            const FILE  = 'src/inwork.json';
            const GH_API = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE}`;
            const GH_RAW = `https://raw.githubusercontent.com/${OWNER}/${REPO}/master/${FILE}`;

            let memoryCache = [];
            let githubSha = null;
            let isDirty = false;
            let writeTimer = null;
            let isWriting = false;

            function escapeHtmlLocal(s) {
                return String(s || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
            }
            function cleanLabelW(label) {
                return window.__e8CleanLabel ? window.__e8CleanLabel(label) : label;
            }

            function getGithubHeaders() {
                const GTP = window.__e8GTP;
                if (!GTP) return null;
                return {
                    'Authorization': `Bearer ${GTP}`,
                    'Accept': 'application/vnd.github.v3+json',
                    'Content-Type': 'application/json'
                };
            }

            async function loadFromGitHub() {
                return new Promise((resolve) => {
                    GM_xmlhttpRequest({
                        method: 'GET',
                        url: `${GH_RAW}?t=${Date.now()}`,
                        onload: (res) => {
                            if (res.status !== 200) { resolve([]); return; }
                            try {
                                const arr = JSON.parse(res.responseText);
                                const list = (Array.isArray(arr) ? arr : [])
                                    .map(normalizeJob)
                                    .filter(Boolean);
                                resolve(dedupeById(list));
                            } catch (e) { resolve([]); }
                        },
                        onerror: () => resolve([]),
                        timeout: 10000
                    });
                });
            }

            function scheduleWrite() {
                isDirty = true;
                if (writeTimer) clearTimeout(writeTimer);
                writeTimer = setTimeout(flushWrite, 1500);
            }

            async function flushWrite() {
                if (!isDirty || isWriting) return;
                const headers = getGithubHeaders();
                if (!headers) { console.warn('[e8-inwork] Нет токена GitHub'); return; }

                isWriting = true;
                try {
                    memoryCache = dedupeById(memoryCache);

                    if (!githubSha) {
                        const getRes = await new Promise((resolve) => {
                            GM_xmlhttpRequest({ method: 'GET', url: GH_API, headers, onload: resolve, onerror: () => resolve(null) });
                        });
                        if (getRes && getRes.status === 200) githubSha = JSON.parse(getRes.responseText).sha;
                    }

                    const jsonString = JSON.stringify(memoryCache, null, 2);
                    const base64Content = btoa(unescape(encodeURIComponent(jsonString)));

                     let authorName = 'unknown';

                    let login = '';
                    try {
                        const l = localStorage.getItem('auth_login');
                        if (l) login = l.trim();
                    } catch (e) {}

                    try {
                        const token = localStorage.getItem('auth_token');
                        if (token) {
                            const authHeader = /^Bearer\s+/i.test(token) ? token : ('Bearer ' + token);

                            const profileRes = await new Promise((resolve) => {
                                GM_xmlhttpRequest({
                                    method: 'GET',
                                    url: 'https://backoffice-e8.ffa.su/api/v1/admin/profile',
                                    headers: { 'Accept': 'application/json', 'Authorization': authHeader },
                                    onload: resolve,
                                    onerror: () => resolve(null),
                                    timeout: 5000
                                });
                            });

                            if (profileRes && profileRes.status === 200) {
                                const profile = JSON.parse(profileRes.responseText);
                                const fName = profile.firstName || '';
                                const lName = profile.lastName || '';

                                const fullName = `${fName} ${lName}`.trim();

                                if (fullName && login) {
                                    authorName = `${fullName} (${login})`;
                                } else if (fullName) {
                                    authorName = fullName;
                                } else if (login) {
                                    authorName = login;
                                }
                            }
                        }
                    } catch (e) {
                        console.warn('[e8-inwork] Не удалось получить профиль:', e);
                    }

                    if (authorName === 'unknown' && login) {
                        authorName = login;
                    }

                    const now = new Date();
                    const msk = new Date(now.getTime() + 3 * 60 * 60 * 1000);
                    const p = (x) => String(x).padStart(2, '0');
                    const timeStr = `${p(msk.getUTCDate())}.${p(msk.getUTCMonth() + 1)}.${msk.getUTCFullYear()} ${p(msk.getUTCHours())}:${p(msk.getUTCMinutes())}`;

                    const body = {
                        message: `Update inwork.json by ${authorName} at ${timeStr} MSK`,
                        content: base64Content,
                        branch: 'master'
                    };
                    if (githubSha) body.sha = githubSha;

                    await new Promise((resolve, reject) => {
                        GM_xmlhttpRequest({
                            method: 'PUT', url: GH_API, headers,
                            data: JSON.stringify(body),
                            onload: (res) => {
                                if (res.status === 200 || res.status === 201) {
                                    const j = JSON.parse(res.responseText);
                                    githubSha = j.content?.sha || githubSha;
                                    isDirty = false;
                                    console.log('[e8-inwork] ✅ Записано на GitHub:', memoryCache.length);
                                    resolve();
                                } else if (res.status === 409) {
                                    console.warn('[e8-inwork] ⚠️ Конфликт версий (409). Сбрасываем SHA и пробуем снова...');
                                    githubSha = null;
                                    isWriting = false;
                                    scheduleWrite();
                                    reject(new Error('409'));
                                } else {
                                    console.error('[e8-inwork] Ошибка записи:', res.status, res.responseText);
                                    reject(new Error(String(res.status)));
                                }
                            },
                            onerror: () => reject(new Error('network')),
                            timeout: 20000
                        });
                    });
                } catch (e) {
                    console.error('[e8-inwork] flushWrite error:', e);
                } finally {
                    isWriting = false;
                }
            }

            function normalizeJob(j) {
                if (!j || !j.id) return null;
                let firstName = (j.firstName || '').trim();
                let lastName  = (j.lastName  || '').trim();
                if (!firstName && !lastName && j.worker) {
                    const parts = String(j.worker).trim().split(/\s+/);
                    lastName  = parts[0] || '';
                    firstName = parts.slice(1).join(' ') || '';
                }
                return {
                    id: String(j.id),
                    name: j.name || '',
                    firstName,
                    lastName,
                    status: j.status || 'Не назначен',
                    date: j.date || '',
                    startDateTime: j.startDateTime || null,
                    cancelDateTime: j.cancelDateTime || null,
                    execCount: Number(j.execCount) || 1
                };
            }

            function dedupeById(list) {
                const rank = { 'Завершен': 3, 'В работе': 2, 'Не назначен': 1 };
                const map = new Map();
                for (const j of list) {
                    if (!j || !j.id) continue;
                    const existing = map.get(j.id);
                    if (!existing) { map.set(j.id, j); continue; }
                    const rOld = rank[existing.status] || 0;
                    const rNew = rank[j.status] || 0;
                    if (rNew > rOld) { map.set(j.id, j); continue; }
                    if (rNew === rOld) {
                        const scoreOld = (existing.date ? 1 : 0) + (existing.firstName || existing.lastName ? 1 : 0);
                        const scoreNew = (j.date ? 1 : 0) + (j.firstName || j.lastName ? 1 : 0);
                        if (scoreNew > scoreOld) map.set(j.id, j);
                    }
                }
                return [...map.values()];
            }

            function toMsk(iso) {
                if (!iso) return '—';
                let s = String(iso);
                if (!/[Zz]|[+\-]\d{2}:?\d{2}$/.test(s)) s += 'Z';
                const d = new Date(s);
                if (isNaN(d)) return '—';
                const msk = new Date(d.getTime() + 3 * 60 * 60 * 1000);
                const p = (x) => String(x).padStart(2, '0');
                return `${p(msk.getUTCDate())}.${p(msk.getUTCMonth() + 1)}.${msk.getUTCFullYear()} ${p(msk.getUTCHours())}:${p(msk.getUTCMinutes())}`;
            }

            function getToken() {
                let t = localStorage.getItem('auth_token');
                if (t && /^eyJ/.test(t)) return /^Bearer\s+/i.test(t) ? t : ('Bearer ' + t);
                return null;
            }

            function fetchJobInfo(jobId) {
                return new Promise((resolve) => {
                    const token = getToken();
                    if (!token) { resolve(null); return; }
                    GM_xmlhttpRequest({
                        method: 'GET',
                        url: `${API_BASE}/projects/1/jobs/${jobId}`,
                        headers: { 'Accept': 'application/json', 'Authorization': token },
                        onload: (res) => {
                            if (res.status === 200) {
                                try {
                                    const json = JSON.parse(res.responseText);
                                    let d = null;
                                    if (Array.isArray(json) && json.length > 0) d = json[0];
                                    else if (json.data && Array.isArray(json.data) && json.data.length > 0) d = json.data[0];
                                    else if (json.data && typeof json.data === 'object') d = json.data;
                                    else if (json && typeof json === 'object') d = json;
                                    resolve(d);
                                } catch (e) { resolve(null); }
                            } else resolve(null);
                        },
                        onerror: () => resolve(null),
                        timeout: 10000
                    });
                });
            }

            function renderInWorkTable() {
                const panel = document.getElementById('e8-stats-panel');
                if (!panel) return;
                const tabInWork = document.getElementById('e8-tab-inwork');
                if (!tabInWork || tabInWork.style.background !== 'rgb(59, 130, 246)') return;

                const btnRow = panel.querySelector('div[style*="display:flex"]');
                const savedButtons = btnRow ? btnRow.outerHTML : '';
                panel.innerHTML = '';
                if (savedButtons) panel.innerHTML += savedButtons;

                const jobs = memoryCache.slice();
                const container = document.createElement('div');
                container.style.cssText = 'margin-top:6px; margin-left: 0; padding-left: 0;';

                if (jobs.length === 0) {
                    container.innerHTML = `<div style="font-size:11px;opacity:.6;margin-top:4px;">Данные загружаются…</div>`;
                } else {
                    jobs.sort((a, b) => {
                        const order = { 'В работе': 1, 'Завершен': 2, 'Не назначен': 3 };
                        const oa = order[a.status] || 4, ob = order[b.status] || 4;
                        if (oa !== ob) return oa - ob;
                        return (b.date || '').localeCompare(a.date || '');
                    });

                    const withDate = [], withoutDate = [];
                    jobs.forEach(j => {
                        const parts = (j.date || '').split(' ')[0].split('.');
                        if (parts.length === 3) withDate.push(j);
                        else withoutDate.push(j);
                    });

                    const grouped = {};
                    withDate.forEach(j => {
                        const parts = j.date.split(' ')[0].split('.');
                        const [day, month, year] = parts;
                        if (!grouped[year]) grouped[year] = {};
                        if (!grouped[year][month]) grouped[year][month] = {};
                        if (!grouped[year][month][day]) grouped[year][month][day] = [];
                        grouped[year][month][day].push(j);
                    });

                    const monthsRu = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
                    let html = `<div style="font-size:11px;opacity:.7;margin-bottom:4px;">Сохранено паллетов: ${jobs.length}</div>`;

                    const sortedYears = Object.keys(grouped).sort((a, b) => b.localeCompare(a));
                    sortedYears.forEach(year => {
                        const yearSafe = String(year).replace(/[^a-zA-Z0-9]/g, '_');
                        const yearId = `e8-inwork-year-${yearSafe}`;
                        let isYearOpen = false;
                        try { const raw = localStorage.getItem('e8_inwork_accordion_' + yearId); if (raw !== null) isYearOpen = raw === '1'; } catch (e) {}
                        const yearDisplay = isYearOpen ? 'block' : 'none';
                        const yearArrow = isYearOpen ? '▼' : '▶';
                        let yearTotal = 0;
                        for (const m in grouped[year]) for (const d in grouped[year][m]) yearTotal += grouped[year][m][d].length;

                        html += `<div style="margin-top:8px;">`;
                        html += `<div class="e8-inwork-toggle" data-target="${yearId}" style="display:flex;justify-content:space-between;font-size:12px;font-weight:700;color:#fbbf24;border-bottom:1px solid #2a2a3e;padding-bottom:4px;cursor:pointer;user-select:none;"><span><span class="e8-arrow" style="margin-right:4px;font-size:10px;">${yearArrow}</span>${year} год</span><span style="color:#888;font-size:10px;">${yearTotal} шт.</span></div>`;
                        html += `<div id="${yearId}" style="display:${yearDisplay};">`;

                        Object.keys(grouped[year]).sort((a, b) => b.localeCompare(a)).forEach(month => {
                            const monthSafe = String(month).replace(/[^a-zA-Z0-9]/g, '_');
                            const monthId = `e8-inwork-month-${yearSafe}-${monthSafe}`;
                            let isMonthOpen = false;
                            try { const raw = localStorage.getItem('e8_inwork_accordion_' + monthId); if (raw !== null) isMonthOpen = raw === '1'; } catch (e) {}
                            const monthDisplay = isMonthOpen ? 'block' : 'none';
                            const monthArrow = isMonthOpen ? '▼' : '▶';
                            const monthIdx = parseInt(month, 10) - 1;
                            const monthName = (monthIdx >= 0 && monthIdx < 12) ? monthsRu[monthIdx] : 'Без месяца';
                            let monthTotal = 0;
                            for (const d in grouped[year][month]) monthTotal += grouped[year][month][d].length;

                            html += `<div style="margin-top:4px;">`;
                            html += `<div class="e8-inwork-toggle" data-target="${monthId}" style="display:flex;justify-content:space-between;font-size:11px;font-weight:600;color:#60a5fa;border-top:1px dashed #2a2a3e;padding-top:4px;cursor:pointer;user-select:none;"><span><span class="e8-arrow" style="margin-right:4px;font-size:9px;">${monthArrow}</span>${monthName}</span><span style="color:#888;font-size:10px;">${monthTotal} шт.</span></div>`;
                            html += `<div id="${monthId}" style="display:${monthDisplay};padding-left:0px;">`;

                            Object.keys(grouped[year][month]).sort((a, b) => b.localeCompare(a)).forEach(day => {
                                const dayJobs = grouped[year][month][day];
                                const dayLabel = `${day}.${month}.${year.slice(-2)}`;
                                const daySafe = String(day).replace(/[^a-zA-Z0-9]/g, '_');
                                const dayId = `e8-inwork-day-${yearSafe}-${monthSafe}-${daySafe}`;
                                let isDayOpen = false;
                                try { const raw = localStorage.getItem('e8_inwork_accordion_' + dayId); if (raw !== null) isDayOpen = raw === '1'; } catch (e) {}
                                const dayDisplay = isDayOpen ? 'block' : 'none';
                                const dayArrow = isDayOpen ? '▼' : '▶';

                                html += `<div style="margin-top:2px;">`;
                                html += `<div class="e8-inwork-toggle" data-target="${dayId}" style="display:flex;justify-content:space-between;font-size:11px;font-weight:600;color:#a78bfa;border-top:1px solid #1e1e2e;padding-top:2px;cursor:pointer;user-select:none;"><span><span class="e8-arrow" style="margin-right:4px;font-size:8px;">${dayArrow}</span>${dayLabel}</span><span style="color:#888;font-size:10px;">${dayJobs.length} шт.</span></div>`;
                                html += `<div id="${dayId}" style="display:${dayDisplay};padding-left:4px;">`;
                                html += `<table style="width:100%;border-collapse:collapse;font-size:11px;white-space:nowrap;"><tbody>`;

                                dayJobs.forEach(j => {
                                    let statusHtml = '';
                                    if (j.status === 'Не назначен') statusHtml = `<span style="color:#fbbf24;">Не назначен</span>`;
                                    else if (j.status === 'В работе') {
                                        const timeStr = j.date ? ` <span style="color:#888;font-size:10px;">${j.date.split(' ')[1] || ''}</span>` : '';
                                        statusHtml = `<span style="color:#7CFC9B;">В работе</span>${timeStr}`;
                                    } else if (j.status === 'Завершен') {
                                        const timeStr = j.date ? ` <span style="color:#888;font-size:10px;">${j.date.split(' ')[1] || ''}</span>` : '';
                                        statusHtml = `<span style="color:#aaa;">Завершен</span>${timeStr}`;
                                    } else statusHtml = `<span style="color:#fbbf24;">${j.status || 'Не назначен'}</span>`;

                                    const workerName = `${j.firstName || ''} ${j.lastName || ''}`.trim();
                                    html += `<tr onclick="window.open('https://e8.ffa.su/admin/projects/1/jobs/${j.id}/info?back=/admin/projects/1/jobs?statusId=1', '_blank')" style="cursor:pointer;border-bottom:1px solid #2a2a3e; transition: background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='transparent'">`;
                                    html += `<td style="padding:4px 0 4px 4px; color:#60a5fa;">${escapeHtmlLocal((window.__e8CleanLabel || (x => x))(j.name))}</td>`;
                                    html += `<td style="padding:4px 0 4px 4px; text-align:left; width:120px;">${workerName}</td>`;
                                    html += `<td style="padding:4px 4px; text-align:right;">${statusHtml}</td>`;
                                    html += `</tr>`;
                                });

                                html += `</tbody></table></div></div>`;
                            });
                            html += `</div></div>`;
                        });
                        html += `</div></div>`;
                    });

                    if (withoutDate.length > 0) {
                        const undatedId = 'e8-inwork-undated';
                        let isUndatedOpen = false;
                        try { const raw = localStorage.getItem('e8_inwork_accordion_' + undatedId); if (raw !== null) isUndatedOpen = raw === '1'; } catch (e) {}
                        const undatedDisplay = isUndatedOpen ? 'block' : 'none';
                        const undatedArrow = isUndatedOpen ? '▼' : '▶';

                        html += `<div style="margin-top:8px;">`;
                        html += `<div class="e8-inwork-toggle" data-target="${undatedId}" style="display:flex;justify-content:space-between;font-size:11px;font-weight:700;color:#fbbf24;border-bottom:1px solid #2a2a3e;padding-bottom:4px;cursor:pointer;user-select:none;"><span><span class="e8-arrow" style="margin-right:4px;font-size:10px;">${undatedArrow}</span>Не назначен</span><span style="color:#888;font-size:10px;">${withoutDate.length} шт.</span></div>`;
                        html += `<div id="${undatedId}" style="display:${undatedDisplay};padding-left:8px;">`;
                        html += `<table style="width:100%;border-collapse:collapse;font-size:11px;white-space:nowrap; margin-left:0; padding-left:0;"><tbody>`;
                        withoutDate.forEach(j => {
                            const workerName = `${j.firstName || ''} ${j.lastName || ''}`.trim();
                            html += `<tr onclick="window.open('https://e8.ffa.su/admin/projects/1/jobs/${j.id}/info?back=/admin/projects/1/jobs?statusId=1', '_blank')" style="cursor:pointer;border-bottom:1px solid #2a2a3e; transition: background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='transparent'">`;
                            html += `<td style="padding:4px 0 4px 0; color:#60a5fa; max-width:120px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${cleanLabelW(j.name)}">${cleanLabelW(j.name)}</td>`;
                            html += `<td style="padding:4px 0 4px 0; text-align:left; width:90px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${workerName}">${workerName}</td>`;
                            html += `<td style="padding:4px 4px; text-align:right;"><span style="color:#fbbf24;">Не назначен</span></td>`;
                            html += `</tr>`;
                        });
                        html += `</tbody></table></div></div>`;
                    }

                    container.innerHTML = html;
                }

                panel.appendChild(container);

                panel.querySelectorAll('.e8-inwork-toggle').forEach(el => {
                    el.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const targetId = el.getAttribute('data-target');
                        const content = panel.querySelector('#' + targetId);
                        const arrow = el.querySelector('.e8-arrow');
                        if (content) {
                            const isHidden = content.style.display === 'none';
                            content.style.display = isHidden ? 'block' : 'none';
                            if (arrow) arrow.textContent = isHidden ? '▼' : '▶';
                            try { localStorage.setItem('e8_inwork_accordion_' + targetId, isHidden ? '1' : '0'); } catch (err) {}
                        }
                    });
                });

                const newTabTop = panel.querySelector('#e8-tab-top');
                const newTabDaily = panel.querySelector('#e8-tab-daily');
                const newTabInWork = panel.querySelector('#e8-tab-inwork');
                if (newTabTop) newTabTop.addEventListener('click', () => window.__e8SetStatsTab('top'));
                if (newTabDaily) newTabDaily.addEventListener('click', () => window.__e8SetStatsTab('daily'));
                if (newTabInWork) newTabInWork.addEventListener('click', () => window.__e8SetStatsTab('inwork'));
            }

            async function updateInWork(json) {
                console.log('[e8-inwork] Обновление...');

                if (!json) {
                    const token = getToken();
                    if (!token) return;
                    json = await new Promise((resolve) => {
                        GM_xmlhttpRequest({
                            method: 'GET',
                            url: `${API_BASE}/projects/1/jobs?statusId=1`,
                            headers: { 'Accept': 'application/json', 'Authorization': token },
                            onload: (res) => {
                                if (res.status === 200) { try { resolve(JSON.parse(res.responseText)); } catch (e) { resolve(null); } }
                                else resolve(null);
                            },
                            onerror: () => resolve(null),
                            timeout: 15000
                        });
                    });
                }
                if (!json) { console.log('[e8-inwork] Нет данных от API'); return; }

                const items = json.items || json.data?.items || [];
                const products = json.other?.dictionary?.products || json.data?.other?.dictionary?.products || [];
                const productMap = new Map(products.map(p => [p.id, p.label]));

                const currentIds = new Set();
                const currentNames = new Map();
                for (const order of items) {
                    for (const group of (order.children || [])) {
                        const label = productMap.get(group.productId) || 'Без названия';
                        for (const wp of (group.children || [])) {
                            for (const pallet of (wp.children || [])) {
                                if (pallet.id) { currentIds.add(pallet.id); currentNames.set(pallet.id, label); }
                            }
                        }
                    }
                }
                console.log('[e8-inwork] В statusId=1 найдено:', currentIds.size, 'паллетов');

                const oldCache = memoryCache.slice();
                const cacheMap = new Map(oldCache.map(j => [j.id, j]));
                const newJobsMap = new Map();

                for (const [id, name] of currentNames) {
                    const old = cacheMap.get(id);
                    if (old) {
                        newJobsMap.set(id, { ...old, name });
                    } else {
                        newJobsMap.set(id, {
                            id, name,
                            firstName: '', lastName: '',
                            status: 'Не назначен', date: '',
                            startDateTime: null, cancelDateTime: null,
                            execCount: 1
                        });
                    }
                }

                for (const old of oldCache) {
                    if (!currentIds.has(old.id)) {
                        if (old.status === 'Завершен') {
                            newJobsMap.set(old.id, old);
                        } else {
                            newJobsMap.set(old.id, { ...old, status: 'Загрузка...' });
                        }
                    }
                }

                const newJobs = [...newJobsMap.values()];
                if (newJobs.length === 0) { console.log('[e8-inwork] Нет данных'); return; }

                for (let i = 0; i < newJobs.length; i += MAX_PARALLEL) {
                    const chunk = newJobs.slice(i, i + MAX_PARALLEL);
                    await Promise.all(chunk.map(async (job) => {
                        if (job.status === 'Завершен') return;
                        const d = await fetchJobInfo(job.id);
                        if (!d) { job.status = 'Не назначен'; return; }

                        let firstName = '', lastName = '';
                        let execCount = 1;
                        if (d.executors && Array.isArray(d.executors) && d.executors.length > 0) {
                            const exec = d.executors[0];
                            firstName = (exec.firstName || '').trim();
                            lastName  = (exec.lastName  || '').trim();
                            if (d.executors.length > 1) execCount = d.executors.length;
                        }
                        job.firstName = firstName;
                        job.lastName  = lastName;
                        job.execCount = execCount;

                        let statusLabel = null;
                        if (d.status) {
                            if (typeof d.status === 'string') statusLabel = d.status;
                            else if (d.status.label) statusLabel = d.status.label;
                        }

                        if (d.cancelDateTime) {
                            job.status = 'Завершен';
                            job.date = toMsk(d.cancelDateTime);
                            job.cancelDateTime = d.cancelDateTime;
                            job.startDateTime = d.startDateTime || job.startDateTime || null;
                        } else if (d.startDateTime || statusLabel === 'В работе') {
                            job.status = 'В работе';
                            job.date = d.startDateTime ? toMsk(d.startDateTime) : '';
                            job.startDateTime = d.startDateTime || job.startDateTime || null;
                        } else {
                            job.status = 'Не назначен';
                            job.date = '';
                        }
                    }));
                }

                memoryCache = dedupeById(newJobs);
                scheduleWrite();
                console.log('[e8-inwork] Обновлено:', memoryCache.length, 'паллетов');
                renderInWorkTable();
            }

            function patchFetch(target) {
                if (!target || !target.fetch || target.__e8patched) return;
                target.__e8patched = true;
                const orig = target.fetch;
                target.fetch = async function (...args) {
                    const url = typeof args[0] === 'string' ? args[0] : args[0]?.url || '';
                    const res = await orig.apply(this, args);
                    // if (url.includes('/jobs') && url.includes('statusId=2')) res.clone().json().then(processJobs).catch(() => {});
                    return res;
                };
            }

            function patchXhr(target) {
                if (!target || !target.XMLHttpRequest) return;
                const XHR = target.XMLHttpRequest;
                if (XHR.prototype.__e8InworkXhrPatched) return;
                XHR.prototype.__e8InworkXhrPatched = true;
                const origOpen = XHR.prototype.open, origSend = XHR.prototype.send;
                XHR.prototype.open = function (method, url, ...rest) { this.__e8url = url; return origOpen.call(this, method, url, ...rest); };
                XHR.prototype.send = function (...args) {
                    this.addEventListener('load', function () {
                        try {
                            const url = this.__e8url || '';
                            if (url.includes('/jobs') && url.includes('statusId=1')) {
                                updateInWork(JSON.parse(this.responseText));
                            }
                        } catch (e) {}
                    });
                    return origSend.apply(this, args);
                };
            }

            patchFetch(window);
            patchFetch(typeof unsafeWindow !== 'undefined' ? unsafeWindow : null);
            patchXhr(window);
            patchXhr(typeof unsafeWindow !== 'undefined' ? unsafeWindow : null);

            document.addEventListener('click', (e) => {
                if (e.target && e.target.id === 'e8-tab-inwork') {
                    setTimeout(() => {
                        renderInWorkTable();
                        if (window.__e8Recalculate) window.__e8Recalculate();
                    }, 100);
                }
            });

            window.__e8ForceInWorkUpdate = () => updateInWork();

            (async () => {
                const remote = await loadFromGitHub();

                let local = [];
                try {
                    const raw = localStorage.getItem('e8_inwork_jobs');
                    if (raw) {
                        const parsed = JSON.parse(raw);
                        if (Array.isArray(parsed)) {
                            local = parsed.map(j => {
                                const [lastName = '', firstName = ''] = String(j.worker || '').trim().split(/\s+/);
                                return normalizeJob({
                                    id: j.id,
                                    name: j.name || '',
                                    firstName: j.firstName || firstName,
                                    lastName: j.lastName || lastName,
                                    status: j.status || 'Не назначен',
                                    date: j.date || '',
                                    startDateTime: j.startDateTime || null,
                                    cancelDateTime: j.cancelDateTime || null,
                                    execCount: Number(localStorage.getItem('e8_exec_count_' + j.id)) || 1
                                });
                            }).filter(Boolean);
                        }
                    }
                } catch (e) {
                    console.error('[e8-inwork] Ошибка чтения localStorage:', e);
                }

                const combined = [...remote, ...local];

                if (combined.length > 0) {
                    memoryCache = dedupeById(combined);
                    console.log(`[e8-inwork] Загружено: GitHub (${remote.length}), Local (${local.length}). Итого уникальных: ${memoryCache.length}`);
                    renderInWorkTable();

                    if (local.length > 0 && memoryCache.length !== remote.length) {
                        scheduleWrite();
                    }
                } else {
                    console.log('[e8-inwork] Нет данных ни на GitHub, ни в localStorage.');
                }
            })();

            // ==================================================================
            // МОДУЛЬ: ПРИНУДИТЕЛЬНОЕ ОБНОВЛЕНИЕ INWORK ПРИ ПЕРЕХОДЕ
            // ==================================================================
            (function() {
                'use strict';

                function isInWorkPage() {
                    const url = window.location.href;
                    return url.includes('statusId=1') || url.includes('statusId=2');
                }

                function forceUpdate() {
                    if (window.__e8ForceInWorkUpdate) {
                        console.log('%c[e8-inwork] 🔄 Принудительное обновление по переходу', 'color: #fbbf24; font-weight: bold;');
                        window.__e8ForceInWorkUpdate();
                    }
                }

                let lastUrl = location.href;
                setInterval(() => {
                    if (location.href !== lastUrl) {
                        lastUrl = location.href;
                        if (isInWorkPage()) {
                            setTimeout(forceUpdate, 500);
                        }
                    }
                }, 500);

                document.addEventListener('click', (e) => {
                    const target = e.target.closest('button, a, [role="tab"]');
                    if (!target) return;

                    const text = (target.textContent || '').trim();
                    if (text === 'В работе' || text === 'Текущий') {
                        setTimeout(forceUpdate, 500);
                    }
                });

                if (isInWorkPage()) {
                    setTimeout(forceUpdate, 1000);
                }

                console.log('%c[e8-inwork] 👁️ Модуль отслеживания переходов запущен', 'color: #8B00FF;');
            })();

        })();
    }

        // ==================================================================
        // МОДУЛЬ: Замена автарок
        // ==================================================================
        (function() {
            'use strict';

            const OLD_PREFIX = 'https://backoffice-e8.ffa.su/api/v1/admin/avatar/initials/svg';

            const TARGET_USERS = [
                'Александр Маматов'
                // 'Иван Иванов',
            ];

            const DEFAULT_AVATAR = 'https://raw.githubusercontent.com/chucpe/calc/refs/heads/master/src/avatar/67.jpg';
            const CUSTOM_AVATARS = {
                // 'Иван Иванов': 'https://example.com/ivan.jpg'
            };

            function replaceAvatars() {
                document.querySelectorAll('img').forEach(img => {
                    const src = img.getAttribute('src') || '';
                    if (!src.startsWith(OLD_PREFIX)) return;
                    if (img.dataset.e8AvatarReplaced === '1') return;

                    let seed = '';
                    try {
                        const urlParams = new URLSearchParams(src.split('?')[1]);
                        seed = urlParams.get('seed') || '';
                    } catch (e) {
                        const match = src.match(/[?&]seed=([^&]+)/);
                        if (match) seed = decodeURIComponent(match[1]);
                    }

                    if (!seed) return;

                    if (TARGET_USERS.includes(seed)) {
                        img.src = CUSTOM_AVATARS[seed] || DEFAULT_AVATAR;
                        img.dataset.e8AvatarReplaced = '1';
                    }
                });
            }

            function start() {
                replaceAvatars();
                const observer = new MutationObserver(() => replaceAvatars());
                observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
                setInterval(replaceAvatars, 1000);
            }

            if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
            else start();
        })();

        // ==================================================================
        // МОДУЛЬ: Скрываем заявки
        // ==================================================================
        (function() {
            'use strict';

            function processTree() {
                if (window.__e8Settings && window.__e8Settings.hideOrders === false) return;

                const buttons = document.querySelectorAll('button[data-slot="link"]');

                buttons.forEach(btn => {
                    const text = (btn.textContent || '').trim();
                    if (!text.startsWith('Заявка №')) return;

                    btn.style.setProperty('display', 'none', 'important');

                    if (btn.getAttribute('aria-expanded') === 'false') {
                        btn.click();
                    }
                });
            }

            function start() {
                const url = window.location.href;
                if (!url.includes('statusId=1')) return;

                processTree();

                const observer = new MutationObserver(() => {
                    processTree();
                });
                observer.observe(document.body || document.documentElement, { childList: true, subtree: true });

                setInterval(processTree, 1000);
            }

            if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
            else start();
        })();

        // ==================================================================
        // МОДУЛЬ: ПЕРЕИМЕНОВАНИЕ ПАЛЛЕТ
        // ==================================================================
        (function() {
            'use strict';

            function renamePallets() {
                const elements = document.querySelectorAll('.text-sm.font-semibold.break-all');

                elements.forEach(el => {
                    if (el.textContent.includes('Заявка №')) return;

                    Array.from(el.childNodes).forEach(node => {
                        if (node.nodeType === Node.TEXT_NODE) {
                            let text = node.nodeValue;

                            if (text.includes('Б00')) {
                                let newText = text;

                                newText = newText.replace(/Б00(?=\d)/g, 'А');

                                newText = newText.replace(/Б00(?=[А-ЯЁA-Z])/gi, '');

                                if (newText !== text) {
                                    node.nodeValue = newText;
                                }
                            }
                        }
                    });
                });
            }

            function start() {
                renamePallets();
                const observer = new MutationObserver(() => {
                    renamePallets();
                });
                observer.observe(document.body || document.documentElement, { childList: true, subtree: true, characterData: true });

                setInterval(renamePallets, 1000);
            }

            if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
            else start();
        })();

        (function() {
            'use strict';

            if (!window.location.href.includes('statusId=1')) return;

            let sortByPrice = Number(localStorage.getItem('e8_sort_price')) || 0;
            let sortByName = Number(localStorage.getItem('e8_sort_name')) || 0;

            function createSortUI() {
                if (document.getElementById('e8-sort-panel')) return;

                if (window.__e8Settings && window.__e8Settings.hideOrders === false) return;

                const orderButtons = Array.from(document.querySelectorAll('button')).filter(b =>
                    b.textContent.includes('Заявка №')
                );

                if (orderButtons.length === 0) return;

                const firstOrderBtn = orderButtons[0];
                const orderLi = firstOrderBtn.closest('li');

                if (!orderLi || !orderLi.parentElement) return;

                const panel = document.createElement('div');
                panel.id = 'e8-sort-panel';
                panel.className = 'flex items-center w-full py-2 mb-2 text-sm text-muted';

                const marginLeft = window.innerWidth < 768 ? '190px' : '395px';

                const arrowPrice = sortByPrice === 1 ? '↑' : (sortByPrice === -1 ? '↓' : '↕');
                const arrowName = sortByName === 1 ? '↑' : (sortByName === -1 ? '↓' : '↕');

                panel.innerHTML = `
                    <div style="margin-left: ${marginLeft}; display: flex; gap: 6px;">
                        <button id="e8-sort-name" class="flex items-center justify-center gap-1 px-2.5 h-6 rounded-md whitespace-nowrap transition-all duration-200 text-xs font-medium border shadow-sm ${sortByName !== 0 ? 'bg-primary text-white border-primary shadow-md' : 'bg-elevated text-muted border-default hover:bg-elevated/80'}">
                            Название <span id="e8-sort-arrow-name" class="text-xs ${sortByName !== 0 ? 'text-white' : 'text-muted'}">${arrowName}</span>
                        </button>
                        <button id="e8-sort-price" class="flex items-center justify-center gap-1 px-2.5 h-6 rounded-md whitespace-nowrap transition-all duration-200 text-xs font-medium border shadow-sm ${sortByPrice !== 0 ? 'bg-primary text-white border-primary shadow-md' : 'bg-elevated text-muted border-default hover:bg-elevated/80'}">
                            Цена <span id="e8-sort-arrow-price" class="text-xs ${sortByPrice !== 0 ? 'text-white' : 'text-muted'}">${arrowPrice}</span>
                        </button>
                    </div>
                `;

                orderLi.parentElement.insertBefore(panel, orderLi);

                attachEvents();
                setTimeout(applySort, 100);
            }

            function applySort() {
                if (window.__e8Settings && window.__e8Settings.hideOrders === false) return;

                const allNodes = Array.from(document.querySelectorAll('.text-sm.font-semibold.break-all'));

                const pallets = allNodes.filter(el => {
                    const text = el.textContent.trim();
                    return text.length > 0 && !text.includes('Заявка №');
                });

                if (pallets.length < 2) return;

                let parent = pallets[0].parentElement;
                while (parent && !parent.contains(pallets[pallets.length - 1])) {
                    parent = parent.parentElement;
                }

                if (!parent) return;

                pallets.sort((a, b) => {
                    const fullTextA = a.textContent.replace(/\([\d.]+\)/, '').trim();
                    const fullTextB = b.textContent.replace(/\([\d.]+\)/, '').trim();

                    const matchA = a.textContent.match(/\(([\d.]+)\)/);
                    const matchB = b.textContent.match(/\(([\d.]+)\)/);
                    const priceA = matchA ? parseFloat(matchA[1]) : null;
                    const priceB = matchB ? parseFloat(matchB[1]) : null;

                    if (sortByName !== 0) {
                        const prefixA = fullTextA.charAt(0);
                        const prefixB = fullTextB.charAt(0);
                        const cmp = prefixA.localeCompare(prefixB, 'ru');
                        if (cmp !== 0) {
                            return sortByName === 1 ? cmp : -cmp;
                        }
                    }

                    if (sortByPrice !== 0) {
                        if (priceA === null && priceB === null) return 0;
                        if (priceA === null) return 1;
                        if (priceB === null) return -1;

                        if (priceA !== priceB) {
                            return sortByPrice === 1 ? priceA - priceB : priceB - priceA;
                        }
                    }

                    return 0;
                });

                const containers = pallets.map(el => {
                    return el.closest('li') || el.closest('div.flex-1.overflow-hidden') || el.parentElement;
                });

                const uniqueContainers = [...new Set(containers)];

                if (uniqueContainers.length > 1 && uniqueContainers[0].parentElement) {
                    const parentOfContainers = uniqueContainers[0].parentElement;
                    uniqueContainers.forEach(container => {
                        parentOfContainers.appendChild(container);
                    });
                }
            }

            function attachEvents() {
                const btnPrice = document.getElementById('e8-sort-price');
                const btnName = document.getElementById('e8-sort-name');

                if (!btnPrice || !btnName) return;

                btnPrice.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (sortByPrice === 0) {
                        sortByPrice = -1;
                    } else if (sortByPrice === -1) {
                        sortByPrice = 1;
                    } else {
                        sortByPrice = 0;
                    }
                    updateUI();
                });

                btnName.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (sortByName === 0) {
                        sortByName = -1;
                    } else if (sortByName === -1) {
                        sortByName = 1;
                    } else {
                        sortByName = 0;
                    }
                    updateUI();
                });
            }

            function updateUI() {
                localStorage.setItem('e8_sort_price', sortByPrice);
                localStorage.setItem('e8_sort_name', sortByName);

                const btnPrice = document.getElementById('e8-sort-price');
                const btnName = document.getElementById('e8-sort-name');
                const arrowPrice = document.getElementById('e8-sort-arrow-price');
                const arrowName = document.getElementById('e8-sort-arrow-name');

                const arrP = sortByPrice === -1 ? '↓' : (sortByPrice === 1 ? '↑' : '↕');
                const arrN = sortByName === -1 ? '↓' : (sortByName === 1 ? '↑' : '↕');

                if (sortByName !== 0) {
                    btnName.className = 'flex items-center justify-center gap-1 px-2.5 h-6 rounded-md whitespace-nowrap transition-all duration-200 text-xs font-medium border shadow-sm bg-primary text-white border-primary shadow-md';
                    arrowName.className = 'text-xs text-white';
                } else {
                    btnName.className = 'flex items-center justify-center gap-1 px-2.5 h-6 rounded-md whitespace-nowrap transition-all duration-200 text-xs font-medium border shadow-sm bg-elevated text-muted border-default hover:bg-elevated/80';
                    arrowName.className = 'text-xs text-muted';
                }

                if (sortByPrice !== 0) {
                    btnPrice.className = 'flex items-center justify-center gap-1 px-2.5 h-6 rounded-md whitespace-nowrap transition-all duration-200 text-xs font-medium border shadow-sm bg-primary text-white border-primary shadow-md';
                    arrowPrice.className = 'text-xs text-white';
                } else {
                    btnPrice.className = 'flex items-center justify-center gap-1 px-2.5 h-6 rounded-md whitespace-nowrap transition-all duration-200 text-xs font-medium border shadow-sm bg-elevated text-muted border-default hover:bg-elevated/80';
                    arrowPrice.className = 'text-xs text-muted';
                }

                arrowPrice.textContent = arrP;
                arrowName.textContent = arrN;

                applySort();
            }

            function start() {
                let attempts = 0;
                const interval = setInterval(() => {
                    createSortUI();
                    attempts++;
                    if (document.getElementById('e8-sort-panel') || attempts > 20) {
                        clearInterval(interval);
                    }
                }, 500);

                const observer = new MutationObserver(() => {
                    if (!document.getElementById('e8-sort-panel')) {
                        createSortUI();
                    }
                });

                if (document.body) {
                    observer.observe(document.body, { childList: true, subtree: true });
                }
            }

            if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
            else start();
        })();

    main();

})();
