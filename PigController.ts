interface PigControllerInterface {
    add(p: Pigs): void;
    delete(): void;
    getAll(): Pigs[];
}

class PigController implements PigControllerInterface {
    pigs: Pigs[];

    constructor() {
        this.pigs = [];
    }
    add(p: Pigs): void {
        
    }
    delete(): void {
        
    }
    getAll(): Pigs[]{
        return this.pigs;
    }
}
