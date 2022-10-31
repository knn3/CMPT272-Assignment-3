System.register(["./PigController", "./Grey"], function (exports_1, context_1) {
    "use strict";
    var PigController_1, Grey_1, pigs;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (PigController_1_1) {
                PigController_1 = PigController_1_1;
            },
            function (Grey_1_1) {
                Grey_1 = Grey_1_1;
            }
        ],
        execute: function () {
            pigs = new PigController_1.PigController();
            document.getElementById('create').addEventListener('click', function () {
                var pig = new Grey_1.Grey('Newt', 'Yorkshire', 10, 50, 65);
                pigs.add(pig);
            });
        }
    };
});
