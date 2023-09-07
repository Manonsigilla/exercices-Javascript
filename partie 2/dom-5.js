/*
    Ecrivez un code HTML + JS qui permet :

    De demander à l'utilisateur d'entrer un nombre
    Vous devez ensuite afficher la table de multiplication (jusqu'à 10) de ce nombre
*/

// Création des variables

let bouton = document.getElementById("btn");

// Création de la fonction qui va calculer la table de multiplication du nombre entré par l'utilisateur

function tableMultiplication() {
    let nombreEntree = nombre.value;
    let resultatTable = "";

    for (let i = 1; i <= 10; i++) {
        resultatTable += nombreEntree + " x " + i + " = " + nombreEntree * i + "<br>";
    }
    // création de la variable qui va afficher le résultat dans le HTML
    let resultat = document.createElement("p");
    resultat.innerHTML = resultatTable;
    document.body.appendChild(resultat);
}

// Création de l'évènement au clic du bouton

bouton.addEventListener("click", tableMultiplication);