var g=Object.defineProperty,w=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var p=(o,e,t)=>e in o?g(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,f=(o,e)=>{for(var t in e||(e={}))v.call(e,t)&&p(o,t,e[t]);if(m)for(var t of m(e))y.call(e,t)&&p(o,t,e[t]);return o},d=(o,e)=>w(o,b(e));import{r as L,c as C,a as N,o as l,b as i,d as u,w as V,v as P,u as s,e as h,T,f as k,g as j,F as x,h as B,i as D,t as U}from"./index.93d40117.js";const E=u("h2",{class:"mb-5 text-center text-xl italic"},"Let's find some pokemon!",-1),F={class:"mb-7 w-80 flex justify-center"},G={key:0,class:"w-80"},$={setup(o){const e=L({pokemon:[],idLookup:{},search:"",filteredPokemon:C(()=>t())});function t(){return e.search?e.pokemon.filter(r=>r.name.includes(e.search.toLowerCase())):[]}function _(r){return r.split(" ").map(a=>a.slice(0,1).toUpperCase()+a.slice(1)).join(" ")}return(async()=>{const r=await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=150").then(a=>a.json());e.pokemon=await r.results,e.idLookup=await r.results.reduce((a,c,n)=>d(f({},a),{[c.name]:n+1}),{})})(),(r,a)=>{const c=N("router-link");return l(),i(x,null,[E,u("form",F,[V(u("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=n=>s(e).search=n),placeholder:"Enter Pokemon Name",class:"p-2 px-3 w-full outline-0 font-mono text-lg rounded-xl bg-gray-100 border-2 border-gray-300 focus:bg-white focus:border-emerald-400"},null,512),[[P,s(e).search]])]),s(e).pokemon?(l(),i("section",G,[h(T,{tag:"ul",mode:"out-in",name:"list",class:"relative gap-4 text-3xl text-emerald-600 font-light max-h-96 overflow-hidden after:content-[''] after:bg-gradient-to-t after:from-emerald-50 after:to-transparent after:absolute after:top-0 after:left-0 after:w-full after:h-96 after:pointer-events-none"},{default:k(()=>[(l(!0),i(x,null,B(s(e).filteredPokemon,n=>(l(),i("li",{key:n.name,class:"mb-3 ml-5"},[h(c,{to:`/profile/${s(e).idLookup[n.name]}`},{default:k(()=>[D(U(_(n.name)),1)]),_:2},1032,["to"])]))),128))]),_:1})])):j("",!0)],64)}}};export{$ as default};
