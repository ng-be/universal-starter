import { ConferenceDayComponent } from './conference-day.component';

export const ConferenceDayRoutes = [
  {
    path: '',
    component: ConferenceDayComponent,
    pathMatch: 'full',
    data: {
      seo: {
        title: 'Conference Day',
        description: ''
      }
    }
  }
];