import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorListPage } from './doctor-list.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorListPageRoutingModule {}
