System.register(["./Pigs"], function (exports_1, context_1) {
    "use strict";
    var Pigs_1, White;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Pigs_1_1) {
                Pigs_1 = Pigs_1_1;
            }
        ],
        execute: function () {
            White = class White extends Pigs_1.Pigs {
                constructor(n, b, h, w, r) {
                    super(n, b, h, w, 'White');
                    this.running = r;
                }
            };
            exports_1("White", White);
        }
    };
});
