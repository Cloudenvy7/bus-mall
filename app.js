'user strict';

//need to take the directory of img 
//measure the length of the img directory
//and create a range between lowest number and highest
//returning a number that represents a locaiton in the img directory/array 
//var imgDirectory = URL();

var imgArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg'];

function Product() {
  this.name = name;
  this.votes = 0;
  Product.imgArray.push(this);
}


function randomNumber(){
  return (Math.floor(Math.random() * imgArray.length));
}