System.register([], function (exports_1, context_1) {
    "use strict";
    var PigController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            PigController = class PigController {
                constructor() {
                    this.pigs = [];
                }
                add(p) {
                    this.pigs.push(p);
                    localStorage.pigsArray = JSON.stringify(this.pigs);
                }
                delete(p) {
                    const index = this.pigs.findIndex(pig => pig.id === p.id);
                    this.pigs.splice(index, 1);
                    localStorage.pigsArray = JSON.stringify(this.pigs);
                }
                getAll() {
                    return JSON.parse(localStorage.pigsArray);
                }
            };
            exports_1("PigController", PigController);
        }
    };
});
