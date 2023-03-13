// @ts-ignore

import {Component, inject} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  lista = [];
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

  //sends a response text to an entity identfied by an id in Html.
  response(entity: any, message: any) {
    // @ts-ignore
    document.getElementById(entity).innerHTML = message;
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

//  checks if the entered login information is valid and sends response
  checkLoginEntry() {
    // @ts-ignore
    let namn = document.getElementById("anv").value;
    // @ts-ignore
    let lösenord = document.getElementById("pass").value;
    if (namn === "" && lösenord === "") {
      this.response("logsvar", "Inget användarnamn eller lösenord angivet");
    } else if (namn === "") {
      this.response("logsvar", "Inget användarnamn angivet");
    } else if (lösenord === "") {
      this.response("logsvar", "Inget lösenord angivet");
    }
    this.checkLogin()
  }

//  Checks if the entered userdata can be accepted into the list (min 8 symbols with minimum two capital letters an one number)
  checkRegEntry() {
    // @ts-ignore
    let namn = document.getElementById("reganv").value;
    // @ts-ignore
    let lösenord = document.getElementById("regpass").value;
    // @ts-ignore
    let lösrep = document.getElementById("regpassrep").value;

    for (let i = 0; i < this.lista.length; i++) {
      // @ts-ignore
      if (this.lista[i].användarnamn == namn) {//Check list for Username to prevent duplicate-------*/
        this.response("regsvar", "Användarnamnet upptaget, vänligen välj ett annat.");
        return;
      }
    }
    if (namn === "" && lösenord === "") {
      this.response("regsvar", "Inget användarnamn eller lösenord angivet.");
      return;
    } else if (namn === "") {
      this.response("regsvar", "Inget användarnamn angivet.");
      return;
    } else if (lösenord === "") {
      this.response("regsvar", "Inget lösenord angivet.");
      return;
    } else if (lösenord != lösrep) {
      this.response("regsvar", "Båda lösenordsfälten måsete vara identiska.");
    } else
      this.checkPassword(namn, lösenord);
  }

//  Checks if lösenord is within specified complexity
  checkPassword(namn: any, lösenord: any) {
    if (lösenord.length < 8) { //Password length
      this.response("regsvar", "Lösenordet är för kort, Måste vara minst 8 tecken långt.");
    } else if (this.controlPassword(lösenord, /[A-Z]/g) < 2) { //Number of Capital letters
      this.response("regsvar", "Lösenordet Har för få stora bokstäver. Måste avra minst två.");
    } else if (this.controlPassword(lösenord, /[0-9]/g) < 1) { //Number of Numbers
      this.response("regsvar", "Lösenordet Har för få nummer. Måste vara minst ett.");
    } else {
      this.regUser(namn, lösenord); //Registers the user to the list
      this.response("regsvar", "Användare " + namn + " registrerad.");
    }
  }

//looks for an expression in tring to find coorect number of capitals and numbers in entered password

  controlPassword(str: any, expr: any) {
    return str.match(expr);
  }

// Function to check if the entered information corresonds with object in the list of users "list".
  checkLogin() {
    // @ts-ignore
    let namn = document.getElementById("anv").value;
    // @ts-ignore
    let lösenord = document.getElementById("pass").value;
    let found = false;

    // @ts-ignore
    for (let i = 0; i < this.lista.length; i++)
      { // @ts-ignore
        if (this.lista[i].användarnamn == namn && this.lista[i].lösenord == lösenord) {
                this.response("logsvar", "Login accepted, moving to landingpage.");
                found = true;
              }
      }
    if (found) {
      location.href = "landning.html";
    }
    this.response("logsvar", "Vänligen ange registrerat användarnamn och lösenord.");
  }

// Registers user to list
  regUser(anv: any, pass: any) {
    // @ts-ignore
    lista.push(new användare(anv, pass));
  }
}
//  User class for registering and accepting users to the page
class Användare {
  #användarnamn: any;
  #lösenord: any;
  constructor(lösen: any, anv: any) {
    this.#lösenord = lösen;
    this.#användarnamn = anv;
  }

  get lösenord() {
    return this.#lösenord;
  }

  set lösenord(lösenord) {
    this.#lösenord = lösenord;
  }

  get användarnamn() {
    return this.#användarnamn;
  }

  set användarnamn(användarnamn) {
    this.#användarnamn = användarnamn;
  }
}

class Spel {
  #namn: any;
  #designer: any;
  #utgivare: any;
  #antalspelare: any;
  #imgurl: any;
  #beskrivning: any;

  constructor(nam: any, des: any, utg: any, ant: any, img: any, bes: any) {
    this.#namn = nam;
    this.#designer = des;
    this.#utgivare = utg;
    this.#antalspelare = ant;
    this.#imgurl = img;
    this.#beskrivning = bes;
  }
}





