function solve(x, y, opr){
    let result;
    switch (opr){
        case '+':result = x+y;break;
        case '-':result = x-y;break;
        case '/':result = x/y;break;
        case '*':result = x*y;break;
        case '%':result = x%y;break;
        case '**':result = x**y;break;
    }
    console.log(result);
}