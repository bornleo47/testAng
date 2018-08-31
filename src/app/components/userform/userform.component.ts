import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../services/userService/userservice.service';
import { employee } from '../../model/employee';
import { Router } from '@angular/router';



@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  public empl= new employee();
  public emp: any;
  


  constructor(private userService: UserserviceService, private router: Router) { }

  ngOnInit() {
    this.emp = this.userService.getter();
  }



  processForm() {

    if (this.emp.id == undefined) {
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
