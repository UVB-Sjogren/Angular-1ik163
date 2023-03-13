export class Spel {
  #namn: String;
  #designer: String;
  #utgivare: String;
  #antalspelare: String;
  #imgurl: String;
  #beskrivning: String;

  constructor(nam: String, des: String, utg: String, ant: String, img: String, bes: String) {
    this.#namn = nam;
    this.#designer = des;
    this.#utgivare = utg;
    this.#antalspelare = ant;
    this.#imgurl = img;
    this.#beskrivning = bes;
  }
}
