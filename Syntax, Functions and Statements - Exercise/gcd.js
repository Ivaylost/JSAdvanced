function solve(first, second){
    let result = Math.min(first, second)

    while(result > 0){
        if(first % result == 0 && second % result == 0){
            break;
        }

        result--;
    }

    console.log(result)
}

solve(15, 5)
solve(2154, 458)