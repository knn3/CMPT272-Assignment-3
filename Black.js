System.register(["./Pigs"], function (exports_1, context_1) {
    "use strict";
    var Pigs_1, Black;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Pigs_1_1) {
                Pigs_1 = Pigs_1_1;
            }
        ],
        execute: function () {
            Black = class Black extends Pigs_1.Pigs {
                constructor(n, b, h, w, s) {
                    super(n, b, h, w, 'Black', s);
                    this.strength = s;
                }
            };
            exports_1("Black", Black);
        }
    };
});
