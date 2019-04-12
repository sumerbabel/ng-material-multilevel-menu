import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { constant as CONSTANT } from './constants';
import { MultilevelMenuService } from 'projects/ng-material-multilevel-menu/src/lib/multilevel-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appitems = CONSTANT.sidebarDemoLinks;
  config = CONSTANT.sidebarConfigurations;
  displayList = false;


  constructor(
    private router: Router,
    private multilevelMenuService: MultilevelMenuService
  ) {
    setTimeout(() => {
      this.displayList = true;
    }, 100);
  }

  selectedItem($event) {
    console.log($event);
  }

  selectedLabel($event) {
    console.log($event);
  }

  redirect(link) {
    this.router.navigate([link]);
    setTimeout(() => {
      this.displayList = true;
    }, 100);
  }

  expand(value:boolean){
   if (value) {
    this.multilevelMenuService.expandFalse();
   }else {
    this.multilevelMenuService.expandTrue();
   }
    
    
  }
}
