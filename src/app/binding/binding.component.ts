import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  alert = 'Pasa por arriba'
  actualState = 'Learning'
  checked = true

  setActualState(event:Event) {
    this.actualState= (<HTMLInputElement>event.target).value
    if(this.actualState === 'Break') {
      this.checked= false
    }
  }

  showAlert() {
    this.alert = 'Pasaste y cambie la propiedad'
  }

  twoWayBinding= 'Initial'
}
