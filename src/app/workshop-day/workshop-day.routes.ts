import { WorkshopDayComponent } from './workshop-day.component';

export const WorkshopDayRoutes = [
  {
    path: '',
    component: WorkshopDayComponent,
    pathMatch: 'full',
    data: {
      seo: {
        title: 'Workshop Day',
        description: ''
      }
    }
  }
];