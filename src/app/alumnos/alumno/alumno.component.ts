import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent {
  students = [
    {
      name: 'Victor',
      lastname: 'Gomez',
      course: 'Backend Dev'
    },
    {
      name: 'Mariano',
      lastname: 'Pasini',
      course: 'Frontend Dev'
    },
    {
      name: 'Melina',
      lastname: 'Gagino',
      course: 'Fullstack Dev'
    },
    {
      name: 'Miguel',
      lastname: 'Koch',
      course: 'SQL master'
    }
  ]
}
