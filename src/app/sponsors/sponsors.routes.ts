import {SponsorsComponent} from './sponsors.component';

export const SponsorsRoutes = [
  {
    path: '',
    component: SponsorsComponent,
    pathMatch: 'full',
    data: {
      seo: {
        title: 'Sponsors',
        description: 'Sponsors make NG-BE possible so make sure to check out their website and visit their booth at the conference!'
      }
    }
  }
];
