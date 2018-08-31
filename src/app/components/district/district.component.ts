import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {
public district: any;



  constructor(private http:HttpClient) {

 }

  ngOnInit() {
    // this.http.get("http://localhost:8080/districts")
    // // .subscribe((response) => {console.log(response); 
    // //   this.district=response;

    // });

  }

}
