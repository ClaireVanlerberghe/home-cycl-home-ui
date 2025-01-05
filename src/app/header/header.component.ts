import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  token: string | null = ''

  constructor(private router: Router) {

  }

  hideProfil() {
    this.token = localStorage.getItem('token')
    if(this.token === null) {
      this.router.navigate(['/login'])
    }
    else {
      this.router.navigate(['/profil'])
    }
  }

}
