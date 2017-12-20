import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { TermsAndConditionsComponent } from './terms-and-conditions.component';
import { SharedModule } from '../shared/shared.module';
import { TermsAndConditionsRoutes } from './terms-and-conditions.routes';

const COMPONENTS = [
  TermsAndConditionsComponent
];

const IMPORTS = [
  SharedModule,
  RouterModule.forChild([
    ...TermsAndConditionsRoutes
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
export class TermsAndConditionsModule {

}