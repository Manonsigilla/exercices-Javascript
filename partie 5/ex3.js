// Créer un script qui modifie la couleur de fond d'une page en fonction de l'heure de la journée. Utiliser une condition pour déterminer si c'est le matin, l'après-midi ou le soir, puis changer la couleur de fond en conséquence.

// déclaration des variables pour les heures et les minutes
let heure = new Date().getHours();
let minute = new Date().getMinutes();

// déclaration de la variable pour le body
let body = document.querySelector('body');

// condition pour déterminer la couleur de fond en fonction de l'heure
if (heure >= 6 && heure < 12) {
    body.style.backgroundColor = "#ffff80";
} else if (heure >= 12 && heure < 18) {
    body.style.backgroundColor = "#ff8c1a";
} else {
    body.style.backgroundColor = "black";
}

// affichage de l'heure dans la page html

let heureElement = document.createElement("p");
heureElement.innerHTML = "Il est " + heure + "h" + minute;
document.querySelector("body").appendChild(heureElement);

// changement de couleur du paragraphe en fonction de l'heure

if (heure >= 6 && heure < 12) {
    heureElement.style.color = "#666600";
} else if (heure >= 12 && heure < 18) {
    heureElement.style.color = "#663300";
} else {
    heureElement.style.color = "white";
}
