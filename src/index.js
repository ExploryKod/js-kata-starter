function createLine(max) {
    var star = "*";
    var starLine = "";
    for (var i = 0; i < max + 1; i++) {
        starLine += star;
    }
    ;
    return starLine;
}
console.log(createLine(7));
