function parent(x) {
    return function closure () {
        
        return x;
    };
}
    const remember = parent("remembers me")
    remember("x");

    closure();
    
    console.log("remember me:", remember);
