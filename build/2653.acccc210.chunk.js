(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[2653],{29327:D=>{function f(e,s,r,d){for(var c=r-1,u=e.length;++c<u;)if(d(e[c],s))return c;return-1}D.exports=f},20920:(D,f,e)=>{var s=e(87864),r=e(80151),d=e(29327),c=e(52689),u=e(76299),v=Array.prototype,O=v.splice;function y(i,C,h,z){var w=z?d:r,Q=-1,J=C.length,E=i;for(i===C&&(C=u(C)),h&&(E=s(i,c(h)));++Q<J;)for(var W=0,R=C[Q],$=h?h(R):R;(W=w(E,$,W,z))>-1;)E!==i&&O.call(E,W,1),O.call(i,W,1);return i}D.exports=y},34542:(D,f,e)=>{var s=e(87864),r=e(45353),d=e(29884),c=e(82261);function u(v,O){var y=c(v)?s:d;return y(v,r(O,3))}D.exports=u},92173:(D,f,e)=>{var s=e(39226),r=e(76610),d=s(r);D.exports=d},76610:(D,f,e)=>{var s=e(20920);function r(d,c){return d&&d.length&&c&&c.length?s(d,c):d}D.exports=r},61468:(D,f,e)=>{var s=e(52196);function r(d){var c=d==null?0:d.length;return c?s(d,1,c):[]}D.exports=r},82653:(D,f,e)=>{"use strict";e.d(f,{ProtectedEditView:()=>Ke,w:()=>ie});var s=e(92132),r=e(21272),d=e(94061),c=e(83997),u=e(30893),v=e(90151),O=e(68074),y=e(38413),i=e(55356),C=e(85963),h=e(4198),z=e(57237),w=e(60888),Q=e(44604),J=e(4181),E=e(2129),W=e(61535),R=e(54894),$=e(17703),V=e(12545),q=e(67975),G=e(99831),K=e(98842),le=e(89032),de=e(54514),ce=e(20415),_e=e(34542),Ee=e(61468),b=e(79793),pe=e(24092),Y=e(12083),ue=e(88761),ae=e(92173),He=e(15126),ze=e(63299),Qe=e(67014),Je=e(59080),be=e(79275),Xe=e(14718),Ze=e(82437),we=e(5790),qe=e(35223),es=e(5409),ss=e(74930),ts=e(2600),ns=e(48940),as=e(41286),os=e(56336),is=e(13426),rs=e(84624),ls=e(77965),ds=e(54257),cs=e(71210),_s=e(51187),Es=e(39404),ps=e(58692),us=e(501),Ps=e(57646),As=e(23120),gs=e(44414),hs=e(25962),ms=e(14664),Os=e(42588),Ms=e(90325),Ts=e(62785),Ds=e(87443),Cs=e(41032),ys=e(22957),Is=e(93179),xs=e(73055),fs=e(15747),vs=e(85306),Rs=e(26509),Ls=e(32058),Us=e(81185),js=e(82261);const Pe=V.n.injectEndpoints({endpoints:n=>({getPermissions:n.query({query:()=>"/admin/content-api/permissions",transformResponse:t=>t.data}),getRoutes:n.query({query:()=>"/admin/content-api/routes",transformResponse:t=>t.data})}),overrideExisting:!1}),{useGetPermissionsQuery:Ae,useGetRoutesQuery:ge}=Pe,[he,me]=(0,le.q)("ApiTokenPermissionsContext"),Oe=({children:n,...t})=>(0,s.jsx)(he,{...t,children:n}),ee=()=>me("useApiTokenPermissions"),Me=({errors:n={},onChange:t,canEditInputs:a,isCreating:_,values:o={},apiToken:P={},onDispatch:l,setHasChangedPermissions:j})=>{const{formatMessage:m}=(0,R.A)(),U=({target:{value:I}})=>{j(!1),I==="full-access"&&l({type:"SELECT_ALL_ACTIONS"}),I==="read-only"&&l({type:"ON_CHANGE_READ_ONLY"})},F=[{value:"read-only",label:{id:"Settings.tokens.types.read-only",defaultMessage:"Read-only"}},{value:"full-access",label:{id:"Settings.tokens.types.full-access",defaultMessage:"Full access"}},{value:"custom",label:{id:"Settings.tokens.types.custom",defaultMessage:"Custom"}}];return(0,s.jsx)(d.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,s.jsxs)(c.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,s.jsx)(u.o,{variant:"delta",as:"h2",children:m({id:"global.details",defaultMessage:"Details"})}),(0,s.jsxs)(v.x,{gap:5,children:[(0,s.jsx)(O.E,{col:6,xs:12,children:(0,s.jsx)(K.T,{error:n.name,value:o.name,canEditInputs:a,onChange:t})},"name"),(0,s.jsx)(O.E,{col:6,xs:12,children:(0,s.jsx)(K.a,{error:n.description,value:o.description,canEditInputs:a,onChange:t})},"description"),(0,s.jsx)(O.E,{col:6,xs:12,children:(0,s.jsx)(K.L,{isCreating:_,error:n.lifespan,value:o.lifespan,onChange:t,token:P})},"lifespan"),(0,s.jsx)(O.E,{col:6,xs:12,children:(0,s.jsx)(K.b,{value:o.type,error:n.type,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:I=>{U({target:{value:I}}),t({target:{name:"type",value:I}})},options:F,canEditInputs:a})},"type")]})]})})},Te=({apiTokenName:n=null})=>{const{formatMessage:t}=(0,R.A)();return(0,E.L4)(),(0,s.jsxs)(y.g,{"aria-busy":"true",children:[(0,s.jsx)(E.x7,{name:"API Tokens"}),(0,s.jsx)(i.Q,{primaryAction:(0,s.jsx)(C.$,{disabled:!0,startIcon:(0,s.jsx)(de.A,{}),type:"button",size:"L",children:t({id:"global.save",defaultMessage:"Save"})}),title:n||t({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"})}),(0,s.jsx)(h.s,{children:(0,s.jsx)(E.Bl,{})})]})},De=n=>{switch(n){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},Ce=(0,b.Ay)(d.a)`
  margin: -1px;
  border-radius: ${({theme:n})=>n.spaces[1]} 0 0 ${({theme:n})=>n.spaces[1]};
`,ye=({route:n={handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}})=>{const{formatMessage:t}=(0,R.A)(),{method:a,handler:_,path:o}=n,P=o?Ee(o.split("/")):[],[l="",j=""]=_?_.split("."):[],m=De(n.method);return(0,s.jsxs)(c.s,{direction:"column",alignItems:"stretch",gap:2,children:[(0,s.jsxs)(u.o,{variant:"delta",as:"h3",children:[t({id:"Settings.apiTokens.createPage.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",(0,s.jsx)("span",{children:l}),(0,s.jsxs)(u.o,{variant:"delta",textColor:"primary600",children:[".",j]})]}),(0,s.jsxs)(c.s,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0,children:[(0,s.jsx)(Ce,{background:m.background,borderColor:m.border,padding:2,children:(0,s.jsx)(u.o,{fontWeight:"bold",textColor:m.text,children:a})}),(0,s.jsx)(d.a,{paddingLeft:2,paddingRight:2,children:_e(P,U=>(0,s.jsxs)(u.o,{textColor:U.includes(":")?"neutral600":"neutral900",children:["/",U]},U))})]})]})},Ie=()=>{const{value:{selectedAction:n,routes:t}}=ee(),{formatMessage:a}=(0,R.A)(),_=n?.split(".")[0];return(0,s.jsx)(O.E,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"},children:n?(0,s.jsx)(c.s,{direction:"column",alignItems:"stretch",gap:2,children:_&&_ in t&&t[_].map(o=>o.config.auth?.scope?.includes(n)||o.handler===n?(0,s.jsx)(ye,{route:o},o.handler):null)}):(0,s.jsxs)(c.s,{direction:"column",alignItems:"stretch",gap:2,children:[(0,s.jsx)(u.o,{variant:"delta",as:"h3",children:a({id:"Settings.apiTokens.createPage.permissions.header.title",defaultMessage:"Advanced settings"})}),(0,s.jsx)(u.o,{as:"p",textColor:"neutral600",children:a({id:"Settings.apiTokens.createPage.permissions.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"})})]})})},oe=(0,b.AH)`
  background: ${n=>n.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,xe=(0,b.Ay)(d.a)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${n=>n.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${n=>n.isActive&&oe}
  &:hover {
    ${oe}
  }
`,fe=b.Ay.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:n})=>n.colors.neutral150};
`,ve=({controllers:n=[],label:t,orderNumber:a=0,disabled:_=!1,onExpanded:o=()=>null,indexExpandendCollapsedContent:P=null})=>{const{value:{onChangeSelectAll:l,onChange:j,selectedActions:m,setSelectedAction:U,selectedAction:F}}=ee(),[I,X]=r.useState(!1),{formatMessage:H}=(0,R.A)(),M=()=>{X(g=>!g),o(a)};r.useEffect(()=>{P!==null&&P!==a&&I&&X(!1)},[P,a,I]);const re=g=>g===F;return(0,s.jsxs)(z.n,{expanded:I,onToggle:M,variant:a%2?"primary":"secondary",children:[(0,s.jsx)(w.P,{title:pe(t)}),(0,s.jsx)(Q.u,{children:n?.map(g=>{const x=g.actions.every(T=>m.includes(T.actionId)),L=g.actions.some(T=>m.includes(T.actionId));return(0,s.jsxs)(d.a,{children:[(0,s.jsxs)(c.s,{justifyContent:"space-between",alignItems:"center",padding:4,children:[(0,s.jsx)(d.a,{paddingRight:4,children:(0,s.jsx)(u.o,{variant:"sigma",textColor:"neutral600",children:g?.controller})}),(0,s.jsx)(fe,{}),(0,s.jsx)(d.a,{paddingLeft:4,children:(0,s.jsx)(J.S,{value:x,indeterminate:!x&&L,onValueChange:()=>{l({target:{value:[...g.actions]}})},disabled:_,children:H({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,s.jsx)(v.x,{gap:4,padding:4,children:g?.actions&&g?.actions.map(T=>(0,s.jsx)(O.E,{col:6,children:(0,s.jsxs)(xe,{isActive:re(T.actionId),padding:2,hasRadius:!0,children:[(0,s.jsx)(J.S,{value:m.includes(T.actionId),name:T.actionId,onValueChange:()=>{j({target:{value:T.actionId}})},disabled:_,children:T.action}),(0,s.jsx)("button",{type:"button","data-testid":"action-cog",onClick:()=>U({target:{value:T.actionId}}),style:{display:"inline-flex",alignItems:"center"},children:(0,s.jsx)(ce.A,{})})]})},T.actionId))})]},`${t}.${g?.controller}`)})})]})},Re=({section:n=null,...t})=>{const[a,_]=r.useState(null),o=P=>_(P);return(0,s.jsx)(d.a,{padding:4,background:"neutral0",children:n&&n.map((P,l)=>(0,s.jsx)(ve,{label:P.label,controllers:P.controllers,orderNumber:l,indexExpandendCollapsedContent:a,onExpanded:o,...t},P.apiId))})},Le=({...n})=>{const{value:{data:t}}=ee(),{formatMessage:a}=(0,R.A)();return(0,s.jsxs)(v.x,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0",children:[(0,s.jsxs)(O.E,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[(0,s.jsxs)(c.s,{direction:"column",alignItems:"stretch",gap:2,children:[(0,s.jsx)(u.o,{variant:"delta",as:"h2",children:a({id:"Settings.apiTokens.createPage.permissions.title",defaultMessage:"Permissions"})}),(0,s.jsx)(u.o,{as:"p",textColor:"neutral600",children:a({id:"Settings.apiTokens.createPage.permissions.description",defaultMessage:"Only actions bound by a route are listed below."})})]}),t?.permissions&&(0,s.jsx)(Re,{section:t?.permissions,...n})]}),(0,s.jsx)(Ie,{})]})},Ue=Y.Ik().shape({name:Y.Yj().max(100).required(E.iW.required),type:Y.Yj().oneOf(["read-only","full-access","custom"]).required(E.iW.required),description:Y.Yj().nullable(),lifespan:Y.ai().integer().min(0).nullable().defined(E.iW.required)}),je=n=>{const t={allActionsIds:[],permissions:[]};return t.permissions=Object.entries(n).map(([a,_])=>({apiId:a,label:a.split("::")[1],controllers:Object.keys(_.controllers).map(o=>({controller:o,actions:o in _.controllers?_.controllers[o].map(P=>{const l=`${a}.${o}.${P}`;return a.includes("api::")&&t.allActionsIds.push(l),{action:P,actionId:l}}).flat():[]})).flat()})),t},Be={data:{allActionsIds:[],permissions:[]},routes:{},selectedAction:"",selectedActions:[]},We=(n,t)=>(0,ue.Ay)(n,a=>{switch(t.type){case"ON_CHANGE":{a.selectedActions.includes(t.value)?ae(a.selectedActions,t.value):a.selectedActions.push(t.value);break}case"SELECT_ALL_IN_PERMISSION":{t.value.every(o=>a.selectedActions.includes(o.actionId))?t.value.forEach(o=>{ae(a.selectedActions,o.actionId)}):t.value.forEach(o=>{a.selectedActions.push(o.actionId)});break}case"SELECT_ALL_ACTIONS":{a.selectedActions=[...a.data.allActionsIds];break}case"ON_CHANGE_READ_ONLY":{const _=a.data.allActionsIds.filter(o=>o.includes("find")||o.includes("findOne"));a.selectedActions=[..._];break}case"UPDATE_PERMISSIONS_LAYOUT":{a.data=je(t.value);break}case"UPDATE_ROUTES":{a.routes={...t.value};break}case"UPDATE_PERMISSIONS":{a.selectedActions=[...t.value];break}case"SET_SELECTED_ACTION":{a.selectedAction=t.value;break}default:return a}}),ie=()=>{(0,E.L4)();const{formatMessage:n}=(0,R.A)(),t=(0,E.hN)(),{lockApp:a,unlockApp:_}=(0,E.MA)(),{state:o}=(0,$.zy)(),P=(0,V.j)(p=>p.admin_app.permissions),[l,j]=r.useState(o?.apiToken?.accessKey?{...o.apiToken}:null),{trackUsage:m}=(0,E.z1)(),{setCurrentStep:U}=(0,E.Cx)(),{allowedActions:{canCreate:F,canUpdate:I,canRegenerate:X}}=(0,E.ec)(P.settings?.["api-tokens"]),[H,M]=r.useReducer(We,Be),g=(0,$.W5)("/settings/api-tokens/:id")?.params?.id,x=g==="create",{_unstableFormatAPIError:L,_unstableFormatValidationErrors:T}=(0,E.wq)(),Se=(0,$.W6)(),S=Ae(),k=ge();r.useEffect(()=>{S.error&&t({type:"warning",message:L(S.error)})},[S.error,L,t]),r.useEffect(()=>{k.error&&t({type:"warning",message:L(k.error)})},[k.error,L,t]),r.useEffect(()=>{S.data&&M({type:"UPDATE_PERMISSIONS_LAYOUT",value:S.data})},[S.data]),r.useEffect(()=>{k.data&&M({type:"UPDATE_ROUTES",value:k.data})},[k.data]),r.useEffect(()=>{l&&(l.type==="read-only"&&M({type:"ON_CHANGE_READ_ONLY"}),l.type==="full-access"&&M({type:"SELECT_ALL_ACTIONS"}),l.type==="custom"&&M({type:"UPDATE_PERMISSIONS",value:l?.permissions}))},[l]),r.useEffect(()=>{m(x?"didAddTokenFromList":"didEditTokenFromList",{tokenType:G.A})},[x,m]);const{data:B,error:se,isLoading:ke}=(0,q.b)(g,{skip:!g||x||!!l});r.useEffect(()=>{se&&t({type:"warning",message:L(se)})},[se,L,t]),r.useEffect(()=>{B&&(j(B),B.type==="read-only"&&M({type:"ON_CHANGE_READ_ONLY"}),B.type==="full-access"&&M({type:"SELECT_ALL_ACTIONS"}),B.type==="custom"&&M({type:"UPDATE_PERMISSIONS",value:B?.permissions}))},[B]);const[Ne]=(0,q.c)(),[$e]=(0,q.d)(),Ve=async(p,N)=>{m(x?"willCreateToken":"willEditToken",{tokenType:G.A}),a();try{if(x){const A=await Ne({...p,lifespan:p?.lifespan||null,permissions:p.type==="custom"?H.selectedActions:null});if("error"in A){(0,V.x)(A.error)&&A.error.name==="ValidationError"?N.setErrors(T(A.error)):t({type:"warning",message:L(A.error)});return}t({type:"success",message:n({id:"notification.success.apitokencreated",defaultMessage:"API Token successfully created"})}),m("didCreateToken",{type:A.data.type,tokenType:G.A}),Se.replace(`/settings/api-tokens/${A.data.id}`,{apiToken:A.data}),U("apiTokens.success")}else{const A=await $e({id:g,name:p.name,description:p.description,type:p.type,permissions:p.type==="custom"?H.selectedActions:null});if("error"in A){(0,V.x)(A.error)&&A.error.name==="ValidationError"?N.setErrors(T(A.error)):t({type:"warning",message:L(A.error)});return}t({type:"success",message:n({id:"notification.success.apitokenedited",defaultMessage:"API Token successfully edited"})}),m("didEditToken",{type:A.data.type,tokenType:G.A})}}catch{t({type:"warning",message:{id:"notification.error",defaultMessage:"Something went wrong"}})}finally{_()}},[Ge,te]=r.useState(!1),Ye={...H,onChange:({target:{value:p}})=>{te(!0),M({type:"ON_CHANGE",value:p})},onChangeSelectAll:({target:{value:p}})=>{te(!0),M({type:"SELECT_ALL_IN_PERMISSION",value:p})},setSelectedAction:({target:{value:p}})=>{M({type:"SET_SELECTED_ACTION",value:p})}},ne=I&&!x||F&&x;return ke?(0,s.jsx)(Te,{apiTokenName:l?.name}):(0,s.jsx)(Oe,{value:Ye,children:(0,s.jsxs)(y.g,{children:[(0,s.jsx)(E.x7,{name:"API Tokens"}),(0,s.jsx)(W.l1,{validationSchema:Ue,validateOnChange:!1,initialValues:{name:l?.name||"",description:l?.description||"",type:l?.type,lifespan:l?.lifespan},enableReinitialize:!0,onSubmit:(p,N)=>Ve(p,N),children:({errors:p,handleChange:N,isSubmitting:A,values:Z,setFieldValue:Fe})=>(Ge&&Z?.type!=="custom"&&Fe("type","custom"),(0,s.jsxs)(E.lV,{children:[(0,s.jsx)(K.F,{backUrl:"/settings/api-tokens",title:{id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"},token:l,setToken:j,canEditInputs:ne,canRegenerate:X,isSubmitting:A,regenerateUrl:"/admin/api-tokens/"}),(0,s.jsx)(h.s,{children:(0,s.jsxs)(c.s,{direction:"column",alignItems:"stretch",gap:6,children:[Boolean(l?.name)&&(0,s.jsx)(K.c,{token:l?.accessKey,tokenType:G.A}),(0,s.jsx)(Me,{errors:p,onChange:N,canEditInputs:ne,isCreating:x,values:Z,apiToken:l,onDispatch:M,setHasChangedPermissions:te}),(0,s.jsx)(Le,{disabled:!ne||Z?.type==="read-only"||Z?.type==="full-access"})]})})]}))})]})})},Ke=()=>{const n=(0,V.j)(t=>t.admin_app.permissions.settings?.["api-tokens"].read);return(0,s.jsx)(E.kz,{permissions:n,children:(0,s.jsx)(ie,{})})}},67975:(D,f,e)=>{"use strict";e.d(f,{a:()=>v,b:()=>c,c:()=>u,d:()=>O,u:()=>d});var s=e(12545);const r=s.n.injectEndpoints({endpoints:y=>({getAPITokens:y.query({query:()=>"/admin/api-tokens",transformResponse:i=>i.data,providesTags:(i,C)=>[...i?.map(({id:h})=>({type:"ApiToken",id:h}))??[],{type:"ApiToken",id:"LIST"}]}),getAPIToken:y.query({query:i=>`/admin/api-tokens/${i}`,transformResponse:i=>i.data,providesTags:(i,C,h)=>[{type:"ApiToken",id:h}]}),createAPIToken:y.mutation({query:i=>({url:"/admin/api-tokens",method:"POST",data:i}),transformResponse:i=>i.data,invalidatesTags:[{type:"ApiToken",id:"LIST"}]}),deleteAPIToken:y.mutation({query:i=>({url:`/admin/api-tokens/${i}`,method:"DELETE"}),transformResponse:i=>i.data,invalidatesTags:(i,C,h)=>[{type:"ApiToken",id:h}]}),updateAPIToken:y.mutation({query:({id:i,...C})=>({url:`/admin/api-tokens/${i}`,method:"PUT",data:C}),transformResponse:i=>i.data,invalidatesTags:(i,C,{id:h})=>[{type:"ApiToken",id:h}]})}),overrideExisting:!1}),{useGetAPITokensQuery:d,useGetAPITokenQuery:c,useCreateAPITokenMutation:u,useDeleteAPITokenMutation:v,useUpdateAPITokenMutation:O}=r}}]);
