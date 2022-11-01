import { PigController } from "./PigController";
import { Grey } from "./Grey";

var pigs = new PigController();
    
document.getElementById('create')!.addEventListener('click', function () {
    var pig = new Grey('Newt', 'Yorkshire', 10, 50, 65);
    pigs.add(pig)
})

document.getElementById('delete')!.addEventListener(('click'), function (e) {
    var pig = new Grey('Newt', 'Yorkshire', 10, 50, 65);
    console.log(pig.id);

    pigs.delete(pig);
})

// list of elements in local storage => for each element, display and delete button to that specific elenment

function display() {
    var arr = pigs.getAll();

    var dataTable = "";

    for (let i = 0; i < arr.length; i++){
        dataTable += '<tr>';
        dataTable += '<td>'+arr[i].name;
        dataTable += '<td>'+arr[i].breed;
        dataTable += '<td>';
        dataTable += '<td>';
        dataTable += '<tr>';

    }
    
}