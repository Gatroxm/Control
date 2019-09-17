import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: []
})
export class NavBarComponent {

  constructor( public auth: AuthService, private router: Router) { }
  
  salir() {
    this.auth.logOut();
    this.router.navigateByUrl('/login');
  }
}
