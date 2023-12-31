import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '2rism';

  LinkClick (e: number) {
    const navChildren = document.querySelector("nav")!.children;
    for (let index = 0; index < navChildren.length - 1; index++) {
      navChildren[index].setAttribute("style", "color: gray");
    }
    navChildren[e].setAttribute("style", "color: white");
  }

  funcOpen(e: number){
    if (e == 0) {
        localStorage.setItem("type", "hotel")
    } else {
        localStorage.setItem("type", "restaurant")
    }
    localStorage.setItem("place", "")
    localStorage.setItem("active", "")
  }

  ShowHide () {}
}
