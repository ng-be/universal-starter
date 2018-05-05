import { LocationComponent } from './location.component';

export const LocationRoutes = [
  {
    path: '',
    component: LocationComponent,
    pathMatch: 'full',
    data: {
      seo: {
        title: 'Location',
        description: 'Holiday Inn Ghent Expo - Maaltekouter 3 - 9051 Ghent, Belgium - All NG-BE tickets include free private car parking space.'
      }
    }
  }
];
