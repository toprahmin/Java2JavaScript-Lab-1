" use strict ";

var display = document.getElementById("display");

function helloWorld(){
  display.innerHTML = "hello";
}

function oneToTen(){
  display.innerHTML = "oneToTen()<br>***Output***";
  for(var i = 1; i <= 10; i++){
      display.innerHTML += "<br>" + i;
  }
}

function oddNumber(){
  display.innerHTML = "OddNumbers()<br>***Output***";
  for (var i = 1; i <= 20; i+=2){
    display.innerHTML += "<br>" + i;
  }
}

function squares(){
  display.innerHTML = "squares()<br>***Output***";
  for(var i = 1; i <11;i++){
    display.innerHTML += "<br>" + i * i;
  }
}

function even(){
    display.innerHTML = "even()<br>***Output***";
    for (var i = 2; i <= 20; i+=2){
      display.innerHTML += "<br>" + i;
    }
}

function random(){
  display.innerHTML = "random()<br>***Output***";
  for(var i = 1; i<=4; i++){
    display.innerHTML += "<br>" + Math.floor(Math.random()*(i*10));
  }
}

function powers(n){
  display.innerHTML = "powers()<br>***Output***";
  for(var i = 1; i <= n ; i++){
    display.innerHTML += "<br>" + Math.pow(2,i);
  }
}

function areWeThereYet(){
  var answer = prompt("Are we there yet?");
  while(answer != "yes"){
    answer = prompt("Are we there yet?");
  }
}

function triangle(){
  var star = "";
  display.innerHTML = "triangle()<br>***Output***";
  for(var i = 0 ; i < 5; i++){
    star += "*";
    display.innerHTML += "<br>" + star;
  }
}


function tableSquare(){
  display.innerHTML = "tableSquare()<br>***Output***<br>A4x4tablesquare";
  for(var i = 1; i <=4; i++){
    display.innerHTML += "<br>" + "| ";
    for(var j = 1; j<=4; j++){
      if(j< 3){
      display.innerHTML +=  j*i + " | ";
    } else{
      display.innerHTML += j*i + " |  ";
    }
    }
  }
}

function tableSquares(n){
  display.innerHTML = "tableSquare(6)<br>***Output***<br>A6x6tablesquare";
  for(var i = 1; i<=n; i++){
    display.innerHTML += "<br>" + "| ";
    for (var j= 1; j <= n;j++) {
      if(j< 3){
      display.innerHTML +=  j*i + " | ";
    } else{
      display.innerHTML += j*i + " |  ";
    }
    }
  }
}
