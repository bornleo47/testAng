import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../services/userService/userservice.service';
import { employee } from '../../model/employee';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  public emp: any;
  public district: any;
  public dselected: number;

  constructor(private userService: UserserviceService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.emp = this.userService.getter();

    this.http.get("http://localhost:8080/districts").subscribe((r) => {
      console.log(r);
      this.district = r;
      this.emp.district_id = this.district.district_id;
    });
  }

  processForm() {
    if (this.emp.id == undefined) {
      this.emp.district_id = this.dselected;
      this.userService.createEmp(this.emp).subscribe(() => {
        console.log(this.emp);
        this.router.navigate(['/']);
      }, (error) => {
        console.log(error);
      });
    } else {
      this.userService.updateEmp(this.emp).subscribe((emp) => {
        console.log(emp);
        this.router.navigate(['/']);
      }, (error) => {
        console.log(error);
      });
    }
  }
}
