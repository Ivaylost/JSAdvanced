function solve(x, y){
    let result=0;
    let num1 = Number(x);
    let num2 = Number(y);

    for(let i= num1; i <= num2; i++){
        result += i;
    }

    console.log(result);
}

solve('1', '5')