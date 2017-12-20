import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrganisersComponent } from './components/organisers/organisers.component';
import { CommunityComponent } from './components/community/community.component';
import { SeoService } from './services/seo.service';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  OrganisersComponent,
  CommunityComponent
];

const PROVIDERS = [
  SeoService
];

const MODULES = [
  RouterModule
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  providers: [
    ...PROVIDERS
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