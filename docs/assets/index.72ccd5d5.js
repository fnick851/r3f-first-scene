import{u as e,r as t,C as n,O as r,a}from"./vendor.e0ac315f.js";const l=e=>t.createElement("mesh",{position:e.position},e.geometry,e.material);function o(){const{material:a,geometry:o,position:m}=e({material:{options:{Phong:t.createElement("meshPhongMaterial",null),Normal:t.createElement("meshNormalMaterial",null),Basic:t.createElement("meshBasicMaterial",null)}},geometry:{options:{Box:t.createElement("boxGeometry",null),Sphere:t.createElement("sphereGeometry",null),Octahedron:t.createElement("octahedronGeometry",null)}},position:[0,0,0]});return t.createElement("div",{id:"canvas-container"},t.createElement(n,null,t.createElement("ambientLight",{intensity:.4,color:"#ededd0"}),t.createElement("directionalLight",{color:"#907fa4",position:[0,0,5]}),t.createElement(l,{position:m,material:a,geometry:o}),t.createElement(r,null)))}a.render(t.createElement(t.StrictMode,null,t.createElement(o,null)),document.getElementById("root"));
