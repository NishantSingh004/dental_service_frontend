import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private httpClient = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  public doctors: boolean = false;
  public appointmentSet: any;

  private patientCountSubject = new BehaviorSubject<number>(
    this.getStoredPatientCount()
  );
  patientCount$ = this.patientCountSubject.asObservable();

  private getStoredPatientCount(): number {
    const storedCount = localStorage.getItem('patientCount');
    return storedCount ? +storedCount : 0;
  }

  setPatientCount(count: number): void {
    this.patientCountSubject.next(count);
    localStorage.setItem('patientCount', count.toString());
  }

  public createAppointment(appointmentObj: any) {
    return this.httpClient.post(`${this.apiUrl}/appointments`, appointmentObj);
  }

  public getAppointment() {
    return this.httpClient.get(`${this.apiUrl}/appointments`);
  }

  deleteAppointment(appointmentId: string) {
    return this.httpClient.delete(
      `${this.apiUrl}/appointments/${appointmentId}`
    );
  }
}
