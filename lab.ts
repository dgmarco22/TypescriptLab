// TALLEST MOUNTAIN

// Declare an interface called Mountain that contains the following properties:
// name - string
// height - number

interface Mountain{
    name: string; 
    height: number;
}

//Declare an array called mountains which is an array of type Mountain. 
//Fill the array with the following mountains:
const mountains : Mountain[]= [
    {name: 'Kilimanjaro', height: 19341},
    {name: 'Everest', height: 29029},
    {name: 'Denali', height: 20310},
];

//Declare a function called findNameOfTallestMountain. It takes one parameter, an
//array of Mountain objects. It returns a string, the name of the tallest mountain in the
//given array. If the array argument is empty, return an empty string ("").
function findNameOfTallestMountain(mtns : Mountain[]) : string{
        let nameOfTallestMountain : string = "";
        let tallestHeight : number = 0;
        for ( const mtn of mtns) {
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
let tallestMountain : string = findNameOfTallestMountain(mountains);
console.log(tallestMountain);

//PRODUCTS

//Declare an interface called Product that contains the following properties:
//name - string
//price - number

interface Product{
    name: string; 
    price: number;
}

//Declare an array called products which is an array of type Product.
//Fill the array with a few products of your own choosing.
const products : Product[]= [
    {name: 'shampoo', price: 5},
    {name: 'bodywash', price: 10},
    {name: 'makeup', price: 15},
];

//Declare a function called calcAverageProductPrice. It takes one parameter, an array
//of Product objects. It returns a number, the average price of all the products provided
//as an argument. If the array argument is empty, return 0.

function calcAverageProductPrice(products : Product[]) : number {
    let averageProductPrice : number = 0;
    let totalPrice : number = 0;
    for (let product of products) {
        totalPrice = totalPrice + product.price;
    }
    averageProductPrice = totalPrice/ products.length
    return averageProductPrice;  
}

//Call calcAverageProductPrice, passing it your products array as an argument.
//Store the result of the function call (the return value) in a variable and then 
//console.log the variable.
 let avgProdPrice : number = calcAverageProductPrice(products);
 console.log(avgProdPrice);

//INVENTORY

//Declare an interface called InventoryItem that contains the following properties:
//product - Product (from above)
//quantity - number

 interface InventoryItem {
     product: Product;
     quantity: number;
 }

//Declare an array called inventory which is an array of type InventoryItem.
//Fill the array with the following information.
 const inventory : InventoryItem[]= [
     {
         product:{
             name:'motor', 
             price: 10.00,
             }, 
             quantity: 10, 
    },
    {
        product:{
            name:'sensor', 
            price: 12.50,
            }, 
            quantity: 4, 
   },
   {
    product:{
        name:'LED', 
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

     function calcInventoryValue(inventory : InventoryItem[]) : number {
         let inventoryValue: number = 0;

         for (let inv of inventory) {
            inventoryValue = inventoryValue + (inv.product.price * inv.quantity);
        }
        return inventoryValue;
     }    

     let InvValue : number = calcInventoryValue(inventory);
     console.log(InvValue);