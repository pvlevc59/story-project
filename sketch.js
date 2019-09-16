var veryHungry = false;

function setup() {

  // Change these to change the title and author of the story
  document.getElementById('title').innerHTML="Survive"; // title

  document.getElementById('author').innerHTML="Philip and Chase"; // author



  // All of your code goes under here


  var story = 'Jeff is one of the few survivers, and has to constantly scavange for food. He has  ' + many() + ' days of supplies left. He will have to go scavange for more soon. ' + delicious(); //



  printToPage(story); // Print the text to the webpage
}



// Put your functions below here:

function many() {
  let hours = Math.floor(random(1, 6)); // Random number rounded down
  if(hours > 3) {
    veryHungry = true;
  }
  return hours
}

function delicious() {
  if(veryHungry == true) {
    return "Jeff gets to a gas station, but discovers a zombie there. He is attacked by the zombie and joins the rest of the world." + zombie();
  } else {
    let inspection = inspects();
    return inspection;
  }
}

function inspects() {
  let insp = random(1, 6);
  if(insp > 2) {
    return "Jeff doesn't seem to find any place to loot at, and decides to go back before it's too late."
  } else {
    return "Jeff gets to a gas station undetected, and manages to find some useful things."
  }
}

function zombie() {
  let insp = random(1,6);
  if(insp < 2) {
    return " Jeff wakes up from acoma, turns out his sufers weren't real."
  } else {
    return " Jeff wakes up from acoma, turns out all he went through was fake."
  }
}

//Don't delete this!
function printToPage(story) {
  var para = document.createElement("P");
  var t = document.createTextNode(story);
  para.appendChild(t);
  document.getElementById("story").appendChild(para);
}
