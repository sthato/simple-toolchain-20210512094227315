(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{112:function(e,t,n){var r=n(302);e.exports={login:function(e,t){return r.post("/login",{email:e,password:t})},logout:function(){return r.get("/logout")}}},323:function(e,t){var n=new Intl.NumberFormat("en-ZA",{style:"currency",currency:"ZAR"});e.exports=n},325:function(e,t,n){var r=n(302).default;e.exports={getUser:function(){return r.get("/user")},getUserBalance:function(){return r.get("/user/balance")},getUserDeposits:function(){return r.get("/user/deposits")}}},488:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(55),o=n.n(i),c=n(23),s=n(29),l=n.n(s),u=n(39),b=n(13),d=(n(348),n(14)),x=n(633),p=n(628),h=n(632),j=Object(p.a)((function(){return Object(h.a)({"@global":{"*":{boxSizing:"border-box",margin:0,padding:0},html:{"-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale",height:"100%",width:"100%"},body:{backgroundColor:"#f4f6f8",height:"100%",width:"100%"},a:{textDecoration:"none"},"#root":{height:"100%",width:"100%"}}})})),g=function(){return j(),null},f=n(166);f.Chart.helpers.extend(f.Chart.elements.Rectangle.prototype,{draw:function(){var e,t,n,r,a,i,o,c,s=this._chart.ctx,l=this._view,u=l.borderWidth,b=this._chart.config.options.cornerRadius;if(b<0&&(b=0),"undefined"===typeof b&&(b=0),l.horizontal?(e=l.base,t=l.x,n=l.y-l.height/2,r=l.y+l.height/2,a=t>e?1:-1,i=1,o=l.borderSkipped||"left"):(e=l.x-l.width/2,t=l.x+l.width/2,n=l.y,a=1,i=(r=l.base)>n?1:-1,o=l.borderSkipped||"bottom"),u){var d=Math.min(Math.abs(e-t),Math.abs(n-r)),x=(u=u>d?d:u)/2,p=e+("left"!==o?x*a:0),h=t+("right"!==o?-x*a:0),j=n+("top"!==o?x*i:0),g=r+("bottom"!==o?-x*i:0);p!==h&&(n=j,r=g),j!==g&&(e=p,t=h)}s.beginPath(),s.fillStyle=l.backgroundColor,s.strokeStyle=l.borderColor,s.lineWidth=u;var f=[[e,r],[e,n],[t,n],[t,r]],O=["bottom","left","top","right"].indexOf(o,0);function m(e){return f[(O+e)%4]}-1===O&&(O=0);var v=m(0);s.moveTo(v[0],v[1]);for(var y=1;y<4;y+=1){v=m(y);var w=y+1;4===w&&(w=0);var S=f[2][0]-f[1][0],k=f[0][1]-f[1][1],C=f[1][0],T=f[1][1];if((c=b)>Math.abs(k)/2&&(c=Math.floor(Math.abs(k)/2)),c>Math.abs(S)/2&&(c=Math.floor(Math.abs(S)/2)),k<0){var W=C,U=C+S,M=T+k,P=T+k,B=C,N=C+S,I=T,q=T;s.moveTo(B+c,I),s.lineTo(N-c,q),s.quadraticCurveTo(N,q,N,q-c),s.lineTo(U,P+c),s.quadraticCurveTo(U,P,U-c,P),s.lineTo(W+c,M),s.quadraticCurveTo(W,M,W,M+c),s.lineTo(B,I-c),s.quadraticCurveTo(B,I,B+c,I)}else if(S<0){var L=C+S,E=C,A=T,D=T,F=C+S,z=C,_=T+k,R=T+k;s.moveTo(F+c,_),s.lineTo(z-c,R),s.quadraticCurveTo(z,R,z,R-c),s.lineTo(E,D+c),s.quadraticCurveTo(E,D,E-c,D),s.lineTo(L+c,A),s.quadraticCurveTo(L,A,L,A+c),s.lineTo(F,_-c),s.quadraticCurveTo(F,_,F+c,_)}else s.moveTo(C+c,T),s.lineTo(C+S-c,T),s.quadraticCurveTo(C+S,T,C+S,T+c),s.lineTo(C+S,T+k-c),s.quadraticCurveTo(C+S,T+k,C+S-c,T+k),s.lineTo(C+c,T+k),s.quadraticCurveTo(C,T+k,C,T+k-c),s.lineTo(C,T+c),s.quadraticCurveTo(C,T,C+c,T)}s.fill(),u&&s.stroke()}});var O=n(335),m=n(27),v=["none","0 0 0 1px rgba(63,63,68,0.05), 0 1px 2px 0 rgba(63,63,68,0.15)","0 0 1px 0 rgba(0,0,0,0.31), 0 2px 2px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 8px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 5px 8px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 6px 12px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 7px 12px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 6px 16px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 7px 16px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 8px 18px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 9px 18px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 10px 20px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 11px 20px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 12px 22px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 13px 22px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 14px 24px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 16px 28px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 18px 30px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 20px 32px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 22px 34px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 24px 36px -8px rgba(0,0,0,0.25)"],y={h1:{fontWeight:500,fontSize:35,letterSpacing:"-0.24px"},h2:{fontWeight:500,fontSize:29,letterSpacing:"-0.24px"},h3:{fontWeight:500,fontSize:24,letterSpacing:"-0.06px"},h4:{fontWeight:500,fontSize:20,letterSpacing:"-0.06px"},h5:{fontWeight:500,fontSize:16,letterSpacing:"-0.05px"},h6:{fontWeight:500,fontSize:14,letterSpacing:"-0.05px"},overline:{fontWeight:500}},w=Object(O.a)({palette:{background:{default:"#F4F6F8",paper:m.a.common.white},primary:{contrastText:"#ffffff",main:"#5664d2"},text:{primary:"#172b4d",secondary:"#6b778c",error:"#e00b8b"}},shadows:v,typography:y}),S=n(6),k=n(5),C=n(22),T=n(120),W=n(497),U=n(499),M=n(460),P=n(492),B=n(500),N=n(491),I=n(320),q=n.n(I),L=n(318),E=n.n(L),A=n(319),D=n.n(A),F=n(2),z=function(e){return Object(F.jsx)("img",Object(C.a)({alt:"Logo",src:"/static/logo.svg"},e))},_=n(112),R=n.n(_),G=a.a.createContext(),H={storeUser:function(e){try{localStorage.setItem("user",e)}catch(t){console.error(t)}},getUser:function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",JSON.parse(localStorage.getItem("user")));case 4:e.prev=4,e.t0=e.catch(0),console.error(e.t0);case 7:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(){return e.apply(this,arguments)}}(),removeUser:function(){try{localStorage.removeItem("user")}catch(e){console.error(e)}}},J=function(){var e=Object(r.useContext)(G),t=e.user,n=e.setUser;return{user:t,logIn:function(e){n(e),H.storeUser(JSON.stringify(e))},logOut:function(){n(null),H.removeUser()}}},V=function(e){var t=e.onMobileNavOpen,n=Object(T.a)(e,["onMobileNavOpen"]),a=Object(d.h)(),i=Object(r.useState)([]),o=Object(b.a)(i,1)[0],s=J().logOut,x=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.logout();case 3:s(),a("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(F.jsx)(W.a,Object(C.a)(Object(C.a)({elevation:0},n),{},{children:Object(F.jsxs)(U.a,{children:[Object(F.jsx)(c.b,{to:"/",children:Object(F.jsx)(z,{})}),Object(F.jsx)(M.a,{sx:{flexGrow:1}}),Object(F.jsxs)(P.a,{lgDown:!0,children:[Object(F.jsx)(B.a,{color:"inherit",children:Object(F.jsx)(N.a,{badgeContent:o.length,color:"primary",variant:"dot",children:Object(F.jsx)(E.a,{})})}),Object(F.jsx)(B.a,{color:"inherit",onClick:x,children:Object(F.jsx)(D.a,{})})]}),Object(F.jsx)(P.a,{lgUp:!0,children:Object(F.jsx)(B.a,{color:"inherit",onClick:t,children:Object(F.jsx)(q.a,{})})})]})}))},K=n(493),Y=n(503),Z=n(504),Q=n(505),X=n(506),$=n(631),ee=n(501),te=n(502),ne=function(e){var t=e.href,n=e.icon,r=e.title,a=Object(T.a)(e,["href","icon","title"]),i=Object(d.g)(),o=!!t&&!!Object(d.d)({path:t,end:!1},i.pathname);return Object(F.jsx)(ee.a,Object(C.a)(Object(C.a)({disableGutters:!0,sx:{display:"flex",py:0}},a),{},{children:Object(F.jsxs)(te.a,{component:c.c,sx:Object(C.a)(Object(C.a)({color:"text.secondary",fontWeight:"medium",justifyContent:"flex-start",letterSpacing:0,py:1.25,textTransform:"none",width:"100%"},o&&{color:"primary.main"}),{},{"& svg":{mr:1}}),to:t,children:[n&&Object(F.jsx)(n,{size:"20"}),Object(F.jsx)("span",{children:r})]})}))},re=[{href:"/app/dashboard",icon:$.a,title:"Dashboard"}],ae=function(e){var t=e.onMobileClose,n=e.openMobile,a=Object(d.g)(),i=J().user;Object(r.useEffect)((function(){n&&t&&t()}),[a.pathname]);var o=Object(F.jsxs)(M.a,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:[Object(F.jsxs)(M.a,{sx:{alignItems:"center",display:"flex",flexDirection:"column",p:2},children:[Object(F.jsx)(K.a,{component:c.b,src:i.avatar,sx:{cursor:"pointer",width:64,height:64},to:"/app/account"}),Object(F.jsx)(Y.a,{color:"textPrimary",variant:"h5",children:i.firstname+" "+i.lastname}),Object(F.jsx)(Y.a,{color:"textSecondary",variant:"body2",children:i.role})]}),Object(F.jsx)(Z.a,{}),Object(F.jsx)(M.a,{sx:{p:2},children:Object(F.jsx)(Q.a,{children:re.map((function(e){return Object(F.jsx)(ne,{href:e.href,title:e.title,icon:e.icon},e.title)}))})}),Object(F.jsx)(M.a,{sx:{flexGrow:1}})]});return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(P.a,{lgUp:!0,children:Object(F.jsx)(X.a,{anchor:"left",onClose:t,open:n,variant:"temporary",PaperProps:{sx:{width:256}},children:o})}),Object(F.jsx)(P.a,{lgDown:!0,children:Object(F.jsx)(X.a,{anchor:"left",open:!0,variant:"persistent",PaperProps:{sx:{width:256,top:64,height:"calc(100% - 64px)"}},children:o})})]})};ae.defaultProps={onMobileClose:function(){},openMobile:!1};var ie=ae,oe=Object(k.a)("div")((function(e){return{backgroundColor:e.theme.palette.background.default,display:"flex",height:"100%",overflow:"hidden",width:"100%"}})),ce=Object(k.a)("div")((function(e){var t=e.theme;return Object(S.a)({display:"flex",flex:"1 1 auto",overflow:"hidden",paddingTop:64},t.breakpoints.up("lg"),{paddingLeft:256})})),se=Object(k.a)("div")({display:"flex",flex:"1 1 auto",overflow:"hidden"}),le=Object(k.a)("div")({flex:"1 1 auto",height:"100%",overflow:"auto"}),ue=function(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(F.jsxs)(oe,{children:[Object(F.jsx)(V,{onMobileNavOpen:function(){return a(!0)}}),Object(F.jsx)(ie,{onMobileClose:function(){return a(!1)},openMobile:n}),Object(F.jsx)(ce,{children:Object(F.jsx)(se,{children:Object(F.jsx)(le,{children:Object(F.jsx)(d.b,{})})})})]})},be=function(e){return Object(F.jsx)(W.a,Object(C.a)(Object(C.a)({elevation:0},e),{},{children:Object(F.jsx)(U.a,{sx:{height:64},children:Object(F.jsx)(c.b,{to:"/",children:Object(F.jsx)(z,{})})})}))},de=Object(k.a)("div")((function(e){return{backgroundColor:e.theme.palette.background.paper,display:"flex",height:"100%",overflow:"hidden",width:"100%"}})),xe=Object(k.a)("div")({display:"flex",flex:"1 1 auto",overflow:"hidden",paddingTop:64}),pe=Object(k.a)("div")({display:"flex",flex:"1 1 auto",overflow:"hidden"}),he=Object(k.a)("div")({flex:"1 1 auto",height:"100%",overflow:"auto"}),je=function(){return Object(F.jsxs)(de,{children:[Object(F.jsx)(be,{}),Object(F.jsx)(xe,{children:Object(F.jsx)(pe,{children:Object(F.jsx)(he,{children:Object(F.jsx)(d.b,{})})})})]})},ge=n(77),fe=n(511),Oe=n(509),me=n(327),ve=n.n(me),ye=n(328),we=n.n(ye),Se=n(326),ke=n.n(Se),Ce=n(507),Te=n(508),We=n(71),Ue=n(73),Me=n(323),Pe=n.n(Me),Be=function(e){return Object(F.jsx)(Ce.a,Object(C.a)(Object(C.a)({sx:{height:"100%"}},e),{},{children:Object(F.jsxs)(Te.a,{children:[Object(F.jsxs)(Oe.a,{container:!0,spacing:3,sx:{justifyContent:"space-between"},children:[Object(F.jsxs)(Oe.a,{item:!0,children:[Object(F.jsx)(Y.a,{color:"textSecondary",gutterBottom:!0,variant:"h6",children:e.description}),Object(F.jsx)(Y.a,{color:"textPrimary",variant:"h3",children:Pe.a.format(e.amount)})]}),Object(F.jsx)(Oe.a,{item:!0,children:Object(F.jsx)(K.a,{sx:{backgroundColor:We.a[600],height:56,width:56},children:e.children})})]}),e.target&&Object(F.jsxs)(M.a,{sx:{pt:2,display:"flex",alignItems:"center"},children:[Object(F.jsxs)(Y.a,{sx:{color:Ue.a[900],mr:1},variant:"body2",children:[parseInt(100*e.amount/e.target),"%"]}),Object(F.jsx)(Y.a,{color:"textSecondary",variant:"caption",children:e.targetDescription})]})]})}))},Ne=n(510),Ie=n(74),qe=n(324),Le=n.n(qe),Ee=function(e){return Object(F.jsx)(Ce.a,Object(C.a)(Object(C.a)({sx:{height:"100%"}},e),{},{children:Object(F.jsxs)(Te.a,{children:[Object(F.jsxs)(Oe.a,{container:!0,spacing:3,sx:{justifyContent:"space-between"},children:[Object(F.jsxs)(Oe.a,{item:!0,children:[Object(F.jsx)(Y.a,{color:"textSecondary",gutterBottom:!0,variant:"h6",children:e.description}),Object(F.jsx)(Y.a,{color:"textPrimary",variant:"h3",children:e.percentage+" %"})]}),Object(F.jsx)(Oe.a,{item:!0,children:Object(F.jsx)(K.a,{sx:{backgroundColor:Ie.a[600],height:56,width:56},children:Object(F.jsx)(Le.a,{})})})]}),Object(F.jsx)(M.a,{sx:{pt:3},children:Object(F.jsx)(Ne.a,{value:e.percentage,variant:"determinate"})})]})}))},Ae=n(325),De=n.n(Ae),Fe=function(){var e=J().user,t=Object(r.useState)({"Opening Balance":5e4,Contributions:0,"Closing Balance":0,SemesterContribution:0}),n=Object(b.a)(t,2),a=n[0],i=n[1],o=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,De.a.getUserBalance();case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){o()}),[]),e?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(ge.a,{children:Object(F.jsx)("title",{children:"Dashboard | Simunye"})}),Object(F.jsx)(M.a,{sx:{backgroundColor:"background.default",minHeight:"100%",py:3},children:Object(F.jsx)(fe.a,{maxWidth:!1,children:Object(F.jsxs)(Oe.a,{container:!0,spacing:3,children:[Object(F.jsx)(Oe.a,{item:!0,lg:3,sm:6,xl:3,xs:12,children:Object(F.jsx)(Be,{description:"TOTAL CONTRIBUTIONS",amount:a.Contributions,children:Object(F.jsx)(ke.a,{})})}),Object(F.jsx)(Oe.a,{item:!0,lg:3,sm:6,xl:3,xs:12,children:Object(F.jsx)(Be,{description:"SEMESTER CONTRIBUTION",amount:a.SemesterContribution,target:a["Opening Balance"]/3/3,targetDescription:"Towards Semester Target",children:Object(F.jsx)(ve.a,{})})}),Object(F.jsx)(Oe.a,{item:!0,lg:3,sm:6,xl:3,xs:12,children:Object(F.jsx)(Ee,{description:"GOAL",percentage:100*a.Contributions/a["Opening Balance"]})}),Object(F.jsx)(Oe.a,{item:!0,lg:3,sm:6,xl:3,xs:12,children:Object(F.jsx)(Be,{description:"CLOSING BALANCE",amount:a["Closing Balance"],children:Object(F.jsx)(we.a,{})})})]})})})]}):Object(F.jsx)(d.a,{to:"/login"})},ze=n(123),_e=n(334),Re=n(512),Ge=ze.a().shape({email:ze.b().required().email().label("Email"),password:ze.b().required().min(4).label("Password")}),He=function(){var e=Object(d.h)(),t=J().logIn,n=Object(r.useState)(!1),a=Object(b.a)(n,2),i=a[0],o=a[1],c=function(){var n=Object(u.a)(l.a.mark((function n(r){var a,i,c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=r.email,i=r.password,n.prev=1,n.next=4,R.a.login(a,i);case 4:if(200===(c=n.sent).status){n.next=7;break}return n.abrupt("return",o(!0));case 7:o(!1),t(c.data),e("/app/dashboard"),n.next=15;break;case 12:return n.prev=12,n.t0=n.catch(1),n.abrupt("return",o(!0));case 15:case"end":return n.stop()}}),n,null,[[1,12]])})));return function(e){return n.apply(this,arguments)}}();return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(ge.a,{children:Object(F.jsx)("title",{children:"Login | Simunye"})}),Object(F.jsx)(M.a,{sx:{backgroundColor:"background.default",display:"flex",flexDirection:"column",height:"100%",justifyContent:"center"},children:Object(F.jsx)(fe.a,{maxWidth:"sm",children:Object(F.jsx)(_e.a,{initialValues:{email:"user@simunye.africa",password:""},validationSchema:Ge,onSubmit:c,children:function(e){var t=e.errors,n=e.handleBlur,r=e.handleChange,a=e.handleSubmit,o=e.isSubmitting,c=e.touched,s=e.values;return Object(F.jsxs)("form",{onSubmit:a,children:[Object(F.jsx)(M.a,{sx:{mb:3},children:Object(F.jsx)(Y.a,{color:"textPrimary",variant:"h2",children:"Sign in"})}),Object(F.jsx)(Re.a,{error:Boolean(c.email&&t.email),fullWidth:!0,helperText:c.email&&t.email,label:"Email Address",margin:"normal",name:"email",onBlur:n,onChange:r,type:"email",value:s.email,variant:"outlined"}),Object(F.jsx)(Re.a,{error:Boolean(c.password&&t.password),fullWidth:!0,helperText:c.password&&t.password,label:"Password",margin:"normal",name:"password",onBlur:n,onChange:r,type:"password",value:s.password,variant:"outlined"}),Object(F.jsx)(M.a,{display:i?"block":"none",children:Object(F.jsx)(Y.a,{color:"secondary",variant:"h6",children:"Invalid email and/or password"})}),Object(F.jsx)(M.a,{sx:{py:2},children:Object(F.jsx)(te.a,{color:"primary",disabled:o,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Sign in now"})})]})}})})})]})},Je=function(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(ge.a,{children:Object(F.jsx)("title",{children:"404 | Simunye"})}),Object(F.jsx)(M.a,{sx:{backgroundColor:"background.default",display:"flex",flexDirection:"column",height:"100%",justifyContent:"center"},children:Object(F.jsxs)(fe.a,{maxWidth:"md",children:[Object(F.jsx)(Y.a,{align:"center",color:"textPrimary",variant:"h1",children:"404: The page you are looking for isn\u2019t here"}),Object(F.jsx)(Y.a,{align:"center",color:"textPrimary",variant:"subtitle2",children:"You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation"}),Object(F.jsx)(M.a,{sx:{textAlign:"center"},children:Object(F.jsx)("img",{alt:"Under development",src:"/static/images/undraw_page_not_found_su7k.svg",style:{marginTop:50,display:"inline-block",maxWidth:"100%",width:560}})})]})})]})},Ve=function(e){return[{path:"app",element:e?Object(F.jsx)(ue,{}):Object(F.jsx)(d.a,{to:"/login"}),children:[{path:"dashboard",element:Object(F.jsx)(Fe,{})},{path:"404",element:Object(F.jsx)(Je,{})},{path:"*",element:Object(F.jsx)(d.a,{to:"/404"})}]},{path:"/",element:e?Object(F.jsx)(d.a,{to:"/app/dashboard"}):Object(F.jsx)(je,{}),children:[{path:"login",element:Object(F.jsx)(He,{})},{path:"404",element:Object(F.jsx)(Je,{})},{path:"/",element:Object(F.jsx)(d.a,{to:"/login"})}]}]};var Ke,Ye=function(){var e=Object(r.useState)(),t=Object(b.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(!1),o=Object(b.a)(i,2),c=o[0],s=o[1];c||function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.getUser();case 2:(t=e.sent)&&a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()().then((function(){s(!0)}));var p=Object(d.j)(Ve(n));return Object(F.jsx)(x.a,{theme:w,children:Object(F.jsxs)(G.Provider,{value:{user:n,setUser:a},children:[Object(F.jsx)(g,{}),p]})})},Ze=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Qe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Xe="BNrPK1ySlViikmonMH5pOUxx4639d3mGUNi3YgyaQOReonmanX-LNkVmN5ufgHNl6UBaq7PLkHIAj7KpHmiT_kc";console.log("app server",Xe);var $e=!1,et=null;function tt(){"denied"!==Notification.permission||nt(null)}function nt(e){var t=document.querySelector(".js-subscription-json"),n=document.querySelector(".js-subscription-details");e?(t.textContent=JSON.stringify(e),n.classList.remove("is-invisible")):n.classList.add("is-invisible")}var rt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,634)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),i(e),o(e)}))};o.a.render(Object(F.jsx)(c.a,{children:Object(F.jsx)(Ye,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ze?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Qe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Qe(t,e)}))}"serviceWorker"in navigator&&"PushManager"in window?(console.log("Service Worker and Push is supported"),navigator.serviceWorker.register("".concat("","/service-worker.js")).then((function(e){console.log("Service Worker is registered",e),et=e,window.addEventListener("load",(function(){(Ke=document.querySelector("#js-push-btn"))&&Ke.addEventListener("click",(function(){Ke.disabled=!0,console.log("Cliked",$e),$e?et.pushManager.getSubscription().then((function(e){if(e)return e.unsubscribe()})).catch((function(e){console.log("Error unsubscribing",e)})).then((function(){nt(null),console.log("User is unsubscribed."),$e=!1,tt()})):function(){var e=function(e){for(var t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/-/g,"+").replace(/_/g,"/"),r=window.atob(n),a=new Uint8Array(r.length),i=0;i<r.length;++i)a[i]=r.charCodeAt(i);return a}(Xe);et.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:e}).then((function(e){console.log("User is subscribed."),nt(e),$e=!0,tt()})).catch((function(e){console.log("Failed to subscribe the user: ",e),tt()}))}()})),et.pushManager.getSubscription().then((function(e){($e=!(null===e))?console.log("User IS subscribed."):console.log("User is NOT subscribed."),tt()}))}))})).catch((function(e){console.error("Service Worker Error",e)}))):console.warn("Push messaging is not supported")}(),rt()}},[[488,1,2]]]);
//# sourceMappingURL=main.a3deaccb.chunk.js.map