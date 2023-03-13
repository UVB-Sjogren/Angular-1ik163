import { Injectable } from '@angular/core';
import { Spel } from '../models/spel.model';
@Injectable({
  providedIn: 'root'
})
export class SpelListServiceService {
  spelLista = Spel[];

  constructor() {
    this.spelLista = [
      new Spel(
      "Great western trail",
      "Alexander Pfister",
      "eggertspiele", "2-4",
      "img/greatwestern.png",
      "America in the 19th century: You are a rancher and repeatedly herd your cattle from Texas to Kansas City, where you send them off by train. This earns you money and victory points. Needless to say, each time you arrive in Kansas City, you want to have your most valuable cattle in tow. However, the Great Western Trail not only requires that you keep your herd in good shape, but also that you wisely use the various buildings along the trail. Also, it might be a good idea to hire capable staff: cowboys to improve your herd, craftsmen to build your very own buildings, or engineers for the important railroad line. If you cleverly manage your herd and navigate the opportunities and pitfalls of Great Western Trail, you surely will gain the most victory points and win the game. —description from the publisher"),
      new Spel(
        "Race for the Galaxy",
        "Thomas Lehmann",
        "Rio Grande Games",
        "2-4",
        "img/raceforthegalaxy.png",
        "2018 UPDATE: The second edition of the game is improved for CVD (color blindness) and includes 5 revised cards from the original version and 6 New Worlds promo homeworlds. The promo homeworlds and first edition compatible Revised Cards are both available for purchase through the BGG store.In the card game Race for the Galaxy, players build galactic civilizations by playing game cards in front of them that represent worlds or technical and social developments. Some worlds allow players to produce goods, which can be consumed later to gain either card draws or victory points when the appropriate technologies are available to them. These are mainly provided by the developments and worlds that are not able to produce, but the fancier production worlds also give these bonuses. At the beginning of each round, players each select, secretly and simultaneously, one of the seven roles which correspond to the phases in which the round progresses. By selecting a role, players activate that phase for this round, giving each player the opportunity to perform that phase's action. For example, if one player chooses the settle role, each player has the opportunity to settle one of the planets from their hand. The player who has chosen the role, however, gets a bonus that applies only to them. But bonuses may also be acquired through developments, so you must be aware when another player also takes advantage of your choice of role.")
    ];
  }
  getSpellista(): Spel[]{ return this.spelLista; }
  addSpel(addC: Spel){ this.spelLista.push(addC); }
}
