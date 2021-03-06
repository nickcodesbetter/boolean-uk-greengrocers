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


const cartItems = [
    {
      item: {
        id: "010-eggplant", // <- the item id matches the icon name in the assets/icons folder
        name: "eggplant",
        price: 0.45 // <- You can come up with your own prices
      },
      quantity: 0
    },
    {
    item: {
      id: "001-beetroot", // <- the item id matches the icon name in the assets/icons folder
      name: "beetroot",
      price: 0.35 // <- You can come up with your own prices
    },
    quantity: 2
  },
  {
    item: {
      id: "002-carrot", // <- the item id matches the icon name in the assets/icons folder
      name: "carrot",
      price: 0.40 // <- You can come up with your own prices
    },
    quantity: 2
  },
  {
    item: {
      id: "003-apple", // <- the item id matches the icon name in the assets/icons folder
      name: "apple",
      price: 0.25 // <- You can come up with your own prices
    },
    quantity: 2
  },
  {
    item: {
      id: "004-apricot", // <- the item id matches the icon name in the assets/icons folder
      name: "apricot",
      price: 0.35 // <- You can come up with your own prices
    },
    quantity: 2
  },
  {
    item: {
      id: "005-avocado", // <- the item id matches the icon name in the assets/icons folder
      name: "avacado",
      price: 0.38 // <- You can come up with your own prices
    },
    quantity: 2
  },
  {
    item: {
      id: "006-bananas", // <- the item id matches the icon name in the assets/icons folder
      name: "bananas",
      price: 0.15 // <- You can come up with your own prices
    },
    quantity: 2
  },
  {
    item: {
      id: "007-bell-pepper", // <- the item id matches the icon name in the assets/icons folder
      name: "beetroot",
      price: 0.50 // <- You can come up with your own prices
    },
    quantity: 2
  },
  {
    item: {
      id: "008-berry", // <- the item id matches the icon name in the assets/icons folder
      name: "berry",
      price: 0.70 // <- You can come up with your own prices
    },
    quantity: 2
  },
    {
    item: {
      id: "009-blueberry", // <- the item id matches the icon name in the assets/icons folder
      name: "blueberry",
      price: 0.60 // <- You can come up with your own prices
    },
    quantity: 2
  },
]

// Add below?
// const newCartItem = {
//   item: storeItem
//   quantity: 1
// }

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


const storeItemListEl = document.querySelector(".store--item-list")
const cartItemListEl = document.querySelector(".cart--item-list")


// Store section


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

/* <li>
  <div class="store--item-icon">
    <img src="assets/icons/001-beetroot.svg" alt="beetroot" />
  </div>
  <button>Add to cart</button>
</li> */

// console.log(data)

