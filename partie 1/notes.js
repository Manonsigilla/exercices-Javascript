/*
    Ecrivez un programme qui permet d'ajouter une note à un élève.
    Pour cela vous devez utiliser :
        - Un tableau JavaScript
        - La méthode push() pour les tableaux
        - L'écouteur d'évènement au click

    Chaque note que vous ajoutez doivent être ajoutée sur la page HTML
    dans le tableau prévu à cet effet
*/

// Récupérer les éléments HTML nécessaires
let input = document.getElementById("note");
let button = document.getElementById("ajouter");
let tableBody = document.getElementById("tableBody");

// Créer un tableau vide
let notes = [];

// Ajouter un gestionnaire d'évènement au click sur le bouton "Ajouter la note"
button.addEventListener("click", function(e) {
    e.preventDefault();
    // Récupérer la valeur de l'input
    let note = input.value;
    // Vérifier que la note est bien un nombre
    if (isNaN(note)) {
        alert("La note doit être un nombre");
        return;
    }
    // Vérifier que la note est bien comprise entre 0 et 20
    if (note < 0 || note > 20) {
        alert("La note doit être comprise entre 0 et 20");
        return;
    }
    // Ajouter la note dans le tableau
    if (note != "") {
        notes.push(note);
        let newRow = document.createElement("tr");
        newRow.innerHTML = "<td>" + notes.length + "</td><td>" + note + "</td>";
        tableBody.appendChild(newRow);
        // Vider le champ de saisie
        input.value = "";
    }
});


// // Création d'un tableau vide
// let notes = [];

// // Création d'une variable pour stocker la note
// let note = 0;

// // Création d'une variable pour associer la note au numéro de l'élève
// let numero = 0;

// // Fonction pour récupérer la valeur donnée par l'utilisateur
// function ajouterNote() {
//     // Le numéro de l'élève est incrémenté à chaque fois que l'utilisateur clique sur le bouton
//     numero++;
//     // On récupère la note donnée par l'utilisateur
//     note = Number(document.getElementById("note").value);
//     // la note doit se situer entre 0 et 20
//     if (note < 0 || note > 20) {
//         alert("La note doit être comprise entre 0 et 20");
//         return;
//     } else {
//         // On ajoute la note dans le tableau
//         notes.push(note);
//     }   
//     // au click sur le bouton, on écoute l'évènement et on appelle la fonction afficherNotes
//     document.getElementById("ajouter").addEventListener("click", afficherNotes);
//     // On vide le champ de saisie
//     document.getElementById("note").value = "";
// }

// // Fonction pour afficher les notes
// function afficherNotes() {
//     // On récupère la liste
//     let liste = document.getElementById("liste");
//     // On vide la liste
//     liste.innerHTML = "";
//     // On parcourt le tableau
//     for (let i = 0; i < notes.length; i++) {
//         // On ajoute un élément li dans la liste
//         let li = document.createElement("li");
//         // On ajoute la note dans le li
//         li.textContent = "Elève " + (i + 1) + " : " + notes[i] + "/20";
//         // On ajoute le li dans la liste
//         liste.appendChild(li);
//     }
// }