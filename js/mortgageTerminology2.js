var play2= document.getElementById("play2");
var prev2 = document.getElementById("prev2");
var next2 = document.getElementById("next2");
var content2 = document.getElementById("content2");

var status2 = 0;
var audios2 = ["audio/1.ogg","audio/2.ogg","audio/3.ogg","audio/4.ogg","audio/5.ogg","audio/6.ogg","audio/7.ogg"];
var slides2 = ["../img/modules/mortgageTerminology/flatRate/2.png",
                "../img/modules/mortgageTerminology/flatRate/3.png",
                "../img/modules/mortgageTerminology/flatRate/4.png",
                "../img/modules/mortgageTerminology/flatRate/5.png",
                "../img/modules/mortgageTerminology/flatRate/6.png",
                "../img/modules/mortgageTerminology/flatRate/7.png",
                "../img/modules/mortgageTerminology/flatRate/8.png"];
var currentAudioIndex2 = 0;
var au2 = new Audio();


function playAu2(){
        au2.src=audios2[currentAudioIndex2];
        content2.setAttribute("src",slides2[currentAudioIndex2]);
        au2.play();
        play2.setAttribute("src","../img/modules/mortgageTerminology/flatVsReducing/pause.png");
}

function playPause2(){
    if(currentAudioIndex2<6){
        if(status2==0){
            au.pause();
            playAu2();
            status2=1;
            status1=0;
            play.setAttribute("src","../img/modules/mortgageTerminology/flatVsReducing/play.png");
            play2.setAttribute("src","../img/modules/mortgageTerminology/flatVsReducing/pause.png");
        }
        else{
             au2.pause();
             play2.setAttribute("src","../img/modules/mortgageTerminology/flatVsReducing/play.png");
             status2=0;
            }
    }
    else{
        currentAudioIndex2=0;
        playAu2();
    }
    
}


au2.addEventListener("ended",function (){
 setTimeout(function(){
    nextAu2();
 },500);  
})

function nextAu2(){
    if(currentAudioIndex2<6){
        currentAudioIndex2++;
        playAu2();      
    } 
    else{

      
        play.setAttribute("src","../img/modules/mortgageTerminology/flatVsReducing/play.png");
        alert("end");
    }
}

function prevAu2(){
    if(currentAudioIndex2>0){
        currentAudioIndex2--;
        playAu2();

    } 
 
 else{
        alert("end");
      
    }
}