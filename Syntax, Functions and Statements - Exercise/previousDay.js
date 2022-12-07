function solve(year, month, day){
    let date = new Date(year, month-1, day)
    
    date.setDate(date.getDate() - 1)

    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
}

solve(2015, 5, 10)
solve(2016, 9, 30)