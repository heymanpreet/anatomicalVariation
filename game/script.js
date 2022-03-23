// Handles loading the events for <model-viewer>'s slotted progress bar
let finalScoreArr = [];
let cysticDuctSteps = ["hotspot1", "hotspot2", "hotspot3", "hotspot4"]
let cysticArterySteps = ["hotspot5", "hotspot6", "hotspot7", "hotspot8"]
let stepMap = { "Step1": 1, "Step2": 2, "Step3": 3 }
let incorrectDuctMsg = 'Wrong Duct Selection';
let incorrectSegmentMsg = 'Wrong Segment 4 selected'
let correctSegmentMsg = 'Success! Correct Segment Position selected'
let correctDuctMsg = "Success! Correct Duct Position Selected";
let incorrectArteryMsg = 'Wrong Artery Selection. Try Again!';
let correctArteryMsg = "Success! Correct Artery Position Selected";
let modelVariations = ["Variation1", "Variation2", "Variation3", "Variation4"]

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
var allDuct = document.getElementsByClassName('duct');
var allArtery = document.getElementsByClassName('artery');
var allSegment = document.getElementsByClassName('segment');
var allLigamentum = document.getElementsByClassName('ligamentum');
var allEnteric = document.getElementsByClassName('enteric');
var randomModel = "";
let modelChosen = "";

function playGame(variationName) {
  console.log("Inside Play game");
  // MULTIPLE VARIATIONS SELECTION STARTS
  if (variationName === 'lowInsertion') {
    modelChosen = 'Variation1'
  }
  if (variationName === 'commonVariation') {
    modelChosen = 'Variation4'
    // If 3D Coordinates are different for variations
    if (modelChosen === "Variation4") {
      console.log("new variation loaded", modelChosen);
      let dataPos = ["-0.14840950536014041m 1.1564379093482846m -0.031130452577088685m", "-0.12546020398291902m 1.1258133729125877m 0.036593510107020055m", "-0.11593311935400363m 1.1388081440826685m -0.0012354971961914263m", "-0.12396137576660093m 1.1075382460649101m 0.10047564916969953m"];
      let dataNormal = ["-0.600425872818109m 0.17068710613008964m 0.7812519971504376m", "0.06412339430070056m 0.9652005089782467m 0.25352744973964964m", "0.28640766731377815m 0.8185077025716752m 0.498011836139181m", "0.6376900655482832m 0.5748199523723125m 0.5127703215433971m"];
      for (var i = 0; i < allDuct.length; i++) {
        allDuct[i].setAttribute("data-position", dataPos[i])
        allDuct[i].setAttribute("data-normal", dataNormal[i])
      }
      // let arteryDataPos = ["-0.3552096719684242m 1.2456929395136690m 0.040007125816591720m","-0.1466726729106973m 1.1028475575899914m 0.2681700563100633m", "0.16031878363460766m 1.1922762902724382m 0.10223714331708356m", "0.06623753449542974m 0.898236003012161m -0.22684328645750534m"];
      // let arteryDataNormal = ["-0.11558259688526682m 0.7026778852050230m 0.7020573003260172m","-0.674191723264059m 0.6194095471531671m 0.4022403922752504m","-0.2961416404656753m 0.9543568864140729m 0.03876934531734015m","0.00406993678408369m 0.9999302883788468m 0.011083952236009437m"];
      // for (var i = 0; i < allArtery.length; i++) {
      //   allArtery[i].setAttribute("data-position",arteryDataPos[i])
      //   allArtery[i].setAttribute("data-normal",arteryDataNormal[i])
      // }
    }
  }
  if (variationName === 'highVariation') {
    modelChosen = 'Variation1'
  }
  if (variationName === 'duplicatedVariation') {
    modelChosen = 'Variation1'
  }
  if (variationName === 'randomVariation') {
    modelChosen = chooseRandomVariation();
    console.log(modelChosen);
    // If 3D Coordinates are different for variations
    if (modelChosen === "Variation4") {
      console.log("new variation loaded", modelChosen);
      let dataPos = ["-0.14840950536014041m 1.1564379093482846m -0.031130452577088685m", "-0.12546020398291902m 1.1258133729125877m 0.036593510107020055m", "-0.11593311935400363m 1.1388081440826685m -0.0012354971961914263m", "-0.12396137576660093m 1.1075382460649101m 0.10047564916969953m"];
      let dataNormal = ["-0.600425872818109m 0.17068710613008964m 0.7812519971504376m", "0.06412339430070056m 0.9652005089782467m 0.25352744973964964m", "0.28640766731377815m 0.8185077025716752m 0.498011836139181m", "0.6376900655482832m 0.5748199523723125m 0.5127703215433971m"];
      for (var i = 0; i < allDuct.length; i++) {
        allDuct[i].setAttribute("data-position", dataPos[i])
        allDuct[i].setAttribute("data-normal", dataNormal[i])
      }
      // let arteryDataPos = ["-0.3552096719684242m 1.2456929395136690m 0.040007125816591720m","-0.1466726729106973m 1.1028475575899914m 0.2681700563100633m", "0.16031878363460766m 1.1922762902724382m 0.10223714331708356m", "0.06623753449542974m 0.898236003012161m -0.22684328645750534m"];
      // let arteryDataNormal = ["-0.11558259688526682m 0.7026778852050230m 0.7020573003260172m","-0.674191723264059m 0.6194095471531671m 0.4022403922752504m","-0.2961416404656753m 0.9543568864140729m 0.03876934531734015m","0.00406993678408369m 0.9999302883788468m 0.011083952236009437m"];
      // for (var i = 0; i < allArtery.length; i++) {
      //   allArtery[i].setAttribute("data-position",arteryDataPos[i])
      //   allArtery[i].setAttribute("data-normal",arteryDataNormal[i])
      // }
    }
  }


  let modelSrc = "Assets/gameSurgeryModel/" + modelChosen + ".glb"
  document.getElementById("surgery-model").setAttribute("src", modelSrc)
  // MULTIPLE VARIATIONS SELECTION ENDS
  // HIDING INITIAL MODEL, ANNOTATIONS AND LOADING SURGERY MODEL 
  document.getElementById("surgery-model").style.display = 'block';
  document.getElementById("initialModel").style.display = 'none';
  for (var i = 0; i < allAnnotations.length; i++) {
    allAnnotations[i].style.display = "none";
  }
  document.getElementById("surgery-model").removeAttribute('display');
  document.getElementById("gameInfo").innerHTML = "Step 1: Liver segment IV acts as a fixed landmark during surgery. Identify liver segment IV."
  level1();
}

