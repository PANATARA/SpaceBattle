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

  var bg2 = new Image();               
  bg2.src = 'Images/pixel_bg.png';        

  var ship = new Image();
  ship.src = 'Images/shipcool.png';



  var ypos2 = -512;         
  var ypos0 = 0;
  var ypos1 = 512;

  var shipX = 210;
  var shipY = 800;

  var grav = 1;
  var metY = 30;
  var metX = 300;
  var meteors = [];

  var direction = 0;
  var metXArr = [50, 100, 300, 350, 75, 330];
  var metYArr = [100, -2, -15, 0, -10, 0];

  function borders(){ //Границы поля для корабля
    if (shipX > 400) {shipX = 400}
    else if (shipX < 0){shipX = 0}
  }

  function randomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Обрабатываем событие нажатия клавиш
  document.addEventListener("keydown", function(event) {
    // Проверяем, какая клавиша была нажата
    switch(event.key) {
      case "ArrowLeft": // Стрелка влево
        direction = -1;
        break;
      case "ArrowRight": // Стрелка вправо
        direction = 1;
        break;
    }});

    var n = 2;
    function easyFunc(){
      n = 2
      meteors = [];
      for (var i = 0; i < n; i++) {
        meteors.push(meteor);
      }
    }
    function mediumFunc(){
      n = 4
      meteors = [];
      for (var i = 0; i < n; i++) {
        meteors.push(meteor);
      }
    }
    function hardFunc(){
      n = 6
      meteors = [];
      for (var i = 0; i < n; i++) {
        meteors.push(meteor);
      }
    }

    for (var i = 0; i < n; i++){meteors.push(meteor)};
    
    function shipbuttL(){
      direction = -1;
    }

    function shipbuttR(){
      direction = 1;
    }
    var upbuttL = document.getElementById("leftbutt");
    var upbuttR = document.getElementById("rightbutt");

    function uprav(){
      if (upbuttL.style.display == "none"){
        upbuttL.style.display = "block";
        upbuttR.style.display = "block";
      } else {
        upbuttL.style.display = "none";
        upbuttR.style.display = "none";
      }
    }

  function draw(){
    if (!isFunctionRunning) {
      return; // выходим из функции, если isFunctionRunning равна false
    }

      ctx.drawImage(bg, 0, ypos0);   ctx.drawImage(bg1, 0, ypos1);   ctx.drawImage(bg2, 0, ypos2);      shipX += direction * 2;
      ypos0 += grav;                 ypos1 += grav;                  ypos2 += grav;                     borders();

      if (ypos0 == 1024) {ypos0 = -512}; if (ypos1 == 1024) {ypos1 = -512}; if (ypos2 == 1024) {ypos2 = -512};

      
      ctx.drawImage(ship, shipX, shipY);

      for (var ind = 0; ind < n; ind++){
        if (metYArr[ind] > 1000){
          metYArr[ind] = -50;
          metXArr[ind] = randomNum(0, 450)
        }
      ctx.drawImage(meteors[ind], metXArr[ind], metYArr[ind]);}
      metYArr[0] += 3;       metYArr[1] += 4;      metYArr[2] += 3;     metYArr[3] += 5;     metYArr[4] += 3;    metYArr[5] += 4 


      for (var m = 0; m < n; m++){
        if ((metXArr[m] >= shipX - 25 && metXArr[m] <= shipX + 25) && (metYArr[m] >= shipY - 25 && metYArr[m] <= shipY + 25)){
          isFunctionRunning = false;
        }
      }

      requestAnimationFrame(draw)

  }
  bg2.onload = draw;
