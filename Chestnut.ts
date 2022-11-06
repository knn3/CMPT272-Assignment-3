import { Pigs } from "./Pigs";

export class Chestnut extends Pigs {
    speak: string
    constructor(n: string, b: string, h: number, w: number, p:string, s: string) {
        super(n, b, h, w, 'Chestnut',p, s);
        this.speak = s;
    }
}