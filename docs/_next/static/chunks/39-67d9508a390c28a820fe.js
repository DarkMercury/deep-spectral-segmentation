(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[39],{155:function(e,r,t){"use strict";t.d(r,{z:function(){return g}});var n=t(1180),a=t(917),i=t(5284),o=t(4686),l=t(5415),c=t(7294);function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var u=(0,a.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),d=(0,n.forwardRef)(((e,r)=>{var t=(0,n.useStyleConfig)("Spinner",e),a=(0,i.Lr)(e),{label:d="Loading...",thickness:f="2px",speed:h="0.45s",color:p,emptyColor:v="transparent",className:m}=a,y=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(a,["label","thickness","speed","color","emptyColor","className"]),_=(0,o.cx)("chakra-spinner",m),g=s({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:f,borderBottomColor:v,borderLeftColor:v,color:p,animation:u+" "+h+" linear infinite"},t);return c.createElement(n.chakra.div,s({ref:r,__css:g,className:_},y),d&&c.createElement(l.TX,null,d))}));o.__DEV__&&(d.displayName="Spinner");var f=t(8500);function h(){return(h=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var[p,v]=(0,f.k)({strict:!1,name:"ButtonGroupContext"}),m=(0,n.forwardRef)(((e,r)=>{var{size:t,colorScheme:a,variant:i,className:l,spacing:s="0.5rem",isAttached:u,isDisabled:d}=e,f=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["size","colorScheme","variant","className","spacing","isAttached","isDisabled"]),v=(0,o.cx)("chakra-button__group",l),m=c.useMemo((()=>({size:t,colorScheme:a,variant:i,isDisabled:d})),[t,a,i,d]),y={display:"inline-flex"};return y=h({},y,u?{"> *:first-of-type:not(:last-of-type)":{borderRightRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderLeftRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginLeft:s}}),c.createElement(p,{value:m},c.createElement(n.chakra.div,h({ref:r,role:"group",__css:y,className:v},f)))}));function y(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}function _(){return(_=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}o.__DEV__&&(m.displayName="ButtonGroup");var g=(0,n.forwardRef)(((e,r)=>{var t,a=v(),l=(0,n.useStyleConfig)("Button",_({},a,e)),s=(0,i.Lr)(e),{isDisabled:u=(null==a?void 0:a.isDisabled),isLoading:d,isActive:f,isFullWidth:h,children:p,leftIcon:m,rightIcon:g,loadingText:x,iconSpacing:w="0.5rem",type:E="button",spinner:C,className:O,as:N}=s,S=y(s,["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","className","as"]),j=(0,o.mergeWith)({},null!=(t=null==l?void 0:l._focus)?t:{},{zIndex:1}),D=_({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",transition:"all 250ms",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:h?"100%":"auto"},l,!!a&&{_focus:j});return c.createElement(n.chakra.button,_({disabled:u||d,ref:r,as:N,type:N?void 0:E,"data-active":(0,o.dataAttr)(f),"data-loading":(0,o.dataAttr)(d),__css:D,className:(0,o.cx)("chakra-button",O)},S),m&&!d&&c.createElement(b,{marginEnd:w},m),d&&c.createElement(k,{__css:{fontSize:"1em",lineHeight:"normal"},spacing:w,label:x},C),d?x||c.createElement(n.chakra.span,{opacity:0},p):p,g&&!d&&c.createElement(b,{marginStart:w},g))}));o.__DEV__&&(g.displayName="Button");var b=e=>{var{children:r,className:t}=e,a=y(e,["children","className"]),i=c.isValidElement(r)?c.cloneElement(r,{"aria-hidden":!0,focusable:!1}):r,l=(0,o.cx)("chakra-button__icon",t);return c.createElement(n.chakra.span,_({},a,{className:l}),i)};o.__DEV__&&(b.displayName="ButtonIcon");var k=e=>{var{label:r,spacing:t,children:a=c.createElement(d,{color:"currentColor",width:"1em",height:"1em"}),className:i,__css:l}=e,s=y(e,["label","spacing","children","className","__css"]),u=(0,o.cx)("chakra-button__spinner",i),f=_({display:"flex",alignItems:"center",position:r?"relative":"absolute",marginEnd:r?t:0},l);return c.createElement(n.chakra.div,_({className:u},s,{__css:f}),a)};o.__DEV__&&(k.displayName="ButtonSpinner")},2300:function(e,r,t){"use strict";var n=t(1180),a=t(4686),i=t(7294);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var l=e=>{var{type:r="checkbox",_hover:t,_invalid:a,_disabled:l,_focus:c,_checked:s,_child:u={opacity:0},_checkedAndChild:d={opacity:1},_checkedAndDisabled:f,_checkedAndFocus:h,_checkedAndHover:p,children:v}=e,m=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["type","_hover","_invalid","_disabled","_focus","_checked","_child","_checkedAndChild","_checkedAndDisabled","_checkedAndFocus","_checkedAndHover","children"]),y="input[type="+r+"]:checked:disabled + &",_="input[type="+r+"]:checked:hover:not(:disabled) + &",g="input[type="+r+"]:checked:focus + &",b="input[type="+r+"]:disabled + &",k="input[type="+r+"]:focus + &",x="input[type="+r+"]:hover:not(:disabled):not(:checked) + &",w="input[type="+r+"]:checked + &, input[type="+r+"][aria-checked=mixed] + &",E="input[type="+r+"][aria-invalid=true] + &",C="& > *";return i.createElement(n.chakra.div,o({},m,{"aria-hidden":!0,__css:{display:"inline-flex",alignItems:"center",justifyContent:"center",transition:"all 120ms",flexShrink:0,[k]:c,[x]:t,[b]:l,[E]:a,[y]:f,[g]:h,[_]:p,[C]:u,[w]:o({},s,{[C]:d})}}),v)};a.__DEV__&&(l.displayName="ControlBox")},9867:function(e,r,t){"use strict";t.d(r,{I:function(){return c}});var n=t(1180),a=t(4686),i=t(7294),o=t(58);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e){var{viewBox:r="0 0 24 24",d:t,path:c,displayName:s,defaultProps:u={}}=e,d=(0,n.forwardRef)(((e,n)=>i.createElement(o.J,l({ref:n,viewBox:r},u,e),null!=c?c:i.createElement("path",{fill:"currentColor",d:t}))));return a.__DEV__&&(d.displayName=s),d}},58:function(e,r,t){"use strict";t.d(r,{J:function(){return c}});var n=t(1180),a=t(4686),i=t(7294);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var l={path:i.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},i.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),i.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),i.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},c=(0,n.forwardRef)(((e,r)=>{var{as:t,viewBox:c,color:s="currentColor",focusable:u=!1,children:d,className:f,__css:h}=e,p=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["as","viewBox","color","focusable","children","className","__css"]),v={ref:r,focusable:u,className:(0,a.cx)("chakra-icon",f),__css:o({w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:s},h)},m=null!=c?c:l.viewBox;if(t&&"string"!==typeof t)return i.createElement(n.chakra.svg,o({as:t},v,p));var y=null!=d?d:l.path;return i.createElement(n.chakra.svg,o({verticalAlign:"middle",viewBox:m},v,p),y)}));a.__DEV__&&(c.displayName="Icon")},7626:function(e,r,t){"use strict";t.d(r,{r:function(){return n}});var n=(0,t(9867).I)({displayName:"CheckCircleIcon",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"})},4325:function(e,r,t){"use strict";t.d(r,{x:function(){return i}});var n=t(9867),a=t(7294),i=(0,n.I)({displayName:"LinkIcon",path:a.createElement("g",{fill:"currentColor"},a.createElement("path",{d:"M10.458,18.374,7.721,21.11a2.853,2.853,0,0,1-3.942,0l-.892-.891a2.787,2.787,0,0,1,0-3.941l5.8-5.8a2.789,2.789,0,0,1,3.942,0l.893.892A1,1,0,0,0,14.94,9.952l-.893-.892a4.791,4.791,0,0,0-6.771,0l-5.8,5.8a4.787,4.787,0,0,0,0,6.77l.892.891a4.785,4.785,0,0,0,6.771,0l2.736-2.735a1,1,0,1,0-1.414-1.415Z"}),a.createElement("path",{d:"M22.526,2.363l-.892-.892a4.8,4.8,0,0,0-6.77,0l-2.905,2.9a1,1,0,0,0,1.414,1.414l2.9-2.9a2.79,2.79,0,0,1,3.941,0l.893.893a2.786,2.786,0,0,1,0,3.942l-5.8,5.8a2.769,2.769,0,0,1-1.971.817h0a2.766,2.766,0,0,1-1.969-.816,1,1,0,1,0-1.415,1.412,4.751,4.751,0,0,0,3.384,1.4h0a4.752,4.752,0,0,0,3.385-1.4l5.8-5.8a4.786,4.786,0,0,0,0-6.771Z"}))})},7922:function(e,r,t){"use strict";t.d(r,{E:function(){return c}});var n=t(1180),a=t(5284),i=t(4686),o=t(7294);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var c=(0,n.forwardRef)(((e,r)=>{var t=(0,n.useStyleConfig)("Code",e),c=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}((0,a.Lr)(e),["className"]);return o.createElement(n.chakra.code,l({ref:r,className:(0,i.cx)("chakra-code",e.className)},c,{__css:l({display:"inline-block"},t)}))}));i.__DEV__&&(c.displayName="Code")},4096:function(e,r,t){"use strict";t.d(r,{k:function(){return l}});var n=t(1180),a=t(4686),i=t(7294);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var l=(0,n.forwardRef)(((e,r)=>{var{direction:t,align:a,justify:l,wrap:c,basis:s,grow:u,shrink:d}=e,f=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["direction","align","justify","wrap","basis","grow","shrink"]),h={display:"flex",flexDirection:t,alignItems:a,justifyContent:l,flexWrap:c,flexBasis:s,flexGrow:u,flexShrink:d};return i.createElement(n.chakra.div,o({ref:r,__css:h},f))}));a.__DEV__&&(l.displayName="Flex")},336:function(e,r,t){"use strict";t.d(r,{X:function(){return c}});var n=t(1180),a=t(5284),i=t(4686),o=t(7294);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var c=(0,n.forwardRef)(((e,r)=>{var t=(0,n.useStyleConfig)("Heading",e),c=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}((0,a.Lr)(e),["className"]);return o.createElement(n.chakra.h2,l({ref:r,className:(0,i.cx)("chakra-heading",e.className)},c,{__css:t}))}));i.__DEV__&&(c.displayName="Heading")},9444:function(e,r,t){"use strict";t.d(r,{r:function(){return c}});var n=t(1180),a=t(5284),i=t(4686),o=t(7294);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var c=(0,n.forwardRef)(((e,r)=>{var t=(0,n.useStyleConfig)("Link",e),c=(0,a.Lr)(e),{className:s,isExternal:u}=c,d=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(c,["className","isExternal"]);return o.createElement(n.chakra.a,l({target:u?"_blank":void 0,rel:u?"noopener noreferrer":void 0,ref:r,className:(0,i.cx)("chakra-link",s)},d,{__css:t}))}));i.__DEV__&&(c.displayName="Link")},3762:function(e,r,t){"use strict";t.d(r,{aV:function(){return d},HC:function(){return p},DE:function(){return v}});var n=t(58),a=t(1180),i=t(5284),o=t(4686),l=t(1464),c=t(7294);function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function u(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}var d=(0,a.forwardRef)(((e,r)=>{var t=(0,a.useMultiStyleConfig)("List",e),n=(0,i.Lr)(e),{children:o,styleType:d="none",stylePosition:f,spacing:h}=n,p=u(n,["children","styleType","stylePosition","spacing"]),v=(0,l.getValidChildren)(o),m=h?{"& > *:not(style) ~ *:not(style)":{mt:h}}:{};return c.createElement(a.StylesProvider,{value:t},c.createElement(a.chakra.ul,s({ref:r,listStyleType:d,listStylePosition:f,role:"list",__css:s({},t.container,m)},p),v))}));o.__DEV__&&(d.displayName="List");var f=(0,a.forwardRef)(((e,r)=>{var t=u(e,["as"]);return c.createElement(d,s({ref:r,as:"ol",styleType:"decimal",marginLeft:"1em"},t))}));o.__DEV__&&(f.displayName="OrderedList");var h=(0,a.forwardRef)(((e,r)=>{var t=u(e,["as"]);return c.createElement(d,s({ref:r,as:"ul",styleType:"initial",marginLeft:"1em"},t))}));o.__DEV__&&(h.displayName="UnorderedList");var p=(0,a.forwardRef)(((e,r)=>{var t=(0,a.useStyles)();return c.createElement(a.chakra.li,s({ref:r},e,{__css:t.item}))}));o.__DEV__&&(p.displayName="ListItem");var v=(0,a.forwardRef)(((e,r)=>{var t=(0,a.useStyles)();return c.createElement(n.J,s({ref:r,role:"presentation"},e,{__css:t.icon}))}));o.__DEV__&&(v.displayName="ListIcon")},6034:function(e,r,t){"use strict";t.d(r,{Kq:function(){return u}});var n=t(1180),a=t(4686),i=t(1464),o=t(7294),l="& > *:not(style) ~ *:not(style)";function c(){return(c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var s=e=>o.createElement(n.chakra.div,c({className:"chakra-stack__item"},e,{__css:c({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)})),u=(0,n.forwardRef)(((e,r)=>{var{isInline:t,direction:u,align:d,justify:f,spacing:h="0.5rem",wrap:p,children:v,divider:m,className:y,shouldWrapChildren:_}=e,g=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"]),b=t?"row":null!=u?u:"column",k=o.useMemo((()=>function(e){var{spacing:r,direction:t}=e,n={column:{marginTop:r,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:r},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:r,marginStart:0},"row-reverse":{marginTop:0,marginEnd:r,marginBottom:0,marginStart:0}};return{flexDirection:t,[l]:(0,a.mapResponsive)(t,(e=>n[e]))}}({direction:b,spacing:h})),[b,h]),x=o.useMemo((()=>function(e){var{spacing:r,direction:t}=e,n={column:{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,a.mapResponsive)(t,(e=>n[e]))}}({spacing:h,direction:b})),[h,b]),w=!!m,E=!_&&!w,C=(0,i.getValidChildren)(v),O=E?C:C.map(((e,r)=>{var t=r+1===C.length,n=_?o.createElement(s,{key:r},e):e;if(!w)return n;var a=t?null:o.cloneElement(m,{__css:x});return o.createElement(o.Fragment,{key:r},n,a)})),N=(0,a.cx)("chakra-stack",y);return o.createElement(n.chakra.div,c({ref:r,display:"flex",alignItems:d,justifyContent:f,flexDirection:k.flexDirection,flexWrap:p,className:N,__css:w?{}:{[l]:k[l]}},g),O)}));a.__DEV__&&(u.displayName="Stack");var d=(0,n.forwardRef)(((e,r)=>o.createElement(u,c({align:"center"},e,{direction:"row",ref:r}))));a.__DEV__&&(d.displayName="HStack");var f=(0,n.forwardRef)(((e,r)=>o.createElement(u,c({align:"center"},e,{direction:"column",ref:r}))));a.__DEV__&&(f.displayName="VStack")},4115:function(e,r,t){"use strict";t.d(r,{x:function(){return c}});var n=t(1180),a=t(5284),i=t(4686),o=t(7294);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var c=(0,n.forwardRef)(((e,r)=>{var t=(0,n.useStyleConfig)("Text",e),c=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}((0,a.Lr)(e),["className","align","decoration","casing"]),s=(0,i.filterUndefined)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return o.createElement(n.chakra.p,l({ref:r,className:(0,i.cx)("chakra-text",e.className)},s,c,{__css:t}))}));i.__DEV__&&(c.displayName="Text")},4255:function(e,r,t){"use strict";t.d(r,{W:function(){return a}});var n=t(7294);function a(e){return n.Children.toArray(e).filter((e=>n.isValidElement(e)))}},9561:function(e,r,t){"use strict";t.d(r,{y:function(){return i}});var n=t(4686),a=t(3935);function i(e){return r=>{var t=a.flushSync;(0,n.isFunction)(t)?t((()=>{e(r)})):e(r)}}},1464:function(e,r,t){"use strict";t.d(r,{withFlushSync:function(){return a.y},getValidChildren:function(){return i.W}});var n=t(8117);t.o(n,"getValidChildren")&&t.d(r,{getValidChildren:function(){return n.getValidChildren}}),t.o(n,"withFlushSync")&&t.d(r,{withFlushSync:function(){return n.withFlushSync}});var a=t(9561),i=t(4255)},8117:function(){},980:function(e,r,t){"use strict";t.d(r,{Switch:function(){return a.r}});t(2300);var n=t(4806);t.o(n,"Switch")&&t.d(r,{Switch:function(){return n.Switch}}),t.o(n,"useColorMode")&&t.d(r,{useColorMode:function(){return n.useColorMode}});var a=t(2342),i=t(1180);t.o(i,"useColorMode")&&t.d(r,{useColorMode:function(){return i.useColorMode}});var o=t(886);t.o(o,"useColorMode")&&t.d(r,{useColorMode:function(){return o.useColorMode}})},2342:function(e,r,t){"use strict";t.d(r,{r:function(){return g}});var n=t(7294),a=t(4686),i=a.isBrowser?n.useLayoutEffect:n.useEffect;function o(e){var r=n.useRef(e);return i((()=>{r.current=e})),n.useCallback((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return null==r.current?void 0:r.current(...t)}),[])}function l(e){void 0===e&&(e=!1);var[r,t]=(0,n.useState)(e);return[r,{on:(0,n.useCallback)((()=>{t(!0)}),[]),off:(0,n.useCallback)((()=>{t(!1)}),[]),toggle:(0,n.useCallback)((()=>{t((e=>!e))}),[])}]}var c=t(658),s=t(1464);function u(e,r){if(null!=e)if((0,a.isFunction)(e))e(r);else try{e.current=r}catch(t){throw new Error("Cannot assign value '"+r+"' to ref '"+e+"'")}}function d(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return e=>{r.forEach((r=>u(r,e)))}}var f=t(5415);function h(){return(h=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function p(e){void 0===e&&(e={});var{defaultIsChecked:r,defaultChecked:t=r,isChecked:u,isFocusable:p,isDisabled:m,isReadOnly:y,isRequired:_,onChange:g,isIndeterminate:b,isInvalid:k,name:x,value:w,id:E,onBlur:C,onFocus:O,"aria-label":N,"aria-labelledby":S,"aria-invalid":j,"aria-describedby":D}=e,A=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["defaultIsChecked","defaultChecked","isChecked","isFocusable","isDisabled","isReadOnly","isRequired","onChange","isIndeterminate","isInvalid","name","value","id","onBlur","onFocus","aria-label","aria-labelledby","aria-invalid","aria-describedby"]),L=o(g),R=o(C),V=o(O),[M,I]=l(),[B,P]=l(),[F,T]=l(),W=(0,n.useRef)(null),[H,z]=(0,n.useState)(!0),[K,U]=(0,n.useState)(!!t),[q,Z]=function(e,r){var t=void 0!==e;return[t,t&&"undefined"!==typeof e?e:r]}(u,K);(0,c.ZK)({condition:!!r,message:'The "defaultIsChecked" prop has been deprecated and will be removed in a future version. Please use the "defaultChecked" prop instead, which mirrors default React checkbox behavior.'});var G=(0,n.useCallback)((e=>{y||m?e.preventDefault():(q||U(Z?e.target.checked:!!b||e.target.checked),null==L||L(e))}),[y,m,Z,q,b,L]);i((()=>{W.current&&(W.current.indeterminate=Boolean(b))}),[b]);var J=m&&!p,X=(0,n.useCallback)((e=>{" "===e.key&&T.on()}),[T]),Q=(0,n.useCallback)((e=>{" "===e.key&&T.off()}),[T]);i((()=>{W.current&&(W.current.checked!==Z&&U(W.current.checked))}),[W.current]);var Y=(0,n.useCallback)((function(e,r){void 0===e&&(e={}),void 0===r&&(r=null);return h({},e,{ref:r,"data-active":(0,a.dataAttr)(F),"data-hover":(0,a.dataAttr)(B),"data-checked":(0,a.dataAttr)(Z),"data-focus":(0,a.dataAttr)(M),"data-indeterminate":(0,a.dataAttr)(b),"data-disabled":(0,a.dataAttr)(m),"data-invalid":(0,a.dataAttr)(k),"data-readonly":(0,a.dataAttr)(y),"aria-hidden":!0,onMouseDown:(0,c.v0)(e.onMouseDown,(e=>{e.preventDefault(),T.on()})),onMouseUp:(0,c.v0)(e.onMouseUp,T.off),onMouseEnter:(0,c.v0)(e.onMouseEnter,P.on),onMouseLeave:(0,c.v0)(e.onMouseLeave,P.off)})}),[F,Z,m,M,B,b,k,y,T,P.off,P.on]),$=(0,n.useCallback)((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),h({},A,e,{ref:d(r,(e=>{e&&z("LABEL"===e.tagName)})),onClick:(0,c.v0)(e.onClick,(()=>{var e;H||(null==(e=W.current)||e.click(),(0,a.focus)(W.current,{nextTick:!0}))})),"data-disabled":(0,a.dataAttr)(m)})}),[A,m,H]),ee=(0,n.useCallback)((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),h({},e,{ref:d(W,r),type:"checkbox",name:x,value:w,id:E,onChange:(0,c.v0)(e.onChange,G),onBlur:(0,c.v0)(e.onBlur,I.off,R),onFocus:(0,c.v0)(e.onFocus,(0,s.withFlushSync)(I.on),V),onKeyDown:(0,c.v0)(e.onKeyDown,X),onKeyUp:(0,c.v0)(e.onKeyUp,Q),required:_,checked:Z,disabled:J,readOnly:y,"aria-label":N,"aria-labelledby":S,"aria-invalid":j?Boolean(j):k,"aria-describedby":D,"aria-disabled":m,style:f.NL})}),[x,w,E,G,I.off,I.on,R,V,X,Q,_,Z,J,y,N,S,j,k,D,m]),re=(0,n.useCallback)((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),h({},e,{ref:r,onMouseDown:(0,c.v0)(e.onMouseDown,v),onTouchStart:(0,c.v0)(e.onTouchStart,v),"data-disabled":(0,a.dataAttr)(m),"data-checked":(0,a.dataAttr)(Z),"data-invalid":(0,a.dataAttr)(k)})}),[Z,m,k]);return{state:{isInvalid:k,isFocused:M,isChecked:Z,isActive:F,isHovered:B,isIndeterminate:b,isDisabled:m,isReadOnly:y,isRequired:_},getRootProps:$,getCheckboxProps:Y,getInputProps:ee,getLabelProps:re,htmlProps:A}}function v(e){e.preventDefault(),e.stopPropagation()}var m=t(1180),y=t(5284);function _(){return(_=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var g=(0,m.forwardRef)(((e,r)=>{var t=(0,m.useMultiStyleConfig)("Switch",e),i=(0,y.Lr)(e),{spacing:o="0.5rem",children:l}=i,c=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(i,["spacing","children"]),{state:s,getInputProps:u,getCheckboxProps:d,getRootProps:f,getLabelProps:h}=p(c),v=n.useMemo((()=>_({display:"inline-block",verticalAlign:"middle",lineHeight:"normal"},t.container)),[t.container]),g=n.useMemo((()=>_({display:"inline-flex",flexShrink:0,justifyContent:"flex-start",boxSizing:"content-box",cursor:"pointer"},t.track)),[t.track]),b=n.useMemo((()=>_({userSelect:"none",marginStart:o},t.label)),[o,t.label]);return n.createElement(m.chakra.label,_({},f(),{className:(0,a.cx)("chakra-switch",e.className),__css:v}),n.createElement("input",_({className:"chakra-switch__input"},u({},r))),n.createElement(m.chakra.span,_({},d(),{className:"chakra-switch__track",__css:g}),n.createElement(m.chakra.span,{__css:t.thumb,className:"chakra-switch__thumb","data-checked":(0,a.dataAttr)(s.isChecked),"data-hover":(0,a.dataAttr)(s.isHovered)})),l&&n.createElement(m.chakra.span,_({className:"chakra-switch__label"},h(),{__css:b}),l))}));a.__DEV__&&(g.displayName="Switch")},886:function(e,r,t){"use strict";var n=t(7657);t.o(n,"useColorMode")&&t.d(r,{useColorMode:function(){return n.useColorMode}})},7657:function(){},5415:function(e,r,t){"use strict";t.d(r,{NL:function(){return i},TX:function(){return o}});var n=t(1180),a=t(4686),i={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},o=(0,n.chakra)("span",{baseStyle:i});a.__DEV__&&(o.displayName="VisuallyHidden");var l=(0,n.chakra)("input",{baseStyle:i});a.__DEV__&&(l.displayName="VisuallyHiddenInput")}}]);