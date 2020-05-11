import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface UserData {
  name: string;
  email: string;
  regDate: string;
  city: string;
  age: number;
}

export interface TableData extends Array<UserData> {}


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  uri           = environment.apiUrl+'client';
  dataUrl       = environment.apiUrl+'clients';
  clientFeeUrl  = environment.apiUrl+'clientfee';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<TableData>(this.dataUrl)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
  getFee(id) {
    return this.http.get(`${this.clientFeeUrl}/${id}`);
  }

  add(name,email,phone,address,username,password,fields) {
    const obj = {
      name,email,phone,address,username,password,fields
    };
    console.log(obj);
    return this.http.post(`${this.uri}/add`, obj);
  }

  edit(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  update(name,email,phone,address,id,fields) {
      const obj = {
        name,email,phone,address,fields
      };
     return this
        .http
        .post(`${this.uri}/update/${id}`, obj);
  }

  delete(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }

  updateFee(id,fields){
    console.log('check field');
    console.log(fields);
   return this
      .http
      .post(`${this.clientFeeUrl}/update/${id}`, fields);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
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
