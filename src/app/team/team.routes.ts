import {TeamComponent} from './team.component';

export const TeamRoutes = [
  {
    path: '',
    component: TeamComponent,
    pathMatch: 'full',
    data: {
      seo: {
        title: 'Team',
        description: 'NG-BE would not be possible without the help of its fantastic Core Team.'
      }
    }
  }
];
