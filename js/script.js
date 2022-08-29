var char = document.getElementById("char");
var block = document.getElementById("block");
var audioBgs = document.getElementById("bgs").volume = 0.1;

let audioDetect = new Audio("audio/duar.mp3");
let audioJump = new Audio("audio/jump.mp3")

function jump(){
  audioJump.play();
  if(char.classList != "animate"){
    char.classList.add("animate");
  }
  setTimeout(function() {
    char.classList.remove("animate")
  }, 550);
}

var checkDead = setInterval (function(){
  var charTop = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

  if(blockLeft < 40 && blockLeft > 20 && charTop >= 420){
    audioDetect.play();
    block.style.animation = "none";
    block.style.display = "none";
    alert("dan begitulah cerita bagaimana dinosaurus punah.", location.reload())
  }
},10)