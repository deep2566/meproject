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

@Injectable()
export class ClientComissionService {
  dataUrl     = environment.apiUrl+'clientcomission';


  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<TableData>(this.dataUrl)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  deletePayment(id){
    return this.http.get(environment.apiUrl+'delete-payment/'+id)
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  addComment(data,invoiceId) { 
    console.log(data);
    return this.http.post(environment.apiUrl+'client/add-comment/'+invoiceId,data);
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
