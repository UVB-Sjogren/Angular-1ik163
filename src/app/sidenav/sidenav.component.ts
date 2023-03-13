import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
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

  showField(show: any, hide1: any, hide2?: any, hide3?: any): void {
    if (hide2 && hide3 === undefined) {
      // @ts-ignore
      document.getElementById(show).style.display = "block";
      // @ts-ignore
      document.getElementById(hide1).style.display = "none";
    } else {
      if (hide3 === undefined) {
        // @ts-ignore
        document.getElementById(show).style.display = "block";
        // @ts-ignore
        document.getElementById(hide1).style.display = "none";
        // @ts-ignore
        document.getElementById(hide2).style.display = "none";
      } else {
        // @ts-ignore
        document.getElementById(show).style.display = "block";
        // @ts-ignore
        document.getElementById(hide1).style.display = "none";
        // @ts-ignore
        document.getElementById(hide2).style.display = "none";
        // @ts-ignore
        document.getElementById(hide3).style.display = "none";
      }
    }
  }
}
