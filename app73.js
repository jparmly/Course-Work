 const drinks = [
    { name: "applejuice", price: 9 },
    { name: "grape", price: 7 },
    { name: "orange", price: 12 },
    { name: "watermelon", price: 3 },
    { name: "pear", price: 4.50 },
    { name: "dragonfruit", price: 11.56 },
    { name: "coconut", price: 18 }

];

    const drinkByPrice = drinks.sort((b, a) => b.price - a.price);
    console.log("drinkByPrice:", drinkByPrice);