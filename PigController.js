System.register([], function (exports_1, context_1) {
    "use strict";
    var PigController;
    var __moduleName = context_1 && context_1.id;
    function groupBy(arr, key) {
        var grouped = arr.reduce((previous, current) => {
            if (!previous[current[key]]) {
                previous[current[key]] = [];
            }
            previous[current[key]].push(current);
            return previous;
        }, {});
        return grouped;
    }
    function compare(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }
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
                    console.log(index);
                    this.pigs.splice(index, 1);
                    localStorage.pigsArray = JSON.stringify(this.pigs);
                }
                getAll() {
                    return JSON.parse(localStorage.pigsArray);
                }
                group() {
                    var allPigs = groupBy(this.pigs, "category");
                    this.pigs = [];
                    if (allPigs.Grey) {
                        allPigs.Grey.sort(compare);
                        for (let i = 0; i < allPigs.Grey.length; i++) {
                            this.pigs.push(allPigs.Grey[i]);
                        }
                    }
                    if (allPigs.Chestnut) {
                        allPigs.Chestnut.sort(compare);
                        for (let i = 0; i < allPigs.Chestnut.length; i++) {
                            this.pigs.push(allPigs.Chestnut[i]);
                        }
                    }
                    if (allPigs.White) {
                        allPigs.White.sort(compare);
                        for (let i = 0; i < allPigs.White.length; i++) {
                            this.pigs.push(allPigs.White[i]);
                        }
                    }
                    if (allPigs.Black) {
                        allPigs.Black.sort(compare);
                        for (let i = 0; i < allPigs.Black.length; i++) {
                            this.pigs.push(allPigs.Black[i]);
                        }
                    }
                    localStorage.pigsArray = JSON.stringify(this.pigs);
                }
            };
            exports_1("PigController", PigController);
        }
    };
});
