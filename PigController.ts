import { Pigs } from "./Pigs";

interface PigControllerInterface {
    add(p: Pigs): void;
    delete(p: Pigs): void;
    getAll(): Pigs[];
    group(): void;
    // find(id: number): Pigs;
}

export class PigController implements PigControllerInterface {
    pigs: Pigs[];
    constructor() {
        this.pigs = [];
    }
    add(p: Pigs): void {
        this.pigs.push(p);
        localStorage.pigsArray = JSON.stringify(this.pigs);
    }
    delete(p: Pigs): void {
        const index = this.pigs.findIndex(pig => pig.id === p.id);
        console.log(index);
        this.pigs.splice(index, 1);
        localStorage.pigsArray = JSON.stringify(this.pigs);
    }
    getAll(): Pigs[]{
        return JSON.parse(localStorage.pigsArray);
    }
    group() {
        var allPigs = groupBy(this.pigs, "category");
        this.pigs = [];
        if (allPigs.Grey) {
            allPigs.Grey.sort(compare);
            for (let i = 0; i < allPigs.Grey.length; i++){
                this.pigs.push(allPigs.Grey[i]);
            }
        }
            
        if (allPigs.Chestnut) {
            allPigs.Chestnut.sort(compare);

            for (let i = 0; i < allPigs.Chestnut.length; i++){
                this.pigs.push(allPigs.Chestnut[i]);
            }
        }
            
        if (allPigs.White) {
            allPigs.White.sort(compare);

            for (let i = 0; i < allPigs.White.length; i++){
                this.pigs.push(allPigs.White[i]);
            }
        }
            
        if (allPigs.Black) {
            allPigs.Black.sort(compare);

            for (let i = 0; i < allPigs.Black.length; i++){
                this.pigs.push(allPigs.Black[i]);
            }
        }
            
        localStorage.pigsArray = JSON.stringify(this.pigs);
    }

}

function groupBy(arr: Pigs[], key: keyof Pigs) {
    var grouped = arr.reduce((previous, current) => {
        if(!previous[current[key]]){
            previous[current[key]] = [] as Pigs[];
        }
        previous[current[key]].push(current);
          return previous;
    }, {} as any);
    
    return grouped;
}

function compare( a: Pigs, b: Pigs ) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}