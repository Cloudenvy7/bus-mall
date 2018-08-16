'user strict';
// starting from the begining agian


function Product(name , imgPath) {
  // (this) refers to the object name that is intiated with Product
  this.name = name;

  this.imgPath = imgPath;
  // (this) refers appends the vote property to object intiated with Product
  this.votes = 0;

  // (this) refers appends the number of times this object has been displayed to the DOM 
  this.display = 0;
  //????the action push takes (the object) and places in at the end of imageArray within the Product
  Product.imageArray.push(this);
}
// this is decleartion (creation) of the imageArray (object) within Product constructor
Product.imageArray = [];

//these line below intialize new Products, which (populates) the objects with the 
//cont... properties of the Product Constructor function above
var productOne = new Product('bag' ,'img/assets/bag.jpg');
var productTwo = new Product ('banana','img/assets/banana.jpg');
var productThree = new Product ('bathroom','img/assets/bathroom.jpg');
new Product ('boots','img/assets/boots.jpg');
new Product ('breakfast','img/assets/breakfast.jpg');
new Product ('bubblegum','img/assets/bubblegum.jpg');
new Product ('chair','img/assets/chair.jpg');
new Product ('cthulhu','img/assets/cthulhu.jpg');
new Product ('dog-duck','img/assets/dog-duck.jpg');
new Product ('dragon','img/assets/dragon.jpg');
new Product ('pen','img/assets/pen.jpg');
new Product ('pet-sweep','img/assets/pet-sweep.jpg');
new Product ('scissors','img/assets/scissors.jpg');
new Product ('shark','img/assets/shark.jpg');
new Product ('sweep','img/assets/sweep.png');
new Product ('tauntaun','img/assets/tauntaun.jpg');
new Product ('usb','img/assets/usb.gif');
new Product ('usb','img/assets/usb.gif');
new Product ('water-can','img/assets/water-can.jpg');
new Product ('wine-glass','img/assets/wine-glass.jpg');

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

  img1.src = productOne.imgPath;
  img2.src = productTwo.imgPath;
  img3.src = productThree.imgPath;
 
  console.log('this ran good');
  test();

}


//need a function that makes sure there are no duplicates. this needs to take in the old imgs and compare them against the newm images ---> this can be done by giving the html location id tags

var img1 = document.getElementsByTagName('img')[0];
var img2 = document.getElementsByTagName('img')[1];
var img3 = document.getElementsByTagName('img')[2];

//   while(firstIndex === secondImgIndex || firstIndex === thirdImgIndex || secondImgIndex === thirdImgIndex);
// }


// creating a loop that interates 3 times and compares the current imgs to the previous ones  
function test() {
  for(var i = 0; i < 3; i++ ){
    if (document.getElementsByTagName('img')[i] !== productOne.imgPath) {
    //displayingRandomImg();
      console.log('this is working');
    }
  }
}



img1.addEventListener('click', function() {
  productOne.votes++;
  console.log(productOne.votes);
  console.log(productOne.imgPath);
  displayingRandomImg();
});

img2.addEventListener('click', function() {
  productTwo.votes++;
  console.log(productTwo.votes);
  console.log(productTwo.imgPath);
  displayingRandomImg();
});

img3.addEventListener('click', function() {
  productThree.votes++;
  console.log(productThree.votes);
  console.log(productThree.imgPath);
  displayingRandomImg();
});