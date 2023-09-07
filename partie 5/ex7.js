// Créer un script qui permet à l'utilisateur de saisir une liste de noms, puis affiche les noms triés par ordre alphabétique. 


// récupération du prénom entré par l'utilisateur dans le formulaire et affichage du prénom dans la liste ul

function addName() {
    let name = document.getElementById('prenom').value;
    let ul = document.getElementById('list');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(name));
    ul.appendChild(li);
}

// récupération de la liste des prénoms entrés par l'utilisateur dans le formulaire et affichage de la liste triée par ordre alphabétique

function sortList() {
    let ul = document.getElementById('list');
    let li = ul.getElementsByTagName('li');
    let array = [];
    for (let i = 0; i < li.length; i++) {
        array.push(li[i].innerHTML);
    }
    array.sort();
    for (let i = 0; i < li.length; i++) {
        li[i].innerHTML = array[i];
    }
}

// gestionnaire d'événement pour le bouton "ajouter" qui appelle la fonction addName() et qui trie automatiquement la liste des prénoms

document.getElementById('ajouter').addEventListener('click', function (e) {
    addName();
    sortList();
    e.preventDefault();
});
