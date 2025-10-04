"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[757],{1285:(e,t,i)=>{i.d(t,{i:()=>x});var n=i(6651),r=i(5611),o=i(1839),a=i(2478),l=i(1290),s=i(7537),c=i(2926),p=i(4522),d=i(9505);let f=[],y=!1,m=(0,l.fI)("lock"),g=()=>{y||r.u.refresh(),m.release(),y=!0},h=async(e,t=[])=>{let i=[...e].filter(e=>!t.includes(e));0!==i.length&&(await Promise.allSettled(i),await h(e,[...t,...i]))},u=!1,w=()=>{s.Bd&&(u||(window.scrollY<window.innerHeight&&window.scrollTo(0,0),u=!0))},x=({minDuration:e=0,stopAnimations:t,slowAnimations:i,scope:r}={})=>{let{initComplete:l}=(0,p.use)(a.cH),[m,u]=(0,p.useState)(y?{ready:!0,completed:!0,isAtPageTop:!0}:{ready:!1,completed:!1,isAtPageTop:null});return s.Bd,(0,n.A)(async()=>{if(!l||m.ready)return;if(t&&!r||i&&!r)throw Error("scope is required in order to correctly stop animations");if(w(),i&&r)for(let e of Array.from(r.current?.querySelectorAll(i)??[]))for(let t of e.getAnimations())f.push(new Promise(e=>{o.Ay.to(t,{playbackRate:0,duration:1,onComplete:e})}));if(t&&r)for(let e of Array.from(r.current?.querySelectorAll(t)??[]))for(let t of e.getAnimations()){let e=Number(t.effect?.getTiming().duration),i=Math.floor(Number(t.currentTime)/e);t.effect?.updateTiming({iterations:i+1}),f.push(t.finished)}await h(f);let n=Math.max(0,e-performance.now());await (0,c.yy)(n);let a=document.body.getAnimations({subtree:!0});for(let e of((0,d.flushSync)(()=>{u({ready:!0,completed:!1,isAtPageTop:window.scrollY<window.innerHeight})}),document.body.getAnimations({subtree:!0}).filter(e=>!a.includes(e))))f.push(e.finished);await h(f),g(),u(e=>({...e,completed:!0}))},[l,m.ready,e,r,i,t]),m}},1442:(e,t,i)=>{i.d(t,{AnalyticsLink:()=>k});var n=i(8946),r=i(954),o=i(7486),a=i(4764),l=i(9321),s=i.n(l),c=i(2926),p=i(5611),d=i(1290);let f=new(i(5493)).A({triggerHappyEvents:["end"],resetHappyEvents:["start","routeChange"]}),y=e=>{let t=100;if(e){let i=document.querySelector(e);t+=Number.parseFloat(i?.getAttribute("data-anchor-offset")??"0")}return t},m=()=>h;function g(e,t){return setTimeout(()=>t(Error("Navigation timeout")),3e4)}async function h(e){let{e:t,to:i,transition:n}=e,r=new URL(i,window.location.origin);if(i.startsWith("#")||(0,c.U6)(r.pathname,window.location.pathname)){t.preventDefault();let e=(0,d.fI)("unlock");if(a.A.saveAnchorNames&&window.history.replaceState({},"",i),r.hash){let t=y(r.hash);window.lenis?.scrollTo(r.hash,{offset:t,onComplete:e.release}),f.dispatchEvent("scroll",r.hash)}else window.lenis?.scrollTo(0,{onComplete:e.release}),f.dispatchEvent("scroll",null);return}if("instant"===n||!n){f.dispatchEvent("start","instant");let e=window.location.href,t=new Promise(g),i=new Promise(t=>{let i=setInterval(()=>{window.location.href!==e&&(t(),clearInterval(i))},5)});await Promise.race([t,i]),await (0,c.yy)(10),window.lenis?.scrollTo(0,{immediate:!0}),p.u.refresh(),f.dispatchEvent("routeChange","instant"),f.dispatchEvent("end","instant");return}throw Error("we haven't added support for this yet -robbie")}let u=e=>"string"==typeof e?{url:e,newTab:!(0,c.mC)(e)}:e?"internal"===e.type&&e.internalSlug?{url:`/${e.internalSlug.trim()}${e.parameters?.trim()||""}${e.anchor?.trim()||""}`,newTab:e.blank??!1}:"external"===e.type&&e.url?{url:`${e.url.trim()}${e.parameters?.trim()||""}${e.anchor?.trim()||""}`,newTab:e.blank??!0}:"email"===e.type&&e.email?{url:`mailto:${e.email.trim()}`,newTab:!0}:"phone"===e.type?{url:`tel:${e.phone?.replace(/\s+/g,"").trim()}`,newTab:!0}:{url:void 0,newTab:!1}:{url:void 0,newTab:!1};function w(e){let t,i,o,l,p,d,f,y,g;let h=(0,r.c)(27);h[0]!==e?({children:t,ref:o,transition:l,...i}=e,h[0]=e,h[1]=t,h[2]=i,h[3]=o,h[4]=l):(t=h[1],i=h[2],o=h[3],l=h[4]);let w=void 0===l?a.A.defaultViewTransition:l,x=m();if(i.type){let e,r;return h[5]===Symbol.for("react.memo_cache_sentinel")?(e={cursor:"pointer"},h[5]=e):e=h[5],h[6]!==t||h[7]!==i?(r=(0,n.jsx)("button",{...i,ref:o,style:e,children:t}),h[6]=t,h[7]=i,h[8]=r):r=h[8],r}h[9]!==i.href?({url:f,newTab:p}=u(i.href),d=!!f&&(0,c.mC)(f),h[9]=i.href,h[10]=p,h[11]=d,h[12]=f):(p=h[10],d=h[11],f=h[12]);let b=d;h[13]!==b||h[14]!==p||h[15]!==w||h[16]!==x||h[17]!==f?(y=e=>{f&&(b&&!p?x({e,to:f,transition:w}):window.open(f,p?"_blank":"_self"))},h[13]=b,h[14]=p,h[15]=w,h[16]=x,h[17]=f,h[18]=y):y=h[18];let k=y;return h[19]!==t||h[20]!==b||h[21]!==p||h[22]!==k||h[23]!==i||h[24]!==o||h[25]!==f?(g=b&&f?(0,n.jsx)(s(),{...i,href:f,ref:o,target:p?"_blank":void 0,onClick:k,suppressHydrationWarning:!0,children:t}):(0,n.jsx)("a",{...i,href:f??void 0,ref:o,target:p?"_blank":void 0,onClick:k,children:t}),h[19]=t,h[20]=b,h[21]=p,h[22]=k,h[23]=i,h[24]=o,h[25]=f,h[26]=g):g=h[26],g}var x=i(4977),b=i(1456);function k(e){let t,i,a,l,s,c;let p=(0,r.c)(13);p[0]!==e?({analyticsLocation:t,ref:a,...i}=e,p[0]=e,p[1]=t,p[2]=i,p[3]=a):(t=p[1],i=p[2],a=p[3]);let d=(0,x.A)(a);return p[4]!==t||p[5]!==i.children||p[6]!==i.href?(l=()=>{b.z.track("Button Clicked",{destination:i.href,location:t,text:i.children?.toString()})},p[4]=t,p[5]=i.children,p[6]=i.href,p[7]=l):l=p[7],p[8]!==d?(s={target:d},p[8]=d,p[9]=s):s=p[9],(0,o.A)("click",l,s),p[10]!==d||p[11]!==i?(c=(0,n.jsx)(w,{...i,ref:d}),p[10]=d,p[11]=i,p[12]=c):c=p[12],c}},2048:(e,t,i)=>{i.d(t,{Ay:()=>g});var n=i(4738),r=i(7248),o=i(6920),a=i.n(o),l=i(8320),s=i.n(l),c=i(8908),p=i.n(c);(0,r.AH)`
	/* stylelint-disable-next-line property-no-vendor-prefix  */
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	background-size: 100%;
	background-clip: text;
