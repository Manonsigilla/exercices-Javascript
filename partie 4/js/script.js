/*
    Ecrire le code JavaScript qui permet de lancer les dès.

    Vous devez prendre en compte :
        - La génération aléatoire de deux nombres entre 1 et 6
        - L'affichage des deux dès grâce aux images présentes dans le dossier img et aux nombres générés
        - Indiquer le joueur gagnant ou une égalité

    INFORMATIONS :
        - Le code HTML est fourni et ne doit PAS être modifié directement
        - Pour modifier une image, vous devez modifier sa source avec ceci :
            element.src = "img/dice1.png"

*/

// Déclaration des variables

let bouton = document.querySelector("button");


// Fonction qui permet de déterminer le joueur gagnant

function joueurGagnant(nb1, nb2) {
    
    // Création de la variable h2 qui contiendra le résultat
    let resultat = document.createElement("h2");
    bouton.after(resultat);
    
    // Affichage du joueur gagnant ou d'une égalité
    if (nb1 > nb2) {
        resultat.textContent = "Joueur 1 gagnant !";
    } else if (nb1 < nb2) {
        resultat.textContent = "Joueur 2 gagnant !";
    } else {
        resultat.textContent = "Egalité !";
    }
    // Suppression du resultat au bout de 3 secondes
    setTimeout(function () {
        resultat.remove();
    }, 2000);
}

// Fonction qui permet de lancer les dés et de les afficher

function lancerDes() {
    // Génération aléatoire de deux nombres entre 1 et 6
    let nb1 = Math.floor(Math.random() * 6) + 1;
    let nb2 = Math.floor(Math.random() * 6) + 1;

    // Création des variables qui contiendront les images des dés
    let img1 = document.querySelector(".joueurs div:nth-child(1) img");
    let img2 = document.querySelector(".joueurs div:nth-child(2) img");

    // Affichage des deux dés en fonction des nombres générés
    img1.src = "img/dice" + nb1 + ".png";
    img2.src = "img/dice" + nb2 + ".png";


    // appel de la fonction joueurGagnant
    joueurGagnant(nb1, nb2);
}

// Gestionnaire d'événement au click du bouton "Lancer les dés"

bouton.addEventListener("click", function () {
    // Lancement des dés
    lancerDes();
});