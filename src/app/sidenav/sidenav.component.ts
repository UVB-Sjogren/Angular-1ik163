// @ts-ignore

import {Component, NgModule} from '@angular/core';
import {RouterModule, ROUTES, Routes} from "@angular/router";
import {ValkommenComponent} from "../landing/valkommen/valkommen.component";
import {LoginComponent} from "../landing/login/login.component";
import {RegisterComponent} from "../landing/register/register.component";
import {KontaktaComponent} from "../landing/kontakta/kontakta.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],

})

export class SidenavComponent {

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
