import { HomeComponent } from './home/home.component';

export const AppRoutes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: {
      seo: {

      }
    }
  },
  {
    path: 'location',
    loadChildren: './location/location.module#LocationModule'
  },
  {
    path: 'conference-day',
    loadChildren: './location/conference-day.module#ConferenceDayModule'
  },
  {
    path: 'workshop-day',
    loadChildren: './location/workshop-day.module#WorkshopDayModule'
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