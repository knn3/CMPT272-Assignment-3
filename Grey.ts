import { Pigs } from "./Pigs";
export class Grey extends Pigs {
    ability: number
    constructor(n: string, b: string, h: number, w: number, a: number) {
        super(n, b, h, w, 'Grey', a);
        this.ability = a;
    }
}