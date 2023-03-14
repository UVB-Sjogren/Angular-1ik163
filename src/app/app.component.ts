// @ts-ignore

import {Component, inject,onInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements onInit{

  openNav() {
    let mysidenav = document.getElementById('mySidenav');
    let main = document.getElementById('main');
    let pil = document.getElementById('pil');
    // @ts-ignore
    mysidenav.style.width = '200px';
    // @ts-ignore
    main.style.marginLeft = "200px";
    // @ts-ignore
    pil.style.display = "none";
  }

  closeNav(): void {
    let mysidenav = document.getElementById('mySidenav');
    let main = document.getElementById('main');
    let pil = document.getElementById('pil');
    // @ts-ignore
    mysidenav.style.width = '0';
    // @ts-ignore
    main.style.marginLeft = "0";
    // @ts-ignore
    pil.style.display = "block";
  }
}
