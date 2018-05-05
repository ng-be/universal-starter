import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {WorkshopDayComponent} from './workshop-day.component';
import {WorkshopDayRoutes} from './workshop-day.routes';
import {SharedModule} from '../shared/shared.module';

const COMPONENTS = [
  WorkshopDayComponent
];
const IMPORTS = [
  SharedModule,
  RouterModule.forChild([
    ...WorkshopDayRoutes
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
export class WorkshopDayModule {
}
