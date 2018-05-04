import { WorkshopDayComponent } from './workshop-day.component';

export const WorkshopDayRoutes = [
  {
    path: '',
    component: WorkshopDayComponent,
    pathMatch: 'full',
    data: {
      seo: {
        title: 'Workshop Day',
        description: 'There will be 3 workshops the day before the conference. Please bring your own laptop and note that workshop tickets are sold separately.'
      }
    }
  }
];