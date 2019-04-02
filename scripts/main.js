var wordJungle = ["Tarzan", "UptonFowl", "Ape", "Asphalt", "Pheasant", "Quail", "Flycatcher", "Safari", "Rumble", "Gym", "Leopard", "Sinclair", "Swamp", "Jackal", "Partridge", "Gorilla", "Cannibal", "Amazon", "Clearing", "Neon", "Canopy", "Foliage", "Boogie", "Camouflage", "Rainforest", "Elephant", "Beast", "Burroughs", "Monkey", "Tiger", "Boar", "Malaya", "Mangrove", "Vegetation", "Parrot", "Jaguar", "Hammock", "Fever", "Humidity", "Panther", "Growl", "Eater", "Thicket"];
//global
let time = 11;
let score = 0;
let isPlaying // Do I need this ? 
//Selectors
const container = document.getElementById("container");
const currentWord = document.getElementById("current_word");
const timeContainer = document.querySelector(".time span");
const scoreContainer = document.querySelector(".score span");
const message = document.getElementById("message");
const wordInput = document.getElementById("current_typing");

(function start() {
  //load word from array
  showWord(wordJungle);
  //Call countdown
  setInterval(countDown, 1000);
  //check game status
  setInterval(checkStatus, 50);
  //Start matching on wordInput
  wordInput.addEventListener("input", startMatch);
})();


function showWord(words) {
  // Generate random array index 
  const randIndex = Math.floor(Math.random() * words.length); // not length -1?
  //  Output random word 
  currentWord.innerHTML = words[randIndex];
}

function countDown() {
  //Make sure time is not run out
  if (time > 0) {
    //Decrement timer
    time--;
  } else if (time === 0) {
    // GAME OVER
    isPlaying = false;
  }
  //show  time
  timeContainer.innerHTML = time;
}


function startMatch() {

  if (matchWords()) {
    console.log("match")

    isPlaying = true;
    time = 12;
    showWord(wordJungle);
    wordInput.value = ''; //reset input here
    score ++ ;

  }
  //if score is -1 display 0
  // if(score = -1){
  //   scoreContainer.innerHTML = 0
  // } else {
  //   scoreContainer.innerHTML = score
  // }
  scoreContainer.innerHTML = score
}

function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!';
    return true;
  } else {
    message.innerHTML = ''; // usefull ?
    return false;
  }
}

//check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    // console.log("boug")
    message.innerHTML = "Game Over :(";
    score = -1;
  }
}

// input.setAttribute('size', input.getAttribute('placeholder').length);


/* class WordBubble: generate bubble, move up, exploding || diseppear */

//class WordBubble {
//constructor(word) {
// this.prop = this.getSize();
//this.word = word;
//}
// getSize() {
//   return {
//     height: 0,
//     width: 0
//   }
// }
// createBubble() {
//   // let markup = `<div class="word-container"><span></span></div>`
//   // container.innerHTML += markup
//   // console.log(markup) 
//   // console.log(container)
// }
// moveUp()
// explode()
// outOfscreen()
//}

/* class User: has name, lives, score */


// class User {
//   constructor(name, score,lives) {

//   }
// }


/* class Game: start the game */

// class Game {
//   constructor(level) {
// this.level = chooseLevel()
//   }
// chooseLevel(){
// return level
// }
//   start() {
//     var intervalID = setInterval(() => {
//       const bubble = new WordBubble(word_jungle[Math.random * (wordJungle.length - 1)]);
//       console.log(bubble)
//     }, 2000);
//   }
// }

// const game1 = new Game();
// game1.start();

// Test 