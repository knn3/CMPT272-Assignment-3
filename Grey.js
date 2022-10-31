System.register(["./Pigs"], function (exports_1, context_1) {
    "use strict";
    var Pigs_1, Grey;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Pigs_1_1) {
                Pigs_1 = Pigs_1_1;
            }
        ],
        execute: function () {
            Grey = class Grey extends Pigs_1.Pigs {
                constructor(n, b, h, w, s) {
                    super(n, b, h, w);
                    this.swimming = s;
                }
            };
            exports_1("Grey", Grey);
        }
    };
});
