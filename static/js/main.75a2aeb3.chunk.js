(this["webpackJsonpcards-ts"]=this["webpackJsonpcards-ts"]||[]).push([[0],{21:function(e,t,n){e.exports={button:"SuperButton_button__2E8PG",mouseDown:"SuperButton_mouseDown__rxcNk",primary:"SuperButton_primary__10al_",secondary:"SuperButton_secondary__iJGn8",success:"SuperButton_success__1B4UJ",warning:"SuperButton_warning__1_WXG",danger:"SuperButton_danger__3xdEI",small:"SuperButton_small__2S9OJ",medium:"SuperButton_medium__3zymP",large:"SuperButton_large__NmJBq",red:"SuperButton_red__b2j5_"}},23:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__1IMqn",small:"SuperInputText_small__yR8nq",medium:"SuperInputText_medium__16RfX",large:"SuperInputText_large__3bd_j",errorInput:"SuperInputText_errorInput__2i_g3",error:"SuperInputText_error__Yh8hL"}},29:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__Wmxrc",spanClassName:"SuperCheckbox_spanClassName__2Iv8e"}},32:function(e,t,n){e.exports={select:"SuperSelect_select__iu0EE"}},33:function(e,t,n){e.exports={radioGroup:"SuperRadio_radioGroup__3s6Zc",radioItem:"SuperRadio_radioItem__1DUgC"}},34:function(e,t,n){e.exports={span:"SuperEditableSpan_span__1A9Bc",input:"SuperEditableSpan_input__2gMbq"}},47:function(e,t,n){e.exports={demo:"demoSuperComponentsStand_demo__ec1nv"}},53:function(e,t,n){},58:function(e,t,n){},7:function(e,t,n){e.exports={container:"Register_container__3TkuH",formControl:"Register_formControl__1OCLi",link:"Register_link__2bg52",success:"Register_success__soHnn",error:"Register_error__2EkO6",preloader:"Register_preloader__is9Rw"}},80:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(24),c=n.n(a),s=(n(53),n(8)),o=n(5),i=(n(58),n(20)),u=n(45),l=n(2),j={isAuth:!1,error:null,isLoading:!1,profileData:null},d="SIGN_IN/LOADING",p="SIGN_IN/ERROR",b="SIGN_IN/SET_PROFILE_DATA",O="SIGN_IN/SET_IS_AUTH",h=function(e){return{type:p,payload:{error:e}}},f=function(e){return{type:d,payload:{isLoading:e}}},m={isSuccess:!1,error:null,isLoading:!1},x="REGISTER/LOADING",g="REGISTER/ERROR",v="REGISTER/SUCCESS",_=function(e){return{type:v,payload:{isSuccess:e}}},S=function(e){return{type:g,payload:{error:e}}},y=function(e){return{type:x,payload:{isLoading:e}}},C={isSuccess:!1,error:null,isLoading:!1},N="FORGOT/LOADING",k="FORGOT/ERROR",w="FORGOT/SUCCESS",I=function(e){return{type:w,payload:{isSuccess:e}}},E=function(e){return{type:k,payload:{error:e}}},T=function(e){return{type:N,payload:{isLoading:e}}},R={},P={isSuccess:!1,error:null,isLoading:!1},B="SET_PASS/LOADING",G="SET_PASS/ERROR",L="SET_PASS/SUCCESS",F=function(e){return{type:G,payload:{error:e}}},A=function(e){return{type:B,payload:{isLoading:e}}},D=Object(i.c)({signIn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:case p:case O:case b:return Object(l.a)(Object(l.a)({},e),t.payload);default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:case g:case x:return Object(l.a)(Object(l.a)({},e),t.payload);default:return e}},forgot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:case k:case N:return Object(l.a)(Object(l.a)({},e),t.payload);default:return e}},setPass:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:case G:case B:return Object(l.a)(Object(l.a)({},e),t.payload);default:return e}},neko:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;return t.type,e}}),z=Object(i.d)(D,Object(i.a)(u.a)),U=z;window.store=z;var J=n(6),M=n(4),q=n(17),W=n(7),K=n.n(W),H=n(12),$=n(23),X=n.n($),Y=n(0),V=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.dimention,s=void 0===c?"medium":c,o=e.error,i=e.className,u=e.spanClassName,j=Object(H.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","dimention","error","className","spanClassName"]),d="".concat(X.a.error," ").concat(u||""),p="\n      ".concat(o?X.a.errorInput:""," \n      ").concat(X.a.superInput," \n      ").concat(s?X.a[s]:"","\n      ").concat(i,"\n   ");return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)("input",Object(l.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),"Enter"===e.key&&a&&a()},className:p},j)),o&&Object(Y.jsx)("span",{className:d,children:o})]})},Z=n(21),Q=n.n(Z),ee=function(e){var t=e.variant,n=e.size,a=e.red,c=e.className,s=Object(H.a)(e,["variant","size","red","className"]),o=Object(r.useState)(!1),i=Object(M.a)(o,2),u=i[0],j=i[1],d="\n      ".concat(Q.a.button," \n      ").concat(t?Q.a[t]:"","\n      ").concat(n?Q.a[n]:""," \n      ").concat(a?Q.a.red:"","\n      ").concat(u?Q.a.mouseDown:"","\n      ").concat(c,"\n   ");return Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsx)("button",Object(l.a)({className:d,onMouseDown:function(){return j(!0)},onMouseUp:function(){return j(!1)}},s))})},te=n(29),ne=n.n(te),re=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(H.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(ne.a.checkbox," ").concat(r||"");return Object(Y.jsxs)("label",{children:[Object(Y.jsx)("input",Object(l.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(Y.jsx)("span",{className:ne.a.spanClassName,children:a})]})},ae=n(15),ce=n.n(ae),se=n(18),oe=n(46),ie=n.n(oe).a.create({baseURL:"https://neko-back.herokuapp.com/2.0/"}),ue=function(e,t,n){return ie.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},le=function(e){Object(q.a)(e),console.log("render SignIn");var t=Object(o.b)(),n=Object(r.useState)(""),a=Object(M.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)(""),u=Object(M.a)(i,2),l=u[0],j=u[1],d=Object(r.useState)(!1),p=Object(M.a)(d,2),m=p[0],x=p[1],g=Object(o.c)((function(e){return e.signIn.isLoading})),v=Object(o.c)((function(e){return e.signIn.error}));return Object(o.c)((function(e){return e.signIn.isAuth}))?Object(Y.jsx)(J.a,{to:He}):Object(Y.jsxs)("div",{className:K.a.container,children:[v&&Object(Y.jsx)("div",{className:K.a.error,children:v}),g&&Object(Y.jsx)("div",{className:K.a.preloader,children:"in progress..."}),Object(Y.jsx)("div",{className:K.a.formControl,children:Object(Y.jsx)(V,{type:"text",name:"email",value:c,onChange:function(e){v&&t(h(null)),s(e.currentTarget.value)},className:K.a.forgotInput,placeholder:"Email"})}),Object(Y.jsx)("div",{className:K.a.formControl,children:Object(Y.jsx)(V,{type:"text",name:"password",value:l,onChange:function(e){v&&t(h(null)),j(e.currentTarget.value)},className:K.a.forgotInput,placeholder:"Password"})}),Object(Y.jsxs)("div",{className:K.a.formControl,children:[Object(Y.jsx)(re,{type:"checkbox",name:"rememberMe",checked:m,onChange:function(e){v&&t(h(null)),x(e.currentTarget.checked)}})," Remember me"]}),Object(Y.jsx)("div",{children:Object(Y.jsx)(ee,{variant:"primary",size:"large",onClick:function(e){t(function(e,t,n){return function(){var r=Object(se.a)(ce.a.mark((function r(a,c){var s,o;return ce.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a(h(null)),a(f(!0)),r.next=5,ue(e,t,n);case 5:s=r.sent,a({type:b,payload:{profileData:s}}),a({type:O,payload:{isAuth:!0}}),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),r.t0.response?(o=r.t0.response.data,a(h(o.error))):a(h(r.t0.message));case 13:return r.prev=13,a(f(!1)),r.finish(13);case 16:case"end":return r.stop()}}),r,null,[[0,10,13,16]])})));return function(e,t){return r.apply(this,arguments)}}()}(c,l,m))},children:"sign in"})})]})},je=function(){return Object(Y.jsx)(le,{})},de=function(){return console.log("render SignInPage"),Object(Y.jsx)(je,{})},pe=function(e,t){return ie.post("auth/register",{email:e,password:t}).then((function(e){return e.data}))},be=function(e){Object(q.a)(e);var t=Object(o.b)(),n=Object(r.useState)(""),a=Object(M.a)(n,2),c=a[0],i=a[1],u=Object(r.useState)(""),l=Object(M.a)(u,2),j=l[0],d=l[1],p=Object(r.useState)(""),b=Object(M.a)(p,2),O=b[0],h=b[1];Object(r.useEffect)((function(){return function(){t(_(!1))}}));var f=Object(o.c)((function(e){return e.register.isLoading})),m=Object(o.c)((function(e){return e.register.error}));return Object(o.c)((function(e){return e.register.isSuccess}))?Object(Y.jsx)(J.a,{to:Me}):Object(Y.jsxs)("div",{className:K.a.container,children:[m&&Object(Y.jsx)("div",{className:K.a.error,children:m}),f&&Object(Y.jsx)("div",{className:K.a.preloader,children:"in progress..."}),Object(Y.jsx)("div",{className:K.a.formControl,children:Object(Y.jsx)(V,{type:"text",name:"email",value:O,onChange:function(e){m&&t(S(null)),h(e.currentTarget.value)},className:K.a.forgotInput,placeholder:"Email:"})}),Object(Y.jsx)("div",{className:K.a.formControl,children:Object(Y.jsx)(V,{type:"text",name:"first-password",value:c,onChange:function(e){m&&t(S(null)),i(e.currentTarget.value)},className:K.a.forgotInput,placeholder:"Password:"})}),Object(Y.jsx)("div",{className:K.a.formControl,children:Object(Y.jsx)(V,{type:"text",name:"second-password",value:j,onChange:function(e){m&&t(S(null)),d(e.currentTarget.value)},className:K.a.forgotInput,placeholder:"Confirm password:"})}),Object(Y.jsx)("div",{children:Object(Y.jsx)(ee,{variant:"primary",size:"large",onClick:function(e){t(c===j?function(e,t){return function(){var n=Object(se.a)(ce.a.mark((function n(r,a){var c;return ce.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(S(null)),r(y(!0)),n.next=5,pe(e,t);case 5:n.sent,r(_(!0)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),n.t0.response?(c=n.t0.response.data,r(S(c.error))):r(S(n.t0.message));case 12:return n.prev=12,r(y(!1)),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(e,t){return n.apply(this,arguments)}}()}(O,j):S("Passwords don't match!"))},children:"sign up"})}),Object(Y.jsx)("div",{className:K.a.link,children:Object(Y.jsx)(s.b,{to:Me,children:"login"})})]})},Oe=function(){return Object(Y.jsx)(be,{})},he=function(){return console.log("render RegisterPage"),Object(Y.jsx)(Oe,{})},fe=n(9),me=n.n(fe),xe=function(e){return ie.post("/auth/forgot",{email:e,from:"front-admin <serhioromanchuk@gmail.com>",message:"<div style=\"background-color: lime; padding: 15px\">\t\n\t                         password recovery link: \t\t\n\t                         <a href='https://borec22.github.io/cards-ts/#/set-new-password/$token$'>link</a>\n\t                      </div>"}).then((function(e){return e.data}))},ge=function(e){Object(q.a)(e);var t=Object(r.useState)(""),n=Object(M.a)(t,2),a=n[0],c=n[1];console.log("render SetPass");var i=Object(o.b)(),u=Object(o.c)((function(e){return e.forgot.isSuccess})),l=Object(o.c)((function(e){return e.forgot.isLoading})),j=Object(o.c)((function(e){return e.forgot.error}));Object(r.useEffect)((function(){return function(){i(I(!1))}}),[]);return Object(Y.jsxs)("div",{className:me.a.container,children:[u?Object(Y.jsxs)("div",{children:[Object(Y.jsx)("p",{className:me.a.success,children:"Success!"}),Object(Y.jsx)("p",{children:"click the link in the message in your email"})]}):Object(Y.jsxs)(Y.Fragment,{children:[j&&Object(Y.jsx)("div",{className:me.a.error,children:j}),l&&Object(Y.jsx)("div",{className:me.a.preloader,children:"in progress..."}),Object(Y.jsx)("div",{className:me.a.formControl,children:Object(Y.jsx)(V,{type:"email",name:"email",value:a,onChange:function(e){c(e.currentTarget.value)},className:me.a.forgotInput,placeholder:"Enter your email:"})}),Object(Y.jsx)("div",{children:Object(Y.jsx)(ee,{variant:"primary",size:"large",onClick:function(e){i(function(e){return function(){var t=Object(se.a)(ce.a.mark((function t(n,r){var a;return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(E(null)),n(T(!0)),t.next=5,xe(e);case 5:t.sent.success&&n(I(!0)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),t.t0.response?(a=t.t0.response.data,n(E(a.error))):n(E(t.t0.message));case 12:return t.prev=12,n(T(!1)),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(e,n){return t.apply(this,arguments)}}()}(a))},children:"send"})})]}),Object(Y.jsx)("div",{className:me.a.link,children:Object(Y.jsx)(s.b,{to:Me,children:"login"})})]})},ve=function(){return Object(Y.jsx)(ge,{})},_e=function(){return console.log("render SetPassPage"),Object(Y.jsx)(ve,{})},Se=function(e){return Object(q.a)(e),console.log("render Neko"),Object(Y.jsx)("div",{children:"Neko"})},ye=function(){return Object(Y.jsx)(Se,{})},Ce=function(){return console.log("render NekoPage"),Object(Y.jsx)(ye,{})},Ne=n(47),ke=n.n(Ne),we=n(32),Ie=n.n(we),Ee=function(e){var t=e.options,n=e.onChange,r=e.onChangeOption,a=Object(H.a)(e,["options","onChange","onChangeOption"]),c=t?t.map((function(e,t){return Object(Y.jsx)("option",{value:e,className:Ie.a.option,children:e},t)})):[];return Object(Y.jsx)("select",Object(l.a)(Object(l.a)({className:Ie.a.select,onChange:function(e){n&&n(e),r&&r(e.currentTarget.value)}},a),{},{children:c}))},Te=n(33),Re=n.n(Te),Pe=function(e){e.type;var t=e.name,n=e.options,r=e.value,a=e.onChange,c=e.onChangeOption,s=(Object(H.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){a&&a(e),c&&c(e.currentTarget.value)}),o=n?n.map((function(e,n){return Object(Y.jsxs)("label",{className:Re.a.radioItem,children:[Object(Y.jsx)("input",{type:"radio",name:t,value:e,onChange:s,checked:r===e}),e]},t+"-"+n)})):[];return Object(Y.jsx)("div",{className:Re.a.radioGroup,children:o})},Be=n(34),Ge=n.n(Be),Le=n(48),Fe=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,a=e.spanProps,c=Object(H.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(r.useState)(!1),o=Object(M.a)(s,2),i=o[0],u=o[1],j=a||{},d=j.children,p=j.onDoubleClick,b=j.className,O=Object(H.a)(j,["children","onDoubleClick","className"]),h="".concat(Ge.a.span," ").concat(b);return Object(Y.jsx)(Y.Fragment,{children:i?Object(Y.jsx)(V,Object(l.a)({autoFocus:!0,onBlur:function(e){u(!1),t&&t(e)},onEnter:function(){u(!1),n&&n()},className:Ge.a.input},c)):Object(Y.jsxs)("span",Object(l.a)(Object(l.a)({onDoubleClick:function(e){u(!0),p&&p(e)},className:h},O),{},{children:[Object(Y.jsx)(Le.a,{}),d||c.value]}))})},Ae=function(){var e=Object(r.useState)(""),t=Object(M.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(M.a)(c,2),o=s[0],i=s[1],u=Object(r.useState)(!1),l=Object(M.a)(u,2),j=l[0],d=l[1],p=["x","y","z"],b=Object(r.useState)(p[0]),O=Object(M.a)(b,2),h=O[0],f=O[1];return Object(Y.jsxs)("div",{className:ke.a.demo,children:[Object(Y.jsx)(V,{value:n,dimention:"small",onChangeText:a}),Object(Y.jsx)("br",{}),Object(Y.jsx)(ee,{size:"medium",variant:"success",children:"OK"}),Object(Y.jsx)("br",{}),Object(Y.jsx)(re,{checked:j,onChangeChecked:d}),Object(Y.jsx)("br",{}),Object(Y.jsx)(Ee,{options:p,value:h,onChangeOption:f,style:{margin:"15px 0"}}),Object(Y.jsx)("br",{}),Object(Y.jsx)(Pe,{name:"radio",options:p,value:h,onChangeOption:f}),Object(Y.jsx)("br",{}),Object(Y.jsx)(Fe,{value:o,onChangeText:i,spanProps:{children:h?void 0:"enter text..."}})]})},De=function(e,t){return ie.post("auth/set-new-password",{password:e,resetPasswordToken:t}).then((function(e){return e.data}))},ze=function(e){Object(q.a)(e);var t=Object(r.useState)(""),n=Object(M.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(""),u=Object(M.a)(i,2),l=u[0],j=u[1],d=Object(o.b)(),p=Object(J.f)().token,b=Object(o.c)((function(e){return e.setPass.isLoading})),O=Object(o.c)((function(e){return e.setPass.error}));return Object(o.c)((function(e){return e.setPass.isSuccess}))?Object(Y.jsx)(J.a,{to:Me}):Object(Y.jsxs)("div",{className:me.a.container,children:[O&&Object(Y.jsx)("div",{className:me.a.error,children:O}),b&&Object(Y.jsx)("div",{className:me.a.preloader,children:"in progress..."}),Object(Y.jsx)("div",{className:me.a.formControl,children:Object(Y.jsx)(V,{type:"text",name:"first-password",value:a,onChange:function(e){O&&d(F(null)),c(e.currentTarget.value)},className:me.a.forgotInput,placeholder:"Password:"})}),Object(Y.jsx)("div",{className:me.a.formControl,children:Object(Y.jsx)(V,{type:"text",name:"second-password",value:l,onChange:function(e){O&&d(F(null)),j(e.currentTarget.value)},className:me.a.forgotInput,placeholder:"Confirm password:"})}),Object(Y.jsx)("div",{children:Object(Y.jsx)(ee,{variant:"primary",size:"large",onClick:function(e){a===l?p&&d(function(e,t){return function(){var n=Object(se.a)(ce.a.mark((function n(r,a){var c;return ce.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(F(null)),r(A(!0)),n.next=5,De(e,t);case 5:n.sent,r({type:L,payload:{isSuccess:!0}}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),n.t0.response?(c=n.t0.response.data,r(F(c.error))):r(F(n.t0.message));case 12:return n.prev=12,r(A(!1)),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(e,t){return n.apply(this,arguments)}}()}(l,p)):d(F("Passwords don't match!"))},children:"set password"})}),Object(Y.jsx)("div",{className:me.a.link,children:Object(Y.jsx)(s.b,{to:Me,children:"login"})})]})},Ue=function(){return Object(Y.jsx)(ze,{})},Je=function(){return console.log("render SetPassPage"),Object(Y.jsx)(Ue,{})},Me="/sign-in",qe="/register",We="/forgot",Ke="/set-new-password/:token?",He="/neko",$e="/stand",Xe=function(){return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(J.b,{exact:!0,path:"/",render:function(){return Object(Y.jsx)(J.a,{to:Me})}}),Object(Y.jsx)(J.b,{path:Me,render:function(){return Object(Y.jsx)(de,{})}}),Object(Y.jsx)(J.b,{path:qe,render:function(){return Object(Y.jsx)(he,{})}}),Object(Y.jsx)(J.b,{path:We,render:function(){return Object(Y.jsx)(_e,{})}}),Object(Y.jsx)(J.b,{path:Ke,render:function(){return Object(Y.jsx)(Je,{})}}),Object(Y.jsx)(J.b,{path:He,render:function(){return Object(Y.jsx)(Ce,{})}}),Object(Y.jsx)(J.b,{path:$e,render:function(){return Object(Y.jsx)(Ae,{})}})]})},Ye=function(){return Object(Y.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-around",flexWrap:"wrap"},children:[Object(Y.jsx)(s.b,{to:Me,children:"sign-in"}),Object(Y.jsx)(s.b,{to:qe,children:"register"}),Object(Y.jsx)(s.b,{to:We,children:"forgot"}),Object(Y.jsx)(s.b,{to:Ke,children:"set password"}),Object(Y.jsx)(s.b,{to:He,children:"neko"}),Object(Y.jsx)(s.b,{to:$e,children:"stand"})]})},Ve=function(){return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(Ye,{}),Object(Y.jsx)(Xe,{})]})},Ze=function(){return Object(Y.jsx)("div",{className:"App",children:Object(Y.jsx)(s.a,{children:Object(Y.jsx)(o.a,{store:U,children:Object(Y.jsx)(Ve,{})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(Y.jsx)(Ze,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports={container:"Forgot_container__17lr3",formControl:"Forgot_formControl__3Y4N0",link:"Forgot_link__3V1ES",success:"Forgot_success__3Sj-C",error:"Forgot_error__3mbRB",preloader:"Forgot_preloader__3dqeg"}}},[[80,1,2]]]);
//# sourceMappingURL=main.75a2aeb3.chunk.js.map