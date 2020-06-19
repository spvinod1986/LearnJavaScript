
// if you use export then it is exposed outside this file as module
export class Plot {
    constructor(private x?: number, private y?: number) {

    }

    draw() {
        console.log('draw');
    }
}