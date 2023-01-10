import { AdminAuthService } from './../services/admin-auth.service';
import { usernameValidators } from './validators/username.validators';
import { Component, OnInit } from '@angular/core';
import { faRegistered } from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {



  constructor(private fb :FormBuilder,private adminAuth:AdminAuthService) {

  }
  ngOnInit():void{
  this.adminLoginData= this.fb.group({
    username:['',[Validators.email,Validators.required,usernameValidators.CannotContainSpace],usernameValidators.shouldBeUnique],
    password:['',[Validators.required, Validators.minLength(6)]]
  })

  }
  faRegistered = faRegistered;

  validateUsername(name:string){
    if(this.adminLoginData.get(name)?.invalid && this.adminLoginData.get(name)?.dirty){
      return true;
    }
    else{
      return false;
    }
  }
  Signin() {
    this.adminAuth.adminLogin(this.adminLoginData.value.username,this.adminLoginData.value.password);
    console.log(this.adminLoginData.value.username +' '+ this.adminLoginData.value.password);
   }
  getalert(ctname:string){
    //console.log(this.ft.get(ctname));

   return this.adminLoginData.get(ctname)?.touched && this.adminLoginData.get(ctname)?.invalid;
  }
  getuser(ctname:string){
    console.log(this.adminLoginData.get(ctname)?.value.length >0);
   return this.adminLoginData.get(ctname)?.value.length ==0;
  }
  adminLoginData = new FormGroup({
    username: new FormControl,
    password: new FormControl
  })

}
