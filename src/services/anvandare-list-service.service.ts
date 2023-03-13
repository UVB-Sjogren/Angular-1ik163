import { Injectable } from '@angular/core';
import { Anvandare } from '../models/anvandare.model';
@Injectable({
  providedIn: 'root'
})
export class AnvandareListServiceService {



  anvandarLista: Array<Anvandare>;
  constructor() {
    this.anvandarLista = [
      new Anvandare('test','test')];
  }
  getAnvandarlista(): Anvandare[] {
    return this.anvandarLista;
  }

  addSpel(addC: Anvandare) {
    this.anvandarLista.push(addC);
  }
}
