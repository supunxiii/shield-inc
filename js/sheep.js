// function to store a value in the localstorage.
function storeValue(key, value) {
  window.localStorage.setItem(key, value);
}

// function to retrieve a value from the localstorage.
function retrieveValue(key) {
  return window.localStorage.getItem(key);
}

// main game function.
function play() {
  // getting the user's score from the localstorage.
  var score = retrieveValue("score");
  if (score === null) {
    score = 0;
  }

  // incrementing the user's score.
  score++;

  // storing the user's score back in the localstorage.
  storeValue("score", score);

  // displaying the user's score.
  document.getElementById("score").innerHTML = score;
}
