console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item) {
  console.log(`Adding an item to my cart: ${item}`);
  basket.push(item);
  return true;
}

console.log(addItem('socks'));
console.log(addItem('eggs'));
console.log(addItem('toothbrush'));

function listItems() {
  for (let i = 0; i < basket.length; i++) {
   console.log(basket[i]);
  }
  return 'Nothing else in the basket'
}

console.log(addItem('ice cream'));
console.log(addItem('rice'));
console.log(listItems());

function empty(contents) {
  for (let i = 0; i <= contents; i++) {
    basket.pop();
  }
  return basket;
}

console.log(`emptying the basket ${empty(5)}`);
