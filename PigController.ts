import { Pigs } from "./Pigs";

interface PigControllerInterface {
    add(p: Pigs): void;
    delete(p: Pigs): void;
    getAll(): Pigs[];
}

export class PigController implements PigControllerInterface {
    pigs: Pigs[];

    constructor() {
        this.pigs = [];
    }
    add(p: Pigs): void {
        this.pigs.push(p);
        localStorage.pigsArray = JSON.stringify(this.pigs);
    }
    delete(p: Pigs): void {
        const index = this.pigs.findIndex(pig => pig.id === p.id);
        this.pigs.splice(index, 1);
        localStorage.pigsArray = JSON.stringify(this.pigs);
    }
    getAll(): Pigs[]{
        return JSON.parse(localStorage.pigsArray);
    }
}
