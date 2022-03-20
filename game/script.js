// Handles loading the events for <model-viewer>'s slotted progress bar
let finalScoreArr = [];
let cysticDuctSteps = ["hotspot1", "hotspot2", "hotspot3", "hotspot4"]
let cysticArterySteps = ["hotspot5", "hotspot6", "hotspot7", "hotspot8"]
let stepMap = { "Step1": 1, "Step2": 2, "Step3": 3 }
let incorrectDuctMsg = 'Wrong Duct Selection. Try Again!';
let correctDuctMsg = "Success! Correct Duct Position Selected";
let incorrectArteryMsg = 'Wrong Artery Selection. Try Again!';
let correctArteryMsg = "Success! Correct Artery Position Selected";
let modelVariations = ["Variation1","Variation2","Variation3"]

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

var allDuct = document.getElementsByClassName('duct');
var allArtery = document.getElementsByClassName('artery');
var allDuctIncorrect = document.getElementsByClassName('ductIncorrect');
var randomModel="";
let modelChosen = "";

function playGame() {
  console.log("Inside Play game");
  modelChosen = chooseRandomVariation();
  console.log(modelChosen);
  if(modelChosen === "Variation2" || modelChosen === "Variation3") {
    console.log("new variation loaded", modelChosen);
    let dataPos = ["-0.3552096719684242m 1.2456929395136690m 0.040007125816591720m","-0.1466726729106973m 1.1028475575899914m 0.2681700563100633m", "0.16031878363460766m 1.1922762902724382m 0.10223714331708356m", "0.06623753449542974m 0.898236003012161m -0.22684328645750534m"];
    let dataNormal = ["-0.11558259688526682m 0.7026778852050230m 0.7020573003260172m","-0.674191723264059m 0.6194095471531671m 0.4022403922752504m","-0.2961416404656753m 0.9543568864140729m 0.03876934531734015m","0.00406993678408369m 0.9999302883788468m 0.011083952236009437m"];
    for (var i = 0; i < allDuct.length; i++) {
      allDuct[i].setAttribute("data-position",dataPos[i])
      allDuct[i].setAttribute("data-normal",dataNormal[i])
    }
    // let arteryDataPos = ["-0.3552096719684242m 1.2456929395136690m 0.040007125816591720m","-0.1466726729106973m 1.1028475575899914m 0.2681700563100633m", "0.16031878363460766m 1.1922762902724382m 0.10223714331708356m", "0.06623753449542974m 0.898236003012161m -0.22684328645750534m"];
    // let arteryDataNormal = ["-0.11558259688526682m 0.7026778852050230m 0.7020573003260172m","-0.674191723264059m 0.6194095471531671m 0.4022403922752504m","-0.2961416404656753m 0.9543568864140729m 0.03876934531734015m","0.00406993678408369m 0.9999302883788468m 0.011083952236009437m"];
    // for (var i = 0; i < allArtery.length; i++) {
    //   allArtery[i].setAttribute("data-position",arteryDataPos[i])
    //   allArtery[i].setAttribute("data-normal",arteryDataNormal[i])
    // }
  }
  let modelSrc = "Assets/gameSurgeryModel/" + modelChosen + ".glb"
  document.getElementById("surgery-model").setAttribute("src",modelSrc)
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

function chooseRandomVariation() {
    randomModel = modelVariations[Math.floor(Math.random() * modelVariations.length)];
    console.log("model chosen",randomModel);
    return randomModel;
}

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


