import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { CodeOfConductComponent } from './code-of-conduct.component';
import { SharedModule } from '../shared/shared.module';

const COMPONENTS = [
  CodeOfConductComponent
];
const IMPORTS = [
  SharedModule,
  RouterModule.forChild([
    {path: '', component: CodeOfConductComponent, pathMatch: 'full'}
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