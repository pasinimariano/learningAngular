import { Component } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de empleados';

  employees: Employee[] = [
    new Employee('Victor', 'Gomez', 'Presidente', 200000),
    new Employee('Mariano', 'Pasini', 'Gerente', 180000),
    new Employee('Agustina', 'Corio', 'Frontend', 150000),
    new Employee('Celeste', 'Ituarte', 'Backend', 150000),
  ]

  dates = []

  addNewDate(newDate: string) {
    this.dates.push(newDate)
  }
} 
