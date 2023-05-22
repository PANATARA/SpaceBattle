// http://127.0.0.1:5500/  ---- СЕРВЕР ----
let isFunctionRunning = false;
function toogleFunc(){
  if (isFunctionRunning){isFunctionRunning = false; console.log(isFunctionRunning);}
  else {isFunctionRunning = true; draw()}
}

  var cvs = document.getElementById("canvas");
  var ctx = cvs.getContext("2d");

  var bg = new Image();                            
  bg.src = 'Imagescat/IMG_1243 (1).JPG'; 

  var meteor = new Image();  
  meteor.src = "Imagescat/bulka.png";
        
  var ship = new Image();
  ship.src = 'Imagescat/imgonline-com-ua-Resize-duim7GSKxFR.png';

  var startgame = document.getElementById("startgame");

  var shipX = 210;
  var shipY = 800;

  var grav = 1;
  var metY = 30;
  var metX = 300;
  var meteors = [];

  var direction = 0;
  var metXArr = [50, 100, 300, 350, 75, 330];
  var metYArr = [100, -2, -15, 0, -10, 0];

  var countbulki = 0;

  function borders(){ //Границы поля для корабля
    if (shipX > 400) {shipX = 400}
    else if (shipX < 0){shipX = 0}
  }

  function randomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  document.addEventListener("keydown", function(event) {
    switch(event.key) {
      case "ArrowLeft": 
        direction = -1;
        break;
      case "ArrowRight":
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

    var defeat = document.getElementById("defeat");
    var menu = document.getElementById("menuu");

    function reload(){
      location.reload()
    }


    function start(){
      menu.style.display = "flex";
      startgame.style.display = "none";
      isFunctionRunning = true; 
      draw();
      defeat.style.display= "none";
    }
    var countbu = document.getElementById("countBulka");

  function draw(){
    if (!isFunctionRunning) {
      return; // выходим из функции, если isFunctionRunning равна false
    }
      ctx.drawImage(bg, 0, 0);  
      shipX += direction * 4;
      borders();
      ctx.drawImage(ship, shipX, shipY);

      for (var ind = 0; ind < n; ind++){
        if (metYArr[ind] > 1000){
          metYArr[ind] = -50;
          metXArr[ind] = randomNum(0, 450)
        }
      ctx.drawImage(meteors[ind], metXArr[ind], metYArr[ind]);}
      metYArr[0] += 3;       metYArr[1] += 4;      metYArr[2] += 3;     metYArr[3] += 5;     metYArr[4] += 3;    metYArr[5] += 4 

      for (var m = 0; m < n; m++){
        if ((metXArr[m] >= shipX - 45 && metXArr[m] <= shipX + 45) && (metYArr[m] >= shipY - 55 && metYArr[m] <= shipY + 95)){         
            metYArr[m] = -50;
            metXArr[m] = randomNum(0, 450);            
            ctx.drawImage(meteors[m], metXArr[m], metYArr[m]);
            countbulki++;
            countbu.textContent = countbulki;   
        }
      }
      requestAnimationFrame(draw)
  }
  bg2.onload = draw;
