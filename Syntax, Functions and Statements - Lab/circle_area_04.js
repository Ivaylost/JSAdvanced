function solve(input){
    if(typeof(input) == 'number'){
        console.log((input*input*Math.PI).toFixed(2))
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(input)}.`)
    }
}

solve('name')