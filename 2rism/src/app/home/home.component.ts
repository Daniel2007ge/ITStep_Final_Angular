import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    func2 (e:number) {}

    filter() {
        localStorage.setItem("type", document.getElementsByTagName("select")[0].value)
        localStorage.setItem("place", document.getElementsByTagName("input")[0].value)
        localStorage.setItem("active", document.getElementsByTagName("select")[1].value)
    }
}