// Créer un script qui affiche un compte à rebours de 10 secondes sur une page HTML en utilisant la manipulation du dom. Utiliser une boucle et la fonction setTimeout pour réaliser ce compte à rebours.

// Création d'un paragraphe dans lequel on affiche le compte à rebours

const p = document.createElement("p");
document.body.appendChild(p);

// Création de la fonction qui affiche le compte à rebours

function countdown() {
    for (let i = 10; i >= 0; i--) {
        setTimeout(() => {
            p.innerHTML = i;
        }, 1000 * (10 - i));
    }
}

// Appel de la fonction

countdown();