import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrganisersComponent } from './components/organisers/organisers.component';
import { CommunityComponent } from './components/community/community.component';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  OrganisersComponent,
  CommunityComponent
];

const MODULES = [
  RouterModule
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MODULES
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedModule {
}