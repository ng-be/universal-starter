import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable()
export class SeoService {

  private baseTitle = 'NG-BE 2018 - December 6 & 7, 2018 - Holiday Inn Ghent Expo';

  constructor(private title: Title) {

  }

  handle(data) {

    if (data && data.seo) {
      if (data.seo.title) {
        this.title.setTitle(`${data.seo.title} - ${this.baseTitle}`);
      } else {
        this.title.setTitle(this.baseTitle);
      }
    }

  }

}