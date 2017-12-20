import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { TeamComponent } from './team.component';
import { SharedModule } from '../shared/shared.module';

const COMPONENTS = [
  TeamComponent
];

const IMPORTS = [
  SharedModule,
  RouterModule.forChild([
    {path: '', component: TeamComponent, pathMatch: 'full'}
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
export class TeamModule {

}