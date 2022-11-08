System.register(["./PigController", "./Grey", "./Chestnut", "./White", "./Black"], function (exports_1, context_1) {
    "use strict";
    var PigController_1, Grey_1, Chestnut_1, White_1, Black_1, pigs, select, moreInfoBtn, deleteBtn;
    var __moduleName = context_1 && context_1.id;
    // list of elements in local storage => for each element, display and delete button to that specific elenment
    function display() {
        pigs.group();
        var arr = pigs.getAll();
        // var allPigs = groupBy(pigs.getAll(), "category");
        var dataTable = "<tr><td>Name</td><td>Category</td><td></td><td></td></tr>";
        for (let i = 0; i < arr.length; i++) {
            dataTable += '<tr>';
            dataTable += '<td>' + arr[i].name;
            dataTable += '<td>' + arr[i].category;
            dataTable += '<td>' + '<button id="more">More Info</button>';
            dataTable += '<td>' + '<button id="delete">Delete</button>';
            dataTable += '<tr>';
        }
        document.getElementById('display').innerHTML = dataTable;
        moreInfoBtn = document.querySelectorAll("button[id=more]");
        deleteBtn = document.querySelectorAll("button[id=delete]");
        for (let i = 0; i < pigs.getAll().length; i++) {
            moreInfoBtn[i].addEventListener('click', function () {
                var pig = pigs.getAll()[i];
                document.getElementById('nameDisplay').innerHTML = pig.name;
                document.getElementById('breedDisplay').innerHTML = pig.breed;
                document.getElementById('heightDisplay').innerHTML = pig.height.toString();
                document.getElementById('weightDisplay').innerHTML = pig.weight.toString();
                document.getElementById('perDisplay').innerHTML = pig.personality;
                if (pig.category == 'Grey') {
                    document.getElementById('dynAbility').innerHTML = "Swimming";
                    document.getElementById('dynDisplay').innerHTML = pig.ability.toString();
                }
                else if (pig.category == 'Chestnut') {
                    document.getElementById('dynAbility').innerHTML = "Language";
                    document.getElementById('dynDisplay').innerHTML = pig.ability;
                }
                else if (pig.category == 'White') {
                    document.getElementById('dynAbility').innerHTML = "Running";
                    document.getElementById('dynDisplay').innerHTML = pig.ability.toString();
                }
                else if (pig.category == 'Black') {
                    document.getElementById('dynAbility').innerHTML = "Strength";
                    document.getElementById('dynDisplay').innerHTML = pig.ability.toString();
                }
            });
        }
        for (let i = 0; i < deleteBtn.length; i++) {
            deleteBtn[i].addEventListener('click', function () {
                window.alert("Confirm your deletion?");
                pigs.delete(pigs.getAll()[i]);
                display();
            });
        }
    }
    return {
        setters: [
            function (PigController_1_1) {
                PigController_1 = PigController_1_1;
            },
            function (Grey_1_1) {
                Grey_1 = Grey_1_1;
            },
            function (Chestnut_1_1) {
                Chestnut_1 = Chestnut_1_1;
            },
            function (White_1_1) {
                White_1 = White_1_1;
            },
            function (Black_1_1) {
                Black_1 = Black_1_1;
            }
        ],
        execute: function () {
            pigs = new PigController_1.PigController();
            select = document.getElementById('Category');
            //select category will dynamically display another attribute of that pigs
            select.addEventListener('change', function (e) {
                var html = "";
                var html2 = "";
                var index = select.selectedIndex;
                var opt = select.options[index];
                var value = opt.value;
                if (value == 'Grey') {
                    html += "<td>Swimming</td><td><input type='number' id='swimming'></td>";
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
                    html += "<td>Language</td><td><input type='text' id='language'></td>";
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
                    html += "<tr><td>Running</td><td><input type='number' id='running'></td></tr>";
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
                    html += "<td>Strength</td><td><input type='number' id='strength'></td>";
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
                document.getElementById('attribute').innerHTML = html;
                document.getElementById('breedSelect').innerHTML = html2;
            });
            document.getElementById('create').addEventListener('click', function () {
                var name = document.getElementById('Name');
                var height = document.getElementById('Height');
                var weight = document.getElementById('Weight');
                var category = document.getElementById('Category');
                var personality = document.getElementById('Personality');
                var cate = category.options[category.selectedIndex].value;
                if (cate == 'Grey') {
                    var swimming = document.getElementById('swimming');
                    var breed1 = document.getElementById('Breed1');
                    var breedVal1 = breed1.options[breed1.selectedIndex].value;
                    var pig1 = new Grey_1.Grey(name.value, breedVal1, parseInt(height.value), parseInt(weight.value), personality.value, parseInt(swimming.value));
                    pigs.add(pig1);
                }
                else if (cate == 'Chestnut') {
                    var language = document.getElementById('language');
                    var breed2 = document.getElementById('Breed2');
                    var breedVal2 = breed2.options[breed2.selectedIndex].value;
                    var pig2 = new Chestnut_1.Chestnut(name.value, breedVal2, parseInt(height.value), parseInt(weight.value), personality.value, language.value);
                    pigs.add(pig2);
                }
                else if (cate == 'White') {
                    var running = document.getElementById('running');
                    var breed3 = document.getElementById('Breed3');
                    var breedVal3 = breed3.options[breed3.selectedIndex].value;
                    var pig3 = new White_1.White(name.value, breedVal3, parseInt(height.value), parseInt(weight.value), personality.value, parseInt(running.value));
                    pigs.add(pig3);
                }
                else if (cate == 'Black') {
                    var strength = document.getElementById('strength');
                    var breed4 = document.getElementById('Breed4');
                    var breedVal4 = breed4.options[breed4.selectedIndex].value;
                    var pig4 = new Black_1.Black(name.value, breedVal4, parseInt(height.value), parseInt(weight.value), personality.value, parseInt(strength.value));
                    pigs.add(pig4);
                }
                display();
            });
            display();
            // get all the button
            moreInfoBtn = document.querySelectorAll("button[id=more]");
            deleteBtn = document.querySelectorAll("button[id=delete]");
        }
    };
});
