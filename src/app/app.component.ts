import { Component, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  public login: boolean = false;
  constructor( private auth: AuthService, private router: Router) { 

    if (this.auth.estaAutenticado()) {
      this.login = true;
    } else {
      this.login = false;
    }

  }

  ngOnChanges() {

    if (this.auth.estaAutenticado()) {
      this.login = true;
    } else {
      this.login = false;
    }
    
  }

}
