import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  { 
    path: 'tabs',
     loadChildren: './tabs/tabs.module#TabsPageModule' 
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'doctor-list',
    loadChildren: () => import('./doctor-list/doctor-list.module').then( m => m.DoctorListPageModule)
  },
  {
    path: 'doctor-chart',
    loadChildren: () => import('./doctor-chart/doctor-chart.module').then( m => m.DoctorChartPageModule)
  },
  {
    path: 'doctor-details',
    loadChildren: () => import('./doctor-details/doctor-details.module').then( m => m.DoctorDetailsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
