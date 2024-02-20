
function cc(manufacturer: string, modelName: string, ...options: { [key: string]: any }): any {
    let car: { [key: string]: any } = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    // Add additional options to the car object
    for (let key in options) {
        car[key] = options[key];
    }

    return car;
}

// Call the function with required information and additional options
let myCar = cc("Toyota", "honda", color: "blue", year: 2022);

// Print the object to make sure all information was stored correctly
console.log(myCar);