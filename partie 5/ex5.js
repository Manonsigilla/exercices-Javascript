// Créer un script qui affiche la date et l'heure actuelle en temps réel sur une page HTML en utilisant la manipulation du dom.

// Création d'une fonction qui retourne la date et l'heure actuelle

function dateHeure() {
    let date = new Date();
    let jour = date.getDate();
    let mois = date.getMonth() + 1;
    let annee = date.getFullYear();
    let heure = date.getHours();
    let minute = date.getMinutes();
    let seconde = date.getSeconds();

    let dateHeure = jour + "/" + mois + "/" + annee + " " + heure + ":" + minute + ":" + seconde;
    return dateHeure;
}

// Création d'une fonction qui affiche la date et l'heure actuelle en temps réel sur une page HTML en utilisant la manipulation du dom.

function afficherDateHeure() {
    let dateHeureElement = document.createElement("p");
    dateHeureElement.textContent = dateHeure();
    document.querySelector("body").appendChild(dateHeureElement);
}

// Appel de la fonction afficherDateHeure toutes les secondes

setTimeout(function () {
    afficherDateHeure();
    window.location.reload();
}, 1000);

