import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learning Angular';
  author = 'Mariano L. Pasini';
  object = {
    learning: 'Angular',
    from: 'Pildoras Informaticas',
    love: 'Frontend'
  };
  array = [
    'React',
    'Redux',
    'CSS',
    'HTML',
    'Now Angular'
  ]
}
