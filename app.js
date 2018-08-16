'user strict';
{
//need to take the directory of img 
//measure the length of the img directory
//and create a range between lowest number and highest
//returning a number that represents a locaiton in the img directory/array 
//var imgDirectory = URL();


//constructor for the product
// function Product(filename) {
//   this.filename = name;
//   this.votes = 0;
//   this.displayCount = 0;
//   //  this.imgPath = imgPath;
//   Product.imgArray.push(this);
// }
// Product.imgArray = [];

// var bag = new Product('img/assets/bag.jpg');
// var bannana = new Product('img/assets/banana.jpg');
// new Product('img/assets/boots.jpg');
// new Product('img/assets/bathroom.jpg') ;
// new Product('img/assets/breakfast.jpg') ;
// new Product('img/assets/boots.jpg') ;
// new Product('img/assets/chair.jpg') ;
// new Product('img/assets/cthulhu.jpg') ;
// new Product( 'img/assets/dog-duck.jpg') ;
// new Product( 'img/assets/dragon.jpg') ;
// new Product('img/assets/pen.jpg') ;
// new Product('img/assets/pet-sweep.jpg') ;
// new Product( 'img/assets/scissors.jpg') ;
// new Product( 'img/assets/shark.jpg') ;
// new Product( 'img/assets/sweep.png') ;
// new Product( 'img/assets/tauntaun.jpg') ;
// new Product( 'img/assets/unicorn.jpg') ;
// new Product( 'img/assets/usb.gif') ;
// new Product( 'img/assets/water-can.jpg') ;
// new Product('img/assets/wine-glass.jpg') ;


// var randIndex = Math.floor(Math.random() * Product.imgArray.length);

// function displayThreeImages(randIndex){

//   var productOne = Product.imgArray[randIndex];
//   do {
//     var secondProductIndex = Math.floor(Math.random() * Product.imgArray.length);
//   } while (randIndex === secondProductIndex);
//   var productTwo = Product.imgArray[secondProductIndex];

//   do {
//     var thirdProductIndex = Math.floor(Math.random() * Product.imgArray.length);
//   } while (randIndex === thirdProductIndex || secondProductIndex === thirdProductIndex);
//   var productThree = Product.imgArray[thirdProductIndex];

//   firstImage.src = productOne.filename;
//   secondImage.src = productTwo.filename;
//   thirdImage.src = productThree.filename;
// }

// // first image
// var firstImage = document.getElementById('image1');
// var secondImage = document.getElementById('image2');
// var thirdImage = document.getElementById('image3');

// //  var img2 = document.getElementsByTagName('img/assets')[1];

// firstImage.addEventListener('click', function() {
//   Product.imgArray[randIndex].votes++;
//   displayThreeImages();
//   console.log(Product.imgArray[randIndex].votes);
// });

// secondImage.addEventListener('click', function() {
//   Product.imgArray[randIndex].votes++;
//   displayThreeImages();
//   console.log(Product.imgArray[randIndex].votes);
// });

// thirdImage.addEventListener('click', function() {
//   Product.imgArray[2].votes++;
//   displayThreeImages();
//   console.log(Product.imgArray[randIndex].votes);
// });
}
// starting from the begining agian


function Product(filename) {
  // (this) refers to the object name that is intiated with Product
  this.filename = filename;
  // (this) refers appends the vote property to object intiated with Product
  this.votes = 0;
  //????the action push takes (the object) and places in at the end of imageArray within the Product
  Product.imageArray.push(this);
}
// this is decleartion (creation) of the imageArray (object) within Product constructor
Product.imageArray = [];

//these line below intialize new Products, which (populates) the objects with the 
//cont... properties of the Product Constructor function above
var productOne = new Product = ('img/assets/bag.jpg');
var productTwo = new Product = ('img/assets/banana.jpg');
var productThree = new Product = ('img/assets/bathroom.jpg');
new Product = ('img/assets/boots.jpg');
new Product = ('img/assets/breakfast.jpg');
new Product = ('img/assets/bubblegum.jpg');
new Product = ('img/assets/chair.jpg');
new Product = ('img/assets/cthulhu.jpg');
new Product = ('img/assets/dog-duck.jpg');
new Product = ('img/assets/dragon.jpg');
new Product = ('img/assets/pen.jpg');
new Product = ('img/assets/pet-sweep.jpg');
new Product = ('img/assets/scissors.jpg');
new Product = ('img/assets/shark.jpg');
new Product = ('img/assets/sweep.png');
new Product = ('img/assets/tauntaun.jpg');
new Product = ('img/assets/usb.gif');
new Product = ('img/assets/usb.gif');
new Product = ('img/assets/water-can.jpg');
new Product = ('img/assets/wine-glass.jpg');

//this function is created to make sure the random pictures are created
//cont.. and that the next pictures selected are not the same as the previous
//cont... or the same as each other

function RandomNumberGen(){
  var firstIndex = Math.floor(Math.random() * Product.imageArray.length);
  //this line creates a new var that has the [index number] of image array within the Product
  productOne = Product.imageArray[firstIndex];
  // do a test
  do {
    //create a var that holds the index location of the 2nd product img
    var secondImgindex =  Math.floor(Math.random() * Product.imageArray.length);
    // while the first index and second index are the same continue do-ing wthe line above
  } while (secondImgIndex === firstIndex)
  // sett the new 
  productTwo = Product.imageArray[secondImgindex];
  
  do {
    //create a var that holds the index location of the 2nd product img
    var thirdImgindex =  Math.floor(Math.random() * Product.imageArray.length);
  } while (thirdImgIndex === firstIndex || thirdImgindex === firstIndex)

  productThree = Product.imageArray[thirdImgindex];

}