`;let d={capHeight:700,ascent:950,descent:-240,lineGap:0,unitsPerEm:1e3},f={capHeight:708,ascent:941,descent:-232,lineGap:0,unitsPerEm:1e3},y={capHeight:682,ascent:1006,descent:-194,lineGap:286,unitsPerEm:1e3},m=e=>(0,n.$e)("&",e).replaceAll(".&",""),g={custom:{oversize4:(0,r.AH)`
			/* Oversized/04 */
			font-family: ${a().style.fontFamily};
			font-size: 92px;
			font-style: normal;
			font-weight: 570;
			letter-spacing: -4.6px;
			${m({fontMetrics:d,fontSize:92,leading:104.88})}
		`},oversize1:(0,r.AH)`
		/* Oversized/01 */
		font-family: ${a().style.fontFamily};
		font-size: 148px;
		font-style: normal;
		font-weight: 500;
		line-height: 100%; /* 148px */
		letter-spacing: -7.4px;
		letter-spacing: ${-.05}em;
		${m({fontMetrics:d,fontSize:148,leading:148})}
	`,oversize2:(0,r.AH)`
		/* Oversized/02 */
		font-family: ${a().style.fontFamily};
		font-size: 124px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: -6.2px;
		letter-spacing: ${-.05}em;
		${m({fontMetrics:d,fontSize:124,leading:124})}
	`,oversize3:(0,r.AH)`
		/* Oversized/03 */
		font-family: ${s().style.fontFamily};
		font-size: 132px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: -6.6px;
		letter-spacing: ${-6.6/132}em;
		${m({fontMetrics:f,fontSize:132,leading:132})}
	`,oversize4:(0,r.AH)`
		/* Oversized/04 */
		font-family: ${a().style.fontFamily};
		font-size: 92px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: -4.6px;
		letter-spacing: ${-4.6/92}em;
		${m({fontMetrics:d,fontSize:92,leading:92})}
	`,header1:(0,r.AH)`
		/* Header/01 */
		font-family: ${a().style.fontFamily};
		font-size: 72px;
		font-style: normal;
		font-weight: 500;
		line-height: 100%; /* 72px */
		letter-spacing: -3.6px;
		letter-spacing: ${-.05}em;
		${m({fontMetrics:d,fontSize:72,leading:72})}
	`,header2:(0,r.AH)`
		/* Header/02 */
		font-family: ${s().style.fontFamily};
		font-size: 44px;
		font-style: normal;
		font-weight: 400;
		line-height: 52px; /* 118.182% */
		letter-spacing: -2.2px;
		letter-spacing: ${-.05}em;
		${m({fontMetrics:f,fontSize:44,leading:52})}
	`,header3:(0,r.AH)`
		/* Header/03 */
		font-family: ${s().style.fontFamily};
		font-size: 31px;
		font-style: normal;
		font-weight: 400;
		line-height: 36px; /* 116.129% */
		letter-spacing: -1.55px;
		letter-spacing: ${-.05}em;
		${m({fontMetrics:f,fontSize:31,leading:36})}
	`,header4:(0,r.AH)`
		/* Header/04 */
		font-family: ${a().style.fontFamily};
		font-size: 26px;
		font-style: normal;
		font-weight: 570;
		line-height: 31px; /* 119.231% */
		letter-spacing: -1.3px;
		letter-spacing: ${-.05}em;
		${m({fontMetrics:d,fontSize:26,leading:31})}
	`,header5:(0,r.AH)`
		/* Header/05 */
		font-family: ${a().style.fontFamily};
		font-size: 56px;
		font-style: normal;
		font-weight: 500;
		letter-spacing: -2.8px;
		${m({fontMetrics:f,fontSize:56,leading:56*1.15})}
	`,header6:(0,r.AH)`
		/* Header/03 */
		font-family: ${a().style.fontFamily};
		font-size: 36px;
		font-style: normal;
		font-weight: 400;
		${m({fontMetrics:f,fontSize:36,leading:36})}
	`,body1:(0,r.AH)`
		/* Body/01 */
		font-family: ${a().style.fontFamily};
		font-size: 19px;
		font-style: normal;
		font-weight: 400;
		line-height: 32px; /* 168.421% */
		letter-spacing: -0.95px;
		letter-spacing: ${-.95/19}em;
		${m({fontMetrics:d,fontSize:19,leading:32})}
	`,body2:(0,r.AH)`
		/* Body/02 */
		font-family: ${a().style.fontFamily};
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 20px; /* 125% */
		letter-spacing: -0.8px;
		letter-spacing: ${-.05}em;
		${m({fontMetrics:d,fontSize:16,leading:20})}
	`,body3:(0,r.AH)`
		/* Body/03 */
		font-family: ${a().style.fontFamily};
		font-size: 15px;
		font-style: normal;
		font-weight: 500;
		line-height: 18px; /* 120% */
		letter-spacing: -0.45px;
		letter-spacing: ${-.45/15}em;
		${m({fontMetrics:d,fontSize:15,leading:18})}
	`,body4:(0,r.AH)`
		/* Body/04 */
		font-family: ${a().style.fontFamily};
		font-size: 13px;
		font-style: normal;
		font-weight: 500;
		line-height: 18px; /* 138.462% */
		letter-spacing: -0.39px;
		letter-spacing: ${-.39/13}em;
		${m({fontMetrics:d,fontSize:13,leading:18})}
	`,kicker1:(0,r.AH)`
		/* Kicker/01 */
		font-family: ${p().style.fontFamily};
		font-size: 14px;
		font-style: normal;
		font-weight: 700;
		line-height: 52px; /* 371.429% */
		letter-spacing: 1.68px;
		text-transform: uppercase;
		${m({fontMetrics:y,fontSize:14,leading:52})}
	`,kicker2:(0,r.AH)`
		/* Kicker02 */
		font-family: ${p().style.fontFamily};
		font-size: 10px;
		font-style: normal;
		font-weight: 500;
		letter-spacing: 1.68px;
		text-transform: uppercase;
		${m({fontMetrics:y,fontSize:10,leading:52})}
	`,kicker3:(0,r.AH)`
		/* Kicker/03 */
		font-family: ${p().style.fontFamily};
		font-size: 8px;
		font-style: normal;
		font-weight: 400;
		letter-spacing: 0.96px;
		text-transform: uppercase;
		${m({fontMetrics:y,fontSize:8})}
	`}},2478:(e,t,i)=>{i.d(t,{cH:()=>l,oq:()=>p,qC:()=>s});var n=i(8946),r=i(954),o=i(4522),a=i(9240);let l=(0,o.createContext)({innerWidth:0,innerHeight:0,fullWidth:!1,desktop:!1,tablet:!1,mobile:!1,shouldHydrateUtilities:!1,initComplete:!1});function s(e){let t,i,s,p,d;let f=(0,r.c)(17),{children:y}=e,[m,g]=(0,o.useState)(!1),[h,u]=(0,o.useState)(!1),[w,x]=(0,o.useState)(!1),[b,k]=(0,o.useState)(!0),[v,$]=(0,o.useState)(0),[A,H]=(0,o.useState)(0),[z,S]=(0,o.useState)("hydrating-react"),[T,E]=(0,o.useTransition)();f[0]===Symbol.for("react.memo_cache_sentinel")?(t=()=>{k(window.innerWidth<=a.ik),x(window.innerWidth>a.ik&&window.innerWidth<=a.g8),u(window.innerWidth>a.g8&&window.innerWidth<=a.gR),g(window.innerWidth>a.gR),H(window.innerHeight),$(window.innerWidth)},f[0]=t):t=f[0];let M=t;f[1]!==T||f[2]!==z?(i=()=>{!T&&("hydrating-react"===z&&(performance.measure("context: loading",{start:"hydrating-react",detail:{devtools:{dataType:"track-entry",track:"Screen Context",color:"tertiary-dark",tooltipText:"React is hydrating"}}}),performance.mark("hydrating-utilities"),E(()=>{M(),S("hydrating-utilities")})),"hydrating-utilities"===z&&(performance.measure("context: hydrating utilities",{start:"hydrating-utilities",detail:{devtools:{dataType:"track-entry",track:"Screen Context",color:"secondary",tooltipText:"Utilities, like useAnimation and useMedia, are hydrating"}}}),performance.mark("hydration-complete"),E(()=>{S("hydration-complete")})),"hydration-complete"===z&&performance.measure("context: hydration complete",{start:"hydration-complete",detail:{devtools:{dataType:"track-entry",track:"Screen Context",color:"primary",tooltipText:"Hydration is finishing up"}}}))},s=[z,T,M],f[1]=T,f[2]=z,f[3]=i,f[4]=s):(i=f[3],s=f[4]),(0,o.useEffect)(i,s),c("resize",M);let C="hydrating-utilities"===z||"hydration-complete"===z,j="hydration-complete"===z;return f[5]!==h||f[6]!==m||f[7]!==A||f[8]!==v||f[9]!==b||f[10]!==w||f[11]!==C||f[12]!==j?(p={innerHeight:A,innerWidth:v,fullWidth:m,desktop:h,tablet:w,mobile:b,shouldHydrateUtilities:C,initComplete:j},f[5]=h,f[6]=m,f[7]=A,f[8]=v,f[9]=b,f[10]=w,f[11]=C,f[12]=j,f[13]=p):p=f[13],f[14]!==y||f[15]!==p?(d=(0,n.jsx)(l.Provider,{value:p,children:y}),f[14]=y,f[15]=p,f[16]=d):d=f[16],d}performance.mark("hydrating-react");let c=(e,t,i)=>{let n,a;let l=(0,r.c)(5),s=void 0===i?500:i,c=(0,o.useRef)(null);l[0]!==s||l[1]!==e||l[2]!==t?(n=()=>{let i=e=>{c.current&&clearTimeout(c.current),c.current=setTimeout(()=>{t(e)},s)};return window.addEventListener(e,i),()=>window.removeEventListener(e,i)},a=[s,e,t],l[0]=s,l[1]=e,l[2]=t,l[3]=n,l[4]=a):(n=l[3],a=l[4]),(0,o.useEffect)(n,a)},p=(e,t,i=500)=>{let n=null,r=e=>{n&&clearTimeout(n),n=setTimeout(()=>{t(e)},i)};return window.addEventListener(e,r),{cleanup:()=>window.removeEventListener(e,r)}}},3352:(e,t,i)=>{i.d(t,{sv:()=>a});var n=i(7248);let r=(e,t)=>(0,n.AH)`
	/* make the background the gradient */
	border: ${t}px solid transparent;
	background: ${e};
	background-size: calc(100% + ${2*t}px)
		calc(100% + ${2*t}px);
	background-position: center;

	/* clip out the background so we get transparency */
	mask:
		/* stylelint-disable-next-line declaration-property-value-no-unknown */
		linear-gradient(#fff 0 0) padding-box,
		linear-gradient(#fff 0 0);
	/* stylelint-disable-next-line declaration-property-value-no-unknown */
	mask-composite: xor;
	mask-composite: exclude;
`,o=e=>(t,i=1)=>(0,n.AH)`
		position: relative;
		isolation: isolate;

		&::${e} {
			position: absolute;
			content: "";
			inset: 0;
			z-index: 1;
			border-radius: inherit;
			pointer-events: none;
			${r(t,i)}
		}
	`,a=o("before");o("after")},3436:(e,t,i)=>{i.d(t,{j:()=>y});var n=i(8946),r=i(954),o=i(8972),a=i(3352),l=i(7248),s=i(9986),c=i(2048),p=i(1442);let d=(0,l.AH)`
	position: relative;
	${(0,a.sv)(s.A.electric,2)};
	padding: 16px 28px;
	background: ${s.A.black1};
	color: ${s.A.white1};

	&:active {
		color: ${s.A.white5};
	}
`,f={light:{},black:(0,l.vi)(d),gray:(0,l.vi)((0,l.AH)`
		${d};
		background: #1b1a18;
		background: color(display-p3 0.1059 0.102 0.0941);
	`),grayOversize:{...(0,l.vi)((0,l.AH)`
			${d};
			background: #1b1a18;
			background: color(display-p3 0.1059 0.102 0.0941);
			padding: 32px 64px;
		`),...(0,l.PK)((0,l.AH)`
			padding: 32px 28px;
		`)}};function y(e){let t,i,o,a,l,s;let c=(0,r.c)(12);c[0]!==e?({children:t,variant:o,...i}=e,c[0]=e,c[1]=t,c[2]=i,c[3]=o):(t=c[1],i=c[2],o=c[3]);let p="grayOversize"===o;return c[4]!==t||c[5]!==p?(a=(0,n.jsx)(m,{oversize:p,children:t}),c[4]=t,c[5]=p,c[6]=a):a=c[6],c[7]===Symbol.for("react.memo_cache_sentinel")?(l=(0,n.jsx)(h,{}),c[7]=l):l=c[7],c[8]!==i||c[9]!==a||c[10]!==o?(s=(0,n.jsxs)(g,{...i,variant:o,children:[a,l]}),c[8]=i,c[9]=a,c[10]=o,c[11]=s):s=c[11],s}let m=(0,l.I4)("div",({oversize:e})=>({...(0,l.vi)((0,l.AH)`
		${e?c.Ay.header4:c.Ay.body3};
	`),...(0,l.ZQ)((0,l.AH)`
		${e?c.Ay.header4:c.Ay.body1};
	`)})),g=(0,l.I4)(p.AnalyticsLink,({variant:e})=>({...(0,l.vi)((0,l.AH)`
		width: fit-content;
		padding: 22px 38px;
		background: ${s.A.white2};
		color: ${s.A.black2};
		border-radius: 99vw;
		display: flex;

		& > * {
			transition:
				translate 0.2s,
				opacity 0.2s;
		}

		&:hover > * {
			translate: -8px;
			opacity: 1;
		}

		&:active {
			color: ${s.A.purple1};
		}
	`),...(0,l.ZQ)((0,l.AH)`
		padding: 22px 38px;
	`),...(0,l.PK)((0,l.AH)`
		width: 100%;
		justify-content: center;
		text-align: center;
	`),...f[e]})),h=(0,l.I4)(o.A,{...(0,l.vi)((0,l.AH)`
		width: 8px;
		height: 8px;
		margin-top: -1px;
		margin-left: 4px;
		margin-right: -12px;
		opacity: 0;
	`)})},3568:(e,t,i)=>{i.d(t,{A:()=>n});let n={home:"/",todo:"/?todo",joinTheWaitlist:"/waitlist",login:"https://app.micro.so/login",privacy:"/privacy",terms:"/terms",supportEmail:{mail:"mailto:support@micro.so",display:"support@micro.so"},careers:"https://usemicro.notion.site/Careers-at-Micro-6c369927434f4c789ff088485e1fade1?pvs=4",instagram:"https://www.instagram.com/usemicro/",x:"https://x.com/microHQ",linkedin:"https://www.linkedin.com/company/microhq/"}},4977:(e,t,i)=>{i.d(t,{A:()=>o});var n=i(954),r=i(4522);let o=function(e){let t;let i=(0,n.c)(1),o=(0,r.useRef)(null);return i[0]===Symbol.for("react.memo_cache_sentinel")?(t=()=>o.current,i[0]=t):t=i[0],(0,r.useImperativeHandle)(e,t),o}},8972:(e,t,i)=>{i.d(t,{A:()=>a});var n,r=i(4522);function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)({}).hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(null,arguments)}let a=e=>r.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 9 9"},e),n||(n=r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.82904 2.10986H1.63971V0.609863H8.38971V7.35986H6.88971V3.17052L2.17004 7.89019L1.10938 6.82953L5.82904 2.10986Z",clipRule:"evenodd"})))},9986:(e,t,i)=>{i.d(t,{A:()=>c,J:()=>a});var n=i(8946),r=i(7248);let o=Object.entries({white1:["#ffffff","color(display-p3 1 1 1)"],white2:["#f9f5ee","color(display-p3 0.9725 0.9608 0.9373)"],white3:["#efe6d8","color(display-p3 0.9308 0.905 0.8532)"],white4:["#f0e6d5","color(display-p3 0.9333 0.902 0.8431)"],white5:["#dbcaab","color(display-p3 0.8588 0.7922 0.6706)"],black1:["#000000","color(display-p3 0 0 0)"],black2:["#0f1013","color(display-p3 0.0588 0.0627 0.0745)"],black3:["#14151a","color(display-p3 0.0784 0.0824 0.102)"],black4:["#272c34","color(display-p3 0.1562 0.171 0.2005)"],black5:["#1a1c21","color(display-p3 0.102 0.1098 0.1294)"],black6:["#3f4042","color(display-p3 0.2471 0.251 0.2588)"],blue1:["#5197b2","color(display-p3 0.3843 0.5843 0.6863)"],blue2:["#72b3cd","color(display-p3 0.5035 0.6958 0.7938)"],blue3:["#8fcce5","color(display-p3 0.6118 0.7922 0.8863)"],blue4:["#b0ddf1","color(display-p3 0.7255 0.8627 0.9373)"],green1:["#00544f","color(display-p3 0.1216 0.3255 0.3098)"],green2:["#379790","color(display-p3 0.3255 0.5843 0.5647)"],green3:["#00cfc4","color(display-p3 0.3373 0.8 0.7647)"],green4:["#1edcb5","color(display-p3 0.4068 0.8508 0.7176)"],orange1:["#cb8431","color(display-p3 0.7569 0.5294 0.2588)"],orange2:["#eaa04e","color(display-p3 0.8745 0.6392 0.3647)"],orange3:["#e4bf65","color(display-p3 0.8718 0.7537 0.4499)"],orange4:["#f5e8a8","color(display-p3 0.9531 0.9106 0.6872)"],purple1:["#ae86ad","color(display-p3 0.6588 0.5333 0.6706)"],purple2:["#cba3ca","color(display-p3 0.772 0.6435 0.784)"],purple3:["#e3c5e2","color(display-p3 0.869 0.7754 0.8778)"],purple4:["#ead3ea","color(display-p3 0.902 0.8314 0.9098)"],electric:["linear-gradient(91deg, #AE86AD 0.24%, #EAA04E 13.8%, #5197B2 35.34%, #E4BF66 55.55%, #379790 96.24%)","linear-gradient(91deg, color(display-p3 0.6588 0.5333 0.6706) 0.24%, color(display-p3 0.8745 0.6392 0.3647) 13.8%, color(display-p3 0.3843 0.5843 0.6863) 35.34%, color(display-p3 0.8706 0.7529 0.451) 55.55%, color(display-p3 0.3255 0.5843 0.5647) 96.24%)"]}),a=()=>(0,n.jsx)(r.kH,{children:(0,r.WC)((0,r.AH)`
			:root {
				@supports (not (color: color(display-p3 0 0 0))) {
					${o.map(([e,[t]])=>`--${e}: ${t};`).join("\n")}
				}

				@supports (color: color(display-p3 0 0 0)) {
					${o.map(([e,[t,i]])=>`--${e}: ${i??t};`).join("\n")}
				}
			}
		`)}),l=Object.fromEntries(o.map(([e])=>[e,`var(--${e})`])),s=Object.fromEntries(o.map(([e,[t]])=>[e,t])),c={...l,js:s,darkDotBackground:(0,r.AH)`
		background-size: 18px 18px;
		background-image: radial-gradient(
			circle at 50% 50%,
			${l.black6} 0,
			${l.black6} 1px,
			${l.black2} 1px
		);
	`,lightDotBackground:(0,r.AH)`
		background-size: 18px 18px;
		background-image: radial-gradient(
			circle at 50% 50%,
			${l.white5} 0,
			${l.white5} 1px,
			${l.white2} 1px
		);
	`}}}]);