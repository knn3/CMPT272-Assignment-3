System.register(["./PigController", "./Grey", "./White"], function (exports_1, context_1) {
    "use strict";
    var PigController_1, Grey_1, White_1, pigs, select;
    var __moduleName = context_1 && context_1.id;
    // list of elements in local storage => for each element, display and delete button to that specific elenment
    function display() {
        var arr = pigs.getAll();
        var dataTable = "<tr><td>Name</td><td>Category</td><td></td><td></td></tr>";
        for (let i = 0; i < arr.length; i++) {
            dataTable += '<tr>';
            dataTable += '<td>' + arr[i].name;
            dataTable += '<td>' + arr[i].category;
            dataTable += '<td>' + '<button>More Info</button>';
            dataTable += '<td>' + '<button>Delete</button>';
            dataTable += '<tr>';
        }
        document.getElementById('display').innerHTML = dataTable;
    }
    return {
        setters: [
            function (PigController_1_1) {
                PigController_1 = PigController_1_1;
            },
            function (Grey_1_1) {
                Grey_1 = Grey_1_1;
            },
            function (White_1_1) {
                White_1 = White_1_1;
            }
        ],
        execute: function () {
            pigs = new PigController_1.PigController();
            select = document.getElementById('Category');
            //select category will dynamically display another attribute of that pigs
            select.addEventListener('change', function (e) {
                var html = "";
                var index = select.selectedIndex;
                var opt = select.options[index];
                var value = opt.value;
                if (value == 'Grey') {
                    html += "<td>Swimming</td><td><input type='number' id='swiming'></td>";
                }
                else if (value == 'Chestnut') {
                    html += "<td>Language</td><td><input type='number' id='language'></td>";
                }
                else if (value == 'White') {
                    html += "<td>Running</td><td><input type='number' id='running'></td>";
                    html += `
        <select id="Category">
            <option value="" disabled selected hidden>Choose one</option>
            <option value="Yorkshire">Yorkshire</option>
            <option value="Chester">Chester</option>
            <option value="Lop">Lop</option>
            <option value="Landrace">Landrace</option>
        </select>  
        `;
                }
                else if (value == 'Black') {
                    html += "<td>Strength</td><td><input type='number' id='strength'></td>";
                }
                document.getElementById('attribute').innerHTML = html;
            });
            document.getElementById('create').addEventListener('click', function () {
                var pig = new White_1.White('Newt', 'Yorkshire', 10, 50, 65);
                pigs.add(pig);
                display();
            });
            document.getElementById('delete').addEventListener(('click'), function (e) {
                var pig = new Grey_1.Grey('Newt', 'Yorkshire', 10, 50, 65);
                console.log(pig.id);
                pigs.delete(pig);
            });
            display();
        }
    };
});
