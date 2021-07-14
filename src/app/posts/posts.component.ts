import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts!: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {
    http.get(this.url)
      .subscribe(response => {
        this.posts = <any[]> response;
      })
  }

  createPost(input: HTMLInputElement) {
    let post:any = { title: input.value };
    input.value = '';

    this.http.post(this.url, post)
      .subscribe(response => {
        post.id = response;
        this.posts.splice(0, 0, post)
        console.log(response);
      })
  }

  updatePost(post: any) {
    this.http.patch(this.url + '/' + post.id, {isRead: true})
      .subscribe(response => {
        console.log(response)
      })
  }
}