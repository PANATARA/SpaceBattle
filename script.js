// http://127.0.0.1:5500/  ---- СЕРВЕР ----

let isFunctionRunning = false;
function toogleFunc(){
  if (isFunctionRunning){isFunctionRunning = false; console.log(isFunctionRunning);}
  else {isFunctionRunning = true; draw()}
}

  var cvs = document.getElementById("canvas");
  var ctx = cvs.getContext("2d");

  var bg = new Image();                   var bg1 = new Image();                    var meteor = new Image();
  bg.src = 'Images/pixel_bg.png';         bg1.src = 'Images/pixel_bg.png';          meteor.src = "Images/meteornew.png";

  var bg2 = new Image();                  var ship = new Image();
  bg2.src = 'Images/pixel_bg.png';        ship.src = 'Images/shipcool.png';

  var ypos2 = -512;         
  var ypos0 = 0;
  var ypos1 = 512;

  var shipX = 156;
  var shipY = 450;

  var grav = 1;
  var metY = 30;
  var metX = 300;
  var meteors = [];

  var direction = 0;
  var metXArr = [100, 200, 300, 350];
  var metYArr = [100, -2, -15, 0];

  function borders(){ //Границы поля для корабля
    if (shipX > 400) {shipX = 400}
    else if (shipX < 0){shipX = 0}
  }

  function randomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
