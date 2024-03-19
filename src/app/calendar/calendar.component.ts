import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  appointments: any[] = []; // Array to store appointments
  appointmentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  addAppointment() {
    if (this.appointmentForm.valid) {
      this.appointments.push(this.appointmentForm.value);
      this.appointmentForm.reset();
    }
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
  }
}
