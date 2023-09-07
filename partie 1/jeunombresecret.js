/*
    Développez le jeu pour découvrir le nombre secret.
    Cette fois-ci, vous devez laisser le joueur choisir le nombre.

    A chaque nombre choisi, vous devez afficher : Plus grand, plus petit, gagné ou perdu selon les cas.

    Le joueur n'a le droit qu'à 10 essai.

    Vous devez afficher et laisser choisir le joueur directement sur la page HTML

*/

// Déclaration des variables
let nombreSecret = Math.floor(Math.random() * 100) + 1;
let essai = 0;
let nombreChoisi = 0;
let message = "";
let resultatElement = document.getElementById("resultat");

function verifierNombre() {
    // On incrémente la variable essai
    essai++;
    // On récupère le nombre choisi par le joueur
    nombreChoisi = Number(document.getElementById("nombre").value);
    // On obtient l'élément HTML qui a l'id resultat
    let message = document.getElementById("resultat");
    // On vérifie si le nombre est plus petit ou plus grand
    if (nombreChoisi < nombreSecret) {
        // On affiche plus grand ou plus petit à l'écran
        message = "Plus grand. Il vous reste " + (10 - essai) + " essai(s)";
    } else if (nombreChoisi > nombreSecret) {
        message = "Plus petit. Il vous reste " + (10 - essai) + " essai(s)";
    } else {
        message = "Gagné en " + essai + " essai(s)";
        // On désactive le champ de saisie
        document.getElementById("nombre").disabled = true;
        // On cache le bouton "Tester"
        document.getElementById("boutonTester").style.display = "none";
        // On affiche le bouton recommencer à l'écran
        document.getElementById("boutonRecommencer").style.display = "block";
    }

    // On affiche le message à l'écran
    resultatElement.textContent = message;

    // On affiche gagné ou perdu
    if (essai === 10 && nombreChoisi !== nombreSecret) {
        // On affiche "Perdu" s'il a utilisé tous les essais
        resultatElement.textContent = "Perdu. Le nombre secret était " + nombreSecret + ".";
        // On désactive le champ de saisie
        document.getElementById("nombre").disabled = true;
        // On cache le bouton "Tester"
        document.getElementById("boutonTester").style.display = "none";
        // On affiche le bouton recommencer à l'écran
        document.getElementById("boutonRecommencer").style.display = "block";
    }
}

function recommencer() {
    // Réinitialise toutes les variables et éléments
    nombreSecret = Math.floor(Math.random() * 100) + 1;
    essai = 0;
    message = "";
    resultatElement.textContent = "";
    document.getElementById("nombre").value = "";
    document.getElementById("nombre").disabled = false;
    document.getElementById("boutonTester").style.display = "block";
    document.getElementById("boutonRecommencer").style.display = "none";
}


// // Boucle tant que le nombre choisi est différent du nombre secret
// while (nombreChoisi !== nombreSecret && essai < 10) {
//     // On demande un nombre
//     nombreChoisi = Number(prompt("Entrez un nombre entre 1 et 100 : "));
//     // On incrémente la variable essai
//     essai++;
//     // On vérifie si le nombre est plus petit ou plus grand
//     if (nombreChoisi < nombreSecret) {
//         // On affiche plus grand ou plus petit à l'écran
//         message = "Plus grand. Il vous reste " + (10 - essai) + " essai(s)";
//     } else if (nombreChoisi > nombreSecret) {
//         message = "Plus petit. Il vous reste " + (10 - essai) + " essai(s)";
//     } else {
//         message = "Gagné en " + essai + " essai(s)";
//     }

//     // On affiche le message à l'écran
//     alert(message);
// }
// // On affiche gagné ou perdu
// if (nombreChoisi !== nombreSecret) {
//     alert("Perdu. Le nombre secret était " + nombreSecret + ".");
// }
