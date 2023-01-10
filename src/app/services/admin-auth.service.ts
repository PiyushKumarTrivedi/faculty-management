import { Router } from '@angular/router';
import { environment } from './../../enviornments/enviornment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
 adminsusername :string= environment.adminUsername;
 adminpassword :string= environment.adminpassword;
  constructor(private http:HttpClient,private router:Router) {

   }

   adminLogin(username:string, password:string){
     if(username==this.adminsusername  && password==this.adminpassword){
      console.log("successful");
      localStorage.setItem("username",username);
      localStorage.setItem("token",(Math.random()+1).toString(36).substring(7));
      console.log(localStorage.getItem('token'));
       this.router.navigate(['/admin/dashboard']);
     }else{
      console.log("login failed.");
     }
   }

   isAdminLoggedIn(){
  if(localStorage.getItem("token")){
    return true;
  }
  return false;
}
}
