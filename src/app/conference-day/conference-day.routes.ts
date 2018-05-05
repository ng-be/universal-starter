import { ConferenceDayComponent } from './conference-day.component';

export const ConferenceDayRoutes = [
  {
    path: '',
    component: ConferenceDayComponent,
    pathMatch: 'full',
    data: {
      seo: {
        title: 'Conference Day',
        description: 'Learn about the latest Angular developments and meet with experts from the Angular community while enjoying delicious foods and drinks.'
      }
    }
  }
];