function chooseRandomVariation() {
  randomModel = modelVariations[Math.floor(Math.random() * modelVariations.length)];
  console.log("model chosen", randomModel);
  return randomModel;
}

function level1() {
  for (var i = 0; i < allArtery.length; i++) {
    allArtery[i].style.display = "none";
  }
  for (var i = 0; i < allDuct.length; i++) {
    allDuct[i].style.display = "none";
  }
  for (var i = 0; i < allLigamentum.length; i++) {
    allLigamentum[i].style.display = "none";
  }
  for (var i = 0; i < allEnteric.length; i++) {
    allEnteric[i].style.display = "none";
  }
}

// SEGMENT SELECTION STEP STARTS

// Wrong SEGMENT Clicked
function segmentClicked(segment) {
  console.log(segment);
  var segmentClicked = document.getElementsByClassName(segment);
  console.log(segmentClicked);
  // segmentClicked[1].style.display = "block";
  for (var i = 0; i < segmentClicked.length; i++) {
    segmentClicked[i].style.background = "red";
    segmentClicked[i].style.display = "block";
    // segmentClicked[i].innerHTML = incorrectSegmentMsg;
  }
  // segmentClicked[1].innerHTML = incorrectSegmentMsg;
}

// CORRECT SEGMENT SELECTED
document.getElementById('segmentCorrect').addEventListener("click", () => {
  // swal("Good job!", "Correct Segment IV identified!", "success");
  console.log("Correct Segment IV identified");
  alert("Correct Segment IV identified");
  // level2();
  level5();
})

