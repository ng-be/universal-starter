import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { LocationComponent } from './location.component';
import { SharedModule } from '../shared/shared.module';

const COMPONENTS = [
  LocationComponent
];

const IMPORTS = [
  SharedModule,
  RouterModule.forChild([
    {path: '', component: LocationComponent, pathMatch: 'full'}
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