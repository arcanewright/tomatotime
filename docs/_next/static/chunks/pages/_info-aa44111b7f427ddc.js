(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[853],{6723:function(e,n,t){"use strict";t.d(n,{zx:function(){return I}});var r=t(7375),i=t(1604),a=t(9703),o=t(8554),l=t.n(o),s=t(7294),c=t(6450),d=t(917),u=t(1358);function m(){return(m=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var p=["label","thickness","speed","emptyColor","className"],f=(0,d.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),h=(0,i.Gp)((function(e,n){var t=(0,i.mq)("Spinner",e),r=(0,i.Lr)(e),o=r.label,l=void 0===o?"Loading...":o,c=r.thickness,d=void 0===c?"2px":c,h=r.speed,g=void 0===h?"0.45s":h,v=r.emptyColor,b=void 0===v?"transparent":v,x=r.className,y=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(r,p),_=(0,a.cx)("chakra-spinner",x),N=m({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:d,borderBottomColor:b,borderLeftColor:b,animation:f+" "+g+" linear infinite"},t);return s.createElement(i.m$.div,m({ref:n,__css:N,className:_},y),l&&s.createElement(u.TX,null,l))}));function g(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}function v(){return(v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}a.Ts&&(h.displayName="Spinner");var b=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],x=(0,c.kr)({strict:!1,name:"ButtonGroupContext"}),y=x[0],_=x[1],N=(0,i.Gp)((function(e,n){var t=e.size,r=e.colorScheme,o=e.variant,l=e.className,c=e.spacing,d=void 0===c?"0.5rem":c,u=e.isAttached,m=e.isDisabled,p=g(e,b),f=(0,a.cx)("chakra-button__group",l),h=s.useMemo((function(){return{size:t,colorScheme:r,variant:o,isDisabled:m}}),[t,r,o,m]),x={display:"inline-flex"};return x=v({},x,u?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:d}}),s.createElement(y,{value:h},s.createElement(i.m$.div,v({ref:n,role:"group",__css:x,className:f},p)))}));a.Ts&&(N.displayName="ButtonGroup");var E=["label","placement","spacing","children","className","__css"],j=function(e){var n=e.label,t=e.placement,r=e.spacing,o=void 0===r?"0.5rem":r,l=e.children,c=void 0===l?s.createElement(h,{color:"currentColor",width:"1em",height:"1em"}):l,d=e.className,u=e.__css,m=g(e,E),p=(0,a.cx)("chakra-button__spinner",d),f="start"===t?"marginEnd":"marginStart",b=s.useMemo((function(){var e;return v(((e={display:"flex",alignItems:"center",position:n?"relative":"absolute"})[f]=n?o:0,e.fontSize="1em",e.lineHeight="normal",e),u)}),[u,n,f,o]);return s.createElement(i.m$.div,v({className:p},m,{__css:b}),c)};a.Ts&&(j.displayName="ButtonSpinner");var S=["children","className"],k=function(e){var n=e.children,t=e.className,r=g(e,S),o=s.isValidElement(n)?s.cloneElement(n,{"aria-hidden":!0,focusable:!1}):n,l=(0,a.cx)("chakra-button__icon",t);return s.createElement(i.m$.span,v({display:"inline-flex",alignSelf:"center",flexShrink:0},r,{className:l}),o)};a.Ts&&(k.displayName="ButtonIcon");var w=["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],I=(0,i.Gp)((function(e,n){var t=_(),o=(0,i.mq)("Button",v({},t,e)),c=(0,i.Lr)(e),d=c.isDisabled,u=void 0===d?null==t?void 0:t.isDisabled:d,m=c.isLoading,p=c.isActive,f=c.isFullWidth,h=c.children,b=c.leftIcon,x=c.rightIcon,y=c.loadingText,N=c.iconSpacing,E=void 0===N?"0.5rem":N,S=c.type,k=c.spinner,I=c.spinnerPlacement,C=void 0===I?"start":I,O=c.className,B=c.as,G=g(c,w),P=s.useMemo((function(){var e,n=l()({},null!=(e=null==o?void 0:o._focus)?e:{},{zIndex:1});return v({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:f?"100%":"auto"},o,!!t&&{_focus:n})}),[o,t,f]),z=function(e){var n=s.useState(!e),t=n[0],r=n[1];return{ref:s.useCallback((function(e){e&&r("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}(B),R=z.ref,$=z.type,A={rightIcon:x,leftIcon:b,iconSpacing:E,children:h};return s.createElement(i.m$.button,v({disabled:u||m,ref:(0,r.qq)(n,R),as:B,type:null!=S?S:$,"data-active":(0,a.PB)(p),"data-loading":(0,a.PB)(m),__css:P,className:(0,a.cx)("chakra-button",O)},G),m&&"start"===C&&s.createElement(j,{className:"chakra-button__spinner--start",label:y,placement:"start",spacing:E},k),m?y||s.createElement(i.m$.span,{opacity:0},s.createElement(T,A)):s.createElement(T,A),m&&"end"===C&&s.createElement(j,{className:"chakra-button__spinner--end",label:y,placement:"end",spacing:E},k))}));function T(e){var n=e.leftIcon,t=e.rightIcon,r=e.children,i=e.iconSpacing;return s.createElement(s.Fragment,null,n&&s.createElement(k,{marginEnd:i},n),r,t&&s.createElement(k,{marginStart:i},t))}a.Ts&&(I.displayName="Button");var C=["icon","children","isRound","aria-label"],O=(0,i.Gp)((function(e,n){var t=e.icon,r=e.children,i=e.isRound,a=e["aria-label"],o=g(e,C),l=t||r,c=s.isValidElement(l)?s.cloneElement(l,{"aria-hidden":!0,focusable:!1}):null;return s.createElement(I,v({padding:"0",borderRadius:i?"full":void 0,ref:n,"aria-label":a},o),c)}));a.Ts&&(O.displayName="IconButton")},1358:function(e,n,t){"use strict";t.d(n,{TX:function(){return o},NL:function(){return a}});var r=t(1604),i=t(9703),a={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},o=(0,r.m$)("span",{baseStyle:a});i.Ts&&(o.displayName="VisuallyHidden");var l=(0,r.m$)("input",{baseStyle:a});i.Ts&&(l.displayName="VisuallyHiddenInput")},9281:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_info",function(){return t(2557)}])},2557:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(9008),a=t(8527),o=t(6723);t(7294);n.default=function(e){e=null!==e?e:function(e){throw e}(new TypeError("Cannot destructure undefined"));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"Tomato RPG - Information"}),(0,r.jsx)("meta",{name:"description",content:"Simple Pomodoro RPG"}),(0,r.jsx)("link",{rel:"icon",href:"/information.svg"})]}),(0,r.jsxs)(a.kC,{direction:"column",children:[(0,r.jsx)(a.M5,{children:(0,r.jsx)(a.X6,{p:"2",bgGradient:"linear(to-r, orange.500, yellow.500)",bgClip:"text",children:"Information"})}),(0,r.jsx)(a.M5,{children:(0,r.jsxs)(a.kC,{direction:"column",align:"left",justify:"center",children:[(0,r.jsx)(a.X6,{size:"md",m:"2",children:"Report Bugs"}),(0,r.jsx)(a.xv,{m:"2",children:"Visit the Github page to report bugs or leave suggestions:"}),(0,r.jsx)(a.rU,{m:"2",href:"https://github.com/arcanewright/tomatotime",children:(0,r.jsx)(o.zx,{colorScheme:"purple",children:"Github"})}),(0,r.jsx)(a.X6,{size:"md",m:"2",children:"About Me"}),(0,r.jsx)(a.xv,{m:"2",children:"Hi, I'm arcanewright. I make websites for fun. Check out my other projects on my github, or on my website:"}),(0,r.jsx)(a.rU,{m:"2",href:"https://arcanewright.com",children:(0,r.jsx)(o.zx,{colorScheme:"blue",children:"Arcane Wright"})}),(0,r.jsx)(a.xv,{m:"2",children:"You can also find me on reddit!"})]})})]})]})}}},function(e){e.O(0,[895,774,888,179],(function(){return n=9281,e(e.s=n);var n}));var n=e.O();_N_E=n}]);