function solve(month, year){
    let date = new Date(year, month, 0);
    let x = date.getDate();
    console.log(x);
}
solve(2, 2021)