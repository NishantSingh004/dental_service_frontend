import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router } from '@angular/router';
import { DoctorService } from '../services/doctor.service';
import Swal from 'sweetalert2';

interface Appointmnets {
  _id: string;
  name: string;
  phone: string;
  email: string;
  role: string;
  __v: number;
}

@Component({
  selector: 'app-doctors-list',
  imports: [MatButtonModule, MatCardModule, CommonModule, MatGridListModule],
  templateUrl: './doctors-list.component.html',
  styleUrl: './doctors-list.component.css',
})
export class DoctorsListComponent {
  private doctorService = inject(DoctorService);
  private cdr = inject(ChangeDetectorRef);

  doctors: Appointmnets[] = [];

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe({
      next: (res: any) => {
        this.doctors = res;
        this.doctorService.doctors = res;
        localStorage.setItem('doc', JSON.stringify(res));

        this.cdr.detectChanges();
      },
    });
  }
  deleteDoctor(doctorId: string) {
    this.doctorService.deleteDoctor(doctorId).subscribe({
      next: () => {
        this.doctors = this.doctors.filter((doctor) => doctor._id !== doctorId);
        Swal.fire({
          title: 'Notification',
          text: 'Doctor deleted successfully!',
          icon: 'info',
          iconColor: 'rgb(3, 108, 95)',
          confirmButtonText: 'Close',
          confirmButtonColor: 'rgb(252, 151, 114)',
          scrollbarPadding: false,
        });
      },
      error: () => {
        Swal.fire({
          title: 'Notification',
          text: 'Failed to delete doctor!',
          icon: 'info',
          iconColor: 'rgb(3, 108, 95)',
          confirmButtonText: 'Close',
          confirmButtonColor: 'rgb(252, 151, 114)',
          scrollbarPadding: false,
        });
      },
    });
  }
  constructor(private router: Router) {}

  assignDoctor(patient: any) {
    this.router.navigate(['/admin/assign-doctor'], { state: { patient } });
  }
}
