import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorChartPageRoutingModule } from './doctor-chart-routing.module';

import { DoctorChartPage } from './doctor-chart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorChartPageRoutingModule
  ],
  declarations: [DoctorChartPage]
})
export class DoctorChartPageModule {}
