export abstract class Pigs {
    static num = 0;
    id: number;
    name: string;
    breed: string;
    height: number;
    weight: number;
    category: string;
    ability: any;
    constructor(name: string, breed: string, height: number, weight: number, category: string, ability: any) {
        this.name = name;
        this.breed = breed;
        this.height = height;
        this.weight = weight;
        this.category = category;
        this.id = Pigs.num;
        this.ability = ability;
        Pigs.num++;
    }
}