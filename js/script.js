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
  var n = 8
  for(var i = 1; i < 9; i++){
    display.innerHTML += "<br>" + Math.pow(2,i);
  }
}
