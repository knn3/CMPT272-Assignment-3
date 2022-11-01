import { Pigs } from "./Pigs";

export class White extends Pigs {
    running: number;
    constructor(n: string, b: string, h: number, w: number, r: number) {
        super(n, b, h, w, 'White');
        this.running = r;
    }
}