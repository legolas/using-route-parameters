import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteParameterComponent } from '../route-parameter/route-parameter.component';

const routes: Routes = [
  {
    path: ':id',
    component: RouteParameterComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: RouteParameterComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: false})
  ],
  exports: [
    RouterModule
  ]
})
export class RouteDemoAppRoutes {}
