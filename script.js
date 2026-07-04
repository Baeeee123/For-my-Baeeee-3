function openLetter(){
  document.getElementById("letterPopup").style.display="block";
}

function closeLetter(){
  document.getElementById("letterPopup").style.display="none";
}

let music=document.getElementById("bgMusic");
let btn=document.getElementById("musicBtn");

btn.onclick=function(){
  if(music.paused){
    music.play();
  } else {
    music.pause();
  }
}