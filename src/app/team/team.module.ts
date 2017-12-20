import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { TeamComponent } from './team.component';
import { SharedModule } from '../shared/shared.module';
import { TeamRoutes } from './team.routes';

const COMPONENTS = [
  TeamComponent
];

const IMPORTS = [
  SharedModule,
  RouterModule.forChild([
    ...TeamRoutes
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