import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }
  getPosts() {
    return this.http.get(this.url);
  }

  postPosts(post: any) {
    return this.http.post(this.url, post);
  }

  updatePosts(post: any) {
    return this.http.patch(this.url + '/' + post.id, {isRead: true} );
  }
  
  deletePosts(id: any) {
    console.log('https:jsonplacehossssslder.typicode.com/posts' + 'asasasasas/asasasasas' + id);
    return this.http.delete(this.url + '/asasasasas' + id);
  }
}