/*
    Ecrivez un programme pour permettre à l'utilisateur d'entrer un temps
    en seconde, et le convertir en minutes.

    La conversion doit s'afficher sur la page HTML dans la div avec l'id convert
    Vous devez afficher la conversion sous cette forme : 
        xx secondes est égal à x minute

    Contraintes : 
        Vous devez prendre en compte :
            - D'afficher seconde au singulier s'il n'y a qu'une seconde
            - D'afficher seconde au pluriel s'il y a plus d'une seconde
            - D'afficher minute au singulier s'il n'y a qu'une minute
            - D'afficher minute au pluriel s'il y a plus d'une minute
*/

// Definition des variables
let secondes = 0;
let minutes = 0;
let resultat = "";
let message = "";


// Definition des fonctions
function convertir() {
    // On récupère le nombre de secondes
    secondes = Number(document.getElementById("secondes").value);
    // On calcule le nombre de minutes
    minutes = Math.floor(secondes / 60);
    // On calcule le reste de secondes
    secondes = secondes % 60;
    // On affiche le résultat
    message = secondes + " seconde";
    if (secondes > 1) {
        message += "s";
    }
    // On affiche le résultat converti en minutes et secondes avec la valeur donnée par l'utilisateur dans le champ de saisie 
    resultat += document.getElementById("secondes").value + " est égal à " + minutes;
    if (minutes === 1) {
        resultat += " minute";
    } else {
        resultat += " minutes";
    }
    resultat += " " + secondes + " seconde";
    if (secondes !== 1) {
        resultat += "s";
    }
    document.getElementById("convert").textContent = resultat;
}


