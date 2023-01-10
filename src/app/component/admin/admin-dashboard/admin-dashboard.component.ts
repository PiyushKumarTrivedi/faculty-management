import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent  implements OnInit{


  constructor(private router:Router) {


  }
  faculty:boolean=false;
  training:boolean=false;

  ngOnInit(){
    this.faculty=true;
    this.training=false;
  }
  setoff(){
    this.faculty=false;
  this.training=false;
  }
  showfacultydata(){
    this.faculty=true;
    this.training=false;
  }

  showtraningdata(){
    this.faculty=false;
    this.training=true;
  }
  signout(){
   localStorage.removeItem('token');
   this.router.navigate(['/admin/login'])
  }

}
