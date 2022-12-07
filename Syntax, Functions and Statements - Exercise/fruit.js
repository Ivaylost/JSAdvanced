function solve(type, grams, pricePerKilogram){
    let weight = grams/1000;
    let money = pricePerKilogram*weight;

    console.log('I need $' + money.toFixed(2) + ' to buy ' + weight.toFixed(2) + ' kilograms ' + type +'.')
}

solve('orange', 2500, 1.80);