import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {
  show = false
  showing = ''

  handleShow() :void{
    this.show = !this.show
    if (this.show) {this.showing = 'Aparezco porque show es true'}
  }
}
