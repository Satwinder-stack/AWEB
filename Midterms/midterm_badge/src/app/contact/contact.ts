import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']  // <-- add this line
})
export class ContactComponent {
  onSubmit(event: Event) {
    event.preventDefault();
    alert('Thank you for reaching out!');
  }
}
