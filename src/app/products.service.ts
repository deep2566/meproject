
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../environments/environment';

export interface UserData {
  ProductName: string;
  ProductDescription: string;
  ProductPrice: number;
}

export interface TableData extends Array<UserData> {}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri = environment.apiUrl+'user';

  constructor(private http: HttpClient) { }

  add(name,username,email,password,role) {
    const obj = {
      name,username,email,password,role
    };
    return this.http.post(`${this.uri}/add`, obj);
  }

  getRoles() {
    const roleurl = environment.apiUrl+'role';
    return this
           .http
           .get(roleurl).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
          );
  }

  getProducts() {
    return this
           .http
           .get<TableData>(`${this.uri}`).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
          );
  }

  editProduct(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateProduct(name,role,id) {
      const obj = {
        name,role
      };
     return this
        .http
        .post(`${this.uri}/update/${id}`, obj);
  }

  deleteProduct(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }

  private handleError(error: HttpErrorResponse) {
    console.log('error');
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      console.log('server error');
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
       
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}