import { AdminDataService } from './../../../services/admin/admin-data.service';
import { Ifaculty } from './../../../Models/Ifaculty';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty-data',
  templateUrl: './faculty-data.component.html',
  styleUrls: ['./faculty-data.component.css']
})
export class FacultyDataComponent implements OnInit {

  facultyDetailsForm = new FormGroup({
    _id: new FormControl(),
    faculty_number: new FormControl(),
    _faculty_name: new FormControl(),
    email: new FormControl(),
    mobile: new FormControl(),
    department: new FormControl(),
    birth_date: new FormControl(),
    joining_year: new FormControl(),
    adhar_card_number: new FormControl(),
    password: new FormControl(),

  });


  constructor(private fb: FormBuilder,private dataservice:AdminDataService) {


  }

  private _FacultyObj: Ifaculty = {

    _id:'',
    faculty_number:0,
    faculty_name:'',
    joining_year: 0,
    birth_date :'',
    department:'',
    mobile:'',
    adhar_card:'',
    email:'',
    password:''

  };
  public get FacultyObj(): Ifaculty {
    return this._FacultyObj;
  }
  public set FacultyObj(value: Ifaculty) {
    this._FacultyObj = value;
  }


  ngOnInit(): void {
   this.allFaculties=[];
this.facultyDetailsForm = this.fb.group({

  _id: ['', Validators.required],
  faculty_number: ['', Validators.required],
  _faculty_name: ['', Validators.required],
  email: ['', [Validators.required,Validators.email]],
  mobile: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
  department: ['', Validators.required],
  birth_date: ['', Validators.required],
  joining_year: ['', Validators.required],
  adhar_card_number: ['', Validators.required],
  password: ['', [Validators.required,Validators.minLength(6)]],

})
 this.getAllFaculties();
  }

  allFaculties :Ifaculty[]=[];

  AddFaculty(){
    console.log(this.facultyDetailsForm.value);
    this.FacultyObj.adhar_card = this.facultyDetailsForm.value.adhar_card_number;
    this.FacultyObj.birth_date = this.facultyDetailsForm.value.birth_date;
    this.FacultyObj.department = this.facultyDetailsForm.value.department;
    this.FacultyObj.email = this.facultyDetailsForm.value.email;
    this.FacultyObj.faculty_name = this.facultyDetailsForm.value._faculty_name;
    this.FacultyObj.joining_year = this.facultyDetailsForm.value.joining_year;
    this.FacultyObj.mobile = this.facultyDetailsForm.value.mobile;
    this.FacultyObj.password = this.facultyDetailsForm.value.password;
    this.FacultyObj._id = this.getFacultyId().toString();
  this.dataservice.addFaculty(this.FacultyObj).subscribe(res=>{
    console.log("Faculty add successfully.")
    this.ngOnInit();

  },err=>{
     console.log(err)
  });
  }

getFacultyId(){
  if(this.allFaculties.length===0){
    return 1;
  }else{
    return this.allFaculties.length+1;
  }
}

getAllFaculties(){
  this.dataservice.getAllFaculties().subscribe(result=>{
    this.allFaculties = result;
    console.log(result)
  },err=>{
   console.log( err);
  })
}
  ValidateFields(ctname:string){
    //console.log(this.ft.get(ctname));

   return this.facultyDetailsForm.get(ctname)?.touched && this.facultyDetailsForm.get(ctname)?.invalid;
  }
}
