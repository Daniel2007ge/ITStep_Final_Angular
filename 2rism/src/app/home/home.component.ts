import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  funcOpen (e:number) {
    if (e == 0) {
      localStorage.setItem("type", "hotel")
    } else {
      localStorage.setItem("type", "restaurant")
    }
    localStorage.setItem("place", "")
    localStorage.setItem("active", "")
    const box_home = document.getElementById(
      'container-home',
    ) as HTMLDivElement | null;
    if (box_home != null) {
      box_home.style.display = "none"
    }
  }
  ShowHide () {}
  filter () {}
  func2 (index:number) {}
}