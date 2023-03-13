
function createLine(max: number): string {

    const star: string = "*";
    let starLine: string = "";

    if (!Number.isInteger(max)) {
        return "choisir un integer impair"
    } else if (max % 0 === 2) {
        return "choisir un nombre impair"
    } else {
        for (let i: number = 0; i < max; i++) {
            starLine += star
        };
    }

    return starLine;
}

function sliceUpperLines(max: number) {


    return triangle;
}

function distance {

}

console.log(createMiddleLine(7));
console.log(sliceUpperLines(7));

export default distance