(this.webpackJsonpamigraph_web=this.webpackJsonpamigraph_web||[]).push([[0],{134:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),i=n.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(18),o=n(12),l=n(19),u=n(13),h=n.n(u),j=n(23),d=n(15),b=n(137),m=n(190),x=n(191),p=n(138),O=n(65),f=n.n(O),v=r.a.createContext(),g=n(172),y=n(2),k=Object(g.a)((function(e){return{root:{padding:e.spacing(3)}}}));function _(e){var t=k();return Object(y.jsx)("div",{className:t.root,children:e.children})}var w=n(174),D=n(192),A=n(176),S=function(){var e=r.a.useState({open:!1,message:"",title:"",severity:"error"}),t=Object(d.a)(e,2),n=t[0],a=t[1],c=function(e,t,r){a({open:!0,message:e,title:t,severity:r,closeFunction:function(){a(Object(l.a)(Object(l.a)({},n),{},{open:!1}))}})};return{alert:n,setAlert:c,handleFetchWithAlert:function(e){e instanceof String?c("Error",e,"error"):e instanceof Response?c("Error ".concat(e.status),"".concat(e.statusText),"error"):e instanceof Error?c("".concat(e.name),"".concat(e.message),"error"):c("Error",JSON.stringify(e),"error")}}};function z(e){var t=e.open,n=e.severity,a=e.title,r=e.message,c=e.closeFunction;return Object(y.jsx)(w.a,{in:t,children:Object(y.jsxs)(D.a,{onClose:c,severity:n,children:[Object(y.jsx)(A.a,{children:a}),r]})})}var C=n(193),T=n(177),N=n(178),W=n.p+"static/media/aigraphs_full.9014a28b.png",E=Object(g.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},logo:{maxWidth:150,marginRight:"10px"}}}));function P(){var e=E();return Object(y.jsx)(T.a,{position:"static",color:"transparent",children:Object(y.jsx)(N.a,{children:Object(y.jsx)("img",{src:W,alt:"Aigraphs",className:e.logo})})})}function L(){var e=Object(a.useContext)(v).endpoint,t=(Object(o.i)().path,Object(o.f)()),n=new URLSearchParams(Object(o.g)().search),r=Object(C.a)().t,c=Object(a.useState)(""),i=Object(d.a)(c,2),s=i[0],u=i[1],O=Object(a.useState)(n.has("party_id")?n.get("party_id"):""),g=Object(d.a)(O,2),k=g[0],w=g[1],D=S(),A=D.alert,T=D.setAlert,N=D.handleFetchWithAlert,W=function(){var n=Object(j.a)(h.a.mark((function n(a){var c,i,o;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),""!==s.trim()){n.next=5;break}return T(r("name_is_empty"),r("error"),"error"),n.abrupt("return");case 5:return(c=new FormData).set("name",s),c.set("party_id",k),n.prev=8,i="".concat(e,"/party_member/join"),n.next=12,fetch(i,{method:"PUT",body:c,credentials:"include"});case 12:if((o=n.sent).ok){n.next=15;break}throw o;case 15:return n.next=17,o.json();case 17:n.sent,t.push("/graph_member/submit"),n.next=24;break;case 21:n.prev=21,n.t0=n.catch(8),N(n.t0);case 24:case"end":return n.stop()}}),n,null,[[8,21]])})));return function(e){return n.apply(this,arguments)}}();return Object(y.jsxs)("div",{children:[Object(y.jsx)(P,{}),Object(y.jsxs)(_,{children:[Object(y.jsxs)("form",{onSubmit:W,children:[Object(y.jsx)(b.a,{variant:"h6",children:r("join_to_graph")}),Object(y.jsx)(m.a,{label:r("your_nickname"),margin:"normal",name:"name",fullWidth:!0,variant:"outlined",value:s,onChange:function(e){return u(e.target.value)}}),Object(y.jsx)(m.a,{label:r("graph_code"),name:"party id",margin:"normal",fullWidth:!0,InputProps:{readOnly:!0,shrink:!0},variant:"outlined",value:k,onChange:function(e){return w(e.target.value)}}),Object(y.jsx)(x.a,{pt:2,pb:1,children:Object(y.jsx)(p.a,{type:"submit",variant:"contained",color:"primary",startIcon:Object(y.jsx)(f.a,{}),children:r("join")})})]}),Object(y.jsx)(z,Object(l.a)({},A))]})]})}var I=n(66),F=n(92),R=n(179),U=n(180),B=n(194),G=Object(g.a)((function(e){return{chip:{width:"50ch",textAlign:"center"}}}));function M(){var e=Object(a.useContext)(v).endpoint,t=r.a.useState(""),n=Object(d.a)(t,2),c=n[0],i=n[1],s=r.a.useState([]),o=Object(d.a)(s,2),u=o[0],b=o[1],m=G(),x=S(),O=x.alert,f=x.setAlert,g=x.handleFetchWithAlert,k=r.a.useState(!0),w=Object(d.a)(k,2),D=w[0],A=w[1],T=Object(C.a)().t,N=r.a.useRef({itemList:[],dimensionList:[],currentDimension:0,submitData:{}}),W=function(e){var t=N.current.dimensionList,n=N.current.itemList;e>=t.length||(console.log(e),console.log(t),b(n),i(t[e].name),N.current.currentDimension=e,A(e<t.length-1))},E=function(){var e,t={},n=u.length,a=Object(I.a)(u);try{for(a.s();!(e=a.n()).done;){t[e.value.id]=n,n--}}catch(i){a.e(i)}finally{a.f()}var r=N.current.currentDimension,c=N.current.dimensionList[r].id;N.current.submitData[c]=t},L=function(){var t=Object(j.a)(h.a.mark((function t(){var n,a,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return E(),t.prev=1,n=N.current.submitData,a="".concat(e,"/chart/party_member/submit"),t.next=6,fetch(a,{method:"PUT",credentials:"include",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 6:if((r=t.sent).ok){t.next=9;break}throw r;case 9:f(T("sent_options_message"),T("sent"),"success"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),g(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(){return t.apply(this,arguments)}}(),M=function(){var t=Object(j.a)(h.a.mark((function t(){var n,a,r,c,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="".concat(e,"/chart/party_member/data"),t.next=4,fetch(n,{method:"GET",credentials:"include"});case 4:if((a=t.sent).ok){t.next=7;break}throw a;case 7:return t.next=9,a.json();case 9:for(c in r=t.sent,N.current.itemList=[],r.items)N.current.itemList.push({id:c,name:r.items[c]});for(i in N.current.dimensionList=[],r.dimensions)N.current.dimensionList.push({id:i,name:r.dimensions[i]});N.current.currentDimension=0,W(0),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),g(t.t0);case 21:case"end":return t.stop()}}),t,null,[[0,18]])})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){M()}),[]),Object(y.jsxs)("div",{children:[Object(y.jsx)(P,{}),Object(y.jsxs)(_,{children:[Object(y.jsxs)("h1",{children:[T("sort_by")," ",Object(y.jsx)("span",{children:c})]}),Object(y.jsx)(R.a,{children:Object(y.jsx)(F.ReactSortable,{list:u,setList:b,animation:200,children:u.map((function(e){return Object(y.jsx)(U.a,{children:Object(y.jsx)(B.a,{color:"primary",variant:"outlined",label:e.name,className:m.chip})},e.id)}))})}),Object(y.jsx)(p.a,{variant:"contained",color:"primary",onClick:D?function(){E();var e=N.current.currentDimension;W(e+1)}:L,children:T(D?"next":"send")}),Object(y.jsx)(z,Object(l.a)({},O))]})]})}function J(){var e=Object(o.i)().path;return Object(y.jsxs)(o.c,{children:[Object(y.jsx)(o.a,{exact:!0,path:"".concat(e,"/join"),component:L}),Object(y.jsx)(o.a,{exact:!0,path:"".concat(e,"/submit"),component:M})]})}var q=n(26),Y=n(188),X=n(195),H=n(181),V=n(78),Z=n(56);V.a.use(Z.e).init({resources:{en:{translation:{graph:"graph",create:"create",graph_name:"graph name",create_graph:"create graph",my_graphs:"my graphs",back:"back",dimensions:"dimensions",horizontal_dimension:"horizontal dimension",vertical_dimension:"vertical dimension",elements:"elements",sent:"sent",sent_options_message:"your options has been sent.",send:"send",next:"next",share_link:"share link",generate_results:"generate results",graph_created:"graph created",graph_code:"graph code",join:"join",join_to_graph:"join to graph",your_nickname:"your nickname",sort_by:"sort by"}}}}),V.a.changeLanguage("en");var $=Object(g.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function K(){var e=Object(a.useContext)(v).endpoint,t=Object(q.b)().getAccessTokenSilently,n=Object(C.a)().t,r=$(),c=Object(a.useState)(""),i=Object(d.a)(c,2),s=i[0],o=i[1],u=Object(a.useState)(""),O=Object(d.a)(u,2),g=O[0],k=O[1],_=Object(a.useState)(""),w=Object(d.a)(_,2),D=w[0],A=w[1],T=Object(a.useState)(""),N=Object(d.a)(T,2),W=N[0],E=N[1],P=Object(a.useState)(!1),L=Object(d.a)(P,2),F=L[0],R=L[1],U=S(),B=U.alert,G=U.setAlert,M=U.handleFetchWithAlert,J=function(){var a=Object(j.a)(h.a.mark((function a(r){var c,i,o,l,u,j,d,b,m;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r.preventDefault(),a.next=3,t();case 3:if(c=a.sent,i=s.trim(),o=g.trim(),l=D.trim(),u=Y(W),""!==i){a.next=11;break}return G(n("empty_name"),n("error"),"error"),a.abrupt("return");case 11:if(""!==o){a.next=14;break}return G(n("empty_horizontal_dimension"),n("error"),"error"),a.abrupt("return");case 14:if(""!==l){a.next=17;break}return G(n("empty_vertical_dimension"),n("error"),"error"),a.abrupt("return");case 17:if(!(u.length<2)){a.next=20;break}return G(n("to_few_items"),n("error"),"error"),a.abrupt("return");case 20:return j={name:s,dimensions:[g,D],items:u},a.prev=21,R(!0),d="".concat(e,"/v/1.0/chart"),a.next=26,fetch(d,{method:"PUT",body:JSON.stringify(j),credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c)}});case 26:if(b=a.sent,R(!1),b.ok){a.next=30;break}throw b;case 30:return a.next=32,b.json();case 32:m=a.sent,G(n("graph_created"),JSON.stringify(m),"success"),a.next=39;break;case 36:a.prev=36,a.t0=a.catch(21),M(a.t0);case 39:case"end":return a.stop()}}),a,null,[[21,36]])})));return function(e){return a.apply(this,arguments)}}(),Y=function(e){var t,n=e.split("\n"),a=[],r=Object(I.a)(n);try{for(r.s();!(t=r.n()).done;){var c=t.value;""!==(c=c.trim())&&a.push(c)}}catch(i){r.e(i)}finally{r.f()}return a};return Object(y.jsxs)("div",{children:[Object(y.jsxs)("form",{onSubmit:J,children:[Object(y.jsx)(b.a,{variant:"h6",children:n("create_graph")}),Object(y.jsx)(m.a,{label:n("graph_name"),margin:"normal",name:"formName",fullWidth:!0,variant:"outlined",placeholder:"Ponle un nombre a tu gr\xe1fico",value:s,onChange:function(e){return o(e.target.value)}}),Object(y.jsxs)(x.a,{children:[Object(y.jsx)(m.a,{label:n("horizontal_dimension"),margin:"normal",name:"formName",variant:"outlined",placeholder:"Ponle un nombre a tu gr\xe1fico",value:g,onChange:function(e){return k(e.target.value)}}),Object(y.jsx)(m.a,{label:n("vertical_dimension"),margin:"normal",name:"formName",variant:"outlined",placeholder:"Ponle un nombre a tu gr\xe1fico",value:D,onChange:function(e){return A(e.target.value)}})]}),Object(y.jsx)(m.a,{id:"standard-textarea",label:n("elements"),placeholder:"Escribe un elemento por l\xednea",value:W,onChange:function(e){return E(e.target.value)},multiline:!0,rows:6,variant:"outlined",fullWidth:!0}),Object(y.jsx)(x.a,{pt:2,pb:1,children:Object(y.jsx)(p.a,{type:"submit",variant:"contained",color:"primary",startIcon:Object(y.jsx)(f.a,{}),children:n("create")})})]}),Object(y.jsx)(z,Object(l.a)({},B)),Object(y.jsx)(X.a,{className:r.backdrop,open:F,children:Object(y.jsx)(H.a,{color:"inherit"})})]})}var Q=n(183),ee=n(187),te=n(186),ne=n(182),ae=n(184),re=n(185);function ce(){var e=Object(a.useContext)(v).endpoint,t=Object(q.b)().getAccessTokenSilently,n=Object(a.useState)([]),r=Object(d.a)(n,2),c=r[0],i=r[1],o=S(),u=o.alert,b=(o.setAlert,o.handleFetchWithAlert),m=function(){var n=Object(j.a)(h.a.mark((function n(){var a,r,c,s;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:return a=n.sent,n.prev=3,r="".concat(e,"/party/list"),n.next=7,fetch(r,{method:"GET",credentials:"include",headers:{Authorization:"Bearer ".concat(a)}});case 7:if((c=n.sent).ok){n.next=10;break}throw c;case 10:return n.next=12,c.json();case 12:s=n.sent,i(s.party_list),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(3),b(n.t0);case 19:case"end":return n.stop()}}),n,null,[[3,16]])})));return function(){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){m()}),[]),Object(y.jsxs)("div",{children:[Object(y.jsx)(ne.a,{children:Object(y.jsxs)(Q.a,{"aria-label":"customized table",children:[Object(y.jsx)(ae.a,{children:Object(y.jsxs)(re.a,{children:[Object(y.jsx)(te.a,{children:"Id"}),Object(y.jsx)(te.a,{children:"Name"}),Object(y.jsx)(te.a,{})]})}),Object(y.jsx)(ee.a,{children:c.map((function(e){return Object(y.jsxs)(re.a,{children:[Object(y.jsx)(te.a,{component:"th",scope:"row",children:e.id}),Object(y.jsx)(te.a,{children:e.name}),Object(y.jsx)(te.a,{children:Object(y.jsx)(p.a,{component:s.b,to:"/graph/".concat(e.id),children:"View"})})]},e.name)}))})]})}),Object(y.jsx)(z,Object(l.a)({},u))]})}var ie=n(94),se=n(93),oe=n(76),le=n(77),ue=function(e){Object(ie.a)(n,e);var t=Object(se.a)(n);function n(){var e;return Object(oe.a)(this,n),(e=t.call(this)).calculateUnit(),e}return Object(le.a)(n,[{key:"drawFrame",value:function(e,t){var n=this.area.x.extent,a=this.area.y.extent,r=this.area.font.size,c="";return c+='<polygon\n    points="0,0\n      '.concat(n,",0\n      ").concat(n,",").concat(a,"\n      0,").concat(a,'"\n    stroke-linecap="square"\n    style="fill:none;stroke:#DDD;stroke-width:2px" />'),c+="<line\n    x1=0 y1=".concat(a/2,"\n    x2=").concat(n," y2=").concat(a/2,'\n    style="stroke:#DDD;stroke-width:2px" />'),c+="<line\n    x1=".concat(n/2," y1=0\n    x2=").concat(n/2," y2=").concat(a,'\n    style="stroke:#DDD;stroke-width:2px" />'),c+='<text\n    x="'.concat(n/2,'" y="').concat(2*-r,'"\n    dominant-baseline="middle" text-anchor="middle"\n    font-size="').concat(r,'"\n    >').concat(e,"</text>"),c+='<text\n    transform="translate('.concat(n+2*r,",").concat(a/2,') rotate(90)"\n    font-size="').concat(r,'"\n    dominant-baseline="middle" text-anchor="middle"\n    >').concat(t,"</text>")}}]),n}(function(){function e(){Object(oe.a)(this,e),this.area={x:{extent:400,range:{min:0,max:10}},y:{extent:400,range:{min:0,max:10}},font:{size:15}}}return Object(le.a)(e,[{key:"calculateUnit",value:function(){this.area.x.unit=this.area.x.extent/this.area.x.range.max,this.area.y.unit=this.area.y.extent/this.area.y.range.max}},{key:"x",value:function(e){return e*this.area.x.unit}},{key:"y",value:function(e){return this.area.y.extent-e*this.area.y.unit}},{key:"drawGlowText",value:function(e,t){return"<text ".concat(t,'\n    style="stroke:white; stroke-width:0.6em"\n    >').concat(e,"</text>\n    <text ").concat(t,">").concat(e,"</text>")}},{key:"render",value:function(e,t){e.querySelector(".container").innerHTML=t;var n=e;n.setAttribute("width",200+this.area.x.extent),n.setAttribute("height",200+this.area.y.extent)}}]),e}());function he(){var e=Object(a.useContext)(v).endpoint,t=Object(q.b)().getAccessTokenSilently,n=Object(o.h)().party_id,r=Object(a.useRef)(),c=S(),i=c.alert,s=(c.setAlert,c.handleFetchWithAlert),u=function(){var a=Object(j.a)(h.a.mark((function a(){var r,c,i,o,l;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t();case 2:return r=a.sent,c=n,a.prev=4,i="".concat(e,"/v/1.0/chart/").concat(c,"/make_result"),a.next=8,fetch(i,{method:"POST",credentials:"include",headers:{Authorization:"Bearer ".concat(r)}});case 8:if((o=a.sent).ok){a.next=11;break}throw o;case 11:return a.next=13,o.json();case 13:l=a.sent,d(l),a.next=20;break;case 17:a.prev=17,a.t0=a.catch(4),s(a.t0);case 20:case"end":return a.stop()}}),a,null,[[4,17]])})));return function(){return a.apply(this,arguments)}}();Object(a.useEffect)((function(){u()}),[]);var d=function(e){for(var t={x:{extent:400,range:{min:1e8,max:-1e7}},y:{extent:400,range:{min:1e8,max:-1e7}},font:{size:15}},n=Object.keys(e.dimensions),a=n[0],c=n[1],i=e.dimensions[a],s=e.dimensions[c],o=[],l=0,u=Object.keys(e.items);l<u.length;l++){var h=u[l],j=e.stats[a][h],d=e.stats[c][h],b={name:e.items[h],x:j.avg,y:d.avg,stdDevX:j.std_dev,stdDevY:d.std_dev};o.push(b),t.x.range.min=Math.min(t.x.range.min,j.min),t.x.range.max=Math.max(t.x.range.max,j.max),t.y.range.min=Math.min(t.y.range.min,j.min),t.y.range.max=Math.max(t.y.range.max,j.max)}function m(e,t){var n=e.x*t.x.unit,a=t.y.extent-e.y*t.y.unit,r=e.stdDevX*t.x.unit,c=e.stdDevY*t.y.unit,i=.8*t.font.size,s="".concat(e.name);return'<circle\n    cx="'.concat(n,'"\n    cy="').concat(a,'"\n    r="3"\n    fill="black" />\n    \n    <ellipse\n    cx="').concat(n,'"\n    cy="').concat(a,'"\n    rx="').concat(r,'"\n    ry="').concat(c,'"\n    stroke-dasharray="').concat(i/3,'"\n    style="stroke:#AAA;stroke-width:1px;fill:none"\n    />\n\n    <text\n    transform="translate(').concat(n+i,",").concat(a,')"\n    font-size="').concat(i,'"\n    dominant-baseline="middle" text-anchor="start"\n    style="stroke:white; stroke-width:0.6em"\n    >').concat(s,'</text>\n\n    <text\n    transform="translate(').concat(n+i,",").concat(a,')"\n    font-size="').concat(i,'"\n    dominant-baseline="middle" text-anchor="start"\n    >').concat(s,"</text>\n\n    ")}t.x.unit=t.x.extent/(t.x.range.max+1),t.y.unit=t.y.extent/(t.y.range.max+1);for(var x="",p=0,O=o;p<O.length;p++){x+=m(O[p],t)}var f=new ue;x=f.drawFrame(i,s)+x,f.render(r.current,x)};return Object(y.jsxs)("div",{children:[Object(y.jsx)("svg",{ref:r,width:"800",height:"800",children:Object(y.jsx)("g",{className:"container",transform:"translate(100, 100)"})}),Object(y.jsx)(z,Object(l.a)({},i))]})}function je(){var e=Object(a.useContext)(v).endpoint,t=Object(q.b)().getAccessTokenSilently,n=Object(o.h)().party_id,r=S(),c=r.alert,i=r.setAlert,u=r.handleFetchWithAlert,O=Object(C.a)().t,f=Object(a.useState)({id:n,verticalDimension:"",horizontalDimension:"",items:""}),g=Object(d.a)(f,2),k=g[0],_=g[1],w=function(){var a=Object(j.a)(h.a.mark((function a(){var r,c,i,s,o;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t();case 2:return r=a.sent,c=n,a.prev=4,i="".concat(e,"/v/1.0/chart/").concat(c),a.next=8,fetch(i,{method:"GET",credentials:"include",headers:{Authorization:"Bearer ".concat(r)}});case 8:if((s=a.sent).ok){a.next=11;break}throw s;case 11:return a.next=13,s.json();case 13:o=a.sent,_({id:c,horizontalDimension:o.dimensions[0],verticalDimension:o.dimensions[1],items:Object.values(o.items).join("\n")}),a.next=20;break;case 17:a.prev=17,a.t0=a.catch(4),u(a.t0);case 20:case"end":return a.stop()}}),a,null,[[4,17]])})));return function(){return a.apply(this,arguments)}}();Object(a.useEffect)((function(){w()}),[]);return Object(y.jsxs)("div",{children:[Object(y.jsx)(b.a,{variant:"h6",children:O("graph_details")}),Object(y.jsx)(m.a,{label:O("graph_id"),margin:"normal",name:"formName",fullWidth:!0,variant:"outlined",value:k.id,InputProps:{readOnly:!0,shrink:!0}}),Object(y.jsxs)(x.a,{children:[Object(y.jsx)(m.a,{label:O("horizontal_dimension"),margin:"normal",name:"formName",variant:"outlined",value:k.horizontalDimension,InputProps:{readOnly:!0,shrink:!0}}),Object(y.jsx)(m.a,{label:O("vertical_dimension"),margin:"normal",name:"formName",variant:"outlined",value:k.verticalDimension,InputProps:{readOnly:!0,shrink:!0}})]}),Object(y.jsx)(m.a,{id:"standard-textarea",label:O("elements"),value:k.items,multiline:!0,rows:6,InputProps:{readOnly:!0,shrink:!0},variant:"outlined",fullWidth:!0}),Object(y.jsx)(p.a,{variant:"contained",color:"primary",component:s.b,to:"/graph/".concat(n,"/result"),children:O("generate_results")}),Object(y.jsx)(p.a,{variant:"contained",color:"primary",onClick:function(e){e.preventDefault();var t=window.location.protocol,a=window.location.host,r="".concat(t,"//").concat(a,"/graph_member/join?party_id=").concat(n);navigator.clipboard.writeText(r),i("Link copiado al portapapeles","Comp\xe1rtelo con tus amigos","success")},children:O("share_link")}),Object(y.jsx)(z,Object(l.a)({},c))]})}var de=Object(q.c)((function(){var e=Object(o.i)().path,t=Object(C.a)().t;return Object(y.jsxs)("div",{children:[Object(y.jsx)(P,{}),Object(y.jsx)(_,{children:Object(y.jsxs)(s.a,{children:[Object(y.jsxs)(Y.a,{"aria-label":"small outlined button group",children:[Object(y.jsx)(p.a,{component:s.b,to:"/graph/list",children:t("my_graphs")}),Object(y.jsx)(p.a,{component:s.b,to:"/graph/create",children:t("create_graph")})]}),Object(y.jsxs)(o.c,{children:[Object(y.jsx)(o.a,{exact:!0,path:"".concat(e,"/create"),component:K}),Object(y.jsx)(o.a,{exact:!0,path:"".concat(e,"/list"),component:ce}),Object(y.jsx)(o.a,{exact:!0,path:"".concat(e,"/:party_id/result"),component:he}),Object(y.jsx)(o.a,{exact:!0,path:"".concat(e,"/:party_id"),component:je})]})]})})]})}),{onRedirecting:function(){return Object(y.jsx)("div",{children:"Redirecting you to the login page..."})}}),be=n(189);function me(){var e=Object(C.a)().t;return Object(y.jsxs)("div",{children:[Object(y.jsx)(P,{}),Object(y.jsx)(_,{children:Object(y.jsx)("ul",{children:Object(y.jsx)("li",{children:Object(y.jsx)(s.b,{to:"/graph",children:e("graph").toUpperCase()})})})})]})}function xe(){return Object(y.jsxs)(v.Provider,{value:{endpoint:"https://amigraph.alpha.labo86.cl/ws"},children:[Object(y.jsx)(be.a,{}),Object(y.jsx)(s.a,{children:Object(y.jsxs)(o.c,{children:[Object(y.jsx)(o.a,{path:"/graph_member",component:J}),Object(y.jsx)(o.a,{path:"/graph",component:de}),Object(y.jsx)(o.a,{path:"/",component:me})]})})]})}i.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(q.a,{domain:"amigraph-test.us.auth0.com",clientId:"6Z7UkGd6RqMRGI27rEzziuTU7fYnlEP5",audience:"https://amigraph-test.us.auth0.com/api/v2/",redirectUri:window.location.origin,children:Object(y.jsx)(xe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[134,1,2]]]);
//# sourceMappingURL=main.520574c5.chunk.js.map