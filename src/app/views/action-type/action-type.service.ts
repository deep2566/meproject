import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { throwError, from } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface ActionData {
  id: number;
  name: string;
  level: number;
  parent_level: number;
  status: number;
}

export interface TableData extends Array<ActionData> {}

@Injectable({
  providedIn: 'root'
})
export class ActionTypeService {

  dataUrl     = environment.apiUrl+'actions';
  uri         = environment.apiUrl+'actions';
  actionurl   = environment.apiUrl+'actions';
  baseurl     = environment.apiUrl;

  constructor(private http: HttpClient) { }

  
  getData() {
    return this.http.get<TableData>(this.dataUrl)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  getAction() {
    return this.http.get(this.actionurl)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }


  add(name,level) {
    const obj = {
      name,level
    };
    console.log(obj);
    return this.http.post(`${this.uri}/add`, obj);
  }


  

  addAction(level_one,level_two,level_three,notes,collection_id){
    const obj = {
      level_one,level_two,level_three,notes,collection_id
    };
    return this.http.post(`${this.uri}/addaction`, obj).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }




  

  delete(id, type) {
    return this
              .http
              .get(`${this.dataUrl}/delete/${id}/${type}`);
  }

  getComissions(id){
    return this.http.get(`${this.baseurl}invoice-generate/${id}`);
  }

  addDbtAmount(data) {
    return this.http.post(`${this.baseurl}collection/addDebtAmount`,data);
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
