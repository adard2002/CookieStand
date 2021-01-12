'use strict';
console.log('This is the app.js connected.');

//

// constructor function

function Pet(name, breed, imageName, interests, isGoodWithKids, isGoodWithDogs, isGoodWithCats){
  this.name = name,
  this.breed = breed,
  this.imageName = imageName,
  this.interests = interests,
  this.isGoodWithKids = isGoodWithKids,
  this.isGoodWithDogs = isGoodWithDogs,
  this.isGoodWithCats = isGoodWithCats
}


Pet.prototype.setAge = function(){
  this.age = randomAge(3,12) + ' Months old.';
};

// Create the random age
function randomAge(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}


Pet.prototype.getInterests = function(){
  var randomIndex = Math.floor(Math.random() * this.interests.length);
  return this.interests[randomIndex];
};

Pet.prototype.render = function(){
  // Grab the Parent element
  // Create the child elements article, h2, p, ul, li, interests and image
  var parentElement = document.getElementById('kittenProfiles');

  // article
  var article = document.createElement('article');
  parentElement.appendChild(article);

  // h2
  var h2 = document.createElement('h2');
  h2.textContent = this.name;
  article.appendChild(h2);

  // paragraph
  var petPara = document.createElement('p');
  // template literal use back ticks and the $ to mix strings and js stuff.
  petPara.textContent = `${this.name} is adorable, and is ${this.age} months old.`;

  // pet interests
  var ul = document.createElement('ul');
  article.appendChild(ul);
  // fill list items
  for(var i = 0; i < this.interest.length; i++){
    var li = document.createElement('li');
    // update the li to new interests
    li.textContent = this.interests[i];
    // add to the ul list item
    ul.appendChild(li);
  }

  var img = document.createElementNS('img');
  img.setAttribute('src', 'images/' + this.imageName + '.jpeg');
  img.setAttribute('alt', 'Adopt ' + this.name + 'NOW!, no TODAY!');
  article.appendChild(img);

}; // closes the render prototype 




// Add a Table
  var animalTable = document.getElementById('adoptPets-holder');
  var petRow = document.createElement('tr');
  // create element
  var nameCell = document.createElement('td');
  // update the text content
  nameCell.textContent = this.name;
  // then append
  petRow.appendChild(nameCell);

  // breed 
  var breedCell = document.createElement('td');
  breedCell.textContent = this.breed;
  petRow.appendChild(breedCell);

  // ageCell (same setup as breed, etc.)
  var ageCell = document.createElement('td');
  ageCell.textContent = this.breed;
  petRow.appendChild(ageCell);

  // interests
  var breedCell = document.createElement('td');
  interestsCell.textContent = this.interests;
  breedCell.textContent = this.breed;
  petRow.appendChild(breedCell);

  animalTable.appendChild(petRow);












var firstPet = new Pet('Nova', 'Lab', 'labradorDog', ['chewy Toys','Playin Keep Away','Dog Park'], true, true, true);
firstPet.setAge();
firstPet.getInterests();

var secondPet = new Pet('Charlie', 'Maine Coon', 'mainCoon', ['sleeping','catnip','playing on the bottom of the stairs', 'he\'s shy'], false, false, false);
secondPet.setAge();
secondPet.getInterests();

var thirdPet = new Pet('Kratos', 'Shorthair', 'shortHair', ['sleep','laser light','waking up in middle of night lol'], true, true, true);
thirdPet.setAge();
thirdPet.getInterests();

var adoptPet = [firstPet, secondPet, thirdPet];


// loop through the objects to show some information on the page.
for(var i = 0; i < adoptPet.length; i++){
  adoptPet[i].render();
}


// iife 