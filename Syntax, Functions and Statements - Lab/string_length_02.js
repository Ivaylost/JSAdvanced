'use strict'

function start(a, b, c){
    let sumLenght = a.length+b.length+c.length;
    let averageLenght = Math.floor(sumLenght/3)
    console.log(sumLenght);
    console.log(averageLenght);
}

start('chocolate', 'ice cream', 'cake');