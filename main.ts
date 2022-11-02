import { PigController } from "./PigController";
import { Grey } from "./Grey";
import { White } from "./White";

var pigs = new PigController();
var select = document.getElementById('Category')! as HTMLSelectElement;
//select category will dynamically display another attribute of that pigs

select.addEventListener('change', function (e) {
    var html = "";
    var html2 = "";

    var index = select.selectedIndex;
    var opt = select.options[index];
    var value = opt.value;

    if (value == 'Grey') {
        html += "<td>Swimming</td><td><input type='number' id='swiming'></td>"
        html2 += `
            <td>Breed</td>
            <td>
                <select id="Breed">
                    <option value="" disabled selected>Choose one</option>
                    <option value="Yorkshire">Yorkshire</option>
                    <option value="Chester">Chester</option>
                    <option value="Lop">Lop</option>
                    <option value="Landrace">Landrace</option>
                </select>  
            </td>
        `;
        
    }
    else if (value == 'Chestnut') {
        html += "<td>Language</td><td><input type='number' id='language'></td>"
        html2 += `
            <td>Breed</td>
            <td>
                <select id="Breed">
                    <option value="" disabled selected>Choose one</option>
                    <option value="Yorkshire">Yorkshire</option>
                    <option value="Chester">Chester</option>
                    <option value="Lop">Lop</option>
                    <option value="Landrace">Landrace</option>
                </select>  
            </td>
        `;
    }
    else if (value == 'White') {
        html += "<tr><td>Running</td><td><input type='number' id='running'></td></tr>"
        html2 += `
            <td>Breed</td>
            <td>
                <select id="Breed">
                    <option value="" disabled selected>Choose one</option>
                    <option value="Yorkshire">Yorkshire</option>
                    <option value="Chester">Chester</option>
                    <option value="Lop">Lop</option>
                    <option value="Landrace">Landrace</option>
                </select>  
            </td>
        `;
    }
    else if (value == 'Black') {
        html += "<td>Strength</td><td><input type='number' id='strength'></td>"
        html2 += `
            <td>Breed</td>
            <td>
                <select id="Breed">
                    <option value="" disabled selected>Choose one</option>
                    <option value="Yorkshire">Yorkshire</option>
                    <option value="Chester">Chester</option>
                    <option value="Lop">Lop</option>
                    <option value="Landrace">Landrace</option>
                </select>  
            </td>
        `;
    }
    
    document.getElementById('attribute')!.innerHTML = html;
    document.getElementById('breedSelect')!.innerHTML = html2;

        
})

document.getElementById('create')!.addEventListener('click', function () {
    var pig = new White('Newt', 'Yorkshire', 10, 50, 65);
    pigs.add(pig)
    display();
})

document.getElementById('delete')!.addEventListener(('click'), function (e) {
    var pig = new Grey('Newt', 'Yorkshire', 10, 50, 65);
    console.log(pig.id);

    pigs.delete(pig);
})

// list of elements in local storage => for each element, display and delete button to that specific elenment

function display() {
    var arr = pigs.getAll();

    var dataTable = "<tr><td>Name</td><td>Category</td><td></td><td></td></tr>";

    for (let i = 0; i < arr.length; i++){
        dataTable += '<tr>';
        dataTable += '<td>'+arr[i].name;
        dataTable += '<td>'+arr[i].category;
        dataTable += '<td>'+'<button>More Info</button>';
        dataTable += '<td>'+'<button>Delete</button>';
        dataTable += '<tr>';

    }
    document.getElementById('display')!.innerHTML = dataTable;

}

display()
