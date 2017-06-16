import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = ['black','white'];
  random_numbers = this.randomColors();

  randomColors(){
    var random_numbers = [];
    for(var i=0; i<150; i++) {
      random_numbers.push(Math.floor(Math.random() * 2));
    }
    return random_numbers;
  }
}
