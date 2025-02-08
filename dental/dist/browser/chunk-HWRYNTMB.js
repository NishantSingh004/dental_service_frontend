import{a as $,b as H}from"./chunk-BKIASB5L.js";import{a as J}from"./chunk-K5V74WHJ.js";import"./chunk-VITD727A.js";import"./chunk-4UEG4YGH.js";import{b as z,c as L}from"./chunk-W3NAO6KB.js";import{b as T,d as s,f as B,g as R,h as q,j as u,k as V,l as D,m as G,n as j}from"./chunk-WIDYGH7A.js";import{a as W}from"./chunk-GVQSUSEC.js";import{a as N,b as A,f as F,g as k}from"./chunk-NWUVWC63.js";import"./chunk-T3Q3DASN.js";import"./chunk-SCUENCVS.js";import{c as O}from"./chunk-EM67NHJN.js";import"./chunk-JWFPSY3G.js";import{M as E,Q as I,T as S}from"./chunk-FTBPRRUE.js";import{$b as l,Ab as m,Gb as M,Hb as w,Ib as h,Jb as a,Kb as n,Kc as U,Lb as x,Pb as y,Rb as d,ac as P,bb as i,bc as p,e as Q,fa as v,ob as b,tb as c}from"./chunk-ZDRYPNXQ.js";var f=Q(W());function X(t,o){if(t&1&&(a(0,"mat-error"),l(1),n()),t&2){let e,r=d();i(),p(" ",(e=r.createUser.get("email"))!=null&&e.hasError("required")?"Email is required":"Please enter a valid email"," ")}}function Y(t,o){if(t&1&&(a(0,"mat-error"),l(1),n()),t&2){let e,r=d();i(),p(" ",(e=r.createUser.get("password"))!=null&&e.hasError("required")?"password is required":"Password should be atleast 6 characters long"," ")}}function Z(t,o){if(t&1&&(a(0,"mat-option",9),l(1),n()),t&2){let e=o.$implicit;m("value",e.value),i(),P(e.viewValue)}}function ee(t,o){if(t&1&&(a(0,"mat-error"),l(1),n()),t&2){let e,r=d();i(),p(" ",(e=r.createUser.get("role"))!=null&&e.hasError("role")?"role is required":""," ")}}var K=class t{user=v(J);Roles=[{value:"admin",viewValue:"Admin"},{value:"doctor",viewValue:"Doctor"}];router=v(O);createUser;ngOnInit(){this.createUser=new q({email:new u("",{validators:[s.required,s.email]}),password:new u("",{validators:[s.required,s.minLength(6)]}),role:new u("",{validators:[s.required]})})}creations=!1;create(){if(this.createUser.invalid){f.default.fire({title:"Notification",text:"Please provide valid credentials!",icon:"info",iconColor:"rgb(3, 108, 95)",confirmButtonText:"Close",confirmButtonColor:"rgb(252, 151, 114)",scrollbarPadding:!1});return}this.user.createAccount(this.createUser.value).subscribe({next:o=>{o.error||(this.user.user=o.response,localStorage.setItem("user",JSON.stringify(o.response)),f.default.fire({title:"Notification",text:"User added successfully!",icon:"info",iconColor:"rgb(3, 108, 95)",confirmButtonText:"Close",confirmButtonColor:"rgb(252, 151, 114)",scrollbarPadding:!1}))},error:o=>{f.default.fire({title:"Notification",text:"An error occurred. Please try again later!",icon:"info",iconColor:"rgb(3, 108, 95)",confirmButtonText:"Close",confirmButtonColor:"rgb(252, 151, 114)",scrollbarPadding:!1})}}),this.creations=!0,this.createUser.reset()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=b({type:t,selectors:[["app-add-users"]],decls:25,vars:5,consts:[[1,"container"],[1,"form-container"],[1,"title"],[3,"formGroup"],["appearance","outline"],["matInput","","formControlName","email"],[4,"ngIf"],["type","password","matInput","","formControlName","password"],["formControlName","role"],[3,"value"],[1,"buttons-container"],["mat-raised-button","",1,"login-button",3,"click","disabled"]],template:function(e,r){if(e&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),l(3,"Add User"),n(),a(4,"form",3)(5,"mat-form-field",4)(6,"mat-label"),l(7,"Enter your email"),n(),x(8,"input",5),c(9,X,2,1,"mat-error",6),n(),a(10,"mat-form-field",4)(11,"mat-label"),l(12,"Enter your password"),n(),x(13,"input",7),c(14,Y,2,1,"mat-error",6),n(),a(15,"mat-form-field")(16,"mat-label"),l(17,"Select Role"),n(),a(18,"mat-select",8),w(19,Z,2,2,"mat-option",9,M),n(),c(21,ee,2,1,"mat-error",6),n()(),a(22,"div",10)(23,"button",11),y("click",function(){return r.create()}),l(24," Add User "),n()()()()),e&2){let g,_,C;i(4),m("formGroup",r.createUser),i(5),m("ngIf",(g=r.createUser.get("email"))==null?null:g.invalid),i(5),m("ngIf",(_=r.createUser.get("password"))==null?null:_.invalid),i(5),h(r.Roles),i(2),m("ngIf",(C=r.createUser.get("role"))==null?null:C.invalid),i(2),m("disabled",r.createUser.invalid)}},dependencies:[k,F,N,A,S,I,L,z,j,V,T,B,R,D,G,U,H,$,E],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:wrap;width:100%;justify-content:center;align-items:center;margin-top:9rem}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-top:10vh;margin-bottom:10vh;background-color:#fff;box-shadow:0 2px 6px 1px #0003;padding:50px;max-width:25vw;position:relative}form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.title[_ngcontent-%COMP%]{font-size:22px;margin-bottom:20px}mat-form-field[_ngcontent-%COMP%]{width:20vw}  .mat-mdc-form-field-focus-overlay{background-color:#fff!important;opacity:1!important}mat-option[_ngcontent-%COMP%]{background-color:#fff!important}.buttons-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;align-items:center}.buttons-container[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin-top:10px}button.login-button[_ngcontent-%COMP%]{background-color:#fc9772!important;padding:.8rem 1.5rem!important;color:#036c5f!important;font-size:1rem}button.login[_ngcontent-%COMP%]{color:#668ebe}@media screen and (min-width: 128px) and (max-width: 900px){.container[_ngcontent-%COMP%]{flex-direction:column;padding-top:0;margin-top:0}.hero-container[_ngcontent-%COMP%]{height:30vh;display:flex;flex-direction:column;justify-content:center;align-items:center}.form-container[_ngcontent-%COMP%]:before{background-size:80%;background-position:center 25px}.form-container[_ngcontent-%COMP%]{margin-top:5vh;margin-bottom:5vh;padding:30px;max-width:80vw}mat-form-field[_ngcontent-%COMP%]{width:100%}.title[_ngcontent-%COMP%]{font-size:18px}.buttons-container[_ngcontent-%COMP%], button.login-button[_ngcontent-%COMP%]{width:100%}}"]})};export{K as AddUsersComponent};
