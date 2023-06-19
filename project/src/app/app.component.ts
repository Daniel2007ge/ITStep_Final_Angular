import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  funcOpen (e:number) {
    if (e == 0) {
      localStorage.setItem("type", "hotel")
    } else {
        localStorage.setItem("type", "restaurant")
    }
    localStorage.setItem("place", "")
    localStorage.setItem("active", "")
  }
  ShowHide () {}
  filter () {}
  func2 (index:number) {}
}