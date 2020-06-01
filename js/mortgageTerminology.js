var play= document.getElementById("play");
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var content = document.getElementById("content");
  
    var status = 0;
    var audios = ["audio/1.ogg","audio/2.ogg","audio/3.ogg","audio/4.ogg","audio/5.ogg","audio/6.ogg","audio/7.ogg"];
    var slides = ["../img/modules/mortgageTerminology/flatVsReducing/1.png",
                    "../img/modules/mortgageTerminology/flatVsReducing/2.png",
                    "../img/modules/mortgageTerminology/flatVsReducing/3.png",
                    "../img/modules/mortgageTerminology/flatVsReducing/4.png",
                    "../img/modules/mortgageTerminology/flatVsReducing/5.png",
                    "../img/modules/mortgageTerminology/flatVsReducing/6.png",
                    "../img/modules/mortgageTerminology/flatVsReducing/7.png"];
    var currentAudioIndex = 0;
    var au = new Audio();


    function playAu(){
            au.src=audios[currentAudioIndex];
            content.setAttribute("src",slides[currentAudioIndex]);
            au.play();
            play.setAttribute("src","../img/modules/mortgageTerminology/flatVsReducing/pause.png");
    }

    function playPause(){
        if(currentAudioIndex<6){
            if(status==0){
                au2.pause();
                playAu();
                status=1;
                status2=0;
                play2.setAttribute("src","../img/modules/mortgageTerminology/flatVsReducing/play.png");
                play.setAttribute("src","../img/modules/mortgageTerminology/flatVsReducing/pause.png");
            }
            else{
                 au.pause();
                 play.setAttribute("src","../img/modules/mortgageTerminology/flatVsReducing/play.png");
                 status=0;
                }
        }
        else{
            currentAudioIndex=0;
            playAu();
        }
        
    }


    au.addEventListener("ended",function (){
     setTimeout(function(){
        nextAu();
     },500);  
    })

    function nextAu(){
        if(currentAudioIndex<6){
            currentAudioIndex++;
            playAu();      
        } 
        else{

          
            play.setAttribute("src","../img/modules/mortgageTerminology/flatVsReducing/play.png");
            alert("end");
        }
    }

    function prevAu(){
        if(currentAudioIndex>0){
            currentAudioIndex--;
            playAu();

        } 
     
     else{
            alert("end");
          
        }
    }


