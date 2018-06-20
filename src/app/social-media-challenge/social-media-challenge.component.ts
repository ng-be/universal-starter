import {AfterViewInit, Component, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'ngbe-social-media-challenge',
  templateUrl: './social-media-challenge.component.html',
  styleUrls: [
    './social-media-challenge.component.scss'
  ]
})
export class SocialMediaChallengeComponent implements AfterViewInit {


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      (function (d, s, id) {
        let js: any;
        const fjs = d.getElementsByTagName(s)[0],
          p = 'https';
        if (!d.getElementById(id)) {
          js = d.createElement(s);
          js.id = id;
          js.async = true;
          js.src = p + '://platform.twitter.com/widgets.js';
          fjs.parentNode.insertBefore(js, fjs);
        }
      })(document, 'script', 'twitter-wjs');
    }
  }

}
