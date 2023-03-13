//Från inlogg
/* This javascript file handles user logn and handling of the login page.
This includes hiding and displaying fileds for login or registration.*/

var lista = []; //user list
var spellista = new Array();
//  User class for registering and accepting users to the page
class användare {
    #användarnamn;
    #lösenord;
    constructor(användarnamn, lösenord) {
        this.#användarnamn = användarnamn;
        this.#lösenord = lösenord;
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

class spel {
    #namn;
    #designer;
    #utgivare;
    #antalspelare;
    #imgurl;
    #beskrivning;

    constructor(nam, des, utg, ant, img, bes) {
        this.namn = nam;
        this.designer = des;
        this.utgivare = utg;
        this.antalspelare = ant;
        this.imgurl = img;
        this.beskrivning = bes;
    }
}

//  checks if the entered login information is valid and sends response
function checkLoginEntry() {
    let namn = document.getElementById("anv").value;
    let lösenord = document.getElementById("pass").value;
    if (namn === "" && lösenord === "") {
        response("logsvar", "Inget användarnamn eller lösenord angivet");
    }
    else if (namn === "") {
        response("logsvar", "Inget användarnamn angivet");
    }
    else if (lösenord === "") {
        response("logsvar", "Inget lösenord angivet");
    }
}

//  Checks if the entered userdata can be accepted into the list (min 8 symbols with minimum two capital letters an one number)
function checkRegEntry() {
    let namn = document.getElementById("reganv").value;
    let lösenord = document.getElementById("regpass").value;
    let lösrep = document.getElementById("regpassrep").value;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].användarnamn == namn) {//Check list for Username to prevent duplicate-------*/
            response("regsvar", "Användarnamnet upptaget, vänligen välj ett annat.");
            return;
        }
    }
    if (namn === "" && lösenord === "") {
        response("regsvar", "Inget användarnamn eller lösenord angivet.");
        return;
    }
    else if (namn === "") {
        response("regsvar", "Inget användarnamn angivet.");
        return;
    }
    else if (lösenord === "") {
        response("regsvar", "Inget lösenord angivet.");
        return;
    }
    else if (lösenord != lösrep) {
        response("regsvar", "Båda lösenordsfälten måsete vara identiska.");
    }

    else
        checkPassword(namn, lösenord);
}
//  Checks if lösenord is within specified complexity
function checkPassword(namn, lösenord) {

    if (lösenord.length < 8) { //Password length
        response("regsvar", "Lösenordet är för kort, Måste vara minst 8 tecken långt.");
    }
    else if (controlPassword(lösenord, /[A-Z]/g) < 2) { //Number of Capital letters
        response("regsvar", "Lösenordet Har för få stora bokstäver. Måste avra minst två.");
    }
    else if (controlPassword(lösenord, /[0-9]/g) < 1) { //Number of Numbers
        response("regsvar", "Lösenordet Har för få nummer. Måste vara minst ett.");
    }
    else {
        regUser(namn, lösenord); //Registers the user to the list
        response("regsvar", "Användare " + namn + " registrerad.");
    }
}

// Function to check if the entered information corresonds with object in the list of users "list".
function checkLogin() {
    let namn = document.getElementById("anv").value;
    let lösenord = document.getElementById("pass").value;
    let found = false;

    for (let i = 0; i < lista.length; i++)
        if (lista[i].användarnamn == namn && lista[i].lösenord == lösenord) {
            response("logsvar", "Login accepted, moving to landingpage.");
            found = true;
        }
    if (found) {
        location.href = "landning.html";
    }
    response("logsvar", "Vänligen ange registrerat användarnamn och lösenord.");
}

