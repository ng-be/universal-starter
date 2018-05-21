import {CodeOfConductComponent} from './code-of-conduct.component';

export const CodeOfConductRoutes = [
  {
    path: '',
    component: CodeOfConductComponent,
    pathMatch: 'full',
    data: {
      seo: {
        title: 'Code Of Conduct',
        description: 'NG-BE is a friendly conference where everyone should feel welcome, safe and comfortable to share ideas and engage in open discussion without threat of intimidation or public embarrassment. Please be respectful in person and on social media towards other delegates, speakers, organisers and staff.'
      }
    }
  }
];
