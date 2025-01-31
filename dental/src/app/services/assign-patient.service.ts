import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AssignPatientService {
  private httpClient = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  public getPatientDetails(patientId: string) {
    return this.httpClient.get(
      `${this.apiUrl}/appointments/patientDetails?patientId=${patientId}`
    );
  }
}