// Registers user to list
function regUser(anv, pass) {
    lista.push(new användare(anv, pass));

}
// Fill boardgame drop-down-list from list of games
function fillOptions() {
    // Get dropdown element from DOM
    var dropdown = document.getElementById("väljspel");

    // Loop through the array
    for (var i = 0; i < spellista.length; ++i) {
        dropdown[dropdown.length] = new Option(spellista[i].namn, spellista[i].namn);
    }
}
function displaySpel() {
    let spel = document.getElementById('väljspel').value;
    for (var i = 0; i < spellista.length; ++i) {
        if (spellista[i].namn == spel){
            document.getElementById('namn').innerHTML = spellista[i].namn;
            document.getElementById('designer').innerHTML = spellista[i].designer;
            document.getElementById('utgivare').innerHTML = spellista[i].utgivare;
            document.getElementById('antalspelare').innerHTML = spellista[i].antalspelare;
            document.getElementById("imgurl").src = spellista[i].imgurl;
            document.getElementById('beskrivning').innerHTML = spellista[i].beskrivning;
        }
    }
}

//looks for an expression in tring to find coorect number of capitals and numbers in entered password
function controlPassword(str, expr) {
    return str.match(expr);
}

//sends a response text to an entity identfied by an id in Html.
function response(entity, message) {
    document.getElementById(entity).innerHTML = message;
}
// displays the User registry fields
function showField(show,hide){
    document.getElementById(show).style.display = "block";
    document.getElementById(hide).style.display = "none";
}
function showField(show,hide1,hide2){
    document.getElementById(show).style.display = "block";
    document.getElementById(hide1).style.display = "none";
    document.getElementById(hide2).style.display = "none";
}
function showField(show,hide1,hide2,hide3){
    document.getElementById(show).style.display = "block";
    document.getElementById(hide1).style.display = "none";
    document.getElementById(hide2).style.display = "none";
    document.getElementById(hide3).style.display = "none";
}



/*Script för side navigationbar.*/

function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
    document.getElementById("pil").style.display = "none";
}
/* Set the width of the side navigation to 0 while pushing main to original position*/
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("pil").style.display = "block";

}

spellista.push(new spel("Great western trail", "Alexander Pfister", "eggertspiele", "2-4","img/greatwestern.png","America in the 19th century: You are a rancher and repeatedly herd your cattle from Texas to Kansas City, where you send them off by train. This earns you money and victory points. Needless to say, each time you arrive in Kansas City, you want to have your most valuable cattle in tow. However, the Great Western Trail not only requires that you keep your herd in good shape, but also that you wisely use the various buildings along the trail. Also, it might be a good idea to hire capable staff: cowboys to improve your herd, craftsmen to build your very own buildings, or engineers for the important railroad line. If you cleverly manage your herd and navigate the opportunities and pitfalls of Great Western Trail, you surely will gain the most victory points and win the game. —description from the publisher"));
spellista.push(new spel("Race for the Galaxy", "Thomas Lehmann", "Rio Grande Games", "2-4","img/raceforthegalaxy.png","2018 UPDATE: The second edition of the game is improved for CVD (color blindness) and includes 5 revised cards from the original version and 6 New Worlds promo homeworlds. The promo homeworlds and first edition compatible Revised Cards are both available for purchase through the BGG store.In the card game Race for the Galaxy, players build galactic civilizations by playing game cards in front of them that represent worlds or technical and social developments. Some worlds allow players to produce goods, which can be consumed later to gain either card draws or victory points when the appropriate technologies are available to them. These are mainly provided by the developments and worlds that are not able to produce, but the fancier production worlds also give these bonuses. At the beginning of each round, players each select, secretly and simultaneously, one of the seven roles which correspond to the phases in which the round progresses. By selecting a role, players activate that phase for this round, giving each player the opportunity to perform that phase's action. For example, if one player chooses the settle role, each player has the opportunity to settle one of the planets from their hand. The player who has chosen the role, however, gets a bonus that applies only to them. But bonuses may also be acquired through developments, so you must be aware when another player also takes advantage of your choice of role."));
lista.push(new användare("test", "test"));//pre registerde user for ease of access