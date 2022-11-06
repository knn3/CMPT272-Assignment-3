import { Pigs } from "./Pigs";

export class Chestnut extends Pigs {
    ability: string
    constructor(n: string, b: string, h: number, w: number, s: string) {
        super(n, b, h, w, 'Chestnut', s);
        this.ability = s;
    }
}