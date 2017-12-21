import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { ISeo } from '../../interfaces/seo.interface';
import { SeoService } from '../../services/seo.service';

declare const window: any;

@Component({
  selector: 'ngbe-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.scss'
  ]
})
export class HeaderComponent {

  @ViewChild('navbarToggler') navbarToggler: ElementRef;

  constructor(@Inject('isBrowser') private isBrowser: boolean,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private seoService: SeoService) {

    this.handleNavigationEnd();

  }

  private handleNavigationEnd() {

    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .subscribe((route) => {

        if (!this.navbarToggler.nativeElement.classList.contains('collapsed')) {
          this.navbarToggler.nativeElement.click();
        }
        if (this.isBrowser) {
          window.scroll(0, 0);
        }

        const seoData = Object.assign({}, <ISeo>route.snapshot.data.seo, {
          url: this.router.routerState.snapshot.url
        });

        this.seoService.handle(seoData);

      });
  }

}