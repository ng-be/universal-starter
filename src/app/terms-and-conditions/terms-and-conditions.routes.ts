import { TermsAndConditionsComponent } from './terms-and-conditions.component';

export const TermsAndConditionsRoutes = [
  {
    path: '',
    component: TermsAndConditionsComponent,
    pathMatch: 'full',
    data: {
      seo: {
        title: 'Terms & Conditions',
        description: 'Please comply with our terms & conditions.'
      }
    }
  }
];