import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  login(uname:string, pword:string){
    if (uname==='Heavenly Demon'&&pword==='Murim'){
      return 200;
    }else{return 403;}
  }
  logout(){
    this.router.navigate(['login'])
  }
}
