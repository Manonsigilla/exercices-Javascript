/*
    Ecrivez un code HTML + JS qui permet :

    De demander à l'utilisateur d'entrer un nombre
    D'afficher à l'utilisateur son nombre multiplié par 2

    Par exemple : 
        Si l'utilisateur entre 5
        Le code doit afficher 10

        Si l'utilisateur entre 12
        Le code doit afficher 24

    Vous ne devez PAS utiliser de console.log

    Vous DEVEZ afficher le résultat directement sur la page

*/

// Création des variables

let input = document.querySelector('#nombre');
let btn = document.querySelector('#btn');

// Fonction qui multiplie le nombre par 2

function multiplierParDeux(nombre) {
    let resultat = nombre * 2;
    let p = document.createElement('p');
    p.textContent = resultat;
    document.body.appendChild(p);
}

// gestionnaire d'événement sur le bouton pour afficher le résultat

btn.addEventListener('click', function() {
    let nombre = input.value;
    multiplierParDeux(nombre);
});