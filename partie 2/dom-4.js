/*
    Ecrivez un code HTML + JS qui permet :

    De demander à l'utilisateur d'entrer son niveau de compte (Abonné, Contributeur, Administrateur)
    
    A l'aide d'un SWITCH :
        - Afficher à l'utilisateur :
            - Vous êtes un abonné. Dans le cas ou c'est un Abonné
            - Vous êtes un contributeur. Dans le cas ou c'est un Contributeur
            - Vous êtes un administrateur. Dans le cas ou c'est un Administrateur.
            - Vous n'êtes pas dans la liste. Dans tous les autres cas

*/

// Création des variables

let select = document.querySelector('#niveau');
let btn = document.querySelector('#valider');

// Fonction qui affiche le niveau de compte de l'utilisateur à l'aide d'un switch

function afficherNiveau() {
    
    switch(select.value) {
        // Dans le cas ou c'est un Abonné afficher le display block de la div abonne
        case '1':
            document.querySelector('#abonne').style.display = 'block';
            document.querySelector('#contributeur').style.display = 'none';
            document.querySelector('#administrateur').style.display = 'none';
            document.querySelector('#autre').style.display = 'none';
            break;
        // Dans le cas ou c'est un Contributeur afficher le display block de la div contributeur
        case '2':
            document.querySelector('#abonne').style.display = 'none';
            document.querySelector('#contributeur').style.display = 'block';
            document.querySelector('#administrateur').style.display = 'none';
            document.querySelector('#autre').style.display = 'none';
            break;
        // Dans le cas ou c'est un Administrateur afficher le display block de la div administrateur
        case '3':
            document.querySelector('#abonne').style.display = 'none';
            document.querySelector('#contributeur').style.display = 'none';
            document.querySelector('#administrateur').style.display = 'block';
            document.querySelector('#autre').style.display = 'none';
            break;
        // Dans le cas ou c'est un autre afficher le display block de la div autre
        default:
            document.querySelector('#abonne').style.display = 'none';
            document.querySelector('#contributeur').style.display = 'none';
            document.querySelector('#administrateur').style.display = 'none';
            document.querySelector('#autre').style.display = 'block';
    }
}

// Ecouteur d'évènement sur le bouton valider

btn.addEventListener('click', function() {
    afficherNiveau();
});

