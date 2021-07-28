const data = [ 

{
  id: "001-beetroot", // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
},

{
  id: "002-carrot", // <- the item id matches the icon name in the assets/icons folder
  name: "carrot",
  price: 0.40 // <- You can come up with your own prices
},

{
  id: "003-apple", // <- the item id matches the icon name in the assets/icons folder
  name: "apple",
  price: 0.25 // <- You can come up with your own prices
},

{
  id: "004-apricot", // <- the item id matches the icon name in the assets/icons folder
  name: "apricot",
  price: 0.35 // <- You can come up with your own prices
},

{
  id: "005-avocado", // <- the item id matches the icon name in the assets/icons folder
  name: "avacado",
  price: 0.38 // <- You can come up with your own prices
},

{
  id: "006-bananas", // <- the item id matches the icon name in the assets/icons folder
  name: "bananas",
  price: 0.15 // <- You can come up with your own prices
},

{
  id: "007-bell-pepper", // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.50 // <- You can come up with your own prices
},

{
  id: "008-berry", // <- the item id matches the icon name in the assets/icons folder
  name: "berry",
  price: 0.70 // <- You can come up with your own prices
},
{
  id: "009-blueberry", // <- the item id matches the icon name in the assets/icons folder
  name: "blueberry",
  price: 0.60 // <- You can come up with your own prices
},

{
  id: "010-eggplant", // <- the item id matches the icon name in the assets/icons folder
  name: "eggplant",
  price: 0.45 // <- You can come up with your own prices
}

];


// Description
// In this exercise we explore a common scenario in eCommerce, adding and removing items from the cart, and calculating the total.

// Deliverables
// - A user can view a selection of items in the store
// - From the store, a user can add an item to their cart
// - From the cart, a user can view and adjust the number of items in their cart
// - If an item's quantity equals zero it is removed from the cart
// - A user can view the current total in their cart

// Instructions
// - Use this template as a starting point => https://codesandbox.io/s/js-exercise-greengrocer-template-grqi6
// - Use data structures to store your data
// - Create render functions to work with the data
// - Create action functions to update your data (for the Cart section)

// Tips
// - Use action functions with your Event Listeners, these will have names like addItemToCart and removeItemFromCart
// 
// Challenge 1
// - Add filters to the store ie. filter by item type; when a user clicks a filter they will only see items of that type

// Challenge 2
// - Add sorting to the store ie. sort by price or sort alphabetically; when a user clicks sort they will see a sorted list of items


/*

This is how an item object should look like

{
  id: "001-beetroot", // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/


// Plan

// 1.0 complete data structures for products

// {
//   id: "001-beetroot", // <- the item id matches the icon name in the assets/icons folder
//   name: "beetroot",
//   price: 0.35 // <- You can come up with your own prices
// }


// (What I came up with originally)
// const data{
    // id:
    // name:
    // image:
    // button:   
    //     
    // }
// (/What I came up with originally)


// 2.0 bridging
// 2.1 create bridge for the store items "store--item-list"
// 2.2 create bridge for the cart-items "cart--item-list"
// (I was thinking of including cart--item-list-container, but I don't think that would be correct)
// 2.3 create bridge for total section


const storeItemEl = document.querySelector(".store--item-list")
const cartItemEl = document.querySelector(".cart--item-list")


// Store section
/* <li>
  <div class="store--item-icon">
    <img src="assets/icons/001-beetroot.svg" alt="beetroot" />
  </div>
  <button>Add to cart</button>
</li> */

// 3.0 createStoreItemList(data)
// 3.1 for loop over data
// 3.2 each object in data is an item
// EDIT: second thoughts - maybe I should use this because I need to create the li somehow - maybe I should use 
// ... item.name as div can be used for the image(my original idea for 3.3 - use item.image to build the <li> 
// ...(I have decided to use item.image instead of item.name as there is an image displayed in the store rather 
// ...than a name like in the Dogslist, is this correct?)
// 3.3 create a <li> and append
// (I don't think anything similar to "const name = dog.name" is needed, as it can maybe just be blank )
// 3.4 create a <div> and append
// works with "store-item-icon", not completely certain, but it would make sense as it is the class and it 
// ...will most likely create the foundation for the image and the button 
// ...( ? not sure about this but classes are not in data, so it may not work, classes are found in the html...?)
// ...(... do classes work? - gap in knowledge/I can't quite remember...?)
// 3.5 create an <img> and append
// works with *EDIT: data.id - (original: data.image)* - although how do I link this to the images?
// 3.6 create a <button>
// works with nothing? keep blank?
// 3.7 create renderAddTpCartButton (basically copy renderPlusButton)
// 3.8 make sure renderADdToCartButton is part of the item/itemList for loop, so it's generated every iteration
// 3.9 Similarly to line 122 of the dog exercise, create addEventListener within the for loop
// 3.91 Ensure this is linked to the cart - renderCart - within the function

// function createStoreItem(data) {
  console.log(data)

// }
  
// Tips
// - Use action functions with your Event Listeners, these will have names like addItemToCart and removeItemFromCart
// 3.92 use action functions - addItemToCart and removeItemFromCart - should this be in the cart section?

// input: an array of items
// Output: nothing...yet (Need to link it to the cart)




// Cart Section

/* <li>
  <img
    class="cart--item-icon"
    src="assets/icons/001-beetroot.svg"
    alt="beetroot"
  />
  <p>beetroot</p>
  <button class="quantity-btn remove-btn center">-</button>
  <span class="quantity-text center">1</span>
  <button class="quantity-btn add-btn center">+</button>
</li> */

// 4.0 createCartItemList(data)
// 4.1 ensure that section is linked to the iterations
// 4.2 create a <li> <img>, <p>, <button> <span> and 
// ... <button> tags and append-rushed this, too simple?redo?
// 4.2 cont... include their classes.
// create function to remove and to add items
// ... would it be an if statement? if 0 then delete/remove

//  Tips
// - Use action functions with your Event Listeners, 
// ...these will have names like addItemToCart and removeItemFromCart
// 4.3 use action functions - addItemToCart and removeItemFromCart
// ... - link the buttons to totalPrice/calulator


// 5.0 createTotalPrice/calculator
// 5.1 retrieve price from data being added or 
// ...multiplied in the cart.
// 5.2 or deducted.