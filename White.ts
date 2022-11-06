import { Pigs } from "./Pigs";

export class White extends Pigs {
    running: number;
    constructor(n: string, b: string, h: number, w: number, p:string, r: number) {
        super(n, b, h, w, 'White',p , r);
        this.running = r;
    }
}