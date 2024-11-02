"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[83103],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>m});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),g=c(n),y=i,m=g["".concat(o,".").concat(y)]||g[y]||u[y]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=y;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[g]="string"==typeof e?e:i,s[1]=p;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},90343:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>p,toc:()=>o});var r=n(58168),i=(n(96540),n(15680));const a={description:"http",title:"Http Example"},s="The Http type Register",p={unversionedId:"http",id:"http",isDocsHomePage:!1,title:"Http Example",description:"http",source:"@site/shenyuClientRust/http.md",sourceDirName:".",slug:"/http",permalink:"/shenyuClientRust/http",version:"current",lastUpdatedBy:"WuLang",lastUpdatedAt:1730554127,formattedLastUpdatedAt:"11/2/2024",frontMatter:{description:"http",title:"Http Example"},sidebar:"community"},o=[],c={toc:o},l="wrapper";function g(e){let{components:t,...n}=e;return(0,i.yg)(l,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"the-http-type-register"},"The Http type Register"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"1.Fist make sure The ShenYuAdmin is Started, and ShenYuAdmin service active port is 9095.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-log"},"//Or you will see this error :\n \n2024-10-09T07:23:26.970200Z ERROR shenyu_client_rust::core: Can't get register token\n2024-10-09T07:23:29.015550Z ERROR shenyu_client_rust::core: [ERROR], register metadata to http://127.0.0.1:9095/shenyu-client/register-metadata failed, app_name: shenyu_client_app, path: /health, contextPath: /xxx\n2024-10-09T07:23:31.039558Z ERROR shenyu_client_rust::core: [ERROR], register metadata to http://127.0.0.1:9095/shenyu-client/register-metadata failed, app_name: shenyu_client_app, path: /users, contextPath: /xxx\n2024-10-09T07:23:33.089412Z ERROR shenyu_client_rust::core: [ERROR], register uri to http://127.0.0.1:9095/shenyu-client/register-uri failed, app_name: shenyu_client_app, host: 10.10.9.198, port: 3000\n2024-10-09T07:23:35.124249Z ERROR shenyu_client_rust::core: [ERROR], register discover config to http://127.0.0.1:9095/shenyu-client/register-discoveryConfig failed, discovery_type: zookeeper, host: 10.10.9.198, port: 3000\n \n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"2.Step 1 Get shenyu_admin_client. (Register service need this)")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yml"},'#  a yml-format config file\nshenyu:\n  register:\n    register_type: "http"\n    servers: "http://127.0.0.1:9095"\n    props:\n      username: "admin"\n      password: "123456"\n')),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-rust"},'fn register_test() {\n    //init config.\n    let config = ShenYuConfig::from_yaml_file("config.yml").unwrap();\n    // init shenyu client.\n    let client = ShenyuClient::new(config, app.app_name(), app.uri_infos(), 3000).unwrap();\n    /// other steps.\n}\n')),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'The adminToken like this :\n{\n    "code":200,\n    "message":"login dashboard user success",\n    "data":{\n        "id":"1",\n        "userName":"admin",\n        "role":1,\n        "enabled":true,\n        "dateCreated":"2018-06-23 15:12:22",\n        "dateUpdated":"2024-10-03 02:29:39",\n        "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwiZXhwIjoxNzI4NTQ3NjQ3fQ.93LAuDP_MrJZeQB5A6gX-3-Vyxy9egw41QhnNHlUWEE"\n    }\n}\n\nWhen you success get toekn, you will see this :\n2024-10-09T08:07:27.721483Z  INFO shenyu_client_rust::core: [SUCCESS], get register token success, register token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwiZXhwIjoxNzI4NTQ3NjQ3fQ.93LAuDP_MrJZeQB5A6gX-3-Vyxy9egw41QhnNHlUWEE"\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"3.Step 2 Register to ShenYu admin. (maybe add the admin sync data to gateway doc url).")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-rust"},'fn register_test() {\n    /// Step1.\n    // register to shenyu admin.\n    client.register().expect("TODO: panic message");\n}\n')),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-log"},'2024-10-03T02:29:39.392390Z  INFO shenyu_client_rust::core: [SUCCESS], register metadata success, register data: Object {\n"appName": String("shenyu_client_app"),\n"contextPath": String("/xxx"),\n"enabled": Bool(true),\n"host": String("10.1.0.187"),\n"methodName": String("get"),\n"parameterTypes": String(""),\n"path": String("/xxx/health"),\n"pathDesc": String(""),\n"pluginNames": Array [],\n"port": Number(4000),\n"registerMetaData": String(""),\n"rpcExt": String(""),\n"rpcType": String("http"),\n"ruleName": String("/xxx/health"),\n"serviceName": String("shenyu_client_app"),\n}\n2024-10-03T02:29:39.398917Z  INFO shenyu_client_rust::core: [SUCCESS], register metadata success, register data: Object {\n"appName": String("shenyu_client_app"),\n"contextPath": String("/xxx"),\n"enabled": Bool(true),\n"host": String("10.1.0.187"),\n"methodName": String("post"),\n"parameterTypes": String(""),\n"path": String("/xxx/create_user"),\n"pathDesc": String(""),\n"pluginNames": Array [],\n"port": Number(4000),\n"registerMetaData": String(""),\n"rpcExt": String(""),\n"rpcType": String("http"),\n"ruleName": String("/xxx/create_user"),\n"serviceName": String("shenyu_client_app"),\n}\n2024-10-03T02:29:39.404389Z  INFO shenyu_client_rust::core: [SUCCESS], register metadata success, register data: Object {\n"appName": String("shenyu_client_app"),\n"contextPath": String("/xxx"),\n"enabled": Bool(true),\n"host": String("10.1.0.187"),\n"methodName": String("get"),\n"parameterTypes": String(""),\n"path": String("/xxx/"),\n"pathDesc": String(""),\n"pluginNames": Array [],\n"port": Number(4000),\n"registerMetaData": String(""),\n"rpcExt": String(""),\n"rpcType": String("http"),\n"ruleName": String("/xxx/"),\n"serviceName": String("shenyu_client_app"),\n}\n2024-10-03T02:29:39.409866Z  INFO shenyu_client_rust::core: [SUCCESS], register uri success, register data: Object {\n"appName": String("shenyu_client_app"),\n"contextPath": String("/xxx"),\n"eventType": String("REGISTER"),\n"host": String("10.1.0.187"),\n"port": Number(4000),\n"protocol": String("http"),\n"rpcType": String("http"),\n}\n2024-10-03T02:29:39.433662Z  INFO shenyu_client_rust::core: [SUCCESS], register discover config success, register data: Object {\n"discoveryType": String("zookeeper"),\n"handler": String("{}"),\n"listenerNode": String("/shenyu/discovery/http_example"),\n"name": String("defaultzookeeper"),\n"pluginName": String(""),\n"props": Object {\n"baseSleepTimeMilliseconds": String("1000"),\n"connectionTimeoutMilliseconds": String("60000"),\n"maxRetries": String("4"),\n"maxSleepTimeMilliseconds": String("5000"),\n"sessionTimeoutMilliseconds": String("8"),\n},\n"selectorName": String("/xxx"),\n"serverList": String("127.0.0.1:2181"),\n}\n\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"3.Step 3 Offline register from ShenYu GateWay.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-log"},'2024-10-03T02:29:50.311159Z  INFO shenyu_client_rust::core: [SUCCESS], offline success, register data: Object {\n"appName": String("shenyu_client_app"),\n"contextPath": String("/xxx"),\n"eventType": String("REGISTER"),\n"host": String("10.1.0.187"),\n"port": Number(4000),\n"protocol": String("http"),\n}\n')))}g.isMDXComponent=!0}}]);