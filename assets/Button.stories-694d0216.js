import{j as u}from"./jsx-runtime-ffb262ed.js";import{I as _,r as M,c as O}from"./index-064d7150.js";import{R as e,r as V}from"./index-76fb7be0.js";import"./extends-98964cd2.js";import"./index-d3ea75b5.js";import"./_commonjsHelpers-de833af9.js";var n=new Map;n.set("bold",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});n.set("duotone",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});n.set("fill",function(){return e.createElement(e.Fragment,null,e.createElement("path",{d:"M221.7,133.7l-72,72A8.3,8.3,0,0,1,144,208a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l72,72A8.1,8.1,0,0,1,221.7,133.7Z"}))});n.set("light",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});n.set("thin",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});n.set("regular",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var H=function(m,N){return M(m,N,n)},I=V.forwardRef(function(r,m){return e.createElement(_,Object.assign({ref:m},r,{renderPath:H}))});I.displayName="ArrowRight";const Z=I,U={title:"Form/Button",component:O,args:{children:"Send",variant:"primary",size:"md",disabled:!1},argTypes:{variant:{options:["primary","secondary","tertiary"],control:"inline-radio"},size:{options:["sm","md"],control:"inline-radio"},disabled:{control:{type:"boolean"}},onClick:{action:"click"}}},t={},a={args:{variant:"secondary",children:"Create new"}},o={args:{variant:"tertiary",children:"Cancel"}},s={args:{size:"sm"}},i={args:{children:u.jsxs(u.Fragment,{children:["Next step",u.jsx(Z,{weight:"bold"})]})}},c={args:{disabled:!0}},l={args:{disabled:!0,variant:"secondary",children:"Create new"}},d={args:{disabled:!0,variant:"tertiary",children:"Cancel"}};var p,y,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(g=(y=t.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var k,h,f;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Create new'
  }
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var E,L,b;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Cancel'
  }
}`,...(b=(L=o.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};var x,j,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(S=(j=s.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var W,v,w;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: <>
        Next step
        <ArrowRight weight="bold" />
      </>
  }
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var C,F,P;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(P=(F=c.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var R,A,D;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    disabled: true,
    variant: 'secondary',
    children: 'Create new'
  }
}`,...(D=(A=l.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var B,T,z;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    disabled: true,
    variant: 'tertiary',
    children: 'Cancel'
  }
}`,...(z=(T=d.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};const X=["Primary","Secondary","Tertiary","Small","WithIcon","PrimaryDisabled","SecondaryDisabled","TertiaryDisabled"];export{t as Primary,c as PrimaryDisabled,a as Secondary,l as SecondaryDisabled,s as Small,o as Tertiary,d as TertiaryDisabled,i as WithIcon,X as __namedExportsOrder,U as default};
