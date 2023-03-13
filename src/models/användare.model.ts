export class Användare {
  #användarnamn: String;
  #lösenord: String;
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
export class UserListServiceService {
  users: Användare[];
  constructor() {
    this.users =[];
  }
}
