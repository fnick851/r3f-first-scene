import{u as e,R as t,C as n,O as l,a as o}from"./vendor.4d71f61d.js";const r=e=>t.createElement("mesh",{position:e.position},e.geometry,e.material);function a(){const{material:o,geometry:a,position:m}=e({material:{options:{Phong:t.createElement("meshPhongMaterial",null),Normal:t.createElement("meshNormalMaterial",null),Basic:t.createElement("meshBasicMaterial",null)}},geometry:{options:{Box:t.createElement("boxGeometry",null),Sphere:t.createElement("sphereGeometry",null),Octahedron:t.createElement("octahedronGeometry",null)}},position:[0,0,0]});return t.createElement("div",{id:"canvas-container"},t.createElement(n,null,t.createElement("ambientLight",{intensity:.4,color:"#ededd0"}),t.createElement("directionalLight",{color:"#907fa4",position:[0,0,5]}),t.createElement(r,{position:m,material:o,geometry:a}),t.createElement(l,null)))}o.render(t.createElement(t.StrictMode,null,t.createElement(a,null)),document.getElementById("root"));