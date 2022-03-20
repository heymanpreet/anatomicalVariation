// Handles loading the events for <model-viewer>'s slotted progress bar
let finalScoreArr = [];
let cysticDuctSteps = ["hotspot1", "hotspot2", "hotspot3", "hotspot4"]
let cysticArterySteps = ["hotspot5", "hotspot6", "hotspot7", "hotspot8"]
let stepMap = { "Step1": 1, "Step2": 2, "Step3": 3 }
let incorrectDuctMsg = 'Wrong Duct Selection. Try Again!';
let correctDuctMsg = "Success! Correct Duct Position Selected";
let incorrectArteryMsg = 'Wrong Artery Selection. Try Again!';
let correctArteryMsg = "Success! Correct Artery Position Selected";

const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
  } else {
    progressBar.classList.remove('hide');
    if (event.detail.totalProgress === 0) {
      event.target.querySelector('.center-pre-prompt')?.classList.add('hide');
    }
  }
};
document.getElementById("surgery-model").style.display = 'none';
document.querySelector('model-viewer').addEventListener('progress', onProgress);

// Customize code
// Code for changing model on click
var allAnnotations = document.getElementsByClassName('HotspotAnnotation');
// document.getElementById("start-game").addEventListener("click", () => {
//   console.log("click 1");
//   document.getElementById("surgery-model").style.display = 'block';
//   document.getElementById("initialModel").style.display = 'none';
//   for (var i = 0; i < allAnnotations.length; i++) {
//     allAnnotations[i].style.display = "none";
//   }
//   // document.getElementById("initialModel").removeAttribute('data-visibility-attribute')
//   document.getElementById("surgery-model").removeAttribute('display');
//   document.getElementById("levelInfo").innerHTML = "Level 1"
//   level1();
//   // document.getElementById("hotspot1").setAttribute('data-visibility-attribute', visibility);
// })

function playGame() {
  console.log("click 1");
  document.getElementById("surgery-model").style.display = 'block';
  document.getElementById("initialModel").style.display = 'none';
  for (var i = 0; i < allAnnotations.length; i++) {
    allAnnotations[i].style.display = "none";
  }
  // document.getElementById("initialModel").removeAttribute('data-visibility-attribute')
  document.getElementById("surgery-model").removeAttribute('display');
  document.getElementById("gameInfo").innerHTML = "Step 1: Choose the Correct Duct Position"
  level1();
  // document.getElementById("hotspot1").setAttribute('data-visibility-attribute', visibility);
}

var allDuct = document.getElementsByClassName('duct');
var allArtery = document.getElementsByClassName('artery');
var allDuctIncorrect = document.getElementsByClassName('ductIncorrect');

function level1() {
  for (var i = 0; i < allArtery.length; i++) {
    allArtery[i].style.display = "none";
  }
}

function testFunc(duct) {
  console.log(duct);
}

document.getElementById('ductCorrect').addEventListener("click", () => {
  console.log("Correct Duct Selected");
  alert("Correct Duct Selected");
  level2();
})

// document.getElementById('ductIncorrect').addEventListener("click", () => {
//   console.log("Correct Duct Selected");
//   alert("Correct Duct Selected");
//   level2();
// })

function level2() {
  document.getElementById("gameInfo").innerHTML = "Step 2: Choose the Correct Artery Position"
  for (var i = 0; i < allArtery.length; i++) {
    allArtery[i].style.display = "block";
  }
  for (var i = 0; i < allDuct.length; i++) {
    allDuct[i].style.display = "none";
  }
}

document.getElementById('arteryCorrect').addEventListener("click", () => {
  console.log("Correct Artery Selected");
  alert("Correct Artery Selected");
  alert("GAME WON")
  for (var i = 0; i < allAnnotations.length; i++) {
    allAnnotations[i].style.display = "none";
  }
  location.reload();
})



// Previous Game Idea [Set of correct steps]

// let stepMap = {"Step1":1,"Step2":2,"Step3":3}
// let gameWon = document.getElementById("gameWon");
// document.getElementById("hotspot1").addEventListener("click", () => {
//   console.log("click 1");
//   if (finalScoreArr.length == 0) {
//     finalScoreArr.push("Step1");
//   } else {
//     alert("Surgery Step wrong! Start Again");
//     finalScoreArr = []
//   }
//   // document.getElementById("hotspot1").setAttribute('data-visibility-attribute', visibility);
// })

// document.getElementById("hotspot2").addEventListener("click", () => {
//   console.log("click 2");
//   if (finalScoreArr.length == 1 && finalScoreArr[0] == "Step1") {
//     finalScoreArr.push("Step2");
//   } else {
//     alert("Surgery Step wrong! Start Again");
//     finalScoreArr = []
//   }
// })

// document.getElementById("hotspot3").addEventListener("click", () => {
//   console.log("click 3");
//   if (finalScoreArr.length == 2 && finalScoreArr[1] == "Step2") {
//     finalScoreArr.push("Step3");
//     alert("Surgery Successfull!")
//     document.getElementById("gameWon").style("opacity", 1);
//     document.getElementById("gameStart").style("opacity", 0.4);
//     finalScoreArr = []
//   } else {
//     alert("Surgery Step wrong! Start Again");
//   }
// })


