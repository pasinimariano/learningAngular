import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent  {
  @Output() newDate = new EventEmitter<string>();

  addNewDate(value: string) {
    this.newDate.emit(value);
  }
}