function createStoreItem(storeItemList) {
    // console.log("Inside createStoreItem: ", storeItemList)

    storeItemListEl.innerHTML = ""

    for(let i = 0; i < storeItemList.length; i++) {
     const storeItem = storeItemList[i]
      // console.log(storeItem)
    const storeItemListItemEl = document.createElement("li");
     
     const storeItemDivEl = document.createElement("div");
     storeItemDivEl.className = "store--item-icon";
      // console.log("Inside storreItemDivEl: ", storeItemDivEl)
    //  I'm not sure about the below - img , it makes sense to me to include it
     const storeItemImgEl = document.createElement("img");
    //  src?
     storeItemImgEl.src = `assets/icons/${storeItem.id}.svg`;
    storeItemImgEl.alt = storeItem.name

    const storeItemButtonEl = document.createElement("button")
    // console.log(storeItemButtonEl)
    storeItemButtonEl.innerHTML = "Add to Cart"

    storeItemListEl.append(storeItemListItemEl)
    storeItemListItemEl.append(storeItemDivEl)
    storeItemDivEl.append(storeItemImgEl)
    storeItemListItemEl.append(storeItemButtonEl)
    
  }

}
createStoreItem(data)
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
function createCartItem(cartItemList) {
  // console.log("Inside createCartItem: ", cartItemList)

  cartItemListEl.innerHTML = ""

  for(let i = 0; i < cartItemList.length; i++) {
   const cartItem = cartItemList[i]
   const item = cartItem.item;
    // console.log(cartItem)
    const cartItemListItemEl = document.createElement("li");
    // console.log("Inside cartItemListEl: ", cartItemListEl)
   
   const cartItemImgEl = document.createElement("img");
   cartItemImgEl.className = "cart--item-icon";
   cartItemImgEl.src = `assets/icons/${cartItem.item.id}.svg`;
   cartItemImgEl.alt = cartItem.item.name
     // console.log("Inside cartItemImgEl: ", cartItemImgEl)

  //  Why is this not working? - says it's unused
  //  const cartItemParagraghEl = document.createElement("p");
  //  console.log("Inside cartItemParagraphEl: ", cartItemParagraphEl)
   
   const cartItemRemoveButtonEl = document.createElement("button");
   cartItemRemoveButtonEl.className = "quantity-btn remove-btn center"
  //  console.log("Inside cartItemRemoveButtonEl: ", cartItemRemoveButtonEl)
  cartItemRemoveButtonEl.innerText = "-"

   // add number ?
   const cartItemSpanEl = document.createElement("span")
 
   cartItemSpanEl.className = "quantity-text center"
   .id = cartItem.quantity
  //  console.log("Inside cartItemSpanEl: ", cartItemSpanEl)
   cartItemSpanEl.innerHTML = cartItem.quantity

   const cartItemAddButtonEl = document.createElement("button")
   cartItemAddButtonEl.className = "quantity-btn remove-btn center"
  //  console.log("Inside cartItemAddButtonEl:", cartItemAddButtonEl)
   cartItemAddButtonEl.innerText = "+"

   cartItemAddButtonEl.addEventListener("click", () => {
    // console.log("Item onClick: ", item);
    addToCart(item, cartItems);
    createCartItem(cartItems);
  });

  cartItemListEl.append(cartItemListItemEl)
   cartItemListItemEl.append(cartItemImgEl)
  //  cartItemListItemEl.append(cartItemParagraphEl)
   cartItemListItemEl.append(cartItemRemoveButtonEl)
   cartItemListItemEl.append(cartItemSpanEl)
   cartItemListItemEl.append(cartItemAddButtonEl)
   
   
}

}
createCartItem(cartItems)


// delete - Stevens

function addToCart(storeItem, cartItems) {
  // console.log("Inside addToCart: ", storeItem, cartItems.length);

  let itemFound = false;

  // ONE JOB: Check if storeItem exists in cartItems
  // If it finds it... update the quanity and update itemFound.

  for (let i = 0; i < cartItems.length; i++) {
    const cartItem = cartItems[i];

    // console.log("Inside Loop: ", storeItem, cartItem);
    if (storeItem.id === cartItem.item.id) {
      // console.log("I found a matching item in the cart!");
      cartItem.quantity = cartItem.quantity + 1;

      itemFound = true;
    }
  }

  // console.log(!itemFound);

  // ONE JOB: If storeItem doesn't exist in cart... add to cart
  if (!itemFound) {
    const newCartItem = {
      item: storeItem,
      quantity: 1
    };

    cartItems.push(newCartItem);
  }
}

// delete - Stevens

// 1.1 I need to take a storeItem object away from the list of items in the cartItems array.
// 1.2 steps - If I click the minus button, then it will take one away from the total quanitity of that item in the cart.
// 1.3 actions - make a function removeButton & add Event Listener (last thing to do)
// 1.4 within the function removeButton, there needs to a for loop like the addButton, with an if statement, but not as complicated I don't think because we're not starting off with 0, but it will  be more complicated, who knows.
// does there need to be an iffound=true/false? probably not
function removeButton(storeItem, cartItems) {
    // console.log(storeItem, cartItems.length)
// I need to do a for loop here to run through the cartItems array
    // I need an if/else statement of if quantity is > / >= 2 (when remove button is clicked - include in function?), take away 1 from the quanityt...else remove item from cart
   
    // let quantityDeducted = false

    for (let i = 0; i < cartItems.length; i++) {
      // I assume, you don't need this - I have been trying to use console.log, but when it doesn't work and I'm stuck I just feel I should just crack on with the exercise just to get it done, otherwise I feel like I am using up time. I need to work on using console.log more effectively...
      const cartItem = cartItems[i];
      console.log(storeItem, cartItems.length)
      

    if (cartItem.quantity = 0) {
      console.log("items that equal 0: ", cartItem)
      
      cartItems.splice(cartitem);

      else(cartItem.quantity >= 2)
      cartItem.quantity = cartItem.quantity - 1;




    }

  }

  // if (quantityDeducted) {
  //   const newCartItem = {
  //     item: storeItem,
  //     quantity: 1
  //   };

  //   cartItems.push(newCartItem);
    }



// 5.0 createTotalPrice/calculator
// 5.1 retrieve price from data being added or 
// ...multiplied in the cart.
// 5.2 or deducted.