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

    for (var i = 0; i < 4; i++){meteors.push(meteor)};
    
    function shipbuttL(){
      direction = -1;
    }

    function shipbuttR(){
      direction = 1;
    }

  function draw(){
    if (!isFunctionRunning) {
      return; // выходим из функции, если isFunctionRunning равна false
    }

      ctx.drawImage(bg, 0, ypos0);   ctx.drawImage(bg1, 0, ypos1);   ctx.drawImage(bg2, 0, ypos2);      shipX += direction * 2;
      ypos0 += grav;                 ypos1 += grav;                  ypos2 += grav;                     borders();

      if (ypos0 == 1024) {ypos0 = -512}; if (ypos1 == 1024) {ypos1 = -512}; if (ypos2 == 1024) {ypos2 = -512};

      
      ctx.drawImage(ship, shipX, shipY);

      for (var ind = 0; ind < 4; ind++){
        if (metYArr[ind] > 512){
          metYArr[ind] = -5;
          metXArr[ind] = randomNum(0, 450)
        }
      ctx.drawImage(meteors[ind], metXArr[ind], metYArr[ind]);}
      metYArr[0] += 3;       metYArr[1] += 3;      metYArr[2] += 3;     metYArr[3] += 3;



    requestAnimationFrame(draw)

  }
  bg2.onload = draw;
