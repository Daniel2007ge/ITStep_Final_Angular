import { Component } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent {
  funcOpen (e:number) {
    const box_hotels = document.getElementById(
      'container-hotels',
    ) as HTMLDivElement | null;
    if (box_hotels != null) {
      box_hotels.style.display = "none"
    }

    const box_home = document.getElementById(
      'container-home',
    ) as HTMLDivElement | null;
    if (box_home != null) {
      box_home.style.display = "block"
    }
  }
}