// SEGMENT SELECTION STEP ENDS

// Second step Loading and Hiding data
function level2() {
  document.getElementById("gameInfo").innerHTML = "Step 5: Cystic duct variations are common. This structure must be clipped during surgery. Identify the cystic duct."
  for (var i = 0; i < allDuct.length; i++) {
    allDuct[i].style.display = "block";
  }
  for (var i = 0; i < allAnnotations.length; i++) {
    allAnnotations[i].style.display = "none";
  }
  for (var i = 0; i < allArtery.length; i++) {
    allArtery[i].style.display = "none";
  }
}

// DUCT SELECTION STEP STARTS

// Wrong duct Clicked
function ductClicked(duct) {
  console.log(duct);
  var ductClicked = document.getElementsByClassName(duct);
  // ductClicked[1].style.display = "block";
  for (var i = 0; i < ductClicked.length; i++) {
    ductClicked[i].style.background = "red";
    ductClicked[1].style.display = "block";
  }
  // ductClicked[1].innerHTML = incorrectDuctMsg;
}

// CORRECT DUCT SELECTED
document.getElementById('ductCorrect').addEventListener("click", () => {
  swal("Good job!", "Correct Cystic Duct identified!", "success");
  successModal.style.display = "block";
  console.log("Correct Cystic Duct identified");
  // alert("Correct Cystic Duct identified");
  // level3();
  for (var i = 0; i < allAnnotations.length; i++) {
    allAnnotations[i].style.display = "none";
  }
})

// DUCT SELECTION STEP ENDS

// Third step Loading and Hiding data
function level3() {
  document.getElementById("gameInfo").innerHTML = "Step: 4: The cystic artery (CA) commonly originates form the right hepatic artery (RHA). If the CA is not found, RHA can be clipped. Find the RHA."
  for (var i = 0; i < allArtery.length; i++) {
    allArtery[i].style.display = "block";
  }
  for (var i = 0; i < allAnnotations.length; i++) {
    allAnnotations[i].style.display = "none";
  }
  for (var i = 0; i < allLigamentum.length; i++) {
    allLigamentum[i].style.display = "none";
  }
}

// ARTERY SELECTION STEP STARTS

// CORRECT ARTERY SELECTED
document.getElementById('arteryCorrect').addEventListener("click", () => {
  swal("Good job!", "Correct Right Hepatic Artery(RHA) identified!", "success");
  console.log("Correct Artery identified");
  // alert("Correct Right Hepatic Artery(RHA) identified");
  level2();
  // alert("GAME WON")
  // for (var i = 0; i < allAnnotations.length; i++) {
  //   allAnnotations[i].style.display = "none";
  // }
  // location.reload();
})

//Wrong Artery Clicked
function arteryClicked(artery) {
  console.log(artery);
  var arteryClicked = document.getElementsByClassName(artery);
  arteryClicked[1].style.display = "block";
  for (var i = 0; i < arteryClicked.length; i++) {
    arteryClicked[i].style.background = "red";
    arteryClicked[1].style.display = "block";
  }
  // arteryClicked[1].innerHTML = incorrectArteryMsg;
}

// ARTERY SELECTION STEP ENDS

// Fourth step Loading and Hiding data
function level4() {
  document.getElementById("gameInfo").innerHTML = "Step 3: Size of segment IV can be estimated by looking at the distance between the gallbladder and umbilical fissure. Identify the umbilical fissure."
  for (var i = 0; i < allLigamentum.length; i++) {
    allLigamentum[i].style.display = "block";
  }
  for (var i = 0; i < allAnnotations.length; i++) {
    allAnnotations[i].style.display = "none";
  }
  for (var i = 0; i < allEnteric.length; i++) {
    allEnteric[i].style.display = "none";
  }
}

// Ligamentum Teres SELECTION STEP STARTS

// Wrong duct Clicked
function ligamentumClicked(ligamentum) {
  console.log(ligamentum);
  var ligamentumClicked = document.getElementsByClassName(ligamentum);
  // ductClicked[1].style.display = "block";
  for (var i = 0; i < ligamentumClicked.length; i++) {
    ligamentumClicked[i].style.background = "red";
    ligamentumClicked[1].style.display = "block";
  }
  // ductClicked[1].innerHTML = incorrectDuctMsg;
}

