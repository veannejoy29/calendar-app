import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  @Input() appointment: any;
  @Output() delete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit();
  }
}
