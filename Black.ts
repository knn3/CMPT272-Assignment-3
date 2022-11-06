import { Pigs } from "./Pigs";
export class Black extends Pigs {
    strength: number;
    constructor(n: string, b: string, h: number, w: number, p:string, s: number) {
        super(n, b, h, w, 'Black', p, s);
        this.strength = s;
    }
}