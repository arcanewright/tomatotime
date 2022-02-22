"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[508],{6702:function(e,t,r){r.r(t),r.d(t,{InvBox:function(){return c}});var n=r(5893),i=r(9008),a=r(8527),o=r(6723),l=r(7294);r(6004);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=function(e){var t=e.selected,r=e.vegetable,i=e.index,l=e.label,s=e.rarityLabel,c=e.filterExp,u=e.worth,m=e.quantity,d=e.sell,f=e.image,x=e.forsale,h=void 0===x||x,g="Common"==s?"orange":"Rare"==s?"whitesmoke":"Legendary"==s?"gold":"black",v="Common"==s?"darkred":"Rare"==s?"gray":"Legendary"==s?"blue":"whitesmoke";return(0,n.jsxs)(a.kC,{w:"48",p:"2",m:"2",bgColor:t?"orange.500":"orange.300",borderRadius:"5px",direction:"column",justify:"center",align:"center",children:[(0,n.jsxs)(a.kC,{w:"100%",justify:"space-between",align:"baseline",children:[(0,n.jsx)(a.xv,{fontSize:"md",children:l}),(0,n.jsx)(a.xv,{pl:"1",pr:"1",color:g,bg:v,borderRadius:"2",fontSize:"xs",children:s})]}),(0,n.jsx)(a.xu,{h:"32",w:"32",bgImg:f,alt:l,filter:c}),(0,n.jsxs)(a.kC,{w:"100%",justify:"space-between",align:"center",children:[(0,n.jsx)(a.xv,{fontSize:"lg",pl:"1",pr:"1",bg:"red.500",borderRadius:"4",children:m}),h?(0,n.jsxs)(o.zx,{h:"8",colorScheme:"yellow",align:"center",pl:"1",pr:"1",borderRadius:"5",onClick:function(){return d(i,r)},children:[(0,n.jsx)(a.xu,{h:"6",w:"6",bgImg:"/coin.svg",alt:"Coin"}),(0,n.jsx)(a.xv,{fontSize:"lg",children:u})]}):(0,n.jsx)(n.Fragment,{})]})]})};t.default=function(e){e.money;var t=e.setMoney,r=(0,l.useState)([]),o=r[0],u=r[1];(0,l.useEffect)((function(){u(localStorage.getItem("inventory")&&"undefined"!=localStorage.getItem("inventory")?JSON.parse(localStorage.getItem("inventory")):[])}),[]);var m=function(e,r){u((function(r){var n=[];return r.map((function(i,a){a!=e?n.push(i):1==r[a].quantity?t(r[a].worth):(t(r[a].worth),n.push(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}({},r[a],{quantity:r[a].quantity-1})))})),localStorage.setItem("inventory",JSON.stringify(n)),n}))};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.default,{children:[(0,n.jsx)("title",{children:"Tomato RPG - Inventory"}),(0,n.jsx)("meta",{name:"description",content:"Simple Pomodoro RPG"}),(0,n.jsx)("link",{rel:"icon",href:"/basket.svg"})]}),(0,n.jsxs)(a.kC,{direction:"column",children:[(0,n.jsx)(a.M5,{children:(0,n.jsx)(a.X6,{p:"2",bgGradient:"linear(to-r, orange.500, yellow.500)",bgClip:"text",children:"Inventory"})}),(0,n.jsx)(a.M5,{children:(0,n.jsx)(a.kC,{minW:"320px",maxW:"800px",borderRadius:"8",bgGradient:"linear(to-b, orange.200, yellow.200)",wrap:"wrap",align:"flex-start",alignContent:"flex-start",justify:"center",children:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[],r=0;r<e.length;r++)t.push((0,n.jsx)(c,{index:r,sell:m,image:e[r].image,vegetable:e[r].vegetable,label:e[r].label,rarityLabel:e[r].rarityLabel,filterExp:e[r].filterExpression,worth:e[r].worth,quantity:e[r].quantity},r));return t.length<1&&t.push((0,n.jsx)(a.xv,{children:"Empty"},"empty")),t}(o)})})]})]})}},2508:function(e,t,r){r.r(t),r.d(t,{default:function(){return P}});var n=r(5893),i=r(9008),a=r(1604),o=r(917),l=r(9703),s=r(7294);function c(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var m=(0,o.F4)({"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}}),d=(0,o.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}});(0,o.F4)({"0%":{left:"-40%"},"100%":{left:"100%"}}),(0,o.F4)({from:{backgroundPosition:"1rem 0"},to:{backgroundPosition:"0 0"}});function f(e){var t=e.value,r=void 0===t?0:t,n=e.min,i=e.max,a=e.valueText,o=e.getValueText,s=e.isIndeterminate,c=(0,l.Rg)(r,n,i);return{bind:{"data-indeterminate":s?"":void 0,"aria-valuemax":i,"aria-valuemin":n,"aria-valuenow":s?void 0:r,"aria-valuetext":function(){if(null!=r)return(0,l.mf)(o)?o(r,c):a}(),role:"progressbar"},percent:c,value:r}}var x=["size","isIndeterminate"],h=["size","max","min","valueText","getValueText","value","capIsRound","children","thickness","color","trackColor","isIndeterminate"],g=function(e){return s.createElement(a.m$.circle,u({cx:50,cy:50,r:42,fill:"transparent"},e))};l.Ts&&(g.displayName="Circle");var v=function(e){var t=e.size,r=e.isIndeterminate,n=c(e,x);return s.createElement(a.m$.svg,u({viewBox:"0 0 100 100",__css:{width:t,height:t,animation:r?d+" 2s linear infinite":void 0}},n))};l.Ts&&(v.displayName="Shape");var p=function(e){var t,r=e.size,n=void 0===r?"48px":r,i=e.max,o=void 0===i?100:i,d=e.min,x=void 0===d?0:d,p=e.valueText,y=e.getValueText,b=e.value,j=e.capIsRound,k=e.children,S=e.thickness,w=void 0===S?"10px":S,C=e.color,I=void 0===C?"#0078d4":C,O=e.trackColor,T=void 0===O?"#edebe9":O,z=e.isIndeterminate,E=c(e,h),P=f({min:x,max:o,value:b,valueText:p,getValueText:y,isIndeterminate:z}),R=z?void 0:2.64*(null!=(t=P.percent)?t:0),L=(0,l.o8)(R)?void 0:R+" "+(264-R),M=z?{css:{animation:m+" 1.5s linear infinite"}}:{strokeDashoffset:66,strokeDasharray:L,transitionProperty:"stroke-dasharray, stroke",transitionDuration:"0.6s",transitionTimingFunction:"ease"},N={display:"inline-block",position:"relative",verticalAlign:"middle",fontSize:n};return s.createElement(a.m$.div,u({className:"chakra-progress"},P.bind,E,{__css:N}),s.createElement(v,{size:n,isIndeterminate:z},s.createElement(g,{stroke:T,strokeWidth:w,className:"chakra-progress__track"}),s.createElement(g,u({stroke:I,strokeWidth:w,className:"chakra-progress__indicator",strokeLinecap:j?"round":void 0,opacity:0!==P.value||z?void 0:0},M))),k)};l.Ts&&(p.displayName="CircularProgress");var y=(0,a.m$)("div",{baseStyle:{fontSize:"0.24em",top:"50%",left:"50%",width:"100%",textAlign:"center",position:"absolute",transform:"translate(-50%, -50%)"}});l.Ts&&(y.displayName="CircularProgressLabel");l.Ts;l.Ts;var b=r(8527),j=r(6723),k=r(7375),S=r(135),w=r(7496),C=r(6702),I=r(6004);function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var T=function(e){var t=e.moveTo,r=e.resolve,i=e.timerProps,a=(0,k.qY)(),o=a.isOpen,l=a.onOpen,s=a.onClose;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(j.zx,{colorScheme:"red",h:"16","aria-label":"Stop",onClick:l,children:(0,n.jsx)(b.xu,{bgImg:"/stop.svg",h:"12",w:"12",filter:"opacity(80%)"})}),(0,n.jsxs)(S.u_,{isOpen:o,onClose:s,children:[(0,n.jsx)(S.ZA,{}),(0,n.jsxs)(S.hz,{children:[(0,n.jsx)(S.xB,{children:"Cancel Timer?"}),(0,n.jsx)(S.ol,{}),(0,n.jsx)(S.mz,{children:(0,n.jsxs)(b.M5,{children:[(0,n.jsx)(j.zx,{colorScheme:"red",mr:"3",onClick:function(){r(i.type,"failure"),t("menu"),s()},children:(0,n.jsx)(b.X6,{size:"sm",children:"Cancel Timer"})}),(0,n.jsx)(j.zx,{colorScheme:"yellow",onClick:s,children:(0,n.jsx)(b.X6,{size:"sm",children:"Return to Timer"})})]})})]})]})]})},z=function(e){var t=e.finished,r=e.resolve,i=e.timerProps,a=e.prizeVegetable,o=(0,s.useState)(null),l=o[0],c=o[1],u=(0,s.useState)(!1),m=u[0],d=u[1],f=(0,s.useState)(!1),x=f[0],h=f[1],g=(0,s.useState)(!1),v=g[0],p=g[1],y=(0,s.useState)(!1),T=y[0],z=y[1],E=(0,s.useState)(!1),P=E[0],R=E[1],L=(0,k.qY)(),M=L.isOpen,N=L.onOpen,_=L.onClose,q=(0,s.useState)(!1),D=q[0],F=q[1],B=(0,s.useState)(!1),G=B[0],V=B[1],W=(0,s.useState)(0),A=W[0],J=W[1];(0,s.useEffect)((function(){c(new Audio("beep-7-with-silence-x5.wav")),d(!localStorage.getItem("s-play-alarm")||"true"==localStorage.getItem("s-play-alarm")),h(!!localStorage.getItem("s-loop-alarm")&&"true"==localStorage.getItem("s-loop-alarm"))}),[]),(0,s.useEffect)((function(){if(t&&!M&&N(),!t||v||!m||x||T||(p(!0),l.play()),t&&!v&&m&&x&&!T&&(p(!0),l.loop=!0,l.play()),P&&v&&(p(!1),z(!0),l.pause()),G&&!A){var e=setTimeout((function(){return V(!1)}),100);J(e)}!G&&A&&clearTimeout(A)}));var X=I.find((function(e){return e.vegetable==a}))||{vegetable:"error",label:"Error",image:"/tomato.svg",rarityLabel:"Common",filterExpression:"",worth:0},Y=function(e){var t=localStorage.getItem("inventory"),r=[],n=[];t&&"undefined"!=t&&(r=JSON.parse(t));var i=r.findIndex((function(t){return t.vegetable==e}));-1==i?(n.concat(r),n.push(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){O(e,t,r[t])}))}return e}({},X,{quantity:1}))):n=r.map((function(e,t){if(t==i){var r=e;return r.quantity++,r}return e})),localStorage.setItem("inventory",JSON.stringify(n))};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(S.u_,{isOpen:M,onClose:_,onClick:function(){return R(!0)},children:[(0,n.jsx)(S.ZA,{}),(0,n.jsxs)(S.hz,{children:[(0,n.jsx)(S.xB,{children:"Time Over!"}),(0,n.jsx)(S.ol,{onClick:function(){R(!0),r(i.type,"success"),_()}}),(0,n.jsxs)(S.fe,{children:[(0,n.jsxs)(w.MT,{unmountOnExit:!0,initialScale:".9",in:!D&&!G,children:[(0,n.jsx)(b.M5,{children:(0,n.jsx)(b.xv,{children:"Want to count this timer?"})}),(0,n.jsx)(b.M5,{children:(0,n.jsx)(j.zx,{p:"8",m:"2",colorScheme:"blue",onClick:function(){R(!0),F(!0),Y(a),V(!0)},children:(0,n.jsx)(b.xv,{fontSize:"2xl",children:"Yes!"})})}),(0,n.jsx)(b.M5,{children:(0,n.jsx)(j.zx,{p:"2",m:"4",colorScheme:"red",onClick:function(){R(!0),r(i.type,"failure"),_()},children:"No"})})]}),(0,n.jsx)(w.MT,{unmountOnExit:!0,initialScale:".9",in:D&&!G,children:(0,n.jsxs)(b.kC,{direction:"column",children:[(0,n.jsx)(b.M5,{children:(0,n.jsx)(b.xv,{children:"You've earned:"})}),(0,n.jsx)(b.M5,{children:(0,n.jsx)(C.InvBox,{forsale:!1,vegetable:X.vegetable,label:X.label,image:X.image,rarityLabel:X.rarityLabel,filterExp:X.filterExpression,worth:X.worth,quantity:1})}),(0,n.jsx)(b.M5,{children:(0,n.jsx)(j.zx,{p:"8",m:"2",colorScheme:"yellow",onClick:function(){r(i.type,"success"),_()},children:"Return to Menu"})})]})})]})]})]})})},E=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t){var r=parseInt(e/3600),n=e%3600,i=parseInt(n/60),a=n%60,o=r>=10?"":"0",l=i>=10?"":"0",s=a>=10?"":"0";return o+r+":"+l+i+":"+s+a}var c=parseInt(e/60),u=parseInt(e%60),m=c>=10?"":"0",d=u>=10?"":"0";return m+c+":"+d+u},P=function(e){var t=e.lastTimer,r=void 0===t?{time:25,type:"work"}:t,a=e.moveTo,o=e.resolve,l=e.vegRoot,c=(0,s.useState)(60*r.time),u=c[0],m=c[1],d=(0,s.useState)(60*r.time),f=d[0],x=(d[1],(0,s.useState)(!1)),h=x[0],g=x[1],v=(0,s.useState)(0),k=v[0],S=v[1],w=(0,s.useState)(!1),C=w[0],I=w[1],O=(0,s.useState)("break"==r.type?"teal":"work"==r.type?"orange":"grey"),P=O[0],R=(O[1],(0,s.useState)(!1)),L=(R[0],R[1],function(){var e=1e3*Math.random();return l+":"+(e>998?"legendary":e>948?"rare":"common")}());return(0,s.useEffect)((function(){if(!h&&!C&&!k){var e=setInterval((function(){m((function(e){return localStorage.setItem("timeLeft",e-1),e-1}))}),1e3);S(e)}return(h||C)&&k&&(clearInterval(k),S(0)),u<=0&&I(!0),function(){return clearInterval(k)}}),[h,C,k,u]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.default,{children:[(0,n.jsxs)("title",{children:["Tomato RPG",C?" - TIME UP":" - "+E(u)]}),(0,n.jsx)("meta",{name:"description",content:"Simple Pomodoro RPG"}),(0,n.jsx)("link",{rel:"icon",href:"break"==r.type?"/hotBeverage.svg":"/timerClock.svg"})]}),(0,n.jsxs)(b.kC,{direction:"column",justify:"center",align:"center",children:[(0,n.jsxs)(b.kC,{minH:"10vh",align:"center",justify:"center",children:[(0,n.jsx)(b.xu,{h:"16",w:"16",bgImg:r.image,alt:r.vegetable}),(0,n.jsx)(b.xu,{w:"8",h:"8"}),(0,n.jsx)(b.X6,{color:"work"==r.type?"orange.600":"break"==r.type?"teal.600":"gray.600",children:"work"==r.type?"Work":"break"==r.type?"Break":""})]}),(0,n.jsx)(p,{size:"240",color:P,value:100*(f-u)/f,children:(0,n.jsx)(y,{children:(0,n.jsx)(b.xu,{bgGradient:"radial(orange.400, orange.300, whitesmoke",p:"8",borderRadius:"50%",children:(0,n.jsx)(b.kC,{direction:"column",justify:"center",align:"center",children:(0,n.jsx)(b.xv,{fontFamily:"monospace",children:E(u)})})})})}),(0,n.jsx)(b.LZ,{minH:"5vh",children:(0,n.jsx)(b.M5,{children:h?"Paused":""})}),(0,n.jsx)(j.zx,{colorScheme:"yellow",h:"24","aria-label":"Pause",onClick:function(){return g(!h)},children:(0,n.jsx)(b.xu,{bgImg:h?"/play.svg":"pause.svg",color:"grey",h:"16",w:"16",filter:"opacity(80%)"})}),(0,n.jsx)(b.LZ,{minH:"5vh"}),(0,n.jsx)(T,{moveTo:a,resolve:o,timerProps:r}),(0,n.jsx)(z,{finished:C,timerProps:r,resolve:o,prizeVegetable:L})]})]})}},6004:function(e){e.exports=JSON.parse('[{"vegetable":"tomato:common","root":"tomato","label":"Tomato","rarityLabel":"Common","rarity":"common","filterExpression":"","image":"/tomato.svg","worth":10},{"vegetable":"tomato:rare","root":"tomato","label":"Tomato","rarityLabel":"Rare","rarity":"rare","filterExpression":"hue-rotate(90deg)","image":"/tomato.svg","worth":25},{"vegetable":"tomato:legendary","root":"tomato","label":"Tomato","rarityLabel":"Legendary","rarity":"rare","filterExpression":"hue-rotate(180deg)","image":"/tomato.svg","worth":100}]')}}]);