import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'; 
@Injectable({
  providedIn: 'root'
})
export class StorageService {

constructor(public storage: Storage) 
{ 
  
}
 //sets data 
 storageData:any[]=[];
 setData(key,value)
 {
      return this.storage.set(key,value);
 }

 //used for registration
 getData(key)
 {
  return this.storage.get(key);
 }

 //refreshes the
async refresh(key)
{
  await this.getData(key).then(
    (data)=>{
      //console.log(data.users)
      this.storageData=data.users|| [];
      console.log(this.storageData);
    }
  );
  
}

}
