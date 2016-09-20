//Problem #1

var string = {
  pluralize: function(theString){
    var whereYIs = theString.lastIndexOf('y');
    var realStringLenght = (theString.length - 1);
    var answer = whereYIs - realStringLenght === 0?
      theString.slice(0,realStringLenght) + 'ies'
      :
      theString + 's';

    console.log(answer)
  }
}

var myArray = ['cat','controller','tape','literacy','chair'];

console.log(myArray.forEach(function(a){
  return string.pluralize(a);
}))




//Problem #2



//First Part
 function Book(bookProp){
   this.title= bookProp.title;
   this.quantity= bookProp.quantity;
   this.price= bookProp.price
 }
 Book.prototype.getSubtotal = function(){
   return this.quantity * this.price
 }

//First Part logs Commented Out as is Implemented in Second Part

// var oojsBook = new Book({ title: 'Object Oriented JavaScript', quantity: 2, price: 10 });

// console.log(oojsBook.title); // Object Oriented JavaScript
// console.log(oojsBook.quantity); // 2
// console.log(oojsBook.price); // 10
// console.log(oojsBook.getSubtotal()); // 20


//Second Part
var book1 = new Book({ title: 'Object Oriented JavaScript', quantity: 1, price: 10 });
var book2 = new Book({ title: 'JavaScript Web Applications', quantity: 2, price: 15 });
var book3 = new Book({ title: 'PHP Object Oriented Solutions', quantity: 1, price: 20 });
var book4 = new Book({ title: 'Head First Java', quantity: 5, price: 20 });


function ShoppingCart(arr){
  this.items = arr.map(function(item){return item});
}

ShoppingCart.prototype.add = function(book){
  this.items.push(book);
}

ShoppingCart.prototype.getTotal = function(){
  var reduceToPrices = this.items.reduce(function(i,current){
      return i+ current.price * current.quantity
    },0)

  return reduceToPrices
 }

 var cart = new ShoppingCart([book1, book2]);
 cart.add(book3);
 cart.add(book4);
 var subtotal = cart.getTotal();
 console.log(subtotal,cart); // 160





//Problem #3



//Implemented with iterative for loop
// Array.prototype.map2 = function(callBackFunction){
//   var results = [];
//   for(var i=0;i<this.length;i++){
//     results.push(callBackFunction(this[i]));
//   }
//   return results
// }

//Implemented with forEach
Array.prototype.map2 = function(callBackFunction){
  var results = [];
  this.forEach(function(element){
    results.push(callBackFunction(element))
  })
  return results
};

var numbers = [1, 2, 3, 4, 5];

var awesomeNewPrototype = numbers.map2(function(number){
  return number/2
})

console.log(awesomeNewPrototype)
