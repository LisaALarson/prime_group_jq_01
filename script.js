$(document).ready(function(){
	setInterval(function(){
		variatePrice(market);
		console.log("apple" +apple.price);
		console.log("orange" +orange.price);

	//$("div").remove(".fruitClass");

	//$("body").append("<div></div>");
	// var fruitBasket = ("<div/>", {
	// 	class: "fruitClass"
	// });
	var fruitBasket;

	// var $el = $("body").children().last();
	$(".fruitBasket").children().remove();
	$(".fruitBasket").append("<p>"+apple.name+": $"+apple.price+"</p>");
	$(".fruitBasket").append("<p>"+orange.name+": $"+orange.price+"</p>");
	$(".fruitBasket").append("<p>"+banana.name+": $"+banana.price+"</p>");
	$(".fruitBasket").append("<p>"+grape.name+": $"+grape.price+"</p>");
	$(".fruitBasket").append("<p>"+pear.name+": $"+pear.price+"</p>");
	$("fruitDiv").append(fruitBasket);

	
	}, 15000);


	
});//end document ready

	var apple = {name:"Apples", price:randomNumber(0.5, 9.5)};
	var orange = {name:"Oranges", price:randomNumber(0.5, 9.5)};
	var banana = {name:"Bananas", price:randomNumber(0.5, 9.5)};
	var grape = {name:"Grapes", price:randomNumber(0.5, 9.5)};
	var pear = {name:"Pears", price:randomNumber(0.5, 9.5)};
	var market =[apple, orange, banana, grape, pear];

function variatePrice (array) {
	var upDown = randomNumber(1, 2);
	for (var i = 0; i < array.length; i++) {
		if (array[i].price == 9.5) {
			array[i].price -= 0.5;
			upDown = randomNumber(1, 2);
		} else if (array[i].price == 0.5) {
			array[i].price += 0.5;
			upDown = randomNumber(1, 2);
		} else if (upDown === 2) {
			array[i].price -= 0.5;
			upDown = randomNumber(1, 2);
		} else {
			array[i].price += 0.5;
		}
	}
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

// function randomNumber(min, max) {
// 	var priceNow = (Math.floor((Math.random() * (1 + max - min) + min)*100))/100;
// 	return priceNow;
// }

	//var fruit = {"Apples", "Oranges", "Bananas", "Grapes", "Pears"};
	var userCash = 100;

	// function fruitCreator (fruit){
	// 	fruit.type = type;
	// 	fruit.initialPrice = priceGenerator();
	// 	fruit.currentPrice = variatePrice(fruit.currentPrice);
	// 	fruit.quantity = quantity;
	// }

	// var apple = new fruitCreator("Apples");
	// var orange = new fruitCreator("Oranges");
	// var banana = new fruitCreator("Bananas");
	// var grape = new fruitCreator("Grapes");
	// var pear = new fruitCreator("Pears");
	// var quantity;

	// function priceGenerator(){
	// 	var initialPrice = randomNumber(1, 9.99);
	// 	return initialPrice;
	// }

	// setInterval(function(fruit){
	// 	var n = randomNumber(0,1);
	// 	if(n==0){
	// 		fruit.currentPrice+=0.5;
	// 	}
	// 	else{
	// 		fruit.currentPrice-=0.5;
	// 	}
	// 	return fruit.currentPrice;
	// }, 15000);

	// function maxMin (){
	// 	if(fruit.currentPrice >= 10){
	// 		fruit.currentPrice=9.99;
	// 	}
	// 	else if(fruit.currentPrice<0.5){
	// 		fruit.currentPrice=0.5
	// 	}

	// }

	

