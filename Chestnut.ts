import { Pigs } from "./Pigs";

export class Chestnut extends Pigs {
    speak: string
    constructor(n: string, b: string, h: number, w: number, s: string) {
        super(n, b, h, w);
        this.speak = s;
    }
}