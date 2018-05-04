import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrganisersComponent } from './components/organisers/organisers.component';
import { CommunityComponent } from './components/community/community.component';
import { SeoService } from './services/seo.service';
import { LinkService } from './services/link.service';
import { LastYearsImpressionsComponent } from './components/last-years-impressions/last-years-impressions.component';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  OrganisersComponent,
  CommunityComponent,
  LastYearsImpressionsComponent
];

const PROVIDERS = [
  SeoService,
  LinkService
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