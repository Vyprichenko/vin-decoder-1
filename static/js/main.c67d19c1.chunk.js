(this["webpackJsonpvin-decoder"]=this["webpackJsonpvin-decoder"]||[]).push([[0],{20:function(e,t,n){e.exports={title:"home_title__1Qtpw",searchBar:"home_searchBar__3zqNe",currentVin:"home_currentVin__-qB3_",searchNotFind:"home_searchNotFind__Q8mSb",serverError:"home_serverError__2Em27"}},25:function(e,t,n){e.exports={input:"input_input__LBr-r",invalid:"input_invalid__137A2",errorMessage:"input_errorMessage__2I-2P"}},26:function(e,t,n){e.exports={form:"search-bar_form__223Nv",rootInput:"search-bar_rootInput__uXVAv",input:"search-bar_input__3iuLp"}},30:function(e,t,n){e.exports={layout:"layout_layout__3j9jk",main:"layout_main__2oCrp"}},31:function(e,t,n){e.exports={Loader:"loader_Loader__36l00","lds-ripple":"loader_lds-ripple__2n71Z",center:"loader_center__3R44Z"}},47:function(e,t,n){e.exports={primary:"button_primary__2P7N9"}},49:function(e,t,n){e.exports=n(79)},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),l=n.n(c),i=n(24),s=n(8),o=n(45),u=n(14),m=n(6),d={currentVin:null,cache:[],loading:!1,serverError:null,searchNotFind:null};var h=Object(s.c)({vinsSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SEARCH_VIN_START":return Object(m.a)({},e,{loading:!0});case"NOT_FIND_INFORMATION":return Object(m.a)({},e,{currentVin:null,loading:!1,searchNotFind:'Sorry, we could not find information for this "'.concat(t.code,'" code.'),serverError:null});case"WRITE_TO_CACHE":return Object(m.a)({},e,{cache:[t.vin].concat(Object(u.a)(Object(u.a)(e.cache).slice(0,4)))});case"SERVER_ERROR":return Object(m.a)({},e,{loading:!1,serverError:t.payload});case"UPDATE_VIN":return Object(m.a)({},e,{currentVin:t.currentVin,loading:!1,searchNotFind:null,serverError:null});case"SET_VIN":return Object(m.a)({},e,{searchNotFind:null,currentVin:t.currentVin,serverError:null});default:return e}}}),v="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):s.d,p=Object(s.e)(h,v(Object(s.a)(o.a))),E=n(12),f=n(11),b=n(29),_=n.n(b),g=n(46),N=n.n(g).a.create({baseURL:"https://vpic.nhtsa.dot.gov/api/"}),O={getVehicleVariableList:function(){return N.get("vehicles/getvehiclevariablelist?format=json").then((function(e){return S(e,y)})).catch((function(e){return e}))},getDecodeVin:function(e){return N.get("vehicles/decodevin/".concat(e,"?format=json")).then((function(e){return S(e,V)})).catch((function(e){return e}))},getVariableVin:function(e){return O.getVehicleVariableList().then((function(t){return t.results.find((function(t){return t.ID===+e}))})).catch((function(e){return e}))}},V=function(e){return""!==e.Value&&null!==e.Value},y=function(e){return""!==e.Value&&""!==e.Description&&null!==e.Value&&null!==e.Description},S=function(e,t){return{status:e.status,message:e.data.Message,results:j(e.data.Results,t)}},j=function(e,t){return Object(u.a)(e).filter(t)},C=O;function I(e){return function(t,n){var a=n().vinsSearch,r=function(e,t){return t.cache[0]&&t.cache.find((function(t){return e===t.name}))}(e,a);if(r)return t(D(r)),void t(x(r));t(function(e){return function(t){var n,a;return _.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t({type:"FETCH_SEARCH_VIN_START"}),r.prev=1,r.next=4,_.a.awrap(C.getDecodeVin(e));case 4:if(!(n=r.sent)||200!==n.status||!n.results){r.next=13;break}if(!n.results.find((function(e){return"Error Code"===e.Variable&&"0"!==e.Value.charAt(0)}))){r.next=8;break}return r.abrupt("return",t(k(e)));case 8:a=Object(m.a)({name:e},n),t(D(a)),t(T(a)),r.next=14;break;case 13:throw new Error("Sorry. There was some mistake on the server.");case 14:r.next=19;break;case 16:r.prev=16,r.t0=r.catch(1),t({type:"SERVER_ERROR",payload:r.t0.message});case 19:case"end":return r.stop()}}),null,null,[[1,16]])}}(e))}}function D(e){return{type:"WRITE_TO_CACHE",vin:e}}function T(e){return{type:"UPDATE_VIN",currentVin:e}}function k(e){return{type:"NOT_FIND_INFORMATION",code:e}}function x(e){return{type:"SET_VIN",currentVin:e}}var R=n(15),w=n(16),F=n(18),A=n(17),M=n(19),L=n(13),P=n.n(L),H=n(25),B=n.n(H),U=function(e){var t=[];return e.valid||t.push(B.a.invalid),r.a.createElement("div",{className:P()(e.classes.root)},r.a.createElement("input",{className:P()(t,B.a.input,e.classes.input),type:e.type,value:e.value,onChange:e.onChange,maxLength:e.maxlength,placeholder:e.placeholder}),!e.valid&&r.a.createElement("span",{className:B.a.errorMessage},e.errorMessage))};U.defaultProps={type:"text",errorMessage:"Please enter the correct value",maxlength:"",placeholder:""};var X=U,Q=n(47),Z=n.n(Q),q=function(e){var t=[Z.a[e.type]];return r.a.createElement("button",{onClick:e.onClick,className:P()(t,e.classes),disabled:e.isDisabled},e.children)};q.defaultProps={type:"primary",isDisabled:!1,onClick:function(){}};var J=q,W=n(26),z=n.n(W),G=function(e){return/[A-Z0-9]{17}/g.test(e)&&!/[QOI]/g.test(e)&&""!==e.trim()},K=function(e){function t(){var e,n;Object(R.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(F.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={input:{value:"",errorMessage:"Please enter the correct 17 characters",valid:!0}},n.onChange=function(e){var t=Object(m.a)({},n.state.input);t.value=e.target.value,t.valid=!0,n.setState({input:t})},n.onSubmit=function(e){e.preventDefault();var t=Object(m.a)({},n.state.input);G(t.value)?(t.valid=!0,n.setState({input:t}),n.props.onSubmit(e,n.state.input.value)):(t.valid=!1,n.setState({input:t}))},n}return Object(M.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isDisabled,n=e.classes,a=this.state.input;return r.a.createElement("form",{className:P.a.apply(void 0,Object(u.a)(n).concat([z.a.form])),onSubmit:this.onSubmit},r.a.createElement(X,{value:a.value,valid:a.valid,errorMessage:a.errorMessage,onChange:this.onChange,classes:{root:z.a.rootInput,input:z.a.input},placeholder:"vin number",maxlength:"17"}),r.a.createElement(J,{disabled:t},t?"Decoding...":"Decode"))}}]),t}(a.Component);K.defaultProps={classes:[],onSubmit:function(){}};var Y=K,$=function(e){var t=e.list;return r.a.createElement(r.a.Fragment,null,t&&0!==t.length&&r.a.createElement("table",{className:"table-striped"},r.a.createElement("tbody",null,t.filter((function(e){return"Error Code"!==e.Variable})).map((function(e){return r.a.createElement("tr",{key:e.VariableId},r.a.createElement("td",null,e.Variable),r.a.createElement("td",null,e.Value))})))))};$.defaultProps={list:[]};var ee=$,te=function(e){var t=e.vins,n=e.onClick;return r.a.createElement(r.a.Fragment,null,0!==t.length&&r.a.createElement("div",{className:"last-vins"},r.a.createElement("h4",{className:"last-vins-title"},"Last vins:"),r.a.createElement("ul",{className:"flex-box"},t.map((function(e,a){return r.a.createElement("li",{key:a,className:"flex-item-btn",onClick:function(){return n(t[a])}},e.name)})))))};te.defaultProps={cache:[],onClick:function(){}};var ne=te,ae=n(20),re=n.n(ae);var ce=Object(i.b)((function(e){return{setVin:e.vinsSearch.setVin,currentVin:e.vinsSearch.currentVin,loading:e.vinsSearch.loading,cache:e.vinsSearch.cache,serverError:e.vinsSearch.serverError,searchNotFind:e.vinsSearch.searchNotFind}}),(function(e){return{onSubmit:function(t,n){return e(I(n))},setVin:function(t){return e(x(t))}}}))((function(e){var t=e.onSubmit,n=e.setVin,a=e.currentVin,c=e.loading,l=e.cache,i=e.serverError,s=e.searchNotFind;return r.a.createElement("div",null,r.a.createElement("h1",{className:re.a.title},"VIN Decoder"),r.a.createElement(Y,{onSubmit:t,isDisabled:c,classes:[re.a.searchBar]}),r.a.createElement(ne,{vins:l,onClick:n}),i?r.a.createElement("div",{className:re.a.serverError},i):r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:re.a.currentVin},"Current VIN: ",a.name),r.a.createElement("div",{className:"note"},a.message)),s?r.a.createElement("div",{className:re.a.searchNotFind},s):r.a.createElement(ee,{list:a&&a.results})))})),le=n(30),ie=n.n(le),se=function(e){return r.a.createElement("div",{className:ie.a.layout},r.a.createElement("div",{className:"container"},r.a.createElement("main",{className:ie.a.main},e.children)))},oe=n(31),ue=n.n(oe),me=function(e){return r.a.createElement("div",{className:ue.a.center},r.a.createElement("div",{className:ue.a.Loader},r.a.createElement("div",null),r.a.createElement("div",null)))},de=function(e){return function(t){return function(n){function a(){var e,t;Object(R.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(F.a)(this,(e=Object(A.a)(a)).call.apply(e,[this].concat(r)))).state={data:null,loading:!0,error:!1},t}return Object(M.a)(a,n),Object(w.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.setState({loading:!0,error:!1}),e(this.props).then((function(e){t.setState({data:e,loading:!1})})).catch((function(){t.setState({error:!0,loading:!1})}))}},{key:"render",value:function(){var e=this.state,n=e.data,a=e.loading,c=e.error;return a?r.a.createElement(me,null):c?r.a.createElement("div",null,"Something has gone terribly wrong"):r.a.createElement(t,Object.assign({},this.props,{data:n}))}}]),a}(a.Component)}},he=Object(s.d)(f.g,de((function(){return C.getVehicleVariableList()})))((function(e){var t=e.history,n=e.data;return r.a.createElement("ul",null,n.results.map((function(e){return r.a.createElement("li",{key:e.Name,className:"card",onClick:function(){return n=e.ID,void t.push("/variables/"+n);var n}},r.a.createElement("div",{className:"card-name"},e.Name),r.a.createElement("div",{className:"card-description",dangerouslySetInnerHTML:{__html:e.Description}}))})))})),ve=Object(s.d)(f.g,de((function(e){var t=e.match;return C.getVariableVin(t.params.id)})))((function(e){var t=e.data;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("div",{className:"card card_no-hover"},r.a.createElement("div",{className:"card-name"},t.Name),r.a.createElement("div",{className:"card-description",dangerouslySetInnerHTML:{__html:t.Description}})):r.a.createElement("div",null,"Not found"))})),pe=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"menu"},r.a.createElement("li",null,r.a.createElement(E.b,{to:"/",exact:!0},"Home")),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/variables"},"Variables")))))},Ee=function(e){function t(){var e,n;Object(R.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(F.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},n}return Object(M.a)(t,e),Object(w.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",null,"Something has gone terribly wrong"):this.props.children}}]),t}(a.Component),fe=function(){return r.a.createElement(Ee,null,r.a.createElement(E.a,null,r.a.createElement(pe,null),r.a.createElement(se,null,r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/",exact:!0,component:ce}),r.a.createElement(f.b,{path:"/variables/:id",component:ve}),r.a.createElement(f.b,{path:"/variables",component:he}),r.a.createElement(f.a,{to:"/"})))))};n(78);l.a.render(r.a.createElement(i.a,{store:p},r.a.createElement(fe,null)),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.c67d19c1.chunk.js.map