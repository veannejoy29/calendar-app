import { Component, Input } from '@angular/core';
import { AppointmentService } from './appointment.service';

// Define the Appointment interface here
interface Appointment {
  id: string;
  title: string;
  date: Date;
}

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  @Input() appointment!: Appointment;
  isDisabled: boolean = false;

  constructor(private appointmentService: AppointmentService) { }

  onDelete(): void {
    this.appointmentService.deleteAppointment(this.appointment.id);
  }

  onDragEnded(event: any): void {
    // Handle drag ended event
  }
}
