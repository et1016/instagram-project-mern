"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[8351],{88351:(W,s,_)=>{_.r(s),_.d(s,{UserListPageEE:()=>m});var P=_(92132),o=_(24026),n=_(79284),A=_(21272),C=_(2129),R=_(5409),l=_(12545),U=_(15126),v=_(63299),B=_(67014),t=_(59080),i=_(79275),L=_(14718),I=_(82437),d=_(61535),O=_(5790),T=_(12083),M=_(35223),E=_(74930),D=_(2600),K=_(48940),a=_(41286),h=_(56336),r=_(13426),f=_(84624),g=_(77965),S=_(54257),y=_(71210),N=_(51187),j=_(39404),F=_(58692),G=_(501),V=_(57646),x=_(23120),X=_(44414),$=_(25962),c=_(14664),z=_(42588),H=_(90325),Y=_(62785),Q=_(87443),J=_(41032),Z=_(22957),e=_(93179),u=_(73055),p=_(15747),k=_(85306),w=_(26509),b=_(32058),q=_(81185),__=_(82261),E_=_(62482),t_=_(14509),s_=_(62915),O_=_(3001),M_=_(72810),D_=_(18022),a_=_(67031);const m=()=>((0,n.u)(),(0,P.jsx)(o.e,{}))},79284:(W,s,_)=>{_.d(s,{u:()=>B});var P=_(21272),o=_(2129),n=_(67031),A=_(54894),C=_(17703),R=_(12545);const l="strapi-notification-seat-limit",U="https://cloud.strapi.io/profile/billing",v="https://strapi.io/billing/request-seats",B=()=>{const{formatMessage:t}=(0,A.A)(),{license:i,isError:L,isLoading:I}=(0,R.m)(),d=(0,o.hN)(),{pathname:O}=(0,C.zy)(),{enforcementUserCount:T,permittedSeats:M,licenseLimitStatus:E,isHostedOnStrapiCloud:D}=i??{};P.useEffect(()=>{if(L||I)return;const K=!n(M)&&!window.sessionStorage.getItem(`${l}-${O}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let a;E==="OVER_LIMIT"?a="warning":E==="AT_LIMIT"&&(a="softWarning"),K&&d({type:a,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:T,permittedSeats:M}),link:{url:D?U:v,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:D})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${l}-${O}`,"true")}})},[d,i,O,t,I,M,E,T,D,L])}}}]);
