import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AdminComponent } from './admin/admin.component';
import { AddDoctorsComponent } from './add-doctor/add-doctor.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { AssignDoctorComponent } from './assign-doctor/assign-doctor.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ServicesComponent } from './service/services.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DentalImplantsComponent } from './service/dental-implants/dental-implants.component';
import { DentalSurgeryComponent } from './service/dental-surgery/dental-surgery.component';
import { WhiteningCleaningComponent } from './service/whitening-cleaning/whitening-cleaning.component';
import { PediatricDentistryComponent } from './service/pediatric-dentistry/pediatric-dentistry.component';
import { SmileDesignComponent } from './service/smile-design/smile-design.component';
import { AlingmentComponent } from './service/alingment/alingment.component';
import { FaqsComponent } from './login/faqs/faqs.component';
import { ClinicPoliciesComponent } from './login/clinic-policies/clinic-policies.component';
import { TermsComponent } from './login/terms/terms.component';
import { PrivacyPolicyComponent } from './login/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'appointment',
    component: AppointmentComponent,
  },
  {
    path: 'service',
    component: ServicesComponent,
  },
  {
    path: 'service/dental-implants',
    component: DentalImplantsComponent,
  },
  {
    path: 'service/dental-surgery',
    component: DentalSurgeryComponent,
  },
  {
    path: 'service/whitening-cleaning',
    component: WhiteningCleaningComponent,
  },
  {
    path: 'service/pediatric-dentistry',
    component: PediatricDentistryComponent,
  },
  {
    path: 'service/smile-design',
    component: SmileDesignComponent,
  },
  {
    path: 'service/alignment-orthodontics',
    component: AlingmentComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'patient-list',
      },
      {
        path: 'patient-list',
        component: PatientListComponent,
      },
      {
        path: 'doctors-list',
        component: DoctorsListComponent,
      },
      {
        path: 'add-doctor',
        component: AddDoctorsComponent,
      },
      {
        path: 'add-user',
        component: AddUsersComponent,
      },
      {
        path: 'assign-doctor',
        component: AssignDoctorComponent,
      },
    ],
  },

  { path: 'doctor', component: DoctorComponent },
  { path: 'faq', component: FaqsComponent },
  { path: 'clinic-policies', component: ClinicPoliciesComponent },
  { path: 'terms-of-service', component: TermsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
];
