function outer() {
    let myVariable = "redundantreturn";

    function inner() {
        console.log("myVariable inside inner function:", myVariable);
    }

    return inner;
}

const outerFunctionCall = outer();
outerFunctionCall(); 