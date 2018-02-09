import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedIn: boolean;

  constructor(private authService: AuthService) {
    this.loggedIn = false;
  }

  ngOnInit() {
  }

  login(user, password){
    this.loggedIn = this.authService.login(user,password);
    if(this.loggedIn === true){

    }
  }

  logout(){
    this.authService.logout();
    this.loggedIn = false;
  }

}
