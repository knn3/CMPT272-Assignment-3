import { Pigs } from "./Pigs";
export class Black extends Pigs {
    ability: number;
    constructor(n: string, b: string, h: number, w: number, s: number) {
        super(n, b, h, w, 'Black', s);
        this.ability = s;
    }
}