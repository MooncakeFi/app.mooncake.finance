"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[588],{25002:function(e,t,r){r.d(t,{l:function(){return s}});var n=r(49501),a=r(25169),i=r(68861),o=r(85893),s=function(e){var t=e.symbol,r=e.currentMarket;return(0,o.jsx)(n.cC,{id:"Borrowing is disabled due to an Mooncake Finance community decision. <0>More details</0>",components:{0:(0,o.jsx)(i.rU,{href:(0,a.E)(t,r),sx:{textDecoration:"underline"}})}})}},25169:function(e,t,r){r.d(t,{E:function(){return u},Q:function(){return x}});var n=r(49501),a=r(58771),i=r(61953),o=r(81645),s=r(25298),l=r(97563),c=r(68861),d=r(85893),u=function(e,t){return t&&"proto_harmony_v3"===t?"https://snapshot.org/#/aave.eth/proposal/0x81a78109941e5e0ac6cb5ebf82597c839c20ad6821a8c3ff063dba39032533d4":t&&"proto_fantom_v3"===t?"https://snapshot.org/#/aave.eth/proposal/0xeefcd76e523391a14cfd0a79b531ea0a3faf0eb4a058e255fac13a2d224cc647":e&&s.$e[e.toUpperCase()+t]?s.$e[e.toUpperCase()+t]:"https://app.aave.com/governance"},x=function(e){var t=e.symbol,r=e.currentMarket;return(0,d.jsx)(l.a,{tooltipContent:(0,d.jsx)(i.Z,{children:(0,d.jsx)(n.cC,{id:"This asset is frozen due to an Mooncake Finance Protocol Governance decision. <0>More details</0>",components:{0:(0,d.jsx)(c.rU,{href:u(t,r),sx:{textDecoration:"underline"}})}})}),children:(0,d.jsx)(o.Z,{sx:{fontSize:"20px",color:"error.main",ml:2},children:(0,d.jsx)(a.Z,{})})})}},7775:function(e,t,r){r.d(t,{s:function(){return d}});var n=r(59499),a=r(36864),i=r(49501),o=r(58527),s=r(85893);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t=(0,a.Z)({},e);return(0,s.jsx)(o.G,c(c({},t),{},{children:(0,s.jsx)(i.cC,{id:"Stable interest rate will <0>stay the same</0> for the duration of your loan. Recommended for long-term loan periods and for users who prefer predictability.",components:{0:(0,s.jsx)("b",{})}})}))}},14379:function(e,t,r){r.d(t,{B:function(){return d}});var n=r(59499),a=r(36864),i=r(49501),o=r(58527),s=r(85893);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t=(0,a.Z)({},e);return(0,s.jsx)(o.G,c(c({},t),{},{children:(0,s.jsx)(i.cC,{id:"Variable interest rate will <0>fluctuate</0> based on the market conditions. Recommended for short-term positions.",components:{0:(0,s.jsx)("b",{})}})}))}},98588:function(e,t,r){r.r(t),r.d(t,{ReserveConfiguration:function(){return Ke}});var n=r(49501),a=r(84563),i=r(61953),o=r(44373),s=r(75084),l=r(81645),c=r(41024),d=r(68861),u=r(69331),x=r(25002),p=r(43629),m=r(46930),h=r(50029),v=r(87794),b=r.n(v),f=r(27484),j=r.n(f),y=r(67294),g=r(55554),w=r(87385),Z=[g.xI.OneMonth,g.xI.SixMonths,g.xI.OneYear],C=function(){var e=(0,h.Z)(b().mark((function e(t,r,n){var a,i,o,s,l,c;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=O(r),i=a.from,o=a.resolutionInHours,e.prev=1,s="".concat(n,"?reserveId=").concat(t,"&from=").concat(i,"&resolutionInHours=").concat(o),e.next=5,fetch(s);case 5:return l=e.sent,e.next=8,l.json();case 8:return c=e.sent,e.abrupt("return",c);case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",[]);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,r,n){return e.apply(this,arguments)}}(),O=function(e){var t=j()().unix();switch(e){case g.xI.OneMonth:return{from:t=j()().subtract(30,"day").unix(),resolutionInHours:6};case g.xI.SixMonths:return{from:t=j()().subtract(6,"month").unix(),resolutionInHours:24};case g.xI.OneYear:return{from:t=j()().subtract(1,"year").unix(),resolutionInHours:24};default:return{from:t,resolutionInHours:6}}},k=["0xd46ba6d942050d489dbd938a2c909a5d5039a1610xb53c1a33016b2dc2ff3653530bff1848a515c8c5","0x956f47f50a910163d8bf957cf5846d573e7f87ca0xb53c1a33016b2dc2ff3653530bff1848a515c8c5"];var D=r(77228),R=r(57609),S=r(1279),B=r(29630),P=r(28228),L=r(12349),E=r(7775),I=r(14379),U=r(19547),N=r(58527),T=r(90116),M=r(90149),A=r(78023),F=r(59499),_=r(62097),z=r(61225),W=r(29223),q=r(41788),V=r(65165),Y=r(32594),H=r(8534),G=r(99599),$=r(22451),K=r(86368),X=r(14645),J=r(98649),Q=r(89163),ee=r(4370),te=r(93382),re=r(20305),ne=r(909),ae=r(9089),ie=r(18776),oe=r(52780),se=r(85893);function le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?le(Object(r),!0).forEach((function(t){(0,F.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):le(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var de=function(e,t){if("1m"===t){var r=(0,oe.i$)("%b %d, %H:%M UTC%Z")(e),n=r.toString().split("UTC")[1].split("")[0],a=r.toString().split(n),i=a[1].split("").slice(0,2).join(""),o=a[1].split("").slice(2,4).join(""),s="".concat(i,":").concat(o);return"".concat(a[0]).concat(n).concat(s)}return(0,oe.i$)("%b %d, %Y")(e)},ue=function(e){return new Date(e.date)},xe=(0,ne.Z)((function(e){return new Date(e.date)})).left,pe=function(e,t){return 100*e[t]},me=(0,ee.Z)((function(e){var t=e.width,r=e.height,n=e.margin,a=void 0===n?{top:20,right:10,bottom:20,left:40}:n,o=e.showTooltip,s=e.hideTooltip,l=e.tooltipData,c=e.tooltipLeft,d=void 0===c?0:c,u=e.data,x=e.fields,p=e.selectedTimeRange;if(t<10)return null;var m=(0,_.Z)(),h=(0,z.Z)(m.breakpoints.down("xsm")),v="light"===m.palette.mode?"#383D511F":"#a5a8b647",b=ce(ce({},te.j),{},{padding:"8px 12px",boxShadow:"0px 0px 2px rgba(0, 0, 0, 0.2), 0px 2px 10px rgba(0, 0, 0, 0.1)",borderRadius:"4px",fontSize:"12px",lineHeight:"16px",letterSpacing:"0.15px"}),f=ce(ce({},b),{},{background:m.palette.background.default}),j=t-a.left-a.right,g=r-a.top-a.bottom,w="6m"!==p||h?3:4,Z=(0,y.useMemo)((function(){return(0,$.Z)({range:[0,j],domain:(0,ae.Z)(u,ue)})}),[j,u]),C=(0,y.useMemo)((function(){var e=Math.max.apply(Math,(0,T.Z)(x.map((function(e){return(0,ie.Z)(u,(function(t){return pe(t,e.name)}))}))));return(0,K.Z)({range:[g,0],domain:[0,1.1*(e||0)],nice:!0})}),[g,u,x]),O=(0,y.useCallback)((function(e){var t=((0,Y.Z)(e)||{x:0}).x-a.left,r=Z.invert(t),n=xe(u,r,1),i=u[n-1],s=u[n],l=i;s&&ue(s)&&(l=r.valueOf()-ue(i).valueOf()>ue(s).valueOf()-r.valueOf()?s:i),o({tooltipData:l,tooltipLeft:t})}),[o,Z,u,a]);return(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)("svg",{width:t,height:r,children:(0,se.jsxs)(G.Z,{left:a.left,top:a.top,children:[(0,se.jsx)(H.Z,{scale:C,width:j,strokeDasharray:"3,3",stroke:m.palette.divider,pointerEvents:"none",numTicks:3}),x.map((function(e){return(0,se.jsx)(X.Z,{stroke:e.color,strokeWidth:2,data:u,x:function(e){var t;return null!==(t=Z(ue(e)))&&void 0!==t?t:0},y:function(t){var r;return null!==(r=C(pe(t,e.name)))&&void 0!==r?r:0},curve:V.Z},e.name)})),(0,se.jsx)(W.Z,{top:g-a.bottom/4,scale:Z,strokeWidth:0,numTicks:w,tickStroke:m.palette.text.secondary,tickLabelProps:function(){return{fill:m.palette.text.muted,fontSize:10,textAnchor:"middle",dy:4}}}),(0,se.jsx)(q.Z,{left:0,scale:C,strokeWidth:0,numTicks:3,tickFormat:function(e){return"".concat(e,"%")},tickLabelProps:function(){return{fill:m.palette.text.muted,fontSize:10,dx:10-a.left}}}),(0,se.jsx)(J.Z,{width:j,height:g,fill:"transparent",onTouchStart:O,onTouchMove:O,onMouseMove:O,onMouseLeave:function(){return s()}}),l&&(0,se.jsxs)("g",{children:[(0,se.jsx)(Q.Z,{from:{x:d,y:a.top},to:{x:d,y:g},stroke:v,strokeWidth:1,pointerEvents:"none",strokeDasharray:"5,2"}),x.map((function(e){return(0,se.jsxs)(y.Fragment,{children:[(0,se.jsx)("circle",{cx:d,cy:C(pe(l,e.name))+1,r:4,fillOpacity:.1,strokeOpacity:.1,strokeWidth:2,pointerEvents:"none"}),(0,se.jsx)("circle",{cx:d,cy:C(pe(l,e.name)),r:4,fill:v,stroke:"white",strokeWidth:2,pointerEvents:"none"})]},e.name)}))]})]})}),l&&(0,se.jsx)("div",{children:(0,se.jsxs)(re.Z,{top:20,left:d+40,style:"light"===m.palette.mode?b:f,children:[(0,se.jsx)(B.Z,{variant:"secondary12",color:"text.secondary",sx:{mb:2,mr:2,fontWeight:400},children:de(ue(l),p)}),x.map((function(e){return(0,se.jsxs)(i.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,se.jsx)(B.Z,{variant:"caption",color:"text.secondary",sx:{mr:2},children:e.text}),(0,se.jsxs)(B.Z,{variant:"main12",color:"text.primary",children:[pe(l,e.name).toFixed(2),"%"]})]},e.name)}))]})})]})}));function he(e){var t=e.labels,r=void 0===t?[{text:"test",color:"#000"},{text:"bla",color:"#ff0"}]:t;return(0,se.jsx)(i.Z,{children:r.map((function(e){return(0,se.jsxs)(i.Z,{sx:{display:"inline-flex",alignItems:"center",mr:6},children:[(0,se.jsx)(i.Z,{sx:{width:6,height:6,backgroundColor:e.color,mr:"11px",borderRadius:"50%"}}),(0,se.jsx)(B.Z,{variant:"description",color:"text.secondary",children:e.text})]},e.text)}))})}var ve=function(e){var t=e.disabled,r=e.timeRange,n=e.onTimeRangeChanged;return(0,se.jsx)(g.W,{disabled:t,timeRanges:Z,selectedTimeRange:r,onTimeRangeChanged:n})},be=function(e){var t=e.graphKey,r=e.reserve,a=e.currentMarketData,o=(0,y.useState)(g.xI.OneMonth),l=o[0],c=o[1],d="";r&&(d=a.v3?"".concat(r.underlyingAsset).concat(a.addresses.LENDING_POOL_ADDRESS_PROVIDER).concat(a.chainId):"".concat(r.underlyingAsset).concat(a.addresses.LENDING_POOL_ADDRESS_PROVIDER));var u=function(e,t){var r=(0,m.f)().currentNetworkConfig,n=(0,y.useState)(!0),a=n[0],i=n[1],o=(0,y.useState)(!1),s=o[0],l=o[1],c=(0,y.useState)([]),d=c[0],u=c[1],x=null===r||void 0===r?void 0:r.ratesHistoryApiUrl,p=(0,y.useCallback)((function(){if(i(!0),l(!1),u([]),e&&x&&!k.includes(e)){var r=(0,w.BZ)(C(e,t,x));return r.promise.then((function(e){u(e.map((function(e){return{date:new Date(e.x.year,e.x.month,e.x.date,e.x.hours).getTime(),liquidityRate:e.liquidityRate_avg,variableBorrowRate:e.variableBorrowRate_avg,utilizationRate:e.utilizationRate_avg,stableBorrowRate:e.stableBorrowRate_avg}}))),i(!1)})).catch((function(e){console.error("useReservesHistory(): Failed to fetch historical reserve data.",e),l(!0),i(!1)})),r.cancel}return i(!1),function(){return null}}),[e,t,x]);return(0,y.useEffect)((function(){var e=p();return function(){return e()}}),[p]),{loading:a,data:d,error:s||k.includes(e)||!a&&0===d.length,refetch:p}}(d,l),x=u.data,p=u.loading,h=u.error,v=u.refetch,b=[].concat((0,T.Z)(r.stableBorrowRateEnabled?[{name:"stableBorrowRate",color:"#E7C6DF",text:"Borrow APR, stable"}]:[]),[{name:"variableBorrowRate",color:"#B6509E",text:"Borrow APR, variable"}]),f="supply"===t?[{name:"liquidityRate",color:"#2EBAC6",text:"Supply APR"}]:b,j=(0,se.jsxs)(i.Z,{sx:{height:158.5,width:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[(0,se.jsx)(M.Z,{size:20,sx:{mb:2,opacity:.5}}),(0,se.jsx)(B.Z,{variant:"subheader1",color:"text.muted",children:(0,se.jsx)(n.cC,{id:"Loading data..."})})]}),Z=(0,se.jsxs)(i.Z,{sx:{height:158.5,width:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[(0,se.jsx)(B.Z,{variant:"subheader1",children:(0,se.jsx)(n.cC,{id:"Something went wrong"})}),(0,se.jsx)(B.Z,{variant:"caption",sx:{mb:3},children:(0,se.jsx)(n.cC,{id:"Data couldn't be fetched, please reload graph."})}),(0,se.jsx)(s.Z,{variant:"outlined",color:"primary",onClick:v,children:(0,se.jsx)(n.cC,{id:"Reload"})})]});return(0,se.jsxs)(i.Z,{sx:{mt:10,mb:4},children:[(0,se.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",mb:4},children:[(0,se.jsx)(he,{labels:f}),(0,se.jsx)(ve,{disabled:p||h,timeRange:l,onTimeRangeChanged:c})]}),p&&j,h&&Z,!p&&!h&&x.length>0&&(0,se.jsx)(A.Z,{children:function(e){var t=e.width;return(0,se.jsx)(me,{width:t,height:155,data:x,fields:f,selectedTimeRange:l})}})]})},fe=r(56365),je=r(4730),ye=["collectorLink"];function ge(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function we(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(r),!0).forEach((function(t){(0,F.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ge(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ze=function(e){var t=e.collectorLink,r=(0,je.Z)(e,ye);return(0,se.jsx)(N.G,we(we({},r),{},{children:(0,se.jsx)(n.cC,{id:"Reserve factor is a percentage of interest which goes to a {0} that is controlled by Mooncake Finance governance to promote ecosystem growth.",values:{0:t?(0,se.jsx)(d.rU,{href:t,children:"collector contract"}):"collector contract"}})}))},Ce=r(40795),Oe=function(e){var t=e.collectorContract,r=e.explorerLinkBuilder,a=e.reserveFactor,o=e.reserveName,s=e.reserveAsset,u=(0,D.Yh)((function(e){return e.trackEvent}));return(0,se.jsxs)(i.Z,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"space-between"},children:[(0,se.jsx)(Ce.N,{title:(0,se.jsx)(Ze,{event:{eventName:R.vh.TOOL_TIP,eventParams:{tooltip:"Reserve factor",asset:s,assetName:o}},text:(0,se.jsx)(n.cC,{id:"Reserve factor"}),variant:"description",collectorLink:t?r({address:t}):void 0},"res_factor"),children:(0,se.jsx)(c.B,{value:a,percent:!0,variant:"secondary14",visibleDecimals:2})}),(0,se.jsx)(Ce.N,{title:(0,se.jsx)(B.Z,{variant:"description",children:(0,se.jsx)(n.cC,{id:"Collector Contract"})}),children:(0,se.jsx)(d.rU,{onClick:function(){u(R.vh.EXTERNAL_LINK,{Link:"Collector Contract "+o,asset:s,assetName:o})},href:r({address:t}),sx:{textDecoration:"none"},children:(0,se.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,se.jsx)(B.Z,{variant:"description",color:"text.secondary",children:(0,se.jsx)(n.cC,{id:"View contract"})}),(0,se.jsx)(l.Z,{sx:{ml:1,fontSize:14},children:(0,se.jsx)(fe.Z,{})})]})})}),(0,se.jsx)(i.Z,{sx:{flex:"0 32%",marginBottom:"2%",height:{md:"70px",lg:"60px"},maxWidth:"32%"}})]})},ke=r(59012),De=function(e){var t=e.reserve,r=e.currentMarketData,a=e.currentNetworkConfig,o=e.renderCharts,s=e.showBorrowCapStatus,l=e.borrowCap;return(0,se.jsxs)(i.Z,{sx:{flexGrow:1,minWidth:0,maxWidth:"100%",width:"100%"},children:[(0,se.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:[s?(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)(P.t,{value:l.percentUsed,tooltipContent:(0,se.jsx)(se.Fragment,{children:(0,se.jsx)(n.cC,{id:"Maximum amount available to supply is <0/> {0} (<1/>).",values:{0:t.symbol},components:{0:(0,se.jsx)(c.B,{value:(0,S.hE)(t.borrowCap).toNumber()-(0,S.hE)(t.totalDebt).toNumber(),variant:"secondary12"}),1:(0,se.jsx)(c.B,{value:(0,S.hE)(t.borrowCapUSD).toNumber()-(0,S.hE)(t.totalDebtUSD).toNumber(),variant:"secondary12",symbol:"USD"})}})})}),(0,se.jsxs)(ke.Lv,{title:(0,se.jsxs)(i.Z,{display:"flex",alignItems:"center",children:[(0,se.jsx)(n.cC,{id:"Total borrowed"}),(0,se.jsx)(N.G,{event:{eventName:R.vh.TOOL_TIP,eventParams:{tooltip:"Total borrowed",asset:t.underlyingAsset,assetName:t.name}},children:(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)(n.cC,{id:"Borrowing of this asset is limited to a certain amount to minimize liquidity pool insolvency."})," ",(0,se.jsx)(d.rU,{href:"https://docs.aave.com/developers/whats-new/supply-borrow-caps",underline:"always",children:(0,se.jsx)(n.cC,{id:"Learn more"})})]})})]}),children:[(0,se.jsxs)(i.Z,{children:[(0,se.jsx)(c.B,{value:t.totalDebt,variant:"main16"}),(0,se.jsx)(B.Z,{component:"span",color:"text.primary",variant:"secondary16",sx:{display:"inline-block",mx:1},children:(0,se.jsx)(n.cC,{id:"of"})}),(0,se.jsx)(c.B,{value:t.borrowCap,variant:"main16"})]}),(0,se.jsxs)(i.Z,{children:[(0,se.jsx)(U.i,{value:t.totalDebtUSD}),(0,se.jsx)(B.Z,{component:"span",color:"text.primary",variant:"secondary16",sx:{display:"inline-block",mx:1},children:(0,se.jsx)(n.cC,{id:"of"})}),(0,se.jsx)(U.i,{value:t.borrowCapUSD})]})]})]}):(0,se.jsxs)(ke.Lv,{title:(0,se.jsx)(i.Z,{display:"flex",alignItems:"center",children:(0,se.jsx)(n.cC,{id:"Total borrowed"})}),children:[(0,se.jsx)(c.B,{value:t.totalDebt,variant:"main16"}),(0,se.jsx)(U.i,{value:t.totalDebtUSD})]}),(0,se.jsxs)(ke.Lv,{title:(0,se.jsx)(I.B,{event:{eventName:R.vh.TOOL_TIP,eventParams:{tooltip:"APY, variable",asset:t.underlyingAsset,assetName:t.name}},text:(0,se.jsx)(n.cC,{id:"APY, variable"}),variant:"description"},"APY_res_variable_type"),children:[(0,se.jsx)(c.B,{value:t.variableBorrowAPY,percent:!0,variant:"main16"}),(0,se.jsx)(L.M,{symbol:t.symbol,incentives:t.vIncentivesData,displayBlank:!0})]}),t.stableBorrowRateEnabled&&(0,se.jsxs)(ke.Lv,{title:(0,se.jsx)(E.s,{event:{eventName:R.vh.TOOL_TIP,eventParams:{tooltip:"APY, stable",asset:t.underlyingAsset,assetName:t.name}},text:(0,se.jsx)(n.cC,{id:"APY, stable"}),variant:"description"},"APY_res_stable_type"),children:[(0,se.jsx)(c.B,{value:t.stableBorrowAPY,percent:!0,variant:"main16"}),(0,se.jsx)(L.M,{symbol:t.symbol,incentives:t.sIncentivesData,displayBlank:!0})]}),t.borrowCapUSD&&"0"!==t.borrowCapUSD&&(0,se.jsxs)(ke.Lv,{title:(0,se.jsx)(n.cC,{id:"Borrow cap"}),children:[(0,se.jsx)(c.B,{value:t.borrowCap,variant:"main16"}),(0,se.jsx)(U.i,{value:t.borrowCapUSD})]})]}),o&&(0,se.jsx)(be,{graphKey:"borrow",reserve:t,currentMarketData:r}),(0,se.jsx)(i.Z,{sx:{display:"inline-flex",alignItems:"center",pt:"42px",pb:"12px"},paddingTop:"42px",children:(0,se.jsx)(B.Z,{variant:"subheader1",color:"text.main",children:(0,se.jsx)(n.cC,{id:"Collector Info"})})}),r.addresses.COLLECTOR&&(0,se.jsx)(Oe,{collectorContract:r.addresses.COLLECTOR,explorerLinkBuilder:a.explorerLinkBuilder,reserveFactor:t.reserveFactor,reserveName:t.name,reserveAsset:t.underlyingAsset})]})},Re=r(59148),Se=r(32024),Be=r(70794);function Pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(r),!0).forEach((function(t){(0,F.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ee=function(e){return e.utilization},Ie=(0,ne.Z)((function(e){return e.utilization})).center,Ue=function(e){return 100*e.variableRate},Ne=function(e){return 100*e.stableRate},Te={stableBorrowRate:Ne,variableBorrowRate:Ue,utilizationRate:function(){return 38}};var Me=(0,ee.Z)((function(e){var t=e.width,r=e.height,a=e.margin,o=void 0===a?{top:20,right:10,bottom:20,left:40}:a,s=e.showTooltip,l=e.hideTooltip,c=e.tooltipData,d=e.tooltipLeft,u=void 0===d?0:d,x=e.fields,p=e.reserve;if(t<10)return null;var m=(0,_.Z)(),h=(100*parseFloat(p.utilizationRate)).toFixed(2),v=(0,S.pV)(p.optimalUsageRatio,25).toNumber(),b="light"===m.palette.mode?"#383D511F":"#a5a8b647",f=Le(Le({},te.j),{},{padding:"8px 12px",boxShadow:"0px 0px 2px rgba(0, 0, 0, 0.2), 0px 2px 10px rgba(0, 0, 0, 0.1)",borderRadius:"4px",color:"#62677B",fontSize:"12px",lineHeight:"16px",letterSpacing:"0.15px"}),j=Le(Le({},f),{},{background:m.palette.background.default}),g=(0,y.useMemo)((function(){return function(e){for(var t=e.variableRateSlope1,r=e.variableRateSlope2,n=e.stableRateSlope1,a=e.stableRateSlope2,i=e.optimalUsageRatio,o=e.baseVariableBorrowRate,s=e.baseStableBorrowRate,l=[],c=(0,S.pV)(i,25).toNumber(),d=0;d<=200;d++){var u=.5*d;if(0===u)l.push({stableRate:0,variableRate:0,utilization:u});else if(u<c){var x=(0,S.pV)(new Be.O(s).plus((0,Re.e9)((0,Re._O)(n,(0,S.pV)(u,-25)),i)),27).toNumber(),p=(0,S.pV)(new Be.O(o).plus((0,Re.e9)((0,Re._O)(t,(0,S.pV)(u,-25)),i)),27).toNumber();l.push({stableRate:x,variableRate:p,utilization:u})}else{var m=(0,Re.e9)((0,S.pV)(u,-25).minus(i),Re.Hx.minus(i)),h=(0,S.pV)(new Be.O(s).plus(n).plus((0,Re._O)(a,m)),27).toNumber(),v=(0,S.pV)(new Be.O(o).plus(t).plus((0,Re._O)(r,m)),27).toNumber();l.push({stableRate:h,variableRate:v,utilization:u})}}return l}(p)}),[JSON.stringify(p)]),w=t-o.left-o.right,Z=r-o.top-o.bottom,C=(0,y.useMemo)((function(){return(0,K.Z)({range:[0,w],domain:[0,100],nice:!0})}),[w]),O=(0,y.useMemo)((function(){var e=p.stableBorrowRateEnabled?Math.max((0,ie.Z)(g,(function(e){return Ne(e)})),(0,ie.Z)(g,(function(e){return Ue(e)}))):(0,ie.Z)(g,(function(e){return Ue(e)}));return(0,K.Z)({range:[Z,0],domain:[0,1.1*(e||0)],nice:!0})}),[Z,g,p]),k=(0,y.useCallback)((function(e){var t=((0,Y.Z)(e)||{x:0}).x-o.left,r=C.invert(t),n=Ie(g,r,1),a=g[n-1],i=g[n],l=a;i&&Ee(i)&&(l=r.valueOf()-Ee(a).valueOf()>Ee(i).valueOf()-r.valueOf()?i:a),s({tooltipData:l,tooltipLeft:t})}),[s,C,g,o]),D=[{value:(0,S.pV)(p.optimalUsageRatio,27).multipliedBy(100).toNumber(),label:"optimal"},{value:new Be.O(p.utilizationRate).multipliedBy(100).toNumber(),label:"current"}],R=(0,z.Z)(m.breakpoints.down("lg"));return(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)("svg",{width:t,height:r,children:(0,se.jsxs)(G.Z,{left:o.left,top:o.top,children:[(0,se.jsx)(H.Z,{scale:O,width:w,strokeDasharray:"3,3",stroke:m.palette.divider,pointerEvents:"none",numTicks:3}),(0,se.jsx)(X.Z,{stroke:"#B6509E",strokeWidth:2,data:g,x:function(e){var t;return null!==(t=C(Ee(e)))&&void 0!==t?t:0},y:function(e){var t;return null!==(t=O(Ue(e)))&&void 0!==t?t:0},curve:V.Z}),p.stableBorrowRateEnabled&&(0,se.jsx)(X.Z,{stroke:"#E7C6DF",strokeWidth:2,data:g,x:function(e){var t;return null!==(t=C(Ee(e)))&&void 0!==t?t:0},y:function(e){var t;return null!==(t=O(Ne(e)))&&void 0!==t?t:0},curve:V.Z}),(0,se.jsx)(W.Z,{top:Z,scale:C,tickValues:[0,25,50,75,100],strokeWidth:0,tickStroke:m.palette.text.secondary,tickLabelProps:function(){return{fill:m.palette.text.muted,fontSize:10,textAnchor:"middle"}},tickFormat:function(e){return"".concat(e,"%")}}),(0,se.jsx)(q.Z,{scale:O,strokeWidth:0,tickLabelProps:function(){return{fill:m.palette.text.muted,fontSize:8,dx:10-o.left}},numTicks:2,tickFormat:function(e){return"".concat(e,"%")}}),(0,se.jsx)(J.Z,{width:w,height:Z,fill:"transparent",onTouchStart:k,onTouchMove:k,onMouseMove:k,onMouseLeave:function(){return l()}}),(0,se.jsx)(Q.Z,{from:{x:C(D[1].value),y:o.top+24},to:{x:C(D[1].value),y:Z},stroke:"#0062D2",strokeWidth:1,pointerEvents:"none",strokeDasharray:"5,2"}),(0,se.jsx)(Se.Z,{x:C(D[1].value),y:o.top+16,width:360,textAnchor:"middle",verticalAnchor:"middle",fontSize:"10px",fill:"#62677B",children:"Current ".concat(h,"%")}),(0,se.jsx)(Q.Z,{from:{x:C(D[0].value),y:o.top+8},to:{x:C(D[0].value),y:Z},stroke:"#0062D2",strokeWidth:1,pointerEvents:"none",strokeDasharray:"5,2"}),(0,se.jsx)(Se.Z,{x:C(D[0].value),y:o.top,width:360,textAnchor:"middle",verticalAnchor:"middle",fontSize:"10px",fill:"#62677B",children:"Optimal ".concat(v,"%")}),c&&(0,se.jsxs)("g",{children:[(0,se.jsx)(Q.Z,{from:{x:u,y:o.top},to:{x:u,y:Z},stroke:b,strokeWidth:1,pointerEvents:"none",strokeDasharray:"5,2"}),(0,se.jsx)("circle",{cx:u,cy:O(Ue(c))+1,r:4,fill:"black",fillOpacity:.1,stroke:"black",strokeOpacity:.1,strokeWidth:2,pointerEvents:"none"}),(0,se.jsx)("circle",{cx:u,cy:O(Ue(c)),r:4,fill:b,stroke:"white",strokeWidth:2,pointerEvents:"none"}),p.stableBorrowRateEnabled&&(0,se.jsxs)(y.Fragment,{children:[(0,se.jsx)("circle",{cx:u,cy:O(Ne(c))+1,r:4,fill:"black",fillOpacity:.1,stroke:"black",strokeOpacity:.1,strokeWidth:2,pointerEvents:"none"}),(0,se.jsx)("circle",{cx:u,cy:O(Ne(c)),r:4,fill:b,stroke:"white",strokeWidth:2,pointerEvents:"none"})]},"stable")]})]})}),c&&(0,se.jsx)("div",{children:(0,se.jsxs)(re.Z,{top:20,left:u+40,style:"light"===m.palette.mode?f:j,children:[(0,se.jsxs)(i.Z,{sx:{display:"flex",justifyContent:"space-between",mb:2},children:[(0,se.jsx)(B.Z,{variant:"main12",color:"primary",sx:{mr:2},children:(0,se.jsx)(n.cC,{id:"Utilization Rate"})}),(0,se.jsxs)(B.Z,{variant:"main12",color:"primary",children:[c.utilization,"%"]})]}),(0,se.jsx)(i.Z,{sx:{display:"flex",justifyContent:"space-between",width:R?"180px":"100%",mb:2},children:c.utilization/100*parseFloat(p.totalLiquidityUSD)-parseFloat(p.totalDebtUSD)>0?(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)(B.Z,{variant:"caption",color:"text.secondary",sx:{mr:2},children:(0,se.jsx)(n.cC,{id:"Borrow amount to reach {0}% utilization",values:{0:c.utilization}})}),(0,se.jsxs)(B.Z,{variant:"main12",color:"primary",children:["$",new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}).format(c.utilization/100*parseFloat(p.totalLiquidityUSD)-parseFloat(p.totalDebtUSD))]})]}):(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)(B.Z,{variant:"caption",color:"text.secondary",sx:{mr:2},children:(0,se.jsx)(n.cC,{id:"Repayment amount to reach {0}% utilization",values:{0:c.utilization}})}),(0,se.jsxs)(B.Z,{variant:"main12",color:"primary",children:["$",new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}).format(Math.abs(c.utilization/100*parseFloat(p.totalLiquidityUSD)-parseFloat(p.totalDebtUSD)))]})]})}),x.map((function(e){return(0,se.jsxs)(i.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,se.jsx)(B.Z,{variant:"caption",color:"text.secondary",sx:{mr:2},children:e.text}),(0,se.jsxs)(B.Z,{variant:"main12",color:"text.primary",children:[Te[e.name](c).toFixed(2),"%"]})]},e.name)}))]})})]})})),Ae=function(e){var t=e.reserve,r=[{name:"variableBorrowRate",text:"Borrow APR, variable",color:"#B6509E"}].concat((0,T.Z)(t.stableBorrowRateEnabled?[{name:"stableBorrowRate",text:"Borrow APR, stable",color:"#E7C6DF"}]:[]));return(0,se.jsxs)(i.Z,{sx:{mt:8,mb:10},children:[(0,se.jsx)(i.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",mb:4},children:(0,se.jsx)(he,{labels:[].concat((0,T.Z)(r),[{text:"Utilization Rate",color:"#0062D2"}])})}),(0,se.jsx)(A.Z,{children:function(e){var n=e.width;return(0,se.jsx)(Me,{width:n,height:155,fields:r,reserve:{baseStableBorrowRate:t.baseStableBorrowRate,baseVariableBorrowRate:t.baseVariableBorrowRate,optimalUsageRatio:t.optimalUsageRatio,stableRateSlope1:t.stableRateSlope1,stableRateSlope2:t.stableRateSlope2,utilizationRate:t.borrowUsageRatio,variableRateSlope1:t.variableRateSlope1,variableRateSlope2:t.variableRateSlope2,stableBorrowRateEnabled:t.stableBorrowRateEnabled,totalLiquidityUSD:t.totalLiquidityUSD,totalDebtUSD:t.totalDebtUSD}})}})]})},Fe=r(93456),_e=r(21386),ze=r(38391),We=r(30399),qe=r(23149),Ve=function(e){var t,r=e.debt,a=e.ceiling,o=e.usageData,s=(t={borderRadius:5,my:2,height:5},(0,F.Z)(t,"&.".concat(We.Z.colorPrimary),{backgroundColor:function(e){return e.palette.grey["light"===e.palette.mode?200:800]}}),(0,F.Z)(t,"& .".concat(We.Z.bar),{borderRadius:5,backgroundColor:function(e){return function(e){return o.isMaxed||o.percentUsed>=99.99?e.palette.error.main:o.percentUsed>=98?e.palette.warning.main:e.palette.success.main}(e)}}),t);return(0,se.jsxs)(se.Fragment,{children:[(0,se.jsxs)(i.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,se.jsxs)(i.Z,{display:"flex",alignItems:"center",children:[(0,se.jsx)(B.Z,{color:"text.secondary",component:"span",children:(0,se.jsx)(n.cC,{id:"Isolated Debt Ceiling"})}),(0,se.jsx)(N.G,{children:(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)(n.cC,{id:"Debt ceiling limits the amount possible to borrow against this asset by protocol users. Debt ceiling is specific to assets in isolation mode and is denoted in USD."})," ",(0,se.jsx)(d.rU,{href:"https://docs.aave.com/faq/aave-v3-features#how-does-isolation-mode-affect-my-borrowing-power",underline:"always",children:(0,se.jsx)(n.cC,{id:"Learn more"})})]})})]}),(0,se.jsxs)(i.Z,{children:[(0,se.jsx)(c.B,{value:r,variant:"main14",symbol:"USD",symbolsVariant:"secondary14",visibleDecimals:2}),(0,se.jsx)(B.Z,{component:"span",color:"text.secondary",variant:"secondary14",sx:{display:"inline-block",mx:1},children:(0,se.jsx)(n.cC,{id:"of"})}),(0,se.jsx)(c.B,{value:a,variant:"main14",symbol:"USD",symbolsVariant:"secondary14",visibleDecimals:2})]})]}),(0,se.jsx)(qe.Z,{sx:s,variant:"determinate",value:o.percentUsed<=1?1:o.percentUsed})]})},Ye=r(92624),He=r(64268),Ge=r(51967),$e=function(e){var t=e.reserve,r=e.currentMarketData,a=e.renderCharts,o=e.showSupplyCapStatus,s=e.supplyCap,l=e.debtCeiling;return(0,se.jsxs)(i.Z,{sx:{flexGrow:1,minWidth:0,maxWidth:"100%",width:"100%"},children:[(0,se.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:[o?(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)(P.t,{value:s.percentUsed,tooltipContent:(0,se.jsx)(se.Fragment,{children:(0,se.jsx)(n.cC,{id:"Maximum amount available to supply is <0/> {0} (<1/>).",values:{0:t.symbol},components:{0:(0,se.jsx)(c.B,{value:(0,S.hE)(t.supplyCap).toNumber()-(0,S.hE)(t.totalLiquidity).toNumber(),variant:"secondary12"}),1:(0,se.jsx)(c.B,{value:(0,S.hE)(t.supplyCapUSD).toNumber()-(0,S.hE)(t.totalLiquidityUSD).toNumber(),variant:"secondary12",symbol:"USD"})}})})}),(0,se.jsxs)(ke.Lv,{title:(0,se.jsxs)(i.Z,{display:"flex",alignItems:"center",children:[(0,se.jsx)(n.cC,{id:"Total supplied"}),(0,se.jsx)(N.G,{event:{eventName:R.vh.TOOL_TIP,eventParams:{tooltip:"Total Supply",asset:t.underlyingAsset,assetName:t.name}},children:(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)(n.cC,{id:"Asset supply is limited to a certain amount to reduce protocol exposure to the asset and to help manage risks involved."})," ",(0,se.jsx)(d.rU,{href:"https://docs.aave.com/developers/whats-new/supply-borrow-caps",underline:"always",children:(0,se.jsx)(n.cC,{id:"Learn more"})})]})})]}),children:[(0,se.jsxs)(i.Z,{children:[(0,se.jsx)(c.B,{value:t.totalLiquidity,variant:"main16",compact:!0}),(0,se.jsx)(B.Z,{component:"span",color:"text.primary",variant:"secondary16",sx:{display:"inline-block",mx:1},children:(0,se.jsx)(n.cC,{id:"of"})}),(0,se.jsx)(c.B,{value:t.supplyCap,variant:"main16"})]}),(0,se.jsxs)(i.Z,{children:[(0,se.jsx)(U.i,{value:t.totalLiquidityUSD}),(0,se.jsx)(B.Z,{component:"span",color:"text.secondary",variant:"secondary12",sx:{display:"inline-block",mx:1},children:(0,se.jsx)(n.cC,{id:"of"})}),(0,se.jsx)(U.i,{value:t.supplyCapUSD})]})]})]}):(0,se.jsxs)(ke.Lv,{title:(0,se.jsx)(i.Z,{display:"flex",alignItems:"center",children:(0,se.jsx)(n.cC,{id:"Total supplied"})}),children:[(0,se.jsx)(c.B,{value:t.totalLiquidity,variant:"main16",compact:!0}),(0,se.jsx)(U.i,{value:t.totalLiquidityUSD})]}),(0,se.jsxs)(ke.Lv,{title:(0,se.jsx)(n.cC,{id:"APY"}),children:[(0,se.jsx)(c.B,{value:t.supplyAPY,percent:!0,variant:"main16"}),(0,se.jsx)(L.M,{symbol:t.symbol,incentives:t.aIncentivesData,displayBlank:!0})]}),t.unbacked&&"0"!==t.unbacked&&(0,se.jsxs)(ke.Lv,{title:(0,se.jsx)(n.cC,{id:"Unbacked"}),children:[(0,se.jsx)(c.B,{value:t.unbacked,variant:"main16",symbol:t.name}),(0,se.jsx)(U.i,{value:t.unbackedUSD})]})]}),a&&(t.borrowingEnabled||Number(t.totalDebt)>0)&&(0,se.jsx)(be,{graphKey:"supply",reserve:t,currentMarketData:r}),(0,se.jsx)("div",{children:t.isIsolated?(0,se.jsxs)(i.Z,{sx:{pt:"42px",pb:"12px"},children:[(0,se.jsx)(B.Z,{variant:"subheader1",color:"text.main",paddingBottom:"12px",children:(0,se.jsx)(n.cC,{id:"Collateral usage"})}),(0,se.jsxs)(u.v,{severity:"warning",children:[(0,se.jsx)(B.Z,{variant:"subheader1",children:(0,se.jsx)(n.cC,{id:"Asset can only be used as collateral in isolation mode only."})}),(0,se.jsxs)(B.Z,{variant:"caption",children:["In Isolation mode you cannot supply other assets as collateral for borrowing. Assets used as collateral in Isolation mode can only be borrowed to a specific debt ceiling."," ",(0,se.jsx)(d.rU,{href:"https://docs.aave.com/faq/aave-v3-features#isolation-mode",children:"Learn more"})]})]})]}):"0"!==t.reserveLiquidationThreshold?(0,se.jsxs)(i.Z,{sx:{display:"inline-flex",alignItems:"center",pt:"42px",pb:"12px"},paddingTop:"42px",children:[(0,se.jsx)(B.Z,{variant:"subheader1",color:"text.main",children:(0,se.jsx)(n.cC,{id:"Collateral usage"})}),(0,se.jsx)(_e.Z,{fontSize:"small",color:"success",sx:{ml:2}}),(0,se.jsx)(B.Z,{variant:"subheader1",sx:{color:"#46BC4B"},children:(0,se.jsx)(n.cC,{id:"Can be collateral"})})]}):(0,se.jsxs)(i.Z,{sx:{pt:"42px",pb:"12px"},children:[(0,se.jsx)(B.Z,{variant:"subheader1",color:"text.main",children:(0,se.jsx)(n.cC,{id:"Collateral usage"})}),(0,se.jsx)(u.v,{sx:{my:"12px"},severity:"warning",children:(0,se.jsx)(n.cC,{id:"Asset cannot be used as collateral."})})]})}),"0"!==t.reserveLiquidationThreshold&&(0,se.jsxs)(i.Z,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"space-between"},children:[(0,se.jsx)(Ce.N,{title:(0,se.jsx)(Ge.y,{event:{eventName:R.vh.TOOL_TIP,eventParams:{tooltip:"MAX LTV",asset:t.underlyingAsset,assetName:t.name}},variant:"description",text:(0,se.jsx)(n.cC,{id:"Max LTV"})}),children:(0,se.jsx)(c.B,{value:t.formattedBaseLTVasCollateral,percent:!0,variant:"secondary14",visibleDecimals:2})}),(0,se.jsx)(Ce.N,{title:(0,se.jsx)(He.M,{event:{eventName:R.vh.TOOL_TIP,eventParams:{tooltip:"Liquidation threshold",asset:t.underlyingAsset,assetName:t.name}},variant:"description",text:(0,se.jsx)(n.cC,{id:"Liquidation threshold"})}),children:(0,se.jsx)(c.B,{value:t.formattedReserveLiquidationThreshold,percent:!0,variant:"secondary14",visibleDecimals:2})}),(0,se.jsx)(Ce.N,{title:(0,se.jsx)(Ye.r,{event:{eventName:R.vh.TOOL_TIP,eventParams:{tooltip:"Liquidation penalty",asset:t.underlyingAsset,assetName:t.name}},variant:"description",text:(0,se.jsx)(n.cC,{id:"Liquidation penalty"})}),children:(0,se.jsx)(c.B,{value:t.formattedReserveLiquidationBonus,percent:!0,variant:"secondary14",visibleDecimals:2})}),t.isIsolated&&(0,se.jsx)(Ce.N,{fullWidth:!0,children:(0,se.jsx)(Ve,{debt:t.isolationModeTotalDebtUSD,ceiling:t.debtCeilingUSD,usageData:l})})]}),"stETH"==t.symbol&&(0,se.jsx)(i.Z,{children:(0,se.jsxs)(u.v,{severity:"info",children:[(0,se.jsx)(ze.Z,{children:(0,se.jsx)(n.cC,{id:"Staking Rewards"})}),(0,se.jsx)(n.cC,{id:"stETH supplied as collateral will continue to accrue staking rewards provided by daily rebases."})," ",(0,se.jsx)(d.rU,{href:"https://blog.lido.fi/aave-integrates-lidos-steth-as-collateral/",underline:"always",children:(0,se.jsx)(n.cC,{id:"Learn more"})})]})})]})},Ke=function(e){var t=e.reserve,r=(0,m.f)(),h=r.currentNetworkConfig,v=r.currentMarketData,b=r.currentMarket,f=t.underlyingAsset+v.addresses.LENDING_POOL_ADDRESS_PROVIDER,j=!!h.ratesHistoryApiUrl&&!v.disableCharts&&!k.includes(f),y=(0,p.ov)(),g=y.supplyCap,w=y.borrowCap,Z=y.debtCeiling,C="0"!==t.supplyCap,O="0"!==t.borrowCap,S=(0,D.Yh)((function(e){return e.trackEvent}));return(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)(i.Z,{children:t.isPaused?(0,se.jsx)(u.v,{sx:{mt:"16px",mb:"40px"},severity:"error",children:(0,se.jsx)(n.cC,{id:"MAI has been paused due to a community decision. Supply, borrows and repays are impacted. <0>More details</0>",components:{0:(0,se.jsx)(d.rU,{href:"https://governance.aave.com/t/arfc-add-mai-to-arbitrum-aave-v3-market/12759/8",sx:{textDecoration:"underline"}})}})}):null}),(0,se.jsxs)(ke.ne,{children:[(0,se.jsx)(ke.pY,{children:"Supply Info"}),(0,se.jsx)($e,{reserve:t,currentMarketData:v,renderCharts:j,showSupplyCapStatus:C,supplyCap:g,debtCeiling:Z})]}),(t.borrowingEnabled||Number(t.totalDebt)>0)&&(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)(o.Z,{sx:{my:{xs:6,sm:10}}}),(0,se.jsxs)(ke.ne,{children:[(0,se.jsx)(ke.pY,{children:"Borrow info"}),(0,se.jsxs)(i.Z,{sx:{flexGrow:1,minWidth:0,maxWidth:"100%",width:"100%"},children:[!t.borrowingEnabled&&(0,se.jsx)(u.v,{sx:{mb:"40px"},severity:"error",children:(0,se.jsx)(x.l,{symbol:t.symbol,currentMarket:b})}),(0,se.jsx)(De,{reserve:t,currentMarketData:v,currentNetworkConfig:h,renderCharts:j,showBorrowCapStatus:O,borrowCap:w})]})]})]}),0!==t.eModeCategoryId&&(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)(o.Z,{sx:{my:{xs:6,sm:10}}}),(0,se.jsx)(Fe.H,{reserve:t})]}),(t.borrowingEnabled||Number(t.totalDebt)>0)&&(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)(o.Z,{sx:{my:{xs:6,sm:10}}}),(0,se.jsxs)(ke.ne,{children:[(0,se.jsx)(ke.pY,{children:"Interest rate model"}),(0,se.jsxs)(i.Z,{sx:{flexGrow:1,minWidth:0,maxWidth:"100%",width:"100%"},children:[(0,se.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"space-between"},children:[(0,se.jsx)(ke.Lv,{title:(0,se.jsx)(n.cC,{id:"Utilization Rate"}),className:"borderless",children:(0,se.jsx)(c.B,{value:t.borrowUsageRatio,percent:!0,variant:"main16",compact:!0})}),(0,se.jsx)(s.Z,{onClick:function(){S(R.vh.EXTERNAL_LINK,{asset:t.underlyingAsset,Link:"Interest Rate Strategy",assetName:t.name})},href:h.explorerLinkBuilder({address:t.interestRateStrategyAddress}),endIcon:(0,se.jsx)(l.Z,{sx:{width:14,height:14},children:(0,se.jsx)(a.Z,{})}),component:d.rU,size:"small",variant:"outlined",sx:{verticalAlign:"top"},children:(0,se.jsx)(n.cC,{id:"Interest rate strategy"})})]}),(0,se.jsx)(Ae,{reserve:t})]})]})]})]})}}}]);