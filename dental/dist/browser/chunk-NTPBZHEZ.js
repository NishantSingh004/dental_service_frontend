import{a as F}from"./chunk-UYILTDBF.js";import{a as L}from"./chunk-DPBKMJBH.js";import{a as R}from"./chunk-GVQSUSEC.js";import"./chunk-SCUENCVS.js";import{c as P}from"./chunk-EM67NHJN.js";import"./chunk-JWFPSY3G.js";import{a as y,b as D,c as S,d as E,f as z,h as k}from"./chunk-7RYVJ5ZG.js";import{T as I}from"./chunk-FTBPRRUE.js";import{$b as i,Ab as C,Jb as n,Jc as w,Kb as o,Lb as u,Mb as _,Pb as v,Pc as O,Rb as M,ac as d,bb as r,bc as s,cb as f,e as B,fa as c,oa as p,ob as x,pa as g,pc as b,tb as h}from"./chunk-ZDRYPNXQ.js";var l=B(R());function V(a,t){if(a&1){let e=_();n(0,"div",5)(1,"mat-card",6)(2,"mat-card-header",7)(3,"mat-card-title"),i(4),o(),n(5,"mat-card-subtitle"),i(6),o(),n(7,"div",8),v("click",function(){let T=p(e).$implicit,j=M();return g(j.deleteDoctor(T._id))}),u(8,"i",9),o()(),n(9,"mat-card-content")(10,"div")(11,"strong"),i(12,"Phone:"),o(),i(13),o(),n(14,"div")(15,"strong"),i(16,"Specialty:"),o(),i(17),o()()()()}if(a&2){let e=t.$implicit;r(4),d(e.name),r(2),d(e.email),r(7),s(" ",e.phone,""),r(4),s(" ",e.role,"")}}var N=class a{constructor(t){this.router=t}doctorService=c(L);cdr=c(b);doctors=[];ngOnInit(){this.doctorService.getDoctors().subscribe({next:t=>{this.doctors=t,this.doctorService.doctors=t,localStorage.setItem("doc",JSON.stringify(t)),this.doctorService.setDoctorCount(this.doctors.length),this.cdr.detectChanges()}})}deleteDoctor(t){this.doctorService.deleteDoctor(t).subscribe({next:()=>{this.doctors=this.doctors.filter(e=>e._id!==t),this.doctorService.setDoctorCount(this.doctors.length),l.default.fire({title:"Notification",text:"Doctor deleted successfully!",icon:"info",iconColor:"rgb(3, 108, 95)",confirmButtonText:"Close",confirmButtonColor:"rgb(252, 151, 114)",scrollbarPadding:!1})},error:()=>{l.default.fire({title:"Notification",text:"Failed to delete doctor!",icon:"info",iconColor:"rgb(3, 108, 95)",confirmButtonText:"Close",confirmButtonColor:"rgb(252, 151, 114)",scrollbarPadding:!1})}})}assignDoctor(t){this.router.navigate(["/admin/assign-doctor"],{state:{patient:t}})}static \u0275fac=function(e){return new(e||a)(f(P))};static \u0275cmp=x({type:a,selectors:[["app-doctors-list"]],decls:6,vars:1,consts:[[1,"list"],[1,"heading"],[1,"admin-container"],[1,"card-container"],["class","card-wrapper",4,"ngFor","ngForOf"],[1,"card-wrapper"],[1,"doctor-card"],[1,"card-header"],[1,"del",3,"click"],[1,"fas","fa-trash"]],template:function(e,m){e&1&&(n(0,"div",0)(1,"h2",1),i(2,"Doctors List"),o()(),n(3,"div",2)(4,"div",3),h(5,V,18,4,"div",4),o()()),e&2&&(r(5),C("ngForOf",m.doctors))},dependencies:[I,k,y,S,z,E,D,O,w,F],styles:[".admin-container[_ngcontent-%COMP%]{width:100%;padding:20px;background:#f7efe8;overflow-y:scroll;scrollbar-width:none;height:800px}.list[_ngcontent-%COMP%]{width:100%;padding-top:2rem}.heading[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;text-align:center;color:#036c5f;margin-bottom:20px}.card-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px;justify-content:space-around;height:112vh;margin-bottom:4rem;overflow-y:scroll;scrollbar-width:none;margin-top:1rem}.card-wrapper[_ngcontent-%COMP%]{flex:1 1 calc(100% - 50px);width:calc(100% - 16px);margin-top:1rem}mat-card[_ngcontent-%COMP%]{margin-bottom:1.5rem;box-shadow:0 4px 8px #0000001a;border-radius:12px;transition:all .3s ease-in-out;background-color:#fff;overflow:hidden}mat-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 8px 16px #0003}.card-header[_ngcontent-%COMP%]{background-color:#036c5f;color:#fff;display:flex;justify-content:space-between;padding:10px 15px}.pat[_ngcontent-%COMP%]{width:100%}i[_ngcontent-%COMP%]{cursor:pointer}mat-card-title[_ngcontent-%COMP%]{font-size:1.3rem;font-weight:700}mat-card-subtitle[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;color:#80cbc4}mat-card-content[_ngcontent-%COMP%]{padding:15px;color:#333;font-size:1rem;line-height:1.5}@media screen and (min-width: 128px) and (max-width: 900px){.admin-container[_ngcontent-%COMP%]{padding:1.5rem 10px .8rem}.list[_ngcontent-%COMP%]{margin-bottom:1rem}.heading[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:15px}.card-container[_ngcontent-%COMP%]{height:auto;overflow-y:visible;flex-direction:column;gap:1rem;width:100%;display:flex;justify-content:center;align-items:center}.card-wrapper[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]{flex:1 1 calc(100% - 50px);max-width:calc(100% - 50px);margin-top:1rem}mat-card[_ngcontent-%COMP%]{margin-bottom:1.5rem;box-shadow:0 4px 8px #0000001a;border-radius:12px;transition:all .3s ease-in-out;background-color:#fff;overflow:hidden}.card-header[_ngcontent-%COMP%]{padding:10px}mat-card-title[_ngcontent-%COMP%]{font-size:1.1rem}mat-card-subtitle[_ngcontent-%COMP%]{font-size:.9rem}mat-card-content[_ngcontent-%COMP%]{padding:10px;font-size:.9rem;line-height:1.4}}"]})};export{N as DoctorsListComponent};
