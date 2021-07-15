import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts !: any[];
  
  
  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(
        response => {
          this.posts = <any[]> response;
      },
        error => {
          alert('An unexpected error occurred.');
          console.log(error);
      });
  }

  createPost(input: HTMLInputElement) {
    let post:any = { title: input.value };
    input.value = '';
    this.service.postPosts(post)
      .subscribe(
        response => {
          post.id = response;
          this.posts.splice(0, 0, post)
          console.log(response);
      },
       error => {
          alert('An unexpected error occurred.');
          console.log(error);
      });
  }

  updatePost(post: any) {
    this.service.updatePosts(post)
      .subscribe(
        response => {
          console.log(response)
      },
        error => {
          alert('An unexpected error occurred.');
          console.log(error);
      });
  }

  deletePost(post: any){
    this.service.deletePosts(345)
      .subscribe(
        response => {
           let index = this.posts.indexOf(post);
          this.posts.splice(index, 1); 
      },
        (error: Response) => {
          if (error.status == 404)
            {
              alert('This post has already been deleted.');
              console.log(error);
            }
          else {
            alert('An unexpected error occurred.');
            console.log(error);
          }
      });
  }


}
