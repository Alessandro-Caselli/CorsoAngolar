import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
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
    this.service.getAll()
      .subscribe(posts => this.posts = <any[]>posts);
  }

  createPost(input: HTMLInputElement) {
    let post:any = { title: input.value };
    this.posts.splice(0, 0, post);
    input.value = '';

    this.service.create(post)
      .subscribe(
        (newPost:any) => {
          post.id = newPost.id ;
          console.log(post);
          console.log(newPost.id);
      },
       (error: AppError) => {
         this.posts.splice(0,1);
         if (error instanceof BadInput) {
            //this.form.setErrors(error.originalError);
       }
         else throw error;
       });
  }

  updatePost(post: any) {
    this.service.update(post)
      .subscribe(updatedPost => console.log(updatedPost));
  }

  deletePost(post: any){
    console.log(this.posts);
    let index = this.posts.indexOf(post);
    console.log("index:  ", index);
    let x = this.posts.splice(index, 1);
    console.log("cancellato:     ", x);
    console.log(this.posts);
    this.service.delete(post.id)
      .subscribe(
        null,
        (error: AppError ) => {
          this.posts.splice(index, 0, post); 
          if ((error instanceof NotFoundError)) {
            alert('This post has already been deleted.');
            console.log(error);
          }
          else {
            console.log('errore del cazzo');
            throw error;
        }});
  }
}