import { PigController } from "./PigController";
import { Grey } from "./Grey";

var pigs = new PigController();

document.getElementById('create')!.addEventListener('click', function () {
    var pig = new Grey('Newt', 'Yorkshire', 10, 50, 65);
    pigs.add(pig)
})