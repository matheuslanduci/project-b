var O=Object.defineProperty,J=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var w=(o,n,t)=>n in o?O(o,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[n]=t,d=(o,n)=>{for(var t in n||(n={}))K.call(n,t)&&w(o,t,n[t]);if(v)for(var t of v(n))T.call(n,t)&&w(o,t,n[t]);return o},m=(o,n)=>J(o,D(n));import{j as p,F as U,r as s,a as P,R as E,B as Y,M as j,b as B,c as G,d as W}from"./vendor.170ee348.js";const z=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}};z();var R="/project-b/assets/hero.4e7f014b.png",Z="/project-b/assets/waves.e30dd893.svg",Q="data:image/png;base64,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";const $={repository:"https://github.com/matheuslanduci/project-b"},e=p.exports.jsx,a=p.exports.jsxs,_=p.exports.Fragment;function ee(){return e("header",{className:"w-full",children:e("div",{className:"container mx-auto",children:a("div",{className:"w-full py-6 flex items-center justify-between",children:[e("img",{src:Q,alt:"Project.B"}),a("a",{href:$.repository,target:"_blank",rel:"noopener noreferrer",className:"px-[18px] h-[34px] flex items-center justify-center rounded-[4px] border-dark-100 border-[1px] font-semibold active:translate-y-1",children:[e(U,{className:"mr-2"}),"GitHub"]})]})})})}const te=[{id:1,name:"Apple"},{id:2,name:"Amazon"},{id:3,name:"Google"},{id:4,name:"Microsoft"},{id:5,name:"Samsung"},{id:6,name:"Sony"},{id:7,name:"Xiaomi"},{id:8,name:"Netflix"},{id:9,name:"Facebook"},{id:10,name:"Uber"},{id:11,name:"Twitter"},{id:12,name:"Instagram"},{id:13,name:"Snapchat"},{id:14,name:"Spotify"},{id:15,name:"Youtube"},{id:16,name:"Twitch"},{id:17,name:"Github"},{id:18,name:"Heroku"},{id:19,name:"Vercel"},{id:20,name:"Nike"},{id:21,name:"Adidas"},{id:22,name:"Coca-Cola"},{id:23,name:"IBM"},{id:24,name:"Intel"},{id:25,name:"Disney"},{id:26,name:"Starbucks"},{id:27,name:"McDonalds"},{id:28,name:"Burger King"},{id:29,name:"Pizza Hut"},{id:30,name:"Cisco"},{id:31,name:"Oracle"},{id:32,name:"Ikea"},{id:33,name:"Pepsi"},{id:34,name:"Louis Vuitton"},{id:35,name:"Honda"},{id:36,name:"Nestle"},{id:37,name:"eBay"},{id:38,name:"Philips"},{id:39,name:"Gucci"},{id:40,name:"Visa"},{id:41,name:"Colgate"},{id:42,name:"Citibank"},{id:43,name:"Ferrari"},{id:44,name:"MTV"},{id:45,name:"Gillete"},{id:46,name:"BMW"},{id:47,name:"HP"},{id:48,name:"Hyundai"},{id:49,name:"Heineken"},{id:50,name:"Kellogs"}],L=[{id:1,name:"Bloco de Notas",techs:["frontend","mobile"]},{id:2,name:"Sistema de Estoque",techs:["backend","fullstack","mobile","frontend"]},{id:3,name:"Calculadora",techs:["frontend","mobile"]},{id:4,name:"Landing Page",techs:["frontend"]},{id:5,name:"Blog",techs:["frontend","mobile","backend","fullstack"]},{id:6,name:"Carrinho de Compras",techs:["frontend","mobile"]},{id:7,name:"Chat",techs:["frontend","mobile","backend","fullstack"]},{id:8,name:"Controle de Usu\xE1rios",techs:["frontend","mobile","backend","fullstack"]},{id:9,name:"P\xE1gina de Perfil",techs:["frontend","mobile"]},{id:10,name:"Loja Virtual",techs:["frontend","mobile","backend","fullstack"]},{id:11,name:"P\xE1gina de Login",techs:["frontend","mobile"]},{id:12,name:"Todo List",techs:["frontend","mobile"]},{id:13,name:"Sistema de Reservas",techs:["frontend","mobile","backend","fullstack"]},{id:14,name:"Calend\xE1rio",techs:["frontend","mobile"]},{id:15,name:"UI Kit",techs:["frontend","mobile"]},{id:16,name:"Painel de Controle de servi\xE7os de hospedagem",techs:["frontend","mobile","backend","fullstack"]},{id:17,name:"Dashboard financeiro",techs:["frontend","mobile","backend","fullstack"]},{id:18,name:"Agenda",techs:["frontend","mobile","backend","fullstack"]},{id:19,name:"Gerador de relat\xF3rios",techs:["frontend","mobile","backend","fullstack"]},{id:20,name:"Sistema de Notifica\xE7\xF5es",techs:["frontend","mobile","backend","fullstack"]}];function ae(){const[o,n]=s.exports.useState("developer"),[t,l]=s.exports.useState({backend:!0,frontend:!0,mobile:!0,fullstack:!0}),[i,r]=s.exports.useState([]),[c,x]=s.exports.useState([]),[u,b]=s.exports.useState(0),[h,k]=s.exports.useState(0),[g,N]=s.exports.useState(!1),[y,A]=s.exports.useState(!1);function V(){if(u===i.length-1)return b(0);b(u+1)}function C(){N(!0)}function S(){N(!1)}function I(){if(h===c.length-1)return k(0);k(h+1)}function X(){A(!0)}function M(){A(!1)}function F(){y||I(),g||V()}const H=i[u]||{name:""},q=c[h]||{name:""};return s.exports.useEffect(()=>{x(L.sort(()=>Math.random()-.5)),r(te.sort(()=>Math.random()-.5))},[]),s.exports.useEffect(()=>{x(L.filter(f=>!!(t.backend&&f.techs.includes("backend")||t.frontend&&f.techs.includes("frontend")||t.mobile&&f.techs.includes("mobile")||t.fullstack&&f.techs.includes("fullstack"))))},[t]),a(_,{children:[e(ee,{}),e("div",{className:"w-full",children:e("div",{className:"container mx-auto",children:a("div",{className:"w-full flex items-end",children:[a("div",{className:"flex flex-col mb-[32px]",children:[a("span",{className:"text-5xl font-black leading-[56px]",children:["Transforme-se em um"," ",e("span",{className:"text-primary-100",children:"mestre"}),e("br",{}),"atrav\xE9s de ",e("span",{className:"text-primary-100",children:"desafios"})]}),e("div",{className:"mt-6",children:a("p",{className:"text-gray-100 text-2xl",children:["O"," ",a("span",{className:"text-dark-100 uppercase font-bold",children:["Project",e("span",{className:"text-primary-100",children:"."}),"B"]})," ","te ajuda a melhorar suas habilidades com ",e("br",{}),"desafios da sua \xE1rea."]})}),e("div",{className:"mt-8 flex",children:e("a",{href:"#create-challenge",className:"px-8 h-[54px] flex items-center justify-center bg-gradient-to-tr from-primary-100 to-primary-200 rounded-[4px] text-white font-medium text-xl active:translate-y-1",children:"Gerar desafio"})})]}),e("img",{className:"ml-auto",src:R})]})})}),a("div",{className:"w-full mt-16 bg-primary-200 pb-32",children:[e("img",{className:"w-full mb-8",src:Z}),e("div",{className:"container mx-auto",children:a("div",{className:"flex flex-col",children:[a("div",{className:"flex flex-col",children:[a("span",{className:"font-black text-white flex items-center",children:["Selecione uma fun\xE7\xE3o",e(P,{"data-tip":"Selecione qual a sua fun\xE7\xE3o (por enquanto, apenas desenvolvedores)","data-for":"role-tooltip",className:"ml-2"}),e(E,{id:"role-tooltip",effect:"solid"})]}),e("div",{className:"mt-1 flex",children:e("button",{className:`w-52 h-12 text-xl font-bold rounded-[4px] ${o==="developer"?"bg-primary-300 text-white":"bg-white text-primary-200"}`,onClick:()=>n("developer"),children:"Desenvolvedor"})})]}),a("div",{className:"flex flex-col mt-4",children:[a("span",{className:"font-black text-white flex items-center",children:["Selecione o tipo de projeto",e(P,{"data-tip":"Escolha para qual o tipo de plataforma que voc\xEA deseja desenvolver","data-for":"project-type-tooltip",className:"ml-2"}),e(E,{id:"project-type-tooltip",effect:"solid"})]}),a("div",{className:"mt-1 flex",children:[e("button",{className:`w-52 h-12 text-xl font-bold rounded-l-[4px] ${t.backend?"bg-primary-300 text-white":"bg-white text-primary-200"}`,onClick:()=>l(m(d({},t),{backend:!t.backend})),children:"Backend"}),e("button",{className:`w-52 h-12 text-xl font-bold ${t.frontend?"bg-primary-300 text-white":"bg-white text-primary-200"}`,onClick:()=>l(m(d({},t),{frontend:!t.frontend})),children:"Frontend"}),e("button",{className:`w-52 h-12 text-xl font-bold ${t.mobile?"bg-primary-300 text-white":"bg-white text-primary-200"}`,onClick:()=>l(m(d({},t),{mobile:!t.mobile})),children:"Mobile"}),e("button",{className:`w-52 h-12 text-xl font-bold rounded-r-[4px] ${t.fullstack?"bg-primary-300 text-white":"bg-white text-primary-200"}`,onClick:()=>l(m(d({},t),{fullstack:!t.fullstack})),children:"Fullstack"})]})]}),e("div",{className:"flex mt-6",children:a("button",{id:"create-challenge",className:"h-14 px-8 text-xl text-primary-200 bg-white font-semibold rounded-[4px] flex items-center justify-center active:translate-y-1",onClick:F,children:[e(Y,{size:32,className:"mr-2"}),"Novo desafio"]})}),a("div",{className:"flex items-center mt-7 font-black text-[64px] text-dark-100",children:[a("span",{children:["Crie um(a) ",e("span",{className:"text-white",children:q.name})]}),y?e(j,{size:32,className:"ml-4 fill-white cursor-pointer",onClick:M}):e(B,{size:32,className:"ml-4 fill-white cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-75",onClick:X})]}),a("div",{className:"flex items-center font-black text-[64px] text-dark-100",children:[a("span",{children:["Para ",e("span",{className:"text-white",children:H.name})]}),g?e(j,{size:32,className:"ml-4 fill-white cursor-pointer",onClick:S}):e(B,{size:32,className:"ml-4 fill-white cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-75",onClick:C})]})]})})]})]})}G.render(e(W.StrictMode,{children:e(ae,{})}),document.getElementById("root"));