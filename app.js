const items = [];
let totalPrice = 0;
let itemNumbers = 0;

function details(itemName, itemPrice) {
    // Check if the item is already in the cart
    var existingItem = items.find(item => item.name === itemName);

    if (existingItem) {
        // If item already in cart increase quantity
        existingItem.quantity += 1;
    } else {
        // item  not in the cart add it as new item
        items.push({
            name: itemName,
            price: itemPrice,
            quantity: 1
        });
    }
    totalPrice += itemPrice;
    itemNumbers+=1
    updateCart()
}
function updateCart(){
    cartNumber = document.getElementById("cart-value");
    cartNumber.innerHTML = itemNumbers;
}

function showResults(){
    console.log('Items:')
    for (var i=0;i<items.length;i++) {
        console.log(
        `Item-Name:${items[i].name} - Quantity:${items[i].quantity}`);
    }
    console.log('Total Price:',totalPrice)
}