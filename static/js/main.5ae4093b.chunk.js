(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),c=a(5),o=a.n(c),s=(a(11),a(3)),d=a(0),b=a(6),i=a(1),u=Object.freeze({OPERAND1:"operand1",OPERAND2:"operand2",RES:"res"}),g=Object.freeze({ADD:"add",SUBTRACT:"sub",MULTIPLY:"mul",DIVIDE:"div"}),j=function(){return this.state=u.OPERAND1,this.operand1={num:0,decPart:"",dec:!1,neg:!1},this.operand2={num:0,decPart:"",dec:!1,neg:!1},this.res=0,this.operator="",this};var O=function(){var e=Object(r.useState)(new j),t=Object(b.a)(e,2),a=t[0],n=t[1],c=function(e){switch(e.target.id){case"clear":n(new j);break;case"zero":a.state===u.OPERAND1&&0!==p(a.operand1)&&(a.operand1.dec||n(Object(d.a)(Object(d.a)({},a),{},{operand1:Object(d.a)(Object(d.a)({},a.operand1),{},{num:a.operand1.num+"0"})}))),a.state===u.OPERAND2&&0!==p(a.operand2)&&(a.operand2.dec||n(Object(d.a)(Object(d.a)({},a),{},{operand2:Object(d.a)(Object(d.a)({},a.operand2),{},{num:a.operand2.num+"0"})})));break;case"one":case"two":case"three":case"four":case"five":case"six":case"seven":case"eight":case"nine":a.state===u.RES&&n((function(){return new j}));var t=e.target.innerText;n((function(e){var a=O(e);return e[a].dec?Object(d.a)(Object(d.a)({},e),{},Object(s.a)({},a,Object(d.a)(Object(d.a)({},e[a]),{},{decPart:e[a].decPart+t}))):Object(d.a)(Object(d.a)({},e),{},Object(s.a)({},a,Object(d.a)(Object(d.a)({},e[a]),{},{num:e[a].num+t})))}));break;case"divide":case"multiply":case"add":n((function(t){if(t.state===u.OPERAND1)return Object(d.a)(Object(d.a)({},t),{},{state:u.OPERAND2,operator:g[e.target.id.toUpperCase()]});if(t.state===u.OPERAND2&&0===Number(p(t.operand2)))return Object(d.a)(Object(d.a)({},t),{},{operand2:Object(d.a)(Object(d.a)({},t.operand2),{},{neg:!1}),operator:g[e.target.id.toUpperCase()]});if(t.state===u.OPERAND2){var a=new j;return Object(d.a)(Object(d.a)({},a),{},{operand1:Object(d.a)(Object(d.a)({},a.operand1),{},{num:o(t)}),operator:g[e.target.id.toUpperCase()],state:u.OPERAND2})}if(t.state===u.RES){var r=new j;return Object(d.a)(Object(d.a)({},r),{},{operand1:Object(d.a)(Object(d.a)({},r.operand1),{},{num:t.res}),operator:g[e.target.id.toUpperCase()],state:u.OPERAND2})}}));break;case"subtract":n((function(e){if(e.state===u.OPERAND1&&0===Number(p(e.operand1)))return Object(d.a)(Object(d.a)({},e),{},{operand1:Object(d.a)(Object(d.a)({},e.operand1),{},{neg:!0})});if(e.state===u.OPERAND1)return Object(d.a)(Object(d.a)({},e),{},{operator:g.SUBTRACT,state:u.OPERAND2});if(e.state===u.OPERAND2&&0===Number(p(e.operand2)))return Object(d.a)(Object(d.a)({},e),{},{operand2:Object(d.a)(Object(d.a)({},e.operand2),{},{neg:!0})});if(e.state===u.OPERAND2){var t=new j;return Object(d.a)(Object(d.a)({},t),{},{operand1:Object(d.a)(Object(d.a)({},t.operand1),{},{num:o(e)}),operator:g.SUBTRACT,state:u.OPERAND2})}if(e.state===u.RES){var a=new j;return Object(d.a)(Object(d.a)({},a),{},{operand1:Object(d.a)(Object(d.a)({},a.operand1),{},{num:e.res}),operator:g.SUBTRACT,state:u.OPERAND2})}}));break;case"equals":a.state===u.OPERAND2&&0!==p(a.operand2)&&n((function(e){var t=new j;return Object(d.a)(Object(d.a)({},t),{},{state:u.RES,res:o(e)})}));break;case"decimal":if(a.state===u.RES)break;n((function(e){var t=O(e);return Object(d.a)(Object(d.a)({},e),{},Object(s.a)({},t,Object(d.a)(Object(d.a)({},e[t]),{},{dec:!0})))}))}},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;switch(e.operator){case g.ADD:return Number(p(e.operand1))+Number(p(e.operand2));case g.SUBTRACT:return Number(p(e.operand1))-Number(p(e.operand2));case g.MULTIPLY:return Number(p(e.operand1))*Number(p(e.operand2));case g.DIVIDE:return Number(p(e.operand1))/Number(p(e.operand2))}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return e.state===u.OPERAND1?"operand1":"operand2"},p=function(e){return(e.neg?"-":"")+Number(e.num)+(e.dec?"."+Number(e.decPart):"")};return Object(i.jsx)("div",{className:"w-72 m-auto mt-40",children:Object(i.jsxs)("div",{className:"rounded font-mono grid grid-cols-4 grid-rows-6 bg-gray-900 gap-0.5 p-1",children:[Object(i.jsx)("div",{id:"display",className:"col-span-4 bg-gray-900 text-gray-100 pt-5 text-right",children:a.state===u.RES?a.res:a.state===u.OPERAND1?p(a.operand1):p(a.operand2)}),Object(i.jsx)("button",{onClick:c,id:"clear",className:"rounded-sm hover:bg-red-800 col-span-2 bg-red-600 text-gray-100 p-4 -mt-4 text-center",children:"AC"}),Object(i.jsx)("button",{onClick:c,id:"divide",className:"rounded-sm hover:bg-gray-700 bg-gray-500 text-gray-100 p-4 text-center -mt-4",children:"/"}),Object(i.jsx)("button",{onClick:c,id:"multiply",className:"rounded-sm hover:bg-gray-700 bg-gray-500 text-gray-100 p-4 text-center -mt-4",children:"X"}),Object(i.jsx)("button",{onClick:c,id:"seven",className:"rounded-sm hover:bg-gray-900 bg-gray-700 text-gray-100 p-4 text-center",children:"7"}),Object(i.jsx)("button",{onClick:c,id:"eight",className:"rounded-sm hover:bg-gray-900 bg-gray-700 text-gray-100 p-4 text-center",children:"8"}),Object(i.jsx)("button",{onClick:c,id:"nine",className:"rounded-sm hover:bg-gray-900 bg-gray-700 text-gray-100 p-4 text-center",children:"9"}),Object(i.jsx)("button",{onClick:c,id:"subtract",className:"rounded-sm hover:bg-gray-700 bg-gray-500 text-gray-100 p-4 text-center",children:"-"}),Object(i.jsx)("button",{onClick:c,id:"four",className:"rounded-sm hover:bg-gray-900 bg-gray-700 text-gray-100 p-4 text-center",children:"4"}),Object(i.jsx)("button",{onClick:c,id:"five",className:"rounded-sm hover:bg-gray-900 bg-gray-700 text-gray-100 p-4 text-center",children:"5"}),Object(i.jsx)("button",{onClick:c,id:"six",className:"rounded-sm hover:bg-gray-900 bg-gray-700 text-gray-100 p-4 text-center",children:"6"}),Object(i.jsx)("button",{onClick:c,id:"add",className:"rounded-sm hover:bg-gray-700  bg-gray-500 text-gray-100 p-4 text-center",children:"+"}),Object(i.jsx)("button",{onClick:c,id:"one",className:"rounded-sm hover:bg-gray-900 bg-gray-700 text-gray-100 p-4 text-center",children:"1"}),Object(i.jsx)("button",{onClick:c,id:"two",className:"rounded-sm hover:bg-gray-900 bg-gray-700 text-gray-100 p-4 text-center",children:"2"}),Object(i.jsx)("button",{onClick:c,id:"three",className:"rounded-sm hover:bg-gray-900 bg-gray-700 text-gray-100 p-4 text-center",children:"3"}),Object(i.jsx)("button",{onClick:c,id:"equals",className:"rounded-sm hover:bg-blue-900 row-span-2 bg-blue-800 text-gray-100 p-4 text-center align-middle",children:"="}),Object(i.jsx)("button",{onClick:c,id:"zero",className:"rounded-sm hover:bg-gray-900 col-span-2 bg-gray-700 text-gray-100 p-4 text-center",children:"0"}),Object(i.jsx)("button",{onClick:c,id:"decimal",className:"rounded-sm hover:bg-gray-900 bg-gray-700 text-gray-100 p-4 text-center",children:"."})]})})};o.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.5ae4093b.chunk.js.map