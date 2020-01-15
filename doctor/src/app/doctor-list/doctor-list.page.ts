import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { DoctorDetailsPage } from '../doctor-details/doctor-details.page';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.page.html',
  styleUrls: ['./doctor-list.page.scss'],
})
export class DoctorListPage implements OnInit {
  ratings: number = 1;

  @ViewChild('rating', {static:true}) rating : any;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
   


  }

  logRatingChange(rating){
    console.log("changed rating: ",rating);
  };

  async presentModal() {
    const modal = await this.modalController.create({
      component: DoctorDetailsPage,
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }
    });
    return await modal.present();
  }
}
