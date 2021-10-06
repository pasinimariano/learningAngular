import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  aprendiendo= true;

  setCoffe() {
    this.aprendiendo= false
  }

  setContinue() {
    this.aprendiendo = true
  }
}
