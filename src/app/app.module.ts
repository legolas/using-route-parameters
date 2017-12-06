import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouteParameterComponent } from './route-parameter/route-parameter.component';
import { RouteDemoAppRoutes } from './router-demo-app-routes/router-demo-app-routes.module';


@NgModule({
  declarations: [
    AppComponent,
    RouteParameterComponent
  ],
  imports: [
    RouteDemoAppRoutes,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
