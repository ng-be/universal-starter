import {Component, ElementRef, Inject, ViewChild, PLATFORM_ID} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';
import {map, filter} from 'rxjs/operators';

import {ISeo} from '../../interfaces/seo.interface';
import {SeoService} from '../../services/seo.service';
import {HostListener} from '@angular/compiler/src/core';

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
  mobileNavToggled = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private seoService: SeoService) {

    this.handleNavigationEnd();

  }

  toggleNav() {
    this.mobileNavToggled = !this.mobileNavToggled;
  }

  private handleNavigationEnd() {

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary')
      )
      .subscribe((route) => {

        if (!this.navbarToggler.nativeElement.classList.contains('collapsed')) {
          this.toggleNav();
        }
        if (isPlatformBrowser(this.platformId)) {
          window.scroll(0, 0);
        }

        const seoData = Object.assign({}, <ISeo>route.snapshot.data.seo, {
          url: this.router.routerState.snapshot.url
        });

        this.seoService.handle(seoData);

      });
  }

}
