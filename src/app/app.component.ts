import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public login: boolean;
  constructor( private auth: AuthService ) { 
    this.isLogin();
  }
  isLogin() {
    if (this.auth.estaAutenticado()) {
      return this.login = true;
    } else {
      return this.login = false;
    }
  }
}
