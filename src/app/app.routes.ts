import { HomeComponent } from './home/home.component';

export const AppRoutes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: {
      seo: {
        meta: 'Learn about the latest Angular developments and meet with experts from the Angular community while enjoying delicious foods and drinks'
      }
    }
  },
  {
    path: 'location',
    loadChildren: './location/location.module#LocationModule'
  },
  {
    path: 'team',
    loadChildren: './team/team.module#TeamModule'
  },
  {
    path: 'code-of-conduct',
    loadChildren: './code-of-conduct/code-of-conduct.module#CodeOfConductModule'
  },
  {
    path: 'terms-and-conditions',
    loadChildren: './terms-and-conditions/terms-and-conditions.module#TermsAndConditionsModule'
  }
];