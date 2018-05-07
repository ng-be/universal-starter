import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngbe-organisers',
  templateUrl: './organisers.component.html',
  styleUrls: [
    './organisers.component.scss'
  ]
})
export class OrganisersComponent {

  @Input() banner = false;

  constructor() {
  }

}
