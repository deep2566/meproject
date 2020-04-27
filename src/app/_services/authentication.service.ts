import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    public baseURL;
    public isloggedIn = false;

    constructor(private router: Router,private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.baseURL = environment.apiUrl;
    }

    public get currentUserValue(): User { 
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        console.log('call login');
        return this.http.post<any>(this.baseURL+`login`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.userDetails) {
                    this.isloggedIn = true;
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user.userDetails));
                    localStorage.setItem('token', user.session_key);
                    
                    this.currentUserSubject.next(user); 
                }

                return user;
            }));
    }

    logout() {
        this.isloggedIn = false;
        console.log('logout');
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
        this.currentUserSubject.next(null);
    }

    checklogin(){
        console.log('token '+localStorage.getItem('token'));
        if(localStorage.getItem('token')==null){
            this.router.navigate(['/login']);
        }
    }
}