import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  private httpClient = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  public doctors: any;

  public addDoctors(newObj: any) {
    return this.httpClient.post(`${this.apiUrl}/doctors`, newObj);
  }

  public getDoctors() {
    return this.httpClient.get(`${this.apiUrl}/doctors`);
  }

  public getDoctor(email: string): Observable<any> {
    return this.httpClient.get<any>(
      `${this.apiUrl}/doctors/docname?email=${email}`
    );
  }

  assignDoctor(assignment: { patientId: string; doctorId: string }) {
    return this.httpClient.post(`${this.apiUrl}/assignDoctor`, assignment);
  }

  deleteDoctor(doctorId: string) {
    return this.httpClient.delete(`${this.apiUrl}/doctors/${doctorId}`);
  }
}
