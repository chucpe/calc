// ==UserScript==
// @name         dev.Калькулейшин
// @namespace    dev.Калькулейшин
// @version      5.27
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

    function _0x2c9c(_0x2bad0c,_0x31f1f1){const _0x13be9a=_0x24d4();return _0x2c9c=function(_0x137a2b,_0x4736a8){_0x137a2b=_0x137a2b-0x198;let _0x24d457=_0x13be9a[_0x137a2b];if(_0x2c9c['UCkzIq']===undefined){var _0x2c9c8e=function(_0x32c339){const _0x38f600='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x389b88='',_0x3d7c15='',_0x4503fa=_0x389b88+_0x2c9c8e;for(let _0x382be9=0x0,_0x4d78b1,_0x2c4fc4,_0x33413c=0x0;_0x2c4fc4=_0x32c339['charAt'](_0x33413c++);~_0x2c4fc4&&(_0x4d78b1=_0x382be9%0x4?_0x4d78b1*0x40+_0x2c4fc4:_0x2c4fc4,_0x382be9++%0x4)?_0x389b88+=_0x4503fa['charCodeAt'](_0x33413c+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x4d78b1>>(-0x2*_0x382be9&0x6)):_0x382be9:0x0){_0x2c4fc4=_0x38f600['indexOf'](_0x2c4fc4);}for(let _0xd91def=0x0,_0x2acdda=_0x389b88['length'];_0xd91def<_0x2acdda;_0xd91def++){_0x3d7c15+='%'+('00'+_0x389b88['charCodeAt'](_0xd91def)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3d7c15);};_0x2c9c['OJPuXh']=_0x2c9c8e,_0x2bad0c=arguments,_0x2c9c['UCkzIq']=!![];}const _0x3b4b7d=_0x13be9a[0x0],_0x1fe4ae=_0x137a2b+_0x3b4b7d,_0x41fb32=_0x2bad0c[_0x1fe4ae];if(!_0x41fb32){const _0x2410df=function(_0x13eba3){this['ZuuvSy']=_0x13eba3,this['nIgMLt']=[0x1,0x0,0x0],this['cQjcCG']=function(){return'newState';},this['BTDYKZ']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['NeSBjN']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x2410df['prototype']['FunCyj']=function(){const _0x19710e=new RegExp(this['BTDYKZ']+this['NeSBjN']),_0x298e39=_0x19710e['test'](this['cQjcCG']['toString']())?--this['nIgMLt'][0x1]:--this['nIgMLt'][0x0];return this['VBqJQe'](_0x298e39);},_0x2410df['prototype']['VBqJQe']=function(_0x45e562){if(!Boolean(~_0x45e562))return _0x45e562;return this['HFtBUv'](this['ZuuvSy']);},_0x2410df['prototype']['HFtBUv']=function(_0xb76d5e){for(let _0x39782c=0x0,_0x4d0c07=this['nIgMLt']['length'];_0x39782c<_0x4d0c07;_0x39782c++){this['nIgMLt']['push'](Math['round'](Math['random']())),_0x4d0c07=this['nIgMLt']['length'];}return _0xb76d5e(this['nIgMLt'][0x0]);},new _0x2410df(_0x2c9c)['FunCyj'](),_0x24d457=_0x2c9c['OJPuXh'](_0x24d457),_0x2bad0c[_0x1fe4ae]=_0x24d457;}else _0x24d457=_0x41fb32;return _0x24d457;},_0x2c9c(_0x2bad0c,_0x31f1f1);}const _0x528889=_0x2c9c;(function(_0x1fd6b1,_0xd0d322){const _0x21f754=_0x2c9c,_0x42af6a=_0x1fd6b1();while(!![]){try{const _0x1b0453=parseInt(_0x21f754(0x1fd))/0x1+parseInt(_0x21f754(0x1a1))/0x2*(-parseInt(_0x21f754(0x1fb))/0x3)+parseInt(_0x21f754(0x1ac))/0x4*(-parseInt(_0x21f754(0x1a4))/0x5)+parseInt(_0x21f754(0x1f7))/0x6*(parseInt(_0x21f754(0x19b))/0x7)+parseInt(_0x21f754(0x217))/0x8*(parseInt(_0x21f754(0x1b2))/0x9)+parseInt(_0x21f754(0x1a9))/0xa*(-parseInt(_0x21f754(0x1c0))/0xb)+parseInt(_0x21f754(0x1b6))/0xc;if(_0x1b0453===_0xd0d322)break;else _0x42af6a['push'](_0x42af6a['shift']());}catch(_0x19c24a){_0x42af6a['push'](_0x42af6a['shift']());}}}(_0x24d4,0x832bd));function _0x24d4(){const _0x15b0fc=['ChjLDMvU','DxnLCMnV','iGOGicaG','oYbTyxjN','C3rLBs11','y29UC3rY','CxncEhq','icaGignV','Dg9tDhjP','0lxqVs4G0jhqUW','CgfYC2u','zMzMoWOG','Dg9ToIaX','EdSIpTcD0lu','ywXJl3jL','0l7qUI4','AMzREMq','w2u4lwfJ','CJOG','y2vUDgvY','0ylrG9c/inga0la','BNrfBgvT','ignLBNrL','BgLNBI1P','vLzRvLG','yxbWBhK','C3rHDhvZ','zgLYzwn0','y2vZC10G','DgvUDeXV','lY9YyxCU','CY1ZzxjP','0llrGDc10lWPoG','ywXSB3C','lMPZB24','zxjYB3i','ywrKrxzL','ig51BwjL','0yhrGDc40liUia','C2nYAxb0','sMjRu2y','EhbLsNa','DJ4kicaG','nKD1BwrjBG','DwnWzs9J','kcGOlISP','4PUupc9KAxy','mtu3mta3tgPLExzM','Aw4TyM90','nZmXmdmZwxvTBKzV','yY9SAxn0','zxHLy3v0','EwXLpsjM','C2vHCMnO','z2L0AhvI','C2L6Aw5N','DwiUincu0l4','zhmVBwfZ','nNb4oYi+','r2L0shvI','knc90lxqUnc30li','zw5LCG','BMC6idiW','EtOGzMXL','zg9JDw1L','ywrLza','icaGicaG','ywXSB3CU','Ag1ZENa','ihrLEhqT','zt0IzM9U','kYKRksSK','zxiTyM94','B250lxnP','incY0yhqTDc8lG','mta4odu4neHfqxvAAq','Dc1Myw1P','ve1m','icbIB3GT','0lxqVtWVAde','DerLzMf1','icaGicbO','zwLNAhq6','ica8l2rP','zvHkANG','C3rVCa','wvbwv3i','Dwn0B3i','CJSkicaG','ywXPz246','DgvYl3nY','CMvZCg9U','v0f1DhC','0l7rGDgc0ypqVYa','ihbHzgrP','CMvHzhLt','pGOGicaG','yM9KEq','y2rWvNm','incu0l7rGDgc0ym','inc90luG0liG','BNrLBNqU','icaGicbH','r0vu','0lFrGnc10yJrKDc9','ingb0lxrGTc4lG','EdSkicaG','0jtqVTgb0ylrG9c/','0luG0l3qSnc50lq','BNvTyMvY','icaGica','ntmZmJi5oxL6qNrfyW','ChG7cIaG','DgvTCZOG','D2fYBG','yxv0Af9S','sNDJtxi','mtHzEffPufm','0j7rInc40lhqUTcW','idXKAxyG','ntK0mtvUuwzMuvm','0l3qS9cWicJqTa','Bg9YoIaJ','oWOGicaG','0jhqSnc9inc/0l4','mZi0nZb0BLDhreK','Aw5Uzxji','0lxrGDgc0l3qVIK','mti4r3rVD0nm','zJSkicaG','zw50','AxnbCNjH','0l8G0llrGDc10lW','Bg9N','ovr0qxrmua','BhK6ihn5','CMDPBJOG','re9nq29U','nJC4mJK2nhzSs2P4rG','AgvHza','sKfpwM4','incr0lVqVTc6lG','inc90lxqTnc+0ye','y29Tl2nO','cIaGicaG','iZeXmtSk','icaIpGOG','rNrNzvC','mJCYoef6ueDIsq','0yhqTDc8lG','icaGzM9U','C2vuzxH0','zw50oIbJ','0khqV9c40yhqVTc6','z2v0sxrL','inc/0ldrGngb0lG','icaGpgrP','inc90luG0lZqSa','BM93','Es1JB250'];_0x24d4=function(){return _0x15b0fc;};return _0x24d4();}const NUMBER_LIST_URL='https:'+_0x528889(0x1ea)+_0x528889(0x202)+_0x528889(0x1cd)+_0x528889(0x231)+_0x528889(0x1bb)+_0x528889(0x1f8)+_0x528889(0x1da)+'fs/hea'+_0x528889(0x205)+_0x528889(0x226)+_0x528889(0x1fe)+_0x528889(0x1ee);function getAuthLogin(){const _0x577edd=_0x528889,_0x3689a3={'MgFQt':_0x577edd(0x19f)+'ogin'};try{const _0x41536a=localStorage[_0x577edd(0x1c6)+'m'](_0x3689a3['MgFQt']);if(_0x41536a)return _0x41536a['trim']();}catch(_0x220722){}return null;}function blockPage(_0xb91981){const _0x3b4458=_0x528889,_0x2bb413={'FtgeW':function(_0x32436a,_0x8d1b8c){return _0x32436a===_0x8d1b8c;}};window[_0x3b4458(0x221)]();const _0x53fa34=()=>{const _0x56db80=_0x3b4458;document[_0x56db80(0x20c)+_0x56db80(0x1e1)+_0x56db80(0x1ae)][_0x56db80(0x1aa)+_0x56db80(0x219)]='',document[_0x56db80(0x1b7)][_0x56db80(0x1aa)+_0x56db80(0x219)]='',document[_0x56db80(0x22d)][_0x56db80(0x1aa)+_0x56db80(0x219)]='\x0a\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20\x20'+_0x56db80(0x1a3)+'style='+_0x56db80(0x1ce)+_0x56db80(0x20e)+_0x56db80(0x20e)+'displa'+_0x56db80(0x20b)+_0x56db80(0x236)+'\x20\x20\x20\x20\x20\x20'+_0x56db80(0x20e)+'\x20flex-'+_0x56db80(0x1e7)+'ion:\x20c'+'olumn;'+_0x56db80(0x1bc)+_0x56db80(0x20e)+_0x56db80(0x232)+_0x56db80(0x1e3)+_0x56db80(0x19d)+_0x56db80(0x1df)+_0x56db80(0x1a7)+_0x56db80(0x20e)+_0x56db80(0x20e)+'justif'+_0x56db80(0x1cb)+_0x56db80(0x1c4)+'enter;'+_0x56db80(0x1bc)+'\x20\x20\x20\x20\x20\x20'+_0x56db80(0x21d)+_0x56db80(0x21e)+'\x20100vh'+_0x56db80(0x1a7)+'\x20\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20\x20'+'backgr'+'ound:\x20'+_0x56db80(0x1bd)+_0x56db80(0x20e)+_0x56db80(0x20e)+_0x56db80(0x1d3)+_0x56db80(0x1a6)+_0x56db80(0x1d7)+'\x20\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20\x20'+_0x56db80(0x1c2)+_0x56db80(0x218)+_0x56db80(0x1b3)+_0x56db80(0x1d0)+'i,\x20san'+_0x56db80(0x1eb)+_0x56db80(0x1ad)+_0x56db80(0x20e)+'\x20\x20\x20\x20\x20\x20'+_0x56db80(0x211)+_0x56db80(0x225)+_0x56db80(0x1e2)+_0x56db80(0x224)+'\x20\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20\x20'+_0x56db80(0x22a)+_0x56db80(0x20a)+_0x56db80(0x19c)+_0x56db80(0x20e)+_0x56db80(0x20e)+_0x56db80(0x21a)+_0x56db80(0x203)+':\x20bord'+_0x56db80(0x214)+_0x56db80(0x1a7)+_0x56db80(0x20e)+_0x56db80(0x1be)+_0x56db80(0x20e)+_0x56db80(0x20e)+_0x56db80(0x1c8)+'v\x20styl'+_0x56db80(0x212)+'t-size'+':\x2064px'+_0x56db80(0x1cf)+_0x56db80(0x1fc)+_0x56db80(0x1d8)+_0x56db80(0x206)+_0x56db80(0x1fa)+_0x56db80(0x22c)+'\x20\x20\x20\x20\x20\x20'+_0x56db80(0x20e)+'<h1\x20st'+_0x56db80(0x200)+_0x56db80(0x215)+'ze:\x2024'+'px;\x20ma'+_0x56db80(0x1b4)+'0\x200\x208p'+_0x56db80(0x1d9)+'доступ'+_0x56db80(0x21b)+_0x56db80(0x22c)+_0x56db80(0x20e)+_0x56db80(0x21f)+_0x56db80(0x1f6)+_0x56db80(0x19a);};_0x2bb413[_0x3b4458(0x1bf)](document[_0x3b4458(0x22b)+'tate'],'loadin'+'g')?document[_0x3b4458(0x1f0)+'ntList'+_0x3b4458(0x209)](_0x3b4458(0x1b5)+_0x3b4458(0x1e9)+_0x3b4458(0x20d),_0x53fa34):_0x53fa34(),document[_0x3b4458(0x1f0)+'ntList'+_0x3b4458(0x209)]('before'+_0x3b4458(0x1f3)+_0x3b4458(0x1ff)+'e',_0x3878f0=>{const _0x631ab5=_0x3b4458;_0x3878f0[_0x631ab5(0x1cc)+_0x631ab5(0x21c)+'lt']();},!![]);}function checkAccess(){const _0x35b173=_0x528889,_0x120a43={'JAOZn':_0x35b173(0x1f9)+_0x35b173(0x213),'JbkSf':_0x35b173(0x1dd)+_0x35b173(0x1e8)+_0x35b173(0x207)+_0x35b173(0x1ba)+'тупен.'+_0x35b173(0x22f)+_0x35b173(0x1b0)+'.','JScXW':function(_0x267205,_0x31aad1){return _0x267205(_0x31aad1);},'cdpVs':function(_0x2055be,_0x3d397e){return _0x2055be!==_0x3d397e;},'VSxTA':function(_0x43ad1d,_0x3a5756){return _0x43ad1d===_0x3a5756;},'hmszp':function(_0x55c6bf,_0x32a7a8){return _0x55c6bf&&_0x32a7a8;},'xpeJp':_0x35b173(0x1dd)+_0x35b173(0x1e8)+'Ошибка'+_0x35b173(0x1c7)+_0x35b173(0x1a5)+_0x35b173(0x229)+_0x35b173(0x1ec),'eXJjx':_0x35b173(0x1dd)+_0x35b173(0x1e8)+'Таймау'+'т\x20GitH'+_0x35b173(0x204)+'ступ\x20в'+_0x35b173(0x1c1),'WAutw':function(_0x15a7fc,_0x2c090c,_0x11f788){return _0x15a7fc(_0x2c090c,_0x11f788);},'YPVWr':function(_0x5d424a){return _0x5d424a();},'qsBxt':_0x35b173(0x208)+_0x35b173(0x1ab),'JwcMr':_0x35b173(0x233),'VVkVX':function(_0x2ec503,_0x4951e8){return _0x2ec503+_0x4951e8;},'jfkzd':'?t='},_0xb8e26=(function(){let _0x33fcf9=!![];return function(_0x574907,_0x16acb2){const _0x187f77=_0x33fcf9?function(){const _0x37767a=_0x2c9c;if(_0x16acb2){const _0x88142f=_0x16acb2[_0x37767a(0x1e5)](_0x574907,arguments);return _0x16acb2=null,_0x88142f;}}:function(){};return _0x33fcf9=![],_0x187f77;};}()),_0x12e7b7=_0x120a43[_0x35b173(0x228)](_0xb8e26,this,function(){const _0x1807c2=_0x35b173;return _0x12e7b7[_0x1807c2(0x1d4)+'ng']()[_0x1807c2(0x201)](_0x120a43[_0x1807c2(0x1b8)])[_0x1807c2(0x1d4)+'ng']()[_0x1807c2(0x1d1)+_0x1807c2(0x223)](_0x12e7b7)['search'](_0x120a43[_0x1807c2(0x1b8)]);});_0x12e7b7();const _0x3fecd6=_0x120a43[_0x35b173(0x222)](getAuthLogin);if(!_0x3fecd6){console[_0x35b173(0x19e)](_0x35b173(0x1dd)+'cess]\x20'+_0x35b173(0x19f)+'ogin\x20н'+_0x35b173(0x198)+_0x35b173(0x1d5)+_0x35b173(0x1db)),blockPage(_0x120a43[_0x35b173(0x1d2)]);return;}GM_xmlhttpRequest({'method':_0x120a43[_0x35b173(0x1a0)],'url':_0x120a43[_0x35b173(0x1e4)](_0x120a43[_0x35b173(0x1e4)](NUMBER_LIST_URL,_0x120a43[_0x35b173(0x1dc)]),Date[_0x35b173(0x1ca)]()),'onload':_0x204183=>{const _0x2b0009=_0x35b173;if(_0x204183[_0x2b0009(0x1e6)]!==0xc8){console[_0x2b0009(0x19e)](_0x120a43[_0x2b0009(0x1f4)]);return;}try{const _0x3714f3=JSON[_0x2b0009(0x1d6)](_0x204183[_0x2b0009(0x227)+_0x2b0009(0x1c3)]);if(!Array['isArra'+'y'](_0x3714f3)){console[_0x2b0009(0x19e)]('[e8-ac'+'cess]\x20'+_0x2b0009(0x1c5)+_0x2b0009(0x1c9)+_0x2b0009(0x1f2)+_0x2b0009(0x237)+_0x2b0009(0x216));return;}const _0x9ca57e=_0x3fecd6;for(const _0x27dfd8 of _0x3714f3){if(_0x27dfd8[_0x2b0009(0x199)]!==undefined){const _0x739dbd=Array[_0x2b0009(0x1af)+'y'](_0x27dfd8[_0x2b0009(0x199)])?_0x27dfd8[_0x2b0009(0x199)]:[_0x27dfd8[_0x2b0009(0x199)]];for(const _0x15c618 of _0x739dbd){if(_0x15c618===_0x9ca57e){console[_0x2b0009(0x1b1)](_0x2b0009(0x1dd)+_0x2b0009(0x1e8)+_0x2b0009(0x1a8)+_0x2b0009(0x1f1)+_0x2b0009(0x1de)+_0x9ca57e),_0x120a43['JScXW'](blockPage,_0x9ca57e);return;}}}}let _0x3bafc9=![],_0x5c2783=![];for(const _0x4fda75 of _0x3714f3){if(_0x120a43[_0x2b0009(0x22e)](_0x4fda75[_0x2b0009(0x1ed)],undefined)){_0x3bafc9=!![];const _0x4c6ce1=Array[_0x2b0009(0x1af)+'y'](_0x4fda75[_0x2b0009(0x1ed)])?_0x4fda75[_0x2b0009(0x1ed)]:[_0x4fda75[_0x2b0009(0x1ed)]];for(const _0x5dd8f9 of _0x4c6ce1){if(_0x120a43['VSxTA'](_0x5dd8f9,_0x9ca57e)){_0x5c2783=!![];break;}}if(_0x5c2783)break;}}if(_0x120a43[_0x2b0009(0x210)](_0x3bafc9,!_0x5c2783)){console[_0x2b0009(0x1b1)](_0x2b0009(0x1dd)+_0x2b0009(0x1e8)+_0x9ca57e+(_0x2b0009(0x230)+_0x2b0009(0x20f)+_0x2b0009(0x1b9))),blockPage(_0x9ca57e);return;}console[_0x2b0009(0x1b1)](_0x2b0009(0x1dd)+_0x2b0009(0x1e8)+_0x9ca57e+('\x20—\x20дос'+_0x2b0009(0x1e0)+_0x2b0009(0x234)+'.'));}catch(_0x3d2b7f){console[_0x2b0009(0x1ef)](_0x120a43[_0x2b0009(0x1f5)],_0x3d2b7f);}},'onerror':()=>{const _0x5e30db=_0x35b173;console[_0x5e30db(0x19e)]('[e8-ac'+_0x5e30db(0x1e8)+_0x5e30db(0x1a2)+_0x5e30db(0x235)+'\x20Досту'+'п\x20всем'+'.');},'ontimeout':()=>{const _0x33046d=_0x35b173;console[_0x33046d(0x19e)](_0x120a43[_0x33046d(0x220)]);},'timeout':0x2710});}checkAccess();

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
                if (kind === '08') return `${Y}-${Mo}-${D}T08:00`;
                if (kind === '17') return `${Y}-${Mo}-${D}T17:00`;
                return `${Y}-${Mo}-${D}T${p(msk.getUTCHours())}:${p(msk.getUTCMinutes())}`;
            }

            function mskLocalToUtcMs(s) {
                const m = String(s).match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
                if (!m) return null;
                const y = +m[1], mo = +m[2] - 1, d = +m[3], h = +m[4], mi = +m[5];
                const test = new Date(Date.UTC(y, mo, d, h, mi, 0));
                if (test.getUTCFullYear() !== y || test.getUTCMonth() !== mo || test.getUTCDate() !== d) {
                    return NaN;
                }
                return Date.UTC(y, mo, d, h, mi, 0) - MSK_OFFSET_MIN * 60 * 1000;
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
                const fromVal = mskInputValue('08'), toVal = mskInputValue('17');

                box.innerHTML = `
                    <div id="e8-calc-body">Ожидание данных…</div>
                    <div id="e8-calc-dates">
                        <label>От:</label><input type="datetime-local" id="e8-date-from" step="60" value="${fromVal}">
                        <label>До:</label><input type="datetime-local" id="e8-date-to" step="60" value="${toVal}">
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
                    box.querySelector('#e8-date-from').value = mskInputValue('08');
                    box.querySelector('#e8-date-to').value = mskInputValue('17');
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

                        let currentMaxNum = 0;
                        const currentRes = await new Promise((resolve) => {
                            GM_xmlhttpRequest({
                                method: 'GET',
                                url: 'https://backoffice-e8.ffa.su/api/v1/admin/projects/1/jobs?statusId=1',
                                headers: { 'Accept': 'application/json', 'Authorization': token },
                                onload: resolve, onerror: () => resolve(null), timeout: 15000
                            });
                        });

                        if (currentRes && currentRes.status === 200) {
                            const json = JSON.parse(currentRes.responseText);
                            const items = extractItems(json) || [];
                            for (const order of items) {
                                const m = String(order.label || '').match(/(\d+)/);
                                if (m) {
                                    const num = parseInt(m[1], 10);
                                    if (num > currentMaxNum) currentMaxNum = num;
                                }
                            }
                            console.log(`%c[e8-calc] 🎯 Целевая заявка: №${currentMaxNum}`, 'color: #7CFC9B;');
                        }

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
                        let foundTarget = false;

                        const CONCURRENCY = 8;
                        for (let i = 0; i < ranges.length; i += CONCURRENCY) {
                            if (foundTarget) break;

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
                                                const m = String(order.label || '').match(/(\d+)/);
                                                const num = m ? parseInt(m[1], 10) : -1;

                                                if (num !== -1 && currentMaxNum > 0 && num >= currentMaxNum) {
                                                    allItems.push(order);
                                                    foundTarget = true;
                                                    break;
                                                }
                                                allItems.push(order);
                                            }
                                            console.log(`%c[e8-calc] 📅 ${range.startStr} - ${range.endStr}: +${items.length} заявок`, 'color: #a78bfa;');
                                        }
                                    } catch(e) {
                                        console.error('Ошибка парсинга', e);
                                    }
                                }
                            }

                            if (!foundTarget) await new Promise(r => setTimeout(r, 100));
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
                                       palHtml += `<div class="pal"><span class="t" style="color:#e2e8f0;">${toMskString(iso)}</span><span class="n" style="color:#7dd3fc; font-weight:600;">${escapeHtmlescapeHtml(cleanLabel(r.label))}</span></div>`;
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
                                       palHtml += `<div class="pal"><span class="t" style="color:#e2e8f0;">${toMskString(iso)}</span><span class="n" style="color:#7dd3fc; font-weight:600;">${escapeHtmlescapeHtml(cleanLabel(r.label))}</span></div>`;
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
                        try { localStorage.setItem('e8_exec_count_' + job.id, String(execCount)); } catch (e) {}

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

                    for (const j of memoryCache) {
                        if (j.id && j.execCount) {
                            try { localStorage.setItem('e8_exec_count_' + j.id, String(j.execCount)); } catch (e) {}
                        }
                    }

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
