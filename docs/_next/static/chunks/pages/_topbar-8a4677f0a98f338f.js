(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[772],{6723:function(e,n,t){"use strict";t.d(n,{zx:function(){return T}});var r=t(7375),a=t(1604),i=t(9703),l=t(8554),o=t.n(l),s=t(7294),c=t(6450),u=t(917),d=t(1358);function p(){return(p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var m=["label","thickness","speed","emptyColor","className"],f=(0,u.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),h=(0,a.Gp)((function(e,n){var t=(0,a.mq)("Spinner",e),r=(0,a.Lr)(e),l=r.label,o=void 0===l?"Loading...":l,c=r.thickness,u=void 0===c?"2px":c,h=r.speed,g=void 0===h?"0.45s":h,v=r.emptyColor,b=void 0===v?"transparent":v,y=r.className,x=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(r,m),_=(0,i.cx)("chakra-spinner",y),E=p({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:u,borderBottomColor:b,borderLeftColor:b,animation:f+" "+g+" linear infinite"},t);return s.createElement(a.m$.div,p({ref:n,__css:E,className:_},x),o&&s.createElement(d.TX,null,o))}));function g(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}function v(){return(v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}i.Ts&&(h.displayName="Spinner");var b=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],y=(0,c.kr)({strict:!1,name:"ButtonGroupContext"}),x=y[0],_=y[1],E=(0,a.Gp)((function(e,n){var t=e.size,r=e.colorScheme,l=e.variant,o=e.className,c=e.spacing,u=void 0===c?"0.5rem":c,d=e.isAttached,p=e.isDisabled,m=g(e,b),f=(0,i.cx)("chakra-button__group",o),h=s.useMemo((function(){return{size:t,colorScheme:r,variant:l,isDisabled:p}}),[t,r,l,p]),y={display:"inline-flex"};return y=v({},y,d?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:u}}),s.createElement(x,{value:h},s.createElement(a.m$.div,v({ref:n,role:"group",__css:y,className:f},m)))}));i.Ts&&(E.displayName="ButtonGroup");var N=["label","placement","spacing","children","className","__css"],w=function(e){var n=e.label,t=e.placement,r=e.spacing,l=void 0===r?"0.5rem":r,o=e.children,c=void 0===o?s.createElement(h,{color:"currentColor",width:"1em",height:"1em"}):o,u=e.className,d=e.__css,p=g(e,N),m=(0,i.cx)("chakra-button__spinner",u),f="start"===t?"marginEnd":"marginStart",b=s.useMemo((function(){var e;return v(((e={display:"flex",alignItems:"center",position:n?"relative":"absolute"})[f]=n?l:0,e.fontSize="1em",e.lineHeight="normal",e),d)}),[d,n,f,l]);return s.createElement(a.m$.div,v({className:m},p,{__css:b}),c)};i.Ts&&(w.displayName="ButtonSpinner");var S=["children","className"],k=function(e){var n=e.children,t=e.className,r=g(e,S),l=s.isValidElement(n)?s.cloneElement(n,{"aria-hidden":!0,focusable:!1}):n,o=(0,i.cx)("chakra-button__icon",t);return s.createElement(a.m$.span,v({display:"inline-flex",alignSelf:"center",flexShrink:0},r,{className:o}),l)};i.Ts&&(k.displayName="ButtonIcon");var j=["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],T=(0,a.Gp)((function(e,n){var t=_(),l=(0,a.mq)("Button",v({},t,e)),c=(0,a.Lr)(e),u=c.isDisabled,d=void 0===u?null==t?void 0:t.isDisabled:u,p=c.isLoading,m=c.isActive,f=c.isFullWidth,h=c.children,b=c.leftIcon,y=c.rightIcon,x=c.loadingText,E=c.iconSpacing,N=void 0===E?"0.5rem":E,S=c.type,k=c.spinner,T=c.spinnerPlacement,C=void 0===T?"start":T,O=c.className,B=c.as,z=g(c,j),D=s.useMemo((function(){var e,n=o()({},null!=(e=null==l?void 0:l._focus)?e:{},{zIndex:1});return v({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:f?"100%":"auto"},l,!!t&&{_focus:n})}),[l,t,f]),L=function(e){var n=s.useState(!e),t=n[0],r=n[1];return{ref:s.useCallback((function(e){e&&r("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}(B),M=L.ref,P=L.type,R={rightIcon:y,leftIcon:b,iconSpacing:N,children:h};return s.createElement(a.m$.button,v({disabled:d||p,ref:(0,r.qq)(n,M),as:B,type:null!=S?S:P,"data-active":(0,i.PB)(m),"data-loading":(0,i.PB)(p),__css:D,className:(0,i.cx)("chakra-button",O)},z),p&&"start"===C&&s.createElement(w,{className:"chakra-button__spinner--start",label:x,placement:"start",spacing:N},k),p?x||s.createElement(a.m$.span,{opacity:0},s.createElement(I,R)):s.createElement(I,R),p&&"end"===C&&s.createElement(w,{className:"chakra-button__spinner--end",label:x,placement:"end",spacing:N},k))}));function I(e){var n=e.leftIcon,t=e.rightIcon,r=e.children,a=e.iconSpacing;return s.createElement(s.Fragment,null,n&&s.createElement(k,{marginEnd:a},n),r,t&&s.createElement(k,{marginStart:a},t))}i.Ts&&(T.displayName="Button");var C=["icon","children","isRound","aria-label"],O=(0,a.Gp)((function(e,n){var t=e.icon,r=e.children,a=e.isRound,i=e["aria-label"],l=g(e,C),o=t||r,c=s.isValidElement(o)?s.cloneElement(o,{"aria-hidden":!0,focusable:!1}):null;return s.createElement(T,v({padding:"0",borderRadius:a?"full":void 0,ref:n,"aria-label":i},l),c)}));i.Ts&&(O.displayName="IconButton")},1358:function(e,n,t){"use strict";t.d(n,{TX:function(){return l},NL:function(){return i}});var r=t(1604),a=t(9703),i={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},l=(0,r.m$)("span",{baseStyle:i});a.Ts&&(l.displayName="VisuallyHidden");var o=(0,r.m$)("input",{baseStyle:i});a.Ts&&(o.displayName="VisuallyHiddenInput")},8629:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_topbar",function(){return t(1313)}])},1313:function(e,n,t){"use strict";t.r(n);var r=t(5893),a=(t(9008),t(8527)),i=t(6723),l=(t(7294),function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(e>n)throw Error("Too much energy!");for(var t=[],i=0;i<n-e;i++)t.push((0,r.jsx)(a.xu,{h:"8",w:"8",bgImg:"/lightningEmpty.svg",alt:"Empty Energy"},"empty"+i));for(var l=[],o=0;o<e;o++)l.push((0,r.jsx)(a.xu,{h:"8",w:"8",bgImg:"/lightning.svg",alt:"Full Energy"},"full"+o));return(0,r.jsxs)(a.kC,{"aria-label":"energy",children:[t,l]})});n.default=function(e){var n=e.energy,t=e.money,o=e.dispReturnToMenu,s=e.moveTo;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.xu,{h:"16",w:"100vw",minW:"100vw"}),(0,r.jsx)(a.xu,{bgGradient:"linear(to-r, orange.600, red.600)",minW:"100vw",position:"absolute",top:"0",left:"0",children:(0,r.jsx)(a.M5,{flexDir:"column",children:(0,r.jsxs)(a.kC,{color:"whitesmoke",w:"xs",align:"center",children:[(0,r.jsxs)(a.kC,{align:"center",children:[(0,r.jsx)(a.xu,{h:"8",w:"8",bgImg:"/coin.svg",alt:"Coin - Money"}),(0,r.jsx)(a.X6,{padding:".5rem",size:"lg",fontWeight:"light",children:t})]}),(0,r.jsx)(a.LZ,{align:"right"}),l(n),(0,r.jsx)(i.zx,{colorScheme:"yellow",p:"1",m:"2",mr:"0",onClick:function(){return s("menu")},isDisabled:!o,children:(0,r.jsx)(a.xu,{h:"6",w:"6",bgImg:"/houseButton.svg",alt:"Main Menu"})})]})})})]})}}},function(e){e.O(0,[895,774,888,179],(function(){return n=8629,e(e.s=n);var n}));var n=e.O();_N_E=n}]);