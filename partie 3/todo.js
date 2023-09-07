/*
    Modifiez le script pour rendre le programme de ToDo list fonctionnel

    Supprimer ce qui n'est pas nécessaire
*/
let addButton = document.querySelector('#addButton');

addButton.addEventListener('click', (e) => {

    let todo = document.querySelector("#todo");
    if(todo.value != "")
    {
        let tableau = document.querySelector('#todolist tbody');
        let newRow = tableau.insertRow();
        let newColumn = newRow.insertCell();

        let list = document.createTextNode(todo.value);
        newColumn.appendChild(list);

        
        todo.value = "";
    }

    e.preventDefault();
});
