import { Pigs } from "./Pigs";
export class Grey extends Pigs {
    swimming: number
    constructor(n: string, b: string, h: number, w: number, s: number) {
        super(n, b, h, w);
        this.swimming = s;
    }
}