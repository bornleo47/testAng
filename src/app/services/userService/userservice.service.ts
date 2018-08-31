
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { employee } from '../../model/employee';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private baseUrl: string = "http://localhost:8080";
  private emp = new employee();

  constructor(private http: HttpClient) {

  }


  getUsers() {
    return this.http.get(this.baseUrl + '/users');

  }


  getDistricts() {
    return this.http.get(this.baseUrl + '/districts');

  }



  deleteUser(id: number) {

    return this.http.delete(this.baseUrl + '/users/' + id);

  }


  createEmp(emp: employee) {
    return this.http.post(this.baseUrl + '/save', emp);



  }


  updateEmp(emp: employee) {
    return this.http.put(this.baseUrl + '/save', emp);
  }

  setter(emp: employee) {
    this.emp = emp;
  }

  getter() {
    return this.emp;
  }



}
