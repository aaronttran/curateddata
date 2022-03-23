let cars = [{
  brand: "Lexus",
  color: "black"
}, {
  brand: "Honda",
  color: "red"
}, {
  brand: "Toyota",
  color: "white"
}, {
  brand: "Mercedes",
  color: "grey"
}, {
  brand: "BMW",
  color: "blue"
}, {
  brand: "Audi",
  color: "green"
}];

let randomIndex;
let animating = false;
let pics = [];
let imageCounter = 0;
let startRandomizerButton;
let addMoreButton;
let cnv;
//let nameInputs = [];
//let firstTime = true;

function preload(){
  for (let i = 0; i <= 5; i++){
    pics[i] = loadImage(`assets/car_${i}.JPG`)
  }
}

function setup() {
  cnv = createCanvas(600, 600);
  cnv.parent("#canvasDiv");

  background(220);
  textSize(32);
  textFont('Courier new');
  textAlign(CENTER);
  textStyle(BOLD);
  fill(255);
  imageMode(CENTER);
  frameRate(8);

  text("Click Button to Randomize", width / 2, height / 2);

  //button = createButton("Click to Randomize");
  startRandomizerButton = select("#randButton")
  startRandomizerButton.mousePressed(buttonPressed);
  startRandomizerButton.class("randomizerButton");

  addMoreButton = select("#addMoreButton")
  addMoreButton.mousePressed(addAnotherInput);

/*  for (let i = 0; i < 3; i++) {
    nameInputs.push(createInput());
    nameInputs[nameInputs.length - 1].parent("#inputFields");
  }*/
}

function draw() {
  if(animating == true){
    clear();
    image(pics[imageCounter], width/2, height/2);

    if (imageCounter < pics.length - 1){
      imageCounter++;
    } else {
      imageCounter = 0;
    }
  }
}

function addAnotherInput(){
  cars.push(createInput());
  cars[cars.length - 1].parent("#inputFields");
}



function randomizer(){
  animating = false;
  if (cars[0]){
  //background(random(200, 255));
  clear();
  randomIndex = int(random(cars.length));
  console.log(cars[randomIndex].brand);
  image(random(pics), width / 2, height / 2);
  text(cars[randomIndex].brand, width / 2, height - 90);
  } else {
  background(random(200, 255));
  text("Nothing left!", 50, 50);
  }
}

function buttonPressed(){

/*if (firstTime == true){
  for (let i = 0; i < nameInputs.length; i++) {
    cars.push(nameInputs[i].value());
  }
  firstTime = false;
}
*/
  animating = true;
  setTimeout(randomizer, 2000);
}
