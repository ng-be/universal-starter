import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const COMPONENTS = [
  AppComponent,
  HomeComponent,
];

const PROVIDERS = [
  {provide: 'isBrowser', useValue: true},
  {provide: 'isNode', useValue: false},
];


const IMPORTS = [
  BrowserModule.withServerTransition({appId: 'ngbe-app'}),
  RouterModule.forRoot([
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'location', loadChildren: './location/location.module#LocationModule'},
    {path: 'team', loadChildren: './team/team.module#TeamModule'},
    {path: 'code-of-conduct', loadChildren: './code-of-conduct/code-of-conduct.module#CodeOfConductModule'},
    {
      path: 'terms-and-conditions',
      loadChildren: './terms-and-conditions/terms-and-conditions.module#TermsAndConditionsModule'
    }
  ]),
  SharedModule
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...IMPORTS
  ],
  providers: [
    ...PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
