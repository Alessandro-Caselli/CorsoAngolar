import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';

/*  @Injectable({
  providedIn: 'root'
})  */
export class DataService {
  constructor(private url: string, private http: HttpClient) { }
  
  getAll() {
    return this.http.get(this.url)
        .pipe(catchError(this.handleError));
  }

  create(resource: any) {
    return this.http.post(this.url, resource)
      .pipe(catchError(this.handleError));
  }

  update(resource: any) {
    return this.http.patch(this.url + '/' + resource.id, {isRead: true} )
      .pipe(catchError(this.handleError));
  }
  
  delete(id: any) {
    return this.http.delete(this.url + '/' + id)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    switch (error.status) {
      case 400:
        return throwError(new BadInput(error));  
      case 404:
        return throwError(new NotFoundError(error));
      default:
        return throwError(new AppError(error));
    }
  }
}