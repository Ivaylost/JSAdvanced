function solve(num = 5){
    let result;
    let sign = '* ';
    for(let i = 0; i < num; i++){
        result = '';
        for(let j = 0; j < num; j++){
            result += sign;
        }
        console.log(result)
    }
}

solve()