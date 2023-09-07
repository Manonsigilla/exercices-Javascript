/*
    Ecrivez un code HTML + JS qui permet :

    De demander à l'utilisateur d'entrer deux nombres différents
    Inversez les deux valeurs
    Afficher à l'utilisateur :
        - La valeur A = (valeur A) et la valeur B = (valeur B)
    Puis ensuite afficher dessous :
        - La valeur A est maintenant égale à (valeur A) et la valeur B est maintenant égale à (valeur B)

*/

// Création des variables

let input1 = document.querySelector('#nombre1');
let input2 = document.querySelector('#nombre2');
let btn1 = document.querySelector('#valider');
let btn2 = document.querySelector('#inverser');
let resultat = document.querySelector('#resultat');
let message = '';

// Fonction qui inverse les deux nombres

function inverserNombres() {
    let nombre1 = input1.value;
    let nombre2 = input2.value;
    
    let temp = nombre1;
    nombre1 = nombre2;
    nombre2 = temp;
    
    let p = document.createElement('p');
    p.textContent = `La valeur A = ${nombre1} et la valeur B = ${nombre2}`;
    document.body.appendChild(p);
    // affiche à l'utilisateur les valeurs inversées en appuyant sur le bouton inverser
    btn2.addEventListener('click', function() {
        message += `<br>La valeur A est maintenant égale à ${nombre1} et la valeur B est maintenant égale à ${nombre2}`;
        resultat.innerHTML = message;
    });
    resultat.innerHTML = message;
}

// Appel de la fonction inverserNombres en appuyant sur le bouton valider

btn1.addEventListener('click', function() {
    inverserNombres(nombre1, nombre2);
});