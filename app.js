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


function regle(){
    if (box[0].style.backgroundColor == colorJ1 && box[1].style.backgroundColor == colorJ1 && box[2].style.backgroundColor == colorJ1
    || box[3].style.backgroundColor == colorJ1 && box[4].style.backgroundColor == colorJ1 && box[5].style.backgroundColor == colorJ1
    || box[6].style.backgroundColor == colorJ1 && box[7].style.backgroundColor == colorJ1 && box[8].style.backgroundColor == colorJ1
    || box[0].style.backgroundColor == colorJ1 && box[3].style.backgroundColor == colorJ1 && box[6].style.backgroundColor == colorJ1
    || box[1].style.backgroundColor == colorJ1 && box[4].style.backgroundColor == colorJ1 && box[7].style.backgroundColor == colorJ1
    || box[2].style.backgroundColor == colorJ1 && box[5].style.backgroundColor == colorJ1 && box[8].style.backgroundColor == colorJ1
    || box[0].style.backgroundColor == colorJ1 && box[4].style.backgroundColor == colorJ1 && box[8].style.backgroundColor == colorJ1
    || box[2].style.backgroundColor == colorJ1 && box[4].style.backgroundColor == colorJ1 && box[6].style.backgroundColor == colorJ1){
        console.log(`${joueur1} gagne la partie !`);
        
    }

    else if (box[0].style.backgroundColor == colorJ2 && box[1].style.backgroundColor == colorJ2 && box[2].style.backgroundColor == colorJ2
        || box[3].style.backgroundColor == colorJ2 && box[4].style.backgroundColor == colorJ2 && box[5].style.backgroundColor == colorJ2
        || box[6].style.backgroundColor == colorJ2 && box[7].style.backgroundColor == colorJ2 && box[8].style.backgroundColor == colorJ2
        || box[0].style.backgroundColor == colorJ2 && box[3].style.backgroundColor == colorJ2 && box[6].style.backgroundColor == colorJ2
        || box[1].style.backgroundColor == colorJ2 && box[4].style.backgroundColor == colorJ2 && box[7].style.backgroundColor == colorJ2
        || box[2].style.backgroundColor == colorJ2 && box[5].style.backgroundColor == colorJ2 && box[8].style.backgroundColor == colorJ2
        || box[0].style.backgroundColor == colorJ2 && box[4].style.backgroundColor == colorJ2 && box[8].style.backgroundColor == colorJ2
        || box[2].style.backgroundColor == colorJ2 && box[4].style.backgroundColor == colorJ2 && box[6].style.backgroundColor == colorJ2){
            console.log(`${joueur2} gagne la partie !`);
            
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


