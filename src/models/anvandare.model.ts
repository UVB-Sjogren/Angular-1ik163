export class Anvandare {
  #anvandarnamn: String;
  #losenord: String;
  constructor(losen: String, anv: String) {
    this.#losenord = losen;
    this.#anvandarnamn = anv;
  }

  get losenord() {
    return this.#losenord;
  }

  set losenord(losenord) {
    this.#losenord = losenord;
  }

  get anvandarnamn() {
    return this.#anvandarnamn;
  }

  set anvandarnamn(anvandarnamn) {
    this.#anvandarnamn = anvandarnamn;
  }
}
export class UserListServiceService {
  users: Anvandare[];
  constructor() {
    this.users =[];
  }
}
