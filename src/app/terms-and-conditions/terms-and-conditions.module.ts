import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { TermsAndConditionsComponent } from './terms-and-conditions.component';
import { SharedModule } from '../shared/shared.module';

const COMPONENTS = [
  TermsAndConditionsComponent
];

const IMPORTS = [
  SharedModule,
  RouterModule.forChild([
    {path: '', component: TermsAndConditionsComponent, pathMatch: 'full'}
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