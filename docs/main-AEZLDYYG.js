import{a as g,b as a,c as b,d as o,e as n,f,g as m,h as p,i as h,j as v,k as M,l as y,m as A,n as i,o as P,p as x,q as D}from"./chunk-5TM6FTD7.js";var s=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["shared-about-page"]],standalone:!0,features:[p],decls:2,vars:0,template:function(t,C){t&1&&(o(0,"p"),m(1,"about-page works!"),n())}})};var c=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["shared-contact-page"]],standalone:!0,features:[p],decls:2,vars:0,template:function(t,C){t&1&&(o(0,"p"),m(1,"contact-page works!"),n())}})};var d=[{path:"about",component:s},{path:"contact",component:c},{path:"countries",loadChildren:()=>import("./chunk-4RFUYZGK.js").then(e=>e.CountriesModule)},{path:"**",redirectTo:"countries"}],N=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=b({type:e});static \u0275inj=g({imports:[i.forRoot(d),i]})};var w={providers:[h({eventCoalescing:!0}),A(d),v()]};var l=class e{title="04-countryApp";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["app-root"]],standalone:!0,features:[p],decls:5,vars:0,consts:[[1,"row","mt-4"],[1,"col-3"],[1,"col"]],template:function(t,C){t&1&&(o(0,"div",0)(1,"div",1),f(2,"shared-sidebar"),n(),o(3,"div",2),f(4,"router-outlet"),n()())},dependencies:[y,i,x,P,D]})};M(l,w).catch(e=>console.error(e));
