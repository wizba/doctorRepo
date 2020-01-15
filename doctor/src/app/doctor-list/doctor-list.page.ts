import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.page.html',
  styleUrls: ['./doctor-list.page.scss'],
})
export class DoctorListPage implements OnInit {
  ratings: number = 1;

  @ViewChild('rating', {static:true}) rating : any;
  constructor() { }

  ngOnInit() {
   


  }

  logRatingChange(rating){
    console.log("changed rating: ",rating);
  };

}
