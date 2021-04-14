import { LikedChangedEventArgs } from './like/like.component';
import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "titolo",
    isFavorite: false,
    likesCount: 10,
    isLiked: false
  }
  viewMode = "title";
  courses = [
    { id: 1, name: 'course1 ' },
    { id: 1, name: 'course2 ' },
    { id: 1, name: 'course3 ' },
  ]




  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorites Changed", eventArgs);
  }
  onLikedChanged(eventArgs: LikedChangedEventArgs) {
    console.log("LIKED!!!!", eventArgs);
  }
}
