(function(t){function e(e){for(var r,c,s=e[0],i=e[1],u=e[2],p=0,m=[];p<s.length;p++)c=s[p],a[c]&&m.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(m.length)m.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={1:0},o=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=i;o.push([7,0]),n()})({"1PyD":function(t,e,n){},7:function(t,e,n){t.exports=n("Vtdi")},"8PYS":function(t,e,n){},DQMP:function(t,e,n){"use strict";var r=n("8PYS"),a=n.n(r);a.a},HsoH:function(t,e,n){},"OV+b":function(t,e,n){"use strict";var r=n("eCoa"),a=n.n(r);a.a},S02O:function(t,e,n){"use strict";var r=n("T8w3"),a=n.n(r);a.a},T8w3:function(t,e,n){},TD59:function(t,e,n){"use strict";var r=n("ntv6"),a=n.n(r);a.a},Vtdi:function(t,e,n){"use strict";n.r(e);n("a1Th"),n("VRzm");var r=n("Kw5r"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("navigation"),n("main",[n("router-view")],1)],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return this.$store.state.isUserSignedIn?n("nav",[t.contacts?n("router-link",{attrs:{to:"/contacts",tag:"button"}},[t._v("All contacts")]):t._e(),t.createContact?n("router-link",{attrs:{to:"/contacts/create",tag:"button"}},[t._v("New contact")]):t._e(),n("button",{on:{click:t.signout}},[t._v("Sign out")])],1):t._e()},s=[],i=(n("f3/d"),{data:function(){return{createContact:null,contacts:null}},methods:{signout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$router.push({name:"LoginRegister"})},determineVisibility:function(t){var e=this.$route.name!=="".concat(t);if(e)return e}},watch:{$route:function(){this.createContact=this.determineVisibility("createContact"),this.contacts=this.determineVisibility("contacts")}}}),u=i,l=(n("DQMP"),n("KHd+")),p=Object(l["a"])(u,c,s,!1,null,null,null),m=p.exports,d={name:"app",components:{navigation:m}},v=d,h=(n("TD59"),Object(l["a"])(v,a,o,!1,null,null,null)),f=h.exports,g=n("Mb3Q"),w=n("L2JU");r["a"].use(w["a"]);var b=new w["a"].Store({strict:!0,state:{token:null,user:null,isUserSignedIn:!1},mutations:{setToken:function(t,e){t.token=e,t.isUserSignedIn=!!e},setUser:function(t,e){t.user=e}},actions:{setToken:function(t,e){var n=t.commit;n("setToken",e)},setUser:function(t,e){var n=t.commit;n("setUser",e)}}}),x=n("jE9Z"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("Welcome!")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.login,expression:"login"}],attrs:{type:"text",name:"login",placeholder:"login",required:""},domProps:{value:t.login},on:{input:function(e){e.target.composing||(t.login=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",placeholder:"password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("h5",{domProps:{innerHTML:t._s(t.error)}}),n("button",{on:{click:t.signin}},[t._v("Sign in")]),n("button",{on:{click:t.register}},[t._v("Register")])])},y=[],P=(n("ls82"),n("MECJ")),k=n("vDqi"),S=n.n(k),$=function(){return S.a.create({baseURL:"http://localhost:8081/",headers:{Authorization:"Bearer ".concat(b.state.token)}})},N={register:function(t){return $().post("register",t)},signin:function(t){return $().post("signin",t)}},O={data:function(){return{login:"",password:"",error:null}},methods:{register:function(){var t=Object(P["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.register({login:this.login,password:this.password});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),this.error=t.t0.response.data.error;case 8:case"end":return t.stop()}},t,this,[[0,5]])}));return function(){return t.apply(this,arguments)}}(),signin:function(){var t=Object(P["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.signin({login:this.login,password:this.password});case 3:return e=t.sent,this.$store.dispatch("setToken",e.data.token),this.$store.dispatch("setUser",e.data.user),t.next=8,this.$store.state.isUserSignedIn;case 8:n=t.sent,n&&this.$router.push({name:"contacts"}),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),this.error=t.t0.response.data.error;case 15:case"end":return t.stop()}},t,this,[[0,12]])}));return function(){return t.apply(this,arguments)}}()}},E=O,j=(n("cIxe"),Object(l["a"])(E,_,y,!1,null,null,null)),R=j.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.user?n("div",{staticClass:"contacts"},[n("button",{on:{click:function(e){t.sortAlpabeticallyBy("First name")}}},[t._v("Sort by first name")]),n("button",{on:{click:function(e){t.sortAlpabeticallyBy("Surname")}}},[t._v("Sort by surname")]),n("ul",[t._v("Contacts of "+t._s(t._f("capitalize")(t.user))),t._l(t.sorted,function(e){return n("router-link",{key:e.id,staticClass:"contact-preview",attrs:{to:{name:"contact",params:{contactId:e.id}},tag:"li"}},[t._v(t._s(e["First name"])+"\n"+t._s(e.Surname)+" "),n("em",{staticClass:"note"},[t._v(t._s(e.Notes))])])})],2)]):t._e(),t.message?n("h4",[t._v(t._s(t.message))]):t._e()])},F=[],T=(n("dRSK"),n("Vd3H"),n("rGqo"),{index:function(){return $().get("contacts")},post:function(t){return $().post("contacts",t)},display:function(t){return $().get("contacts/".concat(t))},delete:function(t){return $().delete("contacts/".concat(t))},put:function(t){return $().put("contacts/".concat(t.id),t)}}),I={name:"contacts",data:function(){return{user:null,contacts:null,sorted:[],message:null}},methods:{sortAlpabeticallyBy:function(t){var e,n=this,r=[];this.sorted=[],this.contacts.forEach(function(e){return r.push([e["".concat(t)],e.id]),r.sort()}),r.forEach(function(t){e=n.contacts.find(function(e){return e.id===t[1]}),n.sorted.push(e)})}},mounted:function(){var t=Object(P["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.index();case 3:this.contacts=this.sorted=t.sent.data,this.contacts.length||(this.message="You haven't added any contacts. Go make some friends!"),this.user=this.$store.state.user.login,t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),this.message=t.t0.response.data.error,setTimeout(function(){e.$router.push({name:"LoginRegister"})},2e3);case 12:case"end":return t.stop()}},t,this,[[0,8]])}));return function(){return t.apply(this,arguments)}}()},U=I,M=(n("OV+b"),Object(l["a"])(U,C,F,!1,null,"28f7ca36",null)),L=M.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.contact["First name"],expression:"contact['First name']"}],attrs:{required:"",type:"text",name:"First name",placeholder:"First name"},domProps:{value:t.contact["First name"]},on:{input:function(e){e.target.composing||t.$set(t.contact,"First name",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.Surname,expression:"contact.Surname"}],attrs:{type:"text",name:"Surname",placeholder:"Surname"},domProps:{value:t.contact.Surname},on:{input:function(e){e.target.composing||t.$set(t.contact,"Surname",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.Phone,expression:"contact.Phone"}],attrs:{type:"text",name:"Phone",placeholder:"Phone"},domProps:{value:t.contact.Phone},on:{input:function(e){e.target.composing||t.$set(t.contact,"Phone",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.Email,expression:"contact.Email"}],attrs:{type:"email",name:"Email",placeholder:"Email"},domProps:{value:t.contact.Email},on:{input:function(e){e.target.composing||t.$set(t.contact,"Email",e.target.value)}}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.contact.Notes,expression:"contact.Notes"}],attrs:{type:"text",name:"Notes",placeholder:"Notes"},domProps:{value:t.contact.Notes},on:{input:function(e){e.target.composing||t.$set(t.contact,"Notes",e.target.value)}}}),n("button",{on:{click:t.create}},[t._v("Create")])])},q=[],D={data:function(){return{contact:{"First name":null,Surname:null,Phone:null,Email:null,Notes:null,UserId:null}}},methods:{create:function(){var t=Object(P["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.contact.UserId=this.$store.state.user.id,t.next=4,T.post(this.contact);case 4:this.$router.push({name:"contacts"}),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(){return t.apply(this,arguments)}}()}},H=D,z=(n("b0TM"),Object(l["a"])(H,V,q,!1,null,null,null)),A=z.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",[t._v(t._s(t.contact["First name"]))]),n("div",[t._v(t._s(t.contact.Surname))]),n("div",[t._v(t._s(t.contact.Phone))]),n("div",[t._v(t._s(t.contact.Email))]),n("div",[t._v(t._s(t.contact.Notes))]),n("router-link",{attrs:{to:{name:"editContact",params:function(){return{contactId:t.contact.id}}},tag:"button"}},[t._v("Edit")]),n("button",{on:{click:t.remove}},[t._v("Delete")])],1)},J=[],K={data:function(){return{contact:{}}},mounted:function(){var t=Object(P["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$store.state.route.params.contactId,t.next=3,T.display(e);case 3:this.contact=t.sent.data;case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),methods:{remove:function(){var t=Object(P["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.delete(this.contact.id);case 3:this.$router.push({name:"contacts"}),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.log(t.t0);case 9:case"end":return t.stop()}},t,this,[[0,6]])}));return function(){return t.apply(this,arguments)}}()}},Q=K,Y=(n("ez6q"),Object(l["a"])(Q,B,J,!1,null,null,null)),G=Y.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.contact["First name"],expression:"contact['First name']"}],attrs:{required:"",type:"text",name:"First name",placeholder:"First name"},domProps:{value:t.contact["First name"]},on:{input:function(e){e.target.composing||t.$set(t.contact,"First name",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.Surname,expression:"contact.Surname"}],attrs:{type:"text",name:"Surname",placeholder:"Surname"},domProps:{value:t.contact.Surname},on:{input:function(e){e.target.composing||t.$set(t.contact,"Surname",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.Phone,expression:"contact.Phone"}],attrs:{type:"text",name:"Phone",placeholder:"Phone"},domProps:{value:t.contact.Phone},on:{input:function(e){e.target.composing||t.$set(t.contact,"Phone",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.Email,expression:"contact.Email"}],attrs:{type:"email",name:"Email",placeholder:"Email"},domProps:{value:t.contact.Email},on:{input:function(e){e.target.composing||t.$set(t.contact,"Email",e.target.value)}}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.contact.Notes,expression:"contact.Notes"}],attrs:{type:"text",name:"Notes",placeholder:"Notes"},domProps:{value:t.contact.Notes},on:{input:function(e){e.target.composing||t.$set(t.contact,"Notes",e.target.value)}}}),n("button",{on:{click:t.save}},[t._v("Save")])])},Z=[],X={data:function(){return{contact:{"First name":null,Surname:null,Phone:null,Email:null,Notes:null}}},methods:{save:function(){var t=Object(P["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.put(this.contact);case 3:this.$router.push({name:"contact",params:{contactId:this.contact.id}}),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.log(t.t0);case 9:case"end":return t.stop()}},t,this,[[0,6]])}));return function(){return t.apply(this,arguments)}}()},mounted:function(){var t=Object(P["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$store.state.route.params.contactId,t.next=3,T.display(e);case 3:this.contact=t.sent.data;case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},tt=X,et=(n("S02O"),Object(l["a"])(tt,W,Z,!1,null,null,null)),nt=et.exports;r["a"].use(x["a"]);var rt=new x["a"]({routes:[{path:"",name:"LoginRegister",component:R},{path:"/contacts",name:"contacts",component:L},{path:"/contacts/create",name:"createContact",component:A},{path:"/contacts/:contactId",name:"contact",component:G},{path:"/contacts/:contactId/edit",name:"editContact",component:nt},{path:"*",redirect:{name:"LoginRegister"}}]});r["a"].config.productionTip=!1,Object(g["sync"])(b,rt),r["a"].filter("capitalize",function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}),new r["a"]({router:rt,store:b,render:function(t){return t(f)}}).$mount("#app")},b0TM:function(t,e,n){"use strict";var r=n("HsoH"),a=n.n(r);a.a},cIxe:function(t,e,n){"use strict";var r=n("ctlL"),a=n.n(r);a.a},ctlL:function(t,e,n){},eCoa:function(t,e,n){},ez6q:function(t,e,n){"use strict";var r=n("1PyD"),a=n.n(r);a.a},ntv6:function(t,e,n){}});
//# sourceMappingURL=app.48bbef0c.js.map