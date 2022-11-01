System.register([], function (exports_1, context_1) {
    "use strict";
    var Pigs;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Pigs = class Pigs {
                constructor(name, breed, height, weight, category) {
                    this.name = name;
                    this.breed = breed;
                    this.height = height;
                    this.weight = weight;
                    this.category = category;
                    this.id = Pigs.num;
                    Pigs.num++;
                }
            };
            exports_1("Pigs", Pigs);
            Pigs.num = 0;
        }
    };
});
