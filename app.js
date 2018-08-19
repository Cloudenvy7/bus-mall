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
new Product('bag' ,'img/assets/bag.jpg');
new Product ('banana','img/assets/banana.jpg');
new Product ('bathroom','img/assets/bathroom.jpg');
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
new Product ('water-can','img/assets/water-can.jpg');
new Product ('wine-glass','img/assets/wine-glass.jpg');


//this setts the new variables with the index that hold the img objects
var productOne = Product.imageArray[0];
var productTwo = Product.imageArray[1];
var productThree = Product.imageArray[2];

//this function is created to make sure the random pictures are created
//cont.. and that the next pictures selected are not the same as the previous
//cont... or the same as each other
function generateRandomNumber(){
  var randIndex = Math.floor(Math.random() * Product.imageArray.length);
  return randIndex;
}

//puttting the unique random index numbers into an array
var pastIndex = [];

function displayingRandomImg() {

  do{
    //the variables below are taking in random generated numbers
    firstIndex = generateRandomNumber();
    secondImgIndex = generateRandomNumber();
    thirdImgIndex = generateRandomNumber();
    // console.log(newIndex);

    //tested the while loop with this console.log
  // the loop makes sure to generate new random numbers for each index until each number is different
  } while (
    firstIndex === secondImgIndex ||
    firstIndex === thirdImgIndex ||
    secondImgIndex === thirdImgIndex ||
    pastIndex.includes(firstIndex) ||
    pastIndex.includes(secondImgIndex) ||
    pastIndex.includes(thirdImgIndex)
  );
  //this is taking in the index numbers that have past through and are next to be displayed. when it r
  pastIndex = [firstIndex,secondImgIndex,thirdImgIndex];

  //assigns the generated numbers into the Product variables
  productOne = Product.imageArray[firstIndex];
  productTwo = Product.imageArray[secondImgIndex];
  productThree = Product.imageArray[thirdImgIndex];

  // this takes the checked img paths and applies them to the img src -- on the dom.
  img1.src = productOne.imgPath;
  // console.log(img1.src);
  img2.src = productTwo.imgPath;
  // console.log(img2.src);
  img3.src = productThree.imgPath;
  // console.log(img3.src);
  console.log('this is ' + totalVotes + ' total votes');
}

var voteItemList = [];

function listingOutVotes() {
  // console.log(voteItem);

  var voteItem = document.getElementById('voteList');
  for (var i = 0; i < Product.imageArray.length ; i++ ) {
    voteItemList = document.createElement('li');
    // voteCounted = Product.imageArray[i].votes;
    // console.log(voteItemList);
    voteItemList.textContent = Product.imageArray[i].votes;// creates a li
    // console.log(Product.imageArray[i].votes);
    voteItem.appendChild(voteItemList);
  }
}



// decalaring the index variables that will used to compare index files and then the product locations
var firstIndex = 0;
var secondImgIndex =  0;
var thirdImgIndex =  0;

//need a function that makes sure there are no duplicates. this needs to take in the old imgs and compare them against the newm images ---> this can be done by giving the html location id tags
var img1 = document.getElementsByTagName('img')[0];
var img2 = document.getElementsByTagName('img')[1];
var img3 = document.getElementsByTagName('img')[2];

// function twentyFiveVotes(){

//creating a function that will take recongize when a image is
//clicked and take the image click and add click to that item
// after 25 clicks the function/loop will end.
//afterwards the votes for each img will be displayed in a list beside the
var totalVotes = 0;

img1.addEventListener('click', function() {
  productOne.votes++;
  // console.log(productOne.votes);
  // console.log(productOne.imgPath);
  totalVotes++;
  untilTwentyFiveVotes();

});

img2.addEventListener('click', function() {
  productTwo.votes++;
  // console.log(productTwo.votes);
  // console.log(productTwo.imgPath);
  totalVotes++;
  untilTwentyFiveVotes();

});
img3.addEventListener('click', function() {
  productThree.votes++;
  // console.log(productThree.votes);
  // console.log(productThree.imgPath);
  totalVotes++;
  untilTwentyFiveVotes();
});


function untilTwentyFiveVotes(){
  if (totalVotes < 25){
    displayingRandomImg();
  } else {
    document.getElementById('imageContainer').style.display = 'none';  
    listingOutVotes();
  }
}

