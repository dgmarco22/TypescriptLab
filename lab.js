"use strict";
// TALLEST MOUNTAIN
//Declare an array called mountains which is an array of type Mountain. 
//Fill the array with the following mountains:
var mountains = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 },
];
//Declare a function called findNameOfTallestMountain. It takes one parameter, an
//array of Mountain objects. It returns a string, the name of the tallest mountain in the
//given array. If the array argument is empty, return an empty string ("").
function findNameOfTallestMountain(mtns) {
    var nameOfTallestMountain = "";
    var tallestHeight = 0;
    for (var _i = 0, mtns_1 = mtns; _i < mtns_1.length; _i++) {
        var mtn = mtns_1[_i];
        if (mtn.height > tallestHeight) {
            tallestHeight = mtn.height;
            nameOfTallestMountain = mtn.name;
        }
    }
    return nameOfTallestMountain;
}
//Call findNameOfTallestMountain, passing it your mountains array as an argument.
//Store the result of the function call (the return value) in a variable and then 
//console.log the variable. (Hint: It will print “Everest”.)
var tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);
//Declare an array called products which is an array of type Product.
//Fill the array with a few products of your own choosing.
var products = [
    { name: 'shampoo', price: 5 },
    { name: 'bodywash', price: 10 },
    { name: 'makeup', price: 15 },
];
//Declare a function called calcAverageProductPrice. It takes one parameter, an array
//of Product objects. It returns a number, the average price of all the products provided
//as an argument. If the array argument is empty, return 0.
function calcAverageProductPrice(products) {
    var averageProductPrice = 0;
    var totalPrice = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        totalPrice = totalPrice + product.price;
    }
    averageProductPrice = totalPrice / products.length;
    return averageProductPrice;
}
//Call calcAverageProductPrice, passing it your products array as an argument.
//Store the result of the function call (the return value) in a variable and then 
//console.log the variable.
var avgProdPrice = calcAverageProductPrice(products);
console.log(avgProdPrice);
//Declare an array called inventory which is an array of type InventoryItem.
//Fill the array with the following information.
var inventory = [
    {
        product: {
            name: 'motor',
            price: 10.00,
        },
        quantity: 10,
    },
    {
        product: {
            name: 'sensor',
            price: 12.50,
        },
        quantity: 4,
    },
    {
        product: {
            name: 'LED',
            price: 1.00,
        },
        quantity: 20,
    },
];
//Declare a function called calcInventoryValue. It takes one parameter, an array of
//InventoryItem objects. It returns a number, the total value of all the products in the
//inventory array provided as an argument. If the array argument is empty, return 0.
//This is calculated as follows: For each InventoryItem take the product price times
//the quantity. Add these together for all the items. For the above data, the total
//will be 10.00 x 10 + 12.5 x 4 + 1.00 * 20 = 170
function calcInventoryValue(inventory) {
    var inventoryValue = 0;
    for (var _i = 0, inventory_1 = inventory; _i < inventory_1.length; _i++) {
        var inv = inventory_1[_i];
        inventoryValue = inventoryValue + (inv.product.price * inv.quantity);
    }
    return inventoryValue;
}
var InvValue = calcInventoryValue(inventory);
console.log(InvValue);
