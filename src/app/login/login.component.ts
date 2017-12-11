import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedIn: boolean;
  message: string;
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login(user, pass): boolean{
    this.message = "";
    if(!this.auth.login(user, pass)){
      this.message = "Bad Creds";
      setTimeout(function(){
        this.message = "";

      }.bind(this),2500);
    }
    return false;
  }

  logout():boolean{
    this.auth.logout();
    return false;
  }

}
