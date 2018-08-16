'user strict';
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
var productOne = new Product('img/assets/bag.jpg');
var productTwo = new Product ('img/assets/banana.jpg');
var productThree = new Product ('img/assets/bathroom.jpg');
new Product ('img/assets/boots.jpg');
new Product ('img/assets/breakfast.jpg');
new Product ('img/assets/bubblegum.jpg');
new Product ('img/assets/chair.jpg');
new Product ('img/assets/cthulhu.jpg');
new Product ('img/assets/dog-duck.jpg');
new Product ('img/assets/dragon.jpg');
new Product ('img/assets/pen.jpg');
new Product ('img/assets/pet-sweep.jpg');
new Product ('img/assets/scissors.jpg');
new Product ('img/assets/shark.jpg');
new Product ('img/assets/sweep.png');
new Product ('img/assets/tauntaun.jpg');
new Product ('img/assets/usb.gif');
new Product ('img/assets/usb.gif');
new Product ('img/assets/water-can.jpg');
new Product ('img/assets/wine-glass.jpg');

//this function is created to make sure the random pictures are created
//cont.. and that the next pictures selected are not the same as the previous
//cont... or the same as each other

function displayingRandomImg() {

  var firstIndex = Math.floor(Math.random() * Product.imageArray.length);
  //this line creates a new var that has the [index number] of image array within the Product
  productOne = Product.imageArray[firstIndex];
  // do a test
  do {
    //create a var that holds the index location of the 2nd product img
    var secondImgIndex =  Math.floor(Math.random() * Product.imageArray.length);
    var thirdImgIndex =  Math.floor(Math.random() * Product.imageArray.length);
    // while the first index and second index are the same continue do-ing wthe line above
  } while (firstIndex === secondImgIndex || firstIndex === thirdImgIndex || secondImgIndex === thirdImgIndex);
  // sett the new 


  productTwo = Product.imageArray[secondImgIndex];
  productThree = Product.imageArray[thirdImgIndex];


  //need to store in img.src --> for all the 
  img1.src = productOne.filename;
  img2.src = productTwo.filename;
  img3.src = productThree.filename;
}

// do {
//   //create a var that holds the index location of the 2nd product img
//   var thirdImgindex =  Math.floor(Math.random() * Product.imageArray.length);
// } while (thirdImgIndex === firstIndex || thirdImgindex === secondImgIndex)
// productThree = Product.imageArray[thirdImgindex];

var img1 = document.getElementsByTagName('img')[0];
var img2 = document.getElementsByTagName('img')[1];
var img3 = document.getElementsByTagName('img')[2];

img1.addEventListener('click', function() {
  productOne.votes++;
  console.log(productOne.votes);
  console.log(productOne.filename);
  displayingRandomImg();
});

img2.addEventListener('click', function() {
  productTwo.votes++;
  displayingRandomImg();
});

img3.addEventListener('click', function() {
  productThree.votes++;
  displayingRandomImg();
});