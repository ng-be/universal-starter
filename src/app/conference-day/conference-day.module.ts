import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { ConferenceDayComponent } from './conference-day.component';
import { ConferenceDayRoutes } from './conference-day.routes';
import { SharedModule } from '../shared/shared.module';

const COMPONENTS = [
  ConferenceDayComponent
];
const IMPORTS = [
  SharedModule,
  RouterModule.forChild([
    ...ConferenceDayRoutes
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
export class ConferenceDayModule {

}