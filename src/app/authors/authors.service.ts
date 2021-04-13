import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  authorsList = ["author1", "author2", "author3"]

  constructor() { }

  getAuthors(){
    return this.authorsList;
  }
}
