import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator App';
  num1 = 0
  num2 = 0
  result

  sum():void {
    this.result= this.num1 + this.num2
  }

  dif():void {
    this.result= this.num1 - this.num2
  }

  mult():void {
    this.result= this.num1 * this.num2
  }

  split():void {
    if (this.num2 === 0) {
      this.result= 'No se puede dividir por cero'
    } else {
      this.result= this.num1 / this.num2
    }
  }
}
