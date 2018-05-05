import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SponsorsComponent} from './sponsors.component';
import {SponsorsRoutes} from './sponsors.routes';
import {SharedModule} from '../shared/shared.module';

const COMPONENTS = [
  SponsorsComponent
];
const IMPORTS = [
  SharedModule,
  RouterModule.forChild([
    ...SponsorsRoutes
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
export class SponsorsModule {

}
