(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[518],{2458:(e,t,i)=>{"use strict";var n=i(9614);i.o(n,"usePathname")&&i.d(t,{usePathname:function(){return n.usePathname}}),i.o(n,"useRouter")&&i.d(t,{useRouter:function(){return n.useRouter}}),i.o(n,"useSearchParams")&&i.d(t,{useSearchParams:function(){return n.useSearchParams}})},3195:(e,t,i)=>{"use strict";i.d(t,{Transition:()=>s});var n=i(8946),r=i(954),o=i(4522),a=i(1285);function s(e){let t;let i=(0,r.c)(4),{children:s}=e,{completed:l}=(0,a.i)();if(l){let e;return i[0]!==s?(e=(0,n.jsx)(o.unstable_ViewTransition,{children:s}),i[0]=s,i[1]=e):e=i[1],e}return i[2]!==s?(t=(0,n.jsx)(o.unstable_ViewTransition,{enter:"none",exit:"none",layout:"none",update:"none",share:"none",children:s}),i[2]=s,i[3]=t):t=i[3],t}},4738:(e,t,i)=>{"use strict";i.d(t,{$e:()=>o});let n=e=>parseFloat(e.toFixed(4)),r=({lineHeight:e,fontSize:t,capHeightTrim:i,baselineTrim:n})=>({fontSize:t,lineHeight:e,"::before":{content:"''",marginBottom:i,display:"table"},"::after":{content:"''",marginTop:n,display:"table"}});function o(e,t){let{"::before":i,"::after":o,...a}="capHeightTrim"in t?r(t):r(function(e){let{fontSize:t,lineHeight:i,fontMetrics:r}=function(e){let t,i,n;if("leading"in e&&"lineGap"in e)throw Error("Only a single line height style can be provided. Please pass either `lineGap` OR `leading`.");if("capHeight"in e&&"fontSize"in e)throw Error("Please pass either `capHeight` OR `fontSize`, not both.");let{fontMetrics:r}=e,o=r.capHeight/r.unitsPerEm;if("capHeight"in e)t=e.capHeight/o,i=e.capHeight;else if("fontSize"in e)t=e.fontSize,i=e.fontSize*o;else throw Error("Please pass either `capHeight` OR `fontSize`.");return"lineGap"in e?n=i+e.lineGap:"leading"in e&&(n=e.leading),{fontSize:t,lineHeight:n,fontMetrics:r}}(e),o=Math.abs(r.descent),a=r.capHeight/r.unitsPerEm,s=o/r.unitsPerEm,l=r.ascent/r.unitsPerEm,c=r.lineGap/r.unitsPerEm,u=(r.ascent+r.lineGap+o)/r.unitsPerEm*t,d=e=>i?e-(u-i)/2/t:e,h=-1*d(l-a+c/2),p=-1*d(s+c/2);return{fontSize:`${n(t)}px`,lineHeight:i?`${n(i)}px`:"normal",capHeightTrim:`${n(h)}em`,baselineTrim:`${n(p)}em`}}(t)),s=(t,i)=>`
.${e}${i?`::${i}`:""} {
${Object.keys(t).map(e=>`  ${e.replace(/[A-Z]/g,"-$&").toLowerCase()}: ${t[e].replace(/'/g,'"')}`).join(";\n")};
}`;return[s(a),s(i,"before"),s(o,"after")].join("\n")}let a=e=>`${n(100*e)}%`,s=e=>parseFloat(e)/100,l=e=>e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`),c=(e,t)=>{var i;if("subsets"in e&&(null==(i=null==e?void 0:e.subsets)?void 0:i[t]))return e.subsets[t].xWidthAvg;if("latin"!==t)throw Error(`The subset "${t}" is not available in the metrics provided for "${e.familyName}"`);return e.xWidthAvg},u=e=>{var t;let i=e.match(/^['"](?<name>.*)['"]$/);if(i&&(null==(t=i.groups)?void 0:t.name))return`"${i.groups.name.split('"').join('"')}"`;if(/^"/.test(e)){let[,...t]=e;return`"${t.map(e=>'"'===e?'"':e).join("")}"`}return/^[a-zA-Z\d\-_]+$/.test(e)?e:`"${e.split('"').join('"')}"`}},5133:(e,t,i)=>{Promise.resolve().then(i.bind(i,9763))},6651:(e,t,i)=>{"use strict";i.d(t,{A:()=>a});var n=i(7701),r=i(4522),o=i(5782);let a=function(e,t){(0,r.useEffect)(function(){var t=e(),i=!1;return!function(){(0,n.sH)(this,void 0,void 0,function(){return(0,n.YH)(this,function(e){switch(e.label){case 0:if(!(0,o.Tn)(t[Symbol.asyncIterator]))return[3,4];e.label=1;case 1:return[4,t.next()];case 2:if(e.sent().done||i)return[3,3];return[3,1];case 3:return[3,6];case 4:return[4,t];case 5:e.sent(),e.label=6;case 6:return[2]}})})}(),function(){i=!0}},t)}},9763:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>y});var n=i(8946),r=i(954),o=i(3436),a=i(3195),s=i(7248),l=i(4522);let c=(...e)=>{let[t,i]=(0,l.useState)(...e);return[t,(...e)=>(0,l.startTransition)(()=>i(...e))]};var u=i(2458),d=i(9986),h=i(2048),p=i(1442),m=i(3568),x=i(1456),f=i(8340);function g(){return(g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)({}).hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(null,arguments)}let b=f.KCZ([f.Ikc({success:f.euz(!0)}),f.Ikc({success:f.euz(!1),message:f.YjP()})]);function y(){let e,t,i,o,s,d,h,f,g,b,y,z,N,L,R,C,G,K,W,q,Y,U,B,M,Z,D,J,V,X,Q,ee,et,ei,en,er,eo,ea,es,el,ec,eu,ed,eh;let ep=(0,r.c)(66),em=(0,u.useRouter)(),[ex,ef]=c(!1),[eg,eb]=c(!1);ep[0]!==em?(e=async(e,t)=>{let i={firstName:t.get("firstName"),lastName:t.get("lastName"),email:t.get("email"),howYouFoundUs:t.get("howYouFoundUsOther")||t.get("howYouFoundUs"),role:t.get("roleOther")||t.get("role"),userGroup:"Waitlist-03"},n=await fetch("https://app.loops.so/api/newsletter-form/cllvbrox20124lc0p5cje4r6c",{method:"POST",body:new URLSearchParams(i).toString(),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(A).catch(w).then(j).catch(v);return n.success?(x.z.track("Form Submitted",i),em.push("/waitlist/success"),null):n.message},ep[0]=em,ep[1]=e):e=ep[1];let[ey,ev,ej]=(0,l.useActionState)(e,null);ep[2]===Symbol.for("react.memo_cache_sentinel")?(t=(0,n.jsx)($,{children:"Join the Waitlist"}),i=(0,n.jsx)(H,{children:"We just need a few details and you'll be one step closer to experiencing the magic of Micro!"}),ep[2]=t,ep[3]=i):(t=ep[2],i=ep[3]),ep[4]!==ey?(o=ey&&(0,n.jsxs)(F,{children:["Something went wrong: ",ey,(0,n.jsx)("br",{}),"This could be because of an issue with what you entered, or because your internet connection failed. Check your connection and try again, but if the issue persists email us at"," ",(0,n.jsx)("a",{href:m.A.supportEmail.mail,children:m.A.supportEmail.display})]}),ep[4]=ey,ep[5]=o):o=ep[5];let ew=ej?.5:1;return ep[6]!==ew?(s={opacity:ew},ep[6]=ew,ep[7]=s):s=ep[7],ep[8]!==em?(d=()=>{em.prefetch("/waitlist/success")},ep[8]=em,ep[9]=d):d=ep[9],ep[10]===Symbol.for("react.memo_cache_sentinel")?(h=(0,n.jsxs)(P,{children:[(0,n.jsx)(_,{children:"First Name"}),(0,n.jsx)(k,{type:"text",placeholder:"Tim",required:!0,name:"firstName"})]}),ep[10]=h):h=ep[10],ep[11]===Symbol.for("react.memo_cache_sentinel")?(f=(0,n.jsxs)(P,{children:[(0,n.jsx)(_,{children:"Last Name"}),(0,n.jsx)(k,{type:"text",placeholder:"Apple",required:!0,name:"lastName"})]}),ep[11]=f):f=ep[11],ep[12]===Symbol.for("react.memo_cache_sentinel")?(g=(0,n.jsx)(_,{children:"Email Address"}),ep[12]=g):g=ep[12],ep[13]===Symbol.for("react.memo_cache_sentinel")?(b=(0,n.jsxs)(P,{children:[g,(0,n.jsx)(k,{name:"email",required:!0,type:"email",placeholder:"tim@apple.com",pattern:/[^@]+@[^@]+\.[^@]+/.source,title:"Must be a valid email address"})]}),ep[13]=b):b=ep[13],ep[14]===Symbol.for("react.memo_cache_sentinel")?(y=(0,n.jsx)(_,{children:"Role"}),ep[14]=y):y=ep[14],ep[15]!==ef?(z=e=>ef("Other"===e.target.value),ep[15]=ef,ep[16]=z):z=ep[16],ep[17]===Symbol.for("react.memo_cache_sentinel")?(N=(0,n.jsx)("option",{value:""}),L=(0,n.jsx)("option",{value:"Founder",children:"Founder"}),R=(0,n.jsx)("option",{value:"Investor",children:"Investor"}),C=(0,n.jsx)("option",{value:"Executive",children:"Executive"}),G=(0,n.jsx)("option",{value:"Sales/BD",children:"Sales/BD"}),K=(0,n.jsx)("option",{value:"Recruiter",children:"Recruiter"}),W=(0,n.jsx)("option",{value:"Engineer",children:"Engineer"}),q=(0,n.jsx)("option",{value:"Other",children:"Other"}),ep[17]=N,ep[18]=L,ep[19]=R,ep[20]=C,ep[21]=G,ep[22]=K,ep[23]=W,ep[24]=q):(N=ep[17],L=ep[18],R=ep[19],C=ep[20],G=ep[21],K=ep[22],W=ep[23],q=ep[24]),ep[25]!==z?(Y=(0,n.jsxs)(O,{required:!0,name:"role",onChange:z,children:[N,L,R,C,G,K,W,q]}),ep[25]=z,ep[26]=Y):Y=ep[26],ep[27]===Symbol.for("react.memo_cache_sentinel")?(U=(0,n.jsx)(E,{}),ep[27]=U):U=ep[27],ep[28]!==Y?(B=(0,n.jsxs)(a.Transition,{children:[h,f,b,(0,n.jsxs)(P,{isSelect:!0,children:[y,Y,U]})]}),ep[28]=Y,ep[29]=B):B=ep[29],ep[30]!==ex?(M=ex&&(0,n.jsxs)(P,{children:[(0,n.jsx)(_,{children:"Other"}),(0,n.jsx)(k,{name:"roleOther",required:!0,type:"text",placeholder:"Chief Productivity Officer"})]}),ep[30]=ex,ep[31]=M):M=ep[31],ep[32]!==M?(Z=(0,n.jsx)(a.Transition,{children:M}),ep[32]=M,ep[33]=Z):Z=ep[33],ep[34]===Symbol.for("react.memo_cache_sentinel")?(D=(0,n.jsx)(_,{children:"How’d you find us?"}),ep[34]=D):D=ep[34],ep[35]!==eb?(J=e=>eb("Other"===e.target.value),ep[35]=eb,ep[36]=J):J=ep[36],ep[37]===Symbol.for("react.memo_cache_sentinel")?(V=(0,n.jsx)("option",{value:""}),X=(0,n.jsx)("option",{value:"Twitter/X",children:"Twitter/X"}),Q=(0,n.jsx)("option",{value:"LinkedIn",children:"LinkedIn"}),ee=(0,n.jsx)("option",{value:"Newsletter",children:"Newsletter"}),et=(0,n.jsx)("option",{value:"Podcast",children:"Podcast"}),ei=(0,n.jsx)("option",{value:"Google",children:"Google"}),en=(0,n.jsx)("option",{value:"Word of mouth",children:"Word of mouth"}),er=(0,n.jsx)("option",{value:"Other",children:"Other"}),ep[37]=V,ep[38]=X,ep[39]=Q,ep[40]=ee,ep[41]=et,ep[42]=ei,ep[43]=en,ep[44]=er):(V=ep[37],X=ep[38],Q=ep[39],ee=ep[40],et=ep[41],ei=ep[42],en=ep[43],er=ep[44]),ep[45]!==J?(eo=(0,n.jsxs)(O,{required:!0,name:"howYouFoundUs",onChange:J,children:[V,X,Q,ee,et,ei,en,er]}),ep[45]=J,ep[46]=eo):eo=ep[46],ep[47]===Symbol.for("react.memo_cache_sentinel")?(ea=(0,n.jsx)(E,{}),ep[47]=ea):ea=ep[47],ep[48]!==eo?(es=(0,n.jsx)(a.Transition,{children:(0,n.jsxs)(P,{isSelect:!0,children:[D,eo,ea]})}),ep[48]=eo,ep[49]=es):es=ep[49],ep[50]!==eg?(el=eg&&(0,n.jsxs)(P,{children:[(0,n.jsx)(_,{children:"Other"}),(0,n.jsx)(k,{name:"howYouFoundUsOther",required:!0,type:"text",placeholder:"Google+"})]}),ep[50]=eg,ep[51]=el):el=ep[51],ep[52]!==el?(ec=(0,n.jsx)(a.Transition,{children:el}),ep[52]=el,ep[53]=ec):ec=ep[53],ep[54]===Symbol.for("react.memo_cache_sentinel")?(eu=(0,n.jsxs)(a.Transition,{children:[(0,n.jsxs)(T,{children:["By inserting your email you confirm you agree to Micro contacting you about our product and services. You can opt out at any time by clicking unsubscribe in our emails. Find out more about how we use data in our"," ",(0,n.jsx)(p.AnalyticsLink,{href:m.A.privacy,analyticsLocation:"Waitlist",children:"Privacy Policy"}),"."]}),(0,n.jsx)(I,{type:"submit",variant:"grayOversize",analyticsLocation:null,children:"Join the Waitlist"})]}),ep[54]=eu):eu=ep[54],ep[55]!==ej||ep[56]!==B||ep[57]!==Z||ep[58]!==es||ep[59]!==ec||ep[60]!==s||ep[61]!==d?(ed=(0,n.jsxs)(S,{action:ev,inert:ej,style:s,onFocus:d,children:[B,Z,es,ec,eu]},"form"),ep[55]=ej,ep[56]=B,ep[57]=Z,ep[58]=es,ep[59]=ec,ep[60]=s,ep[61]=d,ep[62]=ed):ed=ep[62],ep[63]!==o||ep[64]!==ed?(eh=(0,n.jsxs)(n.Fragment,{children:[t,i,o,ed]}),ep[63]=o,ep[64]=ed,ep[65]=eh):eh=ep[65],eh}function v(){return{success:!1,message:"Our form provider did something unexpected"}}function j(e){return f.qgA(b,e)}function w(){return{success:!1,message:"There was a problem with your connection"}}function A(e){return e.json()}let $=(0,s.I4)("h1",{...(0,s.vi)((0,s.AH)`
		grid-column: fullbleed;
		${h.Ay.oversize3};
		color: ${d.A.black4};
		text-align: center;
		margin-top: 96px;
	`),...(0,s.ZQ)((0,s.AH)`
		width: 569px;
		place-self: center;
	`),...(0,s.PK)((0,s.AH)`
		${h.Ay.header2};
	`)}),H=(0,s.I4)("p",{...(0,s.vi)((0,s.AH)`
		grid-column: main;
		${h.Ay.body3};
		color: ${d.A.black4};
		text-align: center;
		margin: 33px 0;
	`)}),S=(0,s.I4)("form",{...(0,s.vi)((0,s.AH)`
		grid-column: fullbleed;
		padding: 64px 32px 56px;
		background: ${d.A.white1};
		border: 1.5px solid ${d.A.white4};
		box-shadow: 0 40px 60px 16px rgb(0 0 0 / 3%);
		border-radius: 16px;
		width: 774px;
		place-self: center;
		transition: opacity 0.2s;
		view-transition-name: waitlist-form;
	`),...(0,s.PK)((0,s.AH)`
		width: 100%;
		grid-column: main;
		padding: 24px 32px 56px;
	`)}),P=(0,s.I4)("label",({isSelect:e})=>({...(0,s.vi)((0,s.AH)`
		display: flex;
		align-items: center;
		padding-top: 16px;
		height: 61px;
		border-bottom: 1px solid ${d.A.white3};
		overflow: clip;

		&:focus-within {
			border-color: ${d.A.black6};
		}

		/* this is slightly different from focus within bc it disables as soon as select is closed */
		&:has(select:open) {
			svg {
				rotate: 180deg;
			}
		}

		&:not(:first-child) {
			margin-top: 16px;
		}
	`),...(0,s.PK)(e?(0,s.AH)`
					&:has(select:valid) div {
						display: none;
					}
				`:(0,s.AH)`
					display: grid;
					grid-template-columns: 1fr auto;
					grid-template-rows: 1fr auto;
					padding: 16px 16px 16px 0;
					height: 83px;
				`)})),_=(0,s.I4)("div",{...(0,s.vi)((0,s.AH)`
		${h.Ay.kicker1};
		color: ${d.A.black4};
		min-width: 153px;
		padding-right: 22px;
		flex-shrink: 0;
	`),...(0,s.PK)((0,s.AH)`
		grid-column: 1 / span 2;
		${h.Ay.kicker1};
		place-self: start;
	`)}),k=(0,s.I4)("input",{...(0,s.vi)((0,s.AH)`
		${h.Ay.body1};
		width: 100%;
		border-radius: 4px;
		margin-left: -8px;
		padding-left: 8px;

		&::placeholder {
			color: ${d.A.white5};
		}

		&:focus {
			outline: none;
		}
	`),...(0,s.PK)((0,s.AH)`
		${h.Ay.body2};
		margin-bottom: -5px;
	`)}),O=(0,s.I4)("select",{...(0,s.vi)((0,s.AH)`
		${h.Ay.body1};

		/* expand clickable target */
		margin: -10px -200px;
		padding: 10px 200px;
		width: calc(100% + 400px);

		&:focus {
			outline: none;
		}

		&:open {
			margin: 0;
			padding: 0;
			width: 100%;
		}
	`),...(0,s.PK)((0,s.AH)`
		${h.Ay.body2};
	`)}),E=(0,s.I4)(e=>l.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 13 8"},e),l.createElement("path",{stroke:"black",d:"M0.5 1L6.5 7L12.5 1",style:{stroke:"black",strokeOpacity:1}})),{...(0,s.vi)((0,s.AH)`
		width: 13px;
		height: 8px;
		flex-shrink: 0;
		transition: rotate 0.2s;
	`)}),T=(0,s.I4)("p",{...(0,s.vi)((0,s.AH)`
		${h.Ay.body4};
		color: ${d.A.black6};
		margin: 32px 0;
		max-width: 371px;

		a {
			text-decoration: underline;
		}
	`),...(0,s.PK)((0,s.AH)`
		width: 255px;
	`)}),I=(0,s.I4)(o.j,{...(0,s.PK)((0,s.AH)`
		padding-left: 0;
		padding-right: 0;
		width: 255px !important;
	`)}),F=(0,s.I4)("p",{...(0,s.vi)((0,s.AH)`
		${h.Ay.body1};
		color: ${d.A.orange1};
		margin: 32px 0;
		grid-column: main;
		text-align: center;
	`)})}},e=>{var t=t=>e(e.s=t);e.O(0,[896,86,287,821,835,972,757,513,705,358],()=>t(5133)),_N_E=e.O()}]);