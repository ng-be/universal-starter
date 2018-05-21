import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {CodeOfConductComponent} from './code-of-conduct.component';
import {CodeOfConductRoutes} from './code-of-conduct.routes';
import {SharedModule} from '../shared/shared.module';

const COMPONENTS = [
  CodeOfConductComponent
];
const IMPORTS = [
  SharedModule,
  RouterModule.forChild([
    ...CodeOfConductRoutes
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
export class CodeOfConductModule {

}
