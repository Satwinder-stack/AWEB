import { Component } from '@angular/core';
import { DatePipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './about.html'
})
export class AboutComponent {
  today = new Date();
}
