"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[372],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),h=s,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||r;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,a=new Array(r);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3688:function(e,t,n){n.d(t,{S:function(){return T}});var o=n(7294);function s(e){return e&&e.origin?e.origin:"https://stackblitz.com"}function r(){return Math.random().toString(36).substring(7)}function a(e){var t="";return e?(e.forceEmbedLayout&&(t+="embed=1"),e.clickToLoad&&(t+=(t.length?"&":"")+"ctl=1"),e.openFile&&(t+=(t.length?"&":"")+"file="+e.openFile),!e.view||"preview"!==e.view&&"editor"!==e.view||(t+=(t.length?"&":"")+"view="+e.view),e.theme&&(t+=(t.length?"&":"")+"theme="+e.theme),e.hideExplorer&&(t+=(t.length?"&":"")+"hideExplorer=1"),e.hideNavigation&&(t+=(t.length?"&":"")+"hideNavigation=1;"),e.hideDevTools&&(t+=(t.length?"&":"")+"hidedevtools=1"),e.initialPath&&(t+=(t.length?"&":"")+"initialpath="+encodeURIComponent(e.initialPath)),"number"==typeof e.devToolsHeight&&e.devToolsHeight>0&&e.devToolsHeight<100&&(t+=(t.length?"&":"")+"devtoolsheight="+e.devToolsHeight),t.length?"?"+t:t):t}function i(e,t,n){if(null===e.parentNode)throw new Error("Invalid Element");t.id=e.id,u(t,n),e.parentNode.replaceChild(t,e)}function c(e){if("string"==typeof e){var t=document.getElementById(e);if(null!==t)return t}else if(e instanceof HTMLElement)return e;throw new Error("Invalid Element")}function l(e){return e&&!1===e.newWindow?"_self":"_blank"}function u(e,t){t&&(t.hasOwnProperty("height")&&(e.height=""+t.height),t.hasOwnProperty("width")&&(e.width=""+t.width)),e.height||(e.height="300"),e.width||e.setAttribute("style","width:100%;")}var d=function(e){var t=this;this.pending={},this.port=e,this.port.onmessage=function(e){if(e.data.payload.__reqid){var n=e.data.payload.__reqid,o=e.data.payload.__success;if(t.pending[n]){if(delete e.data.payload.__reqid,delete e.data.payload.__success,o){var s=0===Object.keys(e.data.payload).length&&e.data.payload.constructor===Object?null:e.data.payload;t.pending[n].resolve(s)}else{var r=e.data.payload.error?e.data.type+": "+e.data.payload.error:e.data.type;t.pending[n].reject(r)}delete t.pending[n]}}}};d.prototype.request=function(e){var t=this,n=r();return new Promise((function(o,s){t.pending[n]={resolve:o,reject:s},e.payload.__reqid=n,t.port.postMessage(e)}))};var p=function(e,t){var n=this;this.rdc=new d(e),this.preview={},Object.defineProperty(this.preview,"origin",{value:t.previewOrigin,writable:!1}),this.editor={openFile:function(e){return n.rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}})}}};p.prototype.applyFsDiff=function(e){return this.rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})},p.prototype.getFsSnapshot=function(){return this.rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},p.prototype.getDependencies=function(){return this.rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})};var h=[],f=function(e){var t=this;this.id=r(),this.element=e,this.pending=new Promise((function(e,n){var o=function(n){n.data.action&&"SDK_INIT_SUCCESS"===n.data.action&&n.data.id===t.id&&(t.vm=new p(n.ports[0],n.data.payload),e(t.vm),r())},s=function(){t.element.contentWindow&&t.element.contentWindow.postMessage({action:"SDK_INIT",id:t.id},"*")};function r(){window.clearInterval(i),window.removeEventListener("message",o)}window.addEventListener("message",o),s();var a=0,i=window.setInterval((function(){if(t.vm)r();else{if(a>=20)return r(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),void h.forEach((function(e,n){e.id===t.id&&h.splice(n,1)}));a++,s()}}),500)})),h.push(this)},m=["typescript","create-react-app","angular-cli","javascript","polymer","vue"];function g(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function v(e){-1===m.indexOf(e.template)&&console.warn("Unsupported project template, must be one of: "+m.join(", "));var t=document.createElement("form");return t.method="POST",t.setAttribute("style","display:none;"),t.appendChild(g("project[title]",e.title)),t.appendChild(g("project[description]",e.description)),t.appendChild(g("project[template]",e.template)),e.tags&&e.tags.forEach((function(e){t.appendChild(g("project[tags][]",e))})),e.dependencies&&t.appendChild(g("project[dependencies]",JSON.stringify(e.dependencies))),e.settings&&t.appendChild(g("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(n){t.appendChild(g("project[files]["+n+"]",e.files[n]))})),t}function y(e,t){var n=v(e);return n.action=s(t)+"/run"+a(t),n.id="sb","<html><head><title></title></head><body>"+n.outerHTML+"<script>document.getElementById('sb').submit();<\/script></body></html>"}function q(e,t){var n=v(e);n.action=s(t)+"/run"+a(t),n.target=l(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}var k={connect:function(e){if(!e||!e.contentWindow)return Promise.reject("Provided element is not an iframe.");var t=function(e){var t=e instanceof Element?"element":"id";return h.find((function(n){return n[t]===e}))||null}(e);return t?t.pending:new f(e).pending},openGithubProject:function(e,t){window.open(s(t)+"/github/"+e+a(t),l(t))},openProject:function(e,t){q(e,t)},openProjectId:function(e,t){window.open(s(t)+"/edit/"+e+a(t),l(t))},embedGithubProject:function(e,t,n){var o=c(e),r=document.createElement("iframe");return r.src=s(n)+"/github/"+t+a(n),i(o,r,n),k.connect(r)},embedProject:function(e,t,n){var o=c(e),s=y(t,n),r=document.createElement("iframe");return i(o,r,n),r.contentDocument&&r.contentDocument.write(s),k.connect(r)},embedProjectId:function(e,t,n){var o=c(e),r=document.createElement("iframe");return r.src=s(n)+"/edit/"+t+a(n),i(o,r,n),k.connect(r)}},C=k,w=n(5350),b={core:{"@ngneat/elf":"latest"},entities:{"@ngneat/elf-entities":"latest"},requests:{"@ngneat/elf-requests":"latest"},pagination:{"@ngneat/elf-pagination":"latest"},devtools:{"@ngneat/elf-devtools":"latest"},persist:{"@ngneat/elf-persist-state":"latest"},history:{"@ngneat/elf-state-history":"latest"},rxjs:{rxjs:"latest"},immer:{immer:"latest"}};function T(e){var t=e.src,n=e.packages,s=void 0===n?[]:n,r=(0,o.useRef)(),a=["core","rxjs"].concat(s),i=(0,w.Z)().isDarkTheme;return(0,o.useEffect)((function(){var e=a.reduce((function(e,t){return Object.assign(e,b[t]),e}),{});C.embedProject(r.current,{description:"this is descrption",title:"Elf Core",files:{"index.html":"","index.ts":t},template:"typescript",dependencies:e,settings:{compile:{clearConsole:!0}}},{hideDevTools:!1,devToolsHeight:99,theme:i?"dark":"light",height:"500px"})}),[]),o.createElement("section",{style:{height:"500px"}},o.createElement("div",{ref:r}))}},2924:function(e,t,n){var o=n(7294).createContext(void 0);t.Z=o},5350:function(e,t,n){var o=n(7294),s=n(2924);t.Z=function(){var e=(0,o.useContext)(s.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},7618:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var o=n(3117),s=n(102),r=(n(7294),n(3905)),a=n(3688),i=["components"],c={},l="Cache",u={unversionedId:"features/requests/requests-cache",id:"features/requests/requests-cache",isDocsHomePage:!1,title:"Cache",description:"Using this feature, you can manage the cache status of API calls in your store. First, you need to install the package",source:"@site/docs/features/requests/requests-cache.mdx",sourceDirName:"features/requests",slug:"/features/requests/requests-cache",permalink:"/elf/docs/features/requests/requests-cache",editUrl:"https://github.com/ngneat/elf/docusaurus/edit/main/website/docs/features/requests/requests-cache.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Status",permalink:"/elf/docs/features/requests/requests-status"},next:{title:"Data Source",permalink:"/elf/docs/features/requests/requests-data-source"}},d=[{value:"Queries",id:"queries",children:[{value:"<code>selectRequestCache</code>",id:"selectrequestcache",children:[],level:3},{value:"<code>getRequestCache</code>",id:"getrequestcache",children:[],level:3},{value:"<code>selectIsRequestCached</code>",id:"selectisrequestcached",children:[],level:3}],level:2},{value:"Mutations",id:"mutations",children:[{value:"<code>updateRequestCache</code>",id:"updaterequestcache",children:[],level:3},{value:"<code>clearRequestsCache</code>",id:"clearrequestscache",children:[],level:3}],level:2}],p={toc:d};function h(e){var t=e.components,n=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cache"},"Cache"),(0,r.kt)("p",null,"Using this feature, you can manage the cache status of API calls in your store. First, you need to install the package\nby using the CLI command ",(0,r.kt)("inlineCode",{parentName:"p"},"elf-cli install")," and selecting the requests package, or via npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @ngneat/elf-requests\n")),(0,r.kt)("p",null,"To use this feature, provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"withRequestsCache")," props factory function in the ",(0,r.kt)("inlineCode",{parentName:"p"},"createState")," call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todos.repository.ts"',title:'"todos.repository.ts"'},"import { createState, Store } from '@ngneat/elf';\nimport { withEntities } from '@ngneat/elf-entities';\nimport { withRequestsCache } from '@ngneat/elf-requests';\n\ninterface Todo {\n  id: number;\n  label: string;\n}\n\nconst { state, config } = createState(\n  withEntities<Todo>(),\n  // You can pass the keys type\n  // highlight-next-line\n  withRequestsCache<`todos`, `todo-${string}`>()\n);\n\nexport const todosStore = new Store({ name: 'todos', state, config });\n")),(0,r.kt)("p",null,"Now we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"createRequestsCacheOperator")," function that takes a store and returns a custom operator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { withRequestsCache, createRequestsCacheOperator } from '@ngneat/elf-requests';\n\nexport const todosStore = new Store({ name: 'todos', state, config });\n\nexport const skipWhileTodosCached = createRequestsCacheOperator(todosStore);\n")),(0,r.kt)("p",null,"We can use the resulting operator and pass a unique key to identify the request. This enables skipping the API call if the passed key is located in the store cache."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todos.service.ts"',title:'"todos.service.ts"'},"import { setTodos, skipWhileTodosCached } from './todos.repository';\n\nexport function fetchTodos() {\n  return http.get(todosUrl).pipe(\n    tap(setTodos(todos)),\n    // highlight-next-line\n    skipWhileTodosCached('todos')\n  );\n}\n")),(0,r.kt)("p",null,"Use it in tandem with ",(0,r.kt)("inlineCode",{parentName:"p"},"updateRequestsCache"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todos.repository.ts"',title:'"todos.repository.ts"'},"import { updateRequestCache } from '@ngneat/elf-requests';\nimport { setEntities } from '@ngneat/elf-entities';\n\nexport function setTodos(todos: Todo[]) {\n  store.update(\n    // highlight-next-line\n    updateRequestCache('todos'),\n    setEntities(todos)\n  );\n}\n")),(0,r.kt)("p",null,"Passing a value as the third parameter ensures the ",(0,r.kt)("inlineCode",{parentName:"p"},"store")," will only skip the API call if the value matches the\none passed. Values can be 'none', 'partial' or 'full':"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todos.repository.ts"',title:'"todos.repository.ts"'},"import { updateRequestCache } from '@ngneat/elf-requests';\n\nexport function setTodos(todos: Todo[]) {\n  store.update(\n    // highlight-next-line\n    updateRequestCache('todos', { value: 'partial' }),\n    setEntities(todos)\n  );\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todos.service.ts"',title:'"todos.service.ts"'},"import { setTodos, skipWhileTodosCached } from './todos.repository';\n\nexport function fetchTodos() {\n  return http.get(todosUrl).pipe(\n    tap((todos) => setTodos(todos)),\n    // highlight-next-line\n    skipWhileTodosCached('todos', { value: 'partial' })\n  );\n}\n")),(0,r.kt)("p",null,"In addition to value, you can pass in the same object a ",(0,r.kt)("inlineCode",{parentName:"p"},"returnSource")," which will be returned by the operator if the\nrequest is cached. The default return value is ",(0,r.kt)("inlineCode",{parentName:"p"},"EMPTY")," observable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todos.service.ts"',title:'"todos.service.ts"'},"import { skipWhileTodosCached, setTodos } from './todos.repository';\n\nexport function fetchTodos() {\n  return http.get(todosUrl).pipe(\n    tap((todos) => setTodos(todos)),\n    // highlight-next-line\n    skipWhileTodosCached('todos', { returnSource: of([]) })\n  );\n}\n")),(0,r.kt)(a.S,{src:"import { createState, Store } from '@ngneat/elf';\nimport { withEntities, setEntities } from '@ngneat/elf-entities';\nimport {\n  withRequestsCache,\n  updateRequestCache,\n  selectRequestCache,\n  createRequestsCacheOperator,\n} from '@ngneat/elf-requests';\nimport { fromFetch } from 'rxjs/fetch';\nimport { tap } from 'rxjs/operators';\n\ninterface Todo {\n  id: number;\n  label: string;\n}\n\nconst { state, config } = createState(\n  withEntities<Todo>(),\n  withRequestsCache<'todos'>()\n);\n\nconst todosStore = new Store({ name: 'todos', state, config });\nconst skipWhileTodosCached = createRequestsCacheOperator(todosStore);\n\nexport function setTodos(todos: Todo[]) {\n  todosStore.update(updateRequestCache('todos'), setEntities(todos));\n}\n\ntodosStore.pipe(selectRequestCache('todos')).subscribe((status) => {\n  console.log(status);\n});\n\nfunction fetchTodos() {\n  return fromFetch<Todo[]>('https://jsonplaceholder.typicode.com/todos', {\n    selector: (response) => response.json(),\n  }).pipe(tap(setTodos), skipWhileTodosCached('todos'));\n}\n\nfetchTodos().subscribe(() => console.log('fetched'));\n\n// Use `setTimeout` to simulate a later call\nsetTimeout(() => {\n  fetchTodos().subscribe(() => console.log('You should not see me'));\n}, 1000);\n",packages:["entities","requests"],mdxType:"LiveDemo"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"You can monitor and change the request cache status for your APIs using the following queries and mutations:"),(0,r.kt)("h2",{id:"queries"},"Queries"),(0,r.kt)("h3",{id:"selectrequestcache"},(0,r.kt)("inlineCode",{parentName:"h3"},"selectRequestCache")),(0,r.kt)("p",null,"Select the cache status of the provided request key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectRequestCache } from '@ngneat/elf-requests';\n\ntodosCacheStatus$ = store.pipe(selectRequestCache('todos'));\n")),(0,r.kt)("h3",{id:"getrequestcache"},(0,r.kt)("inlineCode",{parentName:"h3"},"getRequestCache")),(0,r.kt)("p",null,"Get the cache status of the provided request key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { getRequestCache } from '@ngneat/elf-requests';\n\ntodosCacheStatus = store.query(getRequestCache('todos'));\n")),(0,r.kt)("h3",{id:"selectisrequestcached"},(0,r.kt)("inlineCode",{parentName:"h3"},"selectIsRequestCached")),(0,r.kt)("p",null,"Select whether the cache status of the provided request key isn't ",(0,r.kt)("inlineCode",{parentName:"p"},"none"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectIsRequestCached } from '@ngneat/elf-requests';\n\nconst isCached$ = store.pipe(selectIsRequestCached('todos'));\nconst isPartialCached$ = store.pipe(\n  selectIsRequestCached('todos', { value: 'partial' })\n);\n")),(0,r.kt)("p",null,"Get whether the cache status of the provided request key isn't ",(0,r.kt)("inlineCode",{parentName:"p"},"none"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { isRequestCached } from '@ngneat/elf-requests';\n\nconst isCached = store.query(isRequestCached('todos'));\nconst isPartialCached = store.query(\n  isRequestCached('todos', { value: 'partial' })\n);\n")),(0,r.kt)("h2",{id:"mutations"},"Mutations"),(0,r.kt)("h3",{id:"updaterequestcache"},(0,r.kt)("inlineCode",{parentName:"h3"},"updateRequestCache")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { updateRequestCache } from '@ngneat/elf-requests';\n\nstore.update(updateRequestCache('todos'));\nstore.update(updateRequestCache('todos', { value: 'partial' }));\nstore.update(updateRequestCache('todos', { value: 'none' }));\nstore.update(updateRequestCache('todos', { ttl: 1000 }));\n")),(0,r.kt)("p",null,"If you pass ",(0,r.kt)("inlineCode",{parentName:"p"},"ttl")," (time to live) when updating a cache record, that represents the time (in milliseconds) that ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," will\nhave the value that was set (afterward, it reverts to 'none')."),(0,r.kt)("h3",{id:"clearrequestscache"},(0,r.kt)("inlineCode",{parentName:"h3"},"clearRequestsCache")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { clearRequestsCache } from '@ngneat/elf-requests';\n\nstore.update(clearRequestsCache());\n")))}h.isMDXComponent=!0}}]);