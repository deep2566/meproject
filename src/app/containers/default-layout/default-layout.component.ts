import {Component, OnInit } from '@angular/core';
import { navItems, navItemsAR } from '../../_nav';
import { collectorNavItems, collectorNavItemsAr } from '../../_collectorNav';
import { AuthenticationService } from '../../_services/authentication.service';
import { clientNavItems, clientNavItemsAr} from '../../_clientNav';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  constructor(private AuthenticationService : AuthenticationService, public translate: TranslateService) { 
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');    
  }

	public sidebarMinimized = false;
  public navItems = {};
  public currentUser:any;
	
  ngOnInit() {
    this.AuthenticationService.checklogin();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(window.navigator.languages)
    if(this.translate.defaultLang == 'en'){
      if(currentUser.role == 1){
        this.navItems = navItems;
      }
      if(currentUser.role == 3){
        this.navItems = collectorNavItems;
      }    
      if(currentUser.role == 2){
        this.navItems = clientNavItems;
      }
    }else{
      if(currentUser.role == 1){
        this.navItems = navItemsAR;
      }
      if(currentUser.role == 3){
        this.navItems = collectorNavItemsAr;
      }      
      if(currentUser.role == 2){
        this.navItems = clientNavItemsAr;
      }
    }
    
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    document.getElementsByTagName("html")[0].setAttribute('lang', lang);
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(lang == 'ar'){      
      document.getElementsByTagName("html")[0].setAttribute('dir', 'rtl');
      if(currentUser.role == 1){
        this.navItems = navItemsAR;
      }
      if(currentUser.role == 3){
        this.navItems = collectorNavItemsAr;
      }      
      if(currentUser.role == 2){
        this.navItems = clientNavItemsAr;
      }
    }else{
      document.getElementsByTagName("html")[0].setAttribute('dir', 'ltr');
      if(currentUser.role == 1){
        this.navItems = navItems;
      }
      if(currentUser.role == 3){
        this.navItems = collectorNavItems;
      }
      
      if(currentUser.role == 2){
        this.navItems = clientNavItems;
      }
    }
  }
}
