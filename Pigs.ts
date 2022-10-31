export abstract class Pigs {
    static num = 0;
    id: number;
    name: string;
    breed: string;
    height: number;
    weight: number;
    constructor(name: string, breed: string, height: number, weight: number) {
        this.name = name;
        this.breed = breed;
        this.height = height;
        this.weight = weight;
        this.id = Pigs.num;
        Pigs.num++;
    }
}