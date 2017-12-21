import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { ISeo } from '../interfaces/seo.interface';

@Injectable()
export class SeoService {

  private baseTitle = 'NG-BE 2018 - December 6 & 7, 2018 - Holiday Inn Ghent Expo';
  private baseDescription = 'Learn about the latest Angular developments and meet with experts from the Angular community while enjoying delicious foods and drinks';
  private baseUrl = 'https://ng-be.org';
  private baseImg = '/assets/img/share/home.jpg';

  constructor(private titleService: Title,
              private metaService: Meta) {

  }

  handle(data: ISeo) {

    this.handleTitle(data ? data.title : undefined);
    this.handleDescription(data ? data.description : undefined);
    this.handleUrl(data ? data.url : undefined);
    if (data.images && data.images.length) {
      data.images.forEach(image => this.handleImage(image))
    }
    // always add the default image anyway
    this.handleImage();

  }

  private handleTitle(title?: string) {

    if (title) {
      title = `${title} - ${this.baseTitle}`;
    } else {
      title = this.baseTitle;
    }

    this.titleService.setTitle(title);
  }

  private handleDescription(description?: string) {

    if (!description || description.length === 0) {
      description = this.baseDescription;
    }

    this.metaService.addTags([
      {name: 'description', content: description},
      {name: 'twitter:description', content: description},
      {property: 'og:description', content: description},
    ]);

  }

  private handleUrl(url?: string) {

    url = this.baseUrl + ( url && url.length ? url : '' );

    this.metaService.addTags([
      {property: 'og:url', content: url},
    ]);
  }

  private handleImage(image?: string) {

    if (!(image && image.length)) {
      image = this.baseImg;
    }
    image = this.baseUrl + image;

    this.metaService.addTags([
      {name: 'twitter:image', content: image},
      {property: 'og:image', content: image},
      {property: 'og:image:height', content: '630'},
      {property: 'og:image:width', content: '1200'},
    ]);

  }


}