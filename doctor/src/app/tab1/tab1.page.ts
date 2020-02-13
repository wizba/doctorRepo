import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  options:Array<any>=[
    {
      label :"Find a doctor",
      icon :"../assets/icon/doctor.svg",
    },
    {
      label :"consult online",
      icon :"../assets/icon/chat.svg",
    },
    {
      label :"Find a hospital",
      icon :"../assets/icon/hospital.svg",
    }
    ,
    {
      label :"Find a hospital",
      icon :"../assets/icon/calendar.svg"
    }
  ]

  news=[
    {
      title:"",
      content:"",
      img:""
    }
  ]
  constructor(private router: Router) {}

  openDoctorlist()
  {
    this.router.navigate(['/doctor-list']);
  }

  openDoctorChart()
  {
    this.router.navigate(['/doctor-chart']);
  }

}
