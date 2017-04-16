import {Component} from '@angular/core';
import {NavService} from './nav.service';
import {OnInit} from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  applicationData: any;

  controllers: Array<any>;

  constructor(private navService: NavService, private router:Router) { }

  ngOnInit(): void {
    this.navService.getNavData().subscribe(res => this.applicationData = res);

    this.navService.getNavData().subscribe(applicationData => {
      this.controllers = applicationData.controllers.sort((a: any, b: any) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      });
    });
  }

  hasRoute(controllerName: string): boolean {
    return this.router.config.some((route: Route) => {
      if (route.path === controllerName+'s') {
        return true;
      }
    });
  }
}
