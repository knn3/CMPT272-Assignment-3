import { PigController } from "./PigController";
import { Grey } from "./Grey";
import { Chestnut } from "./Chestnut";
import { White } from "./White";
import { Black } from "./Black";
import { Pigs } from "./Pigs";

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
        html += "<td>Swimming</td><td><input type='number' id='swimming'></td>"
        html2 += `
            <td>Breed</td>
            <td>
                <select id="Breed1">
                    <option value="" disabled selected>Choose one</option>
                    <option value="York">York</option>
                    <option value="Oink">Oink</option>
                    <option value="Lance">Lance</option>
                    <option value="Landrop">Landrop</option>
                </select>  
            </td>
        `;
        
    }
    else if (value == 'Chestnut') {
        html += "<td>Language</td><td><input type='text' id='language'></td>"
        html2 += `
            <td>Breed</td>
            <td>
                <select id="Breed2">
                    <option value="" disabled selected>Choose one</option>
                    <option value="Asian">Asian</option>
                    <option value="African">African</option>
                    <option value="American">American</option>
                    <option value="European">European</option>
                </select>  
            </td>
        `;
    }
    else if (value == 'White') {
        html += "<tr><td>Running</td><td><input type='number' id='running'></td></tr>"
        html2 += `
            <td>Breed</td>
            <td>
                <select id="Breed3">
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
                <select id="Breed4">
                    <option value="" disabled selected>Choose one</option>
                    <option value="Yorkstrength">Yorkstrength</option>
                    <option value="Chest">Chest</option>
                    <option value="Loxing">Loxing</option>
                    <option value="Lon Xe">Lon Xe</option>
                </select>  
            </td>
        `;
    }
    
    document.getElementById('attribute')!.innerHTML = html;
    document.getElementById('breedSelect')!.innerHTML = html2;

        
})

document.getElementById('create')!.addEventListener('click', function () {

    var name = document.getElementById('Name')! as HTMLInputElement;
    var height = document.getElementById('Height')! as HTMLInputElement;
    var weight = document.getElementById('Weight')! as HTMLInputElement;
    var category = document.getElementById('Category')! as HTMLSelectElement;
    var personality = document.getElementById('Personality') as HTMLInputElement;
    var cate = category.options[category.selectedIndex].value;

    if (name.value == "" || height.value == null || weight.value == null || personality.value == "") {
        window.alert("Invalid input! Make sure to enter all the fields!");
    }

    else if (cate == 'Grey') {
        var swimming = document.getElementById('swimming')! as HTMLInputElement;
        var breed1 = document.getElementById('Breed1')! as HTMLSelectElement;
        var breedVal1 = breed1.options[breed1.selectedIndex].value;
        var pig1 = new Grey(name.value, breedVal1, parseInt(height.value), parseInt(weight.value), personality.value, parseInt(swimming.value));
        
        if (breedVal1 == "") {
            window.alert("Invalid input! Please enter a breed");
        }
        else if (parseInt(swimming.value) < 0 || parseInt(swimming.value) > 100 || swimming.value == null)
            window.alert("Invalid input! Please enter swimming ability between 0 and 100");
        else {
            pigs.add(pig1);
        }

    }
    else if (cate == 'Chestnut') {
        var language = document.getElementById('language')! as HTMLInputElement;
        var breed2 = document.getElementById('Breed2')! as HTMLSelectElement;
        var breedVal2 = breed2.options[breed2.selectedIndex].value;
        var pig2 = new Chestnut(name.value, breedVal2, parseInt(height.value), parseInt(weight.value), personality.value, language.value);
        if (breedVal2 == "") {
            window.alert("Invalid input! Please enter a breed");
        }
        else if (language.value.match(/\d+/g) || language.value == "")
            window.alert("Invalid input! Please enter a language");
        else {
            pigs.add(pig2);
        }
        
    }
    else if (cate == 'White') {
        var running = document.getElementById('running')! as HTMLInputElement;
        var breed3 = document.getElementById('Breed3')! as HTMLSelectElement;
        var breedVal3 = breed3.options[breed3.selectedIndex].value;
        var pig3 = new White(name.value, breedVal3, parseInt(height.value), parseInt(weight.value), personality.value, parseInt(running.value));
        pigs.add(pig3)
        if (breedVal3 == "") {
            window.alert("Invalid input! Please enter a breed");
        }
        else if (parseInt(running.value) < 0 || parseInt(running.value) > 100 || running.value == null)
            window.alert("Invalid input! Please enter running ability between 0 and 100");
        else {
            pigs.add(pig3);
        }
        
    }
    else if (cate == 'Black') {
        var strength = document.getElementById('strength')! as HTMLInputElement;
        var breed4 = document.getElementById('Breed4')! as HTMLSelectElement;
        var breedVal4 = breed4.options[breed4.selectedIndex].value;
        var pig4 = new Black(name.value, breedVal4, parseInt(height.value), parseInt(weight.value), personality.value, parseInt(strength.value));
        if (breedVal4 == "") {
            window.alert("Invalid input! Please enter a breed");
        }
        else if (parseInt(strength.value) < 1 || parseInt(strength.value) > 10 || strength.value == null)
            window.alert("Invalid input! Please enter strength between 1 and 10");
        else {
            pigs.add(pig4);
        }
    }

    display();

})

