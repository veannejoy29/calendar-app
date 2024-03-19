import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointmentsSubject = new BehaviorSubject<[]>([]);
  appointments$ = this.appointmentsSubject.asObservable();

  constructor() { }

  deleteAppointment(appointmentId: string): void {
    // Implement delete logic here
  }
}
