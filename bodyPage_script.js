//The price of the first item
var item1Price = 0;

//The price of the second item
var item2Price = 0;

//The price of the third item
var item3Price = 0;

//The total price in the cart
var total;

/**
 * 
 * @param {string} p1 - The price of the first item
 * @param {string} p2 - The price of the second item
 * @param {string} p3 - The price of the third item
 */
function updateCart(p1,p2,p3){
    //Converting the prices to ints
    var price1 = parseInt(p1);
    var price2 = parseInt(p2);
    var price3 = parseInt(p3);

    //Getting the value of the inputs
    var item1Input = document.getElementById('item1Quantity').value;
    var item2Input = document.getElementById('item2Quantity').value;
    var item3Input = document.getElementById('item3Quantity').value;

    //If there is a valid input, change the quantity of the item
    if(item1Input!=''){
        item1Price=price1*parseInt(item1Input);
    }
    if(item2Input!=''){
        item2Price=price2*parseInt(item2Input);
    }
    if(item3Input!=''){
        item3Price=price3*parseInt(item3Input);
    }
    //Getting the total price
    total = parseInt(item1Price)+parseInt(item2Price)+parseInt(item3Price);
    //Displaying the total cost
    document.getElementById('totalPrice').innerHTML = "Total price: $"+total;
    //Displaying the quantity of each item
    document.getElementById('displayItem1Quantity').innerHTML="Current Quantity:" + item1Price/price1;
    document.getElementById('displayItem2Quantity').innerHTML="Current Quantity:" + item2Price/price2;
    document.getElementById('displayItem3Quantity').innerHTML="Current Quantity:" + item3Price/price3;
}