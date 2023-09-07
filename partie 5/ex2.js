// Créer une fonction qui prend un tableau d'entiers en entrée et qui retourne le plus grand nombre présent dans le tableau.

// création du tableau d'entiers dans la page html
document.createElement("table")
let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let tableauElement = document.createElement("table");
tableauElement.innerHTML = "Le tableau d'entiers est : " + tab;
document.querySelector("body").appendChild(tableauElement);


// création de la fonction qui retourne le plus grand nombre présent dans le tableau

function plusGrandNombre(tab) {
    let max = tab[0];
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] > max) {
            max = tab[i];
        }
    }
    return max;
}

// affichage du résultat dans la page html

let resultatElement = document.createElement("p");
resultatElement.innerHTML = "Le plus grand nombre du tableau est : " + plusGrandNombre(tab);
document.querySelector("body").appendChild(resultatElement);