// CORRECT Ligamentum Teres SELECTED
document.getElementById('ligamentumCorrect').addEventListener("click", () => {
  swal("Good job!", "Correct Umbilical fissure identified!", "success");
  console.log("Correct umbilical fissure identified");
  // alert("Correct Umbilical fissure identified");
  level3();
})

// Ligamentum Teres SELECTION STEP ENDS

// Fifth step Loading and Hiding data
function level5() {
  document.getElementById("gameInfo").innerHTML = "Step 2: The surgeon must be aware of the surrounding structures for orientation. Identify an enteric structure."
  for (var i = 0; i < allEnteric.length; i++) {
    allEnteric[i].style.display = "block";
  }
  for (var i = 0; i < allAnnotations.length; i++) {
    allAnnotations[i].style.display = "none";
  }
  for (var i = 0; i < allSegment.length; i++) {
    allSegment[i].style.display = "none";
  }
}

// Ligamentum Teres SELECTION STEP STARTS

// Wrong duct Clicked
function entericClicked(enteric) {
  console.log(enteric);
  var entericClicked = document.getElementsByClassName(enteric);
  // ductClicked[1].style.display = "block";
  for (var i = 0; i < entericClicked.length; i++) {
    entericClicked[i].style.background = "red";
    entericClicked[1].style.display = "block";
  }
  // ductClicked[1].innerHTML = incorrectDuctMsg;
}

// Get the modal
var successModal = document.getElementById('successModal');
var infoModal = document.getElementById('infoModal');
var nextModal = document.getElementById('nextModal');
var closeModal1 = document.getElementsByClassName("close")[0];
var closeModal2 = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal 1
closeModal1.onclick = function () {
  successModal.style.display = "none";
  gameEndImage = document.getElementById('gameEndImage');
  if (modelChosen == 'Variation1') {
    gameEndImage.setAttribute('src', 'Assets/low-insertion.png')
  }
  if (modelChosen == 'Variation4') {
    gameEndImage.setAttribute('src', 'Assets/common-variation.png')
  }
  infoModal.style.display = "block";
  successModal.style.display = "none";
  // location.reload();
}

// When the user clicks on <span> (x), close the modal 2
closeModal2.onclick = function () {
  infoModal.style.display = "none";
  location.reload();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == successModal) {
    successModal.style.display = "none";
    infoModal.style.display = "none";
    location.reload();
  }
}

// CORRECT Ligamentum Teres SELECTED
document.getElementById('entericCorrect1').addEventListener("click", () => {
  swal("Good job!", "Correct Enteric Structure Stomach identified!", "success");
  console.log("Correct enteric Structure identified");
  // alert("Correct Enteric Structure Stomach identified");
  // alert("GAME WON")
  for (var i = 0; i < allAnnotations.length; i++) {
    allAnnotations[i].style.display = "none";
  }
  // location.reload();
  level4();
})

document.getElementById('entericCorrect2').addEventListener("click", () => {
  swal("Good job!", "Correct Enteric Structure Duodenum identified!", "success");
  console.log("Correct enteric Structure identified");
  // alert("Correct Enteric Structure Duodenum identified");
  // alert("GAME WON")
  for (var i = 0; i < allAnnotations.length; i++) {
    allAnnotations[i].style.display = "none";
  }
  // location.reload();
  level4();
})

// Open 2nd Model
gameEndImage = document.getElementById('gameEndImage');
document.getElementById('nextModal').addEventListener("click", () => {
  if (modelChosen == 'Variation1') {
    gameEndImage.setAttribute('src', 'Assets/low-insertion.png')
  }
  if (modelChosen == 'Variation4') {
    gameEndImage.setAttribute('src', 'Assets/common-variation.png')
  }
  infoModal.style.display = "block";
  successModal.style.display = "none";
})

// Ligamentum Teres SELECTION STEP ENDS



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


