import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light p-3">
      <a class="navbar-brand" routerLink="/">Angular Forms</a>
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" routerLink="/register">Register Form</a></li>
        <li class="nav-item"><a class="nav-link" routerLink="/template">Template Form</a></li>
        <li class="nav-item"><a class="nav-link" routerLink="/reactive">Reactive Form</a></li>
        <li class="nav-item"><a class="nav-link" routerLink="/custom-form">Custom Form</a></li>
      </ul>
    </nav>

    <div class="container mt-4">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