// list of elements in local storage => for each element, display and delete button to that specific elenment

function display() {
    pigs.group();
    var arr = pigs.getAll();
    // var allPigs = groupBy(pigs.getAll(), "category");

    var dataTable = "<tr><td>Name</td><td>Category</td><td></td><td></td></tr>";

    for (let i = 0; i < arr.length; i++){
        dataTable += '<tr>';
        dataTable += '<td>'+arr[i].name;
        dataTable += '<td>'+arr[i].category;
        dataTable += '<td>'+'<button id="more">More Info</button>';
        dataTable += '<td>'+'<button id="delete">Delete</button>';
        dataTable += '<tr>';
    }
    document.getElementById('display')!.innerHTML = dataTable;
    moreInfoBtn = document.querySelectorAll("button[id=more]")!;
    deleteBtn = document.querySelectorAll("button[id=delete]")!;

    for (let i = 0; i < pigs.getAll().length; i++){
        moreInfoBtn[i].addEventListener('click', function () {
            var pig = pigs.getAll()[i];
            document.getElementById('nameDisplay')!.innerHTML = pig.name;
            document.getElementById('breedDisplay')!.innerHTML = pig.breed;
            document.getElementById('heightDisplay')!.innerHTML = pig.height.toString();
            document.getElementById('weightDisplay')!.innerHTML = pig.weight.toString();
            document.getElementById('perDisplay')!.innerHTML = pig.personality;

            if (pig.category == 'Grey') {
                document.getElementById('dynAbility')!.innerHTML = "Swimming";
                document.getElementById('dynDisplay')!.innerHTML = pig.ability.toString(); 
            }
            else if (pig.category == 'Chestnut') {
                document.getElementById('dynAbility')!.innerHTML = "Language";
                document.getElementById('dynDisplay')!.innerHTML = pig.ability; 
            }
            else if (pig.category == 'White') {
                document.getElementById('dynAbility')!.innerHTML = "Running";
                document.getElementById('dynDisplay')!.innerHTML = pig.ability.toString(); 
            }
            else if (pig.category == 'Black') {
                document.getElementById('dynAbility')!.innerHTML = "Strength";
                document.getElementById('dynDisplay')!.innerHTML = pig.ability.toString(); 
            }

        })
    }
    
    for (let i = 0; i < deleteBtn.length; i++){
        deleteBtn[i].addEventListener('click', function () {
            if (window.confirm("Confirm your deletion?") == true) {
                pigs.delete(pigs.getAll()[i]);
                display();
            }
            else {
                
            }
        })
    }
}

display();
// get all the button
var moreInfoBtn = document.querySelectorAll("button[id=more]")!;

var deleteBtn = document.querySelectorAll("button[id=delete]")!;




