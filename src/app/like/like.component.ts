import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'hearth-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input("is-liked")
  isLiked!: boolean;
  @Input("likesCount")
  likesCount!: number;
  @Output("liked")  liked = new EventEmitter;
  onClick() {
    this.likesCount += (this.isLiked) ? -1 : 1
    this.isLiked = !this.isLiked;
    this.liked.emit({ newValue:this.isLiked });
  }
}

export interface LikedChangedEventArgs {
  newValue: boolean
}
