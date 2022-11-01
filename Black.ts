import { Pigs } from "./Pigs";
export class Black extends Pigs {
    strength: number;
    constructor(n: string, b: string, h: number, w: number, s: number) {
        super(n, b, h, w, 'Black');
        this.strength = s;
    }
}