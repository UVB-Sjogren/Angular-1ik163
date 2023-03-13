export class Spel {
  #namn: any;
  #designer: any;
  #utgivare: any;
  #antalspelare: any;
  #imgurl: any;
  #beskrivning: any;

  constructor(nam: String, des: String, utg: String, ant: String, img: String, bes: String) {
    this.#namn = nam;
    this.#designer = des;
    this.#utgivare = utg;
    this.#antalspelare = ant;
    this.#imgurl = img;
    this.#beskrivning = bes;
  }
}
