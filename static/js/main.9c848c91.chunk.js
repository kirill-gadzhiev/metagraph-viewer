(this["webpackJsonpmetagraph-viewer"]=this["webpackJsonpmetagraph-viewer"]||[]).push([[0],{11:function(e,t,r){e.exports={root:"Toolbar_root__1_haE",pair:"Toolbar_pair__1hupD"}},36:function(e,t,r){},63:function(e,t,r){"use strict";r.r(t);var o=r(4),n=r(2),c=r.n(n),a=r(23),l=r.n(a),i=(r(36),r(6)),u=r(11),s=r.n(u),d=r(12),h=r(0),j=r(3),g=new function e(){var t=this;Object(h.a)(this,e),this.colorVertex=localStorage.getItem("colorVertex")||"#444",this.colorEdge=localStorage.getItem("colorEdge")||"yellow",this.colorBackground=localStorage.getItem("colorBackground")||"#ddd",this.setColorVertex=function(e){t.colorVertex=e,localStorage.setItem("colorVertex",e)},this.setColorEdge=function(e){t.colorEdge=e,localStorage.setItem("colorEdge",e)},this.setColorBackground=function(e){t.colorBackground=e,localStorage.setItem("colorBackground",e)},Object(j.k)(this)},b=c.a.createContext(g),f=function(){return Object(n.useContext)(b)},p=g,O=Object(d.a)((function(){var e=f(),t=e.colorBackground,r=e.colorVertex,c=e.colorEdge,a=e.setColorBackground,l=e.setColorEdge,u=e.setColorVertex,d=Object(n.useState)(t),h=Object(i.a)(d,2),j=h[0],g=h[1],b=Object(n.useState)(r),p=Object(i.a)(b,2),O=p[0],x=p[1],v=Object(n.useState)(c),m=Object(i.a)(v,2),k=m[0],C=m[1];return Object(o.jsxs)("div",{className:s.a.root,children:[Object(o.jsxs)("span",{className:s.a.pair,children:[Object(o.jsx)("label",{htmlFor:"edge-color",children:"\u0426\u0432\u0435\u0442 \u0440\u0435\u0431\u0435\u0440"}),Object(o.jsx)("input",{type:"color",id:"edge-color",value:k,onChange:function(e){return C(e.target.value)},onBlur:function(){return l(k)}})]}),Object(o.jsxs)("span",{className:s.a.pair,children:[Object(o.jsx)("label",{htmlFor:"vertex-color",children:"\u0426\u0432\u0435\u0442 \u0432\u0435\u0440\u0448\u0438\u043d"}),Object(o.jsx)("input",{type:"color",id:"vertex-color",value:O,onChange:function(e){return x(e.target.value)},onBlur:function(){return u(O)}})]}),Object(o.jsxs)("span",{className:s.a.pair,children:[Object(o.jsx)("label",{htmlFor:"background-color",children:"\u0426\u0432\u0435\u0442 \u0444\u043e\u043d\u0430"}),Object(o.jsx)("input",{type:"color",id:"background-color",value:j,onChange:function(e){return g(e.target.value)},onBlur:function(){return a(j)}})]})]})})),x=r(24),v=r(25),m=r(18),k=function(){return 10*Math.random()},C=new function e(){var t=this;Object(h.a)(this,e),this.graphView=null,this.graphModel=null,this.setGraphData=function(e){t.graphModel=x.parse(v.UndirectedGraph,e),t.graphView=function(e){var t=Object(m.a)(e.nodeEntries()).map((function(e){return{id:Object(i.a)(e,1)[0],x:k(),y:k()-5,z:k()-10}})),r=Object(m.a)(e.edgeEntries()).map((function(e){var r=Object(i.a)(e,4),o=(r[0],r[1],r[2]),n=r[3],c=t.find((function(e){return e.id===o})),a=t.find((function(e){return e.id===n}));return c&&a?{v1:c,v2:a}:null})).filter((function(e){return null!==e}));return window.__graph__=e,{vertices:t,edges:r}}(t.graphModel)},Object(j.k)(this)},E=c.a.createContext(C),w=C,B=r(29),S=Object(d.a)((function(){var e=Object(n.useContext)(E),t=e.graphView,r=e.setGraphData,c=Object(n.useState)(null),a=Object(i.a)(c,2),l=a[0],u=a[1],s=f(),d=s.colorVertex,h=s.colorEdge,j=s.colorBackground;return Object(n.useEffect)((function(){fetch("example.graphml").then((function(e){return e.text()})).then((function(e){return r(e)}))}),[]),Object(n.useEffect)((function(){t&&u(function(e,t,r){return{nodes:e.vertices.map((function(e){return function(e,t){return{id:e.id,content:e.content,color:t}}(e,t)})),links:e.edges.map((function(e){return function(e,t){return{source:e.v1.id,target:e.v2.id,color:t}}(e,r)}))}}(t,d,h))}),[h,d,t]),Object(o.jsx)(b.Provider,{value:p,children:Object(o.jsxs)(E.Provider,{value:w,children:[Object(o.jsx)(O,{}),l&&Object(o.jsx)(B.a,{graphData:l,linkOpacity:1,backgroundColor:j,linkWidth:1})]})})}));l.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(S,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.9c848c91.chunk.js.map