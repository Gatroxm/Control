import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: []
})
export class NavBarComponent {

  @Input() login: boolean;
  constructor( private auth: AuthService, private router: Router) { }
  
  salir() {
    this.auth.logOut();
    this.router.navigateByUrl('/login');
  }

}
