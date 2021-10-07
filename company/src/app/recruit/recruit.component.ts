import { Component, Input } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-recruit',
  templateUrl: './recruit.component.html',
  styleUrls: ['./recruit.component.css']
})
export class RecruitComponent {
  @Input() arr
  name: string = ''
  lastname: string = ''
  position: string = ''
  salary

  createEmployee(){
    let newEmployee = new Employee (
      this.name, this.lastname, this.position, this.salary
    )

    this.arr.push(newEmployee)
  }
}
