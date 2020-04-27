import {Component, OnInit } from '@angular/core';
import { navItems } from '../../_nav';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  constructor(private AuthenticationService : AuthenticationService) { }

  ngOnInit() {
    console.log('test');
    this.AuthenticationService.checklogin();
  }
  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
