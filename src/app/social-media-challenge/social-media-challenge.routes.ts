import {SocialMediaChallengeComponent} from './social-media-challenge.component';

export const SocialMediaChallengeRoutes = [
  {
    path: '',
    component: SocialMediaChallengeComponent,
    pathMatch: 'full',
    data: {
      seo: {
        title: 'Social Media Challenge',
        description: 'Post your most original picture of you and/or your team showing the NG-BE logo and win a nice discount!'
      }
    }
  }
];
