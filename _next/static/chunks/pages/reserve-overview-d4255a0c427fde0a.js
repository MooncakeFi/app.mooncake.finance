(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{96471:function(e,n,t){"use strict";var r=t(64836);n.Z=void 0;var s=r(t(64938)),i=t(85893),o=(0,s.default)((0,i.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBackOutlined");n.Z=o},29822:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Le}});var r,s,i=t(49501),o=t(61953),a=t(29630),l=t(11163),c=t(67294),d=t(34637),x=t(59379),u=t(34220),h=t(43629),m=t(97741),p=t(17674),v=t(80854),b=t(75331),j=t(1279),f=t(82403),y=t(44373),g=t(9144),k=t(91655),w=t(70918),Z=t(90149),C=t(75084),T=t(62097),A=t(70794),S=t(29002),I=t(25563),E=t(41024),O=t(69331),B=t(3765),N=t(98833),_=t(8195),M=t(90452),D=t(46930),P=t(77537),R=t(56707),F=t(81645),L=t(50029),V=t(87794),W=t.n(V),U=t(83454),z=t(77228),Y=t(57609),G=t(56365),K=t(31959);function H(){return H=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},H.apply(this,arguments)}var X=function(e){return c.createElement("svg",H({viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=c.createElement("path",{d:"M32 64c17.673 0 32-14.327 32-32C64 14.327 49.673 0 32 0 14.327 0 0 14.327 0 32c0 17.673 14.327 32 32 32Z",fill:"#1461DB"})),s||(s=c.createElement("path",{d:"m52.206 30.048-9.038-9.038-.017-.017-.036-.03a2.281 2.281 0 0 0-.183-.15 1.795 1.795 0 0 0-.137-.101c-.02-.015-.042-.027-.064-.04a2.454 2.454 0 0 0-3.28.544L25.393 35.274V22.75a2.483 2.483 0 0 0-4.965 0v12.524l-5.132-5.132a2.483 2.483 0 0 0-3.51 3.51l9.37 9.37c.059.06.121.116.186.168.063.05.129.1.194.15.339.218.726.352 1.127.388h.01c.081.008.162.012.242.012h.038c.067 0 .134-.003.2-.009h.05c.064-.007.128-.015.191-.028h.028c.07-.015.14-.031.209-.052h.012a2.298 2.298 0 0 0 .519-.228l.056-.033a2.38 2.38 0 0 0 .269-.191l.025-.022c.052-.045.105-.09.15-.14l14.253-14.264V41.26a2.483 2.483 0 0 0 4.965 0V28.735l4.816 4.825a2.482 2.482 0 0 0 3.51-3.512Z",fill:"#fff"})))},q=t(85893),J=t(83454),$=[{name:"Transak",makeLink:function(e){var n=e.cryptoSymbol,t=e.network,r=e.walletAddress;return"".concat(J.env.NEXT_PUBLIC_TRANSAK_APP_URL,"/?apiKey=").concat(J.env.NEXT_PUBLIC_TRANSAK_API_KEY,"&network=").concat(t.split(" ")[0],"&cryptoCurrencyCode=").concat(n,"&walletAddress=").concat(r,"&disableWalletAddressForm=true")},icon:(0,q.jsx)(X,{})}],Q=function(e){var n=e.cryptoSymbol,t=e.open,r=e.close,s=(0,P.Z)().currentAccount,l=(0,z.Yh)((function(e){return e.trackEvent})),c=(0,D.f)().currentNetworkConfig.name;return(0,q.jsxs)(K.P,{open:t,setOpen:r,children:[(0,q.jsx)(a.Z,{variant:"h2",children:(0,q.jsx)(i.cC,{id:"Buy Crypto with Fiat"})}),(0,q.jsx)(a.Z,{sx:{my:6},children:$.length&&1===$.length?(0,q.jsx)(i.cC,{id:"{0} on-ramp service is provided by External Provider and by selecting you agree to Terms of the Provider. Your access to the service might be reliant on the External Provider being operational.",values:{0:$[0].name}}):(0,q.jsx)(i.cC,{id:"Choose one of the on-ramp services"})}),(0,q.jsx)(o.Z,{children:$.map((function(e){var t=e.name,r=e.makeLink,a=e.icon;return(0,q.jsx)(C.Z,{variant:"outlined",size:"large",endIcon:(0,q.jsx)(F.Z,{children:(0,q.jsx)(G.Z,{})}),fullWidth:!0,sx:{px:4,"&:not(:first-of-type)":{mt:4}},href:r({cryptoSymbol:n,network:c,walletAddress:s}),target:"_blank",rel:"noopener",onClick:function(){return l(Y.vh.BUY_WITH_FIAT,{token:n,network:c,onrampname:$[0].name})},children:(0,q.jsxs)(o.Z,{sx:{display:"flex",flexGrow:1},children:[(0,q.jsx)(F.Z,{sx:{mr:2},children:a}),(0,q.jsx)(i.cC,{id:"{0}{name}",values:{0:1===$.length?"Continue with ":null,name:t}})]})},t)}))})]})},ee=function(e){var n=e.cryptoSymbol,t=e.networkMarketName,r=e.funnel,s=function(e,n){var t=(0,c.useState)(!1),r=t[0],s=t[1],i=U.env.NEXT_PUBLIC_FIAT_ON_RAMP;return(0,c.useEffect)((function(){"true"===i&&(0,L.Z)(W().mark((function t(){var r,i;return W().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=U.env.NEXT_PUBLIC_TRANSAK_API_URL,t.prev=1,t.next=4,fetch("".concat(r,"/cryptocoverage/api/v1/public/partner/crypto-currencies?symbol=").concat(e,"&network=").concat(n));case 4:i=t.sent,s(i.ok),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),s(!1);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()}),[e,n]),{isAvailable:r}}(n,t),o=s.isAvailable,a=(0,c.useState)(null),l=a[0],d=a[1],x=Boolean(l),u=(0,z.Yh)((function(e){return e.trackEvent}));return o?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(C.Z,{variant:"outlined",size:"small",onClick:function(e){u(Y.vh.OPEN_MODAL,{modal:"Buy crypto with fiat",assetName:n,funnel:r}),d(e.currentTarget)},startIcon:(0,q.jsx)(F.Z,{sx:{mr:-1},children:(0,q.jsx)(R.Z,{})}),children:(0,q.jsx)(i.cC,{id:"Buy {cryptoSymbol} with Fiat",values:{cryptoSymbol:n}})}),(0,q.jsx)(Q,{cryptoSymbol:n,open:x,close:function(){d(null)}})]}):null},ne=t(59286),te=t(94847),re=t(87385),se=t(81902),ie=t(25049),oe=t(68861),ae=t(32667),le=t(54373),ce=function(e){var n,t=e.reserve,r=(0,c.useState)(t.symbol),s=r[0],l=r[1],d=(0,P.Z)(),x=d.currentAccount,m=d.loading,k=(0,M.T)().isPermissionsLoading,w=(0,_.vR)(),Z=w.openBorrow,T=w.openSupply,S=(0,D.f)(),E=S.currentMarket,B=S.currentNetworkConfig,R=(0,u.HT)(),F=R.ghoReserveData,L=R.user,V=R.loading,W=R.marketReferencePriceInUsd,U=(0,N.P)(),Y=U.walletBalances,G=U.loading,K=(0,z.Yh)((function(e){return[e.poolComputed.minRemainingBaseTokenBalance,e.displayGho]})),H=(0,p.Z)(K,2),X=H[0],J=H[1],$=B.baseAssetSymbol,Q=Y[t.underlyingAsset];t.isWrappedBaseAsset&&s===$&&(Q=Y[v.hP.toLowerCase()]);var ee="0",se="0",ie=J({symbol:t.symbol,currentMarket:E});if(ie){var ce=(0,ne.BC)(L);ee=A.Z.min(ce,(0,j.hE)(F.aaveFacilitatorRemainingCapacity)).toString(),se="0"}else{var je;ee=(0,ne.nG)(t,L,b.tk.Variable).toString(),se=(0,te.I)((null===(je=Q)||void 0===je?void 0:je.amount)||"0",t,t.underlyingAsset,X).toString()}var ye=(0,re.N4)(ee,t.formattedPriceInMarketReferenceCurrency,W).toString(),ge=function(e,n,t){return(0,j.hE)(e).multipliedBy(n).multipliedBy(t).shiftedBy(-f.$3).toString()}(se,t.formattedPriceInMarketReferenceCurrency,W).toString(),ke=function(e){var n=e.balance,t=e.maxAmountToSupply,r=e.maxAmountToBorrow,s=e.reserve,o=(0,u.HT)(),l=o.user,c=o.eModes,d=(0,h.ov)(),x=d.supplyCap,m=d.borrowCap,v=d.debtCeiling,b=(0,z.Yh)((function(e){return[e.currentMarket,e.currentNetworkConfig,e.currentChainId,e.displayGho]})),j=(0,p.Z)(b,4),f=j[0],y=j[1],k=j[2],w=j[3],Z=(0,_.vR)().openFaucet,T=y.bridge,A=y.name,S=(0,ne.hF)(s,l),I="0"===(null===l||void 0===l?void 0:l.totalCollateralMarketReferenceCurrency),E=(null===l||void 0===l?void 0:l.isInIsolationMode)&&!s.borrowableInIsolation,B=(null===l||void 0===l?void 0:l.isInEmode)&&s.eModeCategoryId!==l.userEmodeCategoryId,N=w({symbol:s.symbol,currentMarket:f});return{disableSupplyButton:"0"===n||"0"===t||N,disableBorrowButton:!S||I||E||B||"0"===r,alerts:(0,q.jsxs)(g.Z,{gap:3,children:["0"===n&&!N&&(0,q.jsx)(q.Fragment,{children:y.isTestnet?(0,q.jsxs)(O.v,{sx:{mb:0},severity:"info",icon:!1,children:[(0,q.jsx)(i.cC,{id:"Your {networkName} wallet is empty. Get free test {0} at",values:{0:s.name,networkName:A}})," ",(0,q.jsx)(C.Z,{variant:"text",sx:{verticalAlign:"top"},onClick:function(){return Z(s.underlyingAsset)},disableRipple:!0,children:(0,q.jsx)(a.Z,{variant:"caption",children:(0,q.jsx)(i.cC,{id:"{networkName} Faucet",values:{networkName:A}})})})]}):(0,q.jsx)(le.K,{sx:{mb:0},name:A,bridge:T,icon:!1,chainId:k})}),("0"!==n||N)&&"0"===(null===l||void 0===l?void 0:l.totalCollateralMarketReferenceCurrency)&&(0,q.jsx)(O.v,{sx:{mb:0},severity:"info",icon:!1,children:(0,q.jsx)(i.cC,{id:"To borrow you need to supply any asset to be used as collateral."})}),E&&(0,q.jsx)(O.v,{sx:{mb:0},severity:"warning",icon:!1,children:(0,q.jsx)(i.cC,{id:"Collateral usage is limited because of Isolation mode."})}),B&&E&&(0,q.jsx)(O.v,{sx:{mb:0},severity:"info",icon:!1,children:(0,q.jsx)(i.cC,{id:"Borrowing is unavailable because you\u2019ve enabled Efficiency Mode (E-Mode) and Isolation mode. To manage E-Mode and Isolation mode visit your <0>Dashboard</0>.",components:{0:(0,q.jsx)(oe.rU,{href:oe.Z6.dashboard})}})}),B&&!E&&(0,q.jsx)(O.v,{sx:{mb:0},severity:"info",icon:!1,children:(0,q.jsx)(i.cC,{id:"Borrowing is unavailable because you\u2019ve enabled Efficiency Mode (E-Mode) for {0} category. To manage E-Mode categories visit your <0>Dashboard</0>.",values:{0:(0,ae.U)(c[l.userEmodeCategoryId].label)},components:{0:(0,q.jsx)(oe.rU,{href:oe.Z6.dashboard})}})}),!B&&E&&(0,q.jsx)(O.v,{sx:{mb:0},severity:"info",icon:!1,children:(0,q.jsx)(i.cC,{id:"Borrowing is unavailable because you\u2019re using Isolation mode. To manage Isolation mode visit your <0>Dashboard</0>.",components:{0:(0,q.jsx)(oe.rU,{href:oe.Z6.dashboard})}})}),"0"===t&&(null===x||void 0===x?void 0:x.determineWarningDisplay({supplyCap:x,icon:!1,sx:{mb:0}})),"0"===r&&(null===m||void 0===m?void 0:m.determineWarningDisplay({borrowCap:m,icon:!1,sx:{mb:0}})),s.isIsolated&&"0"!==n&&"0"!==(null===l||void 0===l?void 0:l.totalCollateralUSD)&&(null===v||void 0===v?void 0:v.determineWarningDisplay({debtCeiling:v,icon:!1,sx:{mb:0}}))]})}}({balance:(null===(n=Q)||void 0===n?void 0:n.amount)||"0",maxAmountToSupply:se.toString(),maxAmountToBorrow:ee.toString(),reserve:t}),we=ke.disableSupplyButton,Ze=ke.disableBorrowButton,Ce=ke.alerts;if(!x&&!k)return(0,q.jsx)(me,{loading:m});if(V||G)return(0,q.jsx)(ue,{});var Te=(0,I.hu)(E).market;return(0,q.jsxs)(he,{children:[t.isWrappedBaseAsset&&(0,q.jsx)(o.Z,{children:(0,q.jsx)(be,{assetSymbol:t.symbol,baseAssetSymbol:$,selectedAsset:s,setSelectedAsset:l})}),(0,q.jsx)(fe,{balance:Q.amount,symbol:s,marketTitle:Te.marketTitle}),t.isFrozen||t.isPaused?(0,q.jsx)(o.Z,{sx:{mt:3},children:t.isPaused?(0,q.jsx)(de,{}):(0,q.jsx)(xe,{})}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(y.Z,{sx:{my:6}}),(0,q.jsxs)(g.Z,{gap:3,children:[!ie&&(0,q.jsx)(pe,{reserve:t,value:se.toString(),usdValue:ge,symbol:s,disable:we,onActionClicked:function(){t.isWrappedBaseAsset&&s===$?T(v.hP.toLowerCase(),E,t.name,"reserve",!0):T(t.underlyingAsset,E,t.name,"reserve",!0)}}),t.borrowingEnabled&&(0,q.jsx)(ve,{reserve:t,value:ee.toString(),usdValue:ye,symbol:s,disable:Ze,onActionClicked:function(){Z(t.underlyingAsset,E,t.name,"reserve",!0)}}),Ce]})]})]})},de=function(){return(0,q.jsx)(O.v,{sx:{mb:0},severity:"error",icon:!0,children:(0,q.jsx)(i.cC,{id:"Because this asset is paused, no actions can be taken until further notice"})})},xe=function(){return(0,q.jsx)(O.v,{sx:{mb:0},severity:"error",icon:!0,children:(0,q.jsx)(i.cC,{id:"Since this asset is frozen, the only available actions are withdraw and repay which can be accessed from the <0>Dashboard</0>",components:{0:(0,q.jsx)(oe.rU,{href:oe.Z6.dashboard})}})})},ue=function(){var e=(0,q.jsxs)(g.Z,{children:[(0,q.jsx)(k.Z,{width:150,height:14}),(0,q.jsxs)(g.Z,{sx:{height:"44px"},direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,q.jsxs)(o.Z,{children:[(0,q.jsx)(k.Z,{width:100,height:14,sx:{mt:1,mb:2}}),(0,q.jsx)(k.Z,{width:75,height:12})]}),(0,q.jsx)(k.Z,{height:36,width:96})]})]});return(0,q.jsxs)(he,{children:[(0,q.jsxs)(g.Z,{direction:"row",gap:3,children:[(0,q.jsx)(k.Z,{width:42,height:42,sx:{borderRadius:"12px"}}),(0,q.jsxs)(o.Z,{children:[(0,q.jsx)(k.Z,{width:100,height:12,sx:{mt:1,mb:2}}),(0,q.jsx)(k.Z,{width:100,height:14})]})]}),(0,q.jsx)(y.Z,{sx:{my:6}}),(0,q.jsx)(o.Z,{children:(0,q.jsxs)(g.Z,{gap:3,children:[e,e]})})]})},he=function(e){var n=e.children;return(0,q.jsxs)(w.Z,{sx:{pt:4,pb:{xs:4,xsm:6},px:{xs:4,xsm:6}},children:[(0,q.jsx)(a.Z,{variant:"h3",sx:{mb:6},children:(0,q.jsx)(i.cC,{id:"Your info"})}),n]})},me=function(e){var n=e.loading;return(0,q.jsx)(w.Z,{sx:{pt:4,pb:{xs:4,xsm:6},px:{xs:4,xsm:6}},children:n?(0,q.jsx)(Z.Z,{}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(a.Z,{variant:"h3",sx:{mb:{xs:6,xsm:10}},children:(0,q.jsx)(i.cC,{id:"Your info"})}),(0,q.jsx)(a.Z,{sx:{mb:6},color:"text.secondary",children:(0,q.jsx)(i.cC,{id:"Please connect a wallet to view your personal information here."})}),(0,q.jsx)(B.p,{})]})})},pe=function(e){var n=e.reserve,t=e.value,r=e.usdValue,s=e.symbol,a=e.disable,l=e.onActionClicked;return(0,q.jsxs)(g.Z,{children:[(0,q.jsx)(ie.Y,{variant:"description",text:(0,q.jsx)(i.cC,{id:"Available to supply"}),capType:se.R.supplyCap,event:{eventName:Y.vh.TOOL_TIP,eventParams:{tooltip:"Available to supply: your info",asset:n.underlyingAsset,assetName:n.name}}}),(0,q.jsxs)(g.Z,{sx:{height:"44px"},direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,q.jsxs)(o.Z,{children:[(0,q.jsx)(je,{value:t,symbol:s}),(0,q.jsx)(E.B,{value:r,variant:"subheader2",color:"text.muted",symbolsColor:"text.muted",symbol:"USD"})]}),(0,q.jsx)(C.Z,{sx:{height:"36px",width:"96px"},onClick:l,disabled:a,fullWidth:!1,variant:"contained","data-cy":"supplyButton",children:(0,q.jsx)(i.cC,{id:"Supply"})})]})]})},ve=function(e){var n=e.reserve,t=e.value,r=e.usdValue,s=e.symbol,a=e.disable,l=e.onActionClicked;return(0,q.jsxs)(g.Z,{children:[(0,q.jsx)(ie.Y,{variant:"description",text:(0,q.jsx)(i.cC,{id:"Available to borrow"}),capType:se.R.borrowCap,event:{eventName:Y.vh.TOOL_TIP,eventParams:{tooltip:"Available to borrow: your info",asset:n.underlyingAsset,assetName:n.name}}}),(0,q.jsxs)(g.Z,{sx:{height:"44px"},direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,q.jsxs)(o.Z,{children:[(0,q.jsx)(je,{value:t,symbol:s}),(0,q.jsx)(E.B,{value:r,variant:"subheader2",color:"text.muted",symbolsColor:"text.muted",symbol:"USD"})]}),(0,q.jsx)(C.Z,{sx:{height:"36px",width:"96px"},onClick:l,disabled:a,fullWidth:!1,variant:"contained","data-cy":"borrowButton",children:(0,q.jsx)(i.cC,{id:"Borrow"})})]})]})},be=function(e){var n=e.assetSymbol,t=e.baseAssetSymbol,r=e.selectedAsset,s=e.setSelectedAsset;return(0,q.jsxs)(x.f,{color:"primary",value:r,exclusive:!0,onChange:function(e,n){return s(n)},sx:{mb:4},children:[(0,q.jsx)(d.Y,{value:n,children:(0,q.jsx)(a.Z,{variant:"buttonM",children:n})}),(0,q.jsx)(d.Y,{value:t,children:(0,q.jsx)(a.Z,{variant:"buttonM",children:t})})]})},je=function(e){var n=e.value,t=e.symbol,r=e.children;return(0,q.jsxs)(g.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,q.jsx)(E.B,{value:n,variant:"h4",color:"text.primary"}),(0,q.jsx)(a.Z,{variant:"buttonL",color:"text.secondary",children:t}),r]})},fe=function(e){var n=e.balance,t=e.symbol,r=e.marketTitle,s=(0,T.Z)();return(0,q.jsxs)(g.Z,{direction:"row",gap:3,children:[(0,q.jsx)(o.Z,{sx:function(e){return{width:"42px",height:"42px",background:e.palette.background.surface,border:"0.5px solid ".concat(e.palette.background.disabled),borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center"}},children:(0,q.jsx)(S.o,{sx:{stroke:"".concat(s.palette.text.secondary)}})}),(0,q.jsxs)(o.Z,{children:[(0,q.jsx)(a.Z,{variant:"description",color:"text.secondary",children:"Wallet balance"}),(0,q.jsx)(je,{value:n,symbol:t,children:(0,q.jsx)(o.Z,{sx:{ml:2},children:(0,q.jsx)(ee,{cryptoSymbol:t,networkMarketName:r})})})]})]})},ye=t(61225),ge=t(5152),ke=(0,ge.default)((function(){return Promise.all([t.e(409),t.e(61),t.e(623),t.e(561)]).then(t.bind(t,17561)).then((function(e){return e.GhoReserveConfiguration}))}),{loadableGenerated:{webpack:function(){return[17561]}}}),we=(0,ge.default)((function(){return Promise.all([t.e(409),t.e(472),t.e(623),t.e(588)]).then(t.bind(t,98588)).then((function(e){return e.ReserveConfiguration}))}),{loadableGenerated:{webpack:function(){return[98588]}}}),Ze=function(e){var n=e.reserve,t=(0,D.f)().currentMarket,r=(0,z.Yh)((function(e){return[e.displayGho]})),s=(0,p.Z)(r,1)[0],l=(0,T.Z)().breakpoints,c=(0,ye.Z)(l.down("xsm")),d=s({symbol:n.symbol,currentMarket:t});return(0,q.jsxs)(w.Z,{sx:{pt:4,pb:20,px:c?4:6},children:[(0,q.jsx)(o.Z,{sx:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",mb:n.isFrozen||"AMPL"==n.symbol||"stETH"===n.symbol?"0px":"36px"},children:(0,q.jsx)(a.Z,{variant:"h3",children:(0,q.jsx)(i.cC,{id:"Reserve status & configuration"})})}),d?(0,q.jsx)(ke,{reserve:n}):(0,q.jsx)(we,{reserve:n})]})},Ce=t(96471),Te=t(74815),Ae=t(87369),Se=t(73812),Ie=t(31538),Ee=t(41528),Oe=function(e){var n=e.downToSM,t=e.tooltipText,r=e.children;return(0,q.jsx)(Ee.y,{title:(0,q.jsx)(a.Z,{children:(0,q.jsx)(i.cC,{id:"{tooltipText}",values:{tooltipText:t}})}),children:(0,q.jsx)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:(0,q.jsx)(o.Z,{sx:{bgcolor:"#383D51",width:n?"18px":"24px",height:n?"18px":"24px",borderRadius:"50%",display:"flex",justifyContent:"center",ml:"8px",border:"0.5px solid rgba(235, 235, 237, 0.12)"},children:r})})})},Be=t(2180),Ne=function(e){var n=e.poolReserve,t=e.downToSM,r=e.switchNetwork,s=e.addERC20Token,l=e.currentChainId,d=e.connectedChainId,x=e.hideAToken,u=(0,c.useState)(null),h=u[0],m=u[1],p=(0,c.useState)(!1),v=p[0],b=p[1],j=(0,c.useState)(""),f=j[0],y=j[1],g=(0,c.useState)(""),k=g[0],w=g[1],Z=Boolean(h),C=(0,z.Yh)((function(e){return e.trackEvent})),T=function(){m(null)};return(0,c.useEffect)((function(){v&&l===d&&(s({address:n.underlyingAsset,decimals:n.decimals,symbol:n.symbol,image:/_/.test(n.iconSymbol)?void 0:f}),b(!1))}),[l,d,v,s,null===n||void 0===n?void 0:n.underlyingAsset,null===n||void 0===n?void 0:n.decimals,null===n||void 0===n?void 0:n.symbol,null===n||void 0===n?void 0:n.iconSymbol,f]),n?(0,q.jsxs)(q.Fragment,{children:[(null===n||void 0===n?void 0:n.symbol)&&!/_/.test(n.symbol)&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Be.Js,{symbol:n.iconSymbol,onImageGenerated:y,aToken:!1}),!x&&(0,q.jsx)(Be.Js,{symbol:n.iconSymbol,onImageGenerated:w,aToken:!0})]}),(0,q.jsx)(o.Z,{onClick:function(e){m(e.currentTarget)},children:(0,q.jsx)(Oe,{tooltipText:"Add token to wallet",downToSM:t,children:(0,q.jsx)(o.Z,{onClick:function(){C(Y.f9.ADD_TOKEN_TO_WALLET_DROPDOWN,{asset:n.underlyingAsset,assetName:n.name})},sx:{display:"inline-flex",alignItems:"center","&:hover":{".Wallet__icon":{opacity:"0 !important"},".Wallet__iconHover":{opacity:"1 !important"}},cursor:"pointer"},children:(0,q.jsx)(S.o,{sx:{width:"14px",height:"14px","&:hover":{stroke:"#F1F1F3"}}})})})}),(0,q.jsxs)(Se.Z,{anchorEl:h,open:Z,onClose:T,MenuListProps:{"aria-labelledby":"basic-button"},keepMounted:!0,"data-cy":"addToWaletSelector",children:[(0,q.jsx)(o.Z,{sx:{px:4,pt:3,pb:2},children:(0,q.jsx)(a.Z,{variant:"secondary12",color:"text.secondary",children:(0,q.jsx)(i.cC,{id:"Underlying token"})})}),(0,q.jsxs)(Ie.Z,{value:"underlying",divider:!0,onClick:function(){l!==d?r(l).then((function(){b(!0)})):(C(Y.f9.ADD_TO_WALLET,{type:"Underlying token",asset:n.underlyingAsset,assetName:n.name}),s({address:n.underlyingAsset,decimals:n.decimals,symbol:n.symbol,image:/_/.test(n.symbol)?void 0:f})),T()},children:[(0,q.jsx)(Be.T1,{symbol:n.iconSymbol,sx:{fontSize:"20px"}}),(0,q.jsx)(a.Z,{variant:"subheader1",sx:{ml:3},noWrap:!0,"data-cy":"assetName",children:n.symbol})]},"underlying"),!x&&(0,q.jsxs)(o.Z,{children:[(0,q.jsx)(o.Z,{sx:{px:4,pt:3,pb:2},children:(0,q.jsx)(a.Z,{variant:"secondary12",color:"text.secondary",children:(0,q.jsx)(i.cC,{id:"Mooncake Finance aToken"})})}),(0,q.jsxs)(Ie.Z,{value:"atoken",onClick:function(){l!==d?r(l).then((function(){b(!0)})):(C(Y.f9.ADD_TO_WALLET,{asset:n.underlyingAsset,assetName:n.name}),s({address:n.aTokenAddress,decimals:n.decimals,symbol:"a".concat(n.symbol),image:/_/.test(n.symbol)?void 0:k})),T()},children:[(0,q.jsx)(Be.T1,{symbol:n.iconSymbol,sx:{fontSize:"20px"},aToken:!0}),(0,q.jsx)(a.Z,{variant:"subheader1",sx:{ml:3},noWrap:!0,"data-cy":"assetName",children:"a".concat(n.symbol)})]},"atoken")]})]})]}):null},_e=t(58527),Me=function(){var e=(0,u.HT)(),n=e.ghoLoadingData,t=e.ghoReserveData,r=n,s=(0,T.Z)(),a=(0,ye.Z)(s.breakpoints.down("sm")),l=a?"main16":"main21",c=a?"secondary16":"secondary21";return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Ae.d,{title:(0,q.jsx)(i.cC,{id:"Total borrowed"}),loading:r,hideIcon:!0,children:(0,q.jsx)(E.B,{value:t.aaveFacilitatorBucketLevel,symbol:"USD",variant:l,symbolsVariant:c,symbolsColor:"#A5A8B6"})}),(0,q.jsx)(Ae.d,{title:(0,q.jsx)(i.cC,{id:"Available to borrow"}),loading:r,hideIcon:!0,children:(0,q.jsx)(E.B,{value:t.aaveFacilitatorRemainingCapacity,symbol:"USD",variant:l,symbolsVariant:c,symbolsColor:"#A5A8B6"})}),(0,q.jsx)(Ae.d,{title:(0,q.jsx)(_e.G,{text:(0,q.jsx)(i.cC,{id:"Price"}),children:(0,q.jsx)(i.cC,{id:"The Mooncake Finance Protocol is programmed to always use the price of 1 GHO = $1. This is different from using market pricing via oracles for other crypto assets. This creates stabilizing arbitrage opportunities when the price of GHO fluctuates."})}),loading:r,hideIcon:!0,children:(0,q.jsx)(o.Z,{sx:{display:"inline-flex",alignItems:"center"},children:(0,q.jsx)(E.B,{value:1,symbol:"USD",variant:l,symbolsVariant:c,symbolsColor:"#A5A8B6"})})})]})},De=function(e){var n=e.underlyingAsset,t=(0,u.HT)(),r=t.reserves,s=t.loading,a=(0,D.f)().currentNetworkConfig,l=(0,z.Yh)((function(e){return e.trackEvent})),c=(0,T.Z)(),d=(0,ye.Z)(c.breakpoints.down("sm")),x=r.find((function(e){return e.underlyingAsset===n})),h=d?"main16":"main21",m=d?"secondary16":"secondary21";return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Ae.d,{title:(0,q.jsx)(i.cC,{id:"Reserve Size"}),loading:s,hideIcon:!0,children:(0,q.jsx)(E.B,{value:Math.max(Number(null===x||void 0===x?void 0:x.totalLiquidityUSD),0),symbol:"USD",variant:h,symbolsVariant:m,symbolsColor:"#A5A8B6"})}),(0,q.jsx)(Ae.d,{title:(0,q.jsx)(i.cC,{id:"Available liquidity"}),loading:s,hideIcon:!0,children:(0,q.jsx)(E.B,{value:Math.max(Number(null===x||void 0===x?void 0:x.availableLiquidityUSD),0),symbol:"USD",variant:h,symbolsVariant:m,symbolsColor:"#A5A8B6"})}),(0,q.jsx)(Ae.d,{title:(0,q.jsx)(i.cC,{id:"Utilization Rate"}),loading:s,hideIcon:!0,children:(0,q.jsx)(E.B,{value:null===x||void 0===x?void 0:x.borrowUsageRatio,percent:!0,variant:h,symbolsVariant:m,symbolsColor:"#A5A8B6"})}),(0,q.jsx)(Ae.d,{title:(0,q.jsx)(i.cC,{id:"Oracle price"}),loading:s,hideIcon:!0,children:(0,q.jsxs)(o.Z,{sx:{display:"inline-flex",alignItems:"center"},children:[(0,q.jsx)(E.B,{value:null===x||void 0===x?void 0:x.priceInUSD,symbol:"USD",variant:h,symbolsVariant:m,symbolsColor:"#A5A8B6"}),s?(0,q.jsx)(k.Z,{width:16,height:16,sx:{ml:1,background:"#383D51"}}):(0,q.jsx)(Oe,{tooltipText:"View oracle contract",downToSM:d,children:(0,q.jsx)(oe.rU,{onClick:function(){return l(Y.vh.EXTERNAL_LINK,{Link:"Oracle Price",oracle:null===x||void 0===x?void 0:x.priceOracle,assetName:x.name,asset:x.underlyingAsset})},href:a.explorerLinkBuilder({address:null===x||void 0===x?void 0:x.priceOracle}),sx:{display:"inline-flex",alignItems:"center",color:"#A5A8B6","&:hover":{color:"#F1F1F3"},cursor:"pointer"},children:(0,q.jsx)(F.Z,{sx:{fontSize:d?"12px":"14px"},children:(0,q.jsx)(G.Z,{})})})})]})})]})},Pe=function(e){var n=e.poolReserve,t=e.downToSM,r=e.hideAToken,s=(0,c.useState)(null),l=s[0],d=s[1],x=(0,D.f)(),u=x.currentNetworkConfig,h=x.currentMarket,m=Boolean(l),p=(0,z.Yh)((function(e){return e.trackEvent}));if(!n)return null;var v=n.borrowingEnabled||n.stableBorrowRateEnabled;return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(o.Z,{onClick:function(e){p(Y.f9.RESERVE_TOKENS_DROPDOWN,{assetName:n.name,asset:n.underlyingAsset,aToken:n.aTokenAddress,market:h,variableDebtToken:n.variableDebtTokenAddress}),d(e.currentTarget)},children:(0,q.jsx)(Oe,{tooltipText:"View token contracts",downToSM:t,children:(0,q.jsx)(o.Z,{sx:{display:"inline-flex",alignItems:"center",color:"#A5A8B6","&:hover":{color:"#F1F1F3"},cursor:"pointer"},children:(0,q.jsx)(F.Z,{sx:{fontSize:"14px"},children:(0,q.jsx)(G.Z,{})})})})}),(0,q.jsxs)(Se.Z,{anchorEl:l,open:m,onClose:function(){d(null)},MenuListProps:{"aria-labelledby":"basic-button"},keepMounted:!0,"data-cy":"addToWaletSelector",children:[(0,q.jsx)(o.Z,{sx:{px:4,pt:3,pb:2},children:(0,q.jsx)(a.Z,{variant:"secondary12",color:"text.secondary",children:(0,q.jsx)(i.cC,{id:"Underlying token"})})}),(0,q.jsxs)(Ie.Z,{onClick:function(){p(Y.f9.RESERVE_TOKEN_ACTIONS,{type:"Underlying Token",assetName:n.name,asset:n.underlyingAsset,aToken:n.aTokenAddress,market:h,variableDebtToken:n.variableDebtTokenAddress})},component:"a",href:u.explorerLinkBuilder({address:null===n||void 0===n?void 0:n.underlyingAsset}),target:"_blank",divider:!0,children:[(0,q.jsx)(Be.T1,{symbol:n.iconSymbol,sx:{fontSize:"20px"}}),(0,q.jsx)(a.Z,{variant:"subheader1",sx:{ml:3},noWrap:!0,"data-cy":"assetName",children:n.symbol})]}),!r&&(0,q.jsxs)(o.Z,{children:[(0,q.jsx)(o.Z,{sx:{px:4,pt:3,pb:2},children:(0,q.jsx)(a.Z,{variant:"secondary12",color:"text.secondary",children:(0,q.jsx)(i.cC,{id:"Mooncake Finance aToken"})})}),(0,q.jsxs)(Ie.Z,{component:"a",onClick:function(){p(Y.f9.RESERVE_TOKEN_ACTIONS,{type:"aToken",assetName:n.name,asset:n.underlyingAsset,aToken:n.aTokenAddress,market:h,variableDebtToken:n.variableDebtTokenAddress})},href:u.explorerLinkBuilder({address:null===n||void 0===n?void 0:n.aTokenAddress}),target:"_blank",divider:v,children:[(0,q.jsx)(Be.T1,{symbol:n.iconSymbol,aToken:!0,sx:{fontSize:"20px"}}),(0,q.jsx)(a.Z,{variant:"subheader1",sx:{ml:3},noWrap:!0,"data-cy":"assetName",children:"a"+n.symbol})]})]}),v&&(0,q.jsx)(o.Z,{sx:{px:4,pt:3,pb:2},children:(0,q.jsx)(a.Z,{variant:"secondary12",color:"text.secondary",children:(0,q.jsx)(i.cC,{id:"Mooncake Finance debt token"})})}),n.borrowingEnabled&&(0,q.jsxs)(Ie.Z,{component:"a",href:u.explorerLinkBuilder({address:null===n||void 0===n?void 0:n.variableDebtTokenAddress}),target:"_blank",onClick:function(){p(Y.f9.RESERVE_TOKEN_ACTIONS,{type:"Variable Debt",assetName:n.name,asset:n.underlyingAsset,aToken:n.aTokenAddress,market:h,variableDebtToken:n.variableDebtTokenAddress})},children:[(0,q.jsx)(Be.T1,{symbol:"default",sx:{fontSize:"20px"}}),(0,q.jsx)(a.Z,{variant:"subheader1",sx:{ml:3},noWrap:!0,"data-cy":"assetName",children:"Variable debt "+n.symbol})]}),n.stableBorrowRateEnabled&&(0,q.jsxs)(Ie.Z,{component:"a",href:u.explorerLinkBuilder({address:null===n||void 0===n?void 0:n.stableDebtTokenAddress}),target:"_blank",onClick:function(){p(Y.f9.RESERVE_TOKEN_ACTIONS,{type:"Stable Debt",assetName:n.name,asset:n.underlyingAsset,aToken:n.aTokenAddress,market:h,variableDebtToken:n.variableDebtTokenAddress,stableDebtToken:n.stableDebtTokenAddress})},children:[(0,q.jsx)(Be.T1,{symbol:"default",sx:{fontSize:"20px"}}),(0,q.jsx)(a.Z,{variant:"subheader1",sx:{ml:3},noWrap:!0,"data-cy":"assetName",children:"Stable debt "+n.symbol})]})]})]})},Re=function(e){var n=e.underlyingAsset,t=(0,l.useRouter)(),r=(0,u.HT)(),s=r.reserves,c=r.loading,d=(0,D.f)(),x=d.currentMarket,h=d.currentChainId,m=(0,I.hu)(x),v=m.market,b=m.network,j=(0,P.Z)(),f=j.addERC20Token,g=j.switchNetwork,w=j.chainId,Z=j.connected,A=(0,z.Yh)((function(e){return[e.displayGho]})),S=(0,p.Z)(A,1)[0],E=(0,T.Z)(),O=(0,ye.Z)(E.breakpoints.down("sm")),B=s.find((function(e){return e.underlyingAsset===n})),N=O?"main16":"main21",_=function(){return(0,q.jsx)(o.Z,{mr:3,sx:{mr:3,display:"flex",alignItems:"center",justifyContent:"center"},children:c?(0,q.jsx)(k.Z,{variant:"circular",width:40,height:40,sx:{background:"#383D51"}}):(0,q.jsx)("img",{src:"/icons/tokens/".concat(B.iconSymbol.toLowerCase(),".svg"),width:"40px",height:"40px",alt:""})})},M=function(){return c?(0,q.jsx)(k.Z,{width:60,height:28,sx:{background:"#383D51"}}):(0,q.jsx)(a.Z,{variant:N,children:B.name})},R=S({symbol:B.symbol,currentMarket:x});return(0,q.jsxs)(Te.f,{titleComponent:(0,q.jsxs)(o.Z,{children:[(0,q.jsxs)(o.Z,{sx:{display:"flex",alignItems:O?"flex-start":"center",alignSelf:O?"flex-start":"center",mb:4,minHeight:"40px",flexDirection:O?"column":"row"},children:[(0,q.jsx)(C.Z,{variant:"surface",size:"medium",color:"primary",startIcon:(0,q.jsx)(F.Z,{sx:{fontSize:"20px"},children:(0,q.jsx)(Ce.Z,{})}),onClick:function(){0!==history.state.idx?t.back():t.push("/markets")},sx:{mr:3,mb:O?"24px":"0"},children:(0,q.jsx)(i.cC,{id:"Go Back"})}),(0,q.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,q.jsx)(I.gO,{size:20,logo:b.networkLogoPath}),(0,q.jsxs)(a.Z,{variant:"subheader1",sx:{color:"common.white"},children:[v.marketTitle," ",(0,q.jsx)(i.cC,{id:"Market"})]})]})]}),O&&(0,q.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center",mb:6},children:[(0,q.jsx)(_,{}),(0,q.jsxs)(o.Z,{children:[!c&&(0,q.jsx)(a.Z,{sx:{color:"#A5A8B6"},variant:"caption",children:B.symbol}),(0,q.jsxs)(o.Z,{sx:{display:"inline-flex",alignItems:"center"},children:[(0,q.jsx)(M,{}),c?(0,q.jsx)(k.Z,{width:160,height:16,sx:{ml:1,background:"red"}}):(0,q.jsxs)(o.Z,{sx:{display:"flex"},children:[(0,q.jsx)(Pe,{poolReserve:B,downToSM:O,hideAToken:R}),Z&&(0,q.jsx)(Ne,{poolReserve:B,downToSM:O,switchNetwork:g,addERC20Token:f,currentChainId:h,connectedChainId:w,hideAToken:R})]})]})]})]})]}),children:[!O&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Ae.d,{title:!c&&(0,q.jsx)(i.cC,{id:"{0}",values:{0:B.symbol}}),withoutIconWrapper:!0,icon:(0,q.jsx)(_,{}),loading:c,children:(0,q.jsxs)(o.Z,{sx:{display:"inline-flex",alignItems:"center"},children:[(0,q.jsx)(M,{}),(0,q.jsxs)(o.Z,{sx:{display:"flex"},children:[(0,q.jsx)(Pe,{poolReserve:B,downToSM:O,hideAToken:R}),Z&&(0,q.jsx)(Ne,{poolReserve:B,downToSM:O,switchNetwork:g,addERC20Token:f,currentChainId:h,connectedChainId:w,hideAToken:R})]})]})}),(0,q.jsx)(y.Z,{orientation:"vertical",flexItem:!0,sx:{my:1,borderColor:"rgba(235, 235, 239, 0.08)"}})]}),R?(0,q.jsx)(Me,{}):(0,q.jsx)(De,{underlyingAsset:n})]})},Fe=t(15446);function Le(){var e=(0,l.useRouter)(),n=(0,u.HT)().reserves,t=e.query.underlyingAsset,r=(0,c.useState)("overview"),s=r[0],m=r[1],p=(0,z.Yh)((function(e){return e.trackEvent}));(0,c.useEffect)((function(){p("Page Viewed",{"Page Name":"Reserve Overview"})}),[p]);var v=n.find((function(e){return e.underlyingAsset===t})),b="overview"===s;return(0,q.jsxs)(h.hv,{asset:v,children:[(0,q.jsx)(Re,{underlyingAsset:t}),(0,q.jsxs)(Fe.O,{children:[(0,q.jsx)(o.Z,{sx:{display:{xs:"flex",lg:"none"},justifyContent:{xs:"center",xsm:"flex-start"},mb:{xs:3,xsm:4}},children:(0,q.jsxs)(x.Z,{color:"primary",value:s,exclusive:!0,onChange:function(e,n){return m(n)},sx:{width:{xs:"100%",xsm:"359px"},height:"44px"},children:[(0,q.jsx)(d.Z,{value:"overview",disabled:"overview"===s,children:(0,q.jsx)(a.Z,{variant:"subheader1",children:(0,q.jsx)(i.cC,{id:"Overview"})})}),(0,q.jsx)(d.Z,{value:"actions",disabled:"actions"===s,children:(0,q.jsx)(a.Z,{variant:"subheader1",children:(0,q.jsx)(i.cC,{id:"Your info"})})})]})}),(0,q.jsxs)(o.Z,{sx:{display:"flex"},children:[(0,q.jsx)(o.Z,{sx:{display:{xs:b?"block":"none",lg:"block"},width:{xs:"100%",lg:"calc(100% - 432px)"},mr:{xs:0,lg:4}},children:(0,q.jsx)(Ze,{reserve:v})}),(0,q.jsx)(o.Z,{sx:{display:{xs:b?"none":"block",lg:"block"},width:{xs:"100%",lg:"416px"}},children:(0,q.jsx)(ce,{reserve:v})})]})]})]})}Le.getLayout=function(e){return(0,q.jsx)(m.Z,{children:e})}},15446:function(e,n,t){"use strict";t.d(n,{O:function(){return o}});var r=t(61953),s=t(64288),i=t(85893),o=function(e){var n=e.children;return(0,i.jsx)(r.Z,{sx:{display:"flex",flexDirection:"column",flex:1,mt:{xs:"-32px",lg:"-46px",xl:"-44px",xxl:"-48px"}},children:(0,i.jsx)(s.Z,{children:n})})}},25563:function(e,n,t){"use strict";t.d(n,{hu:function(){return w},St:function(){return Z},gO:function(){return C},tF:function(){return T}});var r=t(59499),s=t(61782),i=t(61953),o=t(72389),a=t(62097),l=t(61225),c=t(82334),d=t(81645),x=t(29630),u=t(31538),h=t(61702),m=t(67294),p=t(77228),v=t(57609),b=t(46930),j=t(25298),f=t(85893);function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var k,w=function(e){var n=j.ei[e];return{market:n,network:j.m5[n.chainId]}},Z=function(e){var n=["G\xf6rli","Ropsten","Mumbai","Sepolia","Fuji","Testnet","Kovan","Rinkeby"],t=e.split(" "),r=t.filter((function(e){return n.indexOf(e)>-1}));return{name:t.filter((function(e){return!r.includes(e)})).join(" "),testChainName:r[0]}},C=function(e){var n=e.size,t=e.logo,r=e.testChainName;return(0,f.jsxs)(i.Z,{sx:{mr:2,width:n,height:n,position:"relative"},children:[(0,f.jsx)("img",{src:t,alt:"",width:"100%",height:"100%"}),r&&(0,f.jsx)(o.Z,{title:r,arrow:!0,children:(0,f.jsx)(i.Z,{sx:{bgcolor:"#29B6F6",width:"16px",height:"16px",borderRadius:"50%",color:"common.white",fontSize:"12px",lineHeight:"16px",display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",right:"-2px",bottom:"-2px"},children:r.split("")[0]})})]})};!function(e){e[e.V2=0]="V2",e[e.V3=1]="V3"}(k||(k={}));var T=function(){var e=(0,b.f)(),n=e.currentMarket,t=e.setCurrentMarket,r=(0,m.useState)(k.V3)[0],o=(0,a.Z)(),y=(0,l.Z)(o.breakpoints.up("lg")),T=(0,l.Z)(o.breakpoints.down("xsm")),A=(0,p.Yh)((function(e){return e.trackEvent}));return(0,f.jsx)(c.Z,{select:!0,"aria-label":"select market","data-cy":"marketSelector",value:n,onChange:function(e){A(v.h1.CHANGE_MARKET,{market:e.target.value}),t(e.target.value)},sx:{mr:2,"& .MuiOutlinedInput-notchedOutline":{border:"none"}},SelectProps:{native:!1,className:"MarketSwitcher__select",IconComponent:function(e){return(0,f.jsx)(d.Z,g(g({fontSize:"medium"},e),{},{children:(0,f.jsx)(s.Z,{})}))},renderValue:function(e){var n=w(e),t=n.market,r=n.network;return(0,f.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,f.jsx)(C,{size:y?32:28,logo:r.networkLogoPath,testChainName:Z(t.marketTitle).testChainName}),(0,f.jsx)(i.Z,{sx:{mr:1,display:"inline-flex",alignItems:"flex-start"},children:(0,f.jsxs)(x.Z,{variant:y?"display1":"h1",sx:{fontSize:T?"1.55rem":void 0,color:"common.white",mr:1},children:[Z(t.marketTitle).name," ",t.isFork?"Fork":"",y&&" Market"]})})]})},sx:{"&.MarketSwitcher__select .MuiSelect-outlined":{pl:0,py:0,backgroundColor:"transparent !important"},".MuiSelect-icon":{color:"#F1F1F3"}},MenuProps:{anchorOrigin:{vertical:"bottom",horizontal:"right"},PaperProps:{style:{minWidth:240},variant:"outlined",elevation:0}}},children:j.z2.map((function(e){var n=w(e),t=n.market,s=n.network,i=Z(t.marketTitle);return(0,f.jsxs)(u.Z,{"data-cy":"marketSelector_".concat(e),value:e,sx:{".MuiListItemIcon-root":{minWidth:"unset"},display:t.v3&&r===k.V2||!t.v3&&r===k.V3?"none":"flex"},children:[(0,f.jsx)(C,{size:32,logo:s.networkLogoPath,testChainName:i.testChainName}),(0,f.jsxs)(h.Z,{sx:{mr:0},children:[i.name," ",t.isFork?"Fork":""]}),(0,f.jsx)(h.Z,{sx:{textAlign:"right"},children:(0,f.jsx)(x.Z,{color:"text.muted",variant:"description",children:i.testChainName})})]},e)}))})}},40535:function(e,n,t){"use strict";t.d(n,{V:function(){return m}});var r=t(49501),s=t(62097),i=t(61225),o=t(61953),a=t(29630),l=t(75084),c=t(77228),d=t(67728),x=t(25563),u=t(68861),h=t(85893),m=function(e){var n=e.pageTitle,t=e.withMarketSwitcher,m=e.withMigrateButton,p=(0,c.Yh)((function(e){return(0,d.lY)(e)})),v=(0,s.Z)(),b=(0,i.Z)(v.breakpoints.up("lg")),j=(0,i.Z)(v.breakpoints.down("xsm"));return(0,h.jsxs)(o.Z,{sx:{display:"flex",alignItems:{xs:"flex-start",xsm:"center"},mb:n?4:0,flexDirection:{xs:"column",xsm:"row"}},children:[n&&(j||!t)&&(0,h.jsx)(o.Z,{sx:{display:"flex",alignItems:"flex-start"},children:(0,h.jsx)(a.Z,{variant:j?"h2":b?"display1":"h1",sx:{color:t?"text.muted":"text.white",mr:{xs:5,xsm:3},mb:{xs:1,xsm:0}},children:n})}),(0,h.jsxs)(o.Z,{sx:{display:"flex",alignItems:"flex-start",flexWrap:"wrap",mb:n?0:4},children:[t&&(0,h.jsx)(x.tF,{}),p&&m&&(0,h.jsx)(u.rU,{href:u.Z6.migrationTool,sx:{mt:{xs:2,xsm:0}},children:(0,h.jsx)(l.Z,{variant:"gradient",size:"small",children:(0,h.jsx)(r.cC,{id:"Migrate to V3"})})})]})]})}},74815:function(e,n,t){"use strict";t.d(n,{f:function(){return d}});var r=t(59499),s=t(61953),i=t(64288),o=t(40535),a=t(85893);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=function(e){var n=e.pageTitle,t=e.titleComponent,r=e.withMarketSwitcher,l=e.withMigrateButton,d=e.bridge,x=e.children,u=e.containerProps,h=void 0===u?{}:u;return(0,a.jsx)(s.Z,{sx:{bgcolor:"background.header",pt:{xs:10,md:12},pb:{xs:18,md:20,lg:"94px",xl:"92px",xxl:"96px"},color:"#F1F1F3"},children:(0,a.jsx)(i.Z,c(c({},h),{},{sx:c(c({},h.sx),{},{pb:0}),children:(0,a.jsxs)(s.Z,{sx:{px:{xs:4,xsm:6}},children:[!t&&(0,a.jsx)(o.V,{pageTitle:n,withMarketSwitcher:r,withMigrateButton:l,bridge:d}),t&&t,(0,a.jsx)(s.Z,{sx:{display:"flex",alignItems:"flex-start",gap:{xs:3,xsm:8},flexWrap:"wrap",width:"100%"},children:x})]})}))})}},87369:function(e,n,t){"use strict";t.d(n,{d:function(){return c}});var r=t(62097),s=t(61225),i=t(61953),o=t(29630),a=t(91655),l=t(85893),c=function(e){var n=e.icon,t=e.title,c=e.titleIcon,d=e.children,x=e.hideIcon,u=e.variant,h=void 0===u?"dark":u,m=e.withLine,p=e.loading,v=e.withoutIconWrapper,b=(0,r.Z)(),j=(0,s.Z)(b.breakpoints.up("sm"));return(0,l.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center",width:{xs:"calc(50% - 12px)",xsm:"unset"}},children:[m&&(0,l.jsx)(i.Z,{sx:{mr:8,my:"auto",width:"1px",bgcolor:"#F2F3F729",height:"37px"}}),!x&&(v?n&&n:(0,l.jsx)(i.Z,{sx:{display:{xs:"none",md:"flex"},alignItems:"center",justifyContent:"center",border:"1px solid #EBEBED1F",borderRadius:"12px",bgcolor:"#383D51",boxShadow:"0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25)",width:42,height:42,mr:3},children:n&&n})),(0,l.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,l.jsxs)(i.Z,{sx:{display:"inline-flex",alignItems:"center"},children:[(0,l.jsx)(o.Z,{sx:{color:"dark"===h?"#A5A8B6":"#62677B"},variant:j?"description":"caption",component:"div",children:t}),c&&c]}),p?(0,l.jsx)(a.Z,{width:60,height:j?28:24,sx:{background:"#383D51"}}):d]})]})}},3765:function(e,n,t){"use strict";t.d(n,{p:function(){return d}});var r=t(49501),s=t(75084),i=t(26074),o=t(77228),a=t(57609),l=t(58294),c=t(85893),d=function(e){var n=e.funnel,t=(0,i.q)().setWalletModalOpen,d=(0,o.Yh)((function(e){return e.trackEvent}));return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.Z,{variant:"gradient",onClick:function(){d(a.Bp.CONNECT_WALLET,{funnel:n}),t(!0)},children:(0,c.jsx)(r.cC,{id:"Connect wallet"})}),(0,c.jsx)(l.x,{})]})}},54373:function(e,n,t){"use strict";t.d(n,{K:function(){return d}});var r=t(49501),s=t(75331),i=t(69331),o=t(77228),a=t(57609),l=t(68861),c=t(85893);function d(e){var n=e.bridge,t=e.name,d=e.chainId,x=e.icon,u=e.sx,h=[s.a_.avalanche].includes(d)?"Ethereum & Bitcoin":"Ethereum",m=(0,o.Yh)((function(e){return e.trackEvent}));return(0,c.jsx)(i.v,{severity:"info",icon:x,sx:u,children:n?(0,c.jsx)(r.cC,{id:"Your {name} wallet is empty. Purchase or transfer assets or use <0>{0}</0> to transfer your {network} assets.",values:{0:n.name,name:t,network:h},components:{0:(0,c.jsx)(l.rU,{onClick:function(){m(a.vh.EXTERNAL_LINK,{bridge:n.name,Link:"Bridge Link"})},href:n.url})}}):(0,c.jsx)(r.cC,{id:"Your {name} wallet is empty. Purchase or transfer assets.",values:{name:t}})})}},97438:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reserve-overview",function(){return t(29822)}])}},function(e){e.O(0,[232,774,888,179],(function(){return n=97438,e(e.s=n);var n}));var n=e.O();_N_E=n}]);