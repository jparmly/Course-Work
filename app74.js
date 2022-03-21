 const budgets = ([
    { name: "Paul", age: 56, budget: 44000},
    { name: "Bill", age: 24, budget: 1200},
    { name: "ethan", age: 19, budget: 14000},
    { name: "Jack", age: 32, budget: 27000}

]);
const sumOfBudgets = budgets.every((budgets) => budgets.sum > 0);
console.log("sumOfBudgets (every);", sumOfBudgets);