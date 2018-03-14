"use strict";
// As an extra challenge, you can build the product listings
// by looping over this array and creating HTML for each element.
// This will be best accomplished after we do lesson 09.
var products = [{
  "name": "Reversible Plaid",
  "price": 26.99,
  "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
  "imageTitle": "reversible-plaid.jpg"
}, {
  "name": "Wool Cable Knit",
  "price": 49.99,
  "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
  "imageTitle": "wool-cable.jpeg"
}, {
  "name": "Northern Lights",
  "price": 29.99,
  "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
  "imageTitle": "northern-lights.jpg"
}, {
  "name": "Ombre Infinity",
  "price": 11.99,
  "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
  "imageTitle": "ombre-infinity.jpg"
}, {
  "name": "Fringed Plaid",
  "price": 18.99,
  "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
  "imageTitle": "fringed-plaid.jpeg"
}, {
  "name": "Multi Color",
  "price": 22.99,
  "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
  "imageTitle": "multi-color.jpeg"
}, {
  "name": "Etro Paisley-Print Silk",
  "price": 249.99,
  "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
  "imageTitle": "etro.png"
}, {
  "name": "Ashby Twill",
  "price": 70.99,
  "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
  "imageTitle": "twill.jpg"
}];
// JS form handler function to be triggered on submission of the email signup form:
function emailSubmission() {
  event.preventDefault();
  var eMailAddress = document.mailingList.email.value;
  alert("Thank you for signing up to our newsletter!!");
  console.log("Thanks for signing up for our mailing list, " + eMailAddress + "!");
}
// JS function to add/remove items from cart
// init global varibles:
var cart = [];
var totalPrice = 0;
// function for working shopping cart tally
function putIntoCart(nameOfItem, price) {
  event.preventDefault();
  var i = cart.indexOf(nameOfItem);
  // push/splice item into cart array:
  if (i === -1) {
    cart.push(nameOfItem);
    totalPrice = totalPrice + price;
  } else {
    cart.splice(i, 1);
    totalPrice = totalPrice - price;
  }
  // keep number tally of cart item size next to cart icon:
  if (cart.length !== 0) {
    document.querySelector("#cartcount").innerHTML = "(" + cart.length + ")";
  }
  // when cart is empty, no number will appear beside cart icon:
  else {
    document.querySelector("#cartcount").innerHTML = "";
  }
  // Console log the total price amount of cart:
  console.log(cart.length + " products for $" + totalPrice.toFixed(2) + " total.");
}
// Console log all the product names that are in the cart array when user clicks on shopping cart icon:
function cartInventory() {
  console.log("You have the following items in your cart: " + cart.join(", ") + ".");
}