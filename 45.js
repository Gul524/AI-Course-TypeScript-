function cc(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Add additional options to the car object
    for (var key in options) {
        car[key] = options[key];
    }
    return car;
}
// Call the function with required information and additional options
var myCar = cc("Toyota", "honda", color, "blue", year, 2022);
// Print the object to make sure all information was stored correctly
console.log(myCar);
