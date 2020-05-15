import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { throwError, from } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { FormControl } from '@angular/forms';

export interface UserData {
  name: string;
  email: string;
  regDate: string;
  city: string;
  age: number;
}

export interface TableData extends Array<UserData> {}

@Injectable()
export class CollectionService {
  dataUrl     = environment.apiUrl+'collections';
  uri         = environment.apiUrl+'collection';
  actionurl   = environment.apiUrl+'actions';
  baseurl     = environment.apiUrl;

  constructor(private http: HttpClient) {}

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

  getTotalDetail() {
    return this.http.get(this.baseurl+'collection/get-total')
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }


  addPhone(phone,collection_id){
    const obj = {
      phone,collection_id
    };
    return this.http.post(`${this.uri}/addphone`, obj).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  addEmail(email,collection_id){
    const obj = {
      email,collection_id
    };
    return this.http.post(`${this.uri}/addemail`, obj).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
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

  addAttach(formData){
    return this.http.post(`${this.uri}/addattach`, formData);
  }

  downloadAttach(id){
    return this.http.get(`${this.uri}/check-attachment/`+id);
  }

  getClients(){
    return this.http.get(`${this.baseurl}clients`);
  }

  getCollectors(){
    return this.http.get(`${this.baseurl}collectors`);
  }

  add(data) {
    return this.http.post(`${this.uri}/add`, data);
  }

  addExcel(data) {
    return this.http.post(`${this.uri}/add/excel`, data);
  }

  edit(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  update(data,id) {
     return this
        .http
        .post(`${this.uri}/update/${id}`,data);
  }

  delete(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }

  getComissions(id){
    return this.http.get(`${this.baseurl}invoice-generate/${id}`);
  }

  addDbtAmount(data) {
    return this.http.post(`${this.baseurl}collection/addDebtAmount`,data);
  }

  private handleError(error: HttpErrorResponse) { 
    if (error.error instanceof ErrorEvent) {
      console.log('error1');
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      console.log('error2');
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

  requiredFileType() {
    return function (control: FormControl) {
      const file = control.value;
      if ( file ) {
        const extensions = ['csv','xlsx', 'xlsm', 'xltm', 'xltx' ]        
        const extension = file.split('.')[1].toLowerCase();
        if ( extensions.indexOf(extension) == -1 ) {
          return {
            requiredFileType: true
          };
        }
        
        return null;
      }
  
      return null;
    };
  }
}
