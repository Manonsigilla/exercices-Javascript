/*
    Ecrivez un script qui permet de modifier le h1 de la page
    Ecrivez un script qui permet d'ajouter un paragraphe après ce h1

*/

// On modifie le h1 de la page HTML

let titre = document.querySelector('h1');
titre.textContent = 'Titre modifié par Manon';

// On ajoute un paragraphe après le h1

let paragraphe = document.createElement('p');
paragraphe.textContent = 'Paragraphe ajouté par Manon';
titre.after(paragraphe);
