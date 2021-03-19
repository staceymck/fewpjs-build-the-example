// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorModal = document.getElementById("modal");
errorModal.classList.add("hidden");

document.addEventListener("DOMContentLoaded", () => {
  listenForHeartClicks();
});

function listenForHeartClicks() {
  const hearts = document.querySelectorAll("span.like-glyph");
  hearts.forEach(heart => {
    heart.addEventListener("click", (e) => {

      mimicServerCall()
        .then(function() {
          if(e.target.classList.contains("activated-heart")) {
            e.target.classList.remove("activated-heart");
            e.target.innerText = EMPTY_HEART;
          } else {
            e.target.classList.add("activated-heart");
            e.target.innerText = FULL_HEART;
          }
        })
        .catch(function(error) {
          console.log(error.message);
          errorModal.classList.remove("hidden");
          setTimeout(() => {
            errorModal.classList.add("hidden");
          }, 5000);
      })
    })
  });
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
