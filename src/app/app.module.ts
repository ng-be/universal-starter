import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { ServiceWorkerModule } from '@angular/service-worker'

import { environment } from '../environments/environment';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';

const COMPONENTS = [
  AppComponent,
  HomeComponent,
];

const PROVIDERS = [

];

const IMPORTS = [
  BrowserModule.withServerTransition({appId: 'ngbe-app'}),
  // environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
  RouterModule.forRoot([
    ...AppRoutes
  ]),
  SharedModule
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...IMPORTS,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ...PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
