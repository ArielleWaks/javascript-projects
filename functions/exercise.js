function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += characters;
    }
    return line;
}
characters = '.';

function makeSquare(size) {
    let square = makeLine(size);
    for (let i = 0; i < size - 1; i++) {
        square += `\n${makeLine(size)}`;
    }
    return square;
}

console.log(makeSquare(2));

function makeRectangle(width, height) {
    let rectangle = makeLine(width);
    for (let i = 0; i < height - 1; i++) {
        rectangle += `\n${makeLine(width)}`;
    }
    return rectangle;
}

console.log(makeRectangle(5, 3));

function makeDownwardStairs(height) {
    let downStairs = '';
    for (let i = 0; i < height; i++) {
        downStairs += `${makeLine(i+1)}\n`
    }
    return downStairs.slice(0, -1);
}

console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = '';
    for (i = 0; i < numSpaces; i++) {
        spaceLine += ` `;
    }
    return `${spaceLine}${makeLine(numChars)}${spaceLine}`;
}

console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height) {
    let isoscelesTriangle = '';
    for (let i=0; i < height; i++) {
        isoscelesTriangle += `${makeSpaceLine((height - i - 1), (i * 2 + 1))}\n`;
    }
    return isoscelesTriangle.slice(0,-1);
}

console.log(makeIsoscelesTriangle(5));

function makeDiamond(height) {
    let diamond = `${makeIsoscelesTriangle(height)}\n`;
    for (let i = height; i > 0; i--) {
        diamond += `${makeSpaceLine((height - i), (i*2 - 1))}\n`;
    }
    return diamond.slice(0,-1);
}

console.log(makeDiamond(5));
