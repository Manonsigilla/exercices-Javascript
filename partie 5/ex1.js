// Créer une calculatrice simple qui prend en entrée deux nombres et permet de réaliser les opérations de base (addition, soustraction, multiplication, division) en utilisant les fonctions et les opérateurs.



// création de la fonction calculatrice

function calculatrice() {
    
    // création des variables récupérant les nombres entrés par l'utilisateur dans les champs de saisie
    let nb1 = parseFloat(document.querySelector(`input[name="number1"]`).value);
    let nb2 = parseFloat(document.querySelector(`input[name="number2"]`).value);
    let operation = document.querySelector(`select[name="operation"]`).value;

    // création de la condition pour calculer les nombres
    let resultat;
    if (operation === "addition") {
        resultat = nb1 + nb2;
    } else if (operation === "soustraction") {
        resultat = nb1 - nb2;
    } else if (operation === "multiplication") {
        resultat = nb1 * nb2;
    } else if (operation === "division") {
        resultat = nb1 / nb2;
    }

    // affichage du résultat 
    let resultatElement = document.createElement("p");
    resultatElement.innerHTML = "Résultat = " + resultat;
    document.querySelector("body").appendChild(resultatElement);
}

// gestionnaire d'événement au click du bouton calculer

document.querySelector("button").addEventListener("click", function (e) {
    calculatrice();
    e.preventDefault();
});