console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item) {
  console.log('Adding an item to my cart', item);
  basket.push(item);
  return true;
}
function listItems() {
  for (var i = 0; i < basket.length; i++) {
   console.log(basket[i]);
  }
}
console.log(addItem('socks'));
console.log(addItem('eggs'));
console.log(addItem('toothbrush'));
console.log(listItems());
