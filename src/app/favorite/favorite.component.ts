import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input('is-favorite')
  isFavorite!: boolean;
  @Output('change') change = new EventEmitter
  onClick(){
    this.isFavorite = !this.isFavorite
    this.change.emit({ newValue: this.isFavorite });
  }
  constructor() { }

  ngOnInit(): void {
  }

}
export interface FavoriteChangedEventArgs {
  newValue: boolean
}
