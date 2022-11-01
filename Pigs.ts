export abstract class Pigs {
    static num = 0;
    id: number;
    name: string;
    breed: string;
    height: number;
    weight: number;
    category: string;
    constructor(name: string, breed: string, height: number, weight: number, category: string) {
        this.name = name;
        this.breed = breed;
        this.height = height;
        this.weight = weight;
        this.category = category;
        this.id = Pigs.num;
        Pigs.num++;
    }
}