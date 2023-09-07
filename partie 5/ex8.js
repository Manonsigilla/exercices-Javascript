// Créer une fonction qui prend en entrée un tableau d'objets, chaque objet ayant un attribut "age". La fonction doit retourner l'objet ayant l'âge le plus élevé.

// Création d'un tableau d'objets avec des âges aléatoires entre 0 et 100

const tab = [
    { age: Math.floor(Math.random() * 100) },
    { age: Math.floor(Math.random() * 100) },
    { age: Math.floor(Math.random() * 100) },
    { age: Math.floor(Math.random() * 100) },
    { age: Math.floor(Math.random() * 100) },
    { age: Math.floor(Math.random() * 100) }
];

// Création de la fonction qui prend en entrée un tableau d'objets et retourne l'objet ayant l'âge le plus élevé

function maxAge(tab) {
    let max = tab[0];
    for (let i = 1; i < tab.length; i++) {
        if (tab[i].age > max.age) {
            max = tab[i];
        }
    }
    return max;
}

// Création d'un paragraphe dans lequel on affiche le tableau d'objets et l'objet ayant l'âge le plus élevé

const p = document.createElement("p");
p.innerHTML = `Le tableau d'objets : ${JSON.stringify(tab)} <br> L'objet ayant l'âge le plus élevé : ${JSON.stringify(maxAge(tab))}`;
document.body.appendChild(p);

