
function makeSandwich(...items: string[]): void {
    console.log("You ordered a sandwich with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
}

// Call the function with different number of arguments
makeSandwich("chiken", "cheese", "lettuce");
makeSandwich("cheese", "bacon");
makeSandwich("peanut butter", "jelly");