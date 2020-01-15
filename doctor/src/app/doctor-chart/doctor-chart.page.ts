import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-chart',
  templateUrl: './doctor-chart.page.html',
  styleUrls: ['./doctor-chart.page.scss'],
})
export class DoctorChartPage implements OnInit {

  messageList: any[] = [
  {
      name:'william',
      text:'my name is william Rabopape'
  }
  ,
  {
      name:'william',
      text:'my name is william Rabopape'
 }
  
];
  chatMessage: string = "hello niggar";

  constructor() { }

  ngOnInit() {
  }

  
}
