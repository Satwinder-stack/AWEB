import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { HttpClientService } from './httpclient';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  httpusers$!: Observable<User[]>;

  constructor(private httpClient: HttpClientService) {
    this.httpusers$ = this.httpClient.getUsersRemotely();
  }
}
