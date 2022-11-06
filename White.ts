import { Pigs } from "./Pigs";

export class White extends Pigs {
    ability: number;
    constructor(n: string, b: string, h: number, w: number, r: number) {
        super(n, b, h, w, 'White', r);
        this.ability = r;
    }
}