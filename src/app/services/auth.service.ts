import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() {
    if( localStorage.getItem('username')){
      console.log('User is already logged in!');
    }
   }

   login(user:string, password:string):boolean{

     if(user === 'user' && password === 'password'){
       localStorage.setItem('username',user);
       return true;
     }
     return false;
   }

   logout():any{
     localStorage.removeItem('username');
     console.log(this.isLoggedIn());
   }
   getUser(): any{
     return localStorage.getItem('username');
   }

   isLoggedIn(){
     return this.getUser()!==null;
   }
}
