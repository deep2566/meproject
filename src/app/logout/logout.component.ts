import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private as :AuthenticationService,private router : Router) { }

  ngOnInit(): void {
    this.as.logout();
    this.router.navigate(['\login']);
  }

}
