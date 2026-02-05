import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { FilterPostsPipe } from '../pipes/filter-posts.pipe';
import { TruncatePipe } from '../pipes/truncate.pipe';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPostsPipe, TruncatePipe],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class ServicesComponent {
  searchTerm: string = '';
  posts$;

  constructor(private dataService: DataService) {
    this.posts$ = this.dataService.posts$;
  }
}
