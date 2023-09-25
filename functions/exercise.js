function makeLine(size, characters = '#') {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += characters;
    }
    return line;
}

function makeSquare(size, characters = '#') {
    let square = makeLine(size, characters);
    for (let i = 0; i < size - 1; i++) {
        square += `\n${makeLine(size, characters)}`;
    }
    return square;
}

console.log(makeSquare(2, '!'));

function makeRectangle(width, height, characters = '#') {
    let rectangle = makeLine(width, characters);
    for (let i = 0; i < height - 1; i++) {
        rectangle += `\n${makeLine(width, characters)}`;
    }
    return rectangle;
}

console.log(makeRectangle(5, 3, '@'));

function makeDownwardStairs(height, characters = '#') {
    let downStairs = '';
    for (let i = 0; i < height; i++) {
        downStairs += `${makeLine(i+1, characters)}\n`
    }
    return downStairs.slice(0, -1);
}

console.log(makeDownwardStairs(5, '$'));

function makeSpaceLine(numSpaces, numChars, characters = '#') {
    let spaceLine = '';
    for (i = 0; i < numSpaces; i++) {
        spaceLine += ' ';
    }
    return `${spaceLine}${makeLine(numChars, characters)}${spaceLine}`;
}

console.log(makeSpaceLine(3, 5, '%'));

function makeIsoscelesTriangle(height, characters = '#') {
    let isoscelesTriangle = '';
    for (let i=0; i < height; i++) {
        isoscelesTriangle += `${makeSpaceLine((height - i - 1), (i * 2 + 1), characters)}\n`;
    }
    return isoscelesTriangle.slice(0,-1);
}

console.log(makeIsoscelesTriangle(5, '^'));

function makeDiamond(height, characters = '#') {
    let diamond = `${makeIsoscelesTriangle(height, characters)}\n`;
    for (let i = height; i > 0; i--) {
        diamond += `${makeSpaceLine((height - i), (i*2 - 1), characters)}\n`;
    }
    return diamond.slice(0,-1);
}

console.log(makeDiamond(5, '&'));
