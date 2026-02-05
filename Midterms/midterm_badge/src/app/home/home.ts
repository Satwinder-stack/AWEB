import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Post } from '../services/data.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html'
})
export class HomeComponent {
  today = new Date();
  latestPosts$: Observable<Post[]>;

  constructor(private dataService: DataService) {
    this.latestPosts$ = this.dataService.posts$.pipe(
      map(posts => posts ? posts.slice(0, 5) : [])
    );
  }
}
