// Créer une fonction qui prend en entrée un nombre et qui retourne vrai si le nombre est pair, faux sinon. Utiliser l'opérateur modulo pour réaliser cette fonction.

 // Gestionnaire d'événement au click du bouton "Vérifier"
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupération de la valeur de l'input
    let nombre = parseInt(document.querySelector("#number").value);

    // Appel de la fonction pairImpair et affichage du résultat
    let resultatElement = document.createElement("p");
    resultatElement.textContent = pairImpair(nombre);
    document.querySelector("form").appendChild(resultatElement);
});
// création de la fonction qui retourne "le nombre est pair" si le nombre est pair et "le nombre est impair" si le nombre est impair dans la page html

function pairImpair(nombre) {
    if (nombre % 2 === 0) {
        return "le nombre est pair";
    } else {
        return "le nombre est impair";
    }
}