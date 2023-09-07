// Créer une fonction qui prend en entrée une chaîne de caractères et qui retourne la même chaîne en inversant l'ordre des caractères.


// Création d'une fonction qui prend en entrée une chaîne de caractères et qui retourne la même chaîne en inversant l'ordre des caractères.

function inverserChaine(chaine) {
    let chaineInverse = "";
    for (let i = chaine.length - 1; i >= 0; i--) {
        chaineInverse += chaine[i];
    }
    return chaineInverse;
}

// récupération des valeurs entrées par l'utilisateur dans le formulaire

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let chaine = document.querySelector("input").value;
    let chaineInverse = inverserChaine(chaine);
    let resultatElement = document.createElement("p");
    resultatElement.textContent = chaineInverse;
    document.querySelector("form").appendChild(resultatElement);
});
