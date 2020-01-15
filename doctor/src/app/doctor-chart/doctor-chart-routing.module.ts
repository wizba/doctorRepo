import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorChartPage } from './doctor-chart.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorChartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorChartPageRoutingModule {}
