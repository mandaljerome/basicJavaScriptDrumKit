for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML
    soundEffect(buttonInnerHTML);
    getAnnimation(buttonInnerHTML);
  }) 
}

document.addEventListener("keydown", function(event) {
    soundEffect(event.key);
    getAnnimation(event.key);
})

function soundEffect (para1) {
    if (para1 === "w") {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
      } else if (para1 === "a") {
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
      } else if (para1 === "s") {
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
      } else if (para1 === "d") {
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
      } else if (para1 === "j") {
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
      } else if (para1 === "k") {
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
      } else {
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
      }
}

function getAnnimation(para1){
    var activeButton = document.querySelector("." + para1);
    activeButton.classList.add("pressed");
    setTimeout( function () {
        activeButton.classList.remove("pressed");
    }, 100);
    
    
}

