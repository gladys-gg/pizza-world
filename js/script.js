function pizzaOrder (size,topping,crust){
    this.size = size;
    this.topping = topping;
    this.crust =crust;
  };


  
  pizzaOrder.prototype.price = function(){
    var total = this.size + this.topping + this.crust;
    return total;
  };


   function getOrder() {
    document.getElementById('size').value=''; 
    document.getElementById('topping').value=''; 
    document.getElementById('crust').value='';
    document.getElementById('qty').value='';
  };


var pizzaSize= parseInt( $("#size").val());
var pizzaTopping = $("#topping").val();
var pizzaCrust= parseInt($("#crust").val());
var pizzaSize;
var pizzaCrust;
if (sizeValue===900 ){
pizzaSize = 'small';
}else if (sizeValue===1200){
pizzaSize = 'medium';
}else if (sizeValue===1500){
pizzaSize = 'large';
}


if (crustValue===200){
pizzaCrust = 'crispy';
} else if (crustValue===250){
pizzaCrust = 'stuffed'
} else if (crustValue===3000){
pizzaCrust = 'gluten-free'
} else if (crustValue===150){
pizzaCrust = 'flat-bread'
}else if (crustValue===100){
  pizzaCrust = 'Thin-crust'
}

var size = parseInt( $("#size").val());
var crust = parseInt($("#crust").val());
var topping = $("#topping").val();
var toppingSize; 
if (size===900 && topping =='Hawaiian'){
toppingSize = 150;
}  else if (size===1200 && topping =='Hawaiian'){
toppingSize = 150;
}else if (size===1500 && topping == 'Hawaiian'){
toppingSize = 150;
}else if (size===900 && topping =='Meat-Deluxe'){
toppingSize = 100;
}else if (size===1200 && topping =='Meat-Deluxe'){
toppingSize = 100;
}else if (size===1500 && topping == 'Meat-Deluxe'){
toppingSize = 100;
}else if (size===900 && topping =='Bacon'){
toppingSize = 200;
}else if (size===1200 && topping =='Bacon'){
toppingSize = 200;
}else if (size===1500 && topping=== 'Bacon'){
toppingSize = 200;
}else if (size===900 && topping == 'Cheese'){
toppingSize = 50;
}else if (size===1200 && topping == 'Cheese'){
toppingSize = 50;
}
else if (size===1500 && topping == 'Cheese'){
toppingSize = 50;
}else if (size===900 && topping == 'Tomato'){
toppingSize = 80;
}else if (size===1200 && topping == 'Tomato'){
toppingSize = 80;
}
else if (size===1500 && topping == 'Tomato'){
toppingSize = 80;
}
else {
toppingSize = 0;
alert('Please select Valid option');

}
var totalPrice = new pizza(size, toppingSize, crust); 


  //user interface logic
$(document).ready(function() {
  $("#myBtn").submit(function(event) {
    event.preventDefault();
    $("#result").show();
  });

});