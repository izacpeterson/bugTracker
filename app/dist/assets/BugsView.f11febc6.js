import{_ as x,o as e,c as n,a as s,t as c,w as g,j as f,r as w,F as p,k as h,m as _,b as m}from"./index.ff3067dc.js";const y={props:["bug","description","timestamp","uuid","status"],data(){return{bugStatus:this.status}},methods:{async changeStatus(){console.log(this.status),console.log(this.uuid),console.log(this.bugStatus);let u=`/api/status?uuid=${this.uuid}&status=${this.bugStatus}`;console.log(u);let a=await(await fetch(u)).text();console.log(a),this.$emit("refresh",this.uuid,this.bugStatus)}}},k={class:"flex m-4 bg-gray-100 dark:bg-zinc-800 drop-shadow"},S={class:"flex flex-col w-full px-4 py-1"},b={class:"flex w-full justify-between"},v={class:"px-2"},B={class:"text-xs text-right text-gray-500"},R=s("option",{value:"new"},"new",-1),$=s("option",{value:"wip"},"wip",-1),D=s("option",{value:"fixed"},"fixed",-1),L=[R,$,D];function j(u,i,a,d,l,r){return e(),n("div",k,[s("div",S,[s("div",b,[s("span",null,c(a.bug),1),s("span",null,c(a.timestamp),1)]),s("span",v,c(a.description),1),s("span",B,c(a.uuid),1)]),g(s("select",{onChange:i[0]||(i[0]=(...o)=>r.changeStatus&&r.changeStatus(...o)),"onUpdate:modelValue":i[1]||(i[1]=o=>l.bugStatus=o),name:"",id:"",class:"bg-gray-100 dark:bg-zinc-800"},L,544),[[f,l.bugStatus]])])}const V=x(y,[["render",j]]),C={data(){return{bugs:[]}},created(){this.getBugs()},methods:{async getBugs(){let i=await(await fetch("/api/bugs")).json();this.bugs=i},updateList(u,i){let a=this.bugs.findIndex(d=>d.uuid==u);this.bugs[a].status=i}},components:{Bug:V}},F={class:"flex"},N={class:"dark:text-gray-300 w-1/3"},z=s("h2",{class:"text-center text-xl"},"New",-1),I={class:"dark:text-gray-300 w-1/3"},E=s("h2",{class:"text-center text-xl"},"WIP",-1),M={class:"dark:text-gray-300 w-1/3"},P=s("h2",{class:"text-center text-xl"},"Fixed",-1);function T(u,i,a,d,l,r){const o=w("Bug");return e(),n("main",null,[s("div",F,[s("ul",N,[z,(e(!0),n(p,null,h(l.bugs,t=>(e(),n("li",{key:t.title},[t.status=="new"?(e(),_(o,{key:0,onRefresh:r.updateList,bug:t.title,description:t.description,timestamp:t.timestamp,uuid:t.uuid,status:t.status},null,8,["onRefresh","bug","description","timestamp","uuid","status"])):m("",!0)]))),128))]),s("ul",I,[E,(e(!0),n(p,null,h(l.bugs,t=>(e(),n("li",{key:t.title},[t.status=="wip"?(e(),_(o,{key:0,onRefresh:r.updateList,bug:t.title,description:t.description,timestamp:t.timestamp,uuid:t.uuid,status:t.status},null,8,["onRefresh","bug","description","timestamp","uuid","status"])):m("",!0)]))),128))]),s("ul",M,[P,(e(!0),n(p,null,h(l.bugs,t=>(e(),n("li",{key:t.title},[t.status=="fixed"?(e(),_(o,{key:0,onRefresh:r.updateList,bug:t.title,description:t.description,timestamp:t.timestamp,uuid:t.uuid,status:t.status},null,8,["onRefresh","bug","description","timestamp","uuid","status"])):m("",!0)]))),128))])])])}const W=x(C,[["render",T]]);export{W as default};