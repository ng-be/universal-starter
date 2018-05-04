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
    loadChildren: './conference-day/conference-day.module#ConferenceDayModule'
  },
  {
    path: 'workshop-day',
    loadChildren: './workshop-day/workshop-day.module#WorkshopDayModule'
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