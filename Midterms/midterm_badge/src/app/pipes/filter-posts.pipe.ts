import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPosts',
  standalone: true
})
export class FilterPostsPipe implements PipeTransform {
  transform(posts: any[] | null, searchTerm: string): any[] {
    if (!posts) return [];
    if (!searchTerm) return posts;
    searchTerm = searchTerm.toLowerCase();
    return posts.filter(
      post =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.body.toLowerCase().includes(searchTerm)
    );
  }
}
