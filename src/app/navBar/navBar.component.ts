import { Component } from '@angular/core'

@Component({
    selector: 'app-nav-bar',
    templateUrl: './navBar.component.html',
    styleUrls: ['./navBar.component.css']
})

export class NavBarComponent{
    links= [
        'Home',
        'About',
        'Sign In'
    ]
}