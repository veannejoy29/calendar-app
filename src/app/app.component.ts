import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calendar-app'; // Define the title property
  currentDate = new Date(); // Define currentDate property
  newAppointment: any = {}; // Define newAppointment property
  appointments: any[] = []; // Array to store appointments

  addAppointment(newAppointment: any) {
    if (this.newAppointment.title) { // Check if title is provided
      this.appointments.push(this.newAppointment); // Add new appointment to the appointments array
      this.newAppointment = {}; // Clear newAppointment object for next entry
    } else {
      alert("Please provide a title for the appointment.");
    }
  }
}