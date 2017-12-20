import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { LocationComponent } from './location.component';
import { SharedModule } from '../shared/shared.module';
import { LocationRoutes } from './location.routes';

const COMPONENTS = [
  LocationComponent
];

const IMPORTS = [
  SharedModule,
  RouterModule.forChild([
    ...LocationRoutes
  ])
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...IMPORTS
  ]
})
export class LocationModule {

}