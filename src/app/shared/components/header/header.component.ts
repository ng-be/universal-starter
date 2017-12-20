import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/filter';

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
              private router: Router) {

    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {

        if (!this.navbarToggler.nativeElement.classList.contains('collapsed')) {
          this.navbarToggler.nativeElement.click();
        }
        if (this.isBrowser) {
          window.scroll(0, 0);
        }
      });

  }

}