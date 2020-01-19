
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../Services/Storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router,private storage: Storage,private myStorage:StorageService) {}

  login()
  {
    this.router.navigate(['tabs']);
  }
  

  ngOnInit() {

//     this.myStorage.setData('user',[ {
//       users:[
//       {email:'william@gmail.com',password:'123',bookingID:''},
//       {email:'william@gmail.com',password:'123',bookingID:''},
//       {email:'william@gmail.com',password:'123',bookingID:''},
//       {email:'william@gmail.com',password:'123',bookingID:''}
//     ]
//     }
//   ]
//   )
//   this.myStorage.setData('Doctors',[ {
//     users:[
//     {email:'william@gmail.com',password:'123',bookingID:''},
//     {email:'william@gmail.com',password:'123',bookingID:''},
//     {email:'william@gmail.com',password:'123',bookingID:''},
//     {email:'william@gmail.com',password:'123',bookingID:''}
//   ]
//   }
// ]
// ) 
}

}
