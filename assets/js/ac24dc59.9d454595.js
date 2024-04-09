"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[61844],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var i=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),l=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(u.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(n),m=a,d=h["".concat(u,".").concat(m)]||h[m]||p[m]||o;return n?i.createElement(d,r(r({ref:t},c),{},{components:n})):i.createElement(d,r({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[h]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79572:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var i=n(58168),a=(n(96540),n(15680));const o={title:"[Co-authoring the future with ShenYu]",author:"kerwin612",description:"Co-authoring the future with ShenYu",categories:"Apache ShenYu Committers",tags:["Apache ShenYu"],date:new Date("2024-04-08T00:00:00.000Z")},r=void 0,s={permalink:"/news/Apache-ShenYu-Committer-2024-04-08",source:"@site/news/Apache-ShenYu-Committer-2024-04-08.md",title:"[Co-authoring the future with ShenYu]",description:"Co-authoring the future with ShenYu",date:"2024-04-08T00:00:00.000Z",formattedDate:"April 8, 2024",tags:[{label:"Apache ShenYu",permalink:"/news/tags/apache-shen-yu"}],readingTime:3.505,truncated:!1,nextItem:{title:"[Apache ShenYu WASM 1.0.0 Version Release]",permalink:"/news/Apache-ShenYu-WASM-release-version-1.0.0"}},u=[{value:"Self Introduction:",id:"self-introduction",children:[]},{value:"Getting to know Apache ShenYu",id:"getting-to-know-apache-shenyu",children:[]},{value:"My way to Open source",id:"my-way-to-open-source",children:[]}],l={toc:u},c="wrapper";function h(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,i.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"self-introduction"},"Self Introduction:"),(0,a.yg)("p",null,"Hello everyone, I'm Le Zhang, with the github-id: ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/kerwin612"},"kerwin612"),". I am extremely grateful to the Apache ShenYu community for recognizing my contributions and giving me the opportunity to become a Committer for this outstanding open-source project. Today, I would like to share my experience participating in the Apache ShenYu project, the growth I have achieved, and some suggestions."),(0,a.yg)("h3",{id:"getting-to-know-apache-shenyu"},"Getting to know Apache ShenYu"),(0,a.yg)("p",null,"My journey with Apache ShenYu began during my exploration of gateway technology options for my company. Upon discovering the ShenYu project, I was immediately intrigued by its high performance, multi-protocol support, easy scalability, and the wealth of ready-to-use plugins it offered. As a result, I decided to delve deeper into it and successfully ran the dev version of ShenYu in my local environment."),(0,a.yg)("h3",{id:"my-way-to-open-source"},"My way to Open source"),(0,a.yg)("p",null,"As a full-stack engineer, I have a certain understanding of both front-end and back-end technologies, which enabled me to comprehensively understand and experience ShenYu. During my trial period, I identified numerous areas for optimization and decided to take action. I created a task list, tackled each issue one by one, and submitted my improvements to the community."),(0,a.yg)("p",null,"On the front-end side, my optimizations primarily included:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Thoroughly reviewing the entire website's styling and fixing multiple style anomalies. Although these anomalies seemed minor, they directly impacted users' visual experience. By addressing these issues, I was able to enhance the cleanliness and aesthetics of ShenYu's front-end interface, thereby improving users' overall experience.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Implementing multiple experience enhancements. These enhancements ranged from adjusting the position of a button to improving the interaction logic of an interface. By making these optimizations, I made ShenYu's front-end interface more intuitive and significantly enhanced users' convenience.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Actively addressing over twenty front-end-related issues. These issues included both problems encountered by users during their usage and suggestions for improvement proposed by community members. I carefully analyzed the causes of each issue and successfully resolved them, contributing to the stability of ShenYu's front-end."))),(0,a.yg)("p",null,"On the back-end side, my contributions mainly focused on:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Handling over ten back-end-related issues. These issues encompassed bug fixes and feature enhancements. Through referencing documentation, debugging code, and ultimately seeking feedback from project managers, I resolved each issue.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Implementing a new ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/pull/4983"},(0,a.yg)("inlineCode",{parentName:"a"},"isBlank"))," conditional judgment function. This function facilitates the determination of whether a request contains a specific parameter, providing convenience for back-end logical processing.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Developing a new plugin, ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu/pull/5258"},(0,a.yg)("inlineCode",{parentName:"a"},"basic-auth")),". This plugin enables basic authentication and authorization functionality. Through collaboration with other community members, I successfully completed the plugin's development and testing, integrating it into ShenYu."))),(0,a.yg)("h1",{id:"my-experience-in-apahce-shenyu-community"},"My experience in Apahce ShenYu Community"),(0,a.yg)("p",null,"As I submitted more and more pull requests, I gradually delved deeper into the core of the Apache ShenYu community. Here, I felt the enthusiasm and openness of the community members. They were always willing to share knowledge and experience, helping me better understand and use ShenYu. After a period of hard work and accumulation, I received an invitation from the ShenYu community to officially become a Committer of this outstanding team."),(0,a.yg)("p",null,"Becoming an Apache Committer is not only an honor for me but also a responsibility and commitment. It represents the community's trust and recognition of me, and it also strengthened my determination to contribute to the community. I am well aware that becoming a Committer is merely a new starting point. In the days ahead, I will continue to participate in ShenYu's optimization and development work, constantly enhancing my skills and capabilities. I will keep up with community updates and demands, actively participate in community activities and discussions, and contribute even more to ShenYu's growth."),(0,a.yg)("p",null,"Moreover, I plan to further delve into the technical details and architectural principles of Apache ShenYu, enabling me to better provide technical support and solutions to the community. I believe that through continuous learning and practice, I can become a more accomplished Committer and make even greater contributions to Apache ShenYu's development."),(0,a.yg)("p",null,"Finally, I want to express my gratitude to the Apache ShenYu community for giving me this opportunity and trust, as well as to all community members for their support and assistance. I am confident that with our collective efforts, Apache ShenYu will continue to excel!"),(0,a.yg)("p",null,"Thanks all!"))}h.isMDXComponent=!0}}]);