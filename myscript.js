function one(dice_element) {
  dice_element.getElementsByClassName("r1c1")[0].setAttribute("class", "hide");
  dice_element.getElementsByClassName("r1c2")[0].setAttribute("class", "hide");
  dice_element.getElementsByClassName("r1c3")[0].setAttribute("class", "hide");
  dice_element.getElementsByClassName("r2c1")[0].setAttribute("class", "hide");
  dice_element.getElementsByClassName("r2c3")[0].setAttribute("class", "hide");
  dice_element.getElementsByClassName("r3c1")[0].setAttribute("class", "hide");
  dice_element.getElementsByClassName("r3c2")[0].setAttribute("class", "hide");
  dice_element.getElementsByClassName("r3c3")[0].setAttribute("class", "hide");
}

function two(dice_element) {
  dice_element.getElementsByClassName("r1c1")[0].setAttribute("class", "hide");
  dice_element.getElementsByClassName("r1c2")[0].setAttribute("class", "hide");
  dice_element.getElementsByClassName("r2c1")[0].setAttribute("class", "hide");
  dice_element.getElementsByClassName("r2c2")[0].setAttribute("class", "hide");
  dice_element.getElementsByClassName("r2c3")[0].setAttribute("class", "hide");
  dice_element.getElementsByClassName("r3c2")[0].setAttribute("class", "hide");
  dice_element.getElementsByClassName("r3c3")[0].setAttribute("class", "hide");
}

function three(dice_element) {
  dice_element.getElementsByClassName("r1c1")[0].setAttribute("class", "hide");
  dice_element.getElementsByClassName("r1c2")[0].setAttribute("class", "hide");
  dice_element.getElementsByClassName("r2c1")[0].setAttribute("class", "hide");
  dice_element.getElementsByClassName("r2c3")[0].setAttribute("class", "hide");
  dice_element.getElementsByClassName("r3c2")[0].setAttribute("class", "hide");
  dice_element.getElementsByClassName("r3c3")[0].setAttribute("class", "hide");
}

function four(dice_element) {
  dice_element.getElementsByClassName("r1c2")[0].setAttribute("class", "hide");
  dice_element.getElementsByClassName("r2c1")[0].setAttribute("class", "hide");
  dice_element.getElementsByClassName("r2c2")[0].setAttribute("class", "hide");
  dice_element.getElementsByClassName("r2c3")[0].setAttribute("class", "hide");
  dice_element.getElementsByClassName("r3c2")[0].setAttribute("class", "hide");
}

function five(dice_element) {
  dice_element.getElementsByClassName("r1c2")[0].setAttribute("class", "hide");
  dice_element.getElementsByClassName("r2c1")[0].setAttribute("class", "hide");
  dice_element.getElementsByClassName("r2c3")[0].setAttribute("class", "hide");
  dice_element.getElementsByClassName("r3c2")[0].setAttribute("class", "hide");
}

function six(dice_element) {
  dice_element.getElementsByClassName("r1c2")[0].setAttribute("class", "hide");
  dice_element.getElementsByClassName("r2c2")[0].setAttribute("class", "hide");
  dice_element.getElementsByClassName("r3c2")[0].setAttribute("class", "hide");
}

var score_1 = Math.floor(Math.random() * 5) + 1;
var score_2 = Math.floor(Math.random() * 5) + 1;

if (score_1 > score_2) {
  document.getElementById("header").innerHTML = "Player 1 Wins";
  document.getElementById("header").setAttribute("class", "h1_new");
} else if (score_1 == score_2) {
  document.getElementById("header").innerHTML = "It's a Tie";
  document.getElementById("header").setAttribute("class", "h1_new");
} else {
  document.getElementById("header").innerHTML = "Player 2 Wins";
  document.getElementById("header").setAttribute("class", "h1_new");
}


var dice_l = document.getElementsByClassName("dice1")[0];
var dice_r = document.getElementsByClassName("dice2")[0];

switch (score_1) {
  case 1:
    one(dice_l)
    break;
  case 2:
    two(dice_l)
    break;
  case 3:
    three(dice_l)
    break;
  case 4:
    four(dice_l)
    break;
  case 5:
    five(dice_l)
    break;
  case 6:
    six(dice_l)
    break;
  default:
    break;
}

switch (score_2) {
  case 1:
    one(dice_r)
    break;
  case 2:
    two(dice_r)
    break;
  case 3:
    three(dice_r)
    break;
  case 4:
    four(dice_r)
    break;
  case 5:
    five(dice_r)
    break;
  case 6:
    six(dice_r)
    break;
  default:
    break;
}
