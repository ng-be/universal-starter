import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SocialMediaChallengeComponent} from './social-media-challenge.component';
import {SharedModule} from '../shared/shared.module';
import {SocialMediaChallengeRoutes} from './social-media-challenge.routes';

const COMPONENTS = [
  SocialMediaChallengeComponent
];

const IMPORTS = [
  SharedModule,
  RouterModule.forChild([
    ...SocialMediaChallengeRoutes
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
export class SocialMediaChallengeModule {

}
