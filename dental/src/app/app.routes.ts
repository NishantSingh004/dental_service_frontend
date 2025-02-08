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
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'appointment',
    loadComponent: () =>
      import('./appointment/appointment.component').then(
        (m) => m.AppointmentComponent
      ),
  },
  {
    path: 'service',
    loadComponent: () =>
      import('./service/services.component').then((m) => m.ServicesComponent),
  },
  {
    path: 'service/dental-implants',
    loadComponent: () =>
      import('./service/dental-implants/dental-implants.component').then(
        (m) => m.DentalImplantsComponent
      ),
  },
  {
    path: 'service/dental-surgery',
    loadComponent: () =>
      import('./service/dental-surgery/dental-surgery.component').then(
        (m) => m.DentalSurgeryComponent
      ),
  },
  {
    path: 'service/whitening-cleaning',
    loadComponent: () =>
      import('./service/whitening-cleaning/whitening-cleaning.component').then(
        (m) => m.WhiteningCleaningComponent
      ),
  },
  {
    path: 'service/pediatric-dentistry',
    loadComponent: () =>
      import('./service/pediatric-dentistry/pediatric-dentistry.component').then(
        (m) => m.PediatricDentistryComponent
      ),
  },
  {
    path: 'service/smile-design',
    loadComponent: () =>
      import('./service/smile-design/smile-design.component').then(
        (m) => m.SmileDesignComponent
      ),
  },
  {
    path: 'service/alignment-orthodontics',
    loadComponent: () =>
      import('./service/alingment/alingment.component').then(
        (m) => m.AlingmentComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./admin/admin.component').then((m) => m.AdminComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'patient-list',
      },
      {
        path: 'patient-list',
        loadComponent: () =>
          import('./patient-list/patient-list.component').then(
            (m) => m.PatientListComponent
          ),
      },
      {
        path: 'doctors-list',
        loadComponent: () =>
          import('./doctors-list/doctors-list.component').then(
            (m) => m.DoctorsListComponent
          ),
      },
      {
        path: 'add-doctor',
        loadComponent: () =>
          import('./add-doctor/add-doctor.component').then(
            (m) => m.AddDoctorsComponent
          ),
      },
      {
        path: 'add-user',
        loadComponent: () =>
          import('./add-users/add-users.component').then(
            (m) => m.AddUsersComponent
          ),
      },
      {
        path: 'assign-doctor',
        loadComponent: () =>
          import('./assign-doctor/assign-doctor.component').then(
            (m) => m.AssignDoctorComponent
          ),
      },
    ],
  },
  {
    path: 'doctor',
    loadComponent: () =>
      import('./doctor/doctor.component').then((m) => m.DoctorComponent),
  },
  {
    path: 'faq',
    loadComponent: () =>
      import('./login/faqs/faqs.component').then((m) => m.FaqsComponent),
  },
  {
    path: 'clinic-policies',
    loadComponent: () =>
      import('./login/clinic-policies/clinic-policies.component').then(
        (m) => m.ClinicPoliciesComponent
      ),
  },
  {
    path: 'terms-of-service',
    loadComponent: () =>
      import('./login/terms/terms.component').then((m) => m.TermsComponent),
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./login/privacy-policy/privacy-policy.component').then(
        (m) => m.PrivacyPolicyComponent
      ),
  },
];