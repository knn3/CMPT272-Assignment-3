import { Pigs } from "./Pigs";
export class Grey extends Pigs {
    swimming: number
    constructor(n: string, b: string, h: number, w: number, p:string, s: number) {
        super(n, b, h, w, 'Grey', p, s);
        this.swimming = s;
    }
}