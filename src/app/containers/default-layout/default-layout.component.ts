import {Component, OnInit } from '@angular/core';
import { navItems } from '../../_nav';
import { collectorNavItems } from '../../_collectorNav';
import { AuthenticationService } from '../../_services/authentication.service';
import { clientNavItems} from '../../_clientNav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  constructor(private AuthenticationService : AuthenticationService) { }

	public sidebarMinimized = false;
	public navItems = {};
	
  ngOnInit() {
    console.log('test');
    this.AuthenticationService.checklogin();
	var currentUser = JSON.parse(localStorage.getItem('currentUser'));
	if(currentUser.role == 1){
		this.navItems = navItems;
	}
	if(currentUser.role == 3){
		this.navItems = collectorNavItems;
  }
  
  if(currentUser.role == 2){
		this.navItems = clientNavItems;
	}
	console.log('login-user', JSON.parse(localStorage.getItem('currentUser')));
  }
  

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
