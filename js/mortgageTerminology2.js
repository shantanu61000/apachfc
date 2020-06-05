var play2= document.getElementById("play2");
var prev2 = document.getElementById("prev2");
var next2 = document.getElementById("next2");
var content2 = document.getElementById("content2");

var status2 = 0;
var audios2 = ["audio/flatandreducing/1.ogg",
                "audio/flatandreducing/2.ogg",
                "audio/flatandreducing/3.ogg",
                "audio/flatandreducing/4.ogg",
                "audio/flatandreducing/5.ogg",
                "audio/flatandreducing/6.ogg",
                "audio/flatandreducing/7.ogg",
                "audio/flatandreducing/8.ogg",
                "audio/flatandreducing/9.ogg",
                "audio/flatandreducing/10.ogg",
                "audio/flatandreducing/11.ogg",
                "audio/flatandreducing/12.ogg",
                "audio/flatandreducing/13.ogg",
                "audio/flatandreducing/14.ogg",];


var slides2 = [ "../img/modules/mortgageTerminology/flatRate/1.jpg",
                "../img/modules/mortgageTerminology/flatRate/2.jpg",
                "../img/modules/mortgageTerminology/flatRate/3.jpg",
                "../img/modules/mortgageTerminology/flatRate/4.jpg",
                "../img/modules/mortgageTerminology/flatRate/5.jpg",
                "../img/modules/mortgageTerminology/flatRate/6.jpg",
                "../img/modules/mortgageTerminology/flatRate/7.jpg",
                "../img/modules/mortgageTerminology/flatRate/8.jpg",
                "../img/modules/mortgageTerminology/flatRate/9.jpg",
                "../img/modules/mortgageTerminology/flatRate/10.jpg",
                "../img/modules/mortgageTerminology/flatRate/11.jpg",
                "../img/modules/mortgageTerminology/flatRate/12.jpg",
                "../img/modules/mortgageTerminology/flatRate/13.jpg",
                "../img/modules/mortgageTerminology/flatRate/14.jpg"];
var currentAudioIndex2 = 0;
var au2 = new Audio();


function playAu2(){
        console.log("audio index",currentAudioIndex2)
        au2.src=audios2[currentAudioIndex2];
        content2.setAttribute("src",slides2[currentAudioIndex2]);
        au2.play();
        play2.setAttribute("src","../img/modules/mortgageTerminology/flatVsReducing/pause.png");
}

function playPause2(){
    if(currentAudioIndex2 < 13){
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
    if(currentAudioIndex2<13 ){
        console.log("inside next au 2");
        currentAudioIndex2++;
        playAu2();      
    } 
    else{

        
        play.setAttribute("src","../img/modules/mortgageTerminology/flatVsReducing/play.png");
        alert("end");
    }
}

function prevAu2(){
    if(currentAudioIndex2 > 0){
        currentAudioIndex2--;
        playAu2();

    } 
 
 else{
        alert("end");
      
    }
}