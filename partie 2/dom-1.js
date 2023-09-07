/*
    Ecrivez un code HTML + JS qui permet :

    De demander le nom de l'utilisateur (input)
    D'afficher  le nom de l'utilisateur sur la page (par ex. Bonjour Nom)

*/

/*
    Ecouter le click sur le bouton
    Récupérer le contenu (value) de mon input
    Afficher Bonjour Prénom
*/

// Création des variables

let input = document.querySelector('#prenom');
let btn = document.querySelector('#btn');

// gestionnaire d'événement sur le bouton pour afficher le prénom de l'utilisateur

btn.addEventListener('click', function() {
    let prenom = input.value;
    // création d'un élément p pour afficher le prénom
    let p = document.createElement('p');
    p.textContent = 'Bonjour ' + prenom;
    document.body.appendChild(p);
});

