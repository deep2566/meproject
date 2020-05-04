import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { first } from 'rxjs/operators';
import {AuthenticationService } from '../../_services';
import {AlertService } from '../notifications/alert.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['../../../../node_modules/ladda/dist/ladda-themeless.min.css']
})
export class LoginComponent implements OnInit {
   loginForm: FormGroup;
   loading = false;
   submitted = false;
   returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService
    ) {
        //redirect to home if already logged in
        // if (this.authenticationService.currentUserValue) { 
        //     this.router.navigate(['/']);
        // }
    }

    ngOnInit() {
        console.log(1);
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        //get return url from route parameters or default to '/' 
        this.returnUrl = 'dashboard';
    }

    //convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {

        console.log('asdf');
        this.submitted = true;

       // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                   if(data.code==200){
                     console.log('login seuccess', data);
                    //  localStorage.setItem('currentUser', JSON.stringify(data.userDetails));
					if(data.userDetails.role == 3 || data.userDetails.role == 2 ){
						this.returnUrl = "collections";
					}
                     this.router.navigate([this.returnUrl]);
                   }else{
                    this.alertService.error('Please enter correct username and password');
                    this.alertService.getAlert();
                    this.loading = false;
                    this.router.navigate(['/login']);
                   }
                },
                error => {
                    this.alertService.error(error);
                    this.alertService.getAlert();
                    this.loading = false;
                });
    }
}
