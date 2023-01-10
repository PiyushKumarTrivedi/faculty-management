import { HttpClient } from '@angular/common/http';
import { Ifaculty } from './../../Models/Ifaculty';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  dataUrl :string="http://localhost:3001/admin/faculty";

  constructor(private http:HttpClient) { }

  addFaculty(facultyObj:Ifaculty):Observable<Ifaculty>{


    return this.http.post<Ifaculty>(this.dataUrl,facultyObj);

  }

  getAllFaculties():Observable<Ifaculty[]>{

    return this.http.get<Ifaculty[]>(this.dataUrl);
  }
}
