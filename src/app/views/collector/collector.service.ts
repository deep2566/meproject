import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { throwError, from } from 'rxjs';
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
export class CollectorService {
  uri = environment.apiUrl+'collector';
  dataUrl = environment.apiUrl+'collectors';
  collectorFeeUrl = environment.apiUrl+'collectorfee';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<TableData>(this.dataUrl)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  getFee(id) {
    return this.http.get(`${this.collectorFeeUrl}/${id}`);
  }

  add(name,email,password,id_number,start_date,dob,username) {
    const obj = {
      name,email,password,id_number,start_date,dob,username
    };
    return this.http.post(`${this.uri}/add`, obj);
  }

  edit(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  update(name,email,id_number,start_date,dob,id) {
      const obj = {
        name,email,id_number,start_date,dob
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
      .post(`${this.collectorFeeUrl}/update/${id}`, fields);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // console.error('An error occurred:', error.error.message);
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
