import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'home-cycl-home-ui';
  showHeaderFooter: boolean = true;
  

  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event.url) {
        this.checkRoute(event.url);
      }
    });
   }

   //N'affiche pas le header sur les pages login et signup
   checkRoute(url: string) {
    const noHeaderFooterRoutes = ['/login', '/signup'];
    this.showHeaderFooter = !noHeaderFooterRoutes.includes(url);
  }

}
