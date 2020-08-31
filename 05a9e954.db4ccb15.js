(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),l=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=a,j=p["".concat(r,".").concat(u)]||p[u]||d[u]||o;return n?i.a.createElement(j,c(c({ref:t},b),{},{components:n})):i.a.createElement(j,c({ref:t},b))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var b=2;b<o;b++)r[b]=n[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),i=n(6),o=(n(0),n(106)),r={id:"objectives",title:"Objectives"},c={unversionedId:"lock/objectives",id:"lock/objectives",isDocsHomePage:!1,title:"Objectives",description:"Create Objectives",source:"@site/docs/lock/objectives.md",slug:"/lock/objectives",permalink:"https://github.com/the-ladybugs/portal-api/lock/objectives",version:"current",sidebar:"lockSidebar",previous:{title:"Learners",permalink:"https://github.com/the-ladybugs/portal-api/lock/learners"},next:{title:"Event Reviews",permalink:"https://github.com/the-ladybugs/portal-api/lock/event_reviews"}},s=[{value:"Create Objectives",id:"create-objectives",children:[{value:"In case of option(ii) \u2013 specific pool",id:"in-case-of-optionii--specific-pool",children:[]}]},{value:"Link Learners to Objectives",id:"link-learners-to-objectives",children:[{value:"In case of option(i) \u2013 dynamic triggering",id:"in-case-of-optioni--dynamic-triggering",children:[]}]}],b={rightToc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"create-objectives"},"Create Objectives"),Object(o.b)("p",null,"An objective is the set of concepts a learner should start to review at once. It can happen to cover the concept of a theme."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),"Method : POST\u200b\nURL : HOST_URL/instances/{instance_id}/objectives\u200b\n")),Object(o.b)("p",null,"Here is json input example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{   \u200b\n"name": "Learning the Universe",    \u200b\n"objects": {"knowledge_nodes": [51]},\u200b\n}\n')),Object(o.b)("h3",{id:"in-case-of-optionii--specific-pool"},"In case of option(ii) \u2013 specific pool"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{   \u200b\n"name": "Learning the Universe",    \u200b\n"objects": {"knowledge_nodes": [51]},\u200b\n"tags": ["tag1"],\u200b\n}\n')),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Here is a more detailed documentation on how to setup Knowledge Node Contents - ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://domoscio-adaptive-engine-preprod.azurewebsites.net/api_doc#tag/Objective"}),"Link")))),Object(o.b)("h2",{id:"link-learners-to-objectives"},"Link Learners to Objectives"),Object(o.b)("p",null,"Once the objective is created, you can link it to the learner thanks to an objective_student."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),"Method : POST\u200b\nURL : HOST_URL/instances/{instance_id}/objective_students\n")),Object(o.b)("p",null,"Here is an example of json input:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\u200b\n"student_id": 1,\u200b\n"objective_id": 1,\u200b\n"memorize": true,\u200b\n"deadline": 2017-11-15,\u200b\n"adaptive": false\u200b\n}\n')),Object(o.b)("h3",{id:"in-case-of-optioni--dynamic-triggering"},"In case of option(i) \u2013 dynamic triggering"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\u200b\n"student_id": 1,\u200b\n"objective_id": 1,\u200b\n"memorize": true,\u200b\n"deadline": 2017-11-15,\u200b\n"adaptive": true\n}\n')),Object(o.b)("p",null,"Please note that in this case, the consolidation will start only after ObjectiveKnowledgeNodeStudent is validated."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Here is a more detailed documentation on how to setup Objective Students - ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://domoscio-adaptive-engine-preprod.azurewebsites.net/api_doc#tag/ObjectiveStudent"}),"Link")))))}l.isMDXComponent=!0}}]);