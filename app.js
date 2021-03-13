const container = document.createElement("div");
container.id="container";
document.body.appendChild(container);


for (let i = 0; i < 9; i++) {
     let cases = document.createElement("div")
     cases.className="cas";
     container.appendChild(cases);
    }

let joueur1="";
let joueur2="";
let t=0;

do {
    joueur1 =prompt("Nom du joueur 1 ?")
} while (!isNaN(joueur1));

do {
    joueur2 =prompt("Nom du joueur 2 ?")
} while (!isNaN(joueur2));

   
let colorJ1= prompt(`${joueur1} Quelle couleur voulez-avoir (en anglais) ? `);
let colorJ2= prompt(`${joueur2} Quelle couleur voulez-avoir (en anglais) ? `);


const info = document.createElement("section");
document.body.insertBefore(info, container);

const paraJ1 = document.createElement("p");;
const paraJ2 = document.createElement("p");
const paraTour = document.createElement("p");

paraJ1.textContent=`${joueur1} votre couleur est ${colorJ1}`;
paraJ2.textContent=`${joueur2} votre couleur est ${colorJ2}`;
paraTour.textContent="Tour n ° : "

paraJ1.style.color=colorJ1;
paraJ2.style.color=colorJ2;
paraTour.style.color="#FFF";

info.appendChild(paraJ1);
info.appendChild(paraJ2);
info.appendChild(paraTour);

let box = document.querySelectorAll(".cas");
let colorConfetti = ["blue", "red", "yellow", "green", "pink", "lime", "orange"];

const party = document.createElement('div');
document.body.appendChild(party);

function Makeconfetti(){ 
    let ValueConfetti = Math.round(Math.random()*6);
    let posConfetti = Math.round(Math.random()*98);
    let confetti = document.createElement("p");
    confetti.className="fete";
    confetti.textContent=".";
    confetti.style.left=posConfetti +"%";
    confetti.style.color=colorConfetti[ValueConfetti];
    party.appendChild(confetti);
     
}

const stopGame = document.createElement("button")
stopGame.textContent="Quitter";
stopGame.classList.add("exit");


const winner = document.createElement('p');
winner.className="win";
party.appendChild(winner);


function regle(){
    if (box[0].style.backgroundColor == colorJ1 && box[1].style.backgroundColor == colorJ1 && box[2].style.backgroundColor == colorJ1
    || box[3].style.backgroundColor == colorJ1 && box[4].style.backgroundColor == colorJ1 && box[5].style.backgroundColor == colorJ1
    || box[6].style.backgroundColor == colorJ1 && box[7].style.backgroundColor == colorJ1 && box[8].style.backgroundColor == colorJ1
    || box[0].style.backgroundColor == colorJ1 && box[3].style.backgroundColor == colorJ1 && box[6].style.backgroundColor == colorJ1
    || box[1].style.backgroundColor == colorJ1 && box[4].style.backgroundColor == colorJ1 && box[7].style.backgroundColor == colorJ1
    || box[2].style.backgroundColor == colorJ1 && box[5].style.backgroundColor == colorJ1 && box[8].style.backgroundColor == colorJ1
    || box[0].style.backgroundColor == colorJ1 && box[4].style.backgroundColor == colorJ1 && box[8].style.backgroundColor == colorJ1
    || box[2].style.backgroundColor == colorJ1 && box[4].style.backgroundColor == colorJ1 && box[6].style.backgroundColor == colorJ1){
        party.classList.add("victory");
        winner.textContent=`${joueur1} vous êtes le vainqueur !!! `;
       setInterval(Makeconfetti, 10);
       party.appendChild(stopGame);
        
    }

    else if (box[0].style.backgroundColor == colorJ2 && box[1].style.backgroundColor == colorJ2 && box[2].style.backgroundColor == colorJ2
        || box[3].style.backgroundColor == colorJ2 && box[4].style.backgroundColor == colorJ2 && box[5].style.backgroundColor == colorJ2
        || box[6].style.backgroundColor == colorJ2 && box[7].style.backgroundColor == colorJ2 && box[8].style.backgroundColor == colorJ2
        || box[0].style.backgroundColor == colorJ2 && box[3].style.backgroundColor == colorJ2 && box[6].style.backgroundColor == colorJ2
        || box[1].style.backgroundColor == colorJ2 && box[4].style.backgroundColor == colorJ2 && box[7].style.backgroundColor == colorJ2
        || box[2].style.backgroundColor == colorJ2 && box[5].style.backgroundColor == colorJ2 && box[8].style.backgroundColor == colorJ2
        || box[0].style.backgroundColor == colorJ2 && box[4].style.backgroundColor == colorJ2 && box[8].style.backgroundColor == colorJ2
        || box[2].style.backgroundColor == colorJ2 && box[4].style.backgroundColor == colorJ2 && box[6].style.backgroundColor == colorJ2){
            party.classList.add("victory");
            winner.textContent=`${joueur2} Vous êtes le vainqueur !!!`;
            setInterval(Makeconfetti, 10);
            party.appendChild(stopGame);
            
        }

    }


function play(){

    
    if (!this.style.backgroundColor) {
    this.style.backgroundColor  = t % 2 == 0 ? colorJ1 : colorJ2;
    paraTour.textContent="Tour n ° : " + t;
    t++; 
    }
    + regle();
}

box.forEach(e=>(e.addEventListener("click", play)))



stopGame.addEventListener("click" , () => {
    window.close("index.html")})

