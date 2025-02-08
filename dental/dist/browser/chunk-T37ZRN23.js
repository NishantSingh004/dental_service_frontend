import{a as D}from"./chunk-UYILTDBF.js";import{a as v,b as P,c as w,d as y,f as I,h as E}from"./chunk-7RYVJ5ZG.js";import{T as S}from"./chunk-FTBPRRUE.js";import{$b as n,Ab as l,Jb as o,Jc as C,Kb as t,Kc as M,Oc as b,Pc as O,Rb as h,_b as _,ac as s,bb as a,bc as c,jc as g,kc as f,lc as u,ob as x,tb as p}from"./chunk-ZDRYPNXQ.js";function k(i,r){if(i&1&&(o(0,"div")(1,"mat-card",8)(2,"mat-card-header",9)(3,"mat-card-title"),n(4),t(),o(5,"mat-card-subtitle"),n(6),t()(),o(7,"mat-card-content")(8,"div")(9,"strong"),n(10,"Phone:"),t(),n(11),t(),o(12,"div")(13,"strong"),n(14,"DOB:"),t(),n(15),g(16,"date"),t(),o(17,"div")(18,"strong"),n(19,"Appointment Date:"),t(),n(20),g(21,"date"),t(),o(22,"div")(23,"strong"),n(24,"Message:"),t(),n(25),t()()()()),i&2){let e=r.$implicit;a(4),s(e.name),a(2),s(e.email),a(5),c(" ",e.phone,""),a(4),c(" ",f(16,6,e.dob),""),a(5),c(" ",f(21,8,e.date)," "),a(5),c(" ",e.message,"")}}function N(i,r){if(i&1&&(o(0,"div"),p(1,k,26,10,"div",7),t()),i&2){let e=h();a(),l("ngForOf",e.appointments)}}function j(i,r){i&1&&(o(0,"p"),n(1,"No patients have been assigned to you yet."),t())}var z=class i{docname="";appointments=[];ngOnInit(){let r=localStorage.getItem("doctorName"),e=localStorage.getItem("currentDoctorId");if(r?this.docname=r:this.docname="Unknown Doctor",e){let d=`patients_doctor_${e}`,m=localStorage.getItem(d);m?this.appointments=JSON.parse(m):this.appointments=[]}else this.appointments=[]}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=x({type:i,selectors:[["app-doctor"]],decls:16,vars:3,consts:[["noAppointments",""],[1,"hero-container"],[1,"bar"],[1,"list"],[1,"heading"],[1,"admin-container"],[4,"ngIf","ngIfElse"],[4,"ngFor","ngForOf"],[1,"patient-card"],[1,"card-header"]],template:function(e,d){if(e&1&&(o(0,"div",1)(1,"h1"),n(2,"Welcome back!"),t(),o(3,"h2"),n(4),t(),o(5,"small")(6,"p"),n(7," Your efforts keep the clinic running smoothly. Let's make today productive! "),t()()(),o(8,"div",2)(9,"div",3)(10,"h2",4),n(11,"Patient List"),t()(),o(12,"div",5),p(13,N,2,1,"div",6)(14,j,2,0,"ng-template",null,0,u),t()()),e&2){let m=_(15);a(4),c("Dr. ",d.docname,""),a(9),l("ngIf",d.appointments.length>0)("ngIfElse",m)}},dependencies:[S,E,v,w,I,y,P,O,C,M,b,D],styles:[".hero-container[_ngcontent-%COMP%]{background:linear-gradient(#000000b3,#000000b3),url(/doctors.webp) center/cover no-repeat;background-size:cover;height:600px;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;text-align:center;position:relative;width:100%}.hero-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff}h1[_ngcontent-%COMP%]{margin-top:2rem;font-size:4rem;margin-bottom:1rem;letter-spacing:2px}h2[_ngcontent-%COMP%]{font-size:2.4rem;margin-bottom:1rem;letter-spacing:2px}.bar[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.admin-container[_ngcontent-%COMP%]{width:100%;padding:20px;background:#f7efe8;overflow-y:scroll;scrollbar-width:none;height:800px}.list[_ngcontent-%COMP%]{width:100%;background:#f7efe8;padding-top:2rem}.heading[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;text-align:center;color:#036c5f;margin-bottom:20px}.card-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px;justify-content:space-around;height:112vh;margin-bottom:4rem;overflow-y:scroll;scrollbar-width:none;margin-top:1rem}.card-wrapper[_ngcontent-%COMP%]{flex:1 1 calc(100% - 50px);width:calc(100% - 16px);margin-top:1rem}mat-card[_ngcontent-%COMP%]{margin-bottom:1.5rem;box-shadow:0 4px 8px #0000001a;border-radius:12px;transition:all .3s ease-in-out;background-color:#fff;overflow:hidden}mat-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 8px 16px #0003}.card-header[_ngcontent-%COMP%]{background-color:#036c5f;color:#fff;padding:10px 15px}mat-card-title[_ngcontent-%COMP%]{font-size:1.3rem;font-weight:700}mat-card-subtitle[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;color:#80cbc4}mat-card-content[_ngcontent-%COMP%]{padding:15px;color:#333;font-size:1rem;line-height:1.5}mat-card-actions[_ngcontent-%COMP%]{padding:10px;text-align:center;display:flex;justify-content:center;align-items:center}mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:50%;background-color:#fc9772!important;color:#036c5f!important;font-size:1rem;text-transform:uppercase;border-radius:8px;padding:10px;transition:background-color .3s ease,transform .3s ease}mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{transform:scale(1.05)}@media screen and (min-width: 128px) and (max-width: 900px){.admin-container[_ngcontent-%COMP%]{padding:1.5rem 10px .8rem}h1[_ngcontent-%COMP%]{font-size:2.8rem}h2[_ngcontent-%COMP%]{font-size:2.2rem}.list[_ngcontent-%COMP%]{padding-bottom:1rem}.heading[_ngcontent-%COMP%]{font-size:2rem}.card-container[_ngcontent-%COMP%]{height:auto;overflow-y:visible;flex-direction:column;gap:1rem;width:100%;display:flex;justify-content:center;align-items:center}.card-wrapper[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]{flex:1 1 calc(100% - 50px);max-width:calc(100% - 50px);margin-top:1rem}mat-card[_ngcontent-%COMP%]{margin-bottom:1.5rem;box-shadow:0 4px 8px #0000001a;border-radius:12px;transition:all .3s ease-in-out;background-color:#fff;overflow:hidden}.card-header[_ngcontent-%COMP%]{padding:10px}mat-card-title[_ngcontent-%COMP%]{font-size:1.1rem}mat-card-subtitle[_ngcontent-%COMP%]{font-size:.9rem}mat-card-content[_ngcontent-%COMP%]{padding:10px;font-size:.9rem;line-height:1.4}mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:90%;font-size:.9rem;padding:8px}}"]})};export{z as DoctorComponent};
