import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private postsSubject = new BehaviorSubject<Post[]>([]);
  posts$: Observable<Post[]> = this.postsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchPosts();
  }

  fetchPosts() {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        tap(posts => this.postsSubject.next(posts))
      )
      .subscribe();
  }
